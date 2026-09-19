import { useState } from 'react'
import { useLedgerEntries } from '../services/queries';
import type { LedgerEntry } from '../types'; 
import { useChat } from '../features/ChatContext'
import {
  LayoutDashboard, MessageSquare, Wallet, BookOpen, Home, LogOut,
  Search, ChevronLeft, Sparkles, Plus, Paperclip, Send, Clock,
  FolderOpen, CheckCircle2, Star, ArrowRight
} from 'lucide-react'

interface ClientDashboardProps {
  onBack: () => void
}

type TabType = 'projects' | 'messages' | 'payments' | 'resources';
type ProjectSubTab = 'chat' | 'vault' | 'history';

export default function ClientDashboard({ onBack }: ClientDashboardProps) {
  
  const [activeTab, setActiveTab] = useState<TabType>('projects')
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [activeSubTab, setActiveSubTab] = useState<ProjectSubTab>('chat')
  const { data: ledgerData, isLoading, error } = useLedgerEntries();


  const { messages: projectMessages, sendMessage } = useChat()
  const [projectInput, setProjectProjectInput] = useState('')

  const handleSendProjectMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!projectInput.trim()) return

    sendMessage('user', projectInput)
    setProjectProjectInput('')
  }

  return (
    
    <div className="flex h-screen bg-gray-50 text-gray-900 font-sans overflow-hidden w-full">
      
      
      <aside className="w-64 bg-[#0B2F1D] flex flex-col justify-between p-4 shrink-0 h-full z-10">
        <div className="space-y-6">
          
          
          <div className="flex items-center gap-3 px-2 pt-2">
            <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
              JD
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-bold text-sm text-white tracking-tight leading-none truncate">Juan Dela Cruz</span>
              <span className="text-[10px] text-emerald-400 bg-emerald-400/10 border border-emerald-400/30 rounded-md px-1.5 py-0.5 mt-1 self-start font-medium">
                Registered
              </span>
            </div>
          </div>

        
          <div className="relative px-2">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" size={14} />
            <input 
              type="text" 
              placeholder="Search projects by name or ID.." 
              className="w-full bg-black/20 text-xs text-slate-200 pl-8 pr-3 py-2 rounded-lg outline-none placeholder-slate-500 border border-white/5 focus:border-emerald-500/40"
            />
          </div>

         
          <nav className="space-y-1 px-1">
            <button 
              onClick={() => { setActiveTab('projects'); setSelectedProject(null); }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-left ${
                activeTab === 'projects' 
                  ? 'bg-[#205A3E] text-white shadow-md' 
                  : 'text-slate-300 hover:bg-[#205A3E]/50 hover:text-white'
              }`}
            >
              <LayoutDashboard size={16} /> My Projects
            </button>

            <button 
              onClick={() => { setActiveTab('messages'); setSelectedProject(null); }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-left ${
                activeTab === 'messages' 
                  ? 'bg-[#205A3E] text-white shadow-md' 
                  : 'text-slate-300 hover:bg-[#205A3E]/50 hover:text-white'
              }`}
            >
              <span className="relative">
                <MessageSquare size={16} />
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-[8px] text-white rounded-full w-3.5 h-3.5 flex items-center justify-center font-bold">1</span>
              </span> 
              Messages (Global)
            </button>

            <button 
              onClick={() => { setActiveTab('payments'); setSelectedProject(null); }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-left ${
                activeTab === 'payments' ? 'bg-[#205A3E] text-white' : 'text-slate-300 hover:bg-[#205A3E]/50 hover:text-white'
              }`}
            >
              <Wallet size={16} /> Payment History
            </button>

            <button 
              onClick={() => { setActiveTab('resources'); setSelectedProject(null); }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-left ${
                activeTab === 'resources' ? 'bg-[#205A3E] text-white' : 'text-slate-300 hover:bg-[#205A3E]/50 hover:text-white'
              }`}
            >
              <BookOpen size={16} /> Resource Library
            </button>
          </nav>
        </div>

        
        <div className="space-y-2 px-1">
          <button onClick={onBack} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-slate-400 hover:bg-[#205A3E]/50 hover:text-white transition-all text-left">
            <Home size={16} /> Exit to Website
          </button>
          <button onClick={onBack} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-slate-400 hover:bg-red-950/40 hover:text-red-400 transition-all text-left border-t border-white/10 pt-3">
            <LogOut size={16} /> Logout
          </button>
        </div>
      </aside>

      
      <main className="flex-1 flex flex-col overflow-hidden relative bg-gray-50">
        
        {activeTab === 'projects' && !selectedProject && (
         
          <div className="flex-1 p-8 overflow-y-auto space-y-6">
            <div>
              <h1 className="text-2xl font-black text-gray-900 tracking-tight">My Projects</h1>
              <p className="text-xs font-bold text-gray-400 mt-0.5">4 projects found</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
              
              
              <div 
                onClick={() => setSelectedProject('coffee-shop')}
                className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between h-52 cursor-pointer hover:border-emerald-500/40 transition-all group hover:shadow-md"
              >
                <div className="space-y-1">
                  <h3 className="font-bold text-sm text-gray-900 leading-tight group-hover:text-emerald-600 transition-colors">Coffee Shop Financials</h3>
                  <p className="text-[11px] font-bold text-gray-400">Financial Statements</p>
                </div>
                <div className="space-y-3">
                  <span className="inline-block text-[9px] font-black tracking-wide text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-md uppercase">
                     In Progress
                  </span>
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-black text-gray-400">
                      <span>Progress</span>
                      <span className="text-gray-700">65%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-600 h-full w-[65%] rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-2 text-[10px] font-bold text-gray-400 flex justify-between items-center">
                  <div>Phase 3 of 5 <br /><span className="text-emerald-600">Consultant: Maria Santos</span></div>
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-emerald-600" />
                </div>
              </div>

           
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between h-52 opacity-85">
                <div className="space-y-1">
                  <h3 className="font-bold text-sm text-gray-900 leading-tight">Tech Startup Feasib Study</h3>
                  <p className="text-[11px] font-bold text-gray-400">Feasib Assistance</p>
                </div>
                <div className="space-y-3">
                  <span className="inline-block text-[9px] font-black tracking-wide text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md uppercase border border-amber-100">
                     Waiting for Payment
                  </span>
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-black text-gray-400">
                      <span>Progress</span>
                      <span className="text-gray-700">0%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-gray-300 h-full w-[0%] rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-50 pt-2 text-[10px] font-bold text-gray-400">-</div>
              </div>

            
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between h-52 opacity-85">
                <div className="space-y-1">
                  <h3 className="font-bold text-sm text-gray-900 leading-tight">Restaurant Market Survey</h3>
                  <p className="text-[11px] font-bold text-gray-400">Market Surveys</p>
                </div>
                <div className="space-y-3">
                  <span className="inline-flex items-center gap-1 text-[9px] font-black tracking-wide text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md uppercase border border-blue-100">
                    <CheckCircle2 size={11} /> Finished
                  </span>
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-black text-gray-400">
                      <span>Progress</span>
                      <span className="text-gray-700">100%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-600 h-full w-[100%] rounded-full"></div>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-emerald-50 text-emerald-700 text-[11px] font-black py-2 rounded-xl border border-emerald-100 flex items-center justify-center gap-1.5">
                  <Star size={12} /> Write a Review
                </button>
              </div>

              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between h-52 opacity-85">
                <div className="space-y-1">
                  <h3 className="font-bold text-sm text-gray-900 leading-tight">Retail Store Analysis</h3>
                  <p className="text-[11px] font-bold text-gray-400">Technical Review</p>
                </div>
                <div className="space-y-3">
                  <span className="inline-block text-[9px] font-black tracking-wide text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-md uppercase">
                     In Progress
                  </span>
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-black text-gray-400">
                      <span>Progress</span>
                      <span className="text-gray-700">40%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-600 h-full w-[40%] rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-50 pt-2 text-[10px] font-bold text-gray-400">Phase 2 of 5 <br /><span className="text-emerald-600">Consultant: Ana Cruz</span></div>
              </div>

            </div>

           
            <div className="absolute bottom-6 right-6 flex items-center gap-3">
              <button className="w-12 h-12 rounded-full bg-[#0B2F1D] text-white flex items-center justify-center shadow-lg hover:bg-[#0B2F1D]/90 transition-colors">
                <Sparkles size={20} />
              </button>
              <button className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg hover:bg-emerald-500 transition-colors">
                <Plus size={22} />
              </button>
            </div>
          </div>
        )}

        {activeTab === 'projects' && selectedProject === 'coffee-shop' && (
         
          <div className="flex-1 flex flex-col h-full bg-white overflow-hidden">
            
            
            <div className="bg-white px-6 py-4 border-b border-gray-100 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="flex items-center gap-1 text-xs font-bold text-gray-400 hover:text-gray-700 transition-colors"
                >
                  <ChevronLeft size={16} /> Back to Projects
                </button>
                <div className="h-4 w-[1px] bg-gray-200"></div>
                <div>
                  <h2 className="text-base font-black text-gray-900 leading-none">Coffee Shop Financials</h2>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="text-[9px] font-extrabold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded uppercase tracking-wide">
                      Financial Statements
                    </span>
                    <span className="text-[10px] font-bold text-gray-400">Phase 3 of 5</span>
                  </div>
                </div>
              </div>

              
              <div className="flex items-center gap-2.5">
                <div className="text-right">
                  <p className="text-xs font-black text-gray-900 leading-none">Maria Santos</p>
                  <p className="text-[10px] font-bold text-gray-400 mt-1">Senior Consultant</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-black text-xs">
                  MS
                </div>
              </div>
            </div>

            
            <div className="bg-white px-12 py-5 border-b border-gray-100 shrink-0">
              <div className="relative flex items-center justify-between w-full max-w-4xl mx-auto">
                
                <div className="absolute left-0 right-0 h-[3px] bg-gray-100 top-4 -z-0"></div>
                <div className="absolute left-0 w-1/2 h-[3px] bg-emerald-600 top-4 -z-0"></div>

                
                <div className="flex flex-col items-center relative z-10 text-center">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-sm">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 mt-2">Initial Review</span>
                </div>

              
                <div className="flex flex-col items-center relative z-10 text-center">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-sm">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 mt-2">Data Input</span>
                </div>

                
                <div className="flex flex-col items-center relative z-10 text-center">
                  <div className="w-8 h-8 rounded-full bg-white text-emerald-600 border-2 border-emerald-600 flex items-center justify-center shadow-sm animate-pulse">
                    <Clock size={14} />
                  </div>
                  <span className="text-[10px] font-black text-emerald-600 mt-2">AI Processing</span>
                </div>

                
                <div className="flex flex-col items-center relative z-10 text-center">
                  <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center text-xs font-bold">4</div>
                  <span className="text-[10px] font-bold text-gray-400 mt-2">Consultant Review</span>
                </div>

                
                <div className="flex flex-col items-center relative z-10 text-center">
                  <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center text-xs font-bold">5</div>
                  <span className="text-[10px] font-bold text-gray-400 mt-2">Final Output</span>
                </div>
              </div>
            </div>

            
            <div className="bg-gray-50 border-b border-gray-100 flex items-center justify-center gap-8 py-2.5 shrink-0 text-xs font-bold">
              <button 
                onClick={() => setActiveSubTab('chat')}
                className={`pb-1.5 pt-1 border-b-2 flex items-center gap-1.5 transition-all ${
                  activeSubTab === 'chat' ? 'border-gray-900 text-gray-900' : 'border-transparent text-gray-400 hover:text-gray-600'
                }`}
              >
                 Workspace Chat
              </button>
              <button 
                onClick={() => setActiveSubTab('vault')}
                className={`pb-1.5 pt-1 border-b-2 flex items-center gap-1.5 transition-all ${
                  activeSubTab === 'vault' ? 'border-gray-900 text-gray-900' : 'border-transparent text-gray-400 hover:text-gray-600'
                }`}
              >
                 Document Vault
              </button>
              <button 
                onClick={() => setActiveSubTab('history')}
                className={`pb-1.5 pt-1 border-b-2 flex items-center gap-1.5 transition-all ${
                  activeSubTab === 'history' ? 'border-gray-900 text-gray-900' : 'border-transparent text-gray-400 hover:text-gray-600'
                }`}
              >
                 Activity History
              </button>
            </div>

            
            <div className="flex-1 flex flex-col min-h-0 bg-white relative">
              {activeSubTab === 'chat' && (
                <>
                  
                  <div className="px-8 py-3 bg-white border-b border-gray-100/60 flex items-center gap-3 shrink-0">
                    <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center text-[11px] font-bold text-emerald-800">MS</div>
                    <div>
                      <p className="text-xs font-black text-gray-900 leading-tight">Project Chat with Maria</p>
                      <p className="text-[10px] text-gray-400 mt-0.5">Messages are specific to this project only</p>
                    </div>
                  </div>

                 
                  <div className="flex-1 overflow-y-auto px-8 py-6 space-y-4 flex flex-col min-h-0 bg-white">
                    {projectMessages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`max-w-[55%] rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                          msg.sender === 'user'
                            ? 'bg-emerald-600 text-white self-end rounded-tr-none shadow-sm'
                            : 'bg-gray-100 text-gray-700 self-start rounded-tl-none border border-gray-100'
                        }`}
                      >
                        <p className="break-words">{msg.text}</p>
                        <span className={`text-[8px] block mt-1 opacity-60 text-right ${msg.sender === 'user' ? 'text-white' : 'text-gray-400'}`}>
                          {msg.time}
                        </span>
                      </div>
                    ))}
                  </div>

                  
                  <form onSubmit={handleSendProjectMessage} className="p-4 bg-white border-t border-gray-100 flex items-center gap-3 shrink-0">
                    <div className="w-full max-w-6xl mx-auto flex items-center gap-2 bg-gray-50 border border-gray-200/80 rounded-xl px-4 py-2.5">
                      <button type="button" className="text-gray-400 hover:text-gray-600 shrink-0">
                        <Paperclip size={16} />
                      </button>
                      <input 
                        type="text" 
                        value={projectInput}
                        onChange={(e) => setProjectProjectInput(e.target.value)}
                        placeholder="Type a message..." 
                        className="flex-1 bg-transparent border-none text-xs text-gray-700 outline-none placeholder-gray-400"
                      />
                      <button type="submit" className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 h-8 rounded-lg font-bold text-xs transition-colors shrink-0 flex items-center gap-1.5">
                        <Send size={13} /> Send
                      </button>
                    </div>
                  </form>
                </>
              )}

              {activeSubTab === 'vault' && (
                <div className="flex-1 flex flex-col items-center justify-center text-gray-400 text-xs gap-2 bg-white">
                  <FolderOpen size={28} className="text-gray-300" />
                  Shared File Explorer &amp; Feasibility Documents Vault is empty.
                </div>
              )}

              {activeSubTab === 'history' && (
                <div className="flex-1 flex flex-col items-center justify-center text-gray-400 text-xs gap-2 bg-white">
                  <Clock size={28} className="text-gray-300" />
                  Audit Logs &amp; Analytics Pipeline updates history.
                </div>
              )}

              
              <div className="absolute bottom-16 right-6 z-20">
                <button className="w-11 h-11 rounded-full bg-[#0B2F1D] text-white flex items-center justify-center shadow-md hover:bg-[#0B2F1D]/90 transition-colors">
                  <Sparkles size={18} />
                </button>
              </div>
            </div>

          </div>
        )}

        
        {activeTab === 'messages' && (
          <div className="flex-1 flex flex-col items-center justify-center text-gray-400 text-xs gap-2">
            <MessageSquare size={28} className="text-gray-300" />
            Global Center chat hub overview screen panel.
          </div>
        )}

        
        {activeTab === 'payments' && (
  <div className="flex-1 p-10 overflow-y-auto bg-white">
    <h2 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
      <Wallet size={20} className="text-emerald-600" /> Payment History
    </h2>
    
    {isLoading && <p className="text-xs text-gray-400">Loading your transactions...</p>}
    {error && <p className="text-xs text-red-500">Error loading data.</p>}
    
    <div className="grid gap-3">
      {ledgerData?.map((entry: LedgerEntry) => (
        <div key={entry.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl bg-gray-50">
          <div>
            <p className="font-bold text-sm text-gray-900">{entry.description}</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest">{entry.type} • {entry.date}</p>
          </div>
          <div className="font-black text-gray-900">₱{entry.amount}</div>
        </div>
      ))}
    </div>
  </div>
)}

{activeTab === 'resources' && (
  <div className="flex-1 flex flex-col items-center justify-center text-gray-400 text-xs font-medium gap-2">
    <BookOpen size={28} className="text-gray-300" />
    This module panel area is under building construction.
  </div>
)}

      </main>
    </div>
  )
}