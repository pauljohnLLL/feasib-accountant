import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { fadeInUp, staggerContainer } from '../lib/animations';

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -20 }}
      className="min-h-screen w-full bg-white text-[#0B2F1D] font-sans antialiased"
    >
      
      <section className="relative w-full bg-white pt-20 pb-20 px-6 md:px-12 lg:px-16 border-b border-slate-100 overflow-hidden">
        
        <div className="absolute top-12 right-8 md:right-16 w-10 h-10 rounded-full bg-[#0B2F1D] text-emerald-300 flex items-center justify-center shadow-xl z-20">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 space-y-6"
          >
            <span className="text-[11px] font-extrabold tracking-widest text-[#205A3E] uppercase block">
              MENTORSHIP & MASTERY
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-black text-[#0B2F1D] tracking-tight leading-[1.08]">
              Your Accounting <br />
              <span className="text-[#79B669]">Ate and Kuya.</span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              We, your accounting Ate and Kuya, are here to help and guide you throughout your feasibility study journey, especially for the financial aspect of your research.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We're your dedicated team of number-crunching friends, here to make the financial aspect of your study clear, accurate, and stress-free. Our mission is simple: to help students like you confidently conquer the financial computations so you can focus on the bigger picture of your amazing research.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => navigate('/login')}
                className="bg-[#205A3E] hover:bg-[#154c2d] text-white font-bold text-xs px-8 py-3.5 rounded-lg shadow-md transition-all cursor-pointer"
              >
                Get Started
              </button>
              <button
                onClick={() => document.getElementById('who-we-are')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white hover:bg-slate-50 text-[#0B2F1D] border border-slate-300 font-bold text-xs px-8 py-3.5 rounded-lg transition-all cursor-pointer shadow-sm"
              >
                Learn More
              </button>
            </div>
          </motion.div>

          
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3] sm:aspect-[14/11] bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200"
                alt="Filipino Accounting Consultants"
                className="w-full h-full object-cover"
              />
            </div>

            
            <div className="absolute -bottom-6 left-4 sm:left-6 bg-white/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/60 shadow-xl max-w-[280px]">
              <span className="text-2xl sm:text-3xl font-black text-[#0B2F1D] block leading-tight mb-1">
                100%
              </span>
              <p className="text-[11px] text-slate-600 leading-snug">
                Filipino Hospitality applied to global accounting standards.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      
      <section id="who-we-are" className="w-full bg-white py-24 px-6 md:px-12 lg:px-16 border-b border-slate-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#0B2F1D] tracking-tight">
              Who We Are
            </h2>
            <div className="w-16 h-1.5 bg-[#79B669] rounded-full mt-4" />
          </div>
          <div className="lg:col-span-8">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              Think of us as your go-to experts who actually enjoy untangling financial data! Our team is composed of experienced accounting and finance professionals who genuinely understand the academic world and the unique challenges of student projects. We built Feasib Accountant because we saw a real need for reliable, affordable, and easy-to-understand financial statements for students.
            </p>
          </div>
        </div>
      </section>

     
      <section className="w-full bg-[#FAF8F5] py-24 px-6 md:px-12 lg:px-16 border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto space-y-14">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center max-w-2xl mx-auto space-y-3"
          >
            <h2 className="text-3xl md:text-4xl font-black text-[#0B2F1D] tracking-tight">
              What We Do
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We take all your raw data and transform it into polished, professional financial statements and analyses that are ready for your presentation.
            </p>
          </motion.div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-10 border border-slate-200/80 shadow-sm space-y-4 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-900 flex items-center justify-center text-2xl">
                🏛️
              </div>
              <h3 className="text-2xl font-black text-[#0B2F1D]">Strategic Financial Consulting</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We provide high-level strategic oversight, ensuring your business model is not only feasible but sustainable and scalable across international borders.
              </p>
            </motion.div>

            
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#205A3E] text-white rounded-2xl p-10 shadow-xl space-y-4 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 text-emerald-300 flex items-center justify-center text-2xl">
                👥
              </div>
              <h3 className="text-2xl font-black text-white">Ate & Kuya Mentorship</h3>
              <p className="text-sm text-slate-100 leading-relaxed">
                Direct mentorship for startups and MSMEs, bringing professional expertise with the approachability of a trusted family member.
              </p>
            </motion.div>

            
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-10 border border-slate-200/80 shadow-sm space-y-4 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-900 flex items-center justify-center text-2xl">
                📊
              </div>
              <h3 className="text-2xl font-black text-[#0B2F1D]">Precision Auditing</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our "Veridian Audit" methodology ensures 100% compliance with zero-tolerance for inaccuracy, providing total peace of mind for your stakeholders.
              </p>
            </motion.div>

            
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-md bg-slate-900 min-h-[300px]"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200"
                alt="Consultant Working at Desk"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-10">
                <h3 className="text-white text-2xl sm:text-3xl font-black tracking-tight">
                  Global Standards, Filipino Heart.
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      
      <section className="w-full bg-white py-24 px-6 md:px-12 lg:px-16 border-b border-slate-100">
        <div className="max-w-6xl mx-auto space-y-12">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-[#0B2F1D] tracking-tight">
              Our Commitment to You
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-10"
          >
           
            <motion.div variants={fadeInUp} className="flex items-start gap-8">
              <span className="text-4xl md:text-5xl font-black text-[#79B669] shrink-0 leading-none">01</span>
              <div>
                <h3 className="text-xl font-bold text-[#0B2F1D] mb-2">Radical Transparency</h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-3xl font-medium">
                  We believe trust is built through clarity. Every number, every report, and every strategic move is explained with the patience of a teacher and the rigor of a master accountant.
                </p>
              </div>
            </motion.div>

          
            <motion.div variants={fadeInUp} className="flex items-start gap-8">
              <span className="text-4xl md:text-5xl font-black text-[#79B669] shrink-0 leading-none">02</span>
              <div>
                <h3 className="text-xl font-bold text-[#0B2F1D] mb-2">Adaptive Stewardship</h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-3xl font-medium">
                  Your business is dynamic. Our commitment is to evolve alongside you, providing adaptive financial frameworks that protect your capital while enabling aggressive growth when the market calls for it.
                </p>
              </div>
            </motion.div>

           
            <motion.div variants={fadeInUp} className="flex items-start gap-8">
              <span className="text-4xl md:text-5xl font-black text-[#79B669] shrink-0 leading-none">03</span>
              <div>
                <h3 className="text-xl font-bold text-[#0B2F1D] mb-2">Mentorship for All</h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-3xl font-medium">
                  Whether you are a solo entrepreneur or a large-scale corporation, we commit to the same level of focus and mentorship that Feasib was founded upon.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      
      <section className="w-full bg-[#0B2F1D] py-24 px-6 md:px-12 lg:px-16 text-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Ready to defend your feasibility?
          </h2>
          <p className="text-sm md:text-base text-slate-300 font-medium">
            Let's talk and have your feasib defended!
          </p>
          <div className="pt-4">
            <button
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }, 300);
              }}
              className="bg-[#79B669] hover:bg-[#68a558] text-[#0B2F1D] font-black text-xs px-10 py-4 rounded-lg shadow-xl transition-all cursor-pointer"
            >
              Start Your Consultation
            </button>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
