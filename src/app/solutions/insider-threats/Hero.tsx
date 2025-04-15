export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/10 via-black to-black" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Text Content */}
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-medium mb-8 text-white">
              Unmask Insider Threats & Anomalous Behavior in Maximo Environments
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed">
              Data Trei surfaces behavior patterns that deviate from your operational norm—flagging suspicious access, anomalous usage, and privilege abuse before they become incidents.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/signup"
                className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-500 rounded-md transition-colors"
              >
                Sign up – Free
              </a>
              <a
                href="/demo"
                className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-transparent border border-white/20 rounded-md hover:bg-white/5 transition-colors"
              >
                Talk to a Human
              </a>
            </div>
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
                  <source src="/Anomalous Behaviour - Sarah.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 