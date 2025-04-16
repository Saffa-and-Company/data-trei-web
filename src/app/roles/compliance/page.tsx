"use client";

import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { 
  AlertCircle,
  FileText,
  Shield,
  Download,
  CheckCircle2,
  AlertTriangle,
  FileCheck,
  FileSpreadsheet
} from 'lucide-react';

const features = [
  {
    title: 'Auto-Generate Evidence of Policy Enforcement',
    description: 'Every login, asset update, or data access is logged and summarized automatically — with timestamps, sources, and user context.',
    image: '/images/compliance-reports.png',
    imageAlt: 'Policy Enforcement Evidence',
    imagePosition: 'right',
  },
  {
    title: 'Detect Compliance Drift as It Happens',
    description: 'Get alerted when access controls break, critical services are modified, or logging stops unexpectedly — before it becomes an issue.',
    image: '/images/compliance-gaps.png',
    imageAlt: 'Compliance Drift Detection',
    imagePosition: 'left',
  },
  {
    title: 'Align to NIST, SOC 2, ISO 27001, and More',
    description: 'Use built-in compliance templates and tagging systems to automatically map activities to control frameworks and audit timelines.',
    image: '/images/audit-logs.png',
    imageAlt: 'Compliance Framework Alignment',
    imagePosition: 'right',
  },
  {
    title: 'Keep a Single Source of Truth for Audits',
    description: 'When auditors ask, you answer. All evidence, summaries, and logs are exportable in a click — no tickets, no chasing data.',
    image: '/images/ai-summaries.png',
    imageAlt: 'Audit Evidence Export',
    imagePosition: 'left',
  },
];

const workflow = [
  {
    header: 'Real-Time Compliance Alerts',
    subtext: 'Know immediately when your systems drift from expected configurations.',
    tags: ['Monitoring', 'Alerts'],
    icon: <AlertCircle size={32} className="text-[#3EE8B5] mb-4" />,
  },
  {
    header: 'Automated Audit Trails',
    subtext: 'Generate time-stamped, system-level records for every critical event.',
    tags: ['Logging', 'Evidence'],
    icon: <FileText size={32} className="text-[#3EE8B5] mb-4" />,
  },
  {
    header: 'Framework Alignment',
    subtext: 'Map controls to regulatory frameworks like NIST, HIPAA, ISO, and SOC 2.',
    tags: ['Compliance', 'Standards'],
    icon: <Shield size={32} className="text-[#3EE8B5] mb-4" />,
  },
  {
    header: 'One-Click Export',
    subtext: 'Pull full activity logs, summaries, or audit snapshots with a single click.',
    tags: ['Reporting', 'Export'],
    icon: <Download size={32} className="text-[#3EE8B5] mb-4" />,
  },
];

export default function Compliance() {
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
                  Compliance Officers
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 mb-6 leading-relaxed">
                  Stay Audit-Ready, Always
                </p>
                <p className="text-lg text-gray-400 mb-12 leading-relaxed">
                  Data Trei turns operational noise into automated audit logs, drift alerts, and reporting that aligns with compliance standards. Whether you're preparing for internal reviews or external audits, stay in control — without the spreadsheet chaos.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/support" className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-transparent border border-white/20 rounded-md hover:bg-white/5 transition-colors">
                    Talk to Human
                  </a>
                  <a href="/signup" className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-500 rounded-md transition-colors">
                    Join Waitlist
                  </a>
                </div>
              </div>

              {/* Right Column - Banner Image */}
              <div className="flex-1">
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden">
                  <Image
                    src="/images/compliance-reports.png"
                    alt="Compliance Dashboard"
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
              Compliance Reporting Without the Manual Work
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Say goodbye to pulling data from five systems just to prove policy adherence. Data Trei automatically builds the paper trail, maps anomalies to controls, and gives you one place to verify enforcement.
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
                What Compliance Teams Get
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Build a compliance program that scales with your enterprise vision.
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

        <FinalCTA />
        <Footer />
      </main>
    </>
  );
} 