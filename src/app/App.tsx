import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import LandingPage from './LandingPage';
import Resources from './Resources';
import FinancialTools from './FinancialTools';
import TermsAndConditions from './TermsAndConditions';
import PrivacyPolicy from './PrivacyPolicy';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Login from './Login';
import AdminDashboard from './AdminDashboard';
import ClientDashboard from './ClientDashboard';
import type { NavigateFn } from '../types/index.d';


function Logo({ navigate }: { navigate: NavigateFn }) {
  return (
    <div className="flex items-center cursor-pointer select-none" onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
      <div className="flex flex-col leading-none tracking-tight">
        <div className="text-white text-2xl font-bold flex items-end tracking-wide">
          <span>feas</span>
          <div className="flex flex-col gap-[2px] mx-[2px] mb-[6px] items-center justify-end">
            <div className="w-[6px] h-[5px] bg-[#112d10]" />
            <div className="w-[6px] h-[5px] bg-[#224d24]" />
            <div className="w-[6px] h-[5px] bg-[#79B669]" />
          </div>
          <span>b</span>
        </div>
        <span className="text-white text-2xl font-bold tracking-wide lowercase -mt-3">accountant</span>
      </div>
    </div>
  );
}


interface NavLinkItem {
  label: string;
  action: 'scroll' | 'navigate';
  target: string;
}

const NAV_LINKS: NavLinkItem[] = [
  { label: 'Home', action: 'scroll', target: 'home' },
  { label: 'Service Offered', action: 'scroll', target: 'services' },
  { label: 'Resources', action: 'navigate', target: '/resources' },
  { label: 'Financial Tools', action: 'navigate', target: '/financial-tools' },
];

function NavBar({ navigate }: { navigate: NavigateFn }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (item: NavLinkItem) => {
    setMobileOpen(false);
    if (item.action === 'navigate') {
      navigate(item.target);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(item.target)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      document.getElementById(item.target)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleConsult = () => {
    setMobileOpen(false);
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isLinkActive = (item: NavLinkItem) => {
    if (item.action === 'navigate') {
      return location.pathname === item.target;
    }
    return location.pathname === '/' && item.target === 'home';
  };

  return (
    <>
      <nav className="w-full bg-[#205A3E]/95 backdrop-blur-md flex items-center justify-between px-6 md:px-10 py-4 sticky top-0 z-50 border-b border-white/20 shadow-md">
        <Logo navigate={navigate} />

        
        <div className="hidden md:flex items-center gap-8 text-xs font-bold text-slate-200">
          {NAV_LINKS.map((item) => {
            const active = isLinkActive(item);
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className={`transition-colors py-1 relative cursor-pointer ${
                  active ? 'text-white font-extrabold underline underline-offset-8 decoration-2 decoration-emerald-400' : 'hover:text-emerald-400'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

       
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => { navigate('/login'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="text-xs font-bold text-slate-200 hover:text-white px-2 py-1 transition-colors cursor-pointer"
          >
            Log In
          </button>
          <button
            onClick={handleConsult}
            className="bg-[#133E24] hover:bg-[#0c2b18] text-white border border-white/20 text-xs font-bold px-4 py-2.5 rounded-full transition-all shadow-sm cursor-pointer"
          >
            Book a Consultant
          </button>
        </div>

       
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => { navigate('/login'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="text-xs font-bold text-slate-200 hover:text-white transition-colors"
          >
            Log In
          </button>
          <button
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((v) => !v)}
            className="text-white p-1 rounded-md hover:bg-white/10 transition-colors"
          >
            {mobileOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      
      <AnimatePresence>
        {mobileOpen && (
          <>
           
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
            />
            
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-72 bg-[#0B2F1D] border-l border-white/10 z-50 flex flex-col md:hidden shadow-2xl"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <Logo navigate={(p) => { navigate(p); setMobileOpen(false); }} />
                <button
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                  className="text-white p-1 rounded-md hover:bg-white/10 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col gap-1 px-4 py-6 flex-1">
                {NAV_LINKS.map((item) => {
                  const active = isLinkActive(item);
                  return (
                    <button
                      key={item.label}
                      onClick={() => handleNavClick(item)}
                      className={`text-left text-sm font-bold px-3 py-3 rounded-lg transition-colors ${
                        active
                          ? 'text-emerald-400 bg-white/10 font-black'
                          : 'text-slate-200 hover:text-emerald-400 hover:bg-white/5'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </nav>

              <div className="px-4 pb-8 flex flex-col gap-3">
                <button
                  onClick={() => { navigate('/login'); setMobileOpen(false); }}
                  className="w-full text-sm font-bold text-slate-200 hover:text-white border border-white/20 px-4 py-3 rounded-xl transition-colors"
                >
                  Log In
                </button>
                <button
                  onClick={handleConsult}
                  className="w-full bg-white hover:bg-slate-100 text-[#0B2F1D] text-sm font-black px-4 py-3 rounded-xl transition-all shadow-md"
                >
                  Book a Consultant
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}


function GlobalFooter({ navigate }: { navigate: NavigateFn }) {
  const currentYear = new Date().getFullYear();

  const handleFooterNav = (link: string) => {
    if (link === 'Home') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (link === 'Services Offered') {
      if (window.location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      } else {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (link === 'Resources') {
      navigate('/resources');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (link === 'Terms and Conditions') {
      navigate('/terms');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (link === 'Privacy Policy') {
      navigate('/privacy-policy');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (link === 'About Us') {
      navigate('/about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (link === 'Contact Us') {
      navigate('/contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const footerLinks = [
    'Home',
    'Services Offered',
    'Resources',
    'Terms and Conditions',
    'Privacy Policy',
    'About Us',
    'Contact Us',
  ];


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
          {footerLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleFooterNav(link)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {link}
            </button>
          ))}
        </div>
        <div className="flex gap-5 mb-10">
          
          <a href="https://facebook.com/FeasibAccountant" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
            className="w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-110 overflow-hidden shadow-sm"
          >
            <svg viewBox="0 0 40 40" className="w-9 h-9">
              <path fill="#1877F2" d="M16.7 39.8C7.2 38.1 0 29.9 0 20 0 9 9 0 20 0s20 9 20 20c0 9.9-7.2 18.1-16.7 19.8l-1.1-.9h-4.4l-1.1.9z" />
              <path fill="#FFFFFF" d="M27.8 25.6l.9-5.6h-5.3v-3.9c0-1.6.6-2.8 3-2.8h2.6V8.2c-1.4-.2-3-.4-4.4-.4-4.6 0-7.8 2.8-7.8 7.8V20h-5v5.6h5v14.1c1.1.2 2.2.3 3.3.3s2.2-.1 3.3-.3V25.6h4.5z" />
            </svg>
          </a>
        
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
            className="w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-110 overflow-hidden shadow-sm"
          >
            <svg viewBox="0 0 40 40" className="w-9 h-9">
              <circle cx="20" cy="20" r="20" fill="#FF0000" />
              <polygon points="16,13 28,20 16,27" fill="#FFFFFF" />
            </svg>
          </a>
          
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            className="w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-110 overflow-hidden shadow-sm"
          >
            <svg viewBox="0 0 72 72" className="w-9 h-9">
              <circle cx="36" cy="36" r="36" fill="#0A66C2" />
              <path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z" fill="#FFFFFF"/>
            </svg>
          </a>
        </div>
        <p className="text-[#b3d1b3] text-xs leading-relaxed max-w-2xl">
          &copy; {currentYear} Feasib Accountant. All rights reserved. We are here to help you have your Feasibility Study DEFENDED. Should need any help, contact our support team.
        </p>
      </div>
    </motion.section>
  );
}


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
            <Route path="/financial-tools" element={<FinancialTools />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/login" element={<Login navigate={navigate} initialMode="login" />} />
            <Route path="/signup" element={<Login navigate={navigate} initialMode="signup" />} />
            <Route path="/register" element={<Login navigate={navigate} initialMode="signup" />} />
            <Route path="/dashboard" element={<ClientDashboard onBack={() => navigate('/')} />} />
            <Route path="/admin" element={<AdminDashboard onSignOut={() => navigate('/')} />} />
          </Routes>
        </AnimatePresence>
      </div>

      <GlobalFooter navigate={navigate} />
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