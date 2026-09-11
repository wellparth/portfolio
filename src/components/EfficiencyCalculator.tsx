'use client';

import React, { useState } from 'react';
import { Sparkles, ArrowRight, Zap, Clock, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EfficiencyCalculator() {
  const [projectCount, setProjectCount] = useState(5);
  const [teamSize, setTeamSize] = useState(8);

  // Math for estimated stats
  const hoursSavedPerWeek = Math.round(projectCount * 3.5 + teamSize * 1.8);
  const deliverySpeedupPct = Math.min(45, Math.round(20 + projectCount * 1.5 + teamSize * 0.8));
  const clientSatisfactionScore = (9.7 + Math.min(0.2, projectCount * 0.02)).toFixed(1);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="glass-card rounded-3xl p-8 sm:p-12 border border-indigo-500/20 relative overflow-hidden bg-gradient-to-br from-slate-900/90 via-slate-950 to-indigo-950/40 shadow-2xl">
        {/* Subtle Ambient Background */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          {/* Left Column: Explainer */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Interactive ROI Estimator</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Calculate Operational Efficiency Gains with Parth
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              By combining Agile project management, structured freelancer coordination, and AI prompt automation, Parth reduces project bottleneck cycles and accelerates time-to-market.
            </p>

            {/* Sliders */}
            <div className="space-y-6 pt-4 border-t border-slate-800">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-medium">
                  <span className="text-slate-300">Concurrent Projects Managed</span>
                  <span className="text-indigo-400 font-mono font-bold text-sm">{projectCount} Projects</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={projectCount}
                  onChange={(e) => setProjectCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-medium">
                  <span className="text-slate-300">Team / Freelancer Size</span>
                  <span className="text-cyan-400 font-mono font-bold text-sm">{teamSize} Members</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="30"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Calculated Output Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div
              key={`h-${hoursSavedPerWeek}`}
              initial={{ scale: 0.95, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3"
            >
              <div className="p-2.5 w-fit rounded-xl bg-indigo-500/10 text-indigo-400">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-3xl font-extrabold text-white tracking-tight">
                  ~{hoursSavedPerWeek} <span className="text-xs font-normal text-slate-400">hrs/wk</span>
                </div>
                <h4 className="text-xs font-semibold text-slate-200 mt-1">Management Time Saved</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">Automated SOPs & status syncing</p>
              </div>
            </motion.div>

            <motion.div
              key={`s-${deliverySpeedupPct}`}
              initial={{ scale: 0.95, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3"
            >
              <div className="p-2.5 w-fit rounded-xl bg-cyan-500/10 text-cyan-400">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-3xl font-extrabold text-white tracking-tight">
                  +{deliverySpeedupPct}%
                </div>
                <h4 className="text-xs font-semibold text-slate-200 mt-1">Faster Sprint Completion</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">Proactive blocker resolution</p>
              </div>
            </motion.div>

            <div className="sm:col-span-2 p-6 rounded-2xl bg-slate-900/90 border border-emerald-500/30 space-y-3 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Client Satisfaction Rating</h4>
                  <p className="text-xs text-slate-400">Based on transparent communication & milestone integrity</p>
                </div>
              </div>
              <div className="text-2xl font-extrabold text-emerald-400 font-mono">
                {clientSatisfactionScore}/10
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
