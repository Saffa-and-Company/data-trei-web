'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Shield, Zap, Lock, Building2 } from 'lucide-react';

export default function Waitlist() {
  const [formData, setFormData] = useState({
    email: '',
    company: '',
    role: '',
    useCase: '',
    subscribe: true
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
          formType: 'signup',
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise-Grade Security",
      description: "Built for mission-critical environments with SOC 2 compliance"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-Powered Detection",
      description: "Advanced threat detection with automated response capabilities"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Compliance Ready",
      description: "Automated audit trails and compliance reporting built-in"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Multi-System Support",
      description: "Seamless integration with Maximo, ServiceNow, and more"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative isolate pt-14">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1f6feb] to-[#3EE8B5] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Join the Future of Asset Management Security
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Get early access to Data Trei's intelligent security platform. Built for enterprise teams managing mission-critical infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            {!isSubmitted ? (
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
                    Company Name *
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
                  <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Role *
                  </label>
                  <select
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="">Select your role</option>
                    <option value="security-engineer">Security Engineer</option>
                    <option value="it-admin">IT/OT Admin</option>
                    <option value="ciso">CISO/Security Executive</option>
                    <option value="enterprise-architect">Enterprise Architect</option>
                    <option value="compliance-officer">Compliance Officer</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="useCase" className="block text-sm font-medium text-gray-300 mb-2">
                    Primary Use Case *
                  </label>
                  <select
                    id="useCase"
                    name="useCase"
                    required
                    value={formData.useCase}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="">Select primary use case</option>
                    <option value="insider-threats">Insider Threat Detection</option>
                    <option value="compliance">Compliance & Audit Readiness</option>
                    <option value="incident-response">Incident Response</option>
                    <option value="log-analysis">Log Analysis & Correlation</option>
                    <option value="multi-system">Multi-System Security</option>
                    <option value="other">Other</option>
                  </select>
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
                      I agree to receive updates about Data Trei products, services, and events. You can unsubscribe at any time.
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-8 py-4 text-base font-medium text-black bg-[#3EE8B5] hover:bg-[#3EE8B5]/90 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
                >
                  {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            ) : (
              <div className="text-center py-16">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 mb-4">
                  <svg className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Thank you for joining our waitlist!</h3>
                <p className="text-gray-400">We'll be in touch soon with next steps.</p>
              </div>
            )}
          </div>

          {/* Features Section */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="relative flex items-start gap-6 p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#3EE8B5]/10 text-[#3EE8B5]">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Proof */}
            <div className="rounded-xl border border-white/10 p-8 bg-white/5">
              <h3 className="text-lg font-semibold text-white mb-4">Trusted by Industry Leaders</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <Image
                  src="/images/IBM-Maximo.png"
                  alt="IBM Maximo"
                  width={120}
                  height={40}
                  className="h-8 w-auto opacity-75"
                />
                <Image
                  src="/images/service-now.png"
                  alt="ServiceNow"
                  width={120}
                  height={40}
                  className="h-8 w-auto opacity-75"
                />
                <Image
                  src="/images/salesforce.png"
                  alt="Salesforce"
                  width={120}
                  height={40}
                  className="h-8 w-auto opacity-75"
                />
                <Image
                  src="/images/splunk.png"
                  alt="Splunk"
                  width={120}
                  height={40}
                  className="h-8 w-auto opacity-75"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 