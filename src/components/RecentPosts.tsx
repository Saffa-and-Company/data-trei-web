import { Card } from '@/components/ui/card';
import { FileText, Newspaper, Video, BookOpen } from 'lucide-react';
import Link from 'next/link';

const posts = [
  {
    title: 'IBM Maximo Integration Best Practices: Enhancing Security and Intelligence with Data Trei',
    summary: 'A comprehensive guide to integrating IBM Maximo with modern security platforms, featuring best practices and implementation strategies.',
    date: 'March 21, 2024',
    badge: 'Blog',
    icon: <FileText className="w-4 h-4" />,
    href: '/blog/maximo-integration-best-practices'
  },
  {
    title: 'The Future of AI in Security Operations for Maximo-Driven Enterprises',
    summary: 'How AI is transforming security operations in asset-heavy environments, from faster threat detection to compliance automation.',
    date: 'March 20, 2024',
    badge: 'Blog',
    icon: <FileText className="w-4 h-4" />,
    href: '/blog/ai-security-operations-maximo'
  },
  {
    title: 'Data Trei Launches New Platform Features',
    summary: 'Announcing our latest platform updates and enhancements for enterprise security.',
    date: 'March 15, 2024',
    badge: 'Press',
    icon: <Newspaper className="w-4 h-4" />,
    href: '/press/platform-features'
  },
];

export default function RecentPosts() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-medium text-center mb-12 text-[var(--gray-12)]">
          Recent Posts
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Link key={index} href={post.href} className="block group">
              <Card className="p-6 bg-[var(--gray-1)] border border-[var(--gray-5)] group-hover:border-[var(--accent-3)] transition-all duration-200 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <span className="flex items-center gap-1.5 px-2 py-1 text-xs font-medium bg-[var(--accent-3)]/20 text-[var(--accent-9)] rounded-full">
                    {post.icon}
                    {post.badge}
                  </span>
                  <span className="text-[var(--gray-11)] text-sm">{post.date}</span>
                </div>
                
                <h3 className="text-xl font-medium mb-3 text-[var(--gray-12)] group-hover:text-[var(--accent-9)] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[var(--gray-11)]">{post.summary}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 