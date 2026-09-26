import { MouseEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import aboutPortrait from '../assets/images/regenerated_image_1788683094131.webp';

export default function AboutShowcaseSection() {
  const scrollToJourney = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('experience') || document.getElementById('about');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="about"
      className="relative isolation-auto overflow-hidden py-20 lg:py-28 bg-[#202534] text-[#f7f7fa] scroll-mt-24"
      aria-labelledby="about-me-title"
    >
      {/* Exact desktop two-tone background divider with 8px purple bar from mohamed-hosni.com */}
      <div className="hidden lg:block absolute inset-y-0 left-0 w-[38%] bg-[#1b1f2c] -z-10 pointer-events-none" />
      <div className="hidden lg:block absolute inset-y-0 left-[38%] w-[8px] bg-[#7c62e3] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center">
          
          {/* Left Column: Portrait with double decorative outlines and corner accent */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative w-full max-w-[340px] sm:max-w-[380px] my-4 sm:my-6"
            >
              {/* Outer offset thin white line frame */}
              <div 
                className="absolute inset-[-14px_14px_14px_-14px] border border-white/60 pointer-events-none"
                aria-hidden="true"
              />

              {/* Bottom-right purple L-corner accent */}
              <div 
                className="absolute -right-[18px] -bottom-[18px] w-24 h-24 border-r-[3px] border-b-[3px] border-[#b6a6f5] pointer-events-none z-10"
                aria-hidden="true"
              />

              {/* Portrait main frame */}
              <div className="relative z-[2] p-2 bg-[#1b1f2c] border border-white/20 shadow-[0_24px_60px_rgba(8,10,16,0.35)]">
                <img
                  src={aboutPortrait}
                  alt="Portrait of Mohamed Hosni working at laptop"
                  width="576"
                  height="730"
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[4/5] object-cover object-center block"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Eyebrow, Giant Display Title with Alternating Purple Words, Bio, Expertise & Link */}
          <div className="lg:col-span-7 max-w-[650px]">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            >
              {/* Eyebrow: line + ABOUT ME */}
              <div className="flex items-center gap-3.5 mb-5 sm:mb-6">
                <span className="w-10 h-[2px] bg-[#7c62e3] shrink-0" aria-hidden="true" />
                <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#b6a6f5] font-sans">
                  About me
                </span>
              </div>

              {/* Title with Anton display typography and alternating purple words */}
              <h2 
                id="about-me-title"
                className="font-anton font-normal text-white text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[54px] leading-[1.04] uppercase tracking-normal m-0"
              >
                <span>I </span>
                <span className="text-[#7c62e3]">build </span>
                <span>WordPress, </span>
                <span className="text-[#7c62e3]">eCommerce </span>
                <span>and </span>
                <span className="text-[#7c62e3]">mobile </span>
                <span>app </span>
                <span className="text-[#7c62e3]">projects </span>
                <span>that </span>
                <span className="text-[#7c62e3]">feel </span>
                <span>clear, </span>
                <span className="text-[#7c62e3]">fast </span>
                <span>and </span>
                <span className="text-[#7c62e3]">dependable.</span>
              </h2>

              {/* Summary description */}
              <p className="mt-6 sm:mt-7 text-[#c9ceda] text-base sm:text-[17px] leading-[1.75] font-normal max-w-[620px]">
                I&apos;m Mohamed Hosni, a senior web and mobile app developer based in Egypt, working with clients worldwide. I build fast WordPress and WooCommerce websites, custom plugins, Shopify stores, Laravel applications, APIs and mobile apps — from first preview to reliable production.
              </p>

              {/* Core Expertise List with purple rotated diamond bullets */}
              <ul className="flex flex-wrap items-center gap-x-7 gap-y-3 mt-7 sm:mt-8 p-0 list-none" aria-label="Core expertise">
                {['WordPress', 'Laravel', 'Shopify', 'Mobile Apps'].map((skill) => (
                  <li key={skill} className="flex items-center gap-2.5 text-[#f7f7fa] text-sm font-semibold">
                    <span className="w-1.5 h-1.5 bg-[#7c62e3] rotate-45 shrink-0" aria-hidden="true" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>

              {/* Link: More about my journey */}
              <div className="mt-8 sm:mt-9">
                <a 
                  href="#experience"
                  onClick={scrollToJourney}
                  className="inline-flex items-center gap-2 pb-1.5 text-white font-bold text-sm sm:text-[15px] border-b border-[#b6a6f5]/60 hover:text-[#b6a6f5] hover:border-[#b6a6f5] transition-all duration-200 group cursor-pointer"
                >
                  <span>More about my journey</span>
                  <ArrowUpRight className="w-4 h-4 text-[#b6a6f5] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
