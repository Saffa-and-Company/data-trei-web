'use client';

import { ArrowRight, Brain, Eye, Shield, Users, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Data Trei helps security teams see what others can't.
            </h1>
            <p className="text-xl text-gray-400 mb-12">
              From log chaos to clarity — Data Trei empowers modern security teams with AI-native visibility and rapid operational insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <Zap className="h-8 w-8 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Effortless</h3>
              <p className="text-gray-400">Deploy and start ingesting data in minutes.</p>
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <Brain className="h-8 w-8 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Contextual</h3>
              <p className="text-gray-400">AI maps behavior and highlights anomalies automatically.</p>
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <Shield className="h-8 w-8 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Actionable</h3>
              <p className="text-gray-400">Get LLM-driven insights where you work: Slack, Maximo, email, or your dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Vision Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">What is Data Trei?</h2>
          <div className="space-y-6 text-gray-400">
            <p>
              At the heart of enterprise security lies an overwhelming volume of logs — scattered across disconnected systems, applications, and environments. Data Trei brings meaning to that chaos.
            </p>
            <p>
              By unifying telemetry from systems like Maximo, Salesforce, SCADA, and ServiceNow, and combining it with advanced anomaly detection, Data Trei transforms raw logs into structured, actionable intelligence. Our vision is to become the security co-pilot for enterprise asset management teams — contextualizing threats, accelerating resolution, and simplifying compliance from day one.
            </p>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-24 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">How We Help Enterprises</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm">
              <Eye className="h-8 w-8 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold mb-4">Visibility</h3>
              <p className="text-gray-400">
                Maintain a comprehensive and precise record of business log activity, from operational telemetry to compliance-related data. AI assists with surface-level context to reveal the stories your logs are telling.
              </p>
            </div>
            <div className="p-8 rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm">
              <Brain className="h-8 w-8 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold mb-4">Anomaly Detection</h3>
              <p className="text-gray-400">
                Data Trei continuously monitors behavior patterns, surfacing the unexpected and offering suggestions for investigation. No rules required.
              </p>
            </div>
            <div className="p-8 rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm">
              <Shield className="h-8 w-8 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold mb-4">Compliance & Audit Readiness</h3>
              <p className="text-gray-400">
                We help organizations meet standards like ISO 27001, SOC 2, and NERC-CIP by offering anomaly reports, timeline reconstruction, and system audit trails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Team Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Join the Team</h2>
          <div className="space-y-6 text-gray-400 mb-12">
            <p>
              We're building the future of security infrastructure and anomaly intelligence. Join us if you're passionate about transforming how enterprise teams manage risk, visualize behavior, and investigate threats.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Users className="h-5 w-5 text-emerald-500 mr-3" />
                <span>Remote-first – We operate globally.</span>
              </li>
              <li className="flex items-center">
                <Zap className="h-5 w-5 text-emerald-500 mr-3" />
                <span>Cutting-edge stack – AI-native, LLM-powered, real-time pipelines.</span>
              </li>
              <li className="flex items-center">
                <ArrowRight className="h-5 w-5 text-emerald-500 mr-3" />
                <span>Fast-moving – We ship weekly and learn constantly.</span>
              </li>
            </ul>
          </div>
          <Link
            href="/careers"
            className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-500 rounded-md transition-colors"
          >
            Explore Open Roles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to join the team?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Make an impact on the future of AI-driven security and operational intelligence.
          </p>
          <Link
            href="/careers"
            className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-500 rounded-md transition-colors"
          >
            Apply now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
} 