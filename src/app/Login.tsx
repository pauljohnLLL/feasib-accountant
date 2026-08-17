import { useState } from 'react'
import { motion } from 'framer-motion';

// We add { navigate } here so the buttons can take the user to different pages
export default function Login({ navigate }: { navigate: (path: string) => void }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // For now, we just navigate to the dashboard on submit
    navigate('/dashboard')
  }

  return (
    <motion.div
      key="login"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#0B2F1D] flex items-center justify-center p-4"
    >
      <div className="w-full max-w-md bg-[#205A3E]/90 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
        
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-600/10 text-emerald-400 border border-emerald-500/20 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 16.5h.75v.75h-.75v-.75ZM16.5 13.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75Z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Welcome Back</h2>
          <p className="text-sm text-slate-300 mt-1">Sign in to your Feasib Accountant portal</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#0B2F1D]/80 border border-white/10 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-all"
              placeholder="name@company.com"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                Password
              </label>
              <a href="#" className="text-xs text-emerald-400 hover:underline">Forgot?</a>
            </div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#0B2F1D]/80 border border-white/10 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-all"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white text-sm font-semibold py-2.5 px-4 rounded-lg shadow-lg shadow-emerald-600/10 transition-colors mt-2"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-3">
          <p className="text-center text-xs text-slate-400">Or continue as a specific user:</p>
          
          {/* Client Login Button */}
          <button
            onClick={() => navigate('/dashboard')}
            className="w-full bg-white text-[#0B2F1D] px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-slate-100 transition-colors"
          >
            Client Login
          </button>
          
          {/* Admin Login Button */}
          <button
            onClick={() => navigate('/admin')}
            className="w-full bg-emerald-900 text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-emerald-800 transition-colors"
          >
            Admin Login
          </button>

          <button
            onClick={() => navigate('/')}
            className="text-xs mt-2 underline opacity-70 text-slate-300 hover:opacity-100 transition-opacity"
          >
            Back to home
          </button>
        </div>

      </div>
    </motion.div>
  )
}