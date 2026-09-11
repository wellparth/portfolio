'use client';

import React from 'react';
import { resumeData } from '@/data/resumeData';
import { Mail, Linkedin, Phone, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 pb-8">
      <div className="space-y-6">
        {/* Availability Badge */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-xs font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Available for Project Coordinator & Operations Roles</span>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            {resumeData.personal.name}
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 font-medium">
            {resumeData.personal.title}
          </p>
        </div>

        {/* Brief Bio */}
        <p className="text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed">
          {resumeData.personal.summary}
        </p>

        {/* Contact Links Bar */}
        <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-600">
          <a href={`mailto:${resumeData.personal.email}`} className="flex items-center space-x-1.5 hover:text-slate-900 font-medium">
            <Mail className="w-4 h-4 text-slate-400" />
            <span>{resumeData.personal.email}</span>
          </a>
          <a href={`tel:${resumeData.personal.phone.replace(/\s+/g, '')}`} className="flex items-center space-x-1.5 hover:text-slate-900 font-medium">
            <Phone className="w-4 h-4 text-slate-400" />
            <span>{resumeData.personal.phone}</span>
          </a>
          <a href={resumeData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1.5 hover:text-slate-900 font-medium">
            <Linkedin className="w-4 h-4 text-slate-400" />
            <span>LinkedIn Profile</span>
          </a>
          <span className="flex items-center space-x-1 text-slate-500">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span>{resumeData.personal.location}</span>
          </span>
        </div>
      </div>
    </section>
  );
}
