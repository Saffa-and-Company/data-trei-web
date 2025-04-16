"use client";

import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { 
  FileText,
  ClipboardCheck,
  ShieldCheck,
  BarChart2,
  PlayCircle,
  ArrowRight,
  AlertTriangle,
  Network
} from 'lucide-react';

const features = [
  {
    title: 'Auto-Generate Reports for Any Compliance Framework',
    description: 'Whether it\'s NERC CIP, SOX, or ISO 27001 — let our AI transform logs into structured audit narratives and dashboards tailored to your environment.',
    image: '/images/compliance-reports.png',
    imageAlt: 'Compliance Framework Dashboard',
    imagePosition: 'right',
  },
  {
    title: 'Executive Summaries in Plain English',
    description: 'Translate complex system logs into executive-level briefs. Our platform summarizes what\'s working, what\'s risky, and where to focus.',
    image: '/images/ai-summaries.png',
    imageAlt: 'Executive Summary Dashboard',
    imagePosition: 'left',
  },
  {
    title: 'Timestamped Log Trails You Can Trust',
    description: 'Correlate access logs, changes, alerts, and system anomalies into verifiable records with full provenance and traceability.',
    image: '/images/audit-logs.png',
    imageAlt: 'Log Trail Dashboard',
    imagePosition: 'right',
  },
  {
    title: 'Track Audit-Readiness Over Time',
    description: 'Benchmark how close your current operations are to passing an audit — updated daily with real data.',
    image: '/images/compliance-gaps.png',
    imageAlt: 'Audit Readiness Dashboard',
    imagePosition: 'left',
  },
];

const workflow = [
  {
    header: 'Summarize',
    subtext: 'Use semantic AI to extract meaningful takeaways from logs and alerts.',
    tags: ['AI Analysis', 'Log Processing'],
    icon: <FileText size={32} className="text-[#3EE8B5] mb-4" />,
  },
  {
    header: 'Structure',
    subtext: 'Format content for compliance frameworks, including ISO, SOX, NIST, and CIP.',
    tags: ['Compliance', 'Framework Support'],
    icon: <ClipboardCheck size={32} className="text-[#3EE8B5] mb-4" />,
  },
  {
    header: 'Validate',
    subtext: 'Link reports back to real-time data and evidence logs.',
    tags: ['Data Validation', 'Evidence Chain'],
    icon: <ShieldCheck size={32} className="text-[#3EE8B5] mb-4" />,
  },
  {
    header: 'Present',
    subtext: 'Export shareable formats for board meetings and compliance review.',
    tags: ['Export', 'Board Ready'],
    icon: <BarChart2 size={32} className="text-[#3EE8B5] mb-4" />,
  },
];

export default function Report() {
  return (
    <>
      <main className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-black to-black" />
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Text Content */}
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-medium mb-8 text-white">
                  Report
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 mb-6 leading-relaxed">
                  Make Audit Time Effortless
                </p>
                <p className="text-lg text-gray-400 mb-12 leading-relaxed">
                  Generate audit-ready reports, executive summaries, and security dashboards that meet compliance mandates and board expectations — automatically.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/signup" className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-500 rounded-md transition-colors">
                    Join Waitlist
                  </a>
                  <a href="/support" className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-transparent border border-white/20 rounded-md hover:bg-white/5 transition-colors">
                    Talk to a Human
                  </a>
                </div>
              </div>

              {/* Hero Visual */}
              <div className="mt-16">
                <div className="rounded-xl overflow-hidden border border-gray-800 bg-[#0A0A0A] shadow-2xl">
                  {/* Browser Top Bar */}
                  <div className="bg-[#1A1A1A] px-4 py-3 flex items-center gap-2 border-b border-gray-800">
                    {/* Window Controls */}
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                      <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                    </div>
                    {/* URL Bar */}
                    <div className="flex-1 ml-4">
                      <div className="bg-[#0A0A0A] rounded-md py-1 px-3 text-sm text-gray-400 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                        </svg>
                        <span>app.datatrei.com</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Video Content */}
                  <div className="relative bg-gray-900/50">
                    <video 
                      className="w-full aspect-video object-cover"
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                    >
                      <source src="/compliance-report-final.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Orientation Section */}
        <section className="bg-black py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              From Data Chaos to Boardroom Clarity
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Security leaders waste time wrangling logs and spreadsheets for compliance. Data Trei auto-generates context-rich summaries and audit logs, giving you confidence when it matters most.
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
                How Report Helps Security Teams Communicate Better
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Data Trei's Report module transforms raw security data into boardroom-ready insights through a streamlined four-stage process.
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

        {/* CTA Section */}
        <section className="bg-black py-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Say Goodbye to Last-Minute Audit Nightmares
            </h2>
            <p className="text-lg text-gray-400 mb-12">
              Data Trei makes every day audit-ready — so you're never caught off guard when it counts most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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