import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[var(--accent-3)]/20 via-black to-black opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center pt-8">
          <h1 className="text-4xl md:text-6xl font-medium mb-8">
            <span className="text-[var(--accent-9)]">Turn Asset Management Into a</span>{' '}
            <span className="text-[var(--gray-12)]">Security Superpower</span>
          </h1>
          
          <p className="text-[var(--gray-11)] text-lg mb-12 max-w-2xl mx-auto">
            With Data Trei, every asset, log, and interaction becomes part of a smarter, AI-driven security strategy. From Maximo to your SOC.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/get-started"
              className="px-6 py-3 bg-[var(--accent-9)] text-[var(--gray-12)] font-medium rounded-md hover:bg-[var(--accent-11)] transition-colors"
            >
              Get Started – Free
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-[var(--gray-5)] text-[var(--gray-11)] rounded-md hover:border-[var(--accent-3)] hover:text-[var(--gray-12)] transition-colors"
            >
              Talk to a Human
            </Link>
          </div>

          {/* Hero Video */}
          <div className="relative max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-10" />
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded-lg"
            >
              <source src="/Data Trei Hero Video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
} 