'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Zap, Clock, Brain, Network, FileText, Users } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function IncidentResponsePage() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-black to-black" />

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Text Content */}
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-medium mb-8 text-white">
                Reduce Incident Response Time from Days to Minutes
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed">
                With Data Trei, security teams don't just detect threats—they understand them instantly. From Maximo alert to incident resolution, AI-powered insights and agentic workflows accelerate your entire response lifecycle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#how-it-works"
                  className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-[#3EE8B5] hover:bg-[#3EE8B5]/90 rounded-md transition-colors"
                >
                  See How It Works
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-medium text-white border border-white/20 rounded-md hover:bg-white/5 transition-colors"
                >
                  Talk to a Human
                </Link>
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
                    <source src="/Accelerated Incident Response.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Cards Section */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              How Data Trei Accelerates Incident Response
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              See how Data Trei helps reduce response times and improve security outcomes by connecting AI-powered insights with automated response workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 hover:border-[#3EE8B5]/50 transition-colors group">
              <div className="h-12 w-12 text-[#3EE8B5] mb-4">
                <Brain className="h-full w-full" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Real-Time Log Summarization</h3>
              <p className="text-gray-400 mb-6">
                Automatically extract the who, what, when, and why from Maximo logs and related systems in seconds.
              </p>
              <Link
                href="/solutions/log-summarization"
                className="inline-flex items-center text-[#3EE8B5] hover:text-[#3EE8B5]/80 font-medium"
              >
                Learn More
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 hover:border-[#3EE8B5]/50 transition-colors group">
              <div className="h-12 w-12 text-[#3EE8B5] mb-4">
                <Zap className="h-full w-full" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Prioritized Threat Scoring</h3>
              <p className="text-gray-400 mb-6">
                LLM-powered context engine prioritizes threats based on severity, likelihood, and business impact.
              </p>
              <Link
                href="/solutions/threat-scoring"
                className="inline-flex items-center text-[#3EE8B5] hover:text-[#3EE8B5]/80 font-medium"
              >
                Learn More
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 hover:border-[#3EE8B5]/50 transition-colors group">
              <div className="h-12 w-12 text-[#3EE8B5] mb-4">
                <Clock className="h-full w-full" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Agentic Workflow Automation</h3>
              <p className="text-gray-400 mb-6">
                Launch response playbooks, isolate endpoints, and notify relevant teams—all triggered automatically.
              </p>
              <Link
                href="/solutions/workflow-automation"
                className="inline-flex items-center text-[#3EE8B5] hover:text-[#3EE8B5]/80 font-medium"
              >
                Learn More
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 hover:border-[#3EE8B5]/50 transition-colors group">
              <div className="h-12 w-12 text-[#3EE8B5] mb-4">
                <Network className="h-full w-full" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Cross-Platform Signal Correlation</h3>
              <p className="text-gray-400 mb-6">
                Link behaviors across Maximo, ServiceNow, Slack, and SCADA environments to see the full incident picture.
              </p>
              <Link
                href="/solutions/signal-correlation"
                className="inline-flex items-center text-[#3EE8B5] hover:text-[#3EE8B5]/80 font-medium"
              >
                Learn More
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 hover:border-[#3EE8B5]/50 transition-colors group">
              <div className="h-12 w-12 text-[#3EE8B5] mb-4">
                <FileText className="h-full w-full" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Timeline-Based Threat Reconstruction</h3>
              <p className="text-gray-400 mb-6">
                View visual incident timelines that stitch together asset behavior, user activity, and environmental anomalies.
              </p>
              <Link
                href="/solutions/threat-reconstruction"
                className="inline-flex items-center text-[#3EE8B5] hover:text-[#3EE8B5]/80 font-medium"
              >
                Learn More
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 hover:border-[#3EE8B5]/50 transition-colors group">
              <div className="h-12 w-12 text-[#3EE8B5] mb-4">
                <Users className="h-full w-full" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Instant Briefings for Analysts</h3>
              <p className="text-gray-400 mb-6">
                Security co-pilot delivers natural language explanations and recommended next steps—reducing triage time.
              </p>
              <Link
                href="/solutions/instant-briefings"
                className="inline-flex items-center text-[#3EE8B5] hover:text-[#3EE8B5]/80 font-medium"
              >
                Learn More
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Alternating Visual Sections */}
      <section className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {[
            {
              title: "Summarize Alerts the Moment They Happen",
              description: "Forget raw logs—Data Trei uses semantic summarization to give you instant, high-context explanations of anomalies, system activity, and alert behavior.",
              image: "/images/summarize-alerts.png",
              alt: "Alert Summarization",
              position: "left"
            },
            {
              title: "Trigger Playbooks Based on Risk Score",
              description: "High-risk incidents don't sit idle. Data Trei's co-pilot activates workflows based on threat severity, reducing your mean time to respond (MTTR).",
              image: "/images/playbook-trigger.png",
              alt: "Playbook Triggering",
              position: "right"
            },
            {
              title: "Visualize Attack Progression Across Systems",
              description: "No more digging through disconnected dashboards. See exactly how threats evolve across Maximo, messaging tools, and IT/OT systems.",
              image: "/images/visualize-attack.png",
              alt: "Attack Visualization",
              position: "left"
            },
            {
              title: "Get Human + AI in the Loop",
              description: "Balance speed with control. Let AI do the heavy lifting while analysts review, approve, or adapt response recommendations in real time.",
              image: "/images/human-in-loop.png",
              alt: "Human AI Collaboration",
              position: "right"
            }
          ].map((section, index, array) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.2,
            });

            return (
              <div key={section.title}>
                <div
                  ref={ref}
                  className={`flex flex-col lg:flex-row items-center gap-12 py-24 opacity-0 transition-all duration-1000 ${
                    inView ? 'opacity-100 translate-y-0' : 'translate-y-10'
                  } ${section.position === 'right' ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className="lg:w-1/2">
                    <h3 className="text-3xl sm:text-4xl font-bold mb-6">{section.title}</h3>
                    <p className="text-xl text-gray-400">{section.description}</p>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="relative w-full max-w-2xl mx-auto aspect-[16/9] rounded-lg overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#3EE8B5]/10 to-transparent" />
                      <Image
                        src={section.image}
                        alt={section.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                {index < array.length - 1 && (
                  <div className="border-t border-gray-800" />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden bg-black">
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 opacity-70" />
            <div className="absolute inset-[1px] rounded-2xl bg-black" />
            
            {/* Content */}
            <div className="relative px-8 py-16 text-center">
              <h2 className="text-4xl md:text-5xl font-medium mb-6 text-white">
                Ready to turn asset management into a security superpower?
              </h2>
              <p className="text-xl text-gray-400 mb-12">
                Turn every log, alert, and asset into an opportunity to move faster, respond sharper, and operate with confidence
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#"
                  className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-[#3EE8B5] hover:bg-[#3EE8B5]/90 rounded-md transition-colors"
                >
                  Join Waitlist
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-transparent border border-white/20 rounded-md hover:bg-white/5 transition-colors"
                >
                  Talk to a Human
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
            {/* Mission Statement */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <span className="text-2xl font-bold">data trei</span>
              </Link>
              <p className="text-gray-400 mb-6 max-w-md">
                Empowering security teams with AI-driven asset management intelligence. 
                Protecting the world's most critical infrastructure, one insight at a time.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://twitter.com/datatrei"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  𝕏
                </Link>
                <Link
                  href="https://linkedin.com/company/datatrei"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  in
                </Link>
                <Link
                  href="https://github.com/datatrei"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GH
                </Link>
              </div>
            </div>

            {/* Products */}
            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li><Link href="/platform" className="text-gray-400 hover:text-emerald-400 transition-colors">Platform</Link></li>
                <li><Link href="/integrations" className="text-gray-400 hover:text-emerald-400 transition-colors">Integrations</Link></li>
                <li><Link href="/api" className="text-gray-400 hover:text-emerald-400 transition-colors">API</Link></li>
                <li><Link href="/pricing" className="text-gray-400 hover:text-emerald-400 transition-colors">Pricing</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/docs" className="text-gray-400 hover:text-emerald-400 transition-colors">Documentation</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-emerald-400 transition-colors">Blog</Link></li>
                <li><Link href="/resources" className="text-gray-400 hover:text-emerald-400 transition-colors">Whitepapers</Link></li>
                <li><Link href="/case-studies" className="text-gray-400 hover:text-emerald-400 transition-colors">Case Studies</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-emerald-400 transition-colors">About</Link></li>
                <li><Link href="/careers" className="text-gray-400 hover:text-emerald-400 transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors">Contact</Link></li>
                <li><Link href="/partners" className="text-gray-400 hover:text-emerald-400 transition-colors">Partners</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
              <div>
                © {new Date().getFullYear()} Data Trei, Inc. All rights reserved.
              </div>
              <div className="flex gap-8">
                <Link href="/privacy" className="hover:text-emerald-400">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-emerald-400">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 