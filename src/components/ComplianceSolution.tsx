import { Shield, FileCheck, BarChart3, Book } from 'lucide-react';
import Link from 'next/link';

const solutions = [
  {
    title: 'Policy Drift Detection',
    description: "Continuously compare current system states with your organization's compliance baselines to detect and alert on deviations.",
    icon: Shield,
    href: '/solutions/policy-drift'
  },
  {
    title: 'Automated Audit Trails',
    description: 'Capture, store, and index all relevant actions and anomalies across Maximo and integrated tools—ready to export anytime.',
    icon: FileCheck,
    href: '/solutions/audit-trails'
  },
  {
    title: 'Real-Time Compliance Dashboards',
    description: "Get a bird's-eye view of your compliance posture across your Maximo environment and supporting platforms.",
    icon: BarChart3,
    href: '/solutions/compliance-dashboards'
  },
  {
    title: 'Regulation-Aware Monitoring',
    description: "Prebuilt checks for standards like NERC-CIP, ISO 27001, and industry-specific mandates ensure you're never caught off guard.",
    icon: Book,
    href: '/solutions/regulation-monitoring'
  }
];

const ComplianceSolution = () => {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            How Data Trei Ensures Compliance
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Stay audit-ready with automated compliance monitoring, real-time policy enforcement, and comprehensive audit trails.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

export default ComplianceSolution; 