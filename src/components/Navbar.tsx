'use client';

import React, { useState } from 'react';
import { resumeData } from '@/data/resumeData';
import { Download, Mail, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#hero" className="font-bold text-base text-slate-900 tracking-tight hover:text-slate-600 transition-colors">
          {resumeData.personal.name}
          <span className="text-slate-400 font-normal text-xs ml-2">/ Operations</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-xs font-medium text-slate-600">
          <a href="#impact" className="hover:text-slate-900 transition-colors">Impact</a>
          <a href="#skills" className="hover:text-slate-900 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-slate-900 transition-colors">Experience</a>
          <a href="#education" className="hover:text-slate-900 transition-colors">Education</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            href="/Parth_Gorde_Operations_Resume.pdf"
            download
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume PDF</span>
          </a>
          <a
            href={`mailto:${resumeData.personal.email}`}
            className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-slate-900 hover:bg-slate-800 text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-600 hover:text-slate-900"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm text-slate-600">
            <a href="#impact" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-slate-900">Impact</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-slate-900">Skills</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-slate-900">Experience</a>
            <a href="#education" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-slate-900">Education</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-slate-900">Contact</a>
          </nav>
          <div className="pt-2 border-t border-slate-100 flex gap-2">
            <a
              href="/Parth_Gorde_Operations_Resume.pdf"
              download
              className="flex-1 inline-flex items-center justify-center space-x-1.5 py-2 rounded-lg text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200"
            >
              <Download className="w-3.5 h-3.5" />
              <span>PDF Resume</span>
            </a>
            <a
              href={`mailto:${resumeData.personal.email}`}
              className="flex-1 inline-flex items-center justify-center space-x-1.5 py-2 rounded-lg text-xs font-medium bg-slate-900 text-white"
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
