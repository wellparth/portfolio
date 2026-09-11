import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://wellparth.vercel.app'),
  title: {
    default: 'Parth Gorde | Digital Project Coordinator & Operations Specialist',
    template: '%s | Parth Gorde',
  },
  description:
    'Operations and Project Coordination professional specializing in website project delivery, freelance talent coordination, client onboarding, and AI-assisted workflow automation.',
  keywords: [
    'Parth Gorde',
    'Project Coordinator',
    'Digital Project Manager',
    'Operations Specialist',
    'AI Workflows',
    'Freelance Project Coordination',
    'Nashik',
    'Pune',
    'India',
  ],
  authors: [{ name: 'Parth Gorde', url: 'https://www.linkedin.com/in/parthgorde' }],
  creator: 'Parth Gorde',
  publisher: 'Parth Gorde',
  verification: {
    google: 'Yke6N6laOyWL9AWMVdrkZVd-j1A3EnZoFZWU6oFMmQY',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://wellparth.vercel.app',
    siteName: 'Parth Gorde Portfolio',
    title: 'Parth Gorde | Digital Project Coordinator & Operations Specialist',
    description:
      'Operations and Project Coordination professional specializing in digital project delivery, freelance talent network management, and AI-assisted workflows.',
    images: [
      {
        url: '/images/ai_workflow_ops.jpg',
        width: 1200,
        height: 630,
        alt: 'Parth Gorde Operations & Digital Project Coordination',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@wellparth',
    creator: '@wellparth',
    title: 'Parth Gorde | Digital Project Coordinator & Operations Specialist',
    description:
      'Operations and Project Coordination professional specializing in digital project delivery, freelance talent network management, and AI-assisted workflows.',
    images: ['/images/ai_workflow_ops.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Parth Gorde',
    jobTitle: 'Digital Project Coordinator & Operations Specialist',
    url: 'https://wellparth.vercel.app',
    sameAs: [
      'https://www.linkedin.com/in/parthgorde',
      'https://x.com/wellparth',
      'https://instagram.com/wellparth',
      'https://github.com/wellparth',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: "MET's Institute of Engineering (SPPU)",
    },
    knowsAbout: [
      'Project Coordination',
      'Digital Delivery Management',
      'Client Onboarding',
      'Agile Sprints',
      'AI Workflow Automation',
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="google-site-verification" content="Yke6N6laOyWL9AWMVdrkZVd-j1A3EnZoFZWU6oFMmQY" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
