'use client';

import { ArrowRight, Brain, Eye, Shield, Users, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Company() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-gray-400 mb-4">Company</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Delivering data integrity<br />and security to enterprises
            </h1>
            <p className="text-xl text-gray-400 mb-12">
              Protect your mission-critical assets with AI-powered threat detection and automated response
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-[#1a1f36] hover:bg-[#1a1f36]/80 rounded-full transition-colors"
              >
                Contact us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/careers"
                className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-[#1a1f36] hover:bg-[#1a1f36]/80 rounded-full transition-colors"
              >
                We're hiring
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
            <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <Zap className="h-8 w-8 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">AI-Powered Detection</h3>
              <p className="text-gray-400">Advanced threat detection and automated response for Maximo environments.</p>
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <Brain className="h-8 w-8 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Insider Threat Protection</h3>
              <p className="text-gray-400">Identify and mitigate internal risks that account for 60% of security incidents.</p>
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <Shield className="h-8 w-8 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Streamlined Compliance</h3>
              <p className="text-gray-400">Automated audit trails and compliance reporting for asset-heavy industries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Vision Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">The Challenge We're Solving</h2>
          <div className="space-y-6 text-gray-400">
            <p>
              Data consumption and production are at an all-time high, with global data volume expected to exceed 175 zettabytes by 2025. This unprecedented surge has created a new generation of difficult-to-manage cyber threats, particularly in the AI era.
            </p>
            <p>
              IBM Maximo, used by over 10,000 organizations worldwide to manage billions of assets across critical industries like energy and manufacturing, faces unique challenges in operational efficiency and cybersecurity. Insider threats alone account for nearly 60% of all security incidents, costing organizations an average of $15M annually.
            </p>
            <p>
              This risk is particularly acute in asset-heavy industries reliant on platforms like Maximo, where comprehensive threat intelligence from logs is crucial for effective risk mitigation.
            </p>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-24 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">How Data Trei Helps</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm">
              <Eye className="h-8 w-8 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold mb-4">Advanced Threat Detection</h3>
              <p className="text-gray-400">
                Leverage AI and agentic workflows to detect insider threats and malicious attacks in Maximo environments, providing comprehensive visibility into your security landscape.
              </p>
            </div>
            <div className="p-8 rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm">
              <Brain className="h-8 w-8 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold mb-4">Automated Response</h3>
              <p className="text-gray-400">
                Expedite mean time to resolution (MTTR) through automated threat removal and intelligent response workflows, ensuring rapid protection of critical assets.
              </p>
            </div>
            <div className="p-8 rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm">
              <Shield className="h-8 w-8 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
              <p className="text-gray-400">
                Empower your organization to protect systems, streamline compliance, and compound the security of mission-critical assets through comprehensive threat intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Team Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Join the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6 text-gray-400">
              <p className="text-xl">
                We're building the future of security infrastructure and anomaly intelligence at Data Trei.
              </p>
              <p>
                Our mission is to transform how enterprise teams manage risk, visualize behavior, and investigate threats. We're looking for passionate individuals who want to make a real impact in the cybersecurity space.
              </p>
              <p>
                If you're excited about AI, security, and building products that help protect critical infrastructure, we want to hear from you.
              </p>
            </div>
            <div className="space-y-8">
              <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4 text-emerald-500">Our Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Users className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Remote-first Culture</span>
                      <p className="text-sm text-gray-400 mt-1">Work from anywhere – We operate globally with team members across multiple time zones.</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <Zap className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Cutting-edge Technology</span>
                      <p className="text-sm text-gray-400 mt-1">Build with the latest – AI-native architecture, LLM-powered systems, and real-time data pipelines.</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Rapid Innovation</span>
                      <p className="text-sm text-gray-400 mt-1">Ship weekly, learn constantly, and iterate quickly based on customer feedback.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4 text-emerald-500">Benefits</h3>
                <ul className="space-y-3 text-gray-400">
                  <li>• Competitive salary and equity packages</li>
                  <li>• Flexible work hours and unlimited PTO</li>
                  <li>• Health, dental, and vision insurance</li>
                  <li>• Home office setup allowance</li>
                  <li>• Professional development budget</li>
                  <li>• Regular team offsites and events</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Link
              href="/careers"
              className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-500 rounded-md transition-colors"
            >
              Explore Open Roles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 