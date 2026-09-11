import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
// import Metrics from '@/components/Metrics';
import RecentBlogs from '@/components/RecentBlogs';
import Experience from '@/components/Experience';
import ContactFooter from '@/components/ContactFooter';

export default function Home() {
  return (
    <div className="min-h-screen bg-beige-100 text-ink-900">
      <Navbar />
      <main className="space-y-6 pb-12">
        <Hero />
        {/* <Metrics /> */}
        <RecentBlogs />
        <Experience />
        <ContactFooter />
      </main>
    </div>
  );
}
