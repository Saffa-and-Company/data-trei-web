"use client";

import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { 
  MessageSquare,
  Clock,
  Bot,
  AlertTriangle,
  FileText,
  Activity,
  Brain,
  BarChart3
} from 'lucide-react';

const features = [
  {
    title: 'Accelerate Investigation Timelines',
    description: 'Turn hundreds of log lines into summarized narratives and timestamped behavioral flows. Your team gets context immediately, without pivoting between tabs.',
    image: '/images/unified-timelines.png',
    imageAlt: 'Investigation Timeline',
    imagePosition: 'right',
  },
  {
    title: 'Surface Real Threats, Suppress the Noise',
    description: 'Use anomaly scores, behavioral baselines, and correlated signals to push the right alerts to the top — not just the loudest.',
    image: '/images/summarize-alerts.png',
    imageAlt: 'Alert Dashboard',
    imagePosition: 'left',
  },
  {
    title: 'Investigate Incidents With AI Co-Pilot',
    description: 'Ask questions, trace access patterns, and walk through incidents using our embedded analyst assistant — all powered by multimodal AI.',
    image: '/images/ai-intelligence.png',
    imageAlt: 'AI Co-Pilot Interface',
    imagePosition: 'right',
  },
  {
    title: 'Build Confidence in Every Escalation',
    description: 'With full-chain context and summarized evidence, escalations to engineering, compliance, or leadership come with confidence, not caveats.',
    image: '/images/cross-system-visibility.png',
    imageAlt: 'Escalation Evidence',
    imagePosition: 'left',
  },
];

const workflow = [
  {
    header: 'Natural Language Summarization',
    subtext: 'Skip the log noise. Read summaries like a timeline story.',
    tags: ['AI', 'Summaries'],
    icon: <MessageSquare size={32} className="text-[#3EE8B5] mb-4" />,
  },
  {
    header: 'Behavioral Threat Timelines',
    subtext: 'Follow the sequence of actions leading up to an anomaly.',
    tags: ['Timeline', 'Behavior'],
    icon: <Clock size={32} className="text-[#3EE8B5] mb-4" />,
  },
  {
    header: 'AI-Driven Investigation Assistant',
    subtext: 'Ask questions, trace actors, and drill into incidents fast.',
    tags: ['Co-Pilot', 'AI'],
    icon: <Bot size={32} className="text-[#3EE8B5] mb-4" />,
  },
  {
    header: 'Alert Prioritization Engine',
    subtext: 'Focus on threats backed by behavioral shifts and system-wide signals.',
    tags: ['Alerts', 'Prioritization'],
    icon: <AlertTriangle size={32} className="text-[#3EE8B5] mb-4" />,
  },
];

export default function Analysts() {
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
                  Analysts & SOC Teams
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 mb-6 leading-relaxed">
                  Investigate Faster. Cut Through the Noise.
                </p>
                <p className="text-lg text-gray-400 mb-12 leading-relaxed">
                  Data Trei helps your SOC analysts spend less time triaging and more time responding. By transforming raw telemetry into natural language summaries and behavioral insights, your team gets instant clarity — no query-building required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/signup" className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-500 rounded-md transition-colors">
                    Get Analyst Demo
                  </a>
                  <a href="/copilot" className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-transparent border border-white/20 rounded-md hover:bg-white/5 transition-colors">
                    Try AI Co-Pilot
                  </a>
                </div>
              </div>

              {/* Right Column - Banner Image */}
              <div className="flex-1">
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden">
                  <Image
                    src="/images/ai-summaries.png"
                    alt="Alert Dashboard"
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
              Go From Noise to Narrative — In Seconds
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              SOC teams don't have time to dig through logs line by line. Our platform summarizes multi-system context into clear, explainable stories — helping teams prioritize real threats faster.
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
                What Analysts & SOCs Unlock
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Transform your security operations with AI-powered insights and automation.
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