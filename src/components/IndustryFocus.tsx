import Image from 'next/image';
import Link from 'next/link';

const Tag = ({ text }: { text: string }) => (
  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm">
    <span className="text-emerald-500">✓</span> {text}
  </div>
);

export default function IndustryFocus() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Built for Maximo-Driven Enterprises
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Purpose-built to secure complex enterprise asset management environments
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Tag text="Maximo Ready" />
              <Tag text="ServiceNow Compatible" />
              <Tag text="LLM-Enhanced Workflows" />
            </div>
          </div>

          <div className="relative aspect-video rounded-xl overflow-hidden border border-gray-800 bg-black/50 backdrop-blur mb-8">
            {/* This will be replaced with actual integration visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🔄</div>
                <p className="text-gray-500">Interactive Integration Visualization</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/platform"
              className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-lg transition-all"
            >
              See Platform
            </Link>
            <Link
              href="/integrations"
              className="px-8 py-3 border border-gray-700 hover:border-emerald-500 text-white rounded-lg transition-all"
            >
              View All Integrations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 