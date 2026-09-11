'use client';

import React from 'react';
import { resumeData } from '@/data/resumeData';

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      {/* Experience Header */}
      <h2 className="text-xl font-bold text-ink-900 border-b border-beige-300 pb-3">
        Professional Experience
      </h2>

      <div className="space-y-6">
        {resumeData.experience.map((exp, idx) => (
          <div key={idx} className="beige-card space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-beige-200 pb-3">
              <div>
                <h3 className="text-base font-bold text-ink-900">{exp.role}</h3>
                <span className="text-xs font-semibold text-olive-600 uppercase tracking-wide">{exp.company}</span>
              </div>
              <span className="text-xs font-medium text-ink-500 bg-beige-200/60 px-2.5 py-1 rounded-md border border-beige-300">
                {exp.period} | {exp.location}
              </span>
            </div>

            <ul className="space-y-2 text-xs text-ink-700">
              {exp.bullets.map((b, bIdx) => (
                <li key={bIdx} className="flex items-start">
                  <span className="text-olive-500 mr-2 font-bold">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Education & Languages */}
      <div id="education" className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {/* Education */}
        <div className="beige-card space-y-3">
          <h3 className="text-sm font-bold text-ink-900 border-b border-beige-200 pb-2">Education</h3>
          <div>
            <h4 className="text-sm font-semibold text-ink-900">{resumeData.education.institution}</h4>
            <p className="text-xs text-olive-600 font-medium mt-0.5">{resumeData.education.degree}</p>
            <p className="text-xs text-ink-500 mt-1">{resumeData.education.period} | {resumeData.education.location}</p>
          </div>
        </div>

        {/* Languages */}
        <div className="beige-card space-y-3">
          <h3 className="text-sm font-bold text-ink-900 border-b border-beige-200 pb-2">Languages</h3>
          <div className="grid grid-cols-3 gap-2">
            {resumeData.languages.map((lang, lIdx) => (
              <div key={lIdx} className="bg-beige-200/50 p-2.5 rounded-lg border border-beige-300 text-center">
                <span className="text-xs font-bold text-ink-900 block">{lang.language}</span>
                <span className="text-[11px] text-olive-600 font-medium">{lang.proficiency}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
