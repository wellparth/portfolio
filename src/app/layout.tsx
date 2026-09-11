import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Parth Gorde | Digital Project Coordinator & Operations Specialist',
  description: 'Operations and Project Coordination professional specializing in website project delivery, freelance talent coordination, and AI-assisted workflow automation.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
