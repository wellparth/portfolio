'use client';

import React from 'react';
import Link from 'next/link';
import { blogPosts } from '@/data/blogData';
import { ArrowUpRight, Calendar, Clock } from 'lucide-react';

export default function RecentBlogs() {
  return (
    <section id="blog" className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      <div className="flex items-center justify-between border-b border-beige-300 pb-3">
        <h2 className="text-2xl font-serif font-bold text-ink-900">
          Recent Articles & Notes
        </h2>
        <Link
          href="/blog"
          className="text-xs font-semibold text-olive-600 hover:text-olive-700 flex items-center space-x-1"
        >
          <span>View All Articles</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="beige-card flex flex-col justify-between group cursor-pointer"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-ink-500">
                <span className="px-2.5 py-0.5 rounded bg-olive-100 text-olive-700 font-semibold border border-olive-200">
                  {post.category}
                </span>
                <div className="flex items-center space-x-3 text-[11px]">
                  <span className="flex items-center"><Calendar className="w-3 h-3 mr-1 text-olive-500" />{post.date}</span>
                  <span className="flex items-center"><Clock className="w-3 h-3 mr-1 text-olive-500" />{post.readTime}</span>
                </div>
              </div>

              <h3 className="text-lg font-serif font-bold text-ink-900 group-hover:text-olive-600 transition-colors leading-snug">
                {post.title}
              </h3>

              <p className="text-xs font-sans text-ink-700 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
            </div>

            <div className="pt-4 mt-2 border-t border-beige-200 flex items-center text-xs font-semibold text-olive-600 group-hover:text-olive-700">
              <span>Read Full Article</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
