'use client';

import React from 'react';
import { resumeData } from '@/data/resumeData';

export default function Metrics() {
  return (
    <section id="impact" className="max-w-5xl mx-auto px-4 sm:px-6 py-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {resumeData.metrics.map((metric, idx) => (
          <div key={idx} className="beige-card">
            <div className="text-3xl sm:text-4xl font-extrabold text-olive-600 tracking-tight">
              {metric.value}
            </div>
            <div className="text-xs font-bold text-ink-900 mt-1">{metric.label}</div>
            <div className="text-[11px] text-ink-500 mt-1 leading-snug">{metric.detail}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
