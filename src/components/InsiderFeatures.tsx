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
    title: 'Track Unusual Access Behavior',
    description: 'Detect logins from unfamiliar locations, odd access hours, or resource misuse across Maximo and integrated tools. Our AI-powered platform identifies and flags suspicious access patterns in real-time.',
    imageUrl: '/unsual-access.png',
    imageAlt: 'Access behavior tracking dashboard showing suspicious login patterns',
    imagePosition: 'right'
  },
  {
    title: 'Profile Normal vs Suspicious Patterns',
    description: "Build a baseline of team activity and alert when behavior deviates—like high-volume changes or out-of-role actions. Our pattern recognition engine learns what's normal for your environment.",
    imageUrl: '/privilege-abuse.png',
    imageAlt: 'Side-by-side comparison of normal vs abnormal behavior patterns',
    imagePosition: 'left'
  },
  {
    title: 'Detect Privilege Abuse & Shadow Admins',
    description: 'Identify over-permissioned accounts, lateral movement, and escalation attempts within Maximo and connected enterprise systems. Stop privilege abuse before it leads to data breaches.',
    imageUrl: '/enterprise-threat-graph.png',
    imageAlt: 'Privilege escalation detection interface showing suspicious activity',
    imagePosition: 'right'
  },
  {
    title: 'Summarize Behavioral Risk, Daily',
    description: 'Get a morning report highlighting potential insider threats based on observed anomalies and behavior scoring. Our AI analyzes patterns across your entire Maximo environment.',
    imageUrl: '/summaries.png',
    imageAlt: 'Daily risk summary dashboard with threat indicators',
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

const InsiderFeatures = () => {
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

export default InsiderFeatures; 