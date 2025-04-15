'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Brain, Network, Search, Clock } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function MultiSystemPage() {
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
                See the Whole Picture, Not Just Pieces
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed">
                Modern incident response often fails because the signals are buried across tools. Data Trei ingests logs and signals from your full stack—including asset management (Maximo), ticketing systems (ServiceNow), communications (Slack), and operations tools (Salesforce)—to unify threat context.
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
                    <source src="/Multi-System Environments FInal.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternating Visual Sections */}
      <section className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {[
            {
              title: "Cross-Platform Intelligence, Powered by AI",
              description: "Our correlation engine uses LLMs to detect suspicious sequences that span across apps—like failed login attempts in Slack followed by unauthorized Maximo config changes. This is more than log ingestion—it's behavioral understanding across your enterprise graph.",
              image: "/images/cross-platform-intelligence.png",
              alt: "Cross-Platform Intelligence",
              position: "left"
            },
            {
              title: 'Find the "Why" Faster',
              description: "Data Trei's AI co-pilot synthesizes incident signals and produces plain-language explanations. Analysts no longer have to jump across apps or paste logs into chat. Ask questions like: What triggered this Slack alert? or Has this Maximo user ever touched these assets before?",
              image: "/images/find-out-why.png",
              alt: "AI Investigation",
              position: "right"
            },
            {
              title: "Unified Incident Timelines",
              description: "Combine security-relevant activity into a single, time-sorted view across tools. From ticket creation in ServiceNow to user behavior in Maximo and Slack activity, teams can trace multi-app exploits as they happen.",
              image: "/images/unified-timelines.png",
              alt: "Unified Timelines",
              position: "left"
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