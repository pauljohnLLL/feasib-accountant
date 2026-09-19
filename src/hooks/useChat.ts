import { useContext } from 'react';
import { ChatContext } from '../features/ChatContext';

export function useChat() {
  const context = useContext(ChatContext);
  if (!context) throw new Error('useChat must be used within a ChatProvider');
  return context;
}

