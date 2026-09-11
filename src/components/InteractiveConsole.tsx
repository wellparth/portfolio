'use client';

import React, { useState } from 'react';
import { Terminal, CheckCircle2, Bot, Layers, Play, FileText, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InteractiveConsole() {
  const [activeTab, setActiveTab] = useState<'sop' | 'tracker' | 'ai'>('sop');
  const [copied, setCopied] = useState(false);

  const samplePrompt = "Generate client onboarding checklist for a custom Next.js e-commerce website project.";
  const sampleOutput = `[AI Operations Agent Response]
1. Intake & Scope: Confirm target features, design tokens, and domain assets.
2. Resource Mapping: Assign Senior Frontend Dev & UI Designer.
3. Timeline Baseline: 4 Sprints (Scoping → Wireframe → Build → QA & Deploy).
4. Status Channel: Weekly Slack sync + Notion dashboard access.`;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-widest">
          Interactive Live Console
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Experience Parth's Operations Workflow</h2>
        <p className="text-slate-400 text-sm">
          Test drive how Parth manages project intake, task tracking, and AI prompt generation in real time.
        </p>
      </div>

      <div className="glass-card rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
        {/* Terminal Header */}
        <div className="bg-slate-900 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-xs font-mono text-slate-400 flex items-center">
              <Terminal className="w-3.5 h-3.5 mr-2 text-indigo-400" />
              parth_gorde_operations_os.sh
            </span>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-2 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
            <button
              onClick={() => setActiveTab('sop')}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'sop' ? 'bg-indigo-600 text-white font-medium shadow' : 'text-slate-400 hover:text-slate-200'}`}
            >
              SOP Generator
            </button>
            <button
              onClick={() => setActiveTab('tracker')}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'tracker' ? 'bg-indigo-600 text-white font-medium shadow' : 'text-slate-400 hover:text-slate-200'}`}
            >
              Live Sprint Board
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'ai' ? 'bg-indigo-600 text-white font-medium shadow' : 'text-slate-400 hover:text-slate-200'}`}
            >
              AI Prompt Automation
            </button>
          </div>
        </div>

        {/* Tab Content Area */}
        <div className="p-6 bg-slate-950/90 font-mono text-xs text-slate-300 min-h-[260px]">
          <AnimatePresence mode="wait">
            {activeTab === 'sop' && (
              <motion.div
                key="sop"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-900">
                  <span className="text-indigo-400 font-semibold flex items-center">
                    <FileText className="w-4 h-4 mr-2" /> Standard Operating Procedure (SOP) #17
                  </span>
                  <span className="text-[11px] text-emerald-400 font-sans">✓ Verified Template</span>
                </div>
                <div className="space-y-2 text-slate-300">
                  <p><span className="text-cyan-400">$</span> step_1: Gather client requirements & scope documentation.</p>
                  <p><span className="text-cyan-400">$</span> step_2: Match skill set with internal team / 15+ freelancer network.</p>
                  <p><span className="text-cyan-400">$</span> step_3: Set up Jira/Trello board with 2-week sprint milestones.</p>
                  <p><span className="text-cyan-400">$</span> step_4: Run automated AI daily check-ins for blocker detection.</p>
                  <p><span className="text-cyan-400">$</span> step_5: Execute post-launch handoff & documentation package.</p>
                </div>
              </motion.div>
            )}

            {activeTab === 'tracker' && (
              <motion.div
                key="tracker"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans text-xs"
              >
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                  <div className="flex justify-between items-center text-slate-400 font-bold">
                    <span>TO DO (Sprint 1)</span>
                    <span className="text-indigo-400">2 Tasks</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                    <p className="font-semibold text-slate-200">Quotation Approval</p>
                    <span className="text-[10px] text-slate-400">Client: Retail Corp</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-amber-500/30 space-y-3">
                  <div className="flex justify-between items-center text-amber-400 font-bold">
                    <span>IN PROGRESS</span>
                    <span className="text-amber-400">3 Active</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950 border border-amber-500/20 space-y-1">
                    <p className="font-semibold text-slate-200">Website QA & Cross-Browser Test</p>
                    <span className="text-[10px] text-slate-400">Assigned: Dev Team</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-emerald-500/30 space-y-3">
                  <div className="flex justify-between items-center text-emerald-400 font-bold">
                    <span>COMPLETED</span>
                    <span className="text-emerald-400">17+ Delivered</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950 border border-emerald-500/20 space-y-1">
                    <p className="font-semibold text-slate-200">Think Digital Site Launch</p>
                    <span className="text-[10px] text-emerald-400">✓ On-Time Delivery</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'ai' && (
              <motion.div
                key="ai"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-4"
              >
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center space-x-3 text-slate-300">
                  <Bot className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-mono text-[11px] flex-1">{samplePrompt}</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px]">EXECUTED</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 text-slate-300 leading-relaxed font-mono">
                  {sampleOutput.split('\n').map((line, i) => (
                    <p key={i} className={i === 0 ? "text-indigo-400 font-semibold" : ""}>{line}</p>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
