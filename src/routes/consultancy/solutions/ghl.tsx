import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  Layers,
  MessageSquare,
  Phone,
  RefreshCw,
  Settings,
  Sparkles,
  Zap,
} from "lucide-react";
import { FadeInView, GradientText } from "#/components/animations";
import { AISparkleIllustration, PipelineIllustration } from "#/components/shared/Illustrations";
import { CTASection } from "#/components/shared/CTASection";
import { PageHero } from "#/components/shared/PageHero";
import { SectionHeading } from "#/components/shared/SectionHeading";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";

export const Route = createFileRoute("/consultancy/solutions/ghl")({
  component: GHLLandingPage,
  head: () => ({
    meta: [
      { title: "GoHighLevel CRM Setup & Implementation Service — Naison Hardy Consultancy" },
      {
        name: "description",
        content:
          "Expert GoHighLevel (GHL) implementation for UK businesses. We build custom CRM pipelines, automations, AI lead scoring, and missed call recovery — then hand it over with full training. Setup from $5k.",
      },
      {
        name: "keywords",
        content:
          "GoHighLevel setup service, GHL implementation consultant, GHL CRM agency UK, GoHighLevel automation, GHL pipeline setup, CRM implementation service, GoHighLevel consultant UK",
      },
      { property: "og:title", content: "GoHighLevel CRM Setup & Implementation — Naison Hardy Consultancy" },
      {
        property: "og:description",
        content:
          "We build and hand over fully customised GoHighLevel environments for service businesses. Pipelines, automations, AI — done for you.",
      },
      { property: "og:type", content: "website" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "GoHighLevel CRM Implementation",
          provider: { "@type": "Organization", name: "Naison Hardy Consultancy" },
          description: "Custom GoHighLevel CRM build and handover service for UK service businesses",
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
    title: "Pipeline Architecture",
    description:
      "Custom-built sales stages mapped to your exact sales motion. From Lead → Discovery → Proposal → Closed Won — every step tracked, visible, and accountable.",
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Unified Communication",
    description:
      "Email, SMS, and Social DM streams consolidated into a single inbox. No more context-switching. Every conversation logged against the right contact.",
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Calendar Engineering",
    description:
      "Automated booking flows with pre-call qualification forms. Prospects self-qualify, book, and receive tailored confirmation sequences — all without a human in the loop.",
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: '"Missed Call Text Back" & Reactivation',
    description:
      "Quick-win automations that capture lost revenue immediately. Every missed call triggers an SMS. Dormant leads get re-engaged automatically.",
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Contracting Automation",
    description:
      "Proposals and contracts sent, signed, and filed natively inside GHL. Close deals faster with zero friction between agreement and signature.",
  },
];

const addOns = [
  {
    icon: <Settings className="h-5 w-5" />,
    title: "Onboarding Automation",
    description: "Automated client onboarding sequence integrated with your PM tool.",
    detail: "+10h & 2 weeks",
  },
  {
    icon: <RefreshCw className="h-5 w-5" />,
    title: "QuickBooks Invoicing via n8n",
    description: "Automated invoicing pipeline connecting GHL to QuickBooks through n8n workflows.",
    detail: "+20h & 1 month",
  },
];

const aiFeatures = [
  {
    icon: <Bot className="h-5 w-5" />,
    title: "AI-Powered Lead Scoring",
    description: "Machine learning models that rank and prioritise leads based on engagement signals and behavioural data.",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Conversational AI Assistants",
    description: "AI chatbots and SMS agents that qualify leads, answer FAQs, and book appointments 24/7 — inside GHL.",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Intelligent Follow-Up Sequences",
    description: "AI-written, personalised follow-up messages triggered by lead behaviour — so the right message lands at the right moment.",
  },
  {
    icon: <Bot className="h-5 w-5" />,
    title: "Sentiment & Intent Analysis",
    description: "Automated tagging of conversations based on sentiment, ensuring your team focuses on the hottest opportunities first.",
  },
];

const supportPackages = [
  {
    name: "Starter Support",
    hours: "10h / month",
    price: "$1,500",
    perMonth: "/mo",
    features: ["Bug fixes & quick tweaks", "Workflow adjustments", "Email support", "Monthly check-in call"],
    highlight: false,
  },
  {
    name: "Growth Support",
    hours: "20h / month",
    price: "$2,500",
    perMonth: "/mo",
    features: [
      "Everything in Starter",
      "New automation builds",
      "Integration support",
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
      "Custom reporting",
      "Weekly strategy call",
    ],
    highlight: false,
  },
];

const outcomes = [
  "100% lead accountability — zero falling through cracks",
  "Single source of truth for all revenue activity",
  "Automated follow-up running 24/7 without headcount",
  "Deals closed faster with built-in contracting",
  "Full visibility into pipeline health at a glance",
];

function GHLLandingPage() {
  return (
    <>
      <PageHero
        title={
          <GradientText as="h1" className="text-4xl text-foreground sm:text-5xl lg:text-6xl">
            CRM Excellence.
            <br />
            Built on GoHighLevel.
          </GradientText>
        }
        subtitle="We build and hand over a fully customised GHL environment that turns your CRM from a contact list into your most powerful revenue engine — then support you as you scale."
        ctaText="Book a Discovery Call"
        ctaHref="/consultancy/contact"
      />

      {/* Trust stats */}
      <section className="border-border border-t px-6 py-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: "100%", label: "Lead accountability" },
              { value: "3–6wk", label: "Typical build time" },
              { value: "24/7", label: "Automations running" },
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
                  Leads fall through cracks. Revenue goes missing.
                </h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    Most businesses using GHL are only scratching the surface. Follow-ups are manual and inconsistent.
                    Sales data is buried or invisible. Every rep works differently, and nobody knows which leads are hot.
                  </p>
                  <p>
                    The result? Real revenue slipping through the gaps — every single week.
                  </p>
                </div>
              </div>
            </FadeInView>
            <FadeInView direction="right">
              <div className="space-y-4">
                <Badge className="text-xs uppercase tracking-widest">The Solution</Badge>
                <h2 className="font-bold text-3xl text-foreground tracking-tight">
                  A GHL environment built around your strategy.
                </h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    We start with a strategic deep-dive into your sales process, then build a GHL environment
                    architected specifically for how your business closes deals.
                  </p>
                  <p>
                    Build. Handover. Grow. And if you need ongoing support, our flexible packages have you covered.
                  </p>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="What We Build" subtitle="Every deliverable is designed to eliminate manual work and surface revenue" />
          <div className="mb-8 flex justify-center">
            <PipelineIllustration className="h-24 w-24 text-primary" />
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
                    <div className="mt-0.5 shrink-0 text-primary">{addon.icon}</div>
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
            subtitle="We don't just build your GHL — we embed intelligence into it"
          />
          <div className="mb-8 flex justify-center">
            <AISparkleIllustration className="h-24 w-24 text-primary" />
          </div>
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
          <SectionHeading title="The Outcome" subtitle="A centralised Source of Truth for revenue" />
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
          <SectionHeading title="Built For" subtitle="Service businesses ready to stop losing revenue to manual processes" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Agencies & consultancies using GHL",
              "Coaches & course creators",
              "Mortgage & finance brokers",
              "Real estate agencies",
              "Recruitment firms",
              "B2B service businesses",
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
          <SectionHeading title="Investment" subtitle="Transparent pricing built around serious growth" />

          {/* Setup + Retainer */}
          <div className="mb-12 grid gap-6 sm:grid-cols-2">
            <FadeInView direction="up">
              <div className="glass p-8">
                <p className="mb-2 text-muted-foreground text-sm uppercase tracking-widest">One-Time</p>
                <h3 className="mb-1 font-bold text-foreground text-2xl">Build & Handover</h3>
                <div className="my-4 font-bold text-4xl text-primary">
                  $5k – $15k
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Scoped to your business complexity. Covers full GHL configuration, automation builds, integrations,
                  training, and handover documentation. Priced to filter serious clients and cover our costs.
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
                  Ongoing strategic oversight. We act as your embedded Chief Sales Officer — reviewing pipeline health,
                  optimising automations, and driving revenue strategy every month.
                </p>
              </div>
            </FadeInView>
          </div>

          {/* Support Packages */}
          <h3 className="mb-6 text-center font-semibold text-foreground text-xl">Support Packages</h3>
          <div className="grid gap-6 sm:grid-cols-3">
            {supportPackages.map((pkg, i) => (
              <FadeInView key={pkg.name} delay={i * 0.1} direction="up">
                <div
                  className={`glass flex h-full flex-col p-6 ${pkg.highlight ? "ring-1 ring-primary" : ""}`}
                >
                  {pkg.highlight && (
                    <Badge className="mb-4 w-fit text-xs uppercase tracking-widest">Most Popular</Badge>
                  )}
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
        heading="Ready to Stop Losing Leads?"
        description="Book a free discovery call and we'll map out exactly what a GHL build looks like for your business."
        buttonText="Book a Discovery Call"
        buttonHref="/consultancy/contact"
      />
    </>
  );
}
