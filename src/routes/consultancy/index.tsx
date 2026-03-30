import { createFileRoute, Link } from "@tanstack/react-router";
import { BarChart3, Brain, Cog, LineChart, MonitorSmartphone, Target } from "lucide-react";
import { FadeInView, GradientText } from "#/components/animations";
import { ServiceCard } from "#/components/consultancy/ServiceCard";
import { StatsBar } from "#/components/consultancy/StatsBar";
import { CTASection } from "#/components/shared/CTASection";
import { PageHero } from "#/components/shared/PageHero";
import { SectionHeading } from "#/components/shared/SectionHeading";
import { Button } from "#/components/ui/button";

export const Route = createFileRoute("/consultancy/")({
  component: ConsultancyHome,
  head: () => ({
    meta: [{ title: "Naison Hardy Consultancy — Strategic Business Consulting" }],
  }),
});

const stats = [
  { value: 150, suffix: "+", label: "Clients Served" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 40, suffix: "+", label: "Industries" },
  { value: 12, prefix: "", suffix: "M+", label: "Revenue Generated" },
];

const servicePreview = [
  {
    icon: <MonitorSmartphone className="h-8 w-8" />,
    title: "CRM Solutions",
    description: "Custom CRM implementations and optimizations to streamline your customer relationships.",
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "AI Integration",
    description: "Leverage artificial intelligence to automate processes and gain competitive insights.",
  },
  {
    icon: <Cog className="h-8 w-8" />,
    title: "PM Tools",
    description: "Project management tool selection, implementation, and team training.",
  },
  {
    icon: <LineChart className="h-8 w-8" />,
    title: "Financial Systems",
    description: "ERP and financial software consulting for operational transparency.",
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Business Intelligence",
    description: "Data analytics platforms and dashboards for data-driven decisions.",
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Strategy Consulting",
    description: "Market analysis, growth strategy, and competitive positioning.",
  },
];

const testimonials = [
  {
    quote:
      "Naison Hardy Consultancy transformed our operations. Their CRM implementation increased our sales pipeline visibility by 300%.",
    author: "Sarah K.",
    role: "COO, TechVentures Ltd",
  },
  {
    quote: "The AI integration they delivered cut our processing time in half. Exceptional team with deep technical expertise.",
    author: "James M.",
    role: "Director, DataFlow Systems",
  },
  {
    quote:
      "Their strategic guidance helped us enter three new markets within a year. Highly recommended for growth-focused companies.",
    author: "Priya L.",
    role: "CEO, Meridian Group",
  },
];

function ConsultancyHome() {
  return (
    <>
      <PageHero
        title={
          <GradientText as="h1" className="text-4xl text-foreground sm:text-5xl lg:text-6xl">
            Strategic Consulting for the Modern Enterprise
          </GradientText>
        }
        subtitle="We help businesses harness technology, optimize operations, and accelerate growth through tailored consulting solutions."
        ctaText="Explore Services"
        ctaHref="/consultancy/services"
        showStars
      />

      {/* Image section */}
      <div className="relative h-56 overflow-hidden sm:h-72">
        <img
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80"
          alt="Strategic consulting team"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      {/* What We Do */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <FadeInView direction="up">
            <p className="font-mono text-primary text-sm uppercase tracking-widest">What We Do</p>
            <h2 className="mt-4 font-bold text-3xl text-foreground tracking-tight sm:text-4xl">
              More Than a Consulting Firm
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Naison Hardy Consulting is the technology and strategy arm of the Naison Hardy Group. We help businesses
              across all sectors build the operational infrastructure that drives real, measurable growth — from CRM
              systems and AI automation to project management platforms, ERP solutions, and business intelligence
              dashboards. Every engagement starts with a deep understanding of your business and ends with systems your
              team actually uses.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Stats */}
      <section className="border-border border-t px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <StatsBar stats={stats} />
        </div>
      </section>

      {/* Service Preview */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Our Services" subtitle="End-to-end consulting across technology and strategy" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicePreview.map((service, i) => (
              <ServiceCard key={service.title} {...service} delay={i * 0.1} />
            ))}
          </div>
          <FadeInView delay={0.6} className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/consultancy/services">View All Services</Link>
            </Button>
          </FadeInView>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Client Testimonials" subtitle="What our clients say about working with us" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <FadeInView key={t.author} delay={i * 0.15}>
                <div className="glass flex h-full flex-col justify-between p-6">
                  <p className="text-foreground italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-4 border-border border-t pt-4">
                    <p className="font-semibold text-foreground text-sm">{t.author}</p>
                    <p className="text-muted-foreground text-xs">{t.role}</p>
                  </div>
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
                  <h3 className="font-bold text-foreground text-xl">Building or Acquiring a Business Portfolio?</h3>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                    If you're a founder or senior executive navigating acquisitions, governance, portfolio management,
                    or strategic capital expenditure — Naison Hardy Management provides the hands-on operational
                    expertise you need.
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {[
                      "Acquisitions & post-deal integration",
                      "Portfolio company management",
                      "Board membership & advisory",
                      "Business risk & strategic capex",
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

            {/* Capital pathway */}
            <FadeInView direction="right" delay={0.15}>
              <div className="glass flex h-full flex-col gap-6 border-primary/30 bg-primary/5 p-8">
                <div>
                  <p className="mb-2 font-mono text-primary text-sm uppercase tracking-widest">
                    For Investors & Private Clients
                  </p>
                  <h3 className="font-bold text-foreground text-xl">Seeking Sophisticated Wealth & Capital Advisory?</h3>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                    If you're an individual, family office, or institution looking for disciplined capital management,
                    wealth advisory, or investment strategy — Naison Hardy Capital offers a tailored, confidential
                    approach to long-term value creation.
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {[
                      "Capital management & deployment",
                      "Wealth advisory & portfolio construction",
                      "Risk-adjusted investment strategy",
                      "Confidential client service",
                    ].map((p) => (
                      <li key={p} className="flex items-center gap-2 text-muted-foreground text-sm">
                        <span className="h-1 w-1 bg-primary/60" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button asChild className="mt-auto w-fit">
                  <Link to="/capital">Explore Naison Hardy Capital →</Link>
                </Button>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-border border-t px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "GoHighLevel", label: "Certified Partner" },
              { value: "Notion", label: "Certified Consultant" },
              { value: "ClickUp", label: "Verified Expert" },
              { value: "AI-first", label: "Implementation Approach" },
            ].map((stat, i) => (
              <FadeInView key={stat.label} delay={i * 0.1}>
                <div className="glass p-6">
                  <p className="font-bold text-primary text-xl">{stat.value}</p>
                  <p className="mt-1 text-muted-foreground text-sm">{stat.label}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Transform Your Business?"
        description="Schedule a free consultation and discover how we can help you achieve your goals."
        buttonText="Contact Us"
        buttonHref="/consultancy/contact"
      />
    </>
  );
}
