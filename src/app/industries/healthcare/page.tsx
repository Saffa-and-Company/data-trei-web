"use client";

import { ArrowRight, Activity, FileCheck, Shield, Zap } from "lucide-react";
import Image from "next/image";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const features = [
  {
    title: "Secure Hospital Infrastructure and Equipment",
    description: "From HVAC to EHR-connected systems, monitor vulnerabilities and misconfigurations in Maximo-managed infrastructure — and resolve issues before they impact care.",
    image: "/images/cross-system-visibility.png",
  },
  {
    title: "Protect Pharmaceutical and Lab Environments",
    description: "Detect abnormal patterns in lab telemetry, ensure GxP-aligned audit trails, and proactively protect proprietary workflows using AI-powered anomaly detection.",
    image: "/images/ai-intelligence.png",
  },
  {
    title: "Ensure Audit and Compliance Readiness",
    description: "Generate real-time compliance summaries, policy enforcement tracking, and role-based alerts to ensure your organization remains ready for any audit.",
    image: "/images/compliance-reports.png",
  },
  {
    title: "Extend Coverage to Air-Gapped and Legacy Systems",
    description: "Healthcare networks are full of older or isolated systems. Data Trei allows AI-driven observability even in disconnected environments through offline agent support and hybrid log syncing.",
    image: "/images/cross-platform-intelligence.png",
  },
];

const workflow = [
  {
    title: "Patient Safety Signals",
    description: "Identify telemetry that could indicate system strain or fault risks.",
    icon: Activity,
  },
  {
    title: "GxP-Aware Intelligence",
    description: "Ensure compliance with Good Practice (GxP) standards in pharmaceutical systems.",
    icon: FileCheck,
  },
  {
    title: "Secure Patch Intelligence",
    description: "Flag gaps in patching across Maximo-connected systems.",
    icon: Shield,
  },
  {
    title: "Clinical System Anomaly Detection",
    description: "Spot subtle but significant behavior changes in core healthcare platforms.",
    icon: Zap,
  },
];

export default function Healthcare() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      {/* Hero Section */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Healthcare & Life Sciences
              </h1>
              <p className="mt-6 text-xl leading-8 text-emerald-400">
                Protect Critical Systems Across Clinical and Pharma Environments
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Data Trei helps healthcare organizations secure sensitive systems that power clinical, pharmaceutical, and hospital operations. From Maximo-integrated assets to facility networks, ensure compliance and safety at every layer of your digital infrastructure.
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
                  src="/images/industry-healthcare.png"
                  alt="Healthcare & Life Sciences Security Infrastructure"
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
              AI-Enhanced Observability for Healthcare's Complex Environments
            </h2>
            <div className="mt-6 lg:max-w-4xl">
              <p className="text-lg leading-8 text-gray-300">
                Critical systems in healthcare must remain secure, compliant, and uninterrupted. Data Trei offers proactive insight into infrastructure risk, patch compliance, and anomaly detection — even across air-gapped and regulated environments.
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
              What Healthcare Teams Get with Data Trei
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