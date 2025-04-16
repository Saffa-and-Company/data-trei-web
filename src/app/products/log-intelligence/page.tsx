"use client";

import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { 
  FileText, 
  Network, 
  Search, 
  Activity,
  Database,
  Brain,
  ArrowRight
} from 'lucide-react';

const features = [
  {
    title: 'Summarize Logs in Natural Language',
    description: 'Forget searching for signal in thousands of lines. Our LLM engine gives you human-readable summaries for incidents and system behaviors.',
    image: '/images/ai-summaries.png',
    imageAlt: 'AI Summaries',
    imagePosition: 'right',
  },
  {
    title: 'See Root Causes, Not Just Alerts',
    description: 'Automatically correlate activity across Maximo, Slack, and ServiceNow to explain why an alert happened — not just that it did.',
    image: '/images/find-out-why.png',
    imageAlt: 'Root Cause Analysis',
    imagePosition: 'left',
  },
  {
    title: 'Save Time on Investigations',
    description: 'Get answers in plain English. Ask the system things like "What changed in Maximo during the last outage?" and receive an audit-ready response.',
    image: '/images/ai-intelligence.png',
    imageAlt: 'AI Intelligence',
    imagePosition: 'right',
  },
  {
    title: 'Enrich Summaries with Cross-System Signals',
    description: 'Pull insights from logs, alerts, and anomaly reports — all in one view. No tab switching. No delay.',
    image: '/images/cross-platform-intelligence.png',
    imageAlt: 'Cross-Platform Intelligence',
    imagePosition: 'left',
  },
];

const workflow = [
  {
    header: 'Ingest',
    subtext: 'Collect structured and unstructured logs from Maximo and connected tools.',
    tags: ['Log Collection', 'System Integration'],
    icon: <Database size={32} className="text-[#3EE8B5] mb-4" />,
  },
  {
    header: 'Interpret',
    subtext: 'Summarize events and generate high-confidence insights with LLMs.',
    tags: ['LLM Processing', 'Insight Generation'],
    icon: <Brain size={32} className="text-[#3EE8B5] mb-4" />,
  },
  {
    header: 'Act',
    subtext: 'Route summaries into dashboards, alerts, and analyst workflows.',
    tags: ['Action Routing', 'Workflow Integration'],
    icon: <ArrowRight size={32} className="text-[#3EE8B5] mb-4" />,
  },
];

export default function LogIntelligence() {
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
                  LLM-Powered Log Intelligence
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 mb-6 leading-relaxed">
                  Instant Clarity. Reduced Triage. Smarter Security Decisions.
                </p>
                <p className="text-lg text-gray-400 mb-12 leading-relaxed">
                  Massive log volumes can overwhelm even the best teams. Data Trei's Log Intelligence engine uses large language models to cut through the noise — automatically summarizing incidents, correlating across systems, and surfacing the insights that matter most for investigation, compliance, and response.
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

              {/* Video Section with Browser Chrome */}
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
                      <source src="/Data Trei - Op Blind Spots.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Screenshot Section */}
        <section className="bg-black py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="rounded-xl overflow-hidden border border-gray-800 bg-[#0A0A0A] shadow-2xl">
              <div className="p-4 border-b border-gray-800">
                <div className="font-mono text-sm text-emerald-400">
                  SHOW log summaries where system changes occurred during last outage
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                <div className="rounded-lg bg-gray-900 p-4">
                  <div className="text-emerald-400 font-semibold mb-2">📊 Log Summary</div>
                  <div className="space-y-2">
                    <div className="p-2 bg-gray-800 rounded">System outage detected at 14:32</div>
                    <div className="p-2 bg-gray-800 rounded">Multiple configuration changes in Maximo</div>
                    <div className="p-2 bg-gray-800 rounded">Unusual login pattern from admin account</div>
                  </div>
                </div>
                <div className="relative aspect-video">
                  <div className="rounded-lg overflow-hidden border border-gray-800 bg-[#0A0A0A] h-full">
                    <div className="p-3 border-b border-gray-800">
                      <div className="text-lg font-semibold text-white">Log Intelligence Dashboard</div>
                    </div>
                    <div className="p-4 bg-[#0B1512]">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 p-3 rounded-lg bg-[#0A1F16]">
                          <svg className="w-5 h-5 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-emerald-400 font-mono">System Status: Active</span>
                        </div>
                        <div className="flex items-center gap-2 p-3 rounded-lg bg-[#0A1F16]">
                          <svg className="w-5 h-5 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-1 rounded bg-[#0A1F16] text-emerald-400">Normal</span>
                            <span className="text-emerald-400">Log Processing</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="bg-black py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              How Data Trei Makes Your Logs Work for You
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              From mountains of system logs to actionable insight — all in seconds. Our LLM-native engine identifies trends, maps relationships, and delivers secure summaries without exposing sensitive content.
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
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              From Log Ingestion to Intelligent Action
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {workflow.map((step, index) => (
                <div key={step.header} className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                  <div className="relative bg-[#0B1512] rounded-lg p-8 h-full">
                    <div className="flex flex-col items-center text-center">
                      {step.icon}
                      <h3 className="text-xl font-bold text-white mb-4">{step.header}</h3>
                      <p className="text-gray-400 mb-6">{step.subtext}</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {step.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 rounded-full bg-emerald-900/20 text-emerald-400 text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <FinalCTA />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
} 