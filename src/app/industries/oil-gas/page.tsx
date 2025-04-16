"use client";

import { ArrowRight, Gauge, GitMerge, LineChart, ShieldCheck } from "lucide-react";
import Image from "next/image";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const features = [
  {
    title: "Monitor SCADA and OT Systems for Threats",
    description: "Secure your physical infrastructure by analyzing telemetry from pumps, valves, compressors, and distributed control systems in real-time.",
    image: "/images/cross-system-visibility.png",
  },
  {
    title: "Correlate Activity Across Upstream and Midstream Systems",
    description: "Detect threats that propagate across pipeline controls, maintenance logs, field asset logs, and enterprise IT workflows.",
    image: "/images/unified-timelines.png",
  },
  {
    title: "Prioritize Issues That Could Lead to Downtime",
    description: "Surface security events that are most likely to impact throughput, reliability, or safety. Data Trei automatically ranks alerts based on operational risk.",
    image: "/images/ai-intelligence.png",
  },
  {
    title: "Align with Industry Regulations and Reporting",
    description: "Generate auto-compliant reports and anomaly trails that support regulatory standards in pipeline integrity, industrial cybersecurity, and incident response.",
    image: "/images/compliance-reports.png",
  },
];

const workflow = [
  {
    title: "Real-Time SCADA Intelligence",
    description: "Visualize activity across HMI, PLCs, and ICS networks.",
    icon: Gauge,
  },
  {
    title: "Asset Correlation Engine",
    description: "Unify telemetry from field assets, IT systems, and OT layers.",
    icon: GitMerge,
  },
  {
    title: "Upstream to Downstream Visibility",
    description: "Track anomalies across production, transport, and storage zones.",
    icon: LineChart,
  },
  {
    title: "Regulatory Reporting Automation",
    description: "Generate compliance-grade summaries on-demand.",
    icon: ShieldCheck,
  },
];

export default function OilGas() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      {/* Hero Section */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Oil & Gas
              </h1>
              <p className="mt-6 text-xl leading-8 text-emerald-400">
                Operational Visibility from Wellhead to Terminal
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Data Trei gives oil & gas enterprises the edge in protecting critical operations. Monitor upstream, midstream, and downstream assets in real-time. From pipelines to drilling telemetry, surface anomalies early and ensure every alert is contextualized and relevant.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="/waitlist"
                  className="rounded-md bg-emerald-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                >
                  Join Waitlist
                </a>
                <a
                  href="/contact"
                  className="rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
                >
                  Talk to a Human
                </a>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative aspect-square w-full max-w-lg mx-auto">
                <Image
                  src="/images/industry-oil-gas.png"
                  alt="Oil & Gas Infrastructure Illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Orientation Section */}
      <section className="relative isolate overflow-hidden bg-black">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              AI-Powered Telemetry Built for Industrial Environments
            </h2>
            <div className="mt-6 lg:max-w-4xl">
              <p className="text-lg leading-8 text-gray-300">
                Asset-rich oil & gas operations generate enormous amounts of log data — but legacy tools miss context. Data Trei's AI-powered engine ingests telemetry across sites and platforms, helping security and operations teams detect anomalies tied to real-world risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alternating Feature Sections */}
      {features.map((feature, featureIdx) => (
        <section
          key={feature.title}
          className="relative isolate overflow-hidden bg-black px-6 py-24 sm:py-32 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className={`grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 ${
              featureIdx % 2 === 0 ? 'lg:items-start' : 'lg:items-start lg:flex-row-reverse'
            }`}>
              <div className="flex-1">
                <div className="relative aspect-square w-full max-w-lg mx-auto">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {feature.title}
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Workflow Section */}
      <section className="relative isolate overflow-hidden bg-black px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              What Oil & Gas Teams Unlock
            </h2>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {workflow.map((item) => (
              <div key={item.title} className="flex flex-col gap-y-3 border-l border-white/10 pl-6">
                <dt className="text-sm leading-6 text-emerald-400">
                  <div className="flex items-center gap-x-3">
                    <item.icon className="h-5 w-5 flex-none text-emerald-400" aria-hidden="true" />
                    {item.title}
                  </div>
                </dt>
                <dd className="text-sm leading-7 text-gray-400">{item.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Final CTA Section */}
      <FinalCTA />

      <Footer />
    </main>
  );
} 