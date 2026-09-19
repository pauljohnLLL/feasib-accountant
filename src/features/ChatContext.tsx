/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, type ReactNode, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { SupabaseMessageRow } from '../types/index.d';

/** UI-facing message shape used inside the app */
export interface ChatMessage {
  id: number;
  sender: 'user' | 'consultant';
  name: string;
  text: string;
  time: string;
}

interface ChatContextType {
  messages: ChatMessage[];
  /** sender: who is sending — 'user' (client) or 'consultant' (admin) */
  sendMessage: (sender: 'user' | 'consultant', text: string) => Promise<void>;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

function formatRow(m: SupabaseMessageRow): ChatMessage {
  return {
    id: m.id,
    sender: m.sender_role === 'client' ? 'user' : 'consultant',
    name: m.sender_role === 'client' ? 'Juan Dela Cruz' : 'Maria Santos',
    text: m.content,
    time: new Date(m.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  };
}

export function ChatProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const { data } = await supabase
        .from('messages')
        .select('*')
        .order('created_at', { ascending: true });
      if (data) {
        setMessages((data as SupabaseMessageRow[]).map(formatRow));
      }
    };
    fetchMessages();

    const channel = supabase
      .channel('messages_channel')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'messages' },
        (payload) => {
          const row = payload.new as SupabaseMessageRow;
          setMessages((prev) => [
            ...prev,
            {
              id: row.id,
              sender: row.sender_role === 'client' ? 'user' : 'consultant',
              name: row.sender_role === 'client' ? 'Juan Dela Cruz' : 'Maria Santos',
              text: row.content,
              time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            },
          ]);
        },
      )
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, []);

  const sendMessage = async (sender: 'user' | 'consultant', text: string) => {
    await supabase.from('messages').insert([
      {
        sender_role: sender === 'user' ? 'client' : 'admin',
        content: text,
      },
    ]);
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
}

export { ChatContext };
export { useChat } from '../hooks/useChat';