"use client";

import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Eye, UserCog, Shield, Zap, BarChart, Link2 } from 'lucide-react';

const features = [
  {
    title: 'Monitor Login Anomalies in Maximo Logs',
    description: 'Track unusual login frequency, new device use, or logins outside business hours from suspicious geolocations.',
    image: '/images/ai-intelligence.png',
    imageAlt: 'Monitor Login Anomalies',
    imagePosition: 'right',
  },
  {
    title: 'Detect Lateral Movement via Access Patterns',
    description: 'Spot privilege escalation, user role changes, and access to sensitive asset systems not typical for that account.',
    image: '/images/unusual-access.png',
    imageAlt: 'Detect Lateral Movement',
    imagePosition: 'left',
  },
  {
    title: 'Correlate Activity Across Systems',
    description: 'Correlate identity activity across Maximo, ServiceNow, AD, and Slack to detect low-and-slow attack behavior.',
    image: '/images/cross-system-visibility.png',
    imageAlt: 'Correlate Activity',
    imagePosition: 'right',
  },
  {
    title: 'Preempt Escalation with Early Alerts',
    description: 'Flag access behaviors that precede known attacker behavior—before ransomware deploys or data is exfiltrated.',
    image: '/images/find-out-why.png',
    imageAlt: 'Preempt Escalation',
    imagePosition: 'left',
  },
];

const workflow = [
  {
    header: 'Monitor',
    subtext: 'Track identity and login activity across enterprise systems.',
    tags: ['Login Pattern Detection', 'Privilege Escalation Watch'],
    icon: <Eye size={32} className="text-[#3EE8B5] mb-4" />,
  },
  {
    header: 'Correlate',
    subtext: 'Link suspicious activity across systems for a complete picture.',
    tags: ['Identity Correlation', 'Cross-System Log Inference'],
    icon: <Link2 size={32} className="text-[#3EE8B5] mb-4" />,
  },
  {
    header: 'Prioritize',
    subtext: 'Highlight behaviors that match known attacker TTPs.',
    tags: ['Threat Mapping', 'MITRE ATT&CK Correlation'],
    icon: <BarChart size={32} className="text-[#3EE8B5] mb-4" />,
  },
  {
    header: 'Respond',
    subtext: 'Trigger AI-driven summaries and recommendations for IR teams.',
    tags: ['Anomaly Summarization', 'IR Briefing Generator'],
    icon: <Zap size={32} className="text-[#3EE8B5] mb-4" />,
  },
];

export default function AccessMonitoring() {
  return (
    <>
      <main className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-black to-black" />
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-medium mb-8 text-white">
                Initial Access Monitoring
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-6 leading-relaxed">
                Detect Early Intrusion Paths Before Damage is Done
              </p>
              <p className="text-lg text-gray-400 mb-12 leading-relaxed">
                Initial access is the first step in many attacks, yet often the hardest to detect. Data Trei flags anomalies that indicate unauthorized footholds—before they escalate. By analyzing login behavior, privilege use, and log gaps across Maximo and your enterprise systems, we surface potential compromise attempts early in the kill chain.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="/signup" className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-500 rounded-md transition-colors">
                  Join Waitlist
                </a>
                <a href="/support" className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-transparent border border-white/20 rounded-md hover:bg-white/5 transition-colors">
                  Talk to a Human
                </a>
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
                      <source src="/Multi-System Environments FInal.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Screenshot Section */}
        <section className="bg-black py-20">
          <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <Image
                src="/images/summarize-alerts.png"
                alt="Workbench Query Screenshot"
                width={540}
                height={320}
                className="rounded-xl border border-gray-800 shadow-lg mb-6"
              />
              <div className="bg-gray-900/70 rounded-lg p-4 border border-gray-800 text-white text-sm">
                <span className="font-mono text-emerald-400">SHOW anomalies where admin logins occur from new IPs within 15 mins of asset modifications</span>
              </div>
            </div>
            <div className="flex-1 space-y-4 w-full">
              <div className="bg-gray-900/70 rounded-lg p-4 border border-gray-800 text-white text-base flex items-center gap-3">
                <Shield className="text-emerald-400" size={20} /> New privileged user added
              </div>
              <div className="bg-gray-900/70 rounded-lg p-4 border border-gray-800 text-white text-base flex items-center gap-3">
                <UserCog className="text-emerald-400" size={20} /> Unusual login from unauthorized geo-location
              </div>
              <div className="bg-gray-900/70 rounded-lg p-4 border border-gray-800 text-white text-base flex items-center gap-3">
                <Zap className="text-emerald-400" size={20} /> System service modified via unusual access pattern
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="bg-black py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              How Data Trei Flags Early-Stage Compromise Attempts
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Data Trei maps behaviors that indicate early-stage attacker movement—before damage is done. By unifying login patterns, permission changes, and log inconsistencies across systems like Maximo, ServiceNow, and AD, we build a risk picture around initial access attempts and prioritize what matters.
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
        <section id="workflow-coverage" className="py-[180px] relative" style={{ backgroundColor: '#0B0E0E' }}>
          <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
            <svg width="100%" height="100%" className="absolute inset-0" style={{ opacity: 0.10 }}>
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3EE8B5" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
            <div className="absolute left-1/4 top-1/2 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ zIndex: 1 }} />
            <div className="absolute right-1/4 bottom-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-2xl animate-pulse-slower" style={{ zIndex: 1 }} />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-emerald-400/5 to-transparent animate-[shimmer_2s_infinite]" style={{ zIndex: 2, backgroundSize: '200% 200%' }} />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="flex flex-col md:flex-row gap-8 md:gap-6 justify-center items-center">
              {workflow.map((wf, i) => (
                <div
                  key={wf.header}
                  className={`flex-1 min-w-[260px] max-w-[340px] bg-gray-900/70 rounded-2xl border border-gray-800 p-8 shadow-lg flex flex-col items-center text-center ${i % 2 === 0 ? 'border-emerald-500/40' : 'border-emerald-700/30'}`}
                >
                  <div className="text-2xl font-bold text-white mb-3 tracking-tight">
                    {wf.header}
                  </div>
                  <div className="text-gray-400 mb-6 text-base">
                    {wf.subtext}
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {wf.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1 rounded-full bg-emerald-900/40 text-emerald-300 text-xs font-semibold border border-emerald-500/20 shadow-sm"
                      >
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
      </main>
      <Footer />
    </>
  );
} 