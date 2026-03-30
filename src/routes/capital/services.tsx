import { createFileRoute } from "@tanstack/react-router";
import { ServicePillar } from "#/components/capital/ServicePillar";
import { CTASection } from "#/components/shared/CTASection";
import { PageHero } from "#/components/shared/PageHero";

export const Route = createFileRoute("/capital/services")({
  component: CapitalServices,
  head: () => ({
    meta: [{ title: "Services — Naison Hardy Capital" }],
  }),
});

const pillars = [
  {
    title: "Capital Management",
    description:
      "Strategic capital allocation and fund management for institutional and private investors. We deploy capital with discipline, targeting risk-adjusted returns across market cycles.",
    features: [
      "Multi-asset fund management",
      "Private equity co-investment",
      "Structured credit solutions",
      "Portfolio construction and rebalancing",
      "Risk analytics and stress testing",
    ],
  },
  {
    title: "Asset & Wealth Management",
    description:
      "Comprehensive wealth advisory services for high-net-worth individuals and families. We take a holistic view of your financial life, aligning every decision with your long-term goals.",
    features: [
      "Bespoke portfolio management",
      "Tax-efficient investment planning",
      "Estate and succession planning",
      "Philanthropic advisory",
      "Family office services",
    ],
  },
  {
    title: "Investment Services",
    description:
      "Institutional-grade investment research, execution, and advisory. We provide the insights and infrastructure that sophisticated investors need to make informed decisions.",
    features: [
      "Investment research and due diligence",
      "Market analysis and macro outlook",
      "Transaction execution and settlement",
      "Regulatory compliance support",
      "Performance reporting and attribution",
    ],
  },
];

function CapitalServices() {
  return (
    <>
      <PageHero
        title={<span className="text-foreground">Our Services</span>}
        subtitle="Three pillars of financial expertise — each designed to serve a distinct set of client needs with institutional-grade rigour."
        showStars
      />

      {/* Image break with overlay quote */}
      <div className="relative h-64 overflow-hidden sm:h-80">
        <img
          src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1600&q=80"
          alt="Financial markets and investment"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="max-w-2xl px-6 text-center font-semibold text-lg text-muted-foreground italic">
            "Every capital allocation decision is underpinned by rigorous research and a clear understanding of the downside."
          </p>
        </div>
      </div>

      <div className="px-6">
        <div className="mx-auto max-w-6xl">
          {pillars.map((pillar, i) => (
            <ServicePillar key={pillar.title} {...pillar} index={i} />
          ))}
        </div>
      </div>

      <CTASection
        heading="Explore How We Can Help"
        description="Every client relationship begins with understanding your unique circumstances and objectives."
        buttonText="Schedule a Consultation"
        buttonHref="/capital/contact"
      />
    </>
  );
}
