import { FileText } from 'lucide-react';

export default function BlogPost() {
  return (
    <article className="py-32 bg-black min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <span className="flex items-center gap-1.5 px-2 py-1 text-sm font-medium bg-emerald-500/20 text-emerald-400 rounded-full">
                <FileText className="w-4 h-4" />
                Blog
              </span>
              <span className="text-gray-400">March 20, 2024</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-medium mb-6 text-white">
              The Future of AI in Security Operations for Maximo-Driven Enterprises
            </h1>
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-invert max-w-none [&>p]:mb-8 [&>h2]:mt-16 [&>h2]:mb-8 [&>h3]:mt-12 [&>h3]:mb-6 [&>ul]:mb-8 [&>ul]:mt-4">
            <p className="text-xl leading-relaxed">
              Enterprise asset management systems like IBM Maximo have become mission-critical to the operations of the world's most complex organizations. But as their importance grows, so does the attack surface they represent. Traditional SIEMs and vulnerability management platforms often fall short in environments where asset telemetry, compliance logging, and real-time response must be tightly integrated.
            </p>

            <p className="text-xl leading-relaxed">
              Enter Data Trei. Purpose-built for Maximo-centric teams, Data Trei leverages LLM-powered log intelligence, multi-source correlation, and autonomous anomaly detection to transform how security operations are run in asset-heavy environments.
            </p>

            <h2 className="text-3xl font-medium">Solving the Modern SecOps Challenge</h2>

            <p>
              Security teams using Maximo and related operational platforms are under increasing pressure to:
            </p>

            <ul className="space-y-3">
              <li>Prioritize threats across both IT and OT systems with real-world risk context</li>
              <li>Eliminate alert fatigue by focusing analyst time on actionable, high-fidelity signals</li>
              <li>Demonstrate ROI to leadership through measurable improvements in detection and response</li>
              <li>Meet strict compliance timelines in heavily regulated industries</li>
            </ul>

            <p>
              The integration of AI-native security tools like Data Trei into these environments is no longer optional — it's essential for operational resilience.
            </p>

            <h2 className="text-3xl font-medium">Quantifiable Business Value</h2>

            <h3 className="text-2xl font-medium">1. Faster Detection, Reduced MTTR</h3>
            <p>
              By ingesting Maximo logs, behavioral data, and contextual telemetry, Data Trei detects threats earlier in the attack chain. Agentic workflows guide analysts to action, helping teams reduce Mean Time to Detect (MTTD) and Mean Time to Remediate (MTTR) without increasing headcount.
            </p>

            <h3 className="text-2xl font-medium">2. Operational Security Intelligence</h3>
            <p>
              Rather than relying on static CVSS scores or siloed SIEM alerts, Data Trei correlates log signals across Maximo, ServiceNow, Salesforce, and Slack — giving teams a live Enterprise Threat Graph that surfaces how incidents evolve across systems.
            </p>

            <h3 className="text-2xl font-medium">3. Workforce Augmentation through Agentic AI</h3>
            <p>
              Security analysts and OT administrators gain access to an AI-powered co-pilot that summarizes logs, flags suspicious behavior, and recommends next steps. This offloads cognitive load while accelerating triage, reporting, and investigation.
            </p>

            <h3 className="text-2xl font-medium">4. Compliance-Ready from Day One</h3>
            <p>
              Industries like energy, manufacturing, transportation, and healthcare face increasing regulatory scrutiny. Data Trei auto-generates audit logs, compliance summaries, and risk reports mapped to regulatory frameworks — drastically simplifying audits.
            </p>

            <h2 className="text-3xl font-medium">Strategic Value for Maximo-Driven Teams</h2>

            <p>
              Data Trei doesn't just bolt AI onto legacy security infrastructure — it reimagines the stack for environments where uptime, safety, and compliance are non-negotiable.
            </p>

            <p>
              Security leaders can now:
            </p>

            <ul className="space-y-3">
              <li>Visualize lateral threat movement across OT and IT systems</li>
              <li>Use natural language queries to search and summarize log events</li>
              <li>Prioritize anomalies that map to real attacker TTPs or known exploit activity</li>
              <li>Align security outcomes with asset reliability and business continuity goals</li>
            </ul>

            <p>
              Whether you manage a fleet of transformers, a global manufacturing operation, or a hospital network powered by Maximo, Data Trei becomes your strategic co-pilot for threat visibility and response.
            </p>

            <h2 className="text-3xl font-medium">The Path Forward</h2>

            <p>
              Maximo is only growing in importance — and with it, the need for security solutions that understand its complexity. AI is no longer hype in security operations. For teams working in Maximo-centric ecosystems, it's quickly becoming indispensable.
            </p>

            <p>
              Data Trei is here to help you stay ahead.
            </p>

            <div className="mt-16 p-8 bg-gray-900/50 rounded-lg border border-gray-800">
              <p className="mb-8 text-xl">
                Start your journey with a free trial or request a demo to see how AI can elevate your operational security posture — without adding more tools or overhead.
              </p>
              <div className="flex gap-6">
                <a
                  href="/get-started"
                  className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-emerald-600 border border-transparent rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
                  Sign up – Free
                </a>
                <a
                  href="/demo"
                  className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-transparent border border-gray-600 rounded-md hover:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
                  Talk to a Human
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
} 