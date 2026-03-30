import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  BookOpen,
  CheckCircle2,
  Clock,
  Database,
  GitBranch,
  Layers,
  Link2,
  Search,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { FadeInView, GradientText } from "#/components/animations";
import { DatabaseIllustration } from "#/components/shared/Illustrations";
import { CTASection } from "#/components/shared/CTASection";
import { PageHero } from "#/components/shared/PageHero";
import { SectionHeading } from "#/components/shared/SectionHeading";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";

export const Route = createFileRoute("/consultancy/solutions/notion")({
  component: NotionLandingPage,
  head: () => ({
    meta: [
      { title: "Notion Workspace Setup & Implementation Service — Naison Hardy Consultancy" },
      {
        name: "description",
        content:
          "Professional Notion workspace design for businesses. Relational databases, company wiki, AI knowledge retrieval, and client CRM — built, trained, and handed over. From $5k.",
      },
      {
        name: "keywords",
        content:
          "Notion workspace setup, Notion consultant UK, Notion for business, Notion implementation service, Notion database design, Notion CRM setup, Notion workspace design",
      },
      { property: "og:title", content: "Notion Workspace Design & Implementation — Naison Hardy Consultancy" },
      {
        property: "og:description",
        content:
          "We build Notion workspaces that become your company's operating system. Databases, wikis, CRM, AI — done for you.",
      },
      { property: "og:type", content: "website" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Notion Workspace Implementation",
          provider: { "@type": "Organization", name: "Naison Hardy Consultancy" },
          description: "Custom Notion workspace build and handover service for UK service businesses",
          areaServed: "GB",
          offers: { "@type": "Offer", priceRange: "$5000-$15000" },
        }),
      },
    ],
  }),
});

const deliverables = [
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Workspace Architecture",
    description:
      "A structured, scalable Notion environment built from the ground up. Clear hierarchy, consistent naming conventions, and permissions scoped to each team — so your workspace stays clean as you grow.",
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Relational Database Design",
    description:
      "Interconnected databases for projects, clients, tasks, and KPIs. Filtered views, rollups, and formulas that surface exactly the right data to the right person at the right time.",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Company Wiki & Knowledge Base",
    description:
      "A structured internal knowledge base with templated SOPs, onboarding docs, and team handbooks. New hires get up to speed fast. Institutional knowledge stops living in people's heads.",
  },
  {
    icon: <GitBranch className="h-6 w-6" />,
    title: "Workflow & Status Tracking",
    description:
      "Custom status workflows per department — from content calendars to client delivery pipelines. Every piece of work has a home, an owner, and a clear next step.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Client & CRM Portal",
    description:
      "A lightweight CRM layer inside Notion. Track client status, deal stages, notes, and follow-ups — linked directly to your project databases for complete context.",
  },
  {
    icon: <Link2 className="h-6 w-6" />,
    title: "Integration & Automation",
    description:
      "Connect Notion to your existing tools via Zapier, Make, or n8n. Automated database entries, status updates, and notifications — so your team spends less time on admin.",
  },
];

const addOns = [
  {
    title: "Client-Facing Portal",
    description: "A Notion portal shared with clients for project updates, file sharing, and collaboration.",
    detail: "+8h & 1.5 weeks",
  },
  {
    title: "OKR & Goal-Tracking System",
    description: "Quarterly OKR framework with rollup metrics and leadership dashboards built inside Notion.",
    detail: "+10h & 2 weeks",
  },
];

const aiFeatures = [
  {
    icon: <Bot className="h-5 w-5" />,
    title: "Notion AI — Configured & Contextualised",
    description:
      "We configure Notion AI prompts and templates tailored to your business context — so your team gets useful outputs, not generic ones.",
  },
  {
    icon: <Search className="h-5 w-5" />,
    title: "AI-Powered Knowledge Retrieval",
    description:
      "Build an AI layer on top of your Notion knowledge base. Ask questions in natural language and surface answers from your internal docs instantly.",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Automated Content Generation",
    description:
      "AI-assisted SOP generation, meeting note summarisation, and auto-population of database fields from unstructured text inputs.",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Intelligent Workflow Triggers",
    description:
      "AI-driven automation rules that detect project status changes and trigger downstream actions — briefing documents, client updates, or resource allocations.",
  },
];

const supportPackages = [
  {
    name: "Starter Support",
    hours: "10h / month",
    price: "$1,500",
    perMonth: "/mo",
    features: ["Page & database fixes", "Template updates", "Email support", "Monthly check-in call"],
    highlight: false,
  },
  {
    name: "Growth Support",
    hours: "20h / month",
    price: "$2,500",
    perMonth: "/mo",
    features: [
      "Everything in Starter",
      "New database builds",
      "Automation setup",
      "Priority response",
      "Bi-weekly strategy call",
    ],
    highlight: true,
  },
  {
    name: "Scale Support",
    hours: "30h / month",
    price: "$3,500",
    perMonth: "/mo",
    features: [
      "Everything in Growth",
      "Dedicated consultant",
      "AI feature development",
      "Team training sessions",
      "Weekly strategy call",
    ],
    highlight: false,
  },
];

const outcomes = [
  "A single workspace that becomes your company's operating system",
  "Zero knowledge silos — everything documented and findable",
  "New hires productive within days, not weeks",
  "Real-time visibility across projects, clients, and KPIs",
  "Automated admin so your team focuses on high-value work",
];

function NotionLandingPage() {
  return (
    <>
      <PageHero
        title={
          <GradientText as="h1" className="text-4xl text-foreground sm:text-5xl lg:text-6xl">
            Notion Workspace
            <br />
            Built to Scale.
          </GradientText>
        }
        subtitle="We design and build a Notion environment that becomes the operating system of your business — then hand it over fully trained, documented, and ready to grow with you."
        ctaText="Book a Discovery Call"
        ctaHref="/consultancy/contact"
      />

      {/* Trust stats */}
      <section className="border-border border-t px-6 py-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: "3–5wk", label: "Typical build time" },
              { value: "100%", label: "Team adoption focus" },
              { value: "AI", label: "Integrated by default" },
              { value: "$5k+", label: "Setup from" },
            ].map((stat, i) => (
              <FadeInView key={stat.label} delay={i * 0.1} direction="up">
                <div className="glass p-5 text-center">
                  <div className="font-bold text-2xl text-primary sm:text-3xl">{stat.value}</div>
                  <p className="mt-1 text-muted-foreground text-xs">{stat.label}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeInView direction="left">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-xs uppercase tracking-widest">
                  The Problem
                </Badge>
                <h2 className="font-bold text-3xl text-foreground tracking-tight">
                  Your Notion is a mess no one uses.
                </h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    Most teams start in Notion full of enthusiasm and end up with a tangled web of duplicated pages,
                    abandoned databases, and docs nobody can find. It becomes a graveyard of good intentions.
                  </p>
                  <p>
                    Knowledge stays locked in individuals. Onboarding is painful. Decisions get lost. And leadership
                    has no visibility into what's actually happening.
                  </p>
                </div>
              </div>
            </FadeInView>
            <FadeInView direction="right">
              <div className="space-y-4">
                <Badge className="text-xs uppercase tracking-widest">The Solution</Badge>
                <h2 className="font-bold text-3xl text-foreground tracking-tight">
                  A Notion workspace architected for how you actually work.
                </h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    We map your workflows, then build a Notion environment with clear structure, smart databases, and
                    automations that keep everything current without manual effort.
                  </p>
                  <p>Build. Handover. And ongoing support packages if you need us as your workspace evolves.</p>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="What We Build" subtitle="A Notion environment that your team will actually use" />
          <div className="mb-8 flex justify-center">
            <DatabaseIllustration className="h-24 w-24 text-primary" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item, i) => (
              <FadeInView key={item.title} delay={i * 0.1} direction="up">
                <div className="glass flex h-full flex-col gap-4 p-6">
                  <div className="text-primary">{item.icon}</div>
                  <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </FadeInView>
            ))}
          </div>

          {/* Add-ons */}
          <div className="mt-12">
            <h3 className="mb-6 font-semibold text-foreground text-xl">Optional Add-Ons</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {addOns.map((addon, i) => (
                <FadeInView key={addon.title} delay={i * 0.1}>
                  <div className="glass flex items-start gap-4 p-5">
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-semibold text-foreground text-sm">{addon.title}</h4>
                        <Badge variant="secondary" className="shrink-0 text-xs">
                          {addon.detail}
                        </Badge>
                      </div>
                      <p className="mt-1 text-muted-foreground text-sm">{addon.description}</p>
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Integration */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="AI Integration"
            subtitle="We transform your Notion workspace into an intelligent knowledge engine"
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {aiFeatures.map((feature, i) => (
              <FadeInView key={feature.title} delay={i * 0.1} direction="up">
                <div className="glass flex gap-4 p-6">
                  <div className="mt-0.5 shrink-0 text-primary">{feature.icon}</div>
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading title="The Outcome" subtitle="Your company's institutional knowledge — organised and alive" />
          <div className="space-y-4">
            {outcomes.map((outcome, i) => (
              <FadeInView key={outcome} delay={i * 0.08} direction="up">
                <div className="glass flex items-center gap-4 p-5">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <p className="font-medium text-foreground">{outcome}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="border-border border-t px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <SectionHeading title="Built For" subtitle="Teams that want their knowledge organised and their operations visible" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Startups building their first OS",
              "Agencies managing multiple clients",
              "Consultancies & professional services",
              "Remote-first teams",
              "Operations & HR teams",
              "Founders & solopreneurs scaling up",
            ].map((audience, i) => (
              <FadeInView key={audience} delay={i * 0.06}>
                <div className="glass flex items-center gap-3 p-4">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-foreground text-sm">{audience}</span>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Investment" subtitle="Transparent pricing for teams serious about operational clarity" />

          {/* Setup + Retainer */}
          <div className="mb-12 grid gap-6 sm:grid-cols-2">
            <FadeInView direction="up">
              <div className="glass p-8">
                <p className="mb-2 text-muted-foreground text-sm uppercase tracking-widest">One-Time</p>
                <h3 className="mb-1 font-bold text-foreground text-2xl">Build & Handover</h3>
                <div className="my-4 font-bold text-4xl text-primary">$5k – $15k</div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Scoped to your team size and complexity. Includes full workspace build, database architecture,
                  automations, team training, and comprehensive documentation.
                </p>
              </div>
            </FadeInView>
            <FadeInView direction="up" delay={0.1}>
              <div className="glass p-8">
                <p className="mb-2 text-muted-foreground text-sm uppercase tracking-widest">Monthly Retainer</p>
                <h3 className="mb-1 font-bold text-foreground text-2xl">Fractional CSO</h3>
                <div className="my-4 font-bold text-4xl text-primary">
                  $2k – $5k
                  <span className="font-normal text-muted-foreground text-lg">/mo</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ongoing strategic partnership. We continuously optimise your workspace, build new systems as your
                  business evolves, and ensure Notion remains your operational backbone.
                </p>
              </div>
            </FadeInView>
          </div>

          {/* Support Packages */}
          <h3 className="mb-6 text-center font-semibold text-foreground text-xl">Support Packages</h3>
          <div className="grid gap-6 sm:grid-cols-3">
            {supportPackages.map((pkg, i) => (
              <FadeInView key={pkg.name} delay={i * 0.1} direction="up">
                <div className={`glass flex h-full flex-col p-6 ${pkg.highlight ? "ring-1 ring-primary" : ""}`}>
                  {pkg.highlight && <Badge className="mb-4 w-fit text-xs uppercase tracking-widest">Most Popular</Badge>}
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Clock className="h-4 w-4" />
                    {pkg.hours}
                  </div>
                  <h4 className="mt-2 font-bold text-foreground text-xl">{pkg.name}</h4>
                  <div className="my-4 font-bold text-3xl text-primary">
                    {pkg.price}
                    <span className="font-normal text-muted-foreground text-base">{pkg.perMonth}</span>
                  </div>
                  <ul className="flex-1 space-y-2">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-6 w-full" variant={pkg.highlight ? "default" : "outline"}>
                    <Link to="/consultancy/contact">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Build Your Company OS?"
        description="Book a free discovery call and we'll outline exactly what a Notion build looks like for your team."
        buttonText="Book a Discovery Call"
        buttonHref="/consultancy/contact"
      />
    </>
  );
}
