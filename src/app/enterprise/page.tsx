"use client";

import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { 
  Brain,
  ArrowRight,
  Infinity,
  Database,
  Search,
  BarChart,
  Shield,
  Clock,
  FileCheck,
  Bell,
  Zap,
  Network,
  Activity
} from 'lucide-react';

const results = [
  {
    metric: '72%',
    title: 'Less Time Spent Triaging Alerts',
    description: 'Smart anomaly grouping and natural language summaries reduce time-to-context for SOC teams.',
    icon: <Clock size={32} className="text-[#3EE8B5] mb-4" />,
  },
  {
    metric: '4X',
    title: 'Faster Audit Preparation',
    description: 'Auto-generated audit logs and risk narratives save teams hundreds of hours during compliance cycles.',
    icon: <FileCheck size={32} className="text-[#3EE8B5] mb-4" />,
  },
  {
    metric: '98%',
    title: 'Signal-to-Noise Precision',
    description: 'Suppress noise, highlight emerging threats, and only surface what truly matters.',
    icon: <Bell size={32} className="text-[#3EE8B5] mb-4" />,
  },
];

const lifecycle = [
  {
    title: 'Plan',
    description: 'Set up intelligent monitoring rules',
    icon: <Shield size={24} className="text-emerald-400" />,
  },
  {
    title: 'Monitor',
    description: 'Real-time anomaly detection',
    icon: <Activity size={24} className="text-emerald-400" />,
  },
  {
    title: 'Analyze',
    description: 'LLM-powered investigation',
    icon: <Brain size={24} className="text-emerald-400" />,
  },
  {
    title: 'Respond',
    description: 'Automated playbook execution',
    icon: <Zap size={24} className="text-emerald-400" />,
  },
  {
    title: 'Report',
    description: 'AI-generated summaries',
    icon: <FileCheck size={24} className="text-emerald-400" />,
  },
  {
    title: 'Optimize',
    description: 'Continuous model refinement',
    icon: <Network size={24} className="text-emerald-400" />,
  },
];

const pillars = [
  {
    title: 'Smart Ingestion',
    description: 'Build secure, real-time log pipelines from Maximo, Salesforce, OT/IT systems and unify data.',
    icon: <Database size={32} className="text-[#3EE8B5] mb-4" />,
    image: '/images/cross-system-visibility.png',
  },
  {
    title: 'Semantic AI & Detection',
    description: 'Decode threats with LLMs trained to identify behavioral anomalies across complex environments.',
    icon: <Search size={32} className="text-[#3EE8B5] mb-4" />,
    image: '/images/ai-intelligence.png',
  },
  {
    title: 'Operational Insights',
    description: 'Equip CISOs, analysts, and engineers with contextualized dashboards and risk reporting.',
    icon: <BarChart size={32} className="text-[#3EE8B5] mb-4" />,
    image: '/images/unified-timelines.png',
  },
];

const partners = [
  { name: 'Maximo', logo: '/images/IBM-Maximo.png' },
  { name: 'ServiceNow', logo: '/images/service-now.png' },
  { name: 'Salesforce', logo: '/images/salesforce.png' },
  { name: 'SCADA', logo: '/images/SCADA.png' },
  { name: 'Splunk', logo: '/images/splunk.png' },
  { name: 'Elastic', logo: '/images/elastic.png' },
];

export default function Enterprise() {
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
                  AI-Powered Defense for the Enterprise Stack
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 mb-6 leading-relaxed">
                  Turn data overload into operational clarity across your entire security ecosystem.
                </p>
                <p className="text-lg text-gray-400 mb-12 leading-relaxed">
                  Data Trei integrates deeply into platforms like IBM Maximo, ServiceNow, and Salesforce—mapping behaviors, highlighting anomalies, and helping enterprise teams resolve threats faster with LLM-powered context.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/signup" className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-500 rounded-md transition-colors">
                    Join Waitlist
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <a href="/support" className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-transparent border border-white/20 rounded-md hover:bg-white/5 transition-colors">
                    Talk to Human
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Right Column - Banner Image */}
              <div className="flex-1">
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden">
                  <Image
                    src="/images/enterprise-image-header.png"
                    alt="Enterprise AI Security"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="bg-black py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {results.map((result) => (
                <div key={result.title} className="bg-gradient-to-br from-emerald-900/20 to-transparent p-8 rounded-xl border border-emerald-900/30 hover:border-emerald-500/30 transition-colors">
                  {result.icon}
                  <div className="text-4xl font-bold text-emerald-400 mb-4">
                    {result.metric}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {result.title}
                  </h3>
                  <p className="text-gray-400">
                    {result.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lifecycle Section */}
        <section className="py-24 relative" style={{ backgroundColor: '#0B0E0E' }}>
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
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                The AI Co-Pilot for Your Entire SecOps Lifecycle
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                From ingestion to optimization, Data Trei augments each layer of the detection and response journey—with semantic understanding, cross-platform logic, and anomaly-first workflows.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {lifecycle.map((step, index) => (
                <div key={step.title} className="relative">
                  {index < lifecycle.length - 1 && (
                    <div className="absolute top-1/2 right-0 w-full h-0.5 bg-emerald-900/50 transform translate-x-1/2" />
                  )}
                  <div className="relative bg-black/50 backdrop-blur-sm border border-emerald-900/20 rounded-xl p-6 hover:border-emerald-500/30 transition-colors">
                    <div className="flex flex-col items-center text-center">
                      {step.icon}
                      <h3 className="text-lg font-bold text-white mt-4 mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-400">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Pillars */}
        <section className="bg-black py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {pillars.map((pillar, index) => (
              <div key={pillar.title} className="flex flex-col lg:flex-row items-center gap-12 py-16">
                <div className={`flex-1 ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                  {pillar.icon}
                  <h3 className="text-2xl font-bold text-white mb-4">{pillar.title}</h3>
                  <p className="text-lg text-gray-400">{pillar.description}</p>
                </div>
                <div className={`flex-1 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-black border border-emerald-900/40 shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#3EE8B5]/10 to-transparent" />
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enterprise Trust Section */}
        <section className="bg-black py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trusted Across High-Stakes Environments
            </h2>
            <p className="text-lg text-gray-400 mb-16 max-w-3xl mx-auto">
              From critical infrastructure to enterprise software stacks, Data Trei secures what matters most.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {partners.map((partner) => (
                <div key={partner.name} className="flex items-center justify-center p-8 bg-white/5 rounded-lg">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={40}
                    className="opacity-50 hover:opacity-100 transition-opacity"
                  />
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