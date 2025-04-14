'use client';

import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

interface FeatureSection {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
}

const features: FeatureSection[] = [
  {
    title: 'Expose Hidden Gaps in Maximo Logs',
    description: 'Surface gaps and inconsistencies in how Maximo is logging asset events, usage, or failure conditions. Our AI-powered platform identifies underreported data zones and potential telemetry blind spots.',
    imageUrl: '/images/maximo-log-gaps.png',
    imageAlt: 'Maximo log coverage map showing monitored and under-monitored zones',
    imagePosition: 'right'
  },
  {
    title: 'Detect Silent Failures Before They Escalate',
    description: 'Data Trei automatically correlates low-level asset activity with historical issues and flags when abnormal silence or gaps indicate a potential misfire or missed alert window.',
    imageUrl: '/images/silent-failures.png',
    imageAlt: 'Line graph showing telemetry gaps and AI annotations',
    imagePosition: 'left'
  },
  {
    title: 'Get Context with Cross-System Visibility',
    description: 'Operational blind spots often exist because data is siloed. Connect Maximo with ServiceNow, Slack, Salesforce, and more to detect issues that only emerge at the intersections.',
    imageUrl: '/images/cross-system-visibility.png',
    imageAlt: 'Network map visualization of connected systems',
    imagePosition: 'right'
  },
  {
    title: 'Empower Security Teams with AI-Driven Summaries',
    description: "Instead of drowning in unstructured logs, teams receive daily insights on what's missing or what should've triggered but didn't. Think: a morning briefing for operational gaps.",
    imageUrl: '/images/ai-summaries.png',
    imageAlt: 'Daily report card UI with AI-generated summaries',
    imagePosition: 'left'
  }
];

const FeatureSection = ({ feature }: { feature: FeatureSection }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const contentOrder = feature.imagePosition === 'left' ? 'order-2' : 'order-1';
  const imageOrder = feature.imagePosition === 'left' ? 'order-1' : 'order-2';

  return (
    <div
      ref={ref}
      className={`flex flex-col lg:flex-row items-center gap-12 py-24 opacity-0 transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'translate-y-10'
      }`}
    >
      <div className={`flex-1 ${contentOrder} lg:pr-12`}>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {feature.title}
        </h2>
        <p className="text-lg text-gray-400 leading-relaxed">
          {feature.description}
        </p>
      </div>
      
      <div className={`flex-1 ${imageOrder}`}>
        <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-black">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3EE8B5]/10 to-transparent" />
          <Image
            src={feature.imageUrl}
            alt={feature.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
};

const OperationalFeatures = () => {
  return (
    <section className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {features.map((feature, index) => (
          <div key={index}>
            <FeatureSection feature={feature} />
            {index < features.length - 1 && (
              <div className="border-t border-gray-800" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default OperationalFeatures; 