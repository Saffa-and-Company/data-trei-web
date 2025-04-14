interface RoleCardProps {
  role: string;
  sector: string;
  description: string;
}

const RoleCard = ({ role, sector, description }: RoleCardProps) => (
  <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-emerald-500/50 transition-all">
    <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm mb-4">
      {sector}
    </div>
    <h3 className="text-xl font-semibold mb-3">{role}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const roles = [
  {
    role: "Security Operations",
    sector: "Energy",
    description: "Protecting critical infrastructure and power distribution networks"
  },
  {
    role: "Asset Management",
    sector: "Public Sector",
    description: "Securing government facilities and public transportation systems"
  },
  {
    role: "Compliance Officer",
    sector: "Healthcare",
    description: "Ensuring regulatory compliance for medical equipment and facilities"
  },
  {
    role: "Security Analyst",
    sector: "Manufacturing",
    description: "Monitoring industrial control systems and production lines"
  },
  {
    role: "Infrastructure Manager",
    sector: "Logistics",
    description: "Safeguarding supply chain and distribution networks"
  }
];

export default function IndustryTrust() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Built for Security Teams That Manage the World's Most Important Systems
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From pipelines to public transit — Data Trei supports mission-critical ops
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {roles.map((role, index) => (
            <RoleCard
              key={index}
              role={role.role}
              sector={role.sector}
              description={role.description}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join the growing network of security professionals protecting critical infrastructure with Data Trei
          </p>
        </div>
      </div>
    </section>
  );
} 