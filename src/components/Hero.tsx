'use client';

import React from 'react';
import { resumeData } from '@/data/resumeData';
import { Mail, Download, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 pb-6">
      <div className="space-y-6">
        {/* Availability Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-olive-100 border border-olive-200 text-olive-700 text-xs font-semibold tracking-wide">
          <span className="w-2 h-2 rounded-full bg-olive-500 animate-pulse" />
          <span>Available for Project Coordinator & Operations Roles</span>
        </div>

        {/* Title & Headline Pairing */}
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-ink-900 tracking-tight leading-none">
            {resumeData.personal.name}
          </h1>
          <p className="text-lg sm:text-xl font-sans text-olive-600 font-semibold tracking-tight">
            {resumeData.personal.title}
          </p>
        </div>

        {/* Concise Bio */}
        <p className="text-ink-700 text-sm sm:text-base max-w-3xl leading-relaxed font-sans">
          {resumeData.personal.summary}
        </p>

        {/* Action Buttons & Links */}
        <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-ink-700">
          <a
            href={`mailto:${resumeData.personal.email}`}
            className="px-4 py-2.5 rounded-xl bg-olive-500 hover:bg-olive-600 text-white shadow-sm flex items-center space-x-2 transition-all"
          >
            <Mail className="w-4 h-4" />
            <span>Send Direct Email</span>
          </a>

          <a
            href="/Parth_Gorde_Operations_Resume.pdf"
            download
            className="px-4 py-2.5 rounded-xl bg-beige-50 hover:bg-beige-200 text-ink-900 border border-beige-300 flex items-center space-x-2 transition-all"
          >
            <Download className="w-4 h-4 text-olive-600" />
            <span>Download Resume</span>
          </a>

          <span className="flex items-center space-x-1 text-ink-500 ml-auto sm:ml-0 font-normal">
            <MapPin className="w-3.5 h-3.5 text-olive-500" />
            <span>{resumeData.personal.location}</span>
          </span>
        </div>
      </div>
    </section>
  );
}
