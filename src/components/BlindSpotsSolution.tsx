import { Eye, Brain, Network, Activity, FileSpreadsheet, Wrench } from 'lucide-react';
import Link from 'next/link';

const solutions = [
  {
    title: 'Maximo-Aware Monitoring',
    description: 'Get real-time visibility into Maximo logs, alerts, and asset states to identify misconfigurations and unusual activity patterns.',
    icon: Eye,
    href: '/solutions/monitoring'
  },
  {
    title: 'AI-Powered Gap Detection',
    description: 'Uncover missing telemetry, policy misalignment, or under-instrumented areas using LLM-driven log correlation and semantic inference.',
    icon: Brain,
    href: '/solutions/gap-detection'
  },
  {
    title: 'Multi-System Visibility',
    description: 'Bridge visibility gaps across Maximo, ServiceNow, Salesforce, and custom platforms with unified log correlation.',
    icon: Network,
    href: '/solutions/multi-system'
  },
  {
    title: 'Behavioral Baselines',
    description: 'Establish adaptive benchmarks for user and system behavior to detect quiet shifts that might otherwise go unnoticed.',
    icon: Activity,
    href: '/solutions/baselines'
  },
  {
    title: 'Executive Summaries',
    description: 'Surface blind spots through auto-generated reports tailored for CISOs and IT leads to make informed decisions faster.',
    icon: FileSpreadsheet,
    href: '/solutions/summaries'
  },
  {
    title: 'Real-Time Remediation Prompts',
    description: 'When gaps are found, Data Trei suggests remediation steps or triggers workflows—right from the alert context.',
    icon: Wrench,
    href: '/solutions/remediation'
  }
];

const BlindSpotsSolution = () => {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            How Data Trei Eliminates Operational Blind Spots
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            See how Data Trei helps surface the silent failures hiding in your asset workflows by connecting observability, AI, and contextual security intelligence.
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

export default BlindSpotsSolution; 