const roles = [
  {
    icon: '🛡️',
    title: 'CISO',
    industry: 'Energy',
  },
  {
    icon: '🔒',
    title: 'IT Admin',
    industry: 'Government',
  },
  {
    icon: '⚡',
    title: 'Security Analyst',
    industry: 'Utilities',
  },
  {
    icon: '🏭',
    title: 'Operations Manager',
    industry: 'Manufacturing',
  },
  {
    icon: '🏥',
    title: 'Security Lead',
    industry: 'Healthcare',
  },
  {
    icon: '🚢',
    title: 'Infrastructure Manager',
    industry: 'Transportation',
  },
];

export default function IndustryRoles() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-medium text-center mb-12 text-[var(--gray-12)]">
          Built for Security Teams That Manage the World's Most Important Systems
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {roles.map((role, index) => (
            <div
              key={index}
              className="p-6 bg-[var(--gray-1)] border border-[var(--gray-5)] rounded-lg hover:border-[var(--accent-3)] transition-colors"
            >
              <div className="text-4xl mb-4">{role.icon}</div>
              <h3 className="text-xl font-medium mb-2 text-[var(--gray-12)]">{role.title}</h3>
              <p className="text-[var(--gray-11)]">{role.industry}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 