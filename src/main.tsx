import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/index.css";
import App from './app/App.tsx'
import { ChatProvider } from './features/ChatContext.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChatProvider>
        <App />
      </ChatProvider>
    </QueryClientProvider>
  </StrictMode>
)
