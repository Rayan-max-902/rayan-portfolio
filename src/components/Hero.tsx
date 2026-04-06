/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

interface HeroProps {
  name: string;
  title: string;
}

export default function Hero({ name, title }: HeroProps) {
  return (
    <header className="pt-32 pb-16 px-4 bg-gradient-to-b from-blue-50 to-zinc-50 dark:from-zinc-950 dark:to-black">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-6xl font-black text-zinc-900 dark:text-zinc-100 mb-4 tracking-tighter">
            {name}
          </h1>
          <p className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 font-medium mb-8">
            {title}
          </p>
        </motion.div>
      </div>
    </header>
  );
}
