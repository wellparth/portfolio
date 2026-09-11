'use client';

import React from 'react';
import { resumeData } from '@/data/resumeData';
import { Mail, Linkedin, Download } from 'lucide-react';

export default function ContactFooter() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <div className="bg-olive-50 border border-olive-200 rounded-2xl p-8 text-center space-y-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-olive-100 border border-olive-200 text-olive-700 text-xs font-semibold">
          <span>Let's Work Together</span>
        </div>

        <h2 className="text-2xl font-bold text-ink-900">
          Get In Touch
        </h2>
        <p className="text-ink-700 text-sm max-w-xl mx-auto leading-relaxed">
          Open to Digital Project Coordinator, Operations Specialist, and Client Onboarding roles.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href={`mailto:${resumeData.personal.email}`}
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-olive-500 hover:bg-olive-600 text-white shadow-sm transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Send Direct Email</span>
          </a>
          <a
            href={resumeData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-beige-50 hover:bg-beige-200 text-ink-900 border border-beige-300 transition-colors"
          >
            <Linkedin className="w-4 h-4 text-olive-600" />
            <span>LinkedIn</span>
          </a>
          <a
            href="/Parth_Gorde_Operations_Resume.pdf"
            download
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-beige-50 hover:bg-beige-200 text-ink-900 border border-beige-300 transition-colors"
          >
            <Download className="w-4 h-4 text-olive-600" />
            <span>Download Resume PDF</span>
          </a>
        </div>
      </div>

      <footer className="mt-12 text-center text-xs text-ink-500">
        <p>© 2026 {resumeData.personal.name}. All rights reserved. • {resumeData.personal.location}</p>
      </footer>
    </section>
  );
}
