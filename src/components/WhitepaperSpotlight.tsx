import Link from 'next/link';

export default function WhitepaperSpotlight() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-white">
              A Peek into 1H-2024 Vulnerability Exploitation
            </h2>
            
            <p className="text-[var(--gray-11)] mb-8">
              Our latest research reveals critical insights into emerging vulnerability patterns and exploitation techniques. 
              Learn how to stay ahead of the curve with proactive security measures.
            </p>
            
            <Link
              href="/whitepaper"
              className="inline-block px-6 py-3 bg-gradient-to-r from-[#12c2e9] to-[#f64f59] text-white font-medium rounded-md hover:opacity-90 transition-opacity"
            >
              Download Today
            </Link>
          </div>
          
          <div className="relative">
            <div className="aspect-[3/4] bg-[var(--gray-1)] rounded-lg border border-[var(--gray-5)] p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-medium mb-4 text-white">1H-2024 Vulnerability Report</h3>
                <p className="text-[var(--gray-11)] mb-4">
                  Comprehensive analysis of vulnerability trends and exploitation patterns in the first half of 2024.
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-[var(--gray-11)]">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2v6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>PDF Document</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 