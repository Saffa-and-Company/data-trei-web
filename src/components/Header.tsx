import Link from 'next/link';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-gray-400 hover:text-white transition-colors text-sm"
  >
    {children}
  </Link>
);

export default function Header() {
  return (
    <header className="fixed w-full z-50 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <span className="font-mono text-[#3EE8B5] text-xl">dt</span>
            <span className="font-mono text-white text-xl ml-2">data trei</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <NavLink href="/product">Product</NavLink>
            <NavLink href="/solutions">Solutions</NavLink>
            <NavLink href="/company">Company</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <Link
              href="/get-started"
              className="px-4 py-2 bg-[#3EE8B5] text-black text-sm font-medium rounded-md hover:bg-[#3EE8B5]/90 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
} 