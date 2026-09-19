import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { fadeInUp, staggerContainerSlow } from '../lib/animations';

const IMG_HERO = 'ResourcesHeroimage.png';
const IMG_CTA = 'Feasibilityimage.png';
const IMG_TEAM = 'WorkingGroupimage.png';

export default function Resources() {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  const handleFeedbackSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for your feedback!');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <motion.div
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen w-full font-sans pb-0"
    >

      
      <motion.div
        variants={staggerContainerSlow}
        initial="hidden"
        animate="visible"
        className="bg-white text-[#0B2F1D] pt-20 pb-12 px-6 md:px-12"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#e9ebe8] rounded-3xl p-6 md:p-10 shadow-sm">
            <motion.div variants={fadeInUp} className="flex flex-col justify-center space-y-6 pl-2 md:pl-6">
              <h1 className="text-4xl md:text-6xl lg:text-[64px] font-bold text-[#0f4d16] leading-[1.1] tracking-tight">
                You don't have to <br />
                pay for everything.
              </h1>
              <p className="text-[#4a5c4a] text-base md:text-lg leading-relaxed max-w-lg">
                We believe high-level financial precision should be accessible. Our "Precision Grove" philosophy ensures your growth isn't stunted by overhead.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => scrollToSection('home')}
                  className="bg-[#0f4d16] hover:bg-[#0a3a0f] text-white font-bold text-sm px-8 py-3.5 rounded-full transition-colors shadow-md"
                >
                  Consult Our Experts
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="bg-[#cfd2ce] hover:bg-[#bcbfba] text-[#0f4d16] font-bold text-sm px-8 py-3.5 rounded-full transition-colors"
                >
                  View Free Materials
                </button>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative flex justify-center w-full h-full">
              <div className="relative w-full max-w-[550px] aspect-[4/3] rounded-2xl overflow-visible shadow-xl border border-white/20 bg-white">
                <img
                  src={IMG_HERO}
                  alt="Professional Consultant"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute -bottom-5 -left-4 md:-left-6 bg-white border border-gray-200 shadow-xl rounded-xl px-4 py-3 flex items-center gap-3 w-[220px] max-w-[90%]">
                  <div className="w-10 h-10 rounded-full bg-[#0f4d16]/5 border border-[#0f4d16]/20 flex items-center justify-center text-[#0f4d16] shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M9 12l2 2 4-4" />
                      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z" />
                    </svg>
                  </div>
                  <div className="text-[11px] text-[#1f2d1f] font-semibold leading-tight">
                    Trusted by 500+ Local <br /> Businesses in 2023.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

    
      <motion.div
        variants={staggerContainerSlow}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        className="bg-[#FAF8F5] py-24 px-6 md:px-12 lg:px-16"
      >
        <div className="max-w-[1400px] mx-auto flex flex-col gap-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-[#0f4d16] rounded-2xl p-10 flex flex-col justify-between min-h-[340px] shadow-md"
            >
              <div>
                <div className="text-[#97ad97] text-xs font-bold tracking-wider uppercase mb-4">Our Commitment</div>
                <h3 className="text-[#b3f0ae] text-3xl font-normal leading-[1.2] max-w-[220px] tracking-tight">
                  We balance the organic growth of your brand with the mathematical rigor of elite consulting.
                </h3>
              </div>
              <div className="flex items-center gap-3 mt-8 bg-[#b3f0ae]/10 w-fit px-3 py-2 rounded-lg">
                <div className="w-8 h-8 rounded bg-[#b3f0ae]/20 flex items-center justify-center text-[#b3f0ae]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <span className="text-[#b3f0ae] text-xs font-medium">Lifetime Strategic Support</span>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-[#cfd2ce] rounded-2xl p-10 flex flex-col justify-center items-center text-center min-h-[340px] shadow-md"
            >
              <h3 className="text-[#101010] text-5xl font-bold mb-2">0%</h3>
              <p className="text-[#0f4d16] font-bold text-xs uppercase tracking-wide">Hidden Fees</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-[#43ad32] rounded-2xl p-10 flex flex-col justify-end min-h-[340px] shadow-md"
            >
              <div>
                <h3 className="text-[#0f4d16] text-5xl font-bold tracking-tight">98.4%</h3>
                <p className="text-[#0f4d16] text-sm leading-relaxed mt-2 max-w-[180px] font-medium">
                  Client Retention Rate through transparent material sharing.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-[#eef0ed] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 min-h-[160px] shadow-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-[#b3f0ae]/30 flex items-center justify-center text-[#0f4d16] shrink-0 shadow-sm">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <p className="text-[#0f4d16] font-bold text-sm leading-relaxed max-w-sm">
                Secure financial mapping designed for boutique scalability.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-[#eef0ed] rounded-2xl p-8 md:p-10 relative min-h-[160px] shadow-sm"
            >
              <h4 className="text-[#0f4d16] font-bold text-sm mb-2">Precision Grove Strategy</h4>
              <p className="text-[#4a5c4a] text-sm leading-relaxed max-w-md">
                Our editorial-first approach to accounting provides clarity where others see chaos. We don't just calculate; we curate your financial narrative.
              </p>
              <div className="absolute bottom-4 right-4 text-[#cfd2ce] pointer-events-none">
                <svg width="80" height="40" viewBox="0 0 80 40" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 38 L60 2" />
                  <path d="M60 2 L78 2 L78 20" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      
      <motion.div
        variants={staggerContainerSlow}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        className="bg-[#00450d]/80 backdrop-blur-sm py-24 px-6 md:px-12 lg:px-16"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#eef0ed] rounded-3xl p-6 md:p-10 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <motion.div variants={fadeInUp} className="flex flex-col space-y-5 pl-2 md:pl-6">
                <div className="inline-flex items-center bg-[#d6f2d4] text-[#0f4d16] text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full w-fit">
                  Expert Analysis
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#0f4d16] leading-[1.05] tracking-tight">
                  Need help with your <br />
                  feasibility study?
                </h2>
                <p className="text-[#4a5c4a] text-sm md:text-base leading-relaxed max-w-md">
                  Turn uncertainty into architectural precision. We provide the rigorous financial modeling and market intelligence required to validate your next major venture.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button className="bg-[#0f4d16] hover:bg-[#0a3a0f] text-white font-bold text-sm px-8 py-3.5 rounded-full transition-colors shadow-md">
                    Download Guide
                  </button>
                  <button className="bg-[#cfd2ce] hover:bg-[#bcbfba] text-[#0f4d16] font-bold text-sm px-8 py-3.5 rounded-full transition-colors flex items-center gap-2">
                    View Case Studies <span className="text-base font-normal">→</span>
                  </button>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="relative flex justify-center md:justify-end py-4 md:py-0">
                <div className="absolute w-[95%] h-[95%] bg-[#d6f2d4] rounded-2xl -left-4 top-4 md:-left-10 md:top-8 z-0 pointer-events-none" />
                <div className="relative z-10 w-full max-w-[520px] aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-gray-200">
                  <img
                    src={IMG_CTA}
                    alt="Person analyzing financial paperwork"
                    className="w-full h-full object-cover grayscale-[30%] contrast-105"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      
      <motion.div
        variants={staggerContainerSlow}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        className="bg-[#f7faf7]/80 backdrop-blur-sm py-24 px-6 md:px-12 lg:px-16"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#f4f6f3] rounded-3xl p-6 md:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <motion.div variants={fadeInUp} className="lg:col-span-5 flex flex-col space-y-6 pl-2 md:pl-4">
                <h2 className="text-4xl md:text-5xl font-bold text-[#0f4d16] leading-[1.1] tracking-tight">
                  Why choose <br />
                  Feasib Accountant?
                </h2>
                <div className="flex flex-col space-y-8 mt-2">
                  {[
                    {
                      num: '01',
                      title: 'Bespoke Modeling',
                      body: "We don't use templates. Every projection is built from the ground up to reflect your unique industry variables and competitive landscape.",
                    },
                    {
                      num: '02',
                      title: 'Editorial Clarity',
                      body: "Financial data is useless if you can't read it. Our reports are designed for executive clarity, turning complex figures into actionable narratives.",
                    },
                    {
                      num: '03',
                      title: 'The Grove Philosophy',
                      body: "We balance aggressive growth with mathematical stability. We don't just find the ceiling; we build the floor.",
                    },
                  ].map(({ num, title, body }) => (
                    <div key={num} className="flex gap-4">
                      <span className="text-[#b3f0ae] font-bold text-2xl tracking-tight shrink-0">{num}</span>
                      <div>
                        <h4 className="font-bold text-[#0f4d16] text-base">{title}</h4>
                        <p className="text-[#4a5c4a] text-xs leading-relaxed mt-1 max-w-sm">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="lg:col-span-7 relative flex flex-col h-full mt-4 lg:mt-0">
                <div className="relative w-full flex flex-col md:flex-row gap-4 md:gap-0 justify-end">
                  <div className="relative w-full md:w-[65%] aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white/10 z-10">
                    <img src={IMG_TEAM} alt="Team working together on a laptop" className="w-full h-full object-cover" />
                  </div>
                  <div className="relative w-full md:w-[45%] md:-ml-8 md:mt-10 bg-[#0f4d16] rounded-2xl p-6 flex flex-col justify-center shadow-xl z-20 min-h-[200px] md:min-h-[240px]">
                    <h3 className="text-white text-5xl font-bold tracking-tight">98%</h3>
                    <p className="text-[#b3f0ae] text-[10px] font-bold uppercase tracking-widest mt-1">Precision Rate</p>
                    <p className="text-[#b3d1b3] text-[11px] leading-relaxed mt-3 max-w-[180px]">
                      Our historical variance between projected and actual performance for long-term study clients.
                    </p>
                  </div>
                </div>
                <div className="w-full mt-4 md:mt-[-40px] relative z-10 bg-[#d6f2d4] rounded-2xl p-8 md:p-10 flex flex-col justify-center shadow-sm min-h-[220px] md:min-h-[280px]">
                  <p className="text-[#0f4d16] font-bold text-lg md:text-xl leading-relaxed max-w-2xl mb-4">
                    "Feasib didn't just give us a spreadsheet; they gave us a roadmap that accurately predicted our Q3 expansion hurdles six months in advance."
                  </p>
                  <p className="text-[#4a5c4a] text-xs font-medium">— Sarah Chen, CTO of Venturer Group</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      
      <motion.div
        variants={staggerContainerSlow}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        className="bg-[#ecefec]/80 backdrop-blur-sm py-24 px-6 md:px-12 lg:px-16"
      >
        <div className="max-w-[1400px] mx-auto">
          <motion.div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] p-8 md:p-12">
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-bold text-[#0f4d16] mb-3">Share Your Perspective</h2>
              <div className="w-14 h-1 bg-[#0f4d16] rounded-full mb-8" />
            </motion.div>

            <motion.form variants={staggerContainerSlow} className="space-y-6" onSubmit={handleFeedbackSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={fadeInUp} className="flex flex-col space-y-1.5">
                  <label htmlFor="fb-name" className="text-[#0f4d16] font-bold text-xs">Name</label>
                  <input
                    id="fb-name"
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-[#f4f6f3] border-none rounded-md px-4 py-3 text-sm text-[#0B2F1D] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0f4d16]/30 shadow-inner"
                  />
                </motion.div>
                <motion.div variants={fadeInUp} className="flex flex-col space-y-1.5">
                  <label htmlFor="fb-email" className="text-[#0f4d16] font-bold text-xs">Email Address</label>
                  <input
                    id="fb-email"
                    type="email"
                    placeholder="email@example.com"
                    className="w-full bg-[#f4f6f3] border-none rounded-md px-4 py-3 text-sm text-[#0B2F1D] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0f4d16]/30 shadow-inner"
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={fadeInUp} className="flex flex-col space-y-1.5">
                  <label htmlFor="fb-course" className="text-[#0f4d16] font-bold text-xs">Program/Course</label>
                  <input
                    id="fb-course"
                    type="text"
                    placeholder="Business Administration"
                    className="w-full bg-[#f4f6f3] border-none rounded-md px-4 py-3 text-sm text-[#0B2F1D] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0f4d16]/30 shadow-inner"
                  />
                </motion.div>
                <motion.div variants={fadeInUp} className="flex flex-col space-y-1.5">
                  <label htmlFor="fb-level" className="text-[#0f4d16] font-bold text-xs">Education Level</label>
                  <div className="relative">
                    <select
                      id="fb-level"
                      className="w-full bg-[#f4f6f3] border-none rounded-md px-4 py-3 text-sm text-[#0B2F1D] appearance-none focus:outline-none focus:ring-2 focus:ring-[#0f4d16]/30 shadow-inner cursor-pointer"
                      defaultValue="Graduate"
                    >
                      <option>Undergraduate</option>
                      <option>Graduate</option>
                      <option>Post Graduate</option>
                      <option>Professional</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#0f4d16]">
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 1L5 5L9 1" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div variants={fadeInUp} className="flex flex-col space-y-1.5">
                <label htmlFor="fb-school" className="text-[#0f4d16] font-bold text-xs">School / Institution</label>
                <input
                  id="fb-school"
                  type="text"
                  placeholder="University of Finance"
                  className="w-full bg-[#f4f6f3] border-none rounded-md px-4 py-3 text-sm text-[#0B2F1D] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0f4d16]/30 shadow-inner"
                />
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col space-y-1.5">
                <label htmlFor="fb-feedback" className="text-[#0f4d16] font-bold text-xs">Feedback</label>
                <textarea
                  id="fb-feedback"
                  rows={4}
                  placeholder="Tell us about your experience..."
                  className="w-full bg-[#f4f6f3] border-none rounded-md px-4 py-3 text-sm text-[#0B2F1D] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0f4d16]/30 shadow-inner resize-none"
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <button
                  type="submit"
                  className="w-full bg-[#0f4d16] hover:bg-[#0a3a0f] text-white font-bold text-sm px-6 py-4 rounded-md transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  Submit Professional Feedback
                  <span className="text-lg font-normal">→</span>
                </button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </motion.div>

    </motion.div>
  );
}