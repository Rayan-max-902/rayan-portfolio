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
import Hero from './components/Hero';
import RevealSection from './components/RevealSection';
import RayanAI from './components/RayanAI';
import SectionTitle from './components/SectionTitle';
import Card from './components/Card';
import StackingCards from './components/StackingCards';
import Comments from './components/Comments';

export default function App() {
  const [lang, setLang] = useState<Language>('fr');
  const [isDark, setIsDark] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    }
  }, [isDark]);

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black transition-colors duration-300 font-sans">
      <Navbar lang={lang} setLang={setLang} isDark={isDark} setIsDark={setIsDark} />

      <RevealSection />

      <Hero name={t.mainName} title={t.title} />

      <main className="max-w-4xl mx-auto px-4 py-12 space-y-24">
        {/* Profile */}
        <section id="profile">
          <SectionTitle icon={User}>{t.profileTitle}</SectionTitle>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="p-8 bg-blue-600 rounded-3xl text-white shadow-xl shadow-blue-500/20"
          >
            <p className="text-lg leading-relaxed font-medium opacity-95">
              {t.profileText}
            </p>
          </motion.div>
        </section>

        {/* Education */}
        <section id="education">
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
        <section id="experience">
          <SectionTitle icon={Briefcase}>{t.experienceTitle}</SectionTitle>
          <StackingCards 
            items={[
              { title: t.exp1Title, text: t.exp1Text, number: "01" },
              { title: t.exp2Title, text: t.exp2Text, number: "02" },
              { title: t.exp3Title, text: t.exp3Text, number: "03" },
              { title: t.exp4Title, text: t.exp4Text, number: "04" },
              { title: t.exp5Title, text: t.exp5Text, number: "05" },
              { title: t.exp6Title, text: t.exp6Text, number: "06" },
            ]}
          />
        </section>

        {/* Skills & Languages */}
        <div className="grid md:grid-cols-2 gap-8">
          <section id="skills">
            <SectionTitle icon={Code}>{t.skillsTitle}</SectionTitle>
            <div className="grid grid-cols-2 gap-4">
              {t.skillsList.map((skill, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 flex items-center gap-3 group hover:border-blue-500/50 transition-colors"
                >
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full group-hover:scale-150 transition-transform" />
                  <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="languages">
            <SectionTitle icon={LangIcon}>{t.languagesTitle}</SectionTitle>
            <div className="space-y-4">
              {t.languagesList.map((langItem, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 flex justify-between items-center group hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
                >
                  <span className="font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-widest">{langItem}</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((dot) => (
                      <div 
                        key={dot} 
                        className={`w-2 h-2 rounded-full ${dot <= (i === 0 ? 5 : i === 1 ? 4 : 3) ? 'bg-blue-600' : 'bg-zinc-200 dark:bg-zinc-700'}`} 
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Contact */}
        <section id="contact">
          <SectionTitle icon={Phone}>{t.contactTitle}</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 flex flex-col items-center text-center">
              <Phone className="w-8 h-8 text-blue-600 mb-4" />
              <p className="text-zinc-900 dark:text-zinc-100 font-bold">{t.contactPhone}</p>
            </div>
            <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 flex flex-col items-center text-center">
              <Mail className="w-8 h-8 text-blue-600 mb-4" />
              <p className="text-zinc-900 dark:text-zinc-100 font-bold truncate w-full">{t.contactEmail}</p>
            </div>
            <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 flex flex-col items-center text-center">
              <MapPin className="w-8 h-8 text-blue-600 mb-4" />
              <p className="text-zinc-900 dark:text-zinc-100 font-bold">{t.contactLocation}</p>
            </div>
            <a 
              href="https://www.instagram.com/rayan_moatadide?igsh=MW1rc2Jkd3czMTRjdQ==" 
              target="_blank" 
              rel="noreferrer"
              className="p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 flex flex-col items-center text-center hover:border-pink-500/50 transition-colors group"
            >
              <Instagram className="w-8 h-8 text-pink-600 mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-zinc-900 dark:text-zinc-100 font-bold">{t.instagramLabel}</p>
            </a>
            <a 
              href="https://www.linkedin.com/in/moatadid-rayan-763b7238b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              target="_blank" 
              rel="noreferrer"
              className="p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 flex flex-col items-center text-center hover:border-blue-500/50 transition-colors group"
            >
              <Linkedin className="w-8 h-8 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-zinc-900 dark:text-zinc-100 font-bold">{t.linkedinLabel}</p>
            </a>
          </div>
        </section>

        {/* Comments */}
        <section id="comments">
          <SectionTitle icon={MessageSquare}>{t.commentsTitle}</SectionTitle>
          <Comments 
            title={t.commentsTitle}
            namePlaceholder={t.namePlaceholder}
            commentPlaceholder={t.commentPlaceholder}
            publishButton={t.publishButton}
          />
        </section>
      </main>

      <RayanAI />

      {/* Circular Progress Indicator */}
      <svg className="progress-circle fixed bottom-[30px] right-[30px] w-20 h-20 z-[100] pointer-events-none" viewBox="0 0 100 100">
        <circle 
          cx="50" cy="50" r="40" 
          className="fill-none stroke-blue-600 dark:stroke-blue-400 stroke-[6] origin-center -rotate-90"
          style={{
            strokeDasharray: 251,
            strokeDashoffset: 251,
            animation: 'progress-spin linear',
            animationTimeline: 'scroll()'
          }}
        />
      </svg>

      <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800 text-center">
        <p className="text-zinc-500 dark:text-zinc-500 text-sm font-medium">
          {t.footer}
        </p>
      </footer>
    </div>
  );
}
