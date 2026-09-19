import { useState } from 'react';
import { motion } from 'framer-motion';
import type { NavigateFn } from '../types/index.d';

interface LoginProps {
  navigate: NavigateFn;
  initialMode?: 'login' | 'signup';
}

export default function Login({ navigate, initialMode = 'signup' }: LoginProps) {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'signup' && !agreedToTerms) return;

    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setIsLoading(false);
    navigate('/dashboard');
  };

  const isDev = import.meta.env.DEV;

  return (
    <motion.div
      key="auth-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen w-full bg-[#0B2F1D] flex items-center justify-center p-3 sm:p-6 md:p-10 font-sans"
    >
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
       
        <div className="lg:col-span-5 bg-[#0B2F1D] text-white p-8 sm:p-10 md:p-12 flex flex-col justify-between relative overflow-hidden">
          
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <svg viewBox="0 0 400 400" className="w-full h-full object-cover">
              <defs>
                <pattern id="grid-pattern" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#79B669" strokeWidth="0.8" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
              
              <g transform="translate(60, 100) rotate(-20) skewX(25)">
                <rect x="0" y="0" width="220" height="140" rx="8" fill="#134729" stroke="#79B669" strokeWidth="1.5" />
                <line x1="0" y1="35" x2="220" y2="35" stroke="#79B669" strokeWidth="1" />
                <line x1="0" y1="70" x2="220" y2="70" stroke="#79B669" strokeWidth="1" />
                <line x1="0" y1="105" x2="220" y2="105" stroke="#79B669" strokeWidth="1" />
                <line x1="70" y1="0" x2="70" y2="140" stroke="#79B669" strokeWidth="1" />
                <line x1="145" y1="0" x2="145" y2="140" stroke="#79B669" strokeWidth="1" />
              </g>
            </svg>
          </div>

         
          <div className="relative z-10">
            <div
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2.5 cursor-pointer group"
            >
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-emerald-300 group-hover:bg-white/20 transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 3l9 7H3l9-7z" />
                </svg>
              </div>
              <span className="font-bold text-base tracking-tight text-white">FeasibAccountant</span>
            </div>
          </div>

         
          <div className="relative z-10 my-10 space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-[42px] font-black tracking-tight leading-[1.08] text-white">
              Master your <br />
              compliance <br />
              ecosystem.
            </h1>
            <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed font-normal max-w-sm">
              Join thousands of professionals streamlining their accounting workflow with our precision-engineered compliance platform.
            </p>
          </div>

        
          <div className="relative z-10 grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
            <div>
              <h5 className="font-bold text-xs text-white">100% Secure</h5>
              <p className="text-[11px] text-emerald-200/70 leading-snug">Bank-grade encryption</p>
            </div>
            <div>
              <h5 className="font-bold text-xs text-white">Global Standards</h5>
              <p className="text-[11px] text-emerald-200/70 leading-snug">IFRS & GAAP Compliant</p>
            </div>
          </div>
        </div>

        
        <div className="lg:col-span-7 p-8 sm:p-10 md:p-12 flex flex-col justify-between bg-white">
          <div className="max-w-md mx-auto w-full space-y-6">
            
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B2F1D] tracking-tight">
                {mode === 'signup' ? 'Create Account' : 'Log In'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                {mode === 'signup'
                  ? 'Start your 14-day professional trial today.'
                  : 'Welcome back to your compliance ecosystem.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {mode === 'signup' && (
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alexander Hamilton"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#0B2F1D] focus:ring-1 focus:ring-[#0B2F1D] transition-all"
                  />
                </div>
              )}

              
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder={mode === 'signup' ? 'alexander@firm.com' : 'name@company.com'}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#0B2F1D] focus:ring-1 focus:ring-[#0B2F1D] transition-all"
                />
              </div>

             
              {mode === 'signup' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Password</label>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#0B2F1D] focus:ring-1 focus:ring-[#0B2F1D] transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Confirm Password</label>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#0B2F1D] focus:ring-1 focus:ring-[#0B2F1D] transition-all"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold text-slate-700">Password</label>
                    <a href="#" className="text-[11px] text-emerald-700 hover:underline font-bold">
                      Forgot?
                    </a>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 pr-10 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#0B2F1D] focus:ring-1 focus:ring-[#0B2F1D] transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs cursor-pointer"
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                </div>
              )}

              
              {mode === 'signup' && (
                <>
                  <div className="space-y-1.5 pt-1">
                    <label className="text-xs font-bold text-slate-700">Terms and Conditions</label>
                    <div className="bg-[#FAF8F5] border border-slate-200 rounded-xl p-3 text-[11px] text-slate-600 space-y-1.5 max-h-20 overflow-y-auto leading-relaxed">
                      <p>
                        <strong>1. Acceptance of Terms:</strong> By creating an account on FeasibAccountant, you agree to abide by all professional compliance standards and ethical reporting guidelines as outlined in our Master Service Agreement.
                      </p>
                      <p>
                        <strong>2. Data Privacy:</strong> We employ end-to-end encryption for all financial data.
                      </p>
                    </div>
                  </div>

                  
                  <div className="flex items-center gap-2.5 pt-1">
                    <button
                      type="button"
                      onClick={() => setAgreedToTerms(!agreedToTerms)}
                      className={`w-4 h-4 rounded flex items-center justify-center transition-all cursor-pointer ${
                        agreedToTerms
                          ? 'bg-[#137333] text-white'
                          : 'border-2 border-slate-300 bg-white hover:border-slate-400'
                      }`}
                      aria-label="Agree to Terms"
                    >
                      {agreedToTerms && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                    <span
                      onClick={() => setAgreedToTerms(!agreedToTerms)}
                      className="text-xs text-slate-600 cursor-pointer select-none"
                    >
                      I agree to the Terms and Conditions of FeasibAccountant.
                    </span>
                  </div>
                </>
              )}

              
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={mode === 'signup' && !agreedToTerms}
                  className={`w-full py-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-sm ${
                    mode === 'signup' && !agreedToTerms
                      ? 'bg-[#9CB3A3] text-white cursor-not-allowed opacity-90'
                      : 'bg-[#0B2F1D] hover:bg-[#154c2d] text-white cursor-pointer'
                  }`}
                >
                  {isLoading ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : mode === 'signup' ? (
                    'Sign Up'
                  ) : (
                    'Log In'
                  )}
                </button>
              </div>
            </form>

            
            <div className="text-center pt-2">
              {mode === 'signup' ? (
                <p className="text-xs text-slate-600">
                  Already have an account?{' '}
                  <button
                    onClick={() => setMode('login')}
                    className="font-bold text-[#0B2F1D] hover:underline cursor-pointer"
                  >
                    Log In
                  </button>
                </p>
              ) : (
                <p className="text-xs text-slate-600">
                  Don't have an account?{' '}
                  <button
                    onClick={() => setMode('signup')}
                    className="font-bold text-[#0B2F1D] hover:underline cursor-pointer"
                  >
                    Create Account
                  </button>
                </p>
              )}
            </div>

            
            {isDev && (
              <div className="pt-4 border-t border-slate-100 flex gap-2 justify-center">
                <button
                  type="button"
                  onClick={() => navigate('/dashboard')}
                  className="text-[10px] bg-slate-100 hover:bg-slate-200 text-slate-600 px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer"
                >
                   Quick: Client Dashboard
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/admin')}
                  className="text-[10px] bg-slate-100 hover:bg-slate-200 text-slate-600 px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer"
                >
                   Quick: Admin Dashboard
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
