import Link from 'next/link';

interface BlogPostProps {
  title: string;
  author: string;
  date: string;
  tag: string;
  href: string;
}

const BlogPost = ({ title, author, date, tag, href }: BlogPostProps) => (
  <Link 
    href={href}
    className="block p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-emerald-500/50 transition-all"
  >
    <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm mb-4">
      {tag}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <div className="flex items-center text-sm text-gray-400">
      <span>{author}</span>
      <span className="mx-2">•</span>
      <span>{date}</span>
    </div>
  </Link>
);

const recentPosts = [
  {
    title: "Leveraging LLMs for Advanced Log Analysis",
    author: "Data Trei Team",
    date: "Mar 15, 2024",
    tag: "Technical",
    href: "/blog/llm-log-analysis"
  },
  {
    title: "Best Practices for Maximo Security",
    author: "Security Team",
    date: "Mar 10, 2024",
    tag: "Guide",
    href: "/blog/maximo-security-practices"
  },
  {
    title: "The Future of Asset Management Security",
    author: "Research Team",
    date: "Mar 5, 2024",
    tag: "Research",
    href: "/blog/future-asset-management"
  }
];

export default function ContentBlocks() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Recent Blog Posts */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Recent Posts</h2>
            <div className="space-y-6">
              {recentPosts.map((post, index) => (
                <BlogPost key={index} {...post} />
              ))}
            </div>
            <Link 
              href="/blog"
              className="inline-block mt-8 text-emerald-400 hover:text-emerald-300"
            >
              View all posts →
            </Link>
          </div>

          {/* Featured Whitepaper */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-8 rounded-xl border border-gray-800">
            <h2 className="text-3xl font-bold mb-6">Featured Whitepaper</h2>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4">
                A Peek into 1H-2024 Exploitation
              </h3>
              <p className="text-gray-400 mb-6">
                Key trends and insights from the first half of 2024 that shaped the vulnerability landscape
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="text-emerald-500">✓</span>
                  Latest vulnerability trends
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="text-emerald-500">✓</span>
                  Impact on enterprise assets
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="text-emerald-500">✓</span>
                  Mitigation strategies
                </div>
              </div>
            </div>
            <Link
              href="/whitepaper/2024-h1"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-lg transition-all"
            >
              Download Whitepaper
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 