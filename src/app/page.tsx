import Hero from '@/components/Hero';
import PlatformOverview from '@/components/PlatformOverview';
import RecentPosts from '@/components/RecentPosts';
import IndustryRoles from '@/components/IndustryRoles';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black text-white">
        <Hero />
        <PlatformOverview />
        <RecentPosts />
        <IndustryRoles />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
