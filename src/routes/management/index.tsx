import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Briefcase, Building2, DollarSign, Handshake, Shield, TrendingUp } from "lucide-react";
import { FadeInView, GradientText } from "#/components/animations";
import { PortfolioSlider } from "#/components/management/PortfolioSlider";
import { CTASection } from "#/components/shared/CTASection";
import { PageHero } from "#/components/shared/PageHero";
import { SectionHeading } from "#/components/shared/SectionHeading";
import { Button } from "#/components/ui/button";

export const Route = createFileRoute("/management/")({
  component: ManagementHome,
  head: () => ({
    meta: [{ title: "Naison Hardy Management — Acquisitions, Portfolio & Business Leadership" }],
  }),
});

const portfolioCompanies = [
  {
    name: "Aura Animalia",
    type: "Owned" as const,
    description:
      "An online consumer pet store retailer offering a curated range of products for pet owners. Fully owned and operated under the Naison Hardy Management umbrella.",
    tags: ["E-Commerce", "Consumer Retail", "Pets"],
    url: "https://auraanimalia.com",
    href: "/management/aura-animalia",
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "G&R Plastics",
    type: "Managed" as const,
    description:
      "A rigid packaging company specialising in polyethylene products. Operating on a B2B model, G&R Plastics serves business clients with no direct interaction with end consumers.",
    tags: ["Manufacturing", "B2B", "Packaging", "Industrial"],
    href: "/management/g-and-r-plastics",
    image:
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Edithora Experience",
    type: "Managed" as const,
    description:
      "An online consumer luxury goods retailer delivering premium products and a refined shopping experience to discerning customers worldwide.",
    tags: ["E-Commerce", "Luxury", "Consumer Retail"],
    url: "https://edithora.shop",
    href: "/management/edithora-experience",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=900&q=80",
  },
];

const serviceHighlights = [
  {
    icon: <Briefcase className="h-6 w-6 text-primary" />,
    title: "Acquisitions Management",
    desc: "End-to-end acquisition advisory — from identifying targets to deal execution and post-acquisition integration.",
  },
  {
    icon: <Building2 className="h-6 w-6 text-primary" />,
    title: "Portfolio Company Management",
    desc: "Active, founder-led operational oversight of owned and managed businesses across diverse sectors.",
  },
  {
    icon: <Handshake className="h-6 w-6 text-primary" />,
    title: "Active Partnerships",
    desc: "Strategic partnerships where the founder takes a hands-on role in governance and commercial direction.",
  },
  {
    icon: <Award className="h-6 w-6 text-primary" />,
    title: "Board Membership & Advisory",
    desc: "Governance and fiduciary expertise as a non-executive director on the boards of select businesses.",
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "Business Risk Management",
    desc: "Enterprise risk frameworks that protect portfolio companies from operational, financial, and regulatory exposure.",
  },
  {
    icon: <DollarSign className="h-6 w-6 text-primary" />,
    title: "Strategic Capital Expenditure",
    desc: "Disciplined capital allocation to maximise return on every investment decision across the portfolio.",
  },
];

