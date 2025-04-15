'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Transition } from '@headlessui/react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { Fragment } from 'react';
import {
  Shield,
  UserCog,
  FileCheck,
  Clock,
  Network,
  Database,
  Zap,
  Eye,
  Network as Network2,
  Bot,
  Brain,
  Shield as ShieldIcon,
  Link as LinkIcon,
  Activity,
  Search,
  FileText,
  BarChart,
  Factory,
  Lightbulb,
  Truck,
  Flame,
  Building2,
  Building,
  Building as Hospital,
  FileCode,
  Terminal,
  Github,
  Box,
  Code,
  Users,
  Laptop,
  Calculator,
  BookOpen as Book,
  MessageCircle
} from 'lucide-react';

interface NavItem {
  label: string;
  href?: string;
  items?: {
    title: string;
    description?: string;
    href: string;
    icon?: React.ReactNode;
  }[];
  sections?: {
    title: string;
    isOverview?: boolean;
    items: {
      title: string;
      description?: string;
      href: string;
      icon?: React.ReactNode;
      isMainOverview?: boolean;
    }[];
  }[];
}

const navigation: NavItem[] = [
  {
    label: 'Solutions',
    sections: [
      {
        title: 'Platform Overview',
        isOverview: true,
        items: [
          {
            title: 'Security Platform Overview',
            description: 'Deliver with speed and quality with our Security platform',
            href: '/platform-overview',
            icon: <Shield size={24} />,
            isMainOverview: true
          }
        ]
      },
      {
        title: 'By Challenge',
        items: [
          { 
            title: 'Operational Blind Spots', 
            href: '/solutions/operational-blind-spots', 
            icon: <Eye size={20} />,
            description: 'Identify hidden gaps in Maximo data and activity logs that could signal vulnerabilities or misconfigurations.'
          },
          { 
            title: 'Insider Threats & Anomalous Behavior', 
            href: '/solutions/insider-threats', 
            icon: <Shield size={20} />,
            description: 'Detect unusual access patterns, behavior deviations, and potential privilege abuse within enterprise asset environments.'
          },
          { 
            title: 'Compliance & Audit Readiness', 
            href: '/solutions/compliance', 
            icon: <FileCheck size={20} />,
            description: 'Ensure regulatory compliance by continuously monitoring Maximo logs for non-compliant events and auto-generating audit reports.'
          },
          { 
            title: 'Incident Response Delays', 
            href: '/solutions/incident-response', 
            icon: <Clock size={20} />,
            description: 'Reduce time-to-detection and time-to-response with AI-generated summaries and agentic playbooks triggered by Maximo alerts.'
          },
          { 
            title: 'Complex Multi-System Environments', 
            href: '/solutions/multi-system', 
            icon: <Network size={20} />,
            description: 'Unify and analyze signals from Maximo, ServiceNow, Salesforce, and Slack to surface threats across platforms.'
          },
          { 
            title: 'Overwhelming Log Volume', 
            href: '/solutions/log-volume', 
            icon: <Database size={20} />,
            description: 'Eliminate alert fatigue and prioritize threats with contextualized, LLM-powered log analysis for Maximo data.'
          },
        ],
      },
      {
        title: 'By Product',
        items: [
          { 
            title: 'Exploit & Vulnerability Intelligence', 
            href: '/products/vulnerability-intelligence', 
            icon: <Zap size={20} />,
            description: 'Continuously assess and surface the most urgent vulnerabilities across your enterprise systems, prioritized by exploitability and impact.'
          },
          { 
            title: 'Initial Access Monitoring', 
            href: '/products/access-monitoring', 
            icon: <Eye size={20} />,
            description: 'Detect early-stage threats like misconfigurations, exposed ports, and suspicious login attempts in Maximo and connected tools.'
          },
          { 
            title: 'Enterprise Threat Graph', 
            href: '/products/threat-graph', 
            icon: <Network2 size={20} />,
            description: 'Visualize threat propagation across systems like IBM Maximo, ServiceNow, Salesforce, and more, with entity resolution powered by semantic AI.'
          },
          { 
            title: 'Agentic Co-Pilot', 
            href: '/products/copilot', 
            icon: <Bot size={20} />,
            description: 'Receive guided playbooks, incident response prompts, and executive summaries based on real-time security events.'
          },
          { 
            title: 'LLM-Powered Log Intelligence', 
            href: '/products/log-intelligence', 
            icon: <Brain size={20} />,
            description: 'Auto-summarize and analyze logs across systems to detect hidden patterns, reduce triage time, and assist investigations.'
          },
          { 
            title: 'Critical Infrastructure Add-On', 
            href: '/products/infrastructure', 
            icon: <ShieldIcon size={20} />,
            description: 'A specialized module tailored for mission-critifical industries with additional hardening, audit reporting, and compliance filters.'
          },
        ],
      },
      {
        title: 'By Stage',
        items: [
          { 
            title: 'Connect', 
            href: '/stages/connect', 
            icon: <LinkIcon size={20} />,
            description: 'Establish secure, real-time pipelines for ingesting logs and telemetry from Maximo, ServiceNow, and other platforms.'
          },
          { 
            title: 'Monitor', 
            href: '/stages/monitor', 
            icon: <Activity size={20} />,
            description: 'Continuously observe enterprise systems using multimodal AI to detect abnormal behaviors and emerging threats.'
          },
          { 
            title: 'Analyze', 
            href: '/stages/analyze', 
            icon: <Search size={20} />,
            description: 'Generate actionable insights and semantic summaries to help teams understand complex security signals instantly.'
          },
          { 
            title: 'Respond', 
            href: '/stages/respond', 
            icon: <Zap size={20} />,
            description: 'Deploy automated playbooks or human-in-the-loop workflows triggered by anomaly detection.'
          },
          { 
            title: 'Report', 
            href: '/stages/report', 
            icon: <FileText size={20} />,
            description: 'Generate audit-ready reports, security summaries, and executive dashboards to satisfy compliance and board requirements.'
          },
          { 
            title: 'Optimize', 
            href: '/stages/optimize', 
            icon: <BarChart size={20} />,
            description: 'Fine-tune detection logic and anomaly scoring based on team feedback and operational telemetry.'
          },
        ],
      },
      {
        title: 'By Role',
        items: [
          { 
            title: 'CISOs & Security Executives', 
            href: '/roles/ciso', 
            icon: <Shield size={20} />,
            description: 'Strategic insights, executive summaries, and risk reports aligned with compliance and board reporting.'
          },
          { 
            title: 'IT & OT Admins', 
            href: '/roles/admins', 
            icon: <UserCog size={20} />,
            description: 'Low-friction setup and observability for asset-heavy environments including SCADA, Maximo, and OT-connected systems.'
          },
          { 
            title: 'Security Engineers', 
            href: '/roles/security-engineers', 
            icon: <Code size={20} />,
            description: 'Customizable detection logic, anomaly tuning, and integrations with SIEM, SOAR, and XDR workflows.'
          },
          { 
            title: 'Enterprise Architects', 
            href: '/roles/architects', 
            icon: <Building2 size={20} />,
            description: 'Centralized visibility into the data stack with semantic mappings across platforms like Maximo, ServiceNow, and Salesforce.'
          },
          { 
            title: 'Compliance Officers', 
            href: '/roles/compliance', 
            icon: <FileCheck size={20} />,
            description: 'Auto-generated audit trails and alerting against compliance drift in regulated environments.'
          },
          { 
            title: 'Analysts & SOC Teams', 
            href: '/roles/analysts', 
            icon: <Users size={20} />,
            description: 'Natural language summaries and context-aware timelines to reduce alert fatigue and improve investigation speed.'
          },
        ],
      },
      {
        title: 'By Industry',
        items: [
          { 
            title: 'Manufacturing', 
            href: '/industries/manufacturing', 
            icon: <Factory size={20} />,
            description: 'Secure industrial operations and equipment maintenance through anomaly detection on Maximo and SCADA telemetry.'
          },
          { 
            title: 'Energy & Utilities', 
            href: '/industries/energy', 
            icon: <Lightbulb size={20} />,
            description: 'Monitor OT and IT convergence in utility networks, supporting regulatory and real-time threat monitoring.'
          },
          { 
            title: 'Transportation & Logistics', 
            href: '/industries/transportation', 
            icon: <Truck size={20} />,
            description: 'Surface risks across fleets, infrastructure, and scheduling platforms with predictive alerts and anomaly intelligence.'
          },
          { 
            title: 'Oil & Gas', 
            href: '/industries/oil-gas', 
            icon: <Flame size={20} />,
            description: 'Gain visibility across upstream, midstream, and downstream assets, pipelines, and maintenance logs.'
          },
          { 
            title: 'Public Sector', 
            href: '/industries/public-sector', 
            icon: <Building2 size={20} />,
            description: 'Meet strict government compliance requirements while securing critical infrastructure at scale.'
          },
          { 
            title: 'Facilities & Real Estate', 
            href: '/industries/facilities', 
            icon: <Building size={20} />,
            description: 'Monitor access logs, asset usage, and facilities data for risk signals across campuses and properties.'
          },
          { 
            title: 'Healthcare & Life Sciences', 
            href: '/industries/healthcare', 
            icon: <Hospital size={20} />,
            description: 'Protect sensitive operational systems in clinical, pharma, and hospital environments integrated with Maximo.'
          },
        ],
      },
    ],
  },
  { label: 'Enterprise', href: '/enterprise' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Company', href: '/company' },
  { label: 'Learning', href: '/learning' },
  {
    label: 'Resources',
    items: [
      { title: 'Whitepapers', href: '/resources/whitepapers', icon: <FileText size={20} /> },
      { title: 'Case Studies', href: '/resources/case-studies', icon: <FileText size={20} /> },
      { title: 'Product Comparisons', href: '/resources/comparisons', icon: <BarChart size={20} /> },
      { title: 'ROI Calculator', href: '/resources/roi-calculator', icon: <Calculator size={20} /> },
      { title: 'Solution Briefs', href: '/resources/solution-briefs', icon: <FileText size={20} /> },
      { title: 'Documentation', href: '/docs', icon: <FileCode size={20} /> },
      { title: 'API', href: '/docs/api', icon: <Code size={20} /> },
      { title: 'Changelog', href: '/changelog', icon: <FileText size={20} /> },
      { title: 'Glossary', href: '/docs/glossary', icon: <Book size={20} /> },
      { title: 'Contact Support', href: '/support', icon: <MessageCircle size={20} /> },
    ],
  },
  {
    label: 'Open Source',
    items: [
      { title: 'Data Trei SDK for Python', href: '/open-source/python-sdk', icon: <FileCode size={20} /> },
      { title: 'Data Trei CLI', href: '/open-source/cli', icon: <Terminal size={20} /> },
      { title: 'GitHub Action', href: '/open-source/github-action', icon: <Github size={20} /> },
      { title: 'SDK for Node.js (Coming Soon)', href: '/open-source/nodejs-sdk', icon: <Box size={20} /> },
      { title: 'data-trei-demo-pipeline', href: '/open-source/demo-pipeline', icon: <Code size={20} /> },
      { title: 'go-trei', href: '/open-source/go-trei', icon: <Code size={20} /> },
      { title: 'Community Contributions', href: '/open-source/community', icon: <Users size={20} /> },
      { title: 'Developer Hub', href: '/developers', icon: <Laptop size={20} /> },
    ],
  },
  { label: 'Support', href: '/support' },
];

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleNavigationClick = () => {
    setMobileMenuOpen(false);
    setActiveSection(null);
  };

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center" onClick={handleNavigationClick}>
              <Image
                src="/datatreilogo2.svg"
                alt="Data Trei Logo"
                width={360}
                height={96}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex lg:items-center lg:justify-center flex-1 lg:space-x-6">
            {navigation.map((item) => (
              item.href ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
                  onClick={handleNavigationClick}
                >
                  {item.label}
                </Link>
              ) : (
                <Menu as="div" key={item.label} className="relative">
                  {({ open }) => {
                    // Set default active section when menu opens
                    React.useEffect(() => {
                      if (open) {
                        setActiveSection('By Challenge');
                      }
                    }, [open]);

                    return (
                      <>
                        <Menu.Button className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium flex items-center">
                          {item.label}
                          <svg
                            className={`ml-1 h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </Menu.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute left-0 z-10 mt-2 origin-top-left rounded-md bg-[#1A1A1A] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {item.sections ? (
                              // Mega menu for Solutions with hover effect
                              <div className="flex w-[1200px]">
                                <div className="flex-1">
                                  {/* Platform Overview Section */}
                                  {item.sections[0].isOverview && (
                                    <div className="p-6 bg-gray-900/50 rounded-tl-md">
                                      {item.sections[0].items.map((overviewItem) => (
                                        <Link
                                          key={overviewItem.title}
                                          href={overviewItem.href}
                                          className="group flex items-center justify-between hover:bg-gray-800/50 rounded-md p-4"
                                          onClick={handleNavigationClick}
                                        >
                                          <div className="flex items-center gap-4">
                                            <span className="flex-shrink-0 w-8 h-8 text-[#3EE8B5]">
                                              {overviewItem.icon}
                                            </span>
                                            <div>
                                              <div className="text-lg font-medium text-white">{overviewItem.title}</div>
                                              <p className="text-sm text-gray-400">{overviewItem.description}</p>
                                            </div>
                                          </div>
                                          <svg
                                            className="w-5 h-5 text-gray-400 group-hover:text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                          >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                          </svg>
                                        </Link>
                                      ))}
                                    </div>
                                  )}

                                  {/* Main Categories Section */}
                                  <div className="flex">
                                    {/* Categories List */}
                                    <div className="w-48 p-6 border-r border-gray-800">
                                      <div className="space-y-2">
                                        {item.sections.slice(1).map((section) => (
                                          <div
                                            key={section.title}
                                            className="relative group"
                                            onMouseEnter={() => setActiveSection(section.title)}
                                          >
                                            <button
                                              className={`w-full text-left px-4 py-2 text-sm rounded-md transition-colors ${
                                                activeSection === section.title
                                                  ? 'bg-gray-800 text-white'
                                                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                                              }`}
                                            >
                                              {section.title}
                                            </button>
                                          </div>
                                        ))}
                                      </div>
                                    </div>

                                    {/* Sub-menu Content */}
                                    <div 
                                      className="flex-1 p-6"
                                      onMouseLeave={() => setActiveSection(null)}
                                    >
                                      {activeSection && (
                                        <>
                                          <h4 className="text-base font-semibold text-white mb-4">
                                            {activeSection}
                                          </h4>
                                          <div className="grid grid-cols-2 gap-6">
                                            {item.sections.find(section => section.title === activeSection)?.items.map((subItem) => (
                                              <Link
                                                key={subItem.title}
                                                href={subItem.href}
                                                className="group flex items-start gap-3 text-gray-300 hover:text-white p-4 rounded-md hover:bg-gray-800/50"
                                                onClick={handleNavigationClick}
                                              >
                                                <span className="flex-shrink-0 w-6 h-6 mt-1 text-gray-400 group-hover:text-[#3EE8B5]">
                                                  {subItem.icon}
                                                </span>
                                                <div className="min-w-0">
                                                  <div className="text-sm font-medium mb-1">{subItem.title}</div>
                                                  {subItem.description && (
                                                    <p className="text-xs text-gray-500">{subItem.description}</p>
                                                  )}
                                                </div>
                                              </Link>
                                            ))}
                                          </div>
                                        </>
                                      )}
                                    </div>
                                  </div>
                                </div>

                                {/* CTA Section */}
                                <div className="w-[350px] p-6 bg-gray-900/30 border-l border-gray-800">
                                  <div className="bg-gray-800/50 rounded-lg p-4 mb-4 relative overflow-hidden">
                                    <Image
                                      src="/solution overview-datatrei.png"
                                      alt="Data Trei Solution Overview"
                                      width={320}
                                      height={180}
                                      className="w-full h-auto rounded-md"
                                      priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-4">
                                      <h4 className="text-[#3EE8B5] font-semibold mb-1">
                                        The Future of Asset Management Security is here
                                      </h4>
                                      <p className="text-white text-sm">
                                        Unlock the Power of Data Trei's Intelligent Platform today
                                      </p>
                                    </div>
                                  </div>
                                  <h3 className="text-lg font-semibold text-white mb-2">Get Free Access to Data Trei Today</h3>
                                  <p className="text-xs text-gray-400 mb-4">Use it for free (no credit card required)</p>
                                  <a
                                    href="#"
                                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={handleNavigationClick}
                                  >
                                    Join Waitlist
                                  </a>
                                </div>
                              </div>
                            ) : (
                              // Regular dropdown for Resources and Open Source
                              <div className="py-6 px-4 w-80">
                                {item.items?.map((subItem) => (
                                  <Menu.Item key={subItem.title}>
                                    {({ active }) => (
                                      <Link
                                        href={subItem.href}
                                        className={`${
                                          active ? 'text-white' : 'text-gray-300'
                                        } group flex items-center gap-4 px-6 py-3 text-base`}
                                        onClick={handleNavigationClick}
                                      >
                                        <span className="flex-shrink-0 w-6 h-6 text-gray-400 group-hover:text-[#3EE8B5]">
                                          {subItem.icon}
                                        </span>
                                        {subItem.title}
                                      </Link>
                                    )}
                                  </Menu.Item>
                                ))}
                              </div>
                            )}
                          </Menu.Items>
                        </Transition>
                      </>
                    );
                  }}
                </Menu>
              )
            ))}
          </div>

          <div className="hidden lg:flex lg:items-center lg:justify-end">
            <Link
              href="/signup"
              className="ml-4 px-4 py-2 bg-[#3EE8B5] text-black text-sm font-medium rounded-md hover:bg-[#3EE8B5]/90 transition-colors"
              onClick={handleNavigationClick}
            >
              Join Waitlist
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1A1A1A]">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <div key={item.label} className="space-y-1">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
                    onClick={handleNavigationClick}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      className="w-full text-left text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
                    >
                      {item.label}
                    </button>
                    <div className="pl-4 space-y-1">
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="text-gray-400 hover:text-white flex items-center gap-3 px-3 py-2 text-sm"
                          onClick={handleNavigationClick}
                        >
                          <span className="flex-shrink-0 w-5 h-5 text-gray-400">
                            {subItem.icon}
                          </span>
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
            <Link
              href="/signup"
              className="block w-full text-center bg-[#3EE8B5] text-black px-4 py-2 rounded-md text-base font-medium hover:bg-[#3EE8B5]/90 transition-colors mt-4"
              onClick={handleNavigationClick}
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation; 