'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Download, Mail, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-beige-100/90 backdrop-blur-md border-b border-beige-300/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Left Monogram Icon */}
        <Link
          href="/"
          className="w-9 h-9 rounded-xl bg-olive-500 hover:bg-olive-600 text-white flex items-center justify-center font-serif font-bold text-base shadow-sm transition-transform hover:scale-105"
          aria-label="Home"
        >
          P
        </Link>

        {/* Desktop Nav Links (Prominent, Elegant Serif) */}
        <nav className="hidden sm:flex items-center space-x-10 text-base sm:text-lg font-serif font-bold text-ink-900">
          <Link href="/" className="hover:text-olive-600 transition-colors relative py-1 group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-olive-500 transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link href="/blog" className="hover:text-olive-600 transition-colors relative py-1 group">
            Blogs
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-olive-500 transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link href="/contact" className="hover:text-olive-600 transition-colors relative py-1 group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-olive-500 transition-all duration-300 group-hover:w-full" />
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            href="/Parth_Gorde_Operations_Resume.pdf"
            download
            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-beige-200 hover:bg-beige-300 text-ink-900 border border-beige-300 transition-colors shadow-sm"
          >
            <Download className="w-3.5 h-3.5 text-olive-600" />
            <span>PDF Resume</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="sm:hidden p-2 text-ink-700 hover:text-ink-900"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-beige-50 border-b border-beige-300 px-4 pt-3 pb-5 space-y-3">
          <nav className="flex flex-col space-y-2 text-lg font-serif font-bold text-ink-900">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-olive-600">Home</Link>
            <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-olive-600">Blogs</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-olive-600">Contact</Link>
          </nav>
          <div className="pt-2 border-t border-beige-200 flex gap-2">
            <a
              href="/Parth_Gorde_Operations_Resume.pdf"
              download
              className="flex-1 inline-flex items-center justify-center space-x-1.5 py-2.5 rounded-xl text-xs font-semibold bg-beige-200 text-ink-900 border border-beige-300"
            >
              <Download className="w-3.5 h-3.5 text-olive-600" />
              <span>PDF Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
