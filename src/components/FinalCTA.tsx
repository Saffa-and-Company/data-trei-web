import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden bg-black">
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 opacity-70" />
          <div className="absolute inset-[1px] rounded-2xl bg-black" />
          
          {/* Content */}
          <div className="relative px-8 py-16 text-center">
            <h2 className="text-4xl md:text-5xl font-medium mb-6 text-white">
              Ready to turn asset management into a security superpower?
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Turn every log, alert, and asset into an opportunity to move faster, respond sharper, and operate with confidence
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Join Waitlist
              </a>
              <a
                href="/demo"
                className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-transparent border border-white/20 rounded-md hover:bg-white/5 transition-colors"
              >
                Talk to a Human
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 