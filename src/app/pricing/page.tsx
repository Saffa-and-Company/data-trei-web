'use client';

import { ArrowRight, Check, HelpCircle, Mail, RefreshCw, Send } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

type PlanType = 'sprout' | 'branch' | 'canopy';

const plans = [
  {
    name: "Sprout",
    subtitle: "Free",
    price: "0",
    features: [
      "500MB hot logs, 2GB cold logs",
      "15 summarizations/day",
      "1 integration",
      "3 user seats",
      "7-day hot retention",
    ],
    cta: "Get started – Free",
    ctaHref: "/signup",
    popular: false,
  },
  {
    name: "Branch",
    subtitle: "Growth",
    price: "89",
    features: [
      "5GB hot, 20GB cold logs",
      "200 summarizations/day",
      "5 integrations",
      "10 seats",
      "30-day hot retention",
    ],
    cta: "Upgrade to Growth",
    ctaHref: "/signup",
    popular: true,
  },
  {
    name: "Canopy",
    subtitle: "Enterprise",
    price: "800",
    priceSubtext: "starting at",
    features: [
      "50GB+ hot logs, 1TB+ cold logs",
      "Unlimited integrations",
      "Custom LLM",
      "SLA & Audit logs",
      "Priority support",
    ],
    cta: "Talk to Human",
    ctaHref: "/contact",
    popular: false,
  },
];

const usageOverflow = [
  { type: "Cold Storage", price: "0.10", unit: "GB" },
  { type: "Hot Storage", price: "0.25", unit: "GB" },
  { type: "LLM Summarization", price: "0.01", unit: "request" },
];

const addOns = [
  {
    name: "Self-Hosting",
    description: "15% off monthly plan",
    price: "Variable",
  },
  {
    name: "Dedicated Support",
    description: "For Branch plan",
    price: "$150/mo",
  },
  {
    name: "Custom API Access",
    description: "Full API documentation",
    price: "$50/mo",
  },
  {
    name: "Private GPT-4 Endpoint",
    description: "Dedicated model access",
    price: "$300/mo",
  },
];

const presetScales = {
  startup: {
    incidents: "20",
    resolutionTime: "1.5",
    hourlyCost: "80",
    businessImpact: "2000",
    currentTooling: "1500"
  },
  midmarket: {
    incidents: "35",
    resolutionTime: "2.5",
    hourlyCost: "100",
    businessImpact: "3500",
    currentTooling: "2500"
  },
  enterprise: {
    incidents: "75",
    resolutionTime: "4",
    hourlyCost: "120",
    businessImpact: "7500",
    currentTooling: "5000"
  }
};

