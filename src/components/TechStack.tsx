'use client';

import React from 'react';
import { resumeData } from '@/data/resumeData';

export default function TechStack() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-3">
        Skills & Technology
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {resumeData.skillsCategory.map((cat, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
            <h3 className="text-sm font-bold text-slate-900">{cat.category}</h3>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {cat.items.map((item, iIdx) => (
                <span
                  key={iIdx}
                  className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700"
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
