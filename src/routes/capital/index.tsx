import { createFileRoute, Link } from "@tanstack/react-router";
import { BarChart2, BookOpen, Building2, DollarSign, Lock, Shield, TrendingUp, Users } from "lucide-react";
import { FadeInView, GradientText, ShimmeringText } from "#/components/animations";
import { CTASection } from "#/components/shared/CTASection";
import { GlassCard } from "#/components/shared/GlassCard";
import { PageHero } from "#/components/shared/PageHero";
import { SectionHeading } from "#/components/shared/SectionHeading";
import { Button } from "#/components/ui/button";

export const Route = createFileRoute("/capital/")({
  component: CapitalHome,
  head: () => ({
    meta: [{ title: "Naison Hardy Capital — Building Wealth, Securing Futures" }],
  }),
});

const trustIndicators = [
  {
    icon: <Shield className="h-8 w-8 text-[#C0C0C0]" />,
    title: "Regulated & Compliant",
    description: "Operating within the highest standards of financial regulation and compliance.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-[#C0C0C0]" />,
    title: "Proven Track Record",
    description: "Consistent returns built on disciplined investment strategies and risk management.",
  },
  {
    icon: <Users className="h-8 w-8 text-[#C0C0C0]" />,
    title: "Client-Centric",
    description: "Tailored financial solutions designed around your unique goals and risk profile.",
  },
];

