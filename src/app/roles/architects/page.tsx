"use client";

import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { 
  Network,
  GitBranch,
  Database,
  Workflow,
  Box,
  Boxes,
  Share2,
  GitGraph,
  Scale,
  Layers,
  ArrowUpDown,
  Combine,
  Radar
} from 'lucide-react';

const features = [
  {
    title: 'Map Your Enterprise Threat Graph',
    description: 'Visualize how signals and threats propagate across connected platforms like Maximo, Salesforce, and ServiceNow. Understand the upstream and downstream impacts of every action.',
    image: '/images/visualize-attack.png',
    imageAlt: 'Enterprise Threat Graph Visualization',
    imagePosition: 'right',
  },
  {
    title: 'Build Semantic Relationships Between Data Sources',
    description: 'Our AI-native engine automatically links events, fields, and actors across systems. Get normalized, human-readable views that reflect your actual architecture.',
    image: '/images/cross-platform-intelligence.png',
    imageAlt: 'Cross-Platform Data Relationships',
    imagePosition: 'left',
  },
  {
    title: 'Align Security Posture with Data Architecture',
    description: 'Drive consistency between your system designs and your detection logic. Ensure visibility is embedded in the structure of your enterprise.',
    image: '/images/unified-timelines.png',
    imageAlt: 'Security and Architecture Alignment',
    imagePosition: 'right',
  },
  {
    title: 'Design for Resilience and Future Scale',
    description: 'Architect your telemetry with the future in mind. Data Trei\'s modular integrations and graph-based design support any system expansion or compliance evolution.',
    image: '/images/cross-system-visibility.png',
    imageAlt: 'Scalable Architecture Design',
    imagePosition: 'left',
  },
];

const workflow = [
  {
    header: 'Cross-System Entity Mapping',
    subtext: 'Get a clear view of people, assets, and anomalies — across every connected system.',
    tags: ['Entity Resolution', 'Cross-Platform'],
    icon: <GitGraph size={32} className="text-[#3EE8B5] mb-4" />,
  },
  {
    header: 'Data Stack Normalization',
    subtext: 'Standardize log formats and event structures without having to build custom pipelines.',
    tags: ['Standardization', 'Automation'],
    icon: <Layers size={32} className="text-[#3EE8B5] mb-4" />,
  },
  {
    header: 'Architectural Threat Flow',
    subtext: 'Understand where security blind spots emerge due to misaligned system architecture.',
    tags: ['Visibility', 'Risk Analysis'],
    icon: <Share2 size={32} className="text-[#3EE8B5] mb-4" />,
  },
  {
    header: 'Scalable Telemetry Design',
    subtext: 'Build observability that scales as your enterprise stack evolves.',
    tags: ['Future-Proof', 'Extensible'],
    icon: <Boxes size={32} className="text-[#3EE8B5] mb-4" />,
  },
];

export default function Architects() {
  return (
    <>
      <main className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-black to-black" />
          <div className="relative container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Left Column - Text Content */}
              <div className="flex-1">
                <h1 className="text-4xl md:text-6xl font-medium mb-8 text-white">
                  Enterprise Architects
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 mb-6 leading-relaxed">
                  Bring Structure to Chaos
                </p>
                <p className="text-lg text-gray-400 mb-12 leading-relaxed">
                  Data Trei gives architects a centralized command view of security, telemetry, and asset data across your stack. Create semantic linkages between Maximo, ServiceNow, Salesforce, and other systems — and understand how threat signals flow through your enterprise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/signup" className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-500 rounded-md transition-colors">
                    Join Waitlist
                  </a>
                  <a href="/support" className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-transparent border border-white/20 rounded-md hover:bg-white/5 transition-colors">
                    Talk to Human
                  </a>
                </div>
              </div>

              {/* Right Column - Banner Image */}
              <div className="flex-1">
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden">
                  <Image
                    src="/images/visualize-attack.png"
                    alt="Enterprise Architecture Command View"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Orientation Section */}
        <section className="bg-black py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              A Unified View of Your Enterprise Data Fabric
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Say goodbye to siloed logs and scattered dashboards. Data Trei links system events and threat signals into a single, context-aware security graph, purpose-built for architectural clarity.
            </p>
          </div>
        </section>

        {/* Alternating Features Section */}
        <section className="bg-black py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {features.map((feature, index) => {
              const contentOrder = feature.imagePosition === 'left' ? 'order-2' : 'order-1';
              const imageOrder = feature.imagePosition === 'left' ? 'order-1' : 'order-2';
              return (
                <div key={feature.title} className="flex flex-col lg:flex-row items-center gap-12 py-24">
                  <div className={`flex-1 ${contentOrder} lg:pr-12`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{feature.title}</h2>
                    <p className="text-lg text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                  <div className={`flex-1 ${imageOrder}`}>
                    <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-black border border-emerald-900/40 shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#3EE8B5]/10 to-transparent" />
                      <Image
                        src={feature.image}
                        alt={feature.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Workflow Cards Section */}
        <section className="py-[180px] relative" style={{ backgroundColor: '#0B0E0E' }}>
          <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
            <svg width="100%" height="100%" className="absolute inset-0" style={{ opacity: 0.10 }}>
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3EE8B5" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
            <div className="absolute left-1/4 top-1/2 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute right-1/4 bottom-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-2xl animate-pulse-slower" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                What Enterprise Architects Unlock with Data Trei
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Build a security architecture that scales with your enterprise vision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workflow.map((step) => (
                <div key={step.header} className="bg-black/50 backdrop-blur-sm border border-emerald-900/20 rounded-xl p-6 hover:border-emerald-500/30 transition-colors">
                  {step.icon}
                  <h3 className="text-xl font-bold text-white mb-3">{step.header}</h3>
                  <p className="text-gray-400 mb-4">{step.subtext}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-emerald-900/20 text-emerald-400 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-black py-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Design Your Security Architecture for Tomorrow
            </h2>
            <p className="text-lg text-gray-400 mb-12">
              Build a security foundation that evolves with your enterprise — from initial deployment to future scale.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/signup" className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-500 rounded-md transition-colors">
                Join Waitlist
              </a>
              <a href="/support" className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-transparent border border-white/20 rounded-md hover:bg-white/5 transition-colors">
                Talk to Human
              </a>
            </div>
          </div>
        </section>

        <FinalCTA />
        <Footer />
      </main>
    </>
  );
} 