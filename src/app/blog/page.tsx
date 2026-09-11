import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import ContactFooter from '@/components/ContactFooter';
import { blogPosts } from '@/data/blogData';
import { Calendar, Clock, ArrowLeft, ArrowUpRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Articles & Notes | Parth Gorde',
  description: 'Insights on AI workflows, digital project coordination, and operations productivity by Parth Gorde.',
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-beige-100 text-ink-900 flex flex-col justify-between">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-16 space-y-8 flex-1 w-full">
        {/* Back Link */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-olive-600 hover:text-olive-700 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Title */}
        <div className="space-y-2 border-b border-beige-300 pb-6">
          <h1 className="text-3xl font-serif font-bold text-ink-900 tracking-tight">
            Articles & Operational Insights
          </h1>
          <p className="text-sm font-sans text-ink-700 max-w-2xl leading-relaxed">
            In-depth writings on AI-assisted workflows, digital project coordination, and operational efficiency.
          </p>
        </div>

        {/* Blog Posts Row List Layout */}
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="beige-card flex flex-col md:flex-row items-start md:items-center gap-6 group cursor-pointer"
            >
              {/* Thumbnail Image */}
              <div className="relative w-full md:w-56 h-40 rounded-xl overflow-hidden shrink-0 bg-beige-200 border border-beige-300">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Text Info */}
              <div className="flex-1 space-y-3">
                <div className="flex items-center space-x-3 text-xs text-ink-500">
                  <span className="px-2.5 py-0.5 rounded bg-olive-100 text-olive-700 font-semibold border border-olive-200">
                    {post.category}
                  </span>
                  <span className="flex items-center"><Calendar className="w-3 h-3 mr-1 text-olive-500" />{post.date}</span>
                  <span className="flex items-center"><Clock className="w-3 h-3 mr-1 text-olive-500" />{post.readTime}</span>
                </div>

                <h2 className="text-xl font-serif font-bold text-ink-900 group-hover:text-olive-600 transition-colors leading-snug">
                  {post.title}
                </h2>

                <p className="text-xs font-sans text-ink-700 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="pt-2 flex items-center text-xs font-semibold text-olive-600 group-hover:text-olive-700">
                  <span>Read Full Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <ContactFooter />
    </div>
  );
}
