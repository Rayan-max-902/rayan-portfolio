import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Bottom Left Actions: Phone & WhatsApp */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
        {/* Blue Call Button */}
        <a
          href="tel:+212717568270"
          aria-label="Appeler Rayan El Moatadide"
          className="w-12 h-12 rounded-full bg-[#2563eb] text-white flex items-center justify-center shadow-lg shadow-blue-600/40 hover:bg-blue-600 hover:scale-110 active:scale-95 transition-all duration-300 group relative"
        >
          <Phone className="w-5 h-5 fill-current" />
          <span className="absolute left-14 bg-zinc-900 text-white text-xs font-semibold px-2.5 py-1 rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md border border-white/10">
            +212 717 568 270
          </span>
        </a>

        {/* Green WhatsApp Button */}
        <a
          href="https://wa.me/212717568270?text=Bonjour%20Rayan,%20j'ai%20vu%20votre%20portfolio"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discuter sur WhatsApp"
          className="w-12 h-12 rounded-full bg-[#22c55e] text-white flex items-center justify-center shadow-lg shadow-emerald-600/40 hover:bg-emerald-600 hover:scale-110 active:scale-95 transition-all duration-300 group relative"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="absolute left-14 bg-zinc-900 text-white text-xs font-semibold px-2.5 py-1 rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md border border-white/10">
            WhatsApp
          </span>
        </a>
      </div>

      {/* Floating Bottom Right Scroll to Top Button (from Image 2) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Retour en haut"
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-[#1e2330] border border-white/15 text-white flex items-center justify-center shadow-xl hover:bg-[#5c60e6] hover:scale-110 active:scale-95 transition-all duration-300"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
