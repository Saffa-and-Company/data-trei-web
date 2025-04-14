import Hero from './Hero';
import BlindSpotsSolution from '@/components/BlindSpotsSolution';
import OperationalFeatures from '@/components/OperationalFeatures';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function OperationalBlindSpots() {
  return (
    <>
      <main className="min-h-screen bg-black">
        <Hero />
        <BlindSpotsSolution />
        <OperationalFeatures />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
} 