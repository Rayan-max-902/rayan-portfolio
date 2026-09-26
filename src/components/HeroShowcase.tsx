import { useState, useRef, useEffect, ReactNode } from 'react';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import { motion } from 'motion/react';
import { 
  ArrowDown, 
  CheckCircle2, 
  MapPin,
  Sparkles,
  Globe
} from 'lucide-react';
import { 
  OmegalMockup, 
  AbeerMockup, 
  SokarMockup, 
  RivoMockup, 
  CodexaMockup 
} from './ShowcaseMockups';
import carsMarketplaceImage from '../assets/images/regenerated_image_1788693744479.webp';
import tripsJapanImage from '../assets/images/regenerated_image_1788693746761.webp';

interface AnimatedTitleTextProps {
  text: string;
  hoverColorClass?: string;
  className?: string;
}

/**
 * Exact letter-stretching and color-changing interactive title component
 * from association-des-jeunes-alkendi.vercel.app
 */
function AnimatedTitleText({ 
  text, 
  hoverColorClass = "hover:text-[#b6a6f5] focus:text-[#b6a6f5]", 
  className = "" 
}: AnimatedTitleTextProps) {
  if (/[\u0600-\u06FF]/.test(text)) {
    const words = text.split(" ");
    return (
      <span className={`inline-flex flex-wrap justify-center gap-x-[0.25em] ${className}`}>
        {words.map((word, idx) => (
          <motion.span
            key={idx}
            tabIndex={0}
            className={`inline-block transition-colors duration-200 cursor-default focus:outline-none ${hoverColorClass}`}
            whileHover={{ scale: 1.08, translateY: -5 }}
            whileFocus={{ scale: 1.08, translateY: -5 }}
            transition={{ type: "spring", stiffness: 350, damping: 15 }}
          >
            {word}
          </motion.span>
        ))}
      </span>
    );
  }

  const words = text.split(" ");
  return (
    <span className={`inline-flex flex-wrap justify-center gap-x-[0.25em] gap-y-[0.1em] ${className}`}>
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="inline-block whitespace-nowrap">
          {word.split("").map((char, charIdx) => (
            <motion.span
              key={charIdx}
              tabIndex={0}
              className={`inline-block transition-colors duration-200 cursor-default focus:outline-none ${hoverColorClass}`}
              whileHover={{ scaleY: 1.5, scaleX: 0.8, translateY: -10 }}
              whileFocus={{ scaleY: 1.5, scaleX: 0.8, translateY: -10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
}

interface ShowcaseProject {
  id: string;
  name: string;
  category: string;
  url: string;
  image: string;
  description: string;
  tech: string[];
  mockup?: ReactNode;
  client?: string;
  badge?: string;
}

export default function HeroShowcase() {
  const [selectedProject, setSelectedProject] = useState<ShowcaseProject | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const swiperInstanceRef = useRef<Swiper | null>(null);

  // High-fidelity projects directly matching https://mohamed-hosni.com
  const projectsList: ShowcaseProject[] = [
    {
      id: 'sokar',
      name: 'Sokar Travel',
      category: 'Luxury Nile Dahabiya Cruises',
      url: 'sokartours.com/nile',
      image: 'https://mohamed-hosni.com/assets/images/hero-area/hero-sokar-travel-pilot.webp?v=1784930396',
      description: 'Expérience web d\'exception pour croisières privées en Dahabiya sur le Nil, d\'Assouan à Louxor. Réservation de cabines sur mesure, itinéraires interactifs et conciergerie 24/7.',
      tech: ['Next.js', 'Tailwind CSS', 'GraphQL', 'Stripe', 'Framer Motion'],
      mockup: <SokarMockup />,
      client: 'Sokar Travel Agency',
      badge: 'Luxury Travel'
    },
    {
      id: 'rivo',
      name: 'Rivo Jewellery',
      category: 'Real-Time Gold & Diamond Store',
      url: 'rivo-jewellery.com',
      image: 'https://mohamed-hosni.com/assets/images/hero-area/hero-rivo-jewellery-pilot.webp?v=1784930396',
      description: 'Boutique de haute joaillerie et créations dorées exclusives avec calcul en temps réel du cours de l\'or, catalogue 3D et paiement ultra-sécurisé.',
      tech: ['React 19', 'Next.js', 'Tailwind CSS', 'Live Gold API', 'PostgreSQL'],
      mockup: <RivoMockup />,
      client: 'Rivo High Jewellery',
      badge: 'E-Commerce'
    },
    {
      id: 'botanic-people',
      name: 'Botanic People',
      category: 'Botanical Skincare & Organic Beauty',
      url: 'botanicpeople.com',
      image: 'https://mohamed-hosni.com/assets/images/hero-area/hero-botanic-people-pilot.webp?v=1784930396',
      description: 'Expérience e-commerce moderne pour produits cosmétiques biologiques et soins botaniques éco-responsables avec diagnostic de peau personnalisé.',
      tech: ['Shopify Plus', 'Liquid', 'Tailwind CSS', 'Klaviyo', 'Algolia'],
      client: 'Botanic People Skincare',
      badge: 'Beauty & Wellness'
    },
    {
      id: 'nourmalf',
      name: 'NourmalF Medical Store',
      category: 'Healthcare Apparel & Scrubs',
      url: 'nourmalf-scrubs.com',
      image: 'https://mohamed-hosni.com/assets/images/hero-area/hero-nourmalf-pilot.webp?v=1786577157',
      description: 'Plateforme B2B et B2C spécialisée dans les uniformes médicaux haute performance et blouses médicales aux Émirats Arabes Unis et au Moyen-Orient.',
      tech: ['WooCommerce', 'WordPress', 'PHP', 'Tailwind CSS', 'MySQL'],
      client: 'NourmalF Medical Supplies',
      badge: 'Medical & Healthcare'
    },
    {
      id: 'mersaal',
      name: 'Mersaal Delivery App',
      category: 'Local On-Demand Logistics',
      url: 'mersaal-delivery.app',
      image: 'https://mohamed-hosni.com/assets/images/hero-area/hero-mersaal-delivery-pilot.webp?v=1784930396',
      description: 'Application mobile et web de livraison express locale en temps réel avec géolocalisation haute précision et dispatch automatisé des coursiers.',
      tech: ['React Native', 'Node.js', 'Socket.io', 'Google Maps API', 'MongoDB'],
      client: 'Mersaal Logistics',
      badge: 'Mobile App'
    },
    {
      id: 'bonds-beyond',
      name: 'Bonds & Beyond',
      category: 'Personalized Gifts & Moments',
      url: 'bonds-beyond.store',
      image: 'https://mohamed-hosni.com/assets/images/hero-area/hero-bonds-beyond-pilot.webp?v=1784930396',
      description: 'Boutique interactive de cadeaux sur mesure permettant aux clients de personnaliser en temps réel des créations artisanales gravées pour occasions spéciales.',
      tech: ['Next.js', 'Canvas API', 'Tailwind CSS', 'Stripe', 'Vercel'],
      client: 'Bonds & Beyond Gifts',
      badge: 'Custom Gifting'
    },
    {
      id: 'cars-marketplace',
      name: 'Good Motors',
      category: 'Automotive Marketplace',
      url: 'goodmotors-auto.com',
      image: carsMarketplaceImage,
      description: 'Plateforme moderne d\'achat et vente de véhicules neufs et d\'occasion avec historique certifié, simulateur de crédit auto et filtres de recherche avancés.',
      tech: ['Laravel', 'Vue.js', 'Tailwind CSS', 'MySQL', 'AWS S3'],
      client: 'Good Motors Group',
      badge: 'Automotive'
    },
    {
      id: 'flowers-store',
      name: 'Ent Flowers Store',
      category: 'Floral Creations & Same-Day Delivery',
      url: 'ent-flowers.com',
      image: 'https://mohamed-hosni.com/assets/images/hero-area/hero-flowers-store-pilot.webp?v=1784930396',
      description: 'Boutique en ligne florale avec commande en direct, calendrier de livraison express et sélection raffinée d\'arrangements pour mariages et cérémonies.',
      tech: ['Shopify', 'JavaScript', 'Tailwind CSS', 'Stripe'],
      client: 'Ent Flowers Paris',
      badge: 'Floral Boutique'
    },
    {
      id: 'el-hashashi',
      name: 'El Hashashi Furniture',
      category: 'Contemporary Interior & Furniture',
      url: 'elhashashi-furniture.com',
      image: 'https://mohamed-hosni.com/assets/images/hero-area/hero-el-hashashi-store-pilot.webp?v=1784930396',
      description: 'Showroom digital de mobilier d\'art et d\'ameublement contemporain, modélisation d\'espaces intérieurs et configuration de matières sur mesure.',
      tech: ['WordPress', 'WooCommerce', 'Tailwind CSS', 'Three.js'],
      client: 'El Hashashi Home',
      badge: 'Interior Design'
    },
    {
      id: 'elite-residence',
      name: 'Elite Residence',
      category: 'Luxury Real Estate & Living',
      url: 'eliteresidence-living.com',
      image: 'https://mohamed-hosni.com/assets/images/hero-area/hero-elite-residence-pilot.webp?v=1784930396',
      description: 'Portail immobilier de prestige mettant en avant des résidences exclusives et appartements haut standing avec visites virtuelles 360°.',
      tech: ['React', 'Three.js', 'Tailwind CSS', 'Node.js'],
      client: 'Elite Residence Group',
      badge: 'Real Estate'
    },
    {
      id: 'trips-japan',
      name: 'Egyptian Trips Japan',
      category: 'Japanese Egypt Travel & Tours',
      url: 'egyptiantrips-japan.com',
      image: tripsJapanImage,
      description: 'Agence réceptive de voyages culturels et expéditions archéologiques en Égypte conçue spécialement pour la clientèle japonaise.',
      tech: ['Next.js', 'i18n', 'Tailwind CSS', 'Stripe'],
      client: 'Egyptian Trips Tokyo & Cairo',
      badge: 'Cultural Travel'
    },
    {
      id: 'consulting',
      name: 'Brand Strategy Consulting',
      category: 'Strategic Advisory & Direction',
      url: 'hosni-consulting.com',
      image: 'https://mohamed-hosni.com/assets/images/hero-area/hero-brand-strategy-consulting-pilot.webp?v=1786720997',
      description: 'Plateforme institutionnelle de conseil en image de marque, positionnement stratégique et développement commercial à l\'international.',
      tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      client: 'Strategic Consulting Studio',
      badge: 'Strategy'
    },
    {
      id: 'omegal',
      name: 'Omegal Supplement Store',
      category: 'Purified Omega-3 & Health',
      url: 'omegal-nutrition.com',
      image: 'https://mohamed-hosni.com/assets/images/hero-area/hero-omegal-storefront.webp?v=1784930396',
      description: 'Boutique en ligne haut de gamme pour suppléments nutritionnels Oméga 3 purifié, CoQ10 et Zinc. Moteur de recommandation posologique et abonnements récurrents.',
      tech: ['React 19', 'Next.js', 'Tailwind CSS', 'Stripe', 'Node.js'],
      mockup: <OmegalMockup />,
      client: 'Omegal Healthcare Ltd',
      badge: 'Health & Pharmacy'
    },
    {
      id: 'education',
      name: 'Education Platform',
      category: 'University Guidance & Placement',
      url: 'abeer-edu.com/malaysia',
      image: 'https://mohamed-hosni.com/assets/images/hero-area/hero-education-platform-pilot.webp?v=1784930396',
      description: 'Portail complet d\'orientation universitaire et de conseil académique pour étudiants internationaux en Malaisie avec moteur de recherche multi-critères.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'FastAPI'],
      mockup: <AbeerMockup />,
      client: 'Abeer Education Counsellor',
      badge: 'EdTech'
    }
  ];

  // Initialize Swiper with the exact parameters from mohamed-hosni.com
  useEffect(() => {
    if (!sliderRef.current) return;

    const swiper = new Swiper(sliderRef.current, {
      modules: [Autoplay],
      slidesPerView: 1.65,
      spaceBetween: 14,
      loop: true,
      speed: 2000,
      autoplay: {
        delay: 1,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      breakpoints: {
        425: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
        1400: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      },
    });

    swiperInstanceRef.current = swiper;

    return () => {
      swiper.destroy(true, true);
    };
  }, []);

  const scrollToContent = () => {
    const target = document.getElementById('services') || document.getElementById('about');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-[#1b1f2c]">
      {/* Subtle Purple Glow behind LAUNCH */}
      <div className="absolute top-[18%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[320px] bg-gradient-to-tr from-[#7c62e3]/20 via-[#b6a6f5]/10 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Giant Headline matching mohamed-hosni.com with Anton Font & interactive letter stretching animation */}
        <div className="relative text-center py-1">
          <h1 className="font-anton text-[clamp(3.8rem,13.5vw,11.5rem)] tracking-tight leading-[0.88] text-white select-none drop-shadow-2xl">
            <AnimatedTitleText 
              text="PLAN. BUILD." 
              hoverColorClass="hover:text-[#b6a6f5] focus:text-[#b6a6f5] hover:[text-shadow:0_0_35px_rgba(182,166,245,0.7)]" 
            />{" "}
            <span className="text-[#b6a6f5] [text-shadow:0_0_35px_rgba(182,166,245,0.35)] inline-block">
              <AnimatedTitleText 
                text="LAUNCH." 
                hoverColorClass="hover:text-[#c9f31d] focus:text-[#c9f31d] hover:[text-shadow:0_0_35px_rgba(201,243,29,0.8)]" 
              />
            </span>
          </h1>

          {/* Right subtle decorative dot */}
          <div className="hidden lg:flex absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border border-white/20 items-center justify-center pointer-events-none">
            <span className="w-2 h-2 rounded-full bg-white/80 animate-pulse"></span>
          </div>
        </div>

        {/* Subtitle / Intro */}
        <p className="mt-6 sm:mt-8 max-w-3xl mx-auto text-center text-xs sm:text-sm md:text-base font-semibold tracking-[0.18em] uppercase text-zinc-300 leading-relaxed">
          HI, RAYAN EL MOATADIDE HERE. I&apos;M AN AI ENGINEER &amp; STARTUP FOUNDER WHO BUILDS FAST, SCALABLE AI SYSTEMS &amp; MODERN PLATFORMS YOUR USERS WILL LOVE.
        </p>

        {/* Hero Info Row (3 Elements matching mohamed-hosni.com exactly) */}
        <div className="mt-10 sm:mt-14 max-w-5xl mx-auto flex items-center justify-between gap-4 flex-wrap sm:flex-nowrap px-2">
          {/* Left: Availability Pill with pulsating neon green dot */}
          <div className="px-5 sm:px-6 py-2.5 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md text-xs sm:text-sm text-zinc-200 flex items-center gap-2.5 shadow-lg">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c9f31d] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#c9f31d] shadow-[0_0_10px_#c9f31d]"></span>
            </span>
            <span className="font-medium tracking-wide">Ready for Your Next Project</span>
          </div>

          {/* Center: Circular Downward Arrow Jump Button */}
          <button
            onClick={scrollToContent}
            aria-label="Défiler vers le contenu"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-white/30 hover:border-[#b6a6f5] bg-white/[0.03] backdrop-blur-md flex items-center justify-center text-white hover:text-[#b6a6f5] transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl mx-auto sm:mx-0 group cursor-pointer"
          >
            <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-y-1.5" />
          </button>

          {/* Right: Location Pill */}
          <div className="px-5 sm:px-6 py-2.5 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md text-xs sm:text-sm text-zinc-200 font-medium tracking-wide shadow-lg flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#b6a6f5]" />
            <span>Morocco — Available Worldwide</span>
          </div>
        </div>
      </div>

      {/* EXACT FULL-BLEED SLIDER MATCHING MOHAMED-HOSNI.COM WITH PARABOLIC SVG FRAMES */}
      <div id="portfolio" className="mt-8 sm:mt-12 relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden scroll-mt-24">
        <div ref={sliderRef} className="swiper hero-photostudio__slider">
          <div className="slider-shape">
            <img
              src="/shapes/shape-dark-1.svg"
              alt="Decorative upper slider frame"
              width="1920"
              height="91"
            />
            <img
              src="/shapes/shape-dark-2.svg"
              alt="Decorative lower slider frame"
              width="1920"
              height="90"
            />
          </div>
          <div className="swiper-wrapper">
            {projectsList.map((proj) => (
              <div 
                key={proj.id} 
                className="swiper-slide cursor-pointer group"
                onClick={() => setSelectedProject(proj)}
              >
                <img
                  src={proj.image}
                  alt={proj.name}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="max-w-3xl w-full bg-[#161923] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl text-white relative animate-in fade-in zoom-in-95 duration-200 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#b6a6f5]">
                  {selectedProject.category}
                </span>
                <h2 className="font-anton text-3xl sm:text-4xl text-white mt-1">
                  {selectedProject.name}
                </h2>
                <span className="font-mono text-xs text-zinc-400 flex items-center gap-1.5 mt-0.5">
                  <Globe className="w-3 h-3 text-[#b6a6f5]" />
                  https://{selectedProject.url}
                </span>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer"
                aria-label="Fermer la fenêtre modale"
              >
                ✕
              </button>
            </div>

            {/* Embedded Live Preview or High-Res Mockup in modal */}
            <div className="mt-5 rounded-2xl overflow-hidden border border-white/15 h-[380px] sm:h-[460px] overflow-y-auto bg-black shadow-inner">
              {selectedProject.mockup ? (
                selectedProject.mockup
              ) : (
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.name} 
                  className="w-full h-auto object-cover"
                />
              )}
            </div>

            <p className="mt-4 text-sm text-zinc-300 leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="mt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                Stack Technique &amp; Architecture
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((t) => (
                  <span
                    key={t}
                    className="flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white font-medium"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href="#contact"
                onClick={() => setSelectedProject(null)}
                className="flex-1 py-3 rounded-xl bg-[#7c62e3] hover:bg-[#684dd3] text-white font-bold text-center text-sm transition-colors shadow-lg shadow-[#7c62e3]/30 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Demander un devis pour un projet similaire
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-sm transition-colors cursor-pointer"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
