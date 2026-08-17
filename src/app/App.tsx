import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import LandingPage from './LandingPage'; 
import Resources from './Resources';
import Login from './Login';
import AdminDashboard from './AdminDashboard';
import ClientDashboard from './ClientDashboard';

// --- NAVBAR COMPONENT ---
function Logo({ navigate }: { navigate: (path: string) => void }) {
  return (
    <div className="flex items-center cursor-pointer select-none" onClick={() => navigate('/')}>
      <div className="flex flex-col leading-none tracking-tight">
        <div className="text-white text-2xl font-bold flex items-end tracking-wide">
          <span>feas</span>
          <div className="flex flex-col gap-[2px] mx-[2px] mb-[6px] items-center justify-end">
            <div className="w-[6px] h-[5px] bg-[#112d10]"></div>
            <div className="w-[6px] h-[5px] bg-[#224d24]"></div>
            <div className="w-[6px] h-[5px] bg-[#79B669]"></div>
          </div>
          <span>b</span>
        </div>
        <span className="text-white text-2xl font-bold tracking-wide lowercase -mt-3">accountant</span>
      </div>
    </div>
  );
}

function NavBar({ navigate }: { navigate: (path: string) => void }) {
  // Helper function to handle scrolling to sections
  const handleNavClick = (path: string, sectionId?: string) => {
    if (window.location.pathname !== '/') {
      // If we are not on the home page, navigate home first, then scroll slightly later
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId || 'home');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      // If we are already on the home page, just scroll immediately
      const element = document.getElementById(sectionId || 'home');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="w-full bg-[#205A3E]/95 backdrop-blur-md flex items-center justify-between px-10 py-4 sticky top-0 z-50 border-b border-white/20 shadow-md">
      <Logo navigate={navigate} />
      <div className="hidden md:flex items-center gap-8 text-xs font-bold text-slate-200">
        {/* Home Button - Scrolls to top */}
        <button onClick={() => handleNavClick('/', 'home')} className="hover:text-emerald-400 transition-colors">
          Home
        </button>
        
        {/* Service Offered Button - Scrolls to #services */}
        <button onClick={() => handleNavClick('/', 'services')} className="hover:text-emerald-400 transition-colors">
          Service Offered
        </button>
        
        {/* Resources Button - Direct Page Nav */}
        <button onClick={() => navigate('/resources')} className="hover:text-emerald-400 transition-colors">
          Resources
        </button>
        
        {/* Financial Tools Button - Scrolls to #tools */}
        <button onClick={() => handleNavClick('/', 'tools')} className="hover:text-emerald-400 transition-colors">
          Financial Tools
        </button>
      </div>
      <div className="flex items-center gap-4">
        <button onClick={() => navigate('/login')} className="text-xs font-bold text-slate-200 hover:text-white px-3 py-1.5 transition-colors">Log In</button>
        <button className="bg-white hover:bg-slate-100 text-[#0B2F1D] text-xs font-black px-4 py-2.5 rounded-xl transition-all shadow-md">Book Free Consultation</button>
      </div>
    </nav>
  );
}

// --- GLOBAL FOOTER COMPONENT ---
function GlobalFooter() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className="w-full bg-[#00450d]/80 backdrop-blur-md border-t border-white/10 py-16 px-6 md:px-12 lg:px-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-white font-bold text-2xl md:text-3xl tracking-tight mb-10">Feasib Accountant</h2>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12 text-xs md:text-sm text-[#b3d1b3]">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#" className="hover:text-white transition-colors">Services Offered</a>
          <a href="#" className="hover:text-white transition-colors">Resources</a>
          <a href="#" className="hover:text-white transition-colors">Terms and Conditions</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">About Us</a>
          <a href="#" className="hover:text-white transition-colors">Contact Us</a>
        </div>
        <div className="flex gap-6 mb-10">
          <a href="#" className="w-8 h-8 rounded-full border border-[#6d9e6d] flex items-center justify-center text-[#b3d1b3] hover:bg-[#b3d1b3] hover:text-[#00450d] transition-all">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
          </a>
          <a href="#" className="w-8 h-8 rounded-full border border-[#6d9e6d] flex items-center justify-center text-[#b3d1b3] hover:bg-[#b3d1b3] hover:text-[#00450d] transition-all">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
          <a href="#" className="w-8 h-8 rounded-full border border-[#6d9e6d] flex items-center justify-center text-[#b3d1b3] hover:bg-[#b3d1b3] hover:text-[#00450d] transition-all">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
        <p className="text-[#b3d1b3] text-xs leading-relaxed max-w-2xl">
          &copy; 2024 Feasib Accountant. All rights reserved. We are here to help you have your Feasibility Study DEFENDED. Should need any help, contact our support team.
        </p>
      </div>
    </motion.section>
  );
}

// --- MAIN APP WRAPPER ---
function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-[#0B2F1D] text-white font-sans antialiased selection:bg-[#205A3E] flex flex-col">
      <NavBar navigate={navigate} />
      
      <div className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/login" element={<Login navigate={navigate} />} />
            <Route path="/dashboard" element={<ClientDashboard onBack={() => navigate('/')} />} />
            <Route path="/admin" element={<AdminDashboard onSignOut={() => navigate('/')} />} />
          </Routes>
        </AnimatePresence>
      </div>

      <GlobalFooter />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}