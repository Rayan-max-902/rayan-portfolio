/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  GraduationCap,
  Briefcase,
  Code,
  Languages as LangIcon,
  User,
  MessageSquare,
  Instagram,
  Linkedin
} from 'lucide-react';

import { Language } from './types';
import { translations } from './constants';
import Navbar from './components/Navbar';
import HeroShowcase from './components/HeroShowcase';
import AboutShowcaseSection from './components/AboutShowcaseSection';
import ServicesSection from './components/ServicesSection';
import FloatingActions from './components/FloatingActions';
import RayanAI from './components/RayanAI';
import SectionTitle from './components/SectionTitle';
import StackingCards from './components/StackingCards';
import Comments from './components/Comments';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [lang, setLang] = useState<Language>('fr');
  const [activeSection, setActiveSection] = useState('home');

  const t = translations[lang] || translations.fr;

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.classList.add('dark');
  }, [lang]);

  return (
    <div className="min-h-screen bg-[#1b1f2c] text-zinc-100 transition-colors duration-300 font-sans selection:bg-[#7c62e3] selection:text-white">
      {/* Custom follower cursor matching image.png */}
      <CustomCursor />

      {/* Navbar with Monogram RM, Floating Dark Glass Pill, Menu Button */}
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />

      {/* Main Hero & Curved 3D Showcase (Images 1 & 2) */}
      <HeroShowcase />

      {/* About Me Showcase Section matching mohamed-hosni.com directly below gallery */}
      <AboutShowcaseSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24 space-y-20 sm:space-y-28">
        {/* About Me / Profile */}
        <section id="profile" className="scroll-mt-24">
          <SectionTitle icon={User}>{t.profileTitle}</SectionTitle>
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-10 bg-[#121624] border border-white/10 rounded-3xl text-white shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#5c60e6]/10 rounded-full blur-3xl pointer-events-none" />
            <p className="text-base sm:text-lg md:text-xl leading-relaxed font-normal text-zinc-200">
              {t.profileText}
            </p>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between text-xs sm:text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Spécialisation DeepSeek R1 &amp; Backend Codexa.ma</span>
              </div>
              <div className="font-mono text-zinc-500">
                AI &amp; DATA ENGINE 2026
              </div>
            </div>
          </motion.div>
        </section>

        {/* Education */}
        <section id="education" className="scroll-mt-24">
          <SectionTitle icon={GraduationCap}>{t.educationTitle}</SectionTitle>
          <StackingCards 
            items={[
              { title: t.edu1Title, text: t.edu1Text, number: "01" },
              { title: t.edu2Title, text: t.edu2Text, number: "02" },
              { title: t.edu3Title, text: t.edu3Text, number: "03" },
              { title: t.edu4Title, text: t.edu4Text, number: "04" },
              { title: t.edu5Title, text: t.edu5Text, number: "05" },
            ]}
          />
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-24">
          <SectionTitle icon={Briefcase}>{t.experienceTitle}</SectionTitle>
          <StackingCards 
            items={[
              { title: t.exp1Title, text: t.exp1Text, number: "01" },
              { title: t.exp2Title, text: t.exp2Text, number: "02" },
              { title: t.exp3Title, text: t.exp3Text, number: "03" },
              { title: t.exp4Title, text: t.exp4Text, number: "04" },
              { title: t.exp5Title, text: t.exp5Text, number: "05" },
              { title: t.exp6Title, text: t.exp6Text, number: "06" },
              { title: t.exp7Title, text: t.exp7Text, number: "07" },
              { title: t.exp8Title, text: t.exp8Text, number: "08" },
            ]}
          />
        </section>

        {/* Skills & Languages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section id="skills" className="scroll-mt-24">
            <SectionTitle icon={Code}>{t.skillsTitle}</SectionTitle>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {t.skillsList.map((skill, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  viewport={{ once: true }}
                  className="p-4 bg-[#121624] rounded-2xl border border-white/10 flex items-center gap-3 group hover:border-[#5c60e6]/60 transition-colors shadow-lg"
                >
                  <div className="w-2 h-2 bg-[#5c60e6] rounded-full group-hover:scale-150 transition-transform shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-zinc-200 uppercase tracking-wider truncate">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="languages" className="scroll-mt-24">
            <SectionTitle icon={LangIcon}>{t.languagesTitle}</SectionTitle>
            <div className="space-y-3 sm:space-y-4">
              {t.languagesList.map((langItem, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="p-4 sm:p-5 bg-[#121624] rounded-2xl border border-white/10 flex justify-between items-center group hover:border-[#5c60e6]/40 transition-colors shadow-lg"
                >
                  <span className="font-semibold text-xs sm:text-sm text-zinc-200 uppercase tracking-wider">
                    {langItem}
                  </span>
                  <div className="flex gap-1.5">
                    {[1, 2, 3, 4, 5].map((dot) => (
                      <div 
                        key={dot} 
                        className={`w-2 h-2 rounded-full ${dot <= (i === 0 ? 5 : i === 1 ? 4 : 3) ? 'bg-[#5c60e6]' : 'bg-zinc-800'}`} 
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Contact Me */}
        <section id="contact" className="scroll-mt-24">
          <SectionTitle icon={Phone}>{t.contactTitle}</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <a 
              href={`tel:${t.contactPhone.replace(/\s+/g, '')}`}
              className="p-6 bg-[#121624] rounded-3xl border border-white/10 flex flex-col items-center text-center hover:border-[#5c60e6]/60 active:scale-98 transition-all group shadow-xl"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#5c60e6]/15 flex items-center justify-center text-[#818cf8] mb-3 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <p className="text-xs text-zinc-400 mb-1">Téléphone</p>
              <p className="text-white font-bold text-sm sm:text-base">{t.contactPhone}</p>
            </a>

            <a 
              href={`mailto:${t.contactEmail}`}
              className="p-6 bg-[#121624] rounded-3xl border border-white/10 flex flex-col items-center text-center hover:border-[#5c60e6]/60 active:scale-98 transition-all group shadow-xl"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#5c60e6]/15 flex items-center justify-center text-[#818cf8] mb-3 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <p className="text-xs text-zinc-400 mb-1">Email</p>
              <p className="text-white font-bold truncate w-full text-sm sm:text-base">{t.contactEmail}</p>
            </a>

            <div className="p-6 bg-[#121624] rounded-3xl border border-white/10 flex flex-col items-center text-center shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-[#5c60e6]/15 flex items-center justify-center text-[#818cf8] mb-3">
                <MapPin className="w-6 h-6" />
              </div>
              <p className="text-xs text-zinc-400 mb-1">Localisation</p>
              <p className="text-white font-bold text-sm sm:text-base">{t.contactLocation}</p>
            </div>

            <a 
              href="https://www.instagram.com/rayan_moatadide?igsh=MW1rc2Jkd3czMTRjdQ==" 
              target="_blank" 
              rel="noreferrer"
              className="p-6 bg-[#121624] rounded-3xl border border-white/10 flex flex-col items-center text-center hover:border-pink-500/50 active:scale-98 transition-all group shadow-xl"
            >
              <div className="w-12 h-12 rounded-2xl bg-pink-500/15 flex items-center justify-center text-pink-500 mb-3 group-hover:scale-110 transition-transform">
                <Instagram className="w-6 h-6" />
              </div>
              <p className="text-xs text-zinc-400 mb-1">Instagram</p>
              <p className="text-white font-bold text-sm sm:text-base">{t.instagramLabel}</p>
            </a>

            <a 
              href="https://www.linkedin.com/in/moatadid-rayan-763b7238b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              target="_blank" 
              rel="noreferrer"
              className="p-6 bg-[#121624] rounded-3xl border border-white/10 flex flex-col items-center text-center hover:border-blue-500/50 active:scale-98 transition-all group shadow-xl"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/15 flex items-center justify-center text-blue-400 mb-3 group-hover:scale-110 transition-transform">
                <Linkedin className="w-6 h-6" />
              </div>
              <p className="text-xs text-zinc-400 mb-1">LinkedIn</p>
              <p className="text-white font-bold text-sm sm:text-base">{t.linkedinLabel}</p>
            </a>

            <a 
              href="https://wa.me/212717568270?text=Bonjour%20Rayan,%20je%20vous%20contacte%20depuis%20votre%20portfolio" 
              target="_blank" 
              rel="noreferrer"
              className="p-6 bg-[#121624] rounded-3xl border border-white/10 flex flex-col items-center text-center hover:border-emerald-500/50 active:scale-98 transition-all group shadow-xl"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 flex items-center justify-center text-emerald-400 mb-3 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <p className="text-xs text-zinc-400 mb-1">WhatsApp Direct</p>
              <p className="text-emerald-400 font-bold text-sm sm:text-base">Démarrer un chat</p>
            </a>
          </div>
        </section>

        {/* Comments / Guestbook */}
        <section id="comments" className="scroll-mt-24">
          <SectionTitle icon={MessageSquare}>{t.commentsTitle}</SectionTitle>
          <div className="p-6 sm:p-8 bg-[#121624] rounded-3xl border border-white/10 shadow-2xl">
            <Comments 
              title={t.commentsTitle}
              namePlaceholder={t.namePlaceholder}
              commentPlaceholder={t.commentPlaceholder}
              publishButton={t.publishButton}
            />
          </div>
        </section>
      </main>

      {/* Floating Action Buttons: Phone & WhatsApp on Bottom Left, Scroll Top on Bottom Right */}
      <FloatingActions />

      {/* Rayan AI Assistant Modal */}
      <RayanAI />

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 text-center bg-[#0a0d14]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-bebas text-2xl font-bold tracking-wider text-white">
            RAYAN EL MOATADIDE
          </span>
          <p className="text-zinc-500 text-xs sm:text-sm font-medium">
            {t.footer}
          </p>
          <span className="text-xs text-zinc-600 font-mono">
            AI ENGINEER • CASABLANCA / MOHAMMEDIA
          </span>
        </div>
      </footer>
    </div>
  );
}
