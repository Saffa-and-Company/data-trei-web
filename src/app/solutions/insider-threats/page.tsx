import Hero from './Hero';
import InsiderThreatsSolution from '@/components/InsiderThreatsSolution';
import InsiderFeatures from '@/components/InsiderFeatures';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function InsiderThreats() {
  return (
    <>
      <main className="min-h-screen bg-black">
        <Hero />
        <InsiderThreatsSolution />
        <InsiderFeatures />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
} 