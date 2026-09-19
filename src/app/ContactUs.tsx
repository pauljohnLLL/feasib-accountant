import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../lib/animations';

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -20 }}
      className="min-h-screen w-full bg-white text-[#0B2F1D] font-sans antialiased"
    >
     
      <section className="relative w-full bg-white pt-20 pb-20 px-6 md:px-12 lg:px-16 border-b border-slate-100 overflow-hidden">
        
        <div className="absolute top-12 right-8 md:right-16 w-10 h-10 rounded-full bg-[#0B2F1D] text-emerald-300 flex items-center justify-center shadow-xl">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 space-y-8"
          >
            <h1 className="text-5xl md:text-[68px] font-black text-[#0B2F1D] tracking-tight leading-[1.08]">
              Contact Us
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md">
              We're here to help you with your feasibility study's financial computations. Whether you have questions about our services, need a consultation, or are ready to get started, feel free to reach out to us.
            </p>

           
            <div className="flex flex-col sm:flex-row gap-4">
              
              <a
                href="mailto:inquiry@feasibaccountant.com"
                className="flex items-center gap-3.5 bg-white border border-slate-200 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md hover:border-slate-300 transition-all group flex-1"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-white border border-slate-100 shadow-sm">
                  <svg viewBox="52 42 88 66" className="w-6 h-6">
                    <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"/>
                    <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"/>
                    <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"/>
                    <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92"/>
                    <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wide font-bold">Email Address</p>
                  <p className="text-xs font-bold text-[#0B2F1D] group-hover:text-emerald-700 transition-colors">
                    inquiry@feasibaccountant.com
                  </p>
                </div>
              </a>

             
              <a
                href="https://facebook.com/FeasibAccountant"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 bg-white border border-slate-200 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md hover:border-slate-300 transition-all group flex-1"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-white border border-slate-100 shadow-sm">
                  <svg viewBox="0 0 40 40" className="w-7 h-7">
                    <path fill="#1877F2" d="M16.7 39.8C7.2 38.1 0 29.9 0 20 0 9 9 0 20 0s20 9 20 20c0 9.9-7.2 18.1-16.7 19.8l-1.1-.9h-4.4l-1.1.9z" />
                    <path fill="#FFFFFF" d="M27.8 25.6l.9-5.6h-5.3v-3.9c0-1.6.6-2.8 3-2.8h2.6V8.2c-1.4-.2-3-.4-4.4-.4-4.6 0-7.8 2.8-7.8 7.8V20h-5v5.6h5v14.1c1.1.2 2.2.3 3.3.3s2.2-.1 3.3-.3V25.6h4.5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wide font-bold">Facebook</p>
                  <p className="text-xs font-bold text-[#0B2F1D] group-hover:text-emerald-700 transition-colors">
                    facebook.com/FeasibAccountant
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/4] bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800"
                alt="Feasib Accountant Consultant"
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-white/60 shadow-xl">
              <div className="flex flex-col leading-none tracking-tight">
                <div className="text-[#0B2F1D] text-sm font-bold flex items-end tracking-wide">
                  <span>feas</span>
                  <div className="flex flex-col gap-[1px] mx-[2px] mb-[4px] items-center justify-end">
                    <div className="w-[4px] h-[4px] bg-[#112d10]" />
                    <div className="w-[4px] h-[4px] bg-[#224d24]" />
                    <div className="w-[4px] h-[4px] bg-[#79B669]" />
                  </div>
                  <span>b</span>
                </div>
                <span className="text-[#0B2F1D] text-sm font-bold tracking-wide lowercase -mt-2">accountant</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      
      <section className="w-full bg-[#FAF8F5] py-24 px-6 md:px-12 lg:px-16 border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
         
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-black text-[#0B2F1D] tracking-tight leading-tight">
                Ready to get started?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3">
                To ensure the highest accuracy in your financial projections, please prepare the following documents for our initial review.
              </p>
            </motion.div>

            
            <motion.div variants={fadeInUp} className="space-y-3">
              {[
                'Reference study or research guide provided by your school.',
                'Previous chapters of your feasibility study (if available).',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white border border-slate-200/80 rounded-2xl px-5 py-4 shadow-sm">
                  <div className="w-5 h-5 rounded-full bg-[#0B2F1D] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </motion.div>

            
            <motion.div
              variants={fadeInUp}
              className="bg-[#0B2F1D] rounded-2xl px-6 py-5"
            >
              <p className="text-sm text-emerald-100 italic leading-relaxed font-medium">
                "We look forward to hearing from you and helping you achieve success in your feasibility study!"
              </p>
            </motion.div>
          </motion.div>

         
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            className="lg:col-span-7 grid grid-cols-2 gap-4"
          >
            
            <motion.div variants={fadeInUp} className="col-span-2 md:col-span-1 rounded-2xl overflow-hidden shadow-md aspect-video bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=800"
                alt="Financial Analysis"
                className="w-full h-full object-cover opacity-90"
              />
            </motion.div>

            
            <motion.div variants={fadeInUp} className="col-span-2 md:col-span-1 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col justify-center">
              <p className="text-xs text-slate-700 italic leading-relaxed mb-3">
                "The level of precision in the financial computations helped me defend my study with zero revisions."
              </p>
              <p className="text-[11px] font-bold text-[#0B2F1D]">– MBA Student, Manila</p>
            </motion.div>

           
            <motion.div variants={fadeInUp} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <p className="text-3xl font-black text-[#0B2F1D] leading-none">98%</p>
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mt-1">Defense Success Rate</p>
            </motion.div>

            
            <motion.div variants={fadeInUp} className="rounded-2xl overflow-hidden shadow-md aspect-square bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600"
                alt="Partnership Handshake"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      
      <section className="w-full bg-white py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-2xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-md space-y-6"
          >
            <div className="text-center space-y-2">
              <h2 className="text-2xl md:text-3xl font-black text-[#0B2F1D] tracking-tight">
                Start your consultation
              </h2>
              <p className="text-xs text-slate-500">Submit your basic details and our team will get back to you within 24 hours.</p>
            </div>

            {sent && (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold rounded-xl px-5 py-3 text-center">
                ✓ Inquiry sent! We'll get back to you within 24 hours.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Juan Dela Cruz"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-xs text-[#0B2F1D] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0B2F1D]/20 focus:border-[#0B2F1D] bg-white transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="juan@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-xs text-[#0B2F1D] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0B2F1D]/20 focus:border-[#0B2F1D] bg-white transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500">Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="How can we help with your study?"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-xs text-[#0B2F1D] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0B2F1D]/20 focus:border-[#0B2F1D] bg-white transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0B2F1D] hover:bg-[#154c2d] text-white font-black text-xs py-4 rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-md"
              >
                Send Inquiry
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

