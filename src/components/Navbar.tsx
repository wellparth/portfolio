'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Download, Mail, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 pt-3 pb-2 px-4">
      <div className="max-w-xl mx-auto h-12 px-5 rounded-full bg-beige-50/90 backdrop-blur-md border border-beige-300/80 shadow-sm flex items-center justify-between transition-all">
        {/* Left Minimal Brand Pill Icon */}
        <Link
          href="/"
          className="w-7 h-7 rounded-full bg-olive-500 hover:bg-olive-600 text-white flex items-center justify-center font-serif font-bold text-xs shadow-sm transition-transform hover:scale-105"
          aria-label="Home"
        >
          P
        </Link>

        {/* Desktop Nav Links: Home, Blogs, Contact */}
        <nav className="hidden sm:flex items-center space-x-8 text-xs font-semibold text-ink-700">
          <Link href="/" className="hover:text-olive-600 transition-colors">
            Home
          </Link>
          <Link href="/blog" className="hover:text-olive-600 transition-colors">
            Blogs
          </Link>
          <Link href="/contact" className="hover:text-olive-600 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center space-x-2">
          <a
            href="/Parth_Gorde_Operations_Resume.pdf"
            download
            className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-beige-200 hover:bg-beige-300 text-ink-900 border border-beige-300/80 transition-colors"
          >
            <Download className="w-3 h-3 text-olive-600" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="sm:hidden p-1.5 text-ink-700 hover:text-ink-900"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden max-w-xl mx-auto mt-2 p-4 rounded-2xl bg-beige-50 border border-beige-300 shadow-md space-y-3">
          <nav className="flex flex-col space-y-2 text-xs font-semibold text-ink-700">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="py-1.5 hover:text-olive-600">Home</Link>
            <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="py-1.5 hover:text-olive-600">Blogs</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="py-1.5 hover:text-olive-600">Contact</Link>
          </nav>
          <div className="pt-2 border-t border-beige-200 flex gap-2">
            <a
              href="/Parth_Gorde_Operations_Resume.pdf"
              download
              className="flex-1 inline-flex items-center justify-center space-x-1.5 py-2 rounded-full text-xs font-semibold bg-beige-200 text-ink-900 border border-beige-300"
            >
              <Download className="w-3.5 h-3.5 text-olive-600" />
              <span>Resume PDF</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
