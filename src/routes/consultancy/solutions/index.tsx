import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bot, CheckCircle2, MonitorSmartphone, Settings, Sparkles } from "lucide-react";
import { FadeInView, GradientText } from "#/components/animations";
import { CTASection } from "#/components/shared/CTASection";
import { PageHero } from "#/components/shared/PageHero";
import { SectionHeading } from "#/components/shared/SectionHeading";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";

export const Route = createFileRoute("/consultancy/solutions/")({
  component: SolutionsHub,
  head: () => ({
    meta: [
      { title: "Tech Stack Solutions — GoHighLevel, Notion, ClickUp & PM Tools | Naison Hardy Consultancy" },
      {
        name: "description",
        content:
          "Expert implementation of GoHighLevel CRM, Notion, ClickUp, and project management tools for UK businesses. Build & handover from $5k. AI integration included. Fractional CSO retainer from $2k/mo.",
      },
      {
        name: "keywords",
        content:
          "GoHighLevel consultant UK, Notion workspace setup, ClickUp implementation, project management tool setup, CRM implementation service, tech stack consultant UK, AI integration consultant",
      },
      { property: "og:title", content: "Tech Stack Solutions — Naison Hardy Consultancy" },
      {
        property: "og:description",
        content:
          "We build GoHighLevel, Notion, ClickUp, and PM tool environments for growing businesses — then hand them over with full training and support.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

const solutions = [
  {
    href: "/consultancy/solutions/ghl",
    badge: "CRM Excellence",
    title: "GoHighLevel (GHL)",
    description:
      "A fully customised GHL environment that turns your CRM into a revenue engine. Pipelines, automations, missed-call recovery, contracting — all built, handed over, and supported.",
    highlights: [
      "Custom pipeline architecture",
      "Unified Email, SMS & Social DM",
      "Missed Call Text Back automation",
      "Contracting built natively in GHL",
      "AI lead scoring & conversational agents",
    ],
    cta: "Explore GHL Solutions",
  },
  {
    href: "/consultancy/solutions/notion",
    badge: "Knowledge Operations",
    title: "Notion",
    description:
      "A Notion workspace that becomes your company's operating system. Relational databases, knowledge base, project tracking, and lightweight CRM — structured for adoption.",
    highlights: [
      "Workspace & database architecture",
      "Company wiki & SOP library",
      "Client & project pipeline",
      "Cross-tool integration & automation",
      "AI-powered knowledge retrieval",
    ],
    cta: "Explore Notion Solutions",
  },
  {
    href: "/consultancy/solutions/clickup",
    badge: "Delivery Excellence",
    title: "ClickUp",
    description:
      "A ClickUp environment configured for consistent, scalable delivery. Workflows, OKRs, resource management, client pipelines, and dashboards — built around how you actually work.",
    highlights: [
      "Space & hierarchy architecture",
      "Custom status workflows per department",
      "Goals & OKR framework",
      "Workload & resource management",
      "AI task generation & predictive health",
    ],
    cta: "Explore ClickUp Solutions",
  },
  {
    href: "/consultancy/solutions/pm-tools",
    badge: "Platform Agnostic",
    title: "Project Management Tools",
    description:
      "Not sure which PM tool fits your business? We assess, select, and implement the right platform from the ground up — then build the workflows and AI integrations that make it work.",
    highlights: [
      "Asana, Monday.com, Jira, Linear & more",
      "Process-first tool selection",
      "Full workflow architecture",
      "Cross-tool migration support",
      "AI automation across your PM stack",
    ],
    cta: "Explore PM Tool Solutions",
  },
];

const whyUs = [
  {
    icon: <MonitorSmartphone className="h-6 w-6" />,
    title: "Build & Handover",
    description:
      "We build your system completely — then hand it over with full documentation and training. You own it, you understand it, and your team can run it independently.",
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: "AI-First by Default",
    description:
      "Every system we build has AI integration embedded from day one — not bolted on as an afterthought. Intelligent automation is a standard, not an upgrade.",
  },
  {
    icon: <Settings className="h-6 w-6" />,
    title: "Flexible Support",
    description:
      "After handover, we offer three support tiers — 10, 20, or 30 hours per month — so we're available for quick fixes, new builds, or ongoing strategic oversight.",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Strategy First",
    description:
      "We never touch a tool before we understand your business. Every build starts with a strategic session to map your workflows, bottlenecks, and goals.",
  },
];

const pricingSummary = [
  { label: "Build & Handover (One-Time)", value: "$5k – $15k" },
  { label: "Fractional CSO Retainer", value: "$2k – $5k/mo" },
  { label: "Starter Support (10h/mo)", value: "$1,500/mo" },
  { label: "Growth Support (20h/mo)", value: "$2,500/mo" },
  { label: "Scale Support (30h/mo)", value: "$3,500/mo" },
];

function SolutionsHub() {
  return (
    <>
      <PageHero
        title={
          <GradientText as="h1" className="text-4xl text-foreground sm:text-5xl lg:text-6xl">
            Tech Stack Solutions
            <br />
            for Growing Businesses
          </GradientText>
        }
        subtitle="We build, configure, and hand over the operational systems that make your business run — CRM, knowledge management, project delivery, and AI integration. Choose your platform."
        ctaText="Explore Solutions"
        ctaHref="#solutions"
      />

      {/* Solutions Grid */}
      <section id="solutions" className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Our Solutions" subtitle="Four specialised service lines. One consistent approach." />
          <div className="grid gap-8 lg:grid-cols-2">
            {solutions.map((solution, i) => (
              <FadeInView key={solution.title} delay={i * 0.1} direction="up">
                <div className="glass flex h-full flex-col p-8">
                  <Badge variant="secondary" className="mb-4 w-fit text-xs uppercase tracking-widest">
                    {solution.badge}
                  </Badge>
                  <h3 className="mb-3 font-bold text-foreground text-2xl">{solution.title}</h3>
                  <p className="mb-6 text-muted-foreground leading-relaxed">{solution.description}</p>
                  <ul className="mb-8 flex-1 space-y-2">
                    {solution.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link to={solution.href}>
                      {solution.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Why Naison Hardy Consultancy" subtitle="The principles behind every system we build" />
          <div className="grid gap-6 sm:grid-cols-2">
            {whyUs.map((item, i) => (
              <FadeInView key={item.title} delay={i * 0.1} direction="up">
                <div className="glass flex gap-4 p-6">
                  <div className="mt-0.5 shrink-0 text-primary">{item.icon}</div>
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Summary */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading title="Pricing at a Glance" subtitle="Consistent pricing across all our solution lines" />
          <div className="space-y-3">
            {pricingSummary.map((item, i) => (
              <FadeInView key={item.label} delay={i * 0.08}>
                <div className="glass flex items-center justify-between px-6 py-4">
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="font-bold text-primary">{item.value}</span>
                </div>
              </FadeInView>
            ))}
          </div>
          <FadeInView delay={0.4} className="mt-8 text-center">
            <p className="text-muted-foreground text-sm">
              All engagements scoped to your business. Exact pricing confirmed after a free discovery call.
            </p>
          </FadeInView>
        </div>
      </section>

      <CTASection
        heading="Not Sure Where to Start?"
        description="Book a free discovery call and we'll help you identify the right tool, the right build, and the right support model for your business."
        buttonText="Book a Free Discovery Call"
        buttonHref="/consultancy/contact"
      />
    </>
  );
}
