'use client';

import React from 'react';
import { resumeData } from '@/data/resumeData';
import { Mail, Linkedin, Phone, Download } from 'lucide-react';

export default function ContactFooter() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm text-center space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Get In Touch
        </h2>
        <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed">
          Open to full-time Digital Project Coordinator, Operations Specialist, and Client Onboarding roles.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href={`mailto:${resumeData.personal.email}`}
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Send Email</span>
          </a>
          <a
            href={resumeData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 transition-colors"
          >
            <Linkedin className="w-4 h-4 text-slate-700" />
            <span>LinkedIn</span>
          </a>
          <a
            href="/Parth_Gorde_Operations_Resume.pdf"
            download
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume PDF</span>
          </a>
        </div>
      </div>

      <footer className="mt-12 text-center text-xs text-slate-400">
        <p>© 2026 {resumeData.personal.name}. All rights reserved. • {resumeData.personal.location}</p>
      </footer>
    </section>
  );
}
