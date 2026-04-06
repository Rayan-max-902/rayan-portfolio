/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionTitleProps {
  children: React.ReactNode;
  icon: LucideIcon;
}

export default function SectionTitle({ children, icon: Icon }: SectionTitleProps) {
  return (
    <div className="flex items-center gap-3 mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-2">
      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-tight">
        {children}
      </h2>
    </div>
  );
}
