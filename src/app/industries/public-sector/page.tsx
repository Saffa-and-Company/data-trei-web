"use client";

import { ArrowRight, Building2, FileCheck, Network, Shield } from "lucide-react";
import Image from "next/image";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const features = [
  {
    title: "Full Visibility Across Critical Systems",
    description: "Get a single view of your Maximo, SCADA, and enterprise platforms to detect blind spots, irregular behaviors, and access risks across agencies.",
    image: "/images/cross-platform-intelligence.png",
  },
  {
    title: "Reduce Audit Friction",
    description: "Automatically generate compliance documentation, event timelines, and audit trails. Meet NIST, FedRAMP, and other standards without additional overhead.",
    image: "/images/compliance-reports.png",
  },
  {
    title: "Monitor OT + IT Convergence",
    description: "Detect unusual activity across legacy and modern infrastructure—whether it's a rogue login on an OT endpoint or a change in an ERP system.",
    image: "/images/cross-system-visibility.png",
  },
  {
    title: "Enhance Interagency Coordination",
    description: "Use shared dashboards, real-time alerts, and secure data sharing to align public sector teams and improve incident response across jurisdictions.",
    image: "/images/unified-timelines.png",
  },
];

const workflow = [
  {
    title: "Centralized Oversight",
    description: "Combine security intelligence from distributed and siloed systems in one view.",
    icon: Building2,
  },
  {
    title: "Compliance Confidence",
    description: "Stay aligned with evolving regulations using automated audit and reporting workflows.",
    icon: FileCheck,
  },
  {
    title: "Critical Infrastructure Coverage",
    description: "Detect issues across OT and IT systems at the heart of government operations.",
    icon: Shield,
  },
  {
    title: "National Resilience",
    description: "Support federal and municipal missions by safeguarding systems powering everyday life.",
    icon: Network,
  },
];

export default function PublicSector() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      {/* Hero Section */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Public Sector
              </h1>
              <p className="mt-6 text-xl leading-8 text-emerald-400">
                Government-Grade Security. At Scale.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Data Trei helps public institutions secure their most sensitive systems while staying compliant with evolving regulations. From critical infrastructure protection to audit-ready intelligence, get a cybersecurity co-pilot built for public impact.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="/demo"
                  className="rounded-md bg-emerald-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                >
                  Get Public Sector Demo
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
                  src="/images/industry-public-sector.png"
                  alt="Public Sector Security Infrastructure"
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
              Purpose-Built for Government and Infrastructure
            </h2>
            <div className="mt-6 lg:max-w-4xl">
              <p className="text-lg leading-8 text-gray-300">
                Public sector organizations face some of the most complex cyber threats — all while operating under tight regulatory scrutiny. Data Trei ensures government agencies, departments, and partners maintain full visibility, control, and compliance.
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
              What Public Sector Teams Unlock
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