import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import ContactFooter from '@/components/ContactFooter';
import { blogPosts } from '@/data/blogData';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-beige-100 text-ink-900 flex flex-col justify-between">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 pb-16 space-y-8 flex-1 w-full">
        {/* Back Link */}
        <div>
          <Link
            href="/blog"
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-olive-600 hover:text-olive-700 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Article Container */}
        <article className="space-y-8">
          <header className="space-y-4 border-b border-beige-300 pb-6">
            <div className="flex items-center justify-between text-xs text-ink-500">
              <span className="px-2.5 py-1 rounded bg-olive-100 text-olive-700 font-semibold border border-olive-200">
                {post.category}
              </span>
              <div className="flex items-center space-x-4">
                <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1 text-olive-500" />{post.date}</span>
                <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1 text-olive-500" />{post.readTime}</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-ink-900 tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-sm font-sans text-ink-700 leading-relaxed font-medium italic border-l-2 border-olive-500 pl-4 py-1">
              "{post.excerpt}"
            </p>
          </header>

          {/* Featured Article Image */}
          <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden bg-beige-200 border border-beige-300 shadow-sm">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Paragraphs */}
          <div className="space-y-5 text-sm font-sans text-ink-800 leading-relaxed pt-2">
            {post.content.map((paragraph, idx) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-xl font-serif font-bold text-ink-900 pt-3 pb-1 border-b border-beige-200">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              return (
                <p key={idx} className="text-ink-800 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Article Footer */}
          <footer className="pt-8 border-t border-beige-300 flex items-center justify-between">
            <div className="text-xs text-ink-500 font-sans">
              Written by <strong className="text-ink-900">Parth Gorde</strong>
            </div>
            <Link
              href="/blog"
              className="text-xs font-semibold text-olive-600 hover:text-olive-700"
            >
              Read More Articles →
            </Link>
          </footer>
        </article>
      </main>

      <ContactFooter />
    </div>
  );
}
