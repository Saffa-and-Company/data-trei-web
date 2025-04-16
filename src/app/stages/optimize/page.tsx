"use client";

import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { 
  Activity,
  Brain,
  GitBranch,
  PlayCircle,
  ArrowRight,
  AlertTriangle,
  FileText,
  Network,
  LineChart,
  BookOpen,
  RefreshCw,
  Settings
} from 'lucide-react';

const features = [
  {
    title: 'Adjust Risk Scoring Based on What Matters to You',
    description: 'Calibrate what qualifies as high-risk by connecting log signals to actual asset impact, user behavior, and business logic.',
    image: '/images/adaptive-ai.png',
    imageAlt: 'Risk Scoring Dashboard',
    imagePosition: 'right',
  },
  {
    title: 'Train the System Using Analyst Feedback',
    description: 'When your team resolves or dismisses alerts, Data Trei learns from those actions to improve future signal accuracy.',
    image: '/images/ai-intelligence.png',
    imageAlt: 'Analyst Feedback Interface',
    imagePosition: 'left',
  },
  {
    title: 'Adaptive Models for Maximo Workflows',
    description: 'Data Trei tracks how your Maximo environment evolves — adjusting thresholds, sequences, and context dynamically.',
    image: '/images/cross-platform-intelligence.png',
    imageAlt: 'Maximo Workflow Optimization',
    imagePosition: 'right',
  },
  {
    title: 'Continuously Refine Detection Pipelines',
    description: 'Use telemetry across systems to auto-tune anomaly thresholds and detection patterns over time.',
    image: '/images/unified-timelines.png',
    imageAlt: 'Detection Pipeline Optimization',
    imagePosition: 'left',
  },
];

const workflow = [
  {
    header: 'Score',
    subtext: 'Calibrate severity levels based on asset sensitivity and past outcomes.',
    tags: ['Risk Scoring', 'Asset Impact'],
    icon: <LineChart size={32} className="text-[#3EE8B5] mb-4" />,
  },
  {
    header: 'Learn',
    subtext: 'Train anomaly models from every alert your team touches.',
    tags: ['Model Training', 'Analyst Feedback'],
    icon: <Brain size={32} className="text-[#3EE8B5] mb-4" />,
  },
  {
    header: 'Adapt',
    subtext: 'Evolve thresholds automatically as system baselines change.',
    tags: ['Auto-Tuning', 'Dynamic Thresholds'],
    icon: <RefreshCw size={32} className="text-[#3EE8B5] mb-4" />,
  },
  {
    header: 'Refine',
    subtext: 'Apply pattern updates across your environment, without reconfiguring every rule manually.',
    tags: ['Pattern Updates', 'System-Wide Changes'],
    icon: <Settings size={32} className="text-[#3EE8B5] mb-4" />,
  },
];

export default function Optimize() {
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
                  Optimize
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 mb-6 leading-relaxed">
                  Adapt Detection Models to Real-World Conditions
                </p>
                <p className="text-lg text-gray-400 mb-12 leading-relaxed">
                  Fine-tune detection logic, risk scoring, and alert thresholds based on operational feedback and telemetry — so your system gets smarter every day.
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
                      <source src="/Data Trei - Op Blind Spots.mp4" type="video/mp4" />
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
              Security That Learns From Your Environment
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Static rules and one-size-fits-all models create noise. Data Trei adapts to your operational baseline, tuning itself with every new insight, false positive, and user intervention.
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
                How Optimize Closes the Loop on Security Intelligence
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Data Trei's Optimize module transforms raw security data into actionable insights through a streamlined four-stage process.
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
              Every Detection Should Make the Next One Smarter
            </h2>
            <p className="text-lg text-gray-400 mb-12">
              With Data Trei, your system is always optimizing — learning from what your team does, and what the system sees.
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