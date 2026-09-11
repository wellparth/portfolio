'use client';

import React from 'react';
import { resumeData } from '@/data/resumeData';
import { TrendingUp, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CaseStudies() {
  const icons = [TrendingUp, Users, Zap];

  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest">
            Project Highlights
          </div>
          <h2 className="text-3xl font-bold text-white mt-2">Operational Case Studies</h2>
        </div>
        <p className="text-slate-400 text-sm max-w-md">
          Demonstrating how project coordination directly impacts delivery velocity, client satisfaction, and team alignment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {resumeData.caseStudies.map((cs, idx) => {
          const IconComp = icons[idx % icons.length];
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 space-y-5 border border-slate-800 flex flex-col justify-between hover:border-indigo-500/50 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${cs.badgeColor}`}>
                    {cs.company}
                  </span>
                  <span className="text-xs text-slate-500">{cs.period}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{cs.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{cs.desc}</p>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {cs.highlights.map((hl, hIdx) => (
                    <span key={hIdx} className="px-2 py-0.5 bg-slate-800 text-slate-300 text-[11px] rounded">
                      {hl}
                    </span>
                  ))}
                </div>
                <div className="text-xs font-semibold text-emerald-400 flex items-center pt-1">
                  <IconComp className="w-4 h-4 mr-1.5" />
                  <span>Role: {cs.role}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
