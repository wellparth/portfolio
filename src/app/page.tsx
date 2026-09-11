import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Metrics from '@/components/Metrics';
import TechStack from '@/components/TechStack';
import Experience from '@/components/Experience';
import ContactFooter from '@/components/ContactFooter';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main className="space-y-6 pb-12">
        <Hero />
        <Metrics />
        <TechStack />
        <Experience />
        <ContactFooter />
      </main>
    </div>
  );
}
