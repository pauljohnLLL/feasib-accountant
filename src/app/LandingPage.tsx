export default function LandingPage() {
  return (
    <div className="w-full min-h-screen bg-slate-950 font-sans">
      
      {/* ================= 1. PREMIUM NAVIGATION BAR ================= */}
      <nav className="fixed top-0 left-0 right-0 bg-black/20 backdrop-blur-md z-50 px-6 py-4 flex justify-between items-center border-b border-white/5">
        
        {/* LOGO AREA */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#00A86B] text-white font-serif font-black flex items-center justify-center rounded text-sm shadow-sm">Fa</div>
          <div>
            <h1 className="text-xs font-black text-white tracking-wider uppercase leading-none">Feasib Accountant</h1>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Financial Aspect Experts</p>
          </div>
        </div>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-8 text-xs font-bold text-slate-300">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#process" className="hover:text-white transition-colors">Process</a>
          <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
          <a href="#faqs" className="hover:text-white transition-colors">FAQs</a>
        </div>

        {/* CTA BUTTONS */}
        <div className="flex items-center gap-3">
          <button className="text-xs font-bold text-slate-300 hover:text-white px-3 py-1.5 transition-colors">
            User Dashboard
          </button>
          <button className="bg-[#00A86B] hover:bg-[#00945E] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-md">
            Book Free Consultation
          </button>
        </div>

      </nav>


      {/* ================= 2. NEW PREMIUM HERO SECTION ================= */}
      {/* Pinalitan nito ang dating <header> at <main> tag para maging katulad ng bagong UI wireframe mo */}
      <section id="home" className="relative min-h-screen flex flex-col justify-between text-white overflow-hidden bg-slate-950">
        
        {/* Darkened warm-toned background image filter wrapper */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-lighten opacity-45 pointer-events-none"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80')`, // Palitan mo na lang ng tamang relative link ng desk image mo mamaya
            filter: 'sepia(20%) contrast(110%) brightness(60%)'
          }}
        />
        
        {/* Ambient background gradient overlay mask */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none" />

        {/* Top spacing padding allowance */}
        <div className="w-full" />

        {/* Main Centered Box Context Container */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-32 pb-12 flex-1 flex flex-col justify-center items-center">
          
          {/* Micro-badge tracking text element */}
          <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-[10px] font-bold tracking-widest text-slate-300 uppercase">
              SERVING 100+ STUDENTS SINCE 2019
            </span>
          </div>

          {/* Core Main Title Typography Header */}
          <h1 className="text-4xl md:text-6xl font-serif text-white tracking-tight max-w-3xl leading-[1.15] mb-6">
            Don't stress yourself. <br />
            <span className="text-amber-400 italic font-normal">Let the accountant</span> <br />
            do the accounting.
          </h1>

          {/* Subtitle Target Copy Segment */}
          <p className="text-sm md:text-base text-slate-300 font-normal max-w-2xl leading-relaxed mb-10">
            We prepare reliable Financial Aspect computations so you can defend 
            your Feasibility Study with confidence — reviewed, explained, and 
            delivered on time.
          </p>

          {/* Functional Trigger Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
            <button className="w-full sm:w-auto bg-[#00A86B] hover:bg-[#00945E] text-white font-bold text-xs px-6 py-4 rounded-xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
               Book a Free 20-min Consultation
            </button>
            <button className="w-full sm:w-auto bg-transparent hover:bg-white/5 text-white border border-white/20 font-bold text-xs px-6 py-4 rounded-xl transition-all flex items-center justify-center gap-2">
              View Services <span className="text-sm">→</span>
            </button>
          </div>

          {/* Data Counter Inline Analytics Grid Footer component element */}
          <div className="w-full max-w-2xl grid grid-cols-3 gap-4 pt-8 border-t border-white/10 backdrop-blur-sm bg-black/5 rounded-2xl p-4">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white leading-none">100+</h3>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1.5">Students Served</p>
            </div>
            <div className="text-center border-x border-white/10">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white leading-none">5.0</h3>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1.5">Facebook Rating</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white leading-none">Since 2019</h3>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1.5">Trusted Team</p>
            </div>
          </div>

        </div>

        {/* Bottom edge layout guide box element layer */}
        <div className="w-full h-8" />
      </section>

    </div>
  )
}