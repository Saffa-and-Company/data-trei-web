import { Shield, Activity, Bell, UserCog, FileText, Brain } from 'lucide-react';
import Link from 'next/link';

const solutions = [
  {
    title: 'Track Unusual Access Behavior',
    description: 'Detect logins from unfamiliar locations, odd access hours, or resource misuse across Maximo and integrated tools.',
    icon: Shield,
    href: '/solutions/access-monitoring'
  },
  {
    title: 'Profile Normal vs Suspicious Patterns',
    description: 'Build a baseline of team activity. Alert when behavior deviates—like high-volume changes or out-of-role actions.',
    icon: Activity,
    href: '/solutions/behavior-analytics'
  },
  {
    title: 'Detect Privilege Abuse & Shadow Admins',
    description: 'Identify over-permissioned accounts, lateral movement, and escalation attempts within Maximo and connected enterprise systems.',
    icon: UserCog,
    href: '/solutions/privilege-abuse'
  },
  {
    title: 'Summarize Behavioral Risk, Daily',
    description: 'Get a morning report highlighting potential insider threats based on observed anomalies and behavior scoring.',
    icon: FileText,
    href: '/solutions/risk-summary'
  },
  {
    title: 'AI-Powered Pattern Recognition',
    description: 'Use machine learning to establish baselines and detect subtle deviations in user behavior and system access patterns.',
    icon: Brain,
    href: '/solutions/ai-patterns'
  },
  {
    title: 'Real-Time Threat Alerts',
    description: 'Receive instant notifications when suspicious behavior is detected, with context and recommended actions.',
    icon: Bell,
    href: '/solutions/alerts'
  }
];

const InsiderThreatsSolution = () => {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            How Data Trei Detects Insider Threats
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Protect your Maximo environment from internal risks with advanced behavior analytics, privilege monitoring, and AI-powered anomaly detection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution) => {
            const IconComponent = solution.icon;
            return (
              <div
                key={solution.title}
                className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 hover:border-[#3EE8B5]/50 transition-colors group"
              >
                <div className="h-12 w-12 text-[#3EE8B5] mb-4">
                  <IconComponent className="h-full w-full" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-400 mb-6">
                  {solution.description}
                </p>
                <Link
                  href={solution.href}
                  className="inline-flex items-center text-[#3EE8B5] hover:text-[#3EE8B5]/80 font-medium"
                >
                  Learn More
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InsiderThreatsSolution; 