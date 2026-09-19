import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { fadeInUp, staggerContainer } from '../lib/animations';

export default function TermsAndConditions() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -20 }}
      className="min-h-screen w-full bg-white text-[#0B2F1D] font-sans antialiased"
    >
      
      <section className="w-full bg-white pt-20 pb-16 px-6 md:px-12 lg:px-16 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="max-w-3xl">
            <span className="text-[11px] font-extrabold tracking-widest text-[#205A3E] uppercase block mb-4">
              TRANSPARENCY & TRUST
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-[68px] font-black text-[#0B2F1D] tracking-tight leading-[1.08] mb-6">
              Terms & Conditions
            </h1>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal max-w-2xl">
              A commitment to financial clarity. We believe our partnership starts with an absolute understanding of fees, deliverables, and mutual responsibilities.
            </p>
          </motion.div>
        </div>
      </section>

      
      <section className="w-full bg-[#FAF8F5] py-24 px-6 md:px-12 lg:px-16 border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="mb-14"
          >
            <span className="text-[11px] font-extrabold tracking-widest text-[#205A3E] uppercase block mb-2">
              PRICING STRUCTURE
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#0B2F1D] tracking-tight mb-4">
              Service Fee
            </h2>
            <p className="text-xs md:text-sm text-slate-600 max-w-2xl leading-relaxed">
              Tailored financial expertise designed for academic rigor and corporate precision. Choose the tier that aligns with your current milestone.
            </p>
          </motion.div>

          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-8"
          >
            
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md flex flex-col justify-between"
            >
              <div>
                <span className="inline-block bg-slate-100 text-slate-700 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                  TIER 1
                </span>
                <h3 className="text-2xl font-bold text-[#0B2F1D] mb-1">College Students</h3>
                <p className="text-xs text-slate-500 mb-8">Academic & Research Focus</p>

                <div className="space-y-4 pb-8 border-b border-slate-100 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 text-xs">Projected Statements</span>
                    <span className="font-black text-[#0B2F1D]">₱3,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 text-xs">CPA Certification</span>
                    <span className="font-black text-[#0B2F1D]">₱500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 text-xs">Rush Fee</span>
                    <span className="font-black text-[#0B2F1D]">₱500</span>
                  </div>
                </div>

                <div className="pt-6">
                  <span className="text-[10px] font-extrabold tracking-wider text-[#205A3E] uppercase block mb-4">
                    FREE INCLUSIONS
                  </span>
                  <ul className="space-y-2.5 text-xs text-slate-700">
                    {[
                      'Other Financial Aspect',
                      'Computation',
                      'Unlimited Basic Minor',
                      'Consultation',
                      'Thorough Explanation',
                      'Presentation Tips & Tricks',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-[#0B2F1D] flex items-center justify-center text-[10px] font-bold shrink-0">
                          ✓
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative bg-[#0B2F1D] text-white rounded-3xl p-8 border-2 border-emerald-500/40 shadow-2xl flex flex-col justify-between"
            >
              
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#B3F0AE] text-[#0B2F1D] text-[10px] font-black tracking-widest uppercase px-4 py-1 rounded-full shadow-md">
                RECOMMENDED
              </div>

              <div>
                <span className="inline-block bg-white/10 text-emerald-300 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                  TIER 2
                </span>
                <h3 className="text-2xl font-bold text-white mb-1">Graduate Students</h3>
                <p className="text-xs text-emerald-200/70 mb-8">Post-Grad & Specialized Studies</p>

                <div className="space-y-4 pb-8 border-b border-white/10 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300 text-xs">Full Financial Package</span>
                    <span className="font-black text-2xl text-white">₱5,000+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300 text-xs">Rush Fee</span>
                    <span className="font-black text-xl text-white">₱1,000</span>
                  </div>
                </div>

                <div className="pt-6 mb-8">
                  <span className="text-[10px] font-extrabold tracking-wider text-emerald-300 uppercase block mb-4">
                    PREMIUM INCLUSIONS
                  </span>
                  <ul className="space-y-3 text-xs text-slate-200">
                    <li className="flex items-center gap-2.5 font-bold text-emerald-300">
                      <span>★</span>
                      <span>Everything in Tier 1</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-[10px] font-bold shrink-0">
                        ✓
                      </div>
                      <span>Specialized Study Analysis</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-[10px] font-bold shrink-0">
                        ✓
                      </div>
                      <span>Advanced Methodology Prep</span>
                    </li>
                  </ul>
                </div>
              </div>

              <button
                onClick={() => navigate('/login')}
                className="w-full bg-[#B3F0AE] hover:bg-[#a2dda0] text-[#0B2F1D] font-black text-xs py-3.5 rounded-xl transition-all shadow-lg text-center cursor-pointer"
              >
                Select Plan
              </button>
            </motion.div>

            
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md flex flex-col justify-between"
            >
              <div>
                <span className="inline-block bg-slate-100 text-slate-700 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                  TIER 3
                </span>
                <h3 className="text-2xl font-bold text-[#0B2F1D] mb-1">Actual Business</h3>
                <p className="text-xs text-slate-500 mb-8">Project Financial Statements</p>

                <div className="space-y-4 pb-8 border-b border-slate-100 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 text-xs">Business Planning</span>
                    <span className="font-black text-[#0B2F1D]">₱10,000+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 text-xs">Rush Fee</span>
                    <span className="font-black text-[#0B2F1D]">₱2,000</span>
                  </div>
                </div>

                <div className="pt-6">
                  <span className="text-[10px] font-extrabold tracking-wider text-[#205A3E] uppercase block mb-4">
                    ENTERPRISE INCLUSIONS
                  </span>
                  <ul className="space-y-2.5 text-xs text-slate-700">
                    {[
                      'Financial Analysis',
                      'Slide Presentation',
                      'Financial Report (PDF)',
                      'Minor Revisions',
                      'Consultation',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-slate-100 text-[#0B2F1D] flex items-center justify-center text-[10px] font-bold shrink-0">
                          
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="flex justify-end">
            <button
              onClick={() => navigate('/resources')}
              className="bg-[#0B2F1D] hover:bg-[#154c2d] text-white text-xs font-bold px-5 py-2.5 rounded-full transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>See more</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      
      <section className="w-full bg-white py-24 px-6 md:px-12 lg:px-16 border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-5xl font-black text-[#0B2F1D] tracking-tight leading-[1.15]">
                Transparent Terms for <br />
                Sustainable Growth.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                We believe in clarity. Our payment structures and refund policies are designed to protect both our partnership and your investment.
              </p>
            </div>
          </div>

          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-[#0B2F1D] flex items-center justify-center text-sm font-bold">
                  
                </div>
                <h3 className="text-base font-bold text-[#0B2F1D]">Standard Structure</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-slate-200/80 shadow-sm">
                  <h4 className="text-3xl font-black text-[#0B2F1D] mb-1">50%</h4>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#205A3E] block mb-3">
                    INITIAL DEPOSIT
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Required to secure your consultation slot and initiate project discovery.
                  </p>
                </div>
                <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-slate-200/80 shadow-sm">
                  <h4 className="text-3xl font-black text-[#0B2F1D] mb-1">50%</h4>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#205A3E] block mb-3">
                    UPON COMPLETION
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Settled after final delivery and approval of all consultancy outputs.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 pt-2">
                <span>ⓘ</span>
                <span>For recurring retainers, billing occurs on the 1st of every month.</span>
              </div>
            </div>

          
            <div className="lg:col-span-5 bg-[#0B2F1D] text-white rounded-3xl p-7 shadow-xl space-y-4">
              <h3 className="text-lg font-bold text-white mb-2">Mode of Payment</h3>
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-xl flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-400/20 text-emerald-300 flex items-center justify-center font-bold text-sm shrink-0">
                  
                </div>
                <div>
                  <h5 className="font-bold text-sm text-white">GCash / Maya</h5>
                  <p className="text-xs text-emerald-200/70 mt-0.5">
                    Instant digital transfers for agile transactions.
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-xl flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-400/20 text-emerald-300 flex items-center justify-center font-bold text-sm shrink-0">
                  
                </div>
                <div>
                  <h5 className="font-bold text-sm text-white">Bank Transfer</h5>
                  <p className="text-xs text-emerald-200/70 mt-0.5">
                    BDO, BPI, and UnionBank corporate accounts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6 border-t border-slate-100">
           
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl font-bold text-[#0B2F1D]">Refund Policy</h3>

              <div className="space-y-6 pl-4 border-l-2 border-slate-200">
                
                <div className="relative pl-6">
                  <div className="absolute -left-[23px] top-0 w-4 h-4 rounded-full bg-emerald-600 border-2 border-white shadow" />
                  <h4 className="text-sm font-bold text-[#0B2F1D] mb-1">
                    Withdrawal Before Processing
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the client wishes to withdraw after paying the initial downpayment but{' '}
                    <strong>BEFORE</strong> the processing/creation of the document or request has started,{' '}
                    <strong className="text-emerald-800">only 50% of the downpayment</strong> will be refunded to the client.
                  </p>
                </div>

                
                <div className="relative pl-6">
                  <div className="absolute -left-[23px] top-0 w-4 h-4 rounded-full bg-rose-700 border-2 border-white shadow" />
                  <h4 className="text-sm font-bold text-rose-900 mb-1">
                    Withdrawal During/After Processing
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the client wishes to withdraw <strong>AFTER</strong> the processing/creation of the document or request has already started, the downpayment will{' '}
                    <strong className="text-rose-800">NOT BE REFUNDED</strong>.
                  </p>
                </div>
              </div>
            </div>

           
            <div className="lg:col-span-5 bg-[#0B2F1D] text-white rounded-3xl p-7 shadow-xl space-y-4">
              <div className="flex items-center gap-2.5 text-emerald-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <h4 className="text-base font-bold text-white">Client Assurance</h4>
              </div>

              <p className="text-xs text-slate-200 leading-relaxed">
                These policies ensure that our experts can dedicate the necessary time and resources to your specific needs without interruption. By maintaining these standards, we guarantee the premium quality associated with Feasib Accountant.
              </p>

              <div className="pt-2 space-y-2 text-xs text-emerald-200">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Clear Communication Protocols</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Standardized Project Onboarding</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Fair Compensation for Resource Allocation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="w-full bg-[#FAF8F5] py-24 px-6 md:px-12 lg:px-16 border-b border-slate-200/60 relative overflow-hidden">
        
        <div className="absolute top-12 right-8 md:right-16 w-10 h-10 rounded-full bg-[#0B2F1D] text-emerald-300 flex items-center justify-center shadow-xl">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-3xl mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-black text-[#0B2F1D] tracking-tight leading-[1.15] mb-4">
              Turnover Period and <br />
              Refund Policy
            </h2>
            <div className="w-14 h-1 bg-[#0B2F1D] rounded-full mb-6" />
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              Clear parameters for project delivery and financial protection, ensuring precision and accountability in every engagement.
            </p>
          </motion.div>

          
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md"
          >
            <div className="flex items-center gap-2 mb-6 text-[#0B2F1D]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <h3 className="font-bold text-base">Turnover Period</h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-100 text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
                    <th className="pb-4 font-extrabold">SERVICE TIER</th>
                    <th className="pb-4 font-extrabold">NON-RUSH</th>
                    <th className="pb-4 font-extrabold text-emerald-800">RUSH</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  <tr>
                    <td className="py-4 font-bold text-[#0B2F1D]">College Students</td>
                    <td className="py-4">3 Business Days</td>
                    <td className="py-4 font-bold text-emerald-700">24-48 Hours</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-bold text-[#0B2F1D]">Graduate Students</td>
                    <td className="py-4">5 Business Days</td>
                    <td className="py-4 font-bold text-emerald-700">48-72 Hours</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-bold text-[#0B2F1D]">Actual Business</td>
                    <td className="py-4">Agreed-Upon Date</td>
                    <td className="py-4 font-bold text-emerald-700">3-5 Business Days</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-bold text-[#0B2F1D]">Other Services</td>
                    <td className="py-4">Custom Timeline</td>
                    <td className="py-4 font-bold text-emerald-700">Expedited Rate</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-[11px] text-slate-400 italic mt-6">
              * All turnover periods begin upon receipt of final brief and deposit payment.
            </p>
          </motion.div>
        </div>
      </section>

     
      <section className="w-full bg-white py-24 px-6 md:px-12 lg:px-16 border-b border-slate-100">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <span className="text-[11px] font-extrabold tracking-widest text-[#205A3E] uppercase block mb-2">
                OPERATIONAL INTEGRITY
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-[#0B2F1D] tracking-tight">
                Revision Policy
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                Maintaining the mathematical rigor of financial consulting through structured refinement and clear operational boundaries.
              </p>
            </div>
          </div>

         
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-slate-200/80 flex items-start gap-5 shadow-sm"
          >
            <div className="w-12 h-12 rounded-xl bg-[#0B2F1D] text-white flex items-center justify-center text-xl shrink-0 shadow-md">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0B2F1D] mb-1.5">The 24-Hour Request Rule</h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                To ensure operational continuity and resource allocation precision, all revision requests must be submitted within{' '}
                <strong className="text-[#0B2F1D] font-bold">24 hours</strong> of receiving the initial deliverable. Requests beyond this window will be treated as new project scopes.
              </p>
            </div>
          </motion.div>

          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md space-y-6">
              <div className="flex items-center gap-2.5 text-[#0B2F1D]">
                <span className="text-lg">💵</span>
                <h4 className="font-bold text-base">Revision Service Fees</h4>
              </div>

              <div className="space-y-4">
                {/* Minor */}
                <div className="p-4 rounded-2xl bg-[#FAF8F5] flex justify-between items-center">
                  <div>
                    <h5 className="font-bold text-sm text-[#0B2F1D]">Minor Adjustments</h5>
                    <p className="text-xs text-slate-500">Under 60 minutes of labor</p>
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                    FREE
                  </span>
                </div>

               
                <div className="p-4 rounded-2xl bg-[#FAF8F5] flex justify-between items-center">
                  <div>
                    <h5 className="font-bold text-sm text-[#0B2F1D]">Standard Refinement</h5>
                    <p className="text-xs text-slate-500">1 - 2 hours of labor</p>
                  </div>
                  <span className="font-black text-lg text-[#0B2F1D]">₱300</span>
                </div>

               
                <div className="p-4 rounded-2xl bg-[#FAF8F5] flex justify-between items-center">
                  <div>
                    <h5 className="font-bold text-sm text-[#0B2F1D]">Major Structural Revision</h5>
                    <p className="text-xs text-slate-500">Beyond 2 hours of labor</p>
                  </div>
                  <div className="text-right">
                    <span className="font-black text-lg text-[#0B2F1D] block leading-none">₱150</span>
                    <span className="text-[10px] text-slate-400">per 30 mins</span>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="lg:col-span-5 bg-[#0B2F1D] text-white rounded-3xl p-7 shadow-xl flex flex-col justify-between min-h-[380px]">
              <div>
                <h4 className="text-lg font-bold text-white mb-5">Tips to prevent major revisions</h4>
                <ul className="space-y-4 text-xs text-slate-200">
                  <li className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span>Provide a comprehensive initial brief with clear objectives.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span>Ensure all raw data and financial inputs are verified before submission.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span>Establish visual preferences and template requirements early.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span>Schedule a sync-call if project parameters shift mid-process.</span>
                  </li>
                </ul>
              </div>

             
              <div className="mt-6 rounded-2xl overflow-hidden aspect-[16/7] border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800"
                  alt="Reviewing Documents"
                  className="w-full h-full object-cover grayscale-[30%] contrast-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="w-full bg-[#FAF8F5] py-24 px-6 md:px-12 lg:px-16 border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto space-y-16">
          
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-[#0B2F1D] tracking-tight mb-3">
              Sample Case Scenarios
            </h2>
            <p className="text-xs md:text-sm text-slate-600 max-w-2xl leading-relaxed">
              A transparent breakdown of how we calculate revision cycles and professional fees based on task complexity and duration.
            </p>
          </motion.div>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="bg-white rounded-2xl p-6 border-l-4 border-l-emerald-600 border border-slate-200/80 shadow-md flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#205A3E] block mb-4">
                  SCENARIO 01
                </span>
                <div className="space-y-2.5 text-xs text-slate-700 pb-6 border-b border-slate-100">
                  <div className="flex justify-between">
                    <span>1st Revision</span>
                    <span className="font-bold text-[#0B2F1D]">10 mins</span>
                  </div>
                  <div className="flex justify-between">
                    <span>2nd Revision</span>
                    <span className="font-bold text-[#0B2F1D]">15 mins</span>
                  </div>
                  <div className="flex justify-between">
                    <span>3rd Revision</span>
                    <span className="font-bold text-[#0B2F1D]">20 mins</span>
                  </div>
                  <div className="flex justify-between">
                    <span>4th Revision</span>
                    <span className="font-bold text-[#0B2F1D]">10 mins</span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <p className="text-[11px] text-slate-500 mb-1">Accumulated Time: <strong className="text-slate-800">55 mins</strong></p>
                <div className="flex justify-between items-baseline pt-2">
                  <span className="text-[10px] font-extrabold uppercase text-slate-400">FEE:</span>
                  <span className="text-2xl font-black text-emerald-700">FREE</span>
                </div>
              </div>
            </motion.div>

            
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="bg-white rounded-2xl p-6 border-l-4 border-l-emerald-600 border border-slate-200/80 shadow-md flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#205A3E] block mb-4">
                  SCENARIO 02
                </span>
                <div className="space-y-2.5 text-xs text-slate-700 pb-6 border-b border-slate-100">
                  <div className="flex justify-between">
                    <span>1st Revision</span>
                    <span className="font-bold text-[#0B2F1D]">35 mins</span>
                  </div>
                  <div className="flex justify-between">
                    <span>2nd Revision</span>
                    <span className="font-bold text-[#0B2F1D]">20 mins</span>
                  </div>
                  <div className="flex justify-between">
                    <span>3rd Revision</span>
                    <span className="font-bold text-[#0B2F1D]">10 mins</span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <p className="text-[11px] text-slate-500 mb-1">Accumulated Time: <strong className="text-slate-800">1 hour 5 mins</strong></p>
                <div className="flex justify-between items-center text-[10px] text-slate-400 mb-1">
                  <span>1ST TO 2ND:</span>
                  <span className="font-bold text-emerald-700">FREE</span>
                </div>
                <div className="flex justify-between items-baseline pt-1">
                  <span className="text-[10px] font-extrabold uppercase text-slate-400">TOTAL:</span>
                  <span className="text-2xl font-black text-[#0B2F1D]">₱300</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="bg-white rounded-2xl p-6 border-l-4 border-l-emerald-600 border border-slate-200/80 shadow-md flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#205A3E] block mb-4">
                  SCENARIO 03
                </span>
                <div className="space-y-2.5 text-xs text-slate-700 pb-6 border-b border-slate-100">
                  <div className="flex justify-between">
                    <span>1st Revision</span>
                    <span className="font-bold text-[#0B2F1D]">35 mins</span>
                  </div>
                  <div className="flex justify-between">
                    <span>2nd Revision</span>
                    <span className="font-bold text-[#0B2F1D]">30 mins</span>
                  </div>
                  <div className="flex justify-between">
                    <span>3rd Revision</span>
                    <span className="font-bold text-[#0B2F1D]">45 mins</span>
                  </div>
                  <div className="flex justify-between">
                    <span>4th Revision</span>
                    <span className="font-bold text-[#0B2F1D]">25 mins</span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <p className="text-[11px] text-slate-500 mb-1">Accumulated Time: <strong className="text-slate-800">2 hours 15 mins</strong></p>
                <div className="flex justify-between items-center text-[10px] text-slate-400 mb-1">
                  <span>1ST:</span>
                  <span className="font-bold text-emerald-700">FREE</span>
                </div>
                <div className="flex justify-between items-baseline pt-1">
                  <span className="text-[10px] font-extrabold uppercase text-slate-400">TOTAL:</span>
                  <span className="text-2xl font-black text-[#0B2F1D]">₱450</span>
                </div>
              </div>
            </motion.div>

           
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="bg-white rounded-2xl p-6 border-l-4 border-l-emerald-600 border border-slate-200/80 shadow-md flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#205A3E] block mb-4">
                  SCENARIO 04
                </span>
                <div className="space-y-2.5 text-xs text-slate-700 pb-6 border-b border-slate-100">
                  <div className="flex justify-between">
                    <span>1st-3rd</span>
                    <span className="font-bold text-[#0B2F1D]">1 hour</span>
                  </div>
                  <div className="flex justify-between">
                    <span>4th-5th</span>
                    <span className="font-bold text-[#0B2F1D]">45 mins</span>
                  </div>
                  <div className="flex justify-between">
                    <span>6th</span>
                    <span className="font-bold text-[#0B2F1D]">25 mins</span>
                  </div>
                  <div className="flex justify-between">
                    <span>7th-8th</span>
                    <span className="font-bold text-[#0B2F1D]">40 mins</span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <p className="text-[11px] text-slate-500 mb-1">Accumulated: <strong className="text-slate-800">2 hours 50 mins</strong></p>
                <div className="flex justify-between items-center text-[10px] text-slate-400 mb-1">
                  <span>1ST-3RD:</span>
                  <span className="font-bold text-emerald-700">FREE</span>
                </div>
                <div className="flex justify-between items-baseline pt-1">
                  <span className="text-[10px] font-extrabold uppercase text-slate-400">TOTAL:</span>
                  <span className="text-2xl font-black text-[#0B2F1D]">₱600</span>
                </div>
              </div>
            </motion.div>
          </div>

         
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200/80 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-5 space-y-6">
                <h3 className="text-2xl md:text-3xl font-black text-[#0B2F1D]">
                  Revision Cycles Breakdown
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  Our structured approach ensures that basic adjustments remain accessible while complex overhauls are managed with fair compensation.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3.5">
                    <div className="w-7 h-7 rounded-lg bg-[#0B2F1D] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-sm">
                      1
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-[#0B2F1D]">Cycle 1 to 4: Base Phase</h5>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Fundamental structural changes and initial drafting phase. Focus on alignment.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-7 h-7 rounded-lg bg-[#0B2F1D] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-sm">
                      2
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-[#0B2F1D]">Subsequent Cycles: Precision Phase</h5>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Fine-tuning and advanced corrections based on the accumulated session time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              
              <div className="lg:col-span-7 relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                  <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-slate-200/80 shadow-sm">
                    <h4 className="text-2xl font-black text-[#0B2F1D] mb-1">1st</h4>
                    <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider block mb-2">
                      REVISION
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Initial adjustments following the primary consultation phase.
                    </p>
                  </div>

                  <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-slate-200/80 shadow-sm">
                    <h4 className="text-2xl font-black text-[#0B2F1D] mb-1">2nd</h4>
                    <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider block mb-2">
                      REVISION
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Consolidated feedback integration and structural refinement.
                    </p>
                  </div>

                  <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-slate-200/80 shadow-sm">
                    <h4 className="text-2xl font-black text-[#0B2F1D] mb-1">3rd</h4>
                    <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider block mb-2">
                      REVISION
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Detailed polishing of specifics and technical data verification.
                    </p>
                  </div>

                  <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-slate-200/80 shadow-sm">
                    <h4 className="text-2xl font-black text-[#0B2F1D] mb-1">4th</h4>
                    <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider block mb-2">
                      REVISION
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Final checks and pre-delivery verification of all metrics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section className="w-full bg-white py-24 px-6 md:px-12 lg:px-16 border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto space-y-16">
          
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-[#0B2F1D] tracking-tight mb-3">
              Operating Standards
            </h2>
            <p className="text-xs md:text-sm text-slate-600 max-w-2xl leading-relaxed">
              Defining the parameters of our partnership through chronological availability and digital deliverable precision.
            </p>
          </motion.div>

          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="lg:col-span-5 bg-[#FAF8F5] rounded-3xl p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 text-[#0B2F1D] mb-8">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <h3 className="font-bold text-base">Working Hours / Working Days</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider block mb-1">
                      REGULAR OPERATIONS
                    </span>
                    <h4 className="text-3xl font-black text-[#0B2F1D]">Mon-Sat</h4>
                    <p className="text-sm font-bold text-emerald-800">8AM-12AM</p>
                  </div>

                  <div>
                    <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider block mb-1">
                      WEEKEND AVAILABILITY
                    </span>
                    <h4 className="text-3xl font-black text-[#0B2F1D]">Sun</h4>
                    <p className="text-sm font-bold text-emerald-800">12PM-12AM</p>
                  </div>
                </div>
              </div>
            </motion.div>

       
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="lg:col-span-7 flex flex-col justify-between"
            >
              <div className="rounded-3xl overflow-hidden shadow-md aspect-[16/9] bg-slate-100 border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200"
                  alt="Modern Sunlit Office with Greenery"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-slate-500 italic mt-3 leading-relaxed">
                Our extended operational hours ensure global coverage and real-time response for time-sensitive financial consulting engagements.
              </p>
            </motion.div>
          </div>

       
          <div className="space-y-8 pt-6">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-black text-[#0B2F1D] mb-2">
                Deliverable File Format
              </h3>
              <div className="w-12 h-1 bg-[#0B2F1D] rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="bg-[#FAF8F5] p-7 rounded-3xl border border-slate-200/80 shadow-sm space-y-4"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  
                </div>
                <h4 className="text-lg font-bold text-[#0B2F1D]">Excel</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Advanced financial modeling, ledger tracking, and automated auditing templates.
                </p>
              </motion.div>

        
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="bg-[#FAF8F5] p-7 rounded-3xl border border-slate-200/80 shadow-sm space-y-4"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  
                </div>
                <h4 className="text-lg font-bold text-[#0B2F1D]">Word</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Comprehensive strategy whitepapers, compliance documentation, and formal reports.
                </p>
              </motion.div>

             
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="bg-[#FAF8F5] p-7 rounded-3xl border border-slate-200/80 shadow-sm space-y-4"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  
                </div>
                <h4 className="text-lg font-bold text-[#0B2F1D]">PowerPoint</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Executive summaries, board presentations, and operational roadmap visualizations.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="w-full bg-[#FAF8F5] py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
         
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200/80 shadow-md space-y-5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 text-[#0B2F1D] mb-4">
                <span className="text-lg">📐</span>
                <h4 className="font-bold text-lg">Excel Template Terms of Use</h4>
              </div>
              <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
                <p>
                  All Excel templates provided by Feasib Accountant are proprietary intellectual property. These deliverables are licensed for internal use only by the designated client entity.
                </p>
                <p>
                  Modification of underlying macro code or formulas is restricted to preserve mathematical integrity and audit trails. Distribution to third-party consultants or external entities requires written authorization.
                </p>
              </div>
            </div>
          </motion.div>

          
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200/80 shadow-md space-y-5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 text-[#0B2F1D] mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-emerald-800">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <h4 className="font-bold text-lg">Data Privacy</h4>
              </div>
              <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
                <p>
                  Client data is handled under strict AES-256 encryption protocols. All financial information processed during our operational hours is isolated within secure, air-gapped environments for high-stakes modeling.
                </p>
                <p>
                  We comply with international data protection standards, ensuring that no sensitive PII (Personally Identifiable Information) leaves our secure consulting grove without explicit multi-factor verification.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