function ManagementHome() {
  return (
    <>
      {/* Hero */}
      <PageHero
        title={
          <GradientText as="h1" className="text-4xl text-foreground sm:text-5xl lg:text-6xl">
            Acquisitions. Management. Growth.
          </GradientText>
        }
        subtitle="Naison Hardy Management oversees a portfolio of owned and managed businesses, active partnerships, and board-level engagements — driven by the founder's direct involvement at every stage."
        ctaText="View Our Portfolio"
        ctaHref="/management/portfolio"
        showStars
      />

      {/* Image section */}
      <div className="relative h-56 overflow-hidden sm:h-72">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
          alt="Corporate leadership"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      {/* Who We Are */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <FadeInView direction="up">
            <p className="font-mono text-primary text-sm uppercase tracking-widest">What We Do</p>
            <h2 className="mt-4 font-bold text-3xl text-foreground tracking-tight sm:text-4xl">
              More Than an Investment Firm
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Naison Hardy Management is the founder's operating vehicle for acquiring, managing, and growing businesses.
              This includes companies we own outright, businesses we actively manage, partnerships where the founder
              plays a direct strategic role, and boards on which he sits. Every engagement is hands-on — because the
              quality of management is what separates good businesses from great ones.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Our Capabilities"
            subtitle="From acquisitions through governance — active management across the full business lifecycle"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceHighlights.map((item, i) => (
              <FadeInView key={item.title} delay={i * 0.1} direction="up">
                <div className="glass flex h-full flex-col gap-4 p-6">
                  <div className="flex items-center gap-3">
                    <div className="shrink-0 rounded-sm bg-primary/10 p-2">{item.icon}</div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeInView>
            ))}
          </div>
          <FadeInView delay={0.6} className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/management/services">View All Services</Link>
            </Button>
          </FadeInView>
        </div>
      </section>

      {/* Portfolio Slider */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Our Portfolio" subtitle="Businesses owned and managed by the founder" />
          <PortfolioSlider companies={portfolioCompanies} />
          <FadeInView delay={0.4} className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/management/portfolio">View Full Portfolio</Link>
            </Button>
          </FadeInView>
        </div>
      </section>

      {/* Who This Is For — Dual CTA */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <GradientText as="h2" className="font-bold text-3xl tracking-tight sm:text-4xl">
              Two Pathways. One Group.
            </GradientText>
            <p className="mt-4 text-lg text-muted-foreground">
              Depending on what you need, we point you to the right division within the Naison Hardy Group.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* CTA 1 — Consulting */}
            <FadeInView direction="left">
              <div className="glass flex h-full flex-col gap-6 border-white/10 p-8">
                <div>
                  <p className="mb-2 font-mono text-muted-foreground text-sm uppercase tracking-widest">
                    For Businesses
                  </p>
                  <h3 className="font-bold text-foreground text-xl">
                    Need to Build or Optimise Your Tech Stack?
                  </h3>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                    If you're a business or team that needs help implementing CRM systems, ERP platforms, AI
                    tools, project management workflows, or any technology that runs your operations —
                    Naison Hardy Consulting is built for you. We design and deploy the digital infrastructure
                    that modern businesses run on.
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {["CRM & ERP implementation", "AI & automation integration", "Project management tools", "Business intelligence & reporting"].map(
                      (p) => (
                        <li key={p} className="flex items-center gap-2 text-muted-foreground text-sm">
                          <span className="h-1 w-1 bg-muted-foreground/50" />
                          {p}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
                <Button asChild variant="outline" className="mt-auto w-fit">
                  <Link to="/consultancy">Explore Naison Hardy Consulting →</Link>
                </Button>
              </div>
            </FadeInView>

            {/* CTA 2 — Management */}
            <FadeInView direction="right" delay={0.15}>
              <div className="glass flex h-full flex-col gap-6 border-primary/30 bg-primary/5 p-8">
                <div>
                  <p className="mb-2 font-mono text-primary text-sm uppercase tracking-widest">
                    For Founders & Executives
                  </p>
                  <h3 className="font-bold text-foreground text-xl">
                    Building a Business Portfolio or Navigating Complex Growth?
                  </h3>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                    If you're a founder, CEO, or senior executive looking for active guidance on acquisitions,
                    business management, risk, strategic capital expenditure, corporate governance, or building
                    a multi-business portfolio — Naison Hardy Management is where you need to be.
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {[
                      "Acquisitions management & due diligence",
                      "Business portfolio building",
                      "Corporate governance & board advisory",
                      "Risk management & strategic capex",
                    ].map((p) => (
                      <li key={p} className="flex items-center gap-2 text-muted-foreground text-sm">
                        <span className="h-1 w-1 bg-primary/60" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button asChild className="mt-auto w-fit">
                  <Link to="/management/contact">Start a Conversation →</Link>
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
              { value: "3+", label: "Portfolio Companies" },
              { value: "2", label: "Business Categories" },
              { value: "B2B & B2C", label: "Market Coverage" },
              { value: "Active", label: "Founder Involvement" },
            ].map((stat, i) => (
              <FadeInView key={stat.label} delay={i * 0.1}>
                <div className="glass p-6">
                  <p className="font-bold text-3xl text-primary">{stat.value}</p>
                  <p className="mt-1 text-muted-foreground text-sm">{stat.label}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Explore What's Possible?"
        description="Whether you're considering a partnership, acquisition, or need an experienced operator in your corner — let's talk."
        buttonText="Get in Touch"
        buttonHref="/management/contact"
      />
    </>
  );
}
