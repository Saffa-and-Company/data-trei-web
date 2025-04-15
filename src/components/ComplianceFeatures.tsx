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
    title: 'Identify Compliance Gaps Automatically',
    description: 'Spot policy violations and missed log requirements in real time. No more waiting for quarterly reviews to uncover misconfigurations.',
    imageUrl: '/images/compliance-gaps.png',
    imageAlt: 'Real-time compliance gap detection interface',
    imagePosition: 'right'
  },
  {
    title: 'Maintain Continuous Audit Logs',
    description: "Ensure every action, access event, and system change is logged and attributed—so you're always ready for internal and external audits.",
    imageUrl: '/images/audit-logs.png',
    imageAlt: 'Continuous audit logging dashboard',
    imagePosition: 'left'
  },
  {
    title: 'Link Compliance to Real Threats',
    description: 'Tie compliance deviations to security outcomes by correlating noncompliant behavior with anomalies and risk scores.',
    imageUrl: '/images/compliance-threats.png',
    imageAlt: 'Compliance and threat correlation visualization',
    imagePosition: 'right'
  },
  {
    title: 'Showcase Readiness with One Click',
    description: 'Generate human-friendly and machine-readable reports from across Maximo, ServiceNow, and other connected tools—on demand.',
    imageUrl: '/images/compliance-reports.png',
    imageAlt: 'One-click compliance reporting interface',
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

const ComplianceFeatures = () => {
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

export default ComplianceFeatures; 