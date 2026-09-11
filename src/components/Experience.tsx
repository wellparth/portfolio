'use client';

import React from 'react';
import { resumeData } from '@/data/resumeData';
import { CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      {/* Experience Header */}
      <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-3">
        Professional Experience
      </h2>

      <div className="space-y-6">
        {resumeData.experience.map((exp, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">{exp.role}</h3>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{exp.company}</span>
              </div>
              <span className="text-xs font-medium text-slate-500">
                {exp.period} | {exp.location}
              </span>
            </div>

            <ul className="space-y-2 text-xs text-slate-600">
              {exp.bullets.map((b, bIdx) => (
                <li key={bIdx} className="flex items-start">
                  <span className="text-slate-400 mr-2 font-bold">•</span>
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
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
          <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">Education</h3>
          <div>
            <h4 className="text-sm font-semibold text-slate-800">{resumeData.education.institution}</h4>
            <p className="text-xs text-slate-600 mt-0.5">{resumeData.education.degree}</p>
            <p className="text-xs text-slate-400 mt-1">{resumeData.education.period} | {resumeData.education.location}</p>
          </div>
        </div>

        {/* Languages */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
          <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">Languages</h3>
          <div className="grid grid-cols-3 gap-2">
            {resumeData.languages.map((lang, lIdx) => (
              <div key={lIdx} className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-center">
                <span className="text-xs font-semibold text-slate-800 block">{lang.language}</span>
                <span className="text-[11px] text-slate-500">{lang.proficiency}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
