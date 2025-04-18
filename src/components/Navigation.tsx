'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Transition } from '@headlessui/react';
import { Menu as MenuIcon, X, LayoutList, ChevronLeft, ChevronRight } from 'lucide-react';
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
    comingSoon?: boolean;
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
      comingSoon?: boolean;
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
            href: '/solutions/log-overload', 
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
            href: '/solutions/exploit-intelligence', 
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
            href: '/products/enterprise-threat-graph', 
            icon: <Network2 size={20} />,
            description: 'Visualize threat propagation across systems like IBM Maximo, ServiceNow, Salesforce, and more, with entity resolution powered by semantic AI.'
          },
          { 
            title: 'Agentic Co-Pilot', 
            href: '/products/agentic-co-pilot', 
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
  {
    label: 'Learning',
    sections: [
      {
        title: 'Learning Overview',
        isOverview: true,
        items: [
          {
            title: 'Learning Center Overview',
            description: 'Access comprehensive resources to master Data Trei and enterprise security',
            href: '/learning',
            icon: <Book size={24} />,
            isMainOverview: true
          }
        ]
      },
      {
        title: 'Learning Resources',
        items: [
          { 
            title: 'Community', 
            href: '/learning/community', 
            icon: <Users size={20} />,
            description: 'Learn Data Trei inside the world\'s leading enterprise security network',
            comingSoon: true
          },
          { 
            title: 'Support & Documentation', 
            href: '/learning/documentation', 
            icon: <FileText size={20} />,
            description: 'Log definitions, architecture diagrams, and help guides',
            comingSoon: true
          },
          { 
            title: 'Professional Services', 
            href: '/learning/professional-services', 
            icon: <UserCog size={20} />,
            description: 'Accelerate time-to-value with hands-on guidance',
            comingSoon: true
          },
          { 
            title: 'Security Center', 
            href: '/learning/security-center', 
            icon: <Shield size={20} />,
            description: 'Enterprise-grade security training for Maximo and mission-critical environments',
            comingSoon: true
          },
          { 
            title: 'Integrations', 
            href: '/learning/integrations', 
            icon: <LinkIcon size={20} />,
            description: 'Optimize your security workflows with integrations from Maximo, ServiceNow, Slack, and more',
            comingSoon: true
          },
        ],
      },
    ],
  },
  {
    label: 'Developer',
    sections: [
      {
        title: 'Developer Overview',
        isOverview: true,
        items: [
          {
            title: 'Developer Hub Overview',
            description: 'Access comprehensive developer resources, SDKs, and documentation',
            href: '/developer',
            icon: <Code size={24} />,
            isMainOverview: true,
            comingSoon: true
          }
        ]
      },
      {
        title: 'Developer Resources',
        items: [
          { 
            title: 'Data Trei SDK for Python', 
            href: '/developer/python-sdk', 
            icon: <FileCode size={20} />,
            description: 'Easily integrate and parse logs using our Python SDK',
            comingSoon: true
          },
          { 
            title: 'Data Trei CLI', 
            href: '/developer/cli', 
            icon: <Terminal size={20} />,
            description: 'Control your ingestion, anomaly detection, and automation workflows from the command line',
            comingSoon: true
          },
          { 
            title: 'GitHub Action', 
            href: '/developer/github-action', 
            icon: <Github size={20} />,
            description: 'Trigger event-based pipelines for real-time SecOps integration',
            comingSoon: true
          },
          { 
            title: 'SDK for Node.js', 
            href: '/developer/nodejs-sdk', 
            icon: <Box size={20} />,
            description: 'Node-native tools for ingesting and manipulating observability data',
            comingSoon: true
          },
          { 
            title: 'data-trei-demo-pipeline', 
            href: '/developer/demo-pipeline', 
            icon: <Code size={20} />,
            description: 'A reference repo for running end-to-end Data Trei workflows',
            comingSoon: true
          },
          { 
            title: 'go-trei', 
            href: '/developer/go-trei', 
            icon: <Code size={20} />,
            description: 'Lightweight agent in Go for faster edge deployments',
            comingSoon: true
          },
          { 
            title: 'Community Contributions', 
            href: '/developer/community', 
            icon: <Users size={20} />,
            description: 'Open-source contributions, enhancements, and feature extensions',
            comingSoon: true
          },
          { 
            title: 'Developer Hub', 
            href: '/developer/hub', 
            icon: <Laptop size={20} />,
            description: 'All docs, examples, and SDK references in one place',
            comingSoon: true
          },
        ],
      },
    ],
  },
  {
    label: 'Support',
    sections: [
      {
        title: 'Support Overview',
        isOverview: true,
        items: [
          {
            title: 'Support Center Overview',
            description: 'Access comprehensive support resources and expert guidance',
            href: '/support',
            icon: <MessageCircle size={24} />,
            isMainOverview: true,
            comingSoon: true
          }
        ]
      },
      {
        title: 'Support Resources',
        items: [
          { 
            title: 'Community', 
            href: '/support/community', 
            icon: <Users size={20} />,
            description: 'Learn Data Trei on the world\'s largest DevSecOps community',
            comingSoon: true
          },
          { 
            title: 'Support & Documentation', 
            href: '/support/documentation', 
            icon: <FileText size={20} />,
            description: 'FAQs, definitions, and end-to-end troubleshooting help',
            comingSoon: true
          },
          { 
            title: 'Professional Services', 
            href: '/support/professional-services', 
            icon: <UserCog size={20} />,
            description: 'Accelerate time-to-value with expert guidance',
            comingSoon: true
          },
          { 
            title: 'Security Center', 
            href: '/support/security-center', 
            icon: <Shield size={20} />,
            description: 'Enterprise-grade security and compliance resources',
            comingSoon: true
          },
          { 
            title: 'Integrations', 
            href: '/support/integrations', 
            icon: <LinkIcon size={20} />,
            description: 'Optimize your ecosystem with flexible, pre-built integrations',
            comingSoon: true
          },
          { 
            title: 'All Support Resources', 
            href: '/support/resources', 
            icon: <LayoutList size={20} />,
            description: 'Explore our full support and success catalog',
            comingSoon: true
          },
        ],
      },
    ],
  },
];

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [desktopActiveSection, setDesktopActiveSection] = useState<string | null>(null);

  const getDefaultSection = (label: string) => {
    switch (label) {
      case 'Solutions':
        return 'By Challenge';
      case 'Learning':
        return 'Learning Resources';
      case 'Developer':
        return 'Developer Resources';
      case 'Support':
        return 'Support Resources';
      default:
        return null;
    }
  };

  const resetMobileMenu = () => {
    setActiveMenu(null);
    setActiveSection(null);
  };

  const handleClose = () => {
    resetMobileMenu();
    setMobileMenuOpen(false);
  };

  const getMobileMenuContent = () => {
    if (activeMenu) {
      const navItem = navigation.find(item => item.label === activeMenu);
      if (!navItem?.sections) return null;

      if (activeSection) {
        const section = navItem.sections.find(s => s.title === activeSection);
        if (!section) return null;

        return (
          <>
            <div className="flex items-center p-4 border-b border-white/10">
              <button onClick={() => setActiveSection(null)} className="flex items-center text-gray-400">
                <ChevronLeft className="h-5 w-5 mr-2" />
                <span>{activeSection}</span>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-4">
              {section.items.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="flex items-start p-4 border-b border-white/10 group"
                  onClick={handleClose}
                >
                  <span className="flex-shrink-0 w-6 h-6 mt-1 mr-3 text-gray-400 group-hover:text-emerald-500">
                    {item.icon}
                  </span>
                  <div>
                    <div className="font-medium text-white group-hover:text-emerald-500">{item.title}</div>
                    {item.description && (
                      <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                    )}
                    {item.comingSoon && (
                      <span className="inline-block mt-1 text-xs text-gray-500">Coming Soon</span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </>
        );
      }

      return (
        <>
          <div className="flex items-center p-4 border-b border-white/10">
            <button onClick={() => setActiveMenu(null)} className="flex items-center text-gray-400">
              <ChevronLeft className="h-5 w-5 mr-2" />
              <span>{activeMenu}</span>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto py-4">
            {navItem.sections.map((section) => (
              <div key={section.title} className="border-b border-white/10">
                {section.isOverview ? (
                  section.items.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-start p-4 group"
                      onClick={handleClose}
                    >
                      <span className="flex-shrink-0 w-8 h-8 mt-1 mr-3 text-emerald-500">
                        {item.icon}
                      </span>
                      <div>
                        <div className="font-medium text-white group-hover:text-emerald-500">{item.title}</div>
                        {item.description && (
                          <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                        )}
                      </div>
                    </Link>
                  ))
                ) : (
                  <button
                    onClick={() => setActiveSection(section.title)}
                    className="flex items-center justify-between w-full p-4 text-left"
                  >
                    <span className="text-white font-medium">{section.title}</span>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </>
      );
    }

    return (
      <div className="flex-1 overflow-y-auto py-4">
        {navigation.map((item) => (
          <div key={item.label} className="border-b border-white/10">
            {item.sections ? (
              <button
                onClick={() => setActiveMenu(item.label)}
                className="flex items-center justify-between w-full p-4 text-left"
              >
                <span className="text-white font-medium">{item.label}</span>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </button>
            ) : (
              <Link
                href={item.href || '#'}
                className="flex items-center justify-between w-full p-4 text-white hover:bg-white/5"
                onClick={handleClose}
              >
                <span className="text-white font-medium">{item.label}</span>
              </Link>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/datatreilogo2.svg"
                  alt="Data Trei"
                  width={160}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {navigation.map((item) => (
                item.href ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Menu as="div" key={item.label} className="relative">
                    {({ open }) => {
                      React.useEffect(() => {
                        if (open) {
                          setDesktopActiveSection(getDefaultSection(item.label));
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
                            <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 pointer-events-none">
                              <Menu.Items className="w-full pointer-events-auto">
                                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                                  {item.sections && (
                                    <div className={`flex mx-auto ${item.label === 'Support' || item.label === 'Developer' ? 'max-w-[1200px]' : 'max-w-[1200px]'} bg-[#1A1A1A] rounded-md shadow-lg ring-1 ring-black ring-opacity-5`}>
                                      <div className="flex-1">
                                        {/* Platform Overview Section */}
                                        {item.sections[0].isOverview && (
                                          <div className="p-6 bg-gray-900/50 rounded-tl-md">
                                            {item.sections[0].items.map((overviewItem) => (
                                              <div
                                                key={overviewItem.title}
                                                className={`group flex items-center justify-between ${overviewItem.comingSoon ? 'cursor-not-allowed opacity-75' : 'hover:bg-gray-800/50'} rounded-md p-4`}
                                              >
                                                <div className="flex items-center gap-4">
                                                  <span className="flex-shrink-0 w-8 h-8 text-[#3EE8B5]">
                                                    {overviewItem.icon}
                                                  </span>
                                                  <div>
                                                    <div className="text-lg font-medium text-white flex items-center gap-2">
                                                      {overviewItem.title}
                                                      {overviewItem.comingSoon && (
                                                        <span className="text-xs text-gray-500 italic">Coming Soon</span>
                                                      )}
                                                    </div>
                                                    <p className="text-sm text-gray-400">{overviewItem.description}</p>
                                                  </div>
                                                </div>
                                                {!overviewItem.comingSoon && (
                                                  <svg
                                                    className="w-5 h-5 text-gray-400 group-hover:text-white"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                  >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                  </svg>
                                                )}
                                              </div>
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
                                                >
                                                  <button
                                                    onClick={() => setDesktopActiveSection(section.title)}
                                                    className={`w-full text-left px-4 py-2 text-sm rounded-md transition-colors ${
                                                      section.title === desktopActiveSection ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                                                    }`}
                                                  >
                                                    {section.title}
                                                  </button>
                                                </div>
                                              ))}
                                            </div>
                                          </div>

                                          {/* Sub-menu Content */}
                                          <div className="flex-1 p-6">
                                            {open && (
                                              <>
                                                <h4 className="text-base font-semibold text-white mb-4">
                                                  {item.label}
                                                </h4>
                                                <div className="grid grid-cols-2 gap-4">
                                                  {item.sections.find(section => section.title === desktopActiveSection)?.items.map((subItem) => (
                                                    subItem.comingSoon ? (
                                                      <div
                                                        key={subItem.title}
                                                        className="group flex items-start gap-3 text-gray-400 p-4 rounded-md cursor-not-allowed opacity-75"
                                                      >
                                                        <span className="flex-shrink-0 w-6 h-6 mt-1 text-gray-500">
                                                          {subItem.icon}
                                                        </span>
                                                        <div className="min-w-0">
                                                          <div className="text-sm font-medium mb-1 flex items-center gap-2">
                                                            {subItem.title}
                                                            <span className="text-xs text-gray-500 italic">Coming Soon</span>
                                                          </div>
                                                          {subItem.description && (
                                                            <p className="text-xs text-gray-500">{subItem.description}</p>
                                                          )}
                                                        </div>
                                                      </div>
                                                    ) : (
                                                      <Link
                                                        key={subItem.title}
                                                        href={subItem.href}
                                                        className="group flex items-start gap-3 text-gray-300 hover:text-white p-4 rounded-md hover:bg-gray-800/50"
                                                        onClick={handleClose}
                                                      >
                                                        <span className="flex-shrink-0 w-6 h-6 mt-1 text-gray-400 group-hover:text-[#3EE8B5]">
                                                          {subItem.icon}
                                                        </span>
                                                        <div className="min-w-0">
                                                          <div className="text-sm font-medium mb-1">
                                                            {subItem.title}
                                                          </div>
                                                          {subItem.description && (
                                                            <p className="text-xs text-gray-500">{subItem.description}</p>
                                                          )}
                                                        </div>
                                                      </Link>
                                                    )
                                                  ))}
                                                </div>
                                              </>
                                            )}
                                          </div>
                                        </div>
                                      </div>

                                      {/* Standardized CTA Section for all dropdowns */}
                                      {(item.label === 'Solutions' || item.label === 'Learning' || item.label === 'Developer' || item.label === 'Support') && (
                                        <div className="w-[350px] p-6 bg-gray-900/30 border-l border-gray-800">
                                          <div className="bg-gray-800/50 rounded-lg p-4 mb-4 relative overflow-hidden">
                                            <Image
                                              src="/solution overview-datatrei.png"
                                              alt="Data Trei Platform Overview"
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
                                            onClick={handleClose}
                                          >
                                            Join Waitlist
                                          </a>
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>
                              </Menu.Items>
                            </div>
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
              >
                Join Waitlist
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu panel */}
      <div
        className={`fixed inset-0 z-50 bg-black transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <Link href="/" className="flex items-center" onClick={handleClose}>
              <Image
                src="/datatreilogo2.svg"
                alt="Data Trei"
                width={200}
                height={50}
                className="h-12 w-auto"
                priority
              />
            </Link>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>

          {getMobileMenuContent()}

          <div className="p-4 space-y-3 border-t border-white/10">
            <Link
              href="/signup"
              className="flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
              onClick={handleClose}
            >
              Join Waitlist
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-transparent border border-white/20 rounded-lg hover:bg-white/5 transition-colors"
              onClick={handleClose}
            >
              Talk to Human
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation; 