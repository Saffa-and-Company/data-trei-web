import Link from 'next/link';

interface FooterColumnProps {
  title: string;
  links: Array<{
    text: string;
    href: string;
    disabled?: boolean;
  }>;
}

const FooterColumn = ({ title, links }: FooterColumnProps) => (
  <div>
    <h3 className="font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          {link.disabled ? (
            <span className="text-gray-500 cursor-not-allowed">
              {link.text}
            </span>
          ) : (
            <Link
              href={link.href}
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              {link.text}
            </Link>
          )}
        </li>
      ))}
    </ul>
  </div>
);

const footerLinks = {
  products: [
    { text: "Exploit & Vulnerability Intelligence", href: "/products/vulnerability-intelligence" },
    { text: "Initial Access Monitoring", href: "/products/access-monitoring" },
    { text: "Enterprise Threat Graph", href: "/products/enterprise-threat-graph" },
    { text: "Agentic Co-Pilot", href: "/products/agentic-co-pilot" }
  ],
  resources: [
    { text: "Documentation (Coming Soon)", href: "#", disabled: true },
    { text: "Blog (Coming Soon)", href: "#", disabled: true },
    { text: "Whitepapers (Coming Soon)", href: "#", disabled: true },
    { text: "Case Studies (Coming Soon)", href: "#", disabled: true }
  ],
  company: [
    { text: "About", href: "/company" },
    { text: "Careers", href: "/company" },
    { text: "Contact", href: "/contact" },
    { text: "Partners (Coming Soon)", href: "#", disabled: true }
  ]
};

const SocialIcon = ({ href, icon }: { href: string; icon: string }) => (
  <Link
    href={href}
    className="text-gray-400 hover:text-emerald-400 transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </Link>
);

export default function Footer() {
  return (
    <footer className="bg-gray-950 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
          {/* Mission Statement */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold">data trei</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering security teams with AI-driven asset management intelligence. 
              Protecting the world's most critical infrastructure, one insight at a time.
            </p>
            <div className="flex gap-4">
              <SocialIcon href="https://twitter.com/datatrei" icon="𝕏" />
              <SocialIcon href="https://linkedin.com/company/datatrei" icon="in" />
              <SocialIcon href="https://github.com/datatrei" icon="GH" />
            </div>
          </div>

          {/* Navigation Links */}
          <FooterColumn title="Products" links={footerLinks.products} />
          <FooterColumn title="Resources" links={footerLinks.resources} />
          <FooterColumn title="Company" links={footerLinks.company} />
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <div>
              © {new Date().getFullYear()} Data Trei, Inc. All rights reserved.
            </div>
            <div className="flex gap-8">
              <Link href="/privacy" className="hover:text-emerald-400">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-emerald-400">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 