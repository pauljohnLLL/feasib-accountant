import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface FinaAITerminalProps {
  onClose: () => void;
}

interface MessageItem {
  id: string;
  sender: 'user' | 'fina';
  text: string;
  timestamp: string;
  data?: {
    viabilityScore: number;
    indexTitle: string;
    indexDesc: string;
    phaseEntry: string;
    assetClass: string;
  };
}

export default function FinaAITerminal({ onClose }: FinaAITerminalProps) {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<MessageItem[]>([]);
  const [inputVal, setInputVal] = useState('');
  const [creditsLeft, setCreditsLeft] = useState(35);
  const [creditsConsumed, setCreditsConsumed] = useState(4);
  const [activeNav, setActiveNav] = useState('new');
  const [isAuditing, setIsAuditing] = useState(false);

  const predefinedPrompts = [
    {
      category: 'ECONOMIC RESEARCH',
      title: 'What is a Feasibility Study?',
      desc: 'Explore the architectural framework of professional business validation.',
      answer:
        'A Feasibility Study is an exhaustive analytical assessment designed to evaluate the operational viability, market demand, and financial sustainability of a proposed venture before capital deployment. FINA integrates five core chapters: Management, Marketing, Technical, Financial, and Socio-Economic.',
      data: {
        viabilityScore: 94,
        indexTitle: 'METHODOLOGY INDEX',
        indexDesc: 'Framework aligned with standard financial rigor & SEC compliance guidelines.',
        phaseEntry: 'Chapter 4',
        assetClass: 'Financial Model',
      },
    },
    {
      category: 'ADVISORY SERVICES',
      title: 'Tell me about FeasibAccountant services.',
      desc: 'Learn how our specialized accounting bots integrate with fiscal modeling.',
      answer:
        'FeasibAccountant combines human CPA mastery with proprietary algorithmic engines. We synthesize complete 5-year financial statements, cash flow forecasts, break-even analyses, and strategic ratios with 100% defense readiness.',
      data: {
        viabilityScore: 99,
        indexTitle: 'SERVICE CONFIDENCE INDEX',
        indexDesc: 'Zero-tolerance computational accuracy backed by defense guarantees.',
        phaseEntry: 'Full Turnover',
        assetClass: 'Comprehensive',
      },
    },
    {
      category: 'MARKET INTELLIGENCE',
      title: 'Analyze current sector volatility.',
      desc: 'Preview macro-economic trends affecting current venture viability.',
      answer:
        'Based on current macroeconomic arithmetic projections, market viability is at 97%. This is driven by a 12% supply gap in mid-tier housing and favorable regional consumer index momentum.',
      data: {
        viabilityScore: 97,
        indexTitle: 'NORTH DISTRICT INDEX',
        indexDesc: 'Projected profitability exceeds baseline by 14.2% for FY25.',
        phaseEntry: 'Q3-2024',
        assetClass: 'Mid-Tier Res',
      },
    },
    {
      category: 'STRATEGIC MODELING',
      title: 'Risk Assessment parameters.',
      desc: 'Understanding the variables FINA uses to calculate predictive success.',
      answer:
        'FINA evaluates dynamic sensitivity parameters including cost of capital variance, inflation elasticity, demand degradation scenarios, and payback horizons under multiple stress tests.',
      data: {
        viabilityScore: 91,
        indexTitle: 'RISK SENSITIVITY INDEX',
        indexDesc: 'Simulation indicates capital resilience across 3 historical downturn models.',
        phaseEntry: 'Stress Test B',
        assetClass: 'Capital Structure',
      },
    },
  ];

  const handleSendPrompt = (question: string, overrideAnswer?: string, overrideData?: MessageItem['data']) => {
    if (!question.trim()) return;

   
    setCreditsConsumed((c) => c + 1);
    setCreditsLeft((l) => Math.max(0, l - 1));

    const msgIndex = messages.length;

    const userMsg: MessageItem = {
      id: `msg-user-${msgIndex + 1}`,
      sender: 'user',
      text: question,
      timestamp: 'EXECUTIVE USER • 10:42 AM',
    };

    const finalAnswer =
      overrideAnswer ||
      `Based on current arithmetic projections, market viability is at 97%. This is driven by a 12% supply gap in mid-tier housing.`;

    const finalData = overrideData || {
      viabilityScore: 97,
      indexTitle: 'NORTH DISTRICT INDEX',
      indexDesc: 'Projected profitability exceeds baseline by 14.2% for FY25.',
      phaseEntry: 'Q3-2024',
      assetClass: 'Mid-Tier Res',
    };

    const finaMsg: MessageItem = {
      id: `msg-fina-${msgIndex + 2}`,
      sender: 'fina',
      text: finalAnswer,
      timestamp: 'FINA INTELLIGENCE • 10:42 AM',
      data: finalData,
    };

    setMessages((prev) => [...prev, userMsg, finaMsg]);
    setInputVal('');
  };

  const resetToNew = () => {
    setMessages([]);
    setActiveNav('new');
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0B2F1D]/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="w-full max-w-7xl h-[94vh] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col md:flex-row text-slate-800"
      >
        
        <aside className="w-full md:w-64 bg-[#FAF8F5] border-r border-slate-200 flex flex-col justify-between p-4 shrink-0">
          <div>
          
            <div className="flex items-center gap-2.5 pb-5 border-b border-slate-200/80 mb-4">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#0B2F1D] flex items-center justify-center font-bold text-sm shadow-sm">
                
              </div>
              <div>
                <h2 className="font-black text-sm text-[#0B2F1D] tracking-tight leading-tight">FINA AI</h2>
                <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400 block">
                  CONSULTANCY INTELLIGENCE
                </span>
              </div>
            </div>

            
            <div className="space-y-1">
              <button
                onClick={resetToNew}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeNav === 'new' && messages.length === 0
                    ? 'bg-[#EBF5EE] text-[#0B2F1D] shadow-xs'
                    : 'text-slate-600 hover:bg-slate-200/60'
                }`}
              >
                <span className="text-emerald-700 font-bold"> </span>
                <span>NEW INTELLIGENCE</span>
              </button>

              <div className="flex items-center justify-between px-3 py-2 text-xs font-semibold text-slate-400 cursor-not-allowed">
                <span className="flex items-center gap-2.5">
                  <span> </span>
                  <span>MARKET FEED</span>
                </span>
                <span className="text-[10px]"> </span>
              </div>

              <div className="flex items-center justify-between px-3 py-2 text-xs font-semibold text-slate-400 cursor-not-allowed">
                <span className="flex items-center gap-2.5">
                  <span> </span>
                  <span>STRATEGY</span>
                </span>
                <span className="text-[10px]"> </span>
              </div>

              <div className="flex items-center justify-between px-3 py-2 text-xs font-semibold text-slate-400 cursor-not-allowed">
                <span className="flex items-center gap-2.5">
                  <span> </span>
                  <span>HISTORICAL AUDIT</span>
                </span>
                <span className="text-[10px]"> </span>
              </div>
            </div>

           
            <div className="mt-8 pt-5 border-t border-slate-200/80">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block mb-3 px-2">
                RECENT QUERIES
              </span>
              <div className="space-y-1">
                {[
                  { tag: 'north-district-viability', prompt: 'Can you summarize the current market viability for the North District project?' },
                  { tag: 'supply-gap-analysis', prompt: 'Show detailed supply and demand deficit projections for student housing.' },
                  { tag: 'mid-tier-housing-q4', prompt: 'Assess sensitivity analysis for mid-tier housing in Q4.' },
                ].map((q) => (
                  <button
                    key={q.tag}
                    onClick={() => handleSendPrompt(q.prompt)}
                    className="w-full text-left text-xs text-slate-600 hover:text-[#0B2F1D] hover:bg-slate-200/50 px-2.5 py-1.5 rounded-lg transition-colors truncate cursor-pointer"
                  >
                    # {q.tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          
          <div className="pt-4 border-t border-slate-200/80 space-y-3">
            <button
              onClick={() => handleSendPrompt('Provide comprehensive client portal feasibility overview.')}
              className="w-full bg-[#0B2F1D] hover:bg-[#154c2d] text-white text-xs font-bold py-2.5 rounded-xl transition-colors cursor-pointer shadow-sm"
            >
              CLIENT PORTAL
            </button>
            <div className="flex items-center justify-between px-1 text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <span> </span>
                <span>System Status</span>
              </span>
              <span className="flex items-center gap-1">
                <span> </span>
                <span>Documentation</span>
              </span>
            </div>
          </div>
        </aside>

        
        <main className="flex-1 flex flex-col justify-between overflow-hidden bg-white">
          
          <header className="px-6 py-3.5 border-b border-slate-100 flex items-center justify-between shrink-0 bg-white">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                FINA Neural Intelligence Engine
              </span>
            </div>

            <div className="flex items-center gap-3">
              
              <div className="hidden sm:flex items-center gap-2 bg-[#FAF8F5] border border-slate-200 px-3 py-1.5 rounded-full text-xs font-medium text-slate-600">
                <span className="text-slate-700 font-semibold">
                  AI Credits Consumed: <strong className="text-[#0B2F1D] font-bold">{creditsConsumed}</strong> | Credits Left: <strong className="text-emerald-700 font-bold">{creditsLeft}</strong>
                </span>
                <div className="w-12 h-1.5 bg-slate-200 rounded-full overflow-hidden ml-1">
                  <div className="bg-emerald-600 h-full w-[40%]" />
                </div>
              </div>

              
              <span className="bg-[#EBF5EE] text-[#0B2F1D] text-[10px] font-black tracking-widest px-2.5 py-1 rounded-md flex items-center gap-1">
                  VISITOR MODE
              </span>

              
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-xs transition-colors cursor-pointer"
                title="Close FINA Terminal"
              >
                ✕
              </button>
            </div>
          </header>

          
          <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
            
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative overflow-hidden">
              <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-emerald-500" />
              <div>
                <h3 className="text-xl md:text-2xl font-black text-[#0B2F1D] tracking-tight">
                  Precision Strategic Intelligence.
                </h3>
                <p className="text-xs text-slate-500 max-w-xl mt-1 leading-relaxed">
                  Unlock Full AI Strategic Intelligence to analyze your specific business idea with high-fidelity predictive modeling and live market cross-referencing.
                </p>
              </div>
              <button
                onClick={() => {
                  onClose();
                  navigate('/signup');
                }}
                className="bg-[#0B2F1D] hover:bg-[#154c2d] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-sm shrink-0 cursor-pointer"
              >
                Register Now
              </button>
            </div>

            
            {messages.length === 0 ? (
              
              <div className="py-6 flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
                
                <div className="w-12 h-12 rounded-2xl border-2 border-emerald-600 text-emerald-800 flex items-center justify-center text-xl font-bold bg-emerald-50 shadow-xs">
                   
                </div>

                <div className="space-y-2">
                  <h2 className="text-3xl md:text-4xl font-black text-[#0B2F1D] tracking-tight">
                    How can FINA assist your <br />
                    <span className="text-[#137333]">Fiscal Integrity</span> today?
                  </h2>
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                    SELECT AN INTELLIGENCE MODULE TO BEGIN LIMITED PREVIEW
                  </p>
                </div>

                
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  {predefinedPrompts.map((card, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendPrompt(card.title, card.answer, card.data)}
                      className="bg-white border border-slate-200/90 hover:border-emerald-600/60 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <div className="space-y-1 max-w-[85%]">
                        <span className="text-[10px] font-extrabold tracking-wider text-[#137333] uppercase">
                          {card.category}
                        </span>
                        <h4 className="font-bold text-sm text-[#0B2F1D] group-hover:text-emerald-800 transition-colors">
                          {card.title}
                        </h4>
                        <p className="text-xs text-slate-500 leading-snug">{card.desc}</p>
                      </div>
                      <span className="text-slate-400 group-hover:text-emerald-700 group-hover:translate-x-1 transition-all text-sm font-bold">
                        →
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              
              <div className="space-y-6 max-w-4xl mx-auto">
                {messages.map((msg) =>
                  msg.sender === 'user' ? (
                    
                    <div key={msg.id} className="flex flex-col items-end space-y-1">
                      <div className="bg-white border border-slate-200 rounded-2xl px-5 py-3.5 shadow-xs max-w-lg text-xs md:text-sm text-slate-800 font-medium leading-relaxed">
                        {msg.text}
                      </div>
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                        {msg.timestamp}
                      </span>
                    </div>
                  ) : (
                    
                    <div key={msg.id} className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-xl bg-emerald-100 text-[#0B2F1D] flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                          ✨
                        </div>
                        <div className="flex-1 space-y-4">
                          
                          <div className="bg-white border-2 border-emerald-600/70 rounded-2xl p-5 shadow-sm">
                            <p className="text-xs md:text-sm text-slate-800 leading-relaxed font-normal">
                              {msg.text}
                            </p>
                          </div>

                          
                          {msg.data && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              
                              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex items-center gap-4">
                                <div className="w-16 h-16 rounded-full border-4 border-emerald-600 flex flex-col items-center justify-center shrink-0">
                                  <span className="text-base font-black text-[#0B2F1D] leading-none">
                                    {msg.data.viabilityScore}%
                                  </span>
                                  <span className="text-[8px] uppercase tracking-wider font-extrabold text-slate-400">
                                    VIABILITY
                                  </span>
                                </div>
                                <div className="space-y-1">
                                  <h5 className="text-xs font-black text-[#0B2F1D] uppercase tracking-wide">
                                    {msg.data.indexTitle}
                                  </h5>
                                  <p className="text-[11px] text-slate-500 leading-snug">
                                    {msg.data.indexDesc}
                                  </p>
                                  <span className="text-[9px] font-extrabold text-emerald-700 flex items-center gap-1 pt-0.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    REAL-TIME FEED ACTIVE
                                  </span>
                                </div>
                              </div>

                              
                              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between space-y-3">
                                <div className="flex items-center justify-between text-xs">
                                  <span className="font-extrabold text-[#0B2F1D] tracking-wide uppercase text-[11px]">
                                    OPTIMAL STRATEGY
                                  </span>
                                  <span className="text-slate-400 font-bold">☍</span>
                                </div>
                                <div className="space-y-1 text-xs">
                                  <div className="flex justify-between text-slate-500">
                                    <span className="text-[11px]">Phase 1 Entry</span>
                                    <strong className="text-[#0B2F1D]">{msg.data.phaseEntry}</strong>
                                  </div>
                                  <div className="flex justify-between text-slate-500">
                                    <span className="text-[11px]">Asset Class</span>
                                    <strong className="text-[#0B2F1D]">{msg.data.assetClass}</strong>
                                  </div>
                                </div>
                                <button
                                  onClick={() => {
                                    setIsAuditing(true);
                                    setTimeout(() => setIsAuditing(false), 2000);
                                  }}
                                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold py-2 rounded-xl transition-colors cursor-pointer"
                                >
                                  {isAuditing ? 'Auditing Model Parameters...' : 'DEPLOY STRATEGY AUDIT'}
                                </button>
                              </div>
                            </div>
                          )}

                          <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">
                            {msg.timestamp}
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            )}
          </div>

          
          <footer className="p-4 md:p-6 border-t border-slate-100 bg-white shrink-0 space-y-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendPrompt(inputVal);
              }}
              className="flex items-center gap-2 bg-white border border-slate-200 rounded-2xl px-4 py-2.5 shadow-xs focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all max-w-4xl mx-auto"
            >
              <button
                type="button"
                className="w-7 h-7 rounded-full text-slate-400 hover:text-slate-600 flex items-center justify-center font-bold text-base cursor-pointer"
                title="Add attachment"
              >
                +
              </button>

              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Command FINA: Summarize, analyze, or predict..."
                className="flex-1 bg-transparent text-xs md:text-sm text-[#0B2F1D] placeholder:text-slate-400 focus:outline-none"
              />

              <button
                type="button"
                className="text-slate-400 hover:text-slate-600 text-sm px-1 cursor-pointer"
                title="Voice Input"
              >
                 
              </button>

              <button
                type="submit"
                className="w-8 h-8 rounded-xl bg-[#0B2F1D] hover:bg-[#154c2d] text-white flex items-center justify-center font-bold text-xs transition-colors cursor-pointer shadow-xs"
                title="Send Command"
              >
                 
              </button>
            </form>

            <p className="text-[9px] uppercase tracking-widest text-center text-slate-400 font-semibold">
              PROPRIETARY INTELLIGENCE TERMINAL • SEC 17A-4 COMPLIANT • END-TO-END ENCRYPTION
            </p>
          </footer>
        </main>
      </motion.div>
    </div>
  );
}
