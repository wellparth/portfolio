'use client';

import React from 'react';
import { resumeData } from '@/data/resumeData';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Workflow() {
  return (
    <section id="workflow" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-widest">
          Operational Blueprint
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">How I Coordinate & Deliver Digital Projects</h2>
        <p className="text-slate-400 text-sm sm:text-base">
          A structured 4-phase methodology that eliminates communication gaps, keeps stakeholders aligned, and ensures deadline integrity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {resumeData.workflowSteps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-card glass-card-hover rounded-2xl p-6 space-y-4 relative border border-slate-800 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold text-lg">
                {step.step}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>

            <div className="space-y-1.5 pt-4 border-t border-slate-800">
              {step.tags.map((tag, tIdx) => (
                <div key={tIdx} className="flex items-center text-xs text-slate-300">
                  <Check className="w-3.5 h-3.5 text-indigo-400 mr-2 shrink-0" />
                  <span>{tag}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
