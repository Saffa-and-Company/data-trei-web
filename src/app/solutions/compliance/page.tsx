import Hero from './Hero';
import ComplianceSolution from '@/components/ComplianceSolution';
import ComplianceFeatures from '@/components/ComplianceFeatures';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function ComplianceAndAudit() {
  return (
    <>
      <main className="min-h-screen bg-black">
        <Hero />
        <ComplianceSolution />
        <ComplianceFeatures />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
} 