'use client';

import React from 'react';
import { resumeData } from '@/data/resumeData';

export default function TechStack() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      <h2 className="text-xl font-bold text-ink-900 border-b border-beige-300 pb-3 flex items-center justify-between">
        <span>Skills & Technology</span>
        <span className="text-xs font-semibold text-olive-600 bg-olive-100 px-2.5 py-1 rounded-full border border-olive-200">
          AI & Operations
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {resumeData.skillsCategory.map((cat, idx) => (
          <div key={idx} className="beige-card space-y-3">
            <h3 className="text-sm font-bold text-ink-900">{cat.category}</h3>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {cat.items.map((item, iIdx) => (
                <span
                  key={iIdx}
                  className="px-2.5 py-1 rounded-md bg-beige-200/70 border border-beige-300 text-xs font-medium text-ink-700 hover:border-olive-300 hover:text-olive-700 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
