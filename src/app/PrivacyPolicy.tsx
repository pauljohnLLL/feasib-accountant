import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { fadeInUp, staggerContainer } from '../lib/animations';

interface NavSection {
  id: string;
  label: string;
}

const SECTIONS: NavSection[] = [
  { id: 'section-01', label: '01. Information Collection' },
  { id: 'section-02', label: '02. Data Utilization' },
  { id: 'section-03', label: '03. Disclosure Policy' },
  { id: 'section-04', label: '04. Defense Mechanisms' },
  { id: 'section-05', label: '05. Client Prerogatives' },
  { id: 'section-06', label: '06. Contact Inquiries' },
];

export default function PrivacyPolicy() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string>('section-01');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -20 }}
      className="min-h-screen w-full bg-white text-[#0B2F1D] font-sans antialiased"
    >
      
      <section className="relative w-full bg-white pt-20 pb-16 px-6 md:px-12 lg:px-16 border-b border-slate-100 overflow-hidden">
        
        <div className="absolute top-12 right-8 md:right-16 w-10 h-10 rounded-full bg-[#0B2F1D] text-emerald-300 flex items-center justify-center shadow-xl">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6">
            <span className="text-[11px] font-extrabold tracking-widest text-[#205A3E] uppercase block mb-3">
              REGULATORY TRANSPARENCY
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-[68px] font-black text-[#0B2F1D] tracking-tight leading-[1.08]">
              Privacy <br />
              Policy.
            </h1>
          </div>
          <div className="lg:col-span-6 lg:pt-8">
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed max-w-xl">
              At Feasib Accountant, we are committed to protecting the privacy of our visitors and clients. This Privacy Policy outlines the types of information we collect, how we use it, and the steps we take to safeguard your personal data when you visit our website, avail our services, or interact with us.
            </p>
          </div>
        </div>
      </section>

     
      <section className="w-full bg-[#FAF8F5]/60 py-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <aside className="lg:col-span-3 sticky top-28 hidden lg:block bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-4">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block px-3">
              NAVIGATION
            </span>
            <nav className="flex flex-col space-y-1">
              {SECTIONS.map((sec) => {
                const isActive = activeSection === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`text-left text-xs px-3 py-2.5 rounded-xl font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#0B2F1D] text-white shadow-sm font-black'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-[#0B2F1D]'
                    }`}
                  >
                    {sec.label}
                  </button>
                );
              })}
            </nav>
          </aside>

         
          <div className="lg:col-span-9 space-y-16">
            
            <div id="section-01" className="space-y-6 scroll-mt-28">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl md:text-4xl font-black text-[#205A3E] opacity-40">01</span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0B2F1D] tracking-tight">
                  Information We Collect
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm space-y-4"
                >
                  <div className="flex items-center gap-2.5 text-[#0B2F1D]">
                    <span className="text-base">💼</span>
                    <h3 className="font-bold text-base">Personal ID</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When you inquire about our services, place an order, or communicate with us, we may collect personal details such as your name, email address, school, school address, phone number, and payment information (e.g., Gcash, Maya, Bank Transfer details).
                  </p>
                </motion.div>

               
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm space-y-4"
                >
                  <div className="flex items-center gap-2.5 text-[#0B2F1D]">
                    <span className="text-base"> </span>
                    <h3 className="font-bold text-base">Feasibility Study Data</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    To perform our services, you will provide us with specific financial data and details related to your feasibility study (e.g., lists of computations, assets, expenses, employees, business days, starting date of operations, previous chapters of your study). This information is used solely for the purpose of completing your requested financial computations.
                  </p>
                </motion.div>
              </div>

              
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="bg-white rounded-3xl p-7 border-l-4 border-l-[#0B2F1D] border border-slate-200/80 shadow-sm space-y-2"
              >
                <h3 className="font-bold text-sm text-[#0B2F1D]">Usage Data</h3>
                <p className="text-xs text-slate-600 italic leading-relaxed">
                  We may collect non-personally identifiable information about how you access and use our website. This can include your IP address, browser type, operating system, referring URLs, pages viewed, and the dates/times of your visits. This helps us understand website traffic and improve user experience.
                </p>
              </motion.div>
            </div>

            
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-xl aspect-[16/8] bg-slate-900"
            >
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200"
                alt="Consultant in Modern Office"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B2F1D]/90 via-[#0B2F1D]/60 to-transparent flex items-center p-8 md:p-12">
                <h3 className="text-white text-xl md:text-3xl font-black max-w-md leading-snug tracking-tight">
                  "Human expertise backed by algorithmic precision."
                </h3>
              </div>
            </motion.div>

            
            <div id="section-02" className="space-y-6 scroll-mt-28">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl md:text-4xl font-black text-[#205A3E] opacity-40">02</span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0B2F1D] tracking-tight">
                  How We Use Your Information
                </h2>
              </div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
              >
                {[
                  {
                    title: 'Service Delivery',
                    desc: 'Executing complex feasibility studies and strategic business mapping tailored to your specific industry requirements.',
                  },
                  {
                    title: 'Transaction Processing',
                    desc: 'Secure management of retainer fees and service settlements via verified financial channels.',
                  },
                  {
                    title: 'Communication',
                    desc: 'Delivering critical defense updates, methodology shifts, and project milestones via secure protocols.',
                  },
                  {
                    title: 'Website Improvement',
                    desc: 'Synthesizing anonymous behavioral data to optimize the Digital Boutique user experience.',
                  },
                  {
                    title: 'Security',
                    desc: 'Proactive monitoring for fraudulent attempts and unauthorized access to the Precision Grove network.',
                  },
                  {
                    title: 'Legal Compliance',
                    desc: 'Ensuring all data handling adheres to international accounting standards and local regulatory frameworks.',
                  },
                ].map((card, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-2 hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-bold text-sm text-[#0B2F1D]">{card.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{card.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

           
            <div id="section-03" className="scroll-mt-28">
              <div id="section-04" className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch scroll-mt-28">
                
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  className="bg-[#0B2F1D] text-white rounded-3xl p-8 shadow-xl space-y-4 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-3xl font-black text-emerald-400/80 italic block mb-3">03</span>
                    <h3 className="text-xl font-bold text-white mb-3">Data Sharing</h3>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      We do not trade, sell, or rent client data. Disclosure only occurs with vetted service partners or when strictly mandated by jurisdictional legal orders.
                    </p>
                  </div>
                </motion.div>

             
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm space-y-4 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-3xl font-black text-[#0B2F1D] italic block mb-3">04</span>
                    <h3 className="text-xl font-bold text-[#0B2F1D] mb-3">Data Security</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. This includes using secure servers and encrypted communication where appropriate. However, please remember that no method of transmission over the internet or method of electronic storage is 100% secure.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

           
            <motion.div
              id="section-05"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200/80 shadow-sm space-y-6 scroll-mt-28"
            >
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-black text-[#205A3E]">05</span>
                <h3 className="text-xl font-bold text-[#0B2F1D]">Your Choices and Rights</h3>
              </div>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#0B2F1D] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-[#0B2F1D] block mb-0.5 text-xs">Access & Rectification</strong>
                    <p className="text-slate-600 leading-relaxed">
                      Request a complete copy of your data profile or mandate corrections to any financial inaccuracies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#0B2F1D] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-[#0B2F1D] block mb-0.5 text-xs">Data Erasure</strong>
                    <p className="text-slate-600 leading-relaxed">
                      Mandate the deletion of your personal records upon completion of contract, subject to regulatory retention laws.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#0B2F1D] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-[#0B2F1D] block mb-0.5 text-xs">Withdrawal of Consent</strong>
                    <p className="text-slate-600 leading-relaxed">
                      Revoke marketing permissions at any time via the client portal preferences dashboard.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          
            <motion.div
              id="section-06"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200/80 shadow-sm scroll-mt-28"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                <div className="md:col-span-7 space-y-4">
                  <h3 className="text-2xl font-bold text-[#0B2F1D]">Inquiries</h3>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
                    For formal requests regarding data governance or to file a privacy concern, please contact our Compliance Officer.
                  </p>
                  <a
                    href="mailto:inquiry@feasibaccountant.com"
                    className="inline-flex items-center gap-2 font-bold text-sm text-[#0B2F1D] hover:text-emerald-700 transition-colors pt-2"
                  >
                    <span>inquiry@feasibaccountant.com</span>
                    <span>→</span>
                  </a>
                </div>

                
                <div className="md:col-span-5 bg-[#FAF8F5] p-6 rounded-2xl border border-slate-200/80 text-center space-y-3">
                  <div className="w-9 h-9 rounded-full bg-[#0B2F1D] text-white flex items-center justify-center font-bold mx-auto text-sm shadow-sm">
                    ?
                  </div>
                  <h4 className="font-bold text-sm text-[#0B2F1D]">Need a Consultation?</h4>
                  <p className="text-[11px] text-slate-500 max-w-[200px] mx-auto leading-relaxed">
                    Our experts are ready to defend your business strategy.
                  </p>
                  <button
                    onClick={() => navigate('/login')}
                    className="w-full bg-[#0B2F1D] hover:bg-[#154c2d] text-white text-xs font-bold py-2.5 rounded-xl transition-colors cursor-pointer"
                  >
                    CONTACT US
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