export default function Pricing() {
  const [roiInputs, setRoiInputs] = useState({
    incidents: "",
    resolutionTime: "",
    hourlyCost: "",
    businessImpact: "",
    currentTooling: "",
  });

  const [showTooltip, setShowTooltip] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<PlanType>("branch");

  const calculateROI = () => {
    const incidents = Number(roiInputs.incidents) || 0;
    const time = Number(roiInputs.resolutionTime) || 0;
    const hourlyRate = Number(roiInputs.hourlyCost) || 0;
    const impact = Number(roiInputs.businessImpact) || 0;
    const currentSpend = Number(roiInputs.currentTooling) || 0;

    const monthlyTimeValue = incidents * time * hourlyRate;
    const monthlyBusinessRisk = incidents * impact;
    const totalCurrentCost = monthlyTimeValue + monthlyBusinessRisk + currentSpend;
    
    // Assume 50% reduction in time and impact with Data Trei
    const timeReduction = monthlyTimeValue * 0.5;
    const riskReduction = monthlyBusinessRisk * 0.5;
    const totalSavings = timeReduction + riskReduction;
    
    // Calculate ROI based on selected plan
    const planCosts: Record<PlanType, number> = {
      sprout: 0,
      branch: 89,
      canopy: 800
    };
    
    const planCost = planCosts[selectedPlan];
    const netSavings = totalSavings - planCost;
    const roiMultiplier = planCost > 0 ? netSavings / planCost : 0;

    // Suggest plan based on usage
    let suggestedPlan: PlanType = "sprout";
    if (incidents > 50 || currentSpend > 3000) {
      suggestedPlan = "canopy";
    } else if (incidents > 20 || currentSpend > 1000) {
      suggestedPlan = "branch";
    }

    return {
      timeSaved: time * incidents * 0.5, // hours saved per month
      costSaved: timeReduction,
      riskReduced: riskReduction,
      totalSavings: totalSavings,
      roi: roiMultiplier,
      suggestedPlan
    };
  };

  const applyPreset = (scale: keyof typeof presetScales) => {
    setRoiInputs(presetScales[scale]);
  };

  const resetCalculator = () => {
    setRoiInputs({
      incidents: "",
      resolutionTime: "",
      hourlyCost: "",
      businessImpact: "",
      currentTooling: "",
    });
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const results = calculateROI();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Flexible plans that scale with your security stack
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            From startups to enterprise—only pay when you're getting value
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-500 rounded-md transition-colors"
            >
              Join Waitlist
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-transparent border border-white/20 rounded-md hover:bg-white/5 transition-colors"
            >
              Talk to Human
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Plan Comparison Cards */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative p-8 rounded-xl border ${
                  plan.popular
                    ? "border-emerald-500 bg-emerald-500/5"
                    : "border-white/10 bg-white/5"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 text-white text-sm rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="text-gray-400">{plan.subtitle}</p>
                </div>
                <div className="mb-8">
                  {plan.priceSubtext && (
                    <div className="text-sm text-gray-400 mb-1">
                      {plan.priceSubtext}
                    </div>
                  )}
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="ml-2 text-gray-400">/month</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.ctaHref}
                  className={`block w-full py-3 px-4 text-center rounded-md transition-colors ${
                    plan.popular
                      ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Overflow Table */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Usage Overflow Pricing
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-6 text-left">Type</th>
                  <th className="py-4 px-6 text-right">Price</th>
                  <th className="py-4 px-6 text-right">Unit</th>
                </tr>
              </thead>
              <tbody>
                {usageOverflow.map((item) => (
                  <tr
                    key={item.type}
                    className="border-b border-white/10 hover:bg-white/5"
                  >
                    <td className="py-4 px-6">{item.type}</td>
                    <td className="py-4 px-6 text-right">${item.price}</td>
                    <td className="py-4 px-6 text-right">per {item.unit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Add-ons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addOns.map((addon) => (
              <div
                key={addon.name}
                className="p-6 rounded-xl border border-white/10 bg-white/5"
              >
                <h3 className="text-xl font-bold mb-2">{addon.name}</h3>
                <p className="text-gray-400 mb-4">{addon.description}</p>
                <div className="text-emerald-500 font-semibold">
                  {addon.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Calculate Your ROI with Data Trei
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              See how much time and money you could save by automating anomaly detection, 
              compliance monitoring, and log analysis.
            </p>
          </div>

          {/* Preset Scale Toggles */}
          <div className="flex justify-center gap-4 mb-12">
            {Object.entries(presetScales).map(([scale, _]) => (
              <button
                key={scale}
                onClick={() => applyPreset(scale as keyof typeof presetScales)}
                className="px-4 py-2 text-sm font-medium rounded-md border border-white/10 
                hover:bg-white/5 transition-colors capitalize"
              >
                {scale} Preset
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Input Column */}
            <div className="space-y-6">
              <div className="relative">
                <div className="flex items-center mb-2">
                  <label className="block text-sm font-medium">
                    Security Incidents/Month
                  </label>
                  <button
                    className="ml-2 text-gray-400 hover:text-white"
                    onMouseEnter={() => setShowTooltip("incidents")}
                    onMouseLeave={() => setShowTooltip("")}
                  >
                    <HelpCircle className="h-4 w-4" />
                  </button>
                </div>
                {showTooltip === "incidents" && (
                  <div className="absolute z-10 -top-2 left-full ml-2 p-2 bg-gray-800 text-sm text-white rounded-md w-64">
                    Typical 100-person org sees 20–50 incidents/month
                  </div>
                )}
                <input
                  type="number"
                  min="0"
                  value={roiInputs.incidents}
                  onChange={(e) => setRoiInputs({ ...roiInputs, incidents: e.target.value })}
                  className="w-full px-4 py-2 bg-black border border-white/10 rounded-md 
                  focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="e.g. 35"
                />
              </div>

              <div className="relative">
                <div className="flex items-center mb-2">
                  <label className="block text-sm font-medium">
                    Avg Time to Resolve per Incident (hours)
                  </label>
                  <button
                    className="ml-2 text-gray-400 hover:text-white"
                    onMouseEnter={() => setShowTooltip("time")}
                    onMouseLeave={() => setShowTooltip("")}
                  >
                    <HelpCircle className="h-4 w-4" />
                  </button>
                </div>
                {showTooltip === "time" && (
                  <div className="absolute z-10 -top-2 left-full ml-2 p-2 bg-gray-800 text-sm text-white rounded-md w-64">
                    Industry average MTTR: 6 hours. Manual triage often takes 1–2+ hrs.
                  </div>
                )}
                <input
                  type="number"
                  min="0"
                  step="0.5"
                  value={roiInputs.resolutionTime}
                  onChange={(e) => setRoiInputs({ ...roiInputs, resolutionTime: e.target.value })}
                  className="w-full px-4 py-2 bg-black border border-white/10 rounded-md 
                  focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="e.g. 2.5"
                />
              </div>

              <div className="relative">
                <div className="flex items-center mb-2">
                  <label className="block text-sm font-medium">
                    Hourly Cost of SecOps Team
                  </label>
                  <button
                    className="ml-2 text-gray-400 hover:text-white"
                    onMouseEnter={() => setShowTooltip("cost")}
                    onMouseLeave={() => setShowTooltip("")}
                  >
                    <HelpCircle className="h-4 w-4" />
                  </button>
                </div>
                {showTooltip === "cost" && (
                  <div className="absolute z-10 -top-2 left-full ml-2 p-2 bg-gray-800 text-sm text-white rounded-md w-64">
                    Blended team rate incl. salary, benefits, overhead. Typical: $80–$120/hr
                  </div>
                )}
                <input
                  type="number"
                  min="0"
                  value={roiInputs.hourlyCost}
                  onChange={(e) => setRoiInputs({ ...roiInputs, hourlyCost: e.target.value })}
                  className="w-full px-4 py-2 bg-black border border-white/10 rounded-md 
                  focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="e.g. $100"
                />
              </div>

              <div className="relative">
                <div className="flex items-center mb-2">
                  <label className="block text-sm font-medium">
                    Business Impact per Incident
                  </label>
                  <button
                    className="ml-2 text-gray-400 hover:text-white"
                    onMouseEnter={() => setShowTooltip("impact")}
                    onMouseLeave={() => setShowTooltip("")}
                  >
                    <HelpCircle className="h-4 w-4" />
                  </button>
                </div>
                {showTooltip === "impact" && (
                  <div className="absolute z-10 -top-2 left-full ml-2 p-2 bg-gray-800 text-sm text-white rounded-md w-64">
                    Downtime, compliance or reputational risk. Varies by industry.
                  </div>
                )}
                <input
                  type="number"
                  min="0"
                  value={roiInputs.businessImpact}
                  onChange={(e) => setRoiInputs({ ...roiInputs, businessImpact: e.target.value })}
                  className="w-full px-4 py-2 bg-black border border-white/10 rounded-md 
                  focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="e.g. $3500"
                />
              </div>

              <div className="relative">
                <div className="flex items-center mb-2">
                  <label className="block text-sm font-medium">
                    Current Security Tool Spend (optional)
                  </label>
                  <button
                    className="ml-2 text-gray-400 hover:text-white"
                    onMouseEnter={() => setShowTooltip("tooling")}
                    onMouseLeave={() => setShowTooltip("")}
                  >
                    <HelpCircle className="h-4 w-4" />
                  </button>
                </div>
                {showTooltip === "tooling" && (
                  <div className="absolute z-10 -top-2 left-full ml-2 p-2 bg-gray-800 text-sm text-white rounded-md w-64">
                    Sum of SIEM, logging, compliance, and IR tools
                  </div>
                )}
                <input
                  type="number"
                  min="0"
                  value={roiInputs.currentTooling}
                  onChange={(e) => setRoiInputs({ ...roiInputs, currentTooling: e.target.value })}
                  className="w-full px-4 py-2 bg-black border border-white/10 rounded-md 
                  focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="e.g. $2500"
                />
              </div>

              {/* Plan Selection */}
              <div className="pt-4 border-t border-white/10">
                <label className="block text-sm font-medium mb-3">
                  Compare with Plan
                </label>
                <div className="flex gap-4">
                  {["sprout", "branch", "canopy"].map((plan) => (
                    <button
                      key={plan}
                      onClick={() => setSelectedPlan(plan as PlanType)}
                      className={`px-4 py-2 rounded-md transition-colors capitalize
                        ${selectedPlan === plan 
                          ? "bg-emerald-600 text-white" 
                          : "bg-white/5 hover:bg-white/10"}`}
                    >
                      {plan}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={resetCalculator}
                  className="flex items-center px-4 py-2 text-sm font-medium text-white 
                  bg-transparent border border-white/10 rounded-md hover:bg-white/5 transition-colors"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Reset
                </button>
                <button
                  onClick={() => {}}
                  className="flex items-center px-4 py-2 text-sm font-medium text-white 
                  bg-transparent border border-white/10 rounded-md hover:bg-white/5 transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email Results
                </button>
              </div>
            </div>

            {/* Results Column */}
            <div className="bg-emerald-500/5 p-8 rounded-xl border border-emerald-500/20">
              <h3 className="text-xl font-bold mb-6">Estimated Impact</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-400 mb-1">Time Saved Monthly</div>
                  <div className="text-2xl font-bold">
                    {Math.round(results.timeSaved)} hours
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    Automated detection and response
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-400 mb-1">Cost Reduction</div>
                  <div className="text-2xl font-bold">{formatCurrency(results.costSaved)}</div>
                  <div className="text-sm text-gray-400 mt-1">Team efficiency gains</div>
                </div>

                <div>
                  <div className="text-sm text-gray-400 mb-1">Risk Mitigation Value</div>
                  <div className="text-2xl font-bold">{formatCurrency(results.riskReduced)}</div>
                  <div className="text-sm text-gray-400 mt-1">Reduced business impact</div>
                </div>

                <div className="pt-4 border-t border-emerald-500/20">
                  <div className="text-sm text-emerald-500 mb-1">Total Monthly Value</div>
                  <div className="text-3xl font-bold text-emerald-500">
                    {formatCurrency(results.totalSavings)}
                  </div>
                  <div className="text-sm text-emerald-400 mt-1">
                    {results.roi > 0 && 
                      `That's a ${Math.round(results.roi)}x ROI on the ${
                        selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)
                      } plan`
                    }
                  </div>
                </div>

                <div className="pt-4">
                  <div className="text-sm text-gray-400 mb-4">
                    Recommended Plan: {" "}
                    <span className="text-emerald-500 font-medium capitalize">
                      {results.suggestedPlan}
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="/signup"
                      className="flex-1 inline-flex items-center justify-center px-6 py-3 
                      text-base font-medium text-white bg-emerald-600 hover:bg-emerald-500 
                      rounded-md transition-colors"
                    >
                      Start Free
                    </a>
                    <a
                      href="/contact"
                      className="flex-1 inline-flex items-center justify-center px-6 py-3 
                      text-base font-medium text-white bg-transparent border border-white/20 
                      rounded-md hover:bg-white/5 transition-colors"
                    >
                      Talk to Human
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 