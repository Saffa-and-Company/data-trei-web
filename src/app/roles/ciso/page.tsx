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
  Settings,
  Shield,
  ClipboardCheck,
  BarChart2,
  Bell
} from 'lucide-react';

const features = [
  {
    title: 'Get Executive Summaries You Can Actually Use',
    description: 'Condense logs, alerts, and anomalies into a one-page view of operational risk, CVE exposure, and behavioral threats — all mapped to your enterprise stack.',
    image: '/images/ai-summaries.png',
    imageAlt: 'Executive Summary Dashboard',
    imagePosition: 'right',
  },
  {
    title: 'Track Security ROI by System and Signal',
    description: 'Monitor where your team spends time and what issues impact uptime or audit-readiness the most. See real return across your Maximo, ServiceNow, and Salesforce assets.',
    image: '/images/cross-system-visibility.png',
    imageAlt: 'Security ROI Dashboard',
    imagePosition: 'left',
  },
  {
    title: 'Board-Ready Risk Reports, Automatically Generated',
    description: 'Get weekly and monthly risk narratives aligned to compliance goals and regulatory frameworks — exportable in seconds.',
    image: '/images/compliance-reports.png',
    imageAlt: 'Board Risk Reports',
    imagePosition: 'right',
  },
  {
    title: 'Maximize Visibility Without Overload',
    description: 'See what matters. Suppress redundant alerts, highlight silent threats, and get context-aware summaries so you stay informed without drowning in noise.',
    image: '/images/unified-timelines.png',
    imageAlt: 'Threat Visibility Dashboard',
    imagePosition: 'left',
  },
];

const workflow = [
  {
    header: 'Strategic Risk View',
    subtext: 'Cut through technical clutter and get focused insights on enterprise threats.',
    tags: ['Risk Insights', 'Enterprise Focus'],
    icon: <Shield size={32} className="text-[#3EE8B5] mb-4" />,
  },
  {
    header: 'Compliance Alignment',
    subtext: 'Auto-generate audit documentation, coverage maps, and timeline trails.',
    tags: ['Audit Ready', 'Documentation'],
    icon: <ClipboardCheck size={32} className="text-[#3EE8B5] mb-4" />,
  },
  {
    header: 'Cross-System Correlation',
    subtext: 'Unify threat visibility across Maximo, Slack, ServiceNow, Salesforce.',
    tags: ['Unified View', 'System Integration'],
    icon: <Network size={32} className="text-[#3EE8B5] mb-4" />,
  },
  {
    header: 'Executive Alerts',
    subtext: 'Flag only the events with leadership-level impact — from insider risks to active exploits.',
    tags: ['Critical Alerts', 'Leadership Focus'],
    icon: <Bell size={32} className="text-[#3EE8B5] mb-4" />,
  },
];

export default function CISO() {
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
                  Executive Command for Enterprise Security
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 mb-6 leading-relaxed">
                  See what matters. Prove what's working. Act with confidence.
                </p>
                <p className="text-lg text-gray-400 mb-12 leading-relaxed">
                  Data Trei transforms your raw telemetry and logs into strategic, board-level insights. From risk trends to compliance gaps, get a daily pulse on the security posture of your enterprise systems.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/signup" className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-500 rounded-md transition-colors">
                    Get Executive Demo
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
                    src="/images/banner-image-ciso.png"
                    alt="CISO Dashboard Overview"
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
              Security Intelligence That Speaks the Language of Leadership
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Boards don't need more noise — they need focus. Data Trei elevates the most relevant security signals and delivers AI-generated reports aligned with what matters most to business leaders.
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
                What CISOs Unlock with Data Trei
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Data Trei's executive module transforms raw security data into boardroom-ready insights through a streamlined four-stage process.
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