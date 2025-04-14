import Link from 'next/link';

export default function EnterpriseVisual() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[var(--accent-3)]/10 via-black to-black opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6 text-[var(--gray-12)]">
            Built for Maximo-Driven Enterprises
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-4 py-2 bg-[var(--accent-3)]/20 text-[var(--accent-9)] rounded-full">
              ✅ Maximo Ready
            </span>
            <span className="px-4 py-2 bg-[var(--accent-3)]/20 text-[var(--accent-9)] rounded-full">
              ✅ ServiceNow Compatible
            </span>
            <span className="px-4 py-2 bg-[var(--accent-3)]/20 text-[var(--accent-9)] rounded-full">
              ✅ LLM-Enhanced Workflows
            </span>
          </div>
          
          <div className="relative w-full aspect-square max-w-2xl mx-auto mb-12">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-[var(--accent-9)] flex items-center justify-center text-[var(--gray-12)] font-medium">
                Maximo
              </div>
            </div>
            
            <div className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-[var(--gray-5)] flex items-center justify-center text-[var(--gray-12)]">
              ServiceNow
            </div>
            <div className="absolute top-1/4 right-1/4 w-24 h-24 rounded-full bg-[var(--gray-5)] flex items-center justify-center text-[var(--gray-12)]">
              Salesforce
            </div>
            <div className="absolute bottom-1/4 left-1/4 w-24 h-24 rounded-full bg-[var(--gray-5)] flex items-center justify-center text-[var(--gray-12)]">
              Slack
            </div>
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-[var(--gray-5)] flex items-center justify-center text-[var(--gray-12)]">
              GitHub
            </div>
          </div>
          
          <Link
            href="/platform"
            className="inline-block px-6 py-3 bg-[var(--accent-9)] text-[var(--gray-12)] font-medium rounded-md hover:bg-[var(--accent-11)] transition-colors"
          >
            See Platform
          </Link>
        </div>
      </div>
    </section>
  );
} 