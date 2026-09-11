'use client';

import React from 'react';
import { resumeData } from '@/data/resumeData';
import { Mail, Linkedin, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 pb-6">
      <div className="space-y-6">
        {/* Availability Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-olive-100 border border-olive-200 text-olive-700 text-xs font-medium">
          <span className="w-2 h-2 rounded-full bg-olive-500 animate-pulse" />
          <span>Available for Project Coordinator & Operations Roles</span>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-900 tracking-tight">
            {resumeData.personal.name}
          </h1>
          <p className="text-lg sm:text-xl text-olive-600 font-semibold">
            {resumeData.personal.title}
          </p>
        </div>

        {/* Concise Bio */}
        <p className="text-ink-700 text-sm sm:text-base max-w-3xl leading-relaxed">
          {resumeData.personal.summary}
        </p>

        {/* Action Buttons & Links */}
        <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-ink-700">
          <a
            href={`mailto:${resumeData.personal.email}`}
            className="px-4 py-2.5 rounded-xl bg-olive-500 hover:bg-olive-600 text-white shadow-sm flex items-center space-x-2 transition-all"
          >
            <Mail className="w-4 h-4" />
            <span>Send Direct Email</span>
          </a>

          <a
            href={resumeData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-beige-50 hover:bg-beige-200 text-ink-900 border border-beige-300 flex items-center space-x-1.5 transition-all"
          >
            <Linkedin className="w-4 h-4 text-olive-600" />
            <span>LinkedIn Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-ink-500" />
          </a>

          <span className="flex items-center space-x-1 text-ink-500 ml-auto sm:ml-0">
            <MapPin className="w-3.5 h-3.5 text-olive-500" />
            <span>{resumeData.personal.location}</span>
          </span>
        </div>
      </div>
    </section>
  );
}
