import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import ContactFooter from '@/components/ContactFooter';
import { resumeData } from '@/data/resumeData';
import { Mail, Phone, Linkedin, Download, ArrowLeft, MapPin, Copy, ExternalLink } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Parth Gorde',
  description: 'Get in touch with Parth Gorde - Digital Project Coordinator & Operations Specialist.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-beige-100 text-ink-900 flex flex-col justify-between">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 pb-16 space-y-8 flex-1 w-full">
        {/* Back link */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-olive-600 hover:text-olive-700 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="space-y-2 border-b border-beige-300 pb-6">
          <h1 className="text-3xl font-extrabold text-ink-900 tracking-tight">
            Contact & Connect
          </h1>
          <p className="text-sm text-ink-700 max-w-xl">
            Open for Project Coordinator, Operations Specialist, and Client Onboarding opportunities. Feel free to reach out via email, phone, or LinkedIn!
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email Card */}
          <div className="beige-card space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-olive-100 text-olive-700">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-ink-900">Email Address</h3>
                <p className="text-xs text-ink-500">Direct message or inquiry</p>
              </div>
            </div>
            <div className="pt-2 border-t border-beige-200 flex items-center justify-between">
              <a
                href={`mailto:${resumeData.personal.email}`}
                className="text-sm font-semibold text-olive-600 hover:underline"
              >
                {resumeData.personal.email}
              </a>
              <a
                href={`mailto:${resumeData.personal.email}`}
                className="px-3 py-1.5 rounded-lg bg-olive-500 hover:bg-olive-600 text-white text-xs font-medium transition-colors"
              >
                Send Email
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="beige-card space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-olive-100 text-olive-700">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-ink-900">Phone Number</h3>
                <p className="text-xs text-ink-500">Call or WhatsApp</p>
              </div>
            </div>
            <div className="pt-2 border-t border-beige-200 flex items-center justify-between">
              <a
                href={`tel:${resumeData.personal.phone.replace(/\s+/g, '')}`}
                className="text-sm font-semibold text-ink-900 hover:text-olive-600"
              >
                {resumeData.personal.phone}
              </a>
              <a
                href={`tel:${resumeData.personal.phone.replace(/\s+/g, '')}`}
                className="px-3 py-1.5 rounded-lg bg-beige-200 hover:bg-beige-300 text-ink-900 border border-beige-300 text-xs font-medium transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="beige-card space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-olive-100 text-olive-700">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-ink-900">LinkedIn Profile</h3>
                <p className="text-xs text-ink-500">Professional network & recommendations</p>
              </div>
            </div>
            <div className="pt-2 border-t border-beige-200 flex items-center justify-between">
              <span className="text-xs font-mono text-ink-700">linkedin.com/in/parthgorde</span>
              <a
                href={resumeData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-beige-200 hover:bg-beige-300 text-ink-900 border border-beige-300 text-xs font-medium inline-flex items-center space-x-1 transition-colors"
              >
                <span>Visit</span>
                <ExternalLink className="w-3 h-3 text-olive-600" />
              </a>
            </div>
          </div>

          {/* PDF Resume Card */}
          <div className="beige-card space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-olive-100 text-olive-700">
                <Download className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-ink-900">Official Resume</h3>
                <p className="text-xs text-ink-500">Download formatted PDF document</p>
              </div>
            </div>
            <div className="pt-2 border-t border-beige-200 flex items-center justify-between">
              <span className="text-xs text-ink-600 font-medium">Parth_Gorde_Operations_Resume.pdf</span>
              <a
                href="/Parth_Gorde_Operations_Resume.pdf"
                download
                className="px-3 py-1.5 rounded-lg bg-olive-500 hover:bg-olive-600 text-white text-xs font-medium inline-flex items-center space-x-1 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        </div>

        {/* Location Note */}
        <div className="bg-olive-50 border border-olive-200 rounded-xl p-5 flex items-center justify-between text-xs text-ink-700">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-olive-600 shrink-0" />
            <span>Based in <strong>Nashik / Pune, Maharashtra, India</strong> (Open to Remote & On-site Roles)</span>
          </div>
        </div>
      </main>

      <ContactFooter />
    </div>
  );
}
