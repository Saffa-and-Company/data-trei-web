"use client";

import { ArrowRight, Building, Gauge, Key, LineChart } from "lucide-react";
import Image from "next/image";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const features = [
  {
    title: "Map Risk to Real-World Spaces",
    description: "Link system logs with real-time data from physical infrastructure — from badge readers to HVAC telemetry. Understand where and when security incidents occur.",
    image: "/images/cross-system-visibility.png",
  },
  {
    title: "Detect Access and Usage Anomalies",
    description: "Spot out-of-hours logins, abnormal entry patterns, and signs of misuse — across one property or many.",
    image: "/images/unusual-access.png",
  },
  {
    title: "Unify Visibility Across Campuses and Assets",
    description: "Aggregate data from Maximo, ServiceNow, and building automation systems for an integrated risk view.",
    image: "/images/cross-platform-intelligence.png",
  },
  {
    title: "Align Facilities Ops with Security Strategy",
    description: "Empower facilities teams with insights that reduce downtime, flag security gaps, and optimize building operations.",
    image: "/images/unified-timelines.png",
  },
];

const workflow = [
  {
    title: "Access Monitoring",
    description: "Detect unusual access attempts and off-hours activity.",
    icon: Key,
  },
  {
    title: "Asset Usage Intelligence",
    description: "Track how equipment is used and by whom.",
    icon: Building,
  },
  {
    title: "Environmental Signals",
    description: "Surface anomalies in temperature, lighting, or occupancy patterns.",
    icon: Gauge,
  },
  {
    title: "Cross-System Telemetry",
    description: "Combine building data with enterprise systems for richer context.",
    icon: LineChart,
  },
];

export default function Facilities() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      {/* Hero Section */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Smart Security for Smart Buildings
              </h1>
              <p className="mt-6 text-xl leading-8 text-emerald-400">
                Turn Access Logs and Facilities Data into Real-Time Risk Insights
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Data Trei helps you secure campuses, buildings, and real estate portfolios with visibility into asset usage, access events, and occupancy anomalies. From entrances to equipment rooms, get the signals you need to stay ahead of risk.
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
                  src="/images/industry-facilities.png"
                  alt="Smart Buildings Security Infrastructure"
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
              Monitor and Protect Every Square Foot
            </h2>
            <div className="mt-6 lg:max-w-4xl">
              <p className="text-lg leading-8 text-gray-300">
                Facilities and real estate teams manage more than buildings — they manage risk. With Data Trei, detect unauthorized access, monitor equipment usage, and spot operational anomalies tied to physical environments.
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
              What Facilities Teams Unlock with Data Trei
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