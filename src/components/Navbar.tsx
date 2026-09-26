import { useState, useEffect } from 'react';
import { X, Globe, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export default function Navbar({ lang, setLang, activeSection, setActiveSection }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on Escape key press and lock background scroll when open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };

    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  const navItems = [
    { 
      id: 'home', 
      label: lang === 'ar' ? 'الرئيسية' : lang === 'fr' ? 'ACCUEIL' : 'HOME' 
    },
    { 
      id: 'about', 
      label: lang === 'ar' ? 'عني' : lang === 'fr' ? 'À PROPOS' : 'ABOUT ME' 
    },
    { 
      id: 'services', 
      label: lang === 'ar' ? 'الخدمات' : lang === 'fr' ? 'SERVICES' : 'SERVICES' 
    },
    { 
      id: 'portfolio', 
      label: lang === 'ar' ? 'الأعمال' : lang === 'fr' ? 'PORTFOLIO' : 'PORTFOLIO' 
    },
    { 
      id: 'experience', 
      label: lang === 'ar' ? 'المدونة' : lang === 'fr' ? 'BLOG' : 'BLOG' 
    },
    { 
      id: 'contact', 
      label: lang === 'ar' ? 'اتصل بي' : lang === 'fr' ? 'CONTACTEZ-MOI' : 'CONTACT ME' 
    },
  ];

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-4 sm:py-6 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left Monogram Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollTo('home'); }}
            className="flex items-center gap-2 group"
            aria-label="Accueil"
          >
            <span className="font-bebas text-3xl sm:text-4xl font-bold tracking-wider text-white select-none transition-transform group-hover:scale-105">
              RM
            </span>
          </a>

          {/* Center: Floating Dark Glass Pill Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#121624]/90 backdrop-blur-md border border-white/10 shadow-2xl">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#7059d0] text-white shadow-md shadow-[#7059d0]/30'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right: "Menu" text + Circular Purple Hamburger Button */}
          <div className="flex items-center gap-3">
            {/* Quick Language Switcher Dropdown */}
            <div className="hidden sm:flex items-center gap-1 bg-[#121624]/80 border border-white/10 rounded-full px-2 py-1 text-xs text-zinc-300">
              <Globe className="w-3.5 h-3.5 text-zinc-400 mr-1" />
              {(['fr', 'en', 'ar'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-1.5 py-0.5 rounded text-[11px] font-bold uppercase transition-colors ${
                    lang === l ? 'text-[#7059d0] font-extrabold' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            <button
              onClick={() => setMenuOpen(true)}
              className="flex items-center gap-2.5 group cursor-pointer"
              aria-label="Ouvrir le menu"
            >
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-zinc-300 group-hover:text-white transition-colors">
                Menu
              </span>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#7059d0] flex items-center justify-center text-white shadow-lg shadow-[#7059d0]/30 group-hover:scale-105 active:scale-95 transition-transform">
                <div className="flex flex-col gap-1 items-center justify-center">
                  <span className="w-4 h-[2px] bg-white rounded-full"></span>
                  <span className="w-4 h-[2px] bg-white rounded-full"></span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Slide-over Menu Drawer matching image.png exactly */}
      <AnimatePresence>
        {menuOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Dark Dimming Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Right-side Drawer Panel */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 w-[88vw] sm:w-[410px] max-w-full bg-[#151824] border-l border-white/10 shadow-2xl flex flex-col justify-between p-6 sm:p-8 z-50 overflow-y-auto select-none"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation principale"
            >
              <div>
                {/* Header: Name displayed on two lines + Circular Close Button */}
                <div className="flex items-start justify-between mb-8 sm:mb-10">
                  <div className="text-left">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.05]">
                      {lang === 'ar' ? (
                        <>
                          <span>ريان</span>
                          <br />
                          <span>المعتضد</span>
                        </>
                      ) : (
                        <>
                          <span>Rayan</span>
                          <br />
                          <span>El Moatadide</span>
                        </>
                      )}
                    </h2>
                  </div>

                  <button
                    onClick={() => setMenuOpen(false)}
                    aria-label="Fermer le menu"
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/20 hover:border-white text-white/80 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shrink-0"
                  >
                    <X className="w-5 h-5 stroke-[2]" />
                  </button>
                </div>

                {/* Pill Navigation Links (Matching Screenshot) */}
                <nav className="flex flex-col gap-2.5 sm:gap-3">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollTo(item.id)}
                        className={`w-full px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl flex items-center justify-between text-left text-sm sm:text-base font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer group ${
                          isActive
                            ? 'bg-[#7059d0] text-white shadow-lg shadow-[#7059d0]/30'
                            : 'bg-[#1b1f2e] border border-white/10 text-white hover:border-[#7059d0]/60 hover:bg-[#7059d0]/15'
                        }`}
                      >
                        <span className="truncate">{item.label}</span>
                        {lang === 'ar' ? (
                          <ArrowLeft
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isActive
                                ? 'text-white'
                                : 'text-[#8a7be8] group-hover:-translate-x-1'
                            }`}
                          />
                        ) : (
                          <ArrowRight
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isActive
                                ? 'text-white'
                                : 'text-[#8a7be8] group-hover:translate-x-1'
                            }`}
                          />
                        )}
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer Footer: Language Switcher Pill & Bio Description */}
              <div className="mt-8 pt-6 border-t border-white/10">
                {/* Language pill matching image.png */}
                <div className="flex items-center gap-2 mb-4">
                  <button
                    onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
                    className="px-6 py-2.5 rounded-full border border-[#7059d0] bg-[#7059d0] hover:bg-[#5e47c2] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center gap-2 active:scale-95"
                  >
                    <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
                  </button>

                  <button
                    onClick={() => setLang('fr')}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition-all ${
                      lang === 'fr'
                        ? 'bg-white/15 text-white border border-white/20'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    FR
                  </button>
                  <button
                    onClick={() => setLang('en')}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition-all ${
                      lang === 'en'
                        ? 'bg-white/15 text-white border border-white/20'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    EN
                  </button>
                </div>

                {/* Bio text (matching "Mohamed Hosni is a senior web & mobile app..." in screenshot) */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                  {lang === 'ar'
                    ? 'ريان المعتضد مهندس ذكاء اصطناعي ومؤسس شركات ناشئة، متخصص في بناء أنظمة ذكاء اصطناعي سريعة ومنصات ويب فائقة التطور.'
                    : lang === 'fr'
                    ? 'Rayan El Moatadide est un ingénieur en intelligence artificielle et fondateur de startup qui conçoit des systèmes IA performants et des plateformes modernes.'
                    : 'Rayan El Moatadide is an AI engineer & startup founder who builds fast, scalable AI systems & modern platforms your users will love.'}
                </p>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
