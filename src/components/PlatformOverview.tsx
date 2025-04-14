import Image from 'next/image';

export default function PlatformOverview() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-medium text-center mb-16 text-white">
          Security Intelligence Engineered for Enterprise Asset Management
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* LLM-Powered Log Intelligence */}
          <div className="space-y-4">
            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
              <h3 className="text-xl font-medium text-white mb-2">
                LLM-Powered Log Intelligence
              </h3>
              <p className="text-gray-400">
                Advanced AI processing of system logs and security events
              </p>
            </div>
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
              <Image
                src="/LLM-Powered Log Intelligence.png"
                alt="LLM-Powered Log Intelligence visualization"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Anomaly Detection & Early Warnings */}
          <div className="space-y-4">
            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
              <h3 className="text-xl font-medium text-white mb-2">
                Anomaly Detection & Early Warnings
              </h3>
              <p className="text-gray-400">
                Real-time monitoring and alerting for suspicious activities
              </p>
            </div>
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
              <Image
                src="/Anomaly detection.png"
                alt="Anomaly Detection visualization"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Multi-Source Correlation Engine */}
          <div className="space-y-4">
            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
              <h3 className="text-xl font-medium text-white mb-2">
                Multi-Source Correlation Engine
              </h3>
              <p className="text-gray-400">
                Connect and analyze data across your entire security stack
              </p>
            </div>
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
              <Image
                src="/multisource.png"
                alt="Multi-Source Correlation Engine visualization"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Exploit & Vulnerability Intelligence */}
          <div className="space-y-4">
            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
              <h3 className="text-xl font-medium text-white mb-2">
                Exploit & Vulnerability Intelligence
              </h3>
              <p className="text-gray-400">
                Stay ahead of emerging threats with real-time intelligence
              </p>
            </div>
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
              <Image
                src="/Vulnerability Intelligence.png"
                alt="Exploit & Vulnerability Intelligence visualization"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Agentic Co-Pilot */}
          <div className="space-y-4">
            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
              <h3 className="text-xl font-medium text-white mb-2">
                Agentic Co-Pilot
              </h3>
              <p className="text-gray-400">
                AI assistant for security operations and incident response
              </p>
            </div>
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
              <Image
                src="/Agentic-co-pilot.png"
                alt="Agentic Co-Pilot visualization"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Enterprise Threat Graph */}
          <div className="space-y-4">
            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
              <h3 className="text-xl font-medium text-white mb-2">
                Enterprise Threat Graph
              </h3>
              <p className="text-gray-400">
                Visualize and understand complex security relationships
              </p>
            </div>
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
              <Image
                src="/enterprise-threat-graph.png"
                alt="Enterprise Threat Graph visualization"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Maximo-Centric Teams Section */}
      <div className="container mx-auto px-4 py-32">
        <div className="flex justify-center items-center max-w-6xl mx-auto">
          {/* Left third with background image */}
          <div className="w-1/3 relative">
            <div className="aspect-square relative rounded-lg overflow-hidden scale-[1.4] -ml-[25%]">
              <Image
                src="/maximobackground2.png"
                alt="Maximo-centric teams background"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right two-thirds with text content */}
          <div className="w-2/3 flex items-center">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-medium mb-6 text-white">
                Purpose-Built for Maximo-Centric Teams
              </h2>
              <p className="text-xl text-gray-400">
                Whether you rely on Maximo alone or operate within a complex ecosystem, Data Trei delivers log intelligence, anomaly detection, and compliance automation at scale.
              </p>
              <div className="mt-8">
                <a
                  href="/solutions/maximo"
                  className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-emerald-600 border border-transparent rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 