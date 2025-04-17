'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    company: '',
    interest: '',
    comments: '',
    subscribe: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'contact',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setIsSubmitted(true);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to submit form');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-sm font-medium tracking-wider text-gray-400 uppercase">Join Waitlist</p>
              <h1 className="text-4xl md:text-5xl font-bold">
                Talk to an Expert
              </h1>
              <p className="text-xl text-gray-400">
                We can walk you through a custom demo, answer pricing questions, or help you determine the right solution for your security team. Data Trei helps modern teams tackle log visibility, insider threats, and compliance challenges with ease.
              </p>
            </div>
            
            {/* Image section */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900/50 border border-white/10">
              <Image
                src="/images/human-in-loop.png"
                alt="Data Trei Human-in-Loop Intelligence"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm">
                  {error}
                </div>
              )}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Business Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-2">
                  Interest *
                </label>
                <select
                  id="interest"
                  name="interest"
                  required
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  <option value="">Select an option</option>
                  <option value="insider-threat">Insider Threat Detection</option>
                  <option value="compliance">Compliance & Audit Readiness</option>
                  <option value="maximo">IBM Maximo Integration</option>
                  <option value="log-ingestion">Log Ingestion & Correlation</option>
                  <option value="anomaly-detection">AI-Powered Anomaly Detection</option>
                  <option value="workflows">Agentic Workflows</option>
                  <option value="self-hosting">Self-Hosting Options</option>
                </select>
              </div>

              <div>
                <label htmlFor="comments" className="block text-sm font-medium text-gray-300 mb-2">
                  Comments
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  rows={4}
                  value={formData.comments}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Tell us more about your needs..."
                />
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="subscribe"
                    name="subscribe"
                    type="checkbox"
                    checked={formData.subscribe}
                    onChange={handleChange}
                    className="h-4 w-4 text-emerald-500 focus:ring-emerald-500 border-gray-600 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="subscribe" className="text-gray-400">
                    I'd like to receive updates about Data Trei products and services. You may withdraw your consent at any time.
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-full transition-colors"
              >
                {isSubmitting ? 'Submitting...' : "Let's Talk"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </form>

            {isSubmitted && (
              <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-500 text-center">
                Thanks! A member of our team will be in touch soon.
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 