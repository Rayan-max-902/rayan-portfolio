/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Language } from '../types';
import { Moon, Sun } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

export default function Navbar({ lang, setLang, isDark, setIsDark }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">R</div>
          <span className="font-bold text-zinc-900 dark:text-zinc-100 hidden sm:block">RAYAN</span>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex bg-zinc-100 dark:bg-zinc-900 p-1 rounded-full">
            {(['fr', 'en', 'ar', 'es'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  lang === l 
                    ? 'bg-white dark:bg-zinc-800 text-blue-600 shadow-sm' 
                    : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
}
