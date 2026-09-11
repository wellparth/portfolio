'use client';

import React from 'react';
import { resumeData } from '@/data/resumeData';

export default function Metrics() {
  return (
    <section id="impact" className="max-w-5xl mx-auto px-4 sm:px-6 py-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {resumeData.metrics.map((metric, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <div className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              {metric.value}
            </div>
            <div className="text-xs font-semibold text-slate-800 mt-1">{metric.label}</div>
            <div className="text-[11px] text-slate-500 mt-1 leading-snug">{metric.detail}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
