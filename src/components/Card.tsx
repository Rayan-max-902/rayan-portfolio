/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

interface CardProps {
  title: string;
  subtitle?: string;
  text: string;
}

export default function Card({ title, subtitle, text }: CardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all mb-4"
    >
      <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-1">{title}</h3>
      {subtitle && <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">{subtitle}</p>}
      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{text}</p>
    </motion.div>
  );
}