const serviceHighlights = [
  {
    icon: <DollarSign className="h-6 w-6 text-[#C0C0C0]" />,
    title: "Capital Management",
    desc: "Strategic deployment of capital across asset classes to generate sustainable, risk-adjusted returns.",
  },
  {
    icon: <Users className="h-6 w-6 text-[#C0C0C0]" />,
    title: "Wealth Advisory",
    desc: "Personalised guidance for private clients, families, and family offices focused on long-term wealth preservation.",
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-[#C0C0C0]" />,
    title: "Investment Strategy",
    desc: "Research-backed allocation models that balance growth ambitions with clearly understood downside protection.",
  },
  {
    icon: <BarChart2 className="h-6 w-6 text-[#C0C0C0]" />,
    title: "Portfolio Construction",
    desc: "Diversified portfolio builds aligned to your risk appetite, investment horizon, and financial objectives.",
  },
  {
    icon: <Lock className="h-6 w-6 text-[#C0C0C0]" />,
    title: "Risk Management",
    desc: "Rigorous frameworks identifying, monitoring, and mitigating the financial and market risks that matter most.",
  },
  {
    icon: <BookOpen className="h-6 w-6 text-[#C0C0C0]" />,
    title: "Reporting & Transparency",
    desc: "Clear, regular reporting on portfolio performance so you always know exactly where you stand.",
  },
];

function CapitalHome() {
  return (
    <>
      <PageHero
        title={
          <ShimmeringText as="h1" className="text-4xl sm:text-5xl lg:text-6xl">
            Building Wealth, Securing Futures
          </ShimmeringText>
        }
        subtitle="Naison Hardy Capital provides sophisticated financial services — from capital management to wealth advisory — with a commitment to long-term value creation."
        ctaText="Our Services"
        ctaHref="/capital/services"
        showStars
      />

      {/* Image section */}
      <div className="relative h-56 overflow-hidden sm:h-72">
        <img
          src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=80"
          alt="Capital and wealth management"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      {/* What We Do */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <FadeInView direction="up">
            <p className="font-mono text-[#C0C0C0] text-sm uppercase tracking-widest">What We Do</p>
            <h2 className="mt-4 font-bold text-3xl text-foreground tracking-tight sm:text-4xl">
              More Than an Investment Firm
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Naison Hardy Capital is the financial services division of the Naison Hardy Group. We work with private
              clients, family offices, and institutions seeking sophisticated capital management, wealth advisory, and
              investment solutions tailored to long-term value creation. Our approach is disciplined,
              research-driven, and deeply personalised — because no two financial journeys are the same.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-3">
            {trustIndicators.map((item, i) => (
              <FadeInView key={item.title} delay={i * 0.15} direction="up">
                <GlassCard className="text-center">
                  <div className="flex flex-col items-center gap-4">
                    {item.icon}
                    <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </GlassCard>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Our Capabilities"
            subtitle="Comprehensive financial services across capital, wealth, and investment"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceHighlights.map((item, i) => (
              <FadeInView key={item.title} delay={i * 0.1} direction="up">
                <div className="glass flex h-full flex-col gap-4 p-6">
                  <div className="flex items-center gap-3">
                    <div className="shrink-0 rounded-sm bg-white/5 p-2">{item.icon}</div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeInView>
            ))}
          </div>
          <FadeInView delay={0.6} className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/capital/services">View All Services</Link>
            </Button>
          </FadeInView>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading title="Our Investment Philosophy" subtitle="Principles that guide every decision we make" />
          <FadeInView>
            <div className="glass p-8 sm:p-10">
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  At Naison Hardy Capital, we believe that sustainable wealth creation requires patience, discipline,
                  and a deep understanding of market dynamics. Our approach combines fundamental analysis with a
                  long-term perspective, avoiding short-term speculation in favour of enduring value.
                </p>
                <p>
                  We allocate capital across a diversified range of asset classes and geographies, carefully managing
                  risk while seeking attractive risk-adjusted returns. Every investment decision is underpinned by
                  rigorous research and a clear understanding of the downside.
                </p>
                <div className="grid gap-4 border-border border-t pt-6 sm:grid-cols-3">
                  {[
                    { label: "Preservation", desc: "Capital preservation is the foundation of our strategy." },
                    { label: "Growth", desc: "Disciplined growth through diversified, research-driven allocation." },
                    { label: "Transparency", desc: "Clear reporting and open communication with all stakeholders." },
                  ].map((item) => (
                    <div key={item.label} className="text-center">
                      <h4 className="font-semibold text-[#C0C0C0]">{item.label}</h4>
                      <p className="mt-1 text-muted-foreground text-xs">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-border border-t px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "Long-term", label: "Investment Horizon" },
              { value: "Multi-asset", label: "Portfolio Diversification" },
              { value: "Private", label: "Client Confidentiality" },
              { value: "Research-driven", label: "Every Decision" },
            ].map((stat, i) => (
              <FadeInView key={stat.label} delay={i * 0.1}>
                <div className="glass p-6">
                  <p className="font-bold text-[#C0C0C0] text-xl">{stat.value}</p>
                  <p className="mt-1 text-muted-foreground text-sm">{stat.label}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Two Pathways — cross-subsidiary CTA */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <GradientText as="h2" className="font-bold text-3xl tracking-tight sm:text-4xl">
              Two Pathways. One Group.
            </GradientText>
            <p className="mt-4 text-lg text-muted-foreground">
              Depending on your goals, we connect you with the right division within the Naison Hardy Group.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Management pathway */}
            <FadeInView direction="left">
              <div className="glass flex h-full flex-col gap-6 border-white/10 p-8">
                <div>
                  <p className="mb-2 font-mono text-muted-foreground text-sm uppercase tracking-widest">
                    For Founders & Executives
                  </p>
                  <h3 className="font-bold text-foreground text-xl">Building or Acquiring a Business?</h3>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                    If you're a founder or senior executive navigating acquisitions, portfolio management, governance,
                    or strategic capital expenditure — Naison Hardy Management provides the hands-on operational
                    leadership your businesses need.
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {[
                      "Acquisitions & post-deal integration",
                      "Portfolio company management",
                      "Board membership & governance",
                      "Strategic risk & capex management",
                    ].map((p) => (
                      <li key={p} className="flex items-center gap-2 text-muted-foreground text-sm">
                        <span className="h-1 w-1 bg-muted-foreground/50" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button asChild variant="outline" className="mt-auto w-fit">
                  <Link to="/management">Explore Naison Hardy Management →</Link>
                </Button>
              </div>
            </FadeInView>

            {/* Consulting pathway */}
            <FadeInView direction="right" delay={0.15}>
              <div className="glass flex h-full flex-col gap-6 border-[#C0C0C0]/20 bg-white/5 p-8">
                <div>
                  <p className="mb-2 font-mono text-[#C0C0C0] text-sm uppercase tracking-widest">For Businesses</p>
                  <h3 className="font-bold text-foreground text-xl">Need to Build or Optimise Your Tech Stack?</h3>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                    If your business needs help implementing CRM systems, AI automation, ERP platforms, or project
                    management workflows — Naison Hardy Consulting designs and deploys the digital infrastructure
                    that modern businesses run on.
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {[
                      "CRM & ERP implementation",
                      "AI & automation integration",
                      "Project management tools",
                      "Business intelligence & reporting",
                    ].map((p) => (
                      <li key={p} className="flex items-center gap-2 text-muted-foreground text-sm">
                        <span className="h-1 w-1 bg-[#C0C0C0]/40" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button asChild variant="outline" className="mt-auto w-fit">
                  <Link to="/consultancy">Explore Naison Hardy Consulting →</Link>
                </Button>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Discuss Your Financial Goals?"
        description="Our team is available for a confidential conversation about your investment objectives."
        buttonText="Contact Us"
        buttonHref="/capital/contact"
      />
    </>
  );
}
