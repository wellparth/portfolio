'use client';

import React, { useState } from 'react';
import { resumeData } from '@/data/resumeData';
import { Download, Mail, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-beige-100/90 backdrop-blur-md border-b border-beige-300/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#hero" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 rounded-lg bg-olive-500 text-white flex items-center justify-center font-bold text-xs shadow-sm group-hover:bg-olive-600 transition-colors">
            PG
          </div>
          <span className="font-bold text-sm text-ink-900 tracking-tight">
            {resumeData.personal.name}
            <span className="text-olive-500 font-medium text-xs ml-1.5">• Operations</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-xs font-medium text-ink-700">
          <a href="#impact" className="hover:text-olive-600 transition-colors">Impact</a>
          <a href="#skills" className="hover:text-olive-600 transition-colors">Skills & AI</a>
          <a href="#experience" className="hover:text-olive-600 transition-colors">Experience</a>
          <a href="#education" className="hover:text-olive-600 transition-colors">Education</a>
          <a href="#contact" className="hover:text-olive-600 transition-colors">Contact</a>
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            href="/Parth_Gorde_Operations_Resume.pdf"
            download
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-beige-200 hover:bg-beige-300 text-ink-900 border border-beige-300 transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-olive-600" />
            <span>PDF Resume</span>
          </a>
          <a
            href={`mailto:${resumeData.personal.email}`}
            className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-olive-500 hover:bg-olive-600 text-white shadow-sm transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-ink-700 hover:text-ink-900"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-beige-50 border-b border-beige-300 px-4 pt-3 pb-5 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm text-ink-700">
            <a href="#impact" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-olive-600">Impact</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-olive-600">Skills & AI</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-olive-600">Experience</a>
            <a href="#education" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-olive-600">Education</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-olive-600">Contact</a>
          </nav>
          <div className="pt-2 border-t border-beige-200 flex gap-2">
            <a
              href="/Parth_Gorde_Operations_Resume.pdf"
              download
              className="flex-1 inline-flex items-center justify-center space-x-1.5 py-2 rounded-lg text-xs font-medium bg-beige-200 text-ink-900 border border-beige-300"
            >
              <Download className="w-3.5 h-3.5 text-olive-600" />
              <span>PDF Resume</span>
            </a>
            <a
              href={`mailto:${resumeData.personal.email}`}
              className="flex-1 inline-flex items-center justify-center space-x-1.5 py-2 rounded-lg text-xs font-medium bg-olive-500 text-white"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
