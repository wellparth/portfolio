'use client';

import React from 'react';
import { resumeData } from '@/data/resumeData';

export default function ContactFooter() {
  return (
    <footer className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 pb-8">
      <hr className="border-t border-beige-300 mb-6" />
      <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-ink-500 gap-2">
        <p>© 2026 {resumeData.personal.name}. All rights reserved.</p>
        <p className="text-ink-400">{resumeData.personal.location}</p>
      </div>
    </footer>
  );
}
