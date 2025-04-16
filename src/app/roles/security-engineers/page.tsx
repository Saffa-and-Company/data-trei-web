"use client";

import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { 
  Code2,
  Network,
  BrainCircuit,
  Sliders,
  Workflow,
  GitBranch,
  Boxes,
  Settings,
  Gauge,
  Webhook,
  AlertCircle,
  FileCode,
  Cog,
  Zap
} from 'lucide-react';

const features = [
  {
    title: 'Customize Detection Logic for Your Stack',
    description: 'Write, tune, and deploy detection rules tailored to your environment — across Maximo, ServiceNow, Salesforce, and other enterprise systems.',
    image: '/images/cross-platform-intelligence.png',
    imageAlt: 'Detection Rule Editor Interface',
    imagePosition: 'right',
  },
  {
    title: 'Connect to SIEM, SOAR, and XDR Workflows',
    description: 'Streamline investigation and response by piping AI-enriched insights directly into Splunk, Sentinel, IBM QRadar, or your preferred platform.',
    image: '/images/unified-timelines.png',
    imageAlt: 'Platform Integration Dashboard',
    imagePosition: 'left',
  },
  {
    title: 'Triage Faster with Smart Grouping',
    description: 'Reduce alert fatigue with bundled insights that automatically group related events and surface what matters most.',
    image: '/images/ai-intelligence.png',
    imageAlt: 'Smart Alert Grouping Interface',
    imagePosition: 'right',
  },
  {
    title: 'Automate What You Already Know',
    description: 'Easily trigger playbooks, scripts, or case creation based on conditions you define — while using LLMs to suggest missing logic.',
    image: '/images/playbook-trigger.png',
    imageAlt: 'Automation Workflow Builder',
    imagePosition: 'left',
  },
];

const workflow = [
  {
    header: 'Detection Rule Composer',
    subtext: 'Build modular and reusable logic components across different environments.',
    tags: ['Rules Engine', 'Modular', 'Reusable'],
    icon: <Code2 size={32} className="text-[#3EE8B5] mb-4" />,
  },
  {
    header: 'Telemetry Correlation Engine',
    subtext: 'Automatically link logs, alerts, and signals across time and systems.',
    tags: ['Cross-System', 'Real-Time'],
    icon: <Network size={32} className="text-[#3EE8B5] mb-4" />,
  },
  {
    header: 'SOAR Pipeline Integration',
    subtext: 'Pipe structured threat context into playbooks and response frameworks.',
    tags: ['SOAR', 'Playbooks'],
    icon: <Workflow size={32} className="text-[#3EE8B5] mb-4" />,
  },
  {
    header: 'Tunable Alert Thresholds',
    subtext: 'Control when and how Data Trei alerts — no more one-size-fits-all triggers.',
    tags: ['Customizable', 'Precise'],
    icon: <Sliders size={32} className="text-[#3EE8B5] mb-4" />,
  },
];

export default function SecurityEngineers() {
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
                  Built for Security Engineers Who Want More Control
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 mb-6 leading-relaxed">
                  Tuned detections. Seamless integrations. Zero compromise.
                </p>
                <p className="text-lg text-gray-400 mb-12 leading-relaxed">
                  Data Trei gives Security Engineers the ability to customize detection rules, triage anomalies faster, and pipe enriched insights into your existing SIEM, SOAR, and XDR workflows. Fine-tune logic. Reduce alert fatigue. Automate with precision.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/signup" className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-500 rounded-md transition-colors">
                    Join Waitlist
                  </a>
                  <a href="/support" className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-transparent border border-white/20 rounded-md hover:bg-white/5 transition-colors">
                    Talk to a Human
                  </a>
                </div>
              </div>

              {/* Right Column - Banner Image */}
              <div className="flex-1">
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden">
                  <Image
                    src="/images/banner-image-engineers.png"
                    alt="Security Engineer Dashboard Overview"
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
              More Signal. Less Noise. Built for Security Engineers.
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              From noisy logs to meaningful alerts, Data Trei gives you unmatched control over detection logic, data correlation, and workflow automation — so your team spends less time chasing false positives and more time closing real threats.
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
                What Security Engineers Unlock with Data Trei
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Engineering-grade control meets AI efficiency in a platform built for modern security teams.
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
              Engineering-Grade Control Meets AI Efficiency
            </h2>
            <p className="text-lg text-gray-400 mb-12">
              Data Trei is your flexible security backbone — letting you tune detections, route workflows, and scale security without scaling noise.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/signup" className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-500 rounded-md transition-colors">
                Join Waitlist
              </a>
              <a href="/support" className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-transparent border border-white/20 rounded-md hover:bg-white/5 transition-colors">
                Talk to a Human
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