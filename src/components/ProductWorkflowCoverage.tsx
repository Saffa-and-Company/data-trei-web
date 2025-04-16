"use client";

import React from 'react';

const workflows = [
  {
    header: 'Prioritize',
    subtext: 'Focus on vulnerabilities that matter most to your environment and operations.',
    tags: ['CVE Prioritization Engine', 'Real-Time Exploit Signals']
  },
  {
    header: 'Correlate',
    subtext: 'Link exploit activity to Maximo assets and enterprise systems for contextual risk.',
    tags: ['Asset Correlation', 'Maximo-Aware Intelligence']
  },
  {
    header: 'Map',
    subtext: 'Understand threat actor relationships and attack chains for each vulnerability.',
    tags: ['Threat Actor Mapping', 'Attack Chain Analysis']
  },
  {
    header: 'Report',
    subtext: 'Generate executive summaries and patch intelligence for faster action.',
    tags: ['Executive Risk Summaries', 'Patch Intelligence']
  }
];

export default function ProductWorkflowCoverage() {
  return (
    <section id="workflow-coverage" className="py-[180px] relative" style={{ backgroundColor: '#0B0E0E' }}>
      {/* Subtle grid/texture background */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        {/* Grid lines */}
        <svg width="100%" height="100%" className="absolute inset-0" style={{ opacity: 0.10 }}>
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3EE8B5" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Faint green radial accent */}
        <div className="absolute left-1/4 top-1/2 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ zIndex: 1 }} />
        <div className="absolute right-1/4 bottom-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-2xl animate-pulse-slower" style={{ zIndex: 1 }} />
        {/* Optional: Slow diagonal animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-emerald-400/5 to-transparent animate-diagonal-move" style={{ zIndex: 2 }} />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-6 justify-center items-center">
          {workflows.map((wf, i) => (
            <div
              key={wf.header}
              className={`flex-1 min-w-[260px] max-w-[340px] bg-gray-900/70 rounded-2xl border border-gray-800 p-8 shadow-lg flex flex-col items-center text-center ${i % 2 === 0 ? 'border-emerald-500/40' : 'border-emerald-700/30'}`}
            >
              <div className="text-2xl font-bold text-white mb-3 tracking-tight">
                {wf.header}
              </div>
              <div className="text-gray-400 mb-6 text-base">
                {wf.subtext}
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {wf.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1 rounded-full bg-emerald-900/40 text-emerald-300 text-xs font-semibold border border-emerald-500/20 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Animations */}
      <style jsx>{`
        @keyframes diagonal-move {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }
        .animate-diagonal-move {
          animation: diagonal-move 30s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-pulse-slower {
          animation: pulse 16s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
} 