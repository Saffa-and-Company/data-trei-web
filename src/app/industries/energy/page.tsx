"use client";

import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { 
  Zap,
  FileCheck,
  Link2,
  Activity,
  Power,
  ClipboardCheck,
  Network,
  Timer
} from 'lucide-react';

const features = [
  {
    title: 'Detect Risk Across OT, IT, and Cloud',
    description: 'Whether it\'s a compromised field device or an admin login anomaly in the cloud, Data Trei correlates telemetry across environments and prioritizes high-risk behavior.',
    image: '/images/cross-system-visibility.png',
    imageAlt: 'OT IT Cloud Integration',
    imagePosition: 'right',
  },
  {
    title: 'Support Regulatory Audits with Less Overhead',
    description: 'Automatically generate reporting data aligned with critical infrastructure frameworks — helping you pass inspections without slowing operations.',
    image: '/images/compliance-reports.png',
    imageAlt: 'Regulatory Compliance',
    imagePosition: 'left',
  },
  {
    title: 'Reduce Downtime and Response Time',
    description: 'Identify patterns that signal operational risk early. From failed patches to unauthorized network changes, get AI-powered alerts that move with urgency.',
    image: '/images/silent-failures.png',
    imageAlt: 'Downtime Prevention',
    imagePosition: 'right',
  },
  {
    title: 'Built for SCADA and Smart Grid Environments',
    description: 'Data Trei integrates with your telemetry ecosystem to flag issues unique to utility workflows — not just generic network alerts.',
    image: '/images/maximo-log-gaps.png',
    imageAlt: 'SCADA Integration',
    imagePosition: 'left',
  },
];

const workflow = [
  {
    header: 'Grid-Aware Threat Detection',
    subtext: 'Detect behavior patterns unique to substations, meters, and OT systems.',
    tags: ['SCADA', 'Smart Grid'],
    icon: <Power size={32} className="text-[#3EE8B5] mb-4" />,
  },
  {
    header: 'Automated Audit Trails',
    subtext: 'Auto-log critical events for internal governance and compliance.',
    tags: ['Compliance', 'Logging'],
    icon: <ClipboardCheck size={32} className="text-[#3EE8B5] mb-4" />,
  },
  {
    header: 'OT + IT Correlation',
    subtext: 'Link physical system events to cloud-based behaviors in one timeline.',
    tags: ['Integration', 'Timeline'],
    icon: <Network size={32} className="text-[#3EE8B5] mb-4" />,
  },
  {
    header: 'Uptime-First Security',
    subtext: 'Stay secure without introducing latency or slowing industrial operations.',
    tags: ['Performance', 'Reliability'],
    icon: <Timer size={32} className="text-[#3EE8B5] mb-4" />,
  },
];

export default function Energy() {
  return (
    <>
      <main className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-black to-black" />
          <div className="relative container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl md:text-6xl font-medium mb-8 text-white">
                  Energy & Utilities
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 mb-6 leading-relaxed">
                  Real-Time Observability for Critical Utility Networks
                </p>
                <p className="text-lg text-gray-400 mb-12 leading-relaxed">
                  Monitor OT and IT convergence, detect threats across SCADA systems, and automate compliance reporting—all while reducing operational risk and maintaining uptime for critical infrastructure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <a href="/support" className="inline-flex items-center px-8 py-4 text-base font-medium text-black bg-white hover:bg-gray-100 rounded-md transition-colors">
                    Talk to Human
                  </a>
                  <a href="/demo" className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-500 rounded-md transition-colors">
                    See How It Works
                  </a>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative aspect-square w-full max-w-lg mx-auto">
                  <Image
                    src="/images/industry-manufacturing.png"
                    alt="Energy Infrastructure Illustration"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Context Section */}
        <section className="bg-black py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Utilities Need AI-Native Security
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              From smart meters to SCADA systems, utilities are increasingly digital — and vulnerable. Data Trei helps infrastructure operators detect early signs of cyber-physical threats while maintaining compliance and uptime across distributed assets.
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
                What Utilities Teams Unlock with Data Trei
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Transform your critical infrastructure security with intelligent monitoring.
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
              Ready to Protect the Future of Energy?
            </h2>
            <p className="text-lg text-gray-400 mb-12">
              Proactively secure your infrastructure from threats — without disrupting the grid.
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