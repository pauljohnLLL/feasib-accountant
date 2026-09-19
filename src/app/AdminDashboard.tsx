import { useState } from 'react';
import { LayoutDashboard, MessageSquare, ShoppingBag, Briefcase, FileText, Users, Calendar, Star, LogOut, ChevronLeft, Search } from 'lucide-react';
import { useChat } from '../features/ChatContext'

export default function AdminDashboard({ onSignOut }: { onSignOut?: () => void }) {
  const [activeTab, setActiveTab] = useState('Messages');
  const { messages, sendMessage } = useChat()
  const [chatInput, setChatInput] = useState('')
  const [openThread, setOpenThread] = useState<string | null>(null)

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!chatInput.trim()) return
    sendMessage('consultant', chatInput)
    setChatInput('')
  }

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Messages', icon: MessageSquare },
    { name: 'Orders', icon: ShoppingBag },
    { name: 'Services', icon: Briefcase },
    { name: 'CMS & Resources', icon: FileText },
    { name: 'Employees & Security', icon: Users },
    { name: 'Booking Module', icon: Calendar },
    { name: 'Reviews', icon: Star },
  ];

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900 font-sans">

      <aside className="w-64 bg-[#0B2F1D] text-white flex flex-col justify-between p-4">
        <div>
          <div className="flex items-center justify-between mb-8 px-2">
            <h1 className="font-bold text-lg">FeasibAccountant</h1>
            <ChevronLeft size={20} />
          </div>
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={`flex items-center gap-3 w-full p-3 rounded-lg text-sm transition-colors ${
                  activeTab === item.name ? 'bg-[#205A3E]' : 'hover:bg-[#205A3E]/50'
                }`}
              >
                <item.icon size={18} />
                {item.name}
              </button>
            ))}
          </nav>
        </div>
        <button
          onClick={onSignOut}
          className="flex items-center gap-3 p-3 text-sm hover:bg-[#205A3E]/50 rounded-lg"
        >
          <LogOut size={18} /> Sign Out
        </button>
      </aside>

      
      <main className="flex-1 flex border-l border-gray-200 bg-white">
        {/* Chat List */}
        <div className="w-80 border-r border-gray-100 p-4">
          <h2 className="text-xl font-bold mb-4">Messages</h2>
          <div className="relative mb-4">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
            <input type="text" placeholder="Search consultants..." className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm" />
          </div>
          
          <div className="space-y-1">
             <ChatUser name="Maria Santos" msg="I will complete the financial..." time="2m ago" badge="2" active={openThread === 'Maria Santos'} onClick={() => setOpenThread('Maria Santos')} />
             <ChatUser name="Alex Chen" msg="The tax documents have been re..." time="15m ago" active={openThread === 'Alex Chen'} onClick={() => setOpenThread('Alex Chen')} />
             <ChatUser name="David Kim" msg="Can we schedule a call to di..." time="1h ago" badge="1" active={openThread === 'David Kim'} onClick={() => setOpenThread('David Kim')} />
          </div>
        </div>

        
        {openThread ? (
          <div className="flex-1 flex flex-col min-h-0">
            <div className="px-6 py-3 border-b border-gray-100 flex items-center gap-3 shrink-0">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center font-bold text-emerald-800 text-xs">
                {openThread.split(' ').map((n) => n[0]).join('')}
              </div>
              <p className="text-sm font-bold text-gray-900">{openThread}</p>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4 flex flex-col">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`max-w-[55%] rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                    msg.sender === 'consultant'
                      ? 'bg-emerald-600 text-white self-end rounded-tr-none shadow-sm'
                      : 'bg-gray-100 text-gray-700 self-start rounded-tl-none border border-gray-200'
                  }`}
                >
                  <p className="break-words">{msg.text}</p>
                  <span className={`text-[8px] block mt-1 opacity-60 text-right ${msg.sender === 'consultant' ? 'text-white' : 'text-gray-400'}`}>
                    {msg.time}
                  </span>
                </div>
              ))}
            </div>

            <form onSubmit={handleSend} className="p-4 border-t border-gray-100 flex items-center gap-2 shrink-0">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-gray-700 outline-none focus:border-emerald-500 transition-colors"
              />
              <button type="submit" className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 h-9 rounded-lg font-bold text-xs transition-colors shrink-0">
                Send
              </button>
            </form>
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
            <div className="p-4 bg-emerald-50 text-emerald-500 rounded-full mb-4">
              <MessageSquare size={32} />
            </div>
            <h3 className="text-gray-900 font-bold text-lg">Select a conversation</h3>
            <p className="text-sm">Choose a consultant from the list to start messaging</p>
          </div>
        )}
      </main>
    </div>
  );
}

interface ChatUserProps {
  name: string;
  msg: string;
  time: string;
  badge?: string | number;
  active: boolean;
  onClick: () => void;
}

function ChatUser({ name, msg, time, badge, active, onClick }: ChatUserProps) {
  return (
    <div onClick={onClick} className={`p-3 rounded-lg flex justify-between items-center cursor-pointer ${active ? 'bg-green-50' : 'hover:bg-gray-50'}`}>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center font-bold text-emerald-800 text-sm">
          {name.split(' ').map((n: string) => n[0]).join('')}
        </div>
        <div>
          <p className="text-sm font-bold text-gray-900">{name}</p>
          <p className="text-xs text-gray-500 truncate w-40">{msg}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-[10px] text-gray-400 mb-1">{time}</p>
        {badge && <span className="bg-emerald-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">{badge}</span>}
      </div>
    </div>
  );
}