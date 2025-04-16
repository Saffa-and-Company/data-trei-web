import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const challenges = [
  {
    title: 'Too Many Logs, Not Enough Signal',
    description: 'Enterprise environments generate terabytes of logs daily, making it impossible to find critical events without help.'
  },
  {
    title: 'Missed Alerts Due to Volume',
    description: 'Important anomalies get lost in the noise when alert thresholds are tuned to avoid fatigue.'
  },
  {
    title: 'Slow Investigation Time',
    description: 'Manual log review is time-consuming, error-prone, and rarely scalable across teams and shifts.'
  },
  {
    title: 'Unstructured Logs = Incomplete Context',
    description: 'Without structure, logs lack the clarity analysts need to quickly correlate, summarize, or escalate.'
  }
];

const features = [
  {
    title: 'AI-Powered Log Summarization',
    description: 'Automatically transform verbose system logs into actionable summaries with root-cause context.',
    imageUrl: '/images/ai-intelligence.png',
    imageAlt: 'AI Log Summarization',
    imagePosition: 'right'
  },
  {
    title: 'Real-Time Anomaly Scoring',
    description: 'Detect deviations in log patterns using multimodal LLMs trained on Maximo, ServiceNow, and asset management telemetry.',
    imageUrl: '/images/unified-timelines.png',
    imageAlt: 'Anomaly Scoring',
    imagePosition: 'left'
  },
  {
    title: 'Noise Reduction with Smart Filtering',
    description: 'Prioritize log events based on severity, risk scoring, and correlation across platforms — not keyword matches.',
    imageUrl: '/images/cross-platform-intelligence.png',
    imageAlt: 'Smart Filtering',
    imagePosition: 'right'
  },
  {
    title: 'Log-to-Action Automation',
    description: 'Trigger downstream workflows or incidents based on intelligence derived from raw log streams.',
    imageUrl: '/images/find-out-why.png',
    imageAlt: 'Log-to-Action Automation',
    imagePosition: 'left'
  }
];

export default function LogOverload() {
  return (
    <>
      <main className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-black to-black" />
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-medium mb-8 text-white">
                Turn Log Overload Into Actionable Intelligence
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed">
                Security teams are buried in logs. Data Trei helps you focus on what matters by summarizing, scoring, and filtering insights from millions of events — instantly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="#platform" className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-500 rounded-md transition-colors">
                  See Platform in Action
                </a>
                <a href="/demo" className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-transparent border border-white/20 rounded-md hover:bg-white/5 transition-colors">
                  Get Early Access
                </a>
              </div>
              {/* Video Section with Browser Chrome */}
              <div className="mt-16">
                <div className="rounded-xl overflow-hidden border border-gray-800 bg-[#0A0A0A] shadow-2xl">
                  {/* Browser Top Bar */}
                  <div className="bg-[#1A1A1A] px-4 py-3 flex items-center gap-2 border-b border-gray-800">
                    {/* Window Controls */}
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                      <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                    </div>
                    {/* URL Bar */}
                    <div className="flex-1 ml-4">
                      <div className="bg-[#0A0A0A] rounded-md py-1 px-3 text-sm text-gray-400 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                        </svg>
                        <span>app.datatrei.com</span>
                      </div>
                    </div>
                  </div>
                  {/* Video Content */}
                  <div className="relative bg-gray-900/50">
                    <video 
                      className="w-full aspect-video object-cover"
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                    >
                      <source src="/Multi-System Environments FInal.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
              <div className="text-2xl font-semibold text-white mt-8 mb-4 flex items-center justify-center gap-2">
                <span role="img" aria-label="brick">🧱</span> Key Challenges We Solve
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                {challenges.map((c) => (
                  <div key={c.title} className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                    <h3 className="text-lg font-bold text-white mb-2">{c.title}</h3>
                    <p className="text-gray-400">{c.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-black py-12" id="platform">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                How Data Trei Cuts Through Log Noise
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                See how Data Trei turns overwhelming, unstructured system logs into focused, high-value intelligence using AI-powered summarization, anomaly detection, and cross-platform correlation.
              </p>
            </div>
            {/* Features */}
            {features.map((feature, index) => (
              <div key={feature.title} className="flex flex-col lg:flex-row items-center gap-12 py-16">
                <div className={`flex-1 ${feature.imagePosition === 'left' ? 'order-2 lg:pr-12' : 'order-1 lg:pl-12'}`}> 
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{feature.title}</h2>
                  <p className="text-lg text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
                <div className={`flex-1 ${feature.imagePosition === 'left' ? 'order-1' : 'order-2'}`}>
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-black">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#3EE8B5]/10 to-transparent" />
                    <img src={feature.imageUrl} alt={feature.imageAlt} className="object-cover w-full h-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
} 