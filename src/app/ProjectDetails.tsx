import { useState } from 'react'
import { useChat } from '../features/ChatContext'

export default function ProjectDetail({ currentRole }: { currentRole: 'client' | 'admin' }) {
  const { messages, sendMessage } = useChat()
  const [activeTab, setActiveTab] = useState<'chat' | 'vault' | 'history'>('chat')
  const [chatInput, setChatInput] = useState('')

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!chatInput.trim()) return

    if (currentRole === 'client') {
      sendMessage('user', chatInput)
    } else {
      sendMessage('consultant', chatInput)
    }
    setChatInput('')
  }

  return (
    <div className="flex-1 flex flex-col bg-white min-w-0">
      
    
      <header className="h-16 border-b border-slate-100 flex items-center justify-between px-6 shrink-0 bg-white">
        <div className="flex items-center gap-3">
          <button className="text-xs text-slate-400 hover:text-slate-600 font-medium flex items-center gap-1">
            ← Back to Projects
          </button>
          <div className="h-4 w-px bg-slate-200"></div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-bold text-slate-800">Coffee Shop Financials</h2>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded uppercase tracking-wide">
                Financial Statements
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mt-0.5">Phase 3 of 5</p>
          </div>
        </div>
        
       
        <div className="flex items-center gap-2">
          <div className="text-right">
            <p className="text-xs font-bold text-slate-700">Maria Santos</p>
            <p className="text-[10px] text-slate-400">Senior Consultant</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center">
            MS
          </div>
        </div>
      </header>

     
      <div className="bg-white border-b border-slate-100 py-4 px-12 shrink-0 select-none">
        <div className="max-w-4xl mx-auto flex items-center justify-between relative">
        
          <div className="absolute top-3.5 left-0 right-0 h-[2px] bg-emerald-500 z-0"></div>
          
       
          <div className="flex flex-col items-center z-10 bg-white px-2">
            <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold shadow-sm">✓</div>
            <span className="text-[9px] font-medium text-slate-400 mt-1">Initial Review</span>
          </div>
        
          <div className="flex flex-col items-center z-10 bg-white px-2">
            <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold shadow-sm">✓</div>
            <span className="text-[9px] font-medium text-slate-400 mt-1">Data Input</span>
          </div>
          
          <div className="flex flex-col items-center z-10 bg-white px-2">
            <div className="w-7 h-7 rounded-full bg-white border-2 border-emerald-500 text-emerald-600 flex items-center justify-center text-xs font-bold shadow-sm animate-pulse">🕒</div>
            <span className="text-[9px] font-bold text-emerald-600 mt-1">AI Processing</span>
          </div>
         
          <div className="flex flex-col items-center z-10 bg-white px-2 opacity-40">
            <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center text-xs font-bold">4</div>
            <span className="text-[9px] font-medium text-slate-400 mt-1">Consultant Review</span>
          </div>
          
          <div className="flex flex-col items-center z-10 bg-white px-2 opacity-40">
            <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center text-xs font-bold">5</div>
            <span className="text-[9px] font-medium text-slate-400 mt-1">Final Output</span>
          </div>
        </div>
      </div>

     
      <div className="h-11 border-b border-slate-100 bg-slate-50/60 flex items-center px-6 gap-6 text-xs font-medium shrink-0">
        <button 
          onClick={() => setActiveTab('chat')}
          className={`h-full px-1 flex items-center gap-1.5 transition-all ${activeTab === 'chat' ? 'text-emerald-600 border-b-2 border-emerald-500 font-bold' : 'text-slate-400 hover:text-slate-600'}`}
        >
           Workspace Chat
        </button>
        <button 
          onClick={() => setActiveTab('vault')}
          className={`h-full px-1 flex items-center gap-1.5 transition-all ${activeTab === 'vault' ? 'text-emerald-600 border-b-2 border-emerald-500 font-bold' : 'text-slate-400 hover:text-slate-600'}`}
        >
           Document Vault
        </button>
        <button 
          onClick={() => setActiveTab('history')}
          className={`h-full px-1 flex items-center gap-1.5 transition-all ${activeTab === 'history' ? 'text-emerald-600 border-b-2 border-emerald-500 font-bold' : 'text-slate-400 hover:text-slate-600'}`}
        >
           Activity History
        </button>
      </div>

      
      <div className="flex-1 overflow-y-auto bg-white">
        
       
        {activeTab === 'chat' && (
          <div className="p-6 flex flex-col h-full justify-between">
            <div className="space-y-4 flex-1 overflow-y-auto pr-1">
              <div className="text-center mb-4">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-full">
                  Project Chat with Maria
                </span>
                <p className="text-[9px] text-slate-400 mt-1">Messages are specific to this project only</p>
              </div>

              {messages.map((msg) => {
                const isMe = (currentRole === 'client' && msg.sender === 'user') || (currentRole === 'admin' && msg.sender === 'consultant')
                return (
                  <div key={msg.id} className={`flex items-start gap-3 ${isMe ? 'justify-end' : ''}`}>
                    {!isMe && (
                      <div className={`w-7 h-7 rounded-full font-bold text-[10px] flex items-center justify-center shrink-0 ${msg.sender === 'consultant' ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'}`}>
                        {msg.sender === 'consultant' ? 'MS' : 'JD'}
                      </div>
                    )}
                    <div className="max-w-[70%]">
                      {!isMe && <p className="text-[10px] font-bold text-slate-500 mb-0.5">{msg.name}</p>}
                      <div className={`p-3 text-xs rounded-2xl shadow-sm ${isMe ? 'bg-emerald-600 text-white rounded-tr-none' : 'bg-slate-50 text-slate-700 border border-slate-100 rounded-tl-none'}`}>
                        <p className="leading-relaxed break-words">{msg.text}</p>
                      </div>
                      <span className={`text-[9px] text-slate-400 block mt-1 ${isMe ? 'text-right' : ''}`}>{msg.time}</span>
                    </div>
                  </div>
                )
              })}
            </div>

            
            <form onSubmit={handleSend} className="mt-4 flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl p-1.5 focus-within:border-emerald-500 transition-all">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-transparent text-xs text-slate-700 outline-none px-3"
              />
              <button type="submit" className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 h-8 rounded-lg font-bold text-xs transition-colors">
                Send
              </button>
            </form>
          </div>
        )}

       
        {activeTab === 'vault' && (
          <div className="p-6">
            <h3 className="text-sm font-bold text-slate-800 mb-4">Document Vault</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
            
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-emerald-600 flex items-center gap-1.5 uppercase tracking-wider">📁 User Uploads</h4>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 flex items-center gap-3 shadow-sm">
                  <span className="text-xl"></span>
                  <div>
                    <p className="text-xs font-bold text-slate-700 truncate max-w-[150px]">Business Plan Draft.pdf</p>
                    <span className="text-[10px] text-slate-400">2.4 MB - May 5, 2026</span>
                  </div>
                </div>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 flex items-center gap-3 shadow-sm">
                  <span className="text-xl"></span>
                  <div>
                    <p className="text-xs font-bold text-slate-700 truncate max-w-[150px]">Financial Projections.xlsx</p>
                    <span className="text-[10px] text-slate-400">1.2 MB - May 4, 2026</span>
                  </div>
                </div>
              </div>

              
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-blue-600 flex items-center gap-1.5 uppercase tracking-wider">📁 Consultant Templates</h4>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 flex items-center gap-3 shadow-sm">
                  <span className="text-xl"></span>
                  <div>
                    <p className="text-xs font-bold text-slate-700 truncate max-w-[150px]">Feasib Template.docx</p>
                    <span className="text-[10px] text-slate-400">856 KB - May 3, 2026</span>
                  </div>
                </div>
              </div>

             
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-400 flex items-center gap-1.5 uppercase tracking-wider">📁 Final Outputs</h4>
                <div className="border-2 border-dashed border-slate-200 rounded-2xl h-32 flex flex-col items-center justify-center p-4 text-center">
                  <span className="text-slate-300 text-lg"></span>
                  <p className="text-[11px] font-medium text-slate-400 mt-1">No final outputs yet</p>
                </div>
              </div>

            </div>
          </div>
        )}

     
        {activeTab === 'history' && (
          <div className="p-6 max-w-2xl">
            <h3 className="text-sm font-bold text-slate-800 mb-6">Activity History</h3>
            <div className="relative border-l border-slate-200 ml-4 pl-6 space-y-6">
              
         
              <div className="relative">
                <span className="absolute -left-[31px] top-0 bg-emerald-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[8px] font-bold">✓</span>
                <p className="text-xs font-bold text-slate-800">Uploaded Financial Projections.xlsx</p>
                <p className="text-[10px] text-slate-400 mt-0.5">by Juan Dela Cruz • 2d ago</p>
              </div>

       
              <div className="relative">
                <span className="absolute -left-[31px] top-0 bg-emerald-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[8px] font-bold">✓</span>
                <p className="text-xs font-bold text-slate-800">Phase 2 completed</p>
                <p className="text-[10px] text-slate-400 mt-0.5">by Maria Santos • 3d ago</p>
              </div>

           
              <div className="relative">
                <span className="absolute -left-[31px] top-0 bg-emerald-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[8px] font-bold">✓</span>
                <p className="text-xs font-bold text-slate-800">Uploaded Business Plan Draft.pdf</p>
                <p className="text-[10px] text-slate-400 mt-0.5">by Juan Dela Cruz • 5d ago</p>
              </div>

             
              <div className="relative">
                <span className="absolute -left-[31px] top-0 bg-slate-300 text-white rounded-full w-4 h-4 flex items-center justify-center text-[8px] font-bold">⚙</span>
                <p className="text-xs font-bold text-slate-800">Project created</p>
                <p className="text-[10px] text-slate-400 mt-0.5">by System • 7d ago</p>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  )
}