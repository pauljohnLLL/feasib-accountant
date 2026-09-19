import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, fadeIn, staggerContainer } from '../lib/animations';
import {
  chartBars,
  servicesData,
  freeServicesData,
  serviceFlowSteps,
  testimonialsData,
  faqData,
} from '../lib/constants';


const freeServiceIcons = [
  
  <svg key="0" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
    <rect x="3" y="4" width="18" height="13" rx="2" stroke="#79b669" strokeWidth="1.6" />
    <path d="M8 21h8M12 17v4" stroke="#79b669" strokeWidth="1.6" strokeLinecap="round" />
  </svg>,
  
  <svg key="1" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
    <path d="M4 20l1.2-4.2L16 5a2 2 0 0 1 3 3L8.2 18.8 4 20Z" stroke="#79b669" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>,
  
  <svg key="2" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
    <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5c-1.4 0-2.7-.3-3.9-.9L3 20l1.1-5.4A8.5 8.5 0 1 1 21 11.5Z" stroke="#79b669" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>,
  
  <svg key="3" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
    <path d="M9 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM15 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 20c.5-2.7 2.6-4.5 6-4.5S14.5 17.3 15 20M12 20c.5-2.7 2.6-4.5 5-4.5" stroke="#79b669" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];


const serviceFlowIcons = [
  <svg key="0" viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5c-1.4 0-2.7-.3-3.9-.9L3 20l1.1-5.4A8.5 8.5 0 1 1 21 11.5Z" stroke="#104502" strokeWidth="1.6" strokeLinejoin="round" /></svg>,
  <svg key="1" viewBox="0 0 24 24" fill="none" className="w-5 h-5"><rect x="2" y="6" width="20" height="13" rx="2" stroke="#104502" strokeWidth="1.6" /><circle cx="12" cy="12.5" r="3" stroke="#104502" strokeWidth="1.6" /></svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path d="M4 20h4l10-10-4-4L4 16v4Z" stroke="#104502" strokeWidth="1.6" strokeLinejoin="round" /><path d="M13 6l4 4" stroke="#104502" strokeWidth="1.6" /></svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" className="w-5 h-5"><circle cx="8" cy="9" r="3" stroke="#104502" strokeWidth="1.6" /><circle cx="16" cy="9" r="3" stroke="#104502" strokeWidth="1.6" /><path d="M2 20c.6-3 3-5 6-5s5.4 2 6 5M12 20c.5-2.6 2.4-4.5 5-5" stroke="#104502" strokeWidth="1.6" strokeLinecap="round" /></svg>,
  <svg key="4" viewBox="0 0 24 24" fill="none" className="w-5 h-5"><rect x="4" y="3" width="16" height="18" rx="2" stroke="#104502" strokeWidth="1.6" /><path d="M8 8h8M8 12h8M8 16h4" stroke="#104502" strokeWidth="1.6" strokeLinecap="round" /></svg>,
  <svg key="5" viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path d="M3 12a9 9 0 1 1 3 6.7" stroke="#104502" strokeWidth="1.6" strokeLinecap="round" /><path d="M3 18v-4h4" stroke="#104502" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>,
];


function ServiceFlowCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollRef = useRef(0);
  const resumeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let raf: number;
    const speed = 0.6;

    const tick = () => {
      if (!pausedRef.current && !draggingRef.current) {
        el.scrollLeft += speed;
        const singleSetWidth = el.scrollWidth / 2;
        if (el.scrollLeft >= singleSetWidth) el.scrollLeft -= singleSetWidth;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const scheduleResume = () => {
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    resumeTimeout.current = setTimeout(() => { pausedRef.current = false; }, 1200);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    pausedRef.current = true;
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    if (e.pointerType === 'mouse') {
      draggingRef.current = true;
      startXRef.current = e.clientX;
      startScrollRef.current = el.scrollLeft;
      try { el.setPointerCapture(e.pointerId); } catch { /* no-op */ }
    }
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    const el = scrollRef.current;
    if (!el) return;
    el.scrollLeft = startScrollRef.current - (e.clientX - startXRef.current);
  };

  const endDrag = (e: React.PointerEvent) => {
    if (draggingRef.current && scrollRef.current) {
      try { scrollRef.current.releasePointerCapture(e.pointerId); } catch { /* no-op */ }
    }
    draggingRef.current = false;
    scheduleResume();
  };

  const scrollCards = (direction: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    pausedRef.current = true;
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    el.scrollBy({ left: direction * Math.min(344, el.clientWidth * 0.82), behavior: 'smooth' });
    scheduleResume();
  };

  const cards = [...serviceFlowSteps, ...serviceFlowSteps];

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Show previous service steps"
        onPointerDown={(event) => event.stopPropagation()}
        onClick={() => scrollCards(-1)}
        className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-[#0B2F1D]/15 text-[#0B2F1D] shadow-lg hover:bg-white hover:-translate-y-1/2 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#205A3E] transition"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 mx-auto" aria-hidden="true">
          <path d="m14 6-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <button
        type="button"
        aria-label="Show next service steps"
        onPointerDown={(event) => event.stopPropagation()}
        onClick={() => scrollCards(1)}
        className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-[#0B2F1D]/15 text-[#0B2F1D] shadow-lg hover:bg-white hover:-translate-y-1/2 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#205A3E] transition"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 mx-auto" aria-hidden="true">
          <path d="m10 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div
        ref={scrollRef}
        className="service-flow-viewport flex gap-6 overflow-x-auto cursor-grab active:cursor-grabbing select-none [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onPointerCancel={endDrag}
        onWheel={() => { pausedRef.current = true; scheduleResume(); }}
      >
        {cards.map((step, i) => (
          <div
            key={i}
            className="shrink-0 w-[280px] md:w-[320px] bg-white/70 backdrop-blur-md border border-white/50 rounded-2xl shadow-xl overflow-hidden select-none"
          >
            <div className="h-36 bg-gradient-to-br from-[#c9d8c8] via-[#e6ede5] to-[#dfe8dd] relative overflow-hidden">
              {step.image && (
                <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
              )}
            </div>
            <div className="p-6">
              <span className="block text-3xl font-semibold text-[#00450d]/15 leading-none mb-2">{step.num}</span>
              <h3 className="text-[#00450d] font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-[#41493e] text-xs leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default function LandingPage() {
  const navigate = useNavigate();
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const toggleAccordion = (index: number) =>
    setActiveAccordion(activeAccordion === index ? null : index);

  const renderServiceCard = (service: (typeof servicesData)[number]) => (
    <motion.div
      key={service.id}
      onClick={() => toggleAccordion(service.id)}
      variants={fadeInUp}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 cursor-pointer shadow-xl transition-all group"
    >
      <div className="flex justify-between items-center">
        <div>
          <span className="text-[10px] font-black text-white/60 block mb-1">
            {String(service.id).padStart(2, '0')}
          </span>
          <h3 className="text-[15px] font-black text-white group-hover:text-emerald-300 leading-tight">{service.title}</h3>
        </div>
        <div className="text-2xl text-white/60 font-light transition-transform duration-300">
          {activeAccordion === service.id ? 'âˆ’' : '+'}
        </div>
      </div>

      <AnimatePresence>
        {activeAccordion === service.id && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-4 pt-4 border-t border-white/10">
              <ul className="space-y-2">
                {service.inclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[11px] text-slate-200 font-medium">
                    <span className="text-emerald-400 mt-0.5">â€¢</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  const toggleFAQ = (index: number) =>
    setActiveFAQ(activeFAQ === index ? null : index);

  void renderServiceCard;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, x: -20 }}>

      
      <motion.section
        id="home"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="relative min-h-screen flex flex-col justify-between text-white overflow-hidden bg-[#0B2F1D]"
      >
        <motion.div variants={fadeIn} className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="landingvid-poster.jpg"
            className="w-full h-full object-cover opacity-100"
          >
            <source src="landingvid.mp4" type="video/mp4" />
          </video>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B2F1D]/80 via-transparent to-[#0B2F1D] pointer-events-none z-10" />

        <motion.div
          variants={staggerContainer}
          className="relative z-20 max-w-4xl mx-auto px-6 text-center pt-6 md:pt-8 pb-12 flex-1 flex flex-col justify-start items-center"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-bold tracking-widest text-emerald-300 uppercase">YOUR STUDY, OUR STRATEGY.</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-sans font-black text-white tracking-tight max-w-3xl leading-[1.15] mb-6">
            Don't stress yourself. <br /><span className="text-emerald-300 italic font-normal font-serif">Let the accountant</span> <br />do the accounting.
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-sm md:text-base text-slate-200 font-normal max-w-2xl leading-relaxed mb-10">
            We prepare reliable Financial Aspect computations so you can defend
            your Feasibility Study with confidence — reviewed, explained, and delivered on time.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto">
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-white hover:bg-slate-100 text-[#0B2F1D] font-black text-xs px-6 py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
            >
              Book a Free 20-min Consultation
            </button>
            <a
              href="#services"
              className="w-full sm:w-auto bg-transparent hover:bg-white/5 text-white border border-white/30 font-bold text-xs px-6 py-4 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              View Services <span className="text-sm">→</span>
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="w-full max-w-2xl grid grid-cols-3 gap-4 pt-8 border-t border-white/10 backdrop-blur-sm bg-white/5 rounded-2xl p-5">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-black text-white">100+</h3>
              <p className="text-[10px] font-bold text-emerald-300/80 uppercase tracking-wider mt-1.5">Students Served</p>
            </div>
            <div className="text-center border-x border-white/10">
              <h3 className="text-2xl md:text-3xl font-black text-white">5.0</h3>
              <p className="text-[10px] font-bold text-emerald-300/80 uppercase tracking-wider mt-1.5">Facebook Rating</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-black text-white">Since 2019</h3>
              <p className="text-[10px] font-bold text-emerald-300/80 uppercase tracking-wider mt-1.5">Trusted Team</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

     
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInUp}
        className="w-full bg-[#FAF8F5]/80 backdrop-blur-sm text-[#0B2F1D] py-24 px-6 md:px-12 lg:px-16 select-none"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 flex flex-col justify-center w-full">
            <span className="text-[11px] font-extrabold tracking-widest text-[#205A3E] uppercase mb-3">HI THERE, FEASIBMATE</span>
            <h2 className="text-3xl md:text-[42px] font-sans font-black text-[#0B2F1D] leading-[1.12] tracking-tight mb-5">
              We help students <span className="text-[#205A3E] italic font-normal font-serif">defend</span> <br />
              their Feasibility Study with a <span className="text-[#D97706]">reliable</span> Financial Aspect.
            </h2>
            <p className="text-xs md:text-sm text-slate-800 leading-relaxed mb-3">
              We are <strong className="font-bold text-[#0B2F1D]">Feasib Accountant</strong>. Since 2019, we've quietly served over a hundred students from different schools across Luzon, Visayas, and Mindanao.
            </p>
            <div className="flex flex-wrap gap-2 items-center">
              <div className="bg-[#E6F4EA] text-[#137333] px-3 py-1 rounded-full text-[11px] font-bold">100+ Groups Served</div>
              <div className="bg-[#FEF7E0] text-[#B06000] px-3 py-1 rounded-full text-[11px] font-bold">5.0 Facebook Rating</div>
            </div>
          </div>
          <div className="lg:col-span-7 relative w-full flex justify-end items-center mt-4 lg:mt-0">
            <motion.div whileHover={{ scale: 1.02 }} className="w-full h-[360px] md:h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200"
                alt="Workspace"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInUp}
        className="w-full bg-[#FAF8F5]/80 backdrop-blur-sm py-24 px-6 md:px-12"
      >
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-bold text-2xl md:text-3xl text-[#00450d] mb-4">Sample Financial Aspect</h2>
          <p className="text-[#41493e] text-sm md:text-base leading-relaxed">
            You might be wondering, what is it specifically that we are doing?
          </p>
          <p className="text-[#41493e] text-sm md:text-base leading-relaxed">
            To give you a short glimpse of our service, please watch the overview of our sample output.
          </p>
        </div>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-[#0b2e02]/90 backdrop-blur-md border border-white/10 relative cursor-pointer group"
        >
          <div className="relative h-[420px] md:h-[480px] bg-gradient-to-b from-[#10190f] via-[#0b1310] to-[#05100a] flex flex-col items-center justify-center px-6 md:px-10 pt-10 pb-16">
            <svg className="absolute left-6 bottom-10 w-14 h-20 opacity-70" viewBox="0 0 60 90" fill="none">
              <path d="M30 90 L30 40" stroke="#79b669" strokeWidth="3" />
              <path d="M30 55 C10 45, 5 25, 15 10" stroke="#79b669" strokeWidth="3" fill="none" />
              <path d="M30 50 C50 40, 55 20, 45 5" stroke="#79b669" strokeWidth="3" fill="none" />
              <path d="M30 62 C15 58, 8 48, 12 35" stroke="#acf4a4" strokeWidth="3" fill="none" />
              <rect x="18" y="72" width="24" height="18" rx="2" fill="#41493e" />
            </svg>

            <div className="relative w-full max-w-2xl rounded-lg overflow-hidden border-4 border-[#181c1b]/50 shadow-2xl bg-[#0d1a10]/80 backdrop-blur-sm">
              <div className="flex items-center justify-between px-4 py-2 bg-[#181c1b]/80 backdrop-blur-sm">
                <span className="text-[9px] font-bold text-[#79b669] tracking-wide">Feasib</span>
                <div className="flex gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#79b669]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                </div>
              </div>

              <div className="flex gap-3 p-4 md:p-5">
                <div className="hidden sm:flex flex-col gap-1.5 w-16 shrink-0">
                  {[100, 70, 85, 55].map((w, i) => (
                    <div key={i} className="h-2 rounded-full bg-white/10" style={{ width: `${w}%` }} />
                  ))}
                </div>

                <div className="flex-1 flex items-end gap-1.5 h-32 md:h-40">
                  {chartBars.map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm bg-gradient-to-t from-[#104502] to-[#acf4a4]"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>

                <div className="hidden md:flex flex-col gap-1.5 w-20 shrink-0">
                  {[1, 2, 3, 4].map((row) => (
                    <div key={row} className="h-2 rounded-full bg-white/10" />
                  ))}
                </div>
              </div>
            </div>

            <div className="w-16 h-4 bg-[#181c1b]/80 backdrop-blur-sm mt-1 rounded-b-sm" />
            <div className="w-32 h-2 bg-[#181c1b]/80 backdrop-blur-sm rounded-full mt-1" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-[#c8503a]/60 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#c8503a]/80 transition-all">
                <div className="w-0 h-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-white ml-1.5" />
              </div>
            </div>
          </div>
        </motion.section>

        <div className="max-w-3xl mx-auto text-center mt-14 space-y-4">
          <p className="text-[#414944] text-lg leading-relaxed">
            Comprehensive financial modeling tailored for academic and professional excellence.
          </p>
          <p className="text-[#6e726e] text-2xl font-medium leading-relaxed">
            Since 2019, we already served over a hundred students from different schools, including
            some well-known universities.
          </p>
        </div>
      </motion.section>

    
      <motion.section
        id="services"
        className="w-full bg-white/10 backdrop-blur-md text-[#0B2F1D] pt-24 pb-24 px-6 md:px-12 lg:px-16 border-t border-white/20 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-extrabold tracking-widest text-emerald-200 uppercase block mb-3 drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)]">SERVICES OFFERED</span>
            <h2 className="text-3xl md:text-5xl font-sans font-black text-white tracking-tight mb-4">Every financial deliverable your panel will ask about.</h2>
            <p className="text-xs md:text-sm text-slate-200">Click any service to expand and see the full list of inclusions.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
            {servicesData.map((service) => (
              <motion.div
                key={service.id}
                onClick={() => toggleAccordion(service.id)}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 cursor-pointer shadow-xl transition-all group"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-[10px] font-black text-white/60 block mb-1">
                      {String(service.id).padStart(2, '0')}
                    </span>
                    <h3 className="text-[15px] font-black text-white group-hover:text-emerald-300 leading-tight">{service.title}</h3>
                  </div>
                  <div className="text-2xl text-white/60 font-light transition-transform duration-300">
                    {activeAccordion === service.id ? '−' : '+'}
                  </div>
                </div>

                <AnimatePresence>
                  {activeAccordion === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <ul className="space-y-2">
                          {service.inclusions.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-[11px] text-slate-200 font-medium">
                              <span className="text-emerald-400 mt-0.5">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={staggerContainer}
        className="w-full bg-[#00450d]/80 backdrop-blur-sm py-24 px-6 md:px-12 lg:px-16"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 variants={fadeInUp} className="text-white font-black text-2xl md:text-3xl tracking-tight mb-3">
            FREE ADDITIONAL SERVICES
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-white/70 text-xs md:text-sm max-w-xl mb-12 leading-relaxed">
            Our commitment to helping students like you is not limited to the services above.
            Below are extra services to help you ace your defense — for FREE.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {freeServicesData.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl transition-all hover:bg-white/10"
              >
                <div className="mb-4">{freeServiceIcons[i]}</div>
                <h3 className="text-white font-bold text-sm mb-2 leading-snug">{item.title}</h3>
                <p className="text-white/60 text-[11px] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={staggerContainer}
        className="w-full bg-[#f7faf7]/80 backdrop-blur-sm py-24 px-6 md:px-12 lg:px-16"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="mb-14">
            <h2 className="text-[#00450d] font-black text-3xl md:text-5xl tracking-tight mb-4">
              The Service <span className="text-[#286b33]">Flow</span>
            </h2>
            <p className="text-[#41493e] text-sm md:text-base max-w-xl leading-relaxed">
              Guided by precision and clarity. Our 6-step engagement model ensures every
              financial output is defended by rigorous analysis and collaborative alignment.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid grid-cols-3 sm:grid-cols-6 gap-6 mb-16">
            {serviceFlowSteps.map((step, i) => (
              <div key={step.num} className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-xl bg-white/50 backdrop-blur-md border border-white/40 shadow-md flex items-center justify-center">
                  {serviceFlowIcons[i]}
                </div>
                <p className="text-[#00450d] font-bold text-xs">{step.title}</p>
                <p className="text-[#6e726e] text-[10px]">{step.short}</p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp}>
            <ServiceFlowCarousel />
          </motion.div>
        </div>
      </motion.section>

     
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={staggerContainer}
        className="w-full bg-[#f7faf7]/80 backdrop-blur-sm pb-24 px-6 md:px-12 lg:px-16"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              variants={fadeInUp}
              whileHover={{ rotateX: 5, rotateY: 5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{ perspective: 800 }}
              className="relative bg-gradient-to-br from-[#0a2818] via-[#13462a] to-[#0a1d13] rounded-2xl p-8 md:p-12 flex flex-col items-start justify-between min-h-[320px] border border-emerald-200/25 shadow-[0_28px_65px_rgba(5,30,17,0.35)] overflow-hidden"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5 mb-6">
                <span className="text-xs text-white/90">🤖 AI INTEGRATED</span>
              </div>
              <div className="max-w-md">
                <h3 className="text-white font-bold text-2xl mb-3 tracking-tight">Fina AI Assistant</h3>
                <p className="text-emerald-100/85 text-sm leading-relaxed mb-8">
                  Get instant answers to complex financial questions. Our AI is trained on local Philippine taxation and accounting laws.
                </p>
                <button
                  onClick={() => navigate('/financial-tools')}
                  className="bg-[#B3F0AE]/90 hover:bg-[#a2dda0] transition-colors text-[#0f2310] font-bold text-xs px-5 py-3 rounded-lg shadow-xl cursor-pointer"
                >
                  Launch Assistant
                </button>
              </div>
              <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-emerald-300/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute right-8 top-8 w-2 h-2 rounded-full bg-emerald-200 shadow-[0_0_18px_rgba(179,240,174,0.95)] pointer-events-none" />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{ perspective: 800 }}
              className="relative bg-gradient-to-br from-[#2c7438] via-[#428a4e] to-[#235d31] rounded-2xl p-8 md:p-12 flex flex-col items-start justify-between min-h-[320px] border border-emerald-100/30 shadow-[0_28px_65px_rgba(9,65,25,0.3)] overflow-hidden"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5 mb-6">
                <span className="text-xs text-white/90">📚 LEARNING HUB</span>
              </div>
              <div className="max-w-md">
                <h3 className="text-white font-bold text-2xl mb-3 tracking-tight">Course Library</h3>
                <p className="text-emerald-50/90 text-sm leading-relaxed mb-8">
                  Master the art of feasibility. Access our curated library of video lessons, templates, and spreadsheets.
                </p>
                <button
                  onClick={() => navigate('/resources')}
                  className="bg-white/90 hover:bg-white transition-colors text-[#0f2310] font-bold text-xs px-5 py-3 rounded-lg shadow-xl cursor-pointer"
                >
                  Browse Courses
                </button>
              </div>
              <div className="absolute -right-16 -bottom-16 text-white/10 pointer-events-none">
                <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polygon points="50,10 95,30 95,70 50,90 5,70 5,30" />
                  <polygon points="50,25 80,40 80,60 50,75 20,60 20,40" fill="currentColor" fillOpacity="0.1" />
                </svg>
              </div>
              <div className="absolute left-8 bottom-8 w-2 h-2 rounded-full bg-emerald-100 shadow-[0_0_18px_rgba(236,253,241,0.9)] pointer-events-none" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

  
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={staggerContainer}
        className="w-full bg-[#ecefec]/80 backdrop-blur-sm py-24 px-6 md:px-12 lg:px-16"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 variants={fadeInUp} className="text-[#00450d] font-black text-2xl md:text-3xl text-center tracking-tight mb-14">
            What Our Feasibmates Say
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-white/20 backdrop-blur-md border border-white/40 rounded-xl shadow-2xl p-8 flex flex-col gap-4 transition-transform"
              >
                <div className="flex gap-1 text-[#79b669] text-sm">
                  {Array.from({ length: 5 }).map((_, s) => <span key={s}>★</span>)}
                </div>
                <p className="text-[#1f2d1f] italic text-sm leading-relaxed flex-1">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-10 h-10 rounded-full bg-[#104502]/80 backdrop-blur-sm text-white flex items-center justify-center font-bold text-xs shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-[#181c1b] font-bold text-sm leading-tight">{t.name}</p>
                    <p className="text-[#4a5c4a] text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={staggerContainer}
        className="w-full bg-white/10 backdrop-blur-md py-24 px-6 md:px-12 lg:px-16"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 variants={fadeInUp} className="text-white font-black text-2xl md:text-3xl text-center tracking-tight mb-14">
            Frequently Asked Questions
          </motion.h2>

          
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
            style={{ perspective: 1000 }}
          >
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                onClick={() => toggleFAQ(index)}
                whileHover={{ rotateX: 3, rotateY: 3, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 cursor-pointer shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all"
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-white font-bold text-sm leading-snug">{item.question}</h3>
                  <div className="text-xl text-white/70 font-light transition-transform duration-300 shrink-0">
                    {activeFAQ === index ? '−' : '+'}
                  </div>
                </div>

                <AnimatePresence>
                  {activeFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 pt-4 border-t border-white/10 text-slate-200 text-sm leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

    </motion.div>
  );
}
