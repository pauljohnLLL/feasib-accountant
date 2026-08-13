import { createContext, useContext, useState, type ReactNode, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export interface Message {
  id: number
  sender: 'user' | 'consultant'
  name: string
  text: string
  time: string
}

interface ChatContextType {
  messages: Message[]
  sendMessage: (sender: 'user' | 'consultant', name: string, text: string) => Promise<void>
}

const ChatContext = createContext<ChatContextType | undefined>(undefined)

export function ChatProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
   
    const fetchMessages = async () => {
      const { data } = await supabase.from('messages').select('*').order('created_at', { ascending: true })
      if (data) {
        const formatted: Message[] = data.map((m: any) => ({
          id: m.id,
          sender: (m.sender_role === 'client' ? 'user' : 'consultant') as 'user' | 'consultant',
          name: m.sender_role === 'client' ? 'Juan Dela Cruz' : 'Maria Santos',
          text: m.content,
          time: new Date(m.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }))
        setMessages(formatted)
      }
    }
    fetchMessages()

  
    const channel = supabase.channel('messages_channel')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, (payload) => {
        const newRecord = payload.new
        const newMessage: Message = {
          id: newRecord.id,
          sender: (newRecord.sender_role === 'client' ? 'user' : 'consultant') as 'user' | 'consultant',
          name: newRecord.sender_role === 'client' ? 'Juan Dela Cruz' : 'Maria Santos',
          text: newRecord.content,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
        setMessages((prev) => [...prev, newMessage])
      })
      .subscribe()

    return () => { supabase.removeChannel(channel) }
  }, [])

  const sendMessage = async (sender: 'user' | 'consultant', name: string, text: string) => {
    await supabase.from('messages').insert([
      { 
        sender_role: sender === 'user' ? 'client' : 'admin', 
        content: text 
      }
    ])
  }

  return (
    <ChatContext.Provider value={{ messages, sendMessage }}>
      {children}
    </ChatContext.Provider>
  )
}

export function useChat() {
  const context = useContext(ChatContext)
  if (!context) throw new Error('useChat must be used within a ChatProvider')
  return context
}