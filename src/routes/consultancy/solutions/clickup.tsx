import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Clock,
  Cpu,
  Goal,
  Layers,
  ListChecks,
  RefreshCw,
  Sparkles,
  Timer,
  Users,
  Zap,
} from "lucide-react";
import { FadeInView, GradientText } from "#/components/animations";
import { CTASection } from "#/components/shared/CTASection";
import { DeliveryGridIllustration } from "#/components/shared/Illustrations";
import { PageHero } from "#/components/shared/PageHero";
import { SectionHeading } from "#/components/shared/SectionHeading";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";

export const Route = createFileRoute("/consultancy/solutions/clickup")({
  component: ClickUpLandingPage,
  head: () => ({
    meta: [
      { title: "ClickUp Setup & Implementation Service for Agencies — Naison Hardy Consultancy" },
      {
        name: "description",
        content:
          "Expert ClickUp configuration for agencies and teams. Custom workflows, OKR framework, resource management, AI task generation, and dashboards — built and handed over. From $5k.",
      },
      {
        name: "keywords",
        content:
          "ClickUp setup service, ClickUp implementation consultant, ClickUp for agencies UK, ClickUp workspace design, ClickUp workflow setup, ClickUp consultant, project management tool setup",
      },
      { property: "og:title", content: "ClickUp Implementation & Configuration — Naison Hardy Consultancy" },
      {
        property: "og:description",
        content: "We build ClickUp workspaces configured for delivery excellence. Workflows, OKRs, AI, dashboards — done for you.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

const deliverables = [
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Space & Hierarchy Architecture",
    description:
      "A ClickUp structure built around your business units — Spaces, Folders, and Lists configured so every team finds their work instantly. No more searching. No more duplicate tasks.",
  },
  {
    icon: <ListChecks className="h-6 w-6" />,
    title: "Custom Workflows & Statuses",
    description:
      "Department-specific status flows that reflect how work actually moves through your organisation. From content creation to client delivery, every workflow is mapped and automated.",
  },
  {
    icon: <Goal className="h-6 w-6" />,
    title: "Goals & OKR Framework",
    description:
      "ClickUp Goals configured to track quarterly OKRs from company level down to individual tasks. Leadership gets real-time progress without chasing updates.",
  },
  {
    icon: <Timer className="h-6 w-6" />,
    title: "Time Tracking & Resource Management",
    description:
      "Native time tracking configured per project and client. Workload views to prevent burnout and surface capacity gaps before they become delivery problems.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Client Delivery Pipeline",
    description:
      "A structured delivery system for client work — from brief intake through to final delivery and approval — with automated notifications keeping clients and stakeholders informed.",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Dashboards & Reporting",
    description:
      "Custom ClickUp dashboards for leadership, project managers, and individual contributors. The right metrics surfaced to the right people — without a single spreadsheet.",
  },
];

const addOns = [
  {
    title: "Client Portal Integration",
    description: "A client-facing view of project progress, deliverables, and approvals — without exposing internal workspace.",
    detail: "+10h & 2 weeks",
  },
  {
    title: "Agile / Sprint Configuration",
    description: "Full Agile sprint setup with velocity tracking, retrospective templates, and burndown reporting.",
    detail: "+12h & 2 weeks",
  },
];

const aiFeatures = [
  {
    icon: <Bot className="h-5 w-5" />,
    title: "ClickUp AI — Activated & Tuned",
    description:
      "We activate and configure ClickUp AI to auto-summarise tasks, generate subtasks from briefs, and write status updates — saving your team hours every week.",
  },
  {
    icon: <Cpu className="h-5 w-5" />,
    title: "Predictive Project Health",
    description:
      "AI-powered signals that flag at-risk projects before they slip. Identify bottlenecks, resource crunches, and timeline risks weeks in advance.",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Automated Task Generation",
    description:
      "AI that turns client briefs, meeting notes, or email threads into structured ClickUp tasks — categorised, assigned, and due-dated automatically.",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Smart Automation Rules",
    description:
      "AI-assisted automation workflows that adapt to patterns in your data — automatically reassigning tasks, escalating overdue items, and updating stakeholders.",
  },
  {
    icon: <RefreshCw className="h-5 w-5" />,
    title: "Cross-Tool AI Sync",
    description:
      "AI-powered integration layer connecting ClickUp to Slack, HubSpot, or GHL — intelligent bi-directional updates that keep every system in sync without manual data entry.",
  },
];

const supportPackages = [
  {
    name: "Starter Support",
    hours: "10h / month",
    price: "$1,500",
    perMonth: "/mo",
    features: ["Task & status fixes", "Automation adjustments", "Email support", "Monthly check-in call"],
    highlight: false,
  },
  {
    name: "Growth Support",
    hours: "20h / month",
    price: "$2,500",
    perMonth: "/mo",
    features: [
      "Everything in Starter",
      "New workflow builds",
      "Dashboard creation",
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
      "Cross-tool integrations",
      "Weekly strategy call",
    ],
    highlight: false,
  },
];

const outcomes = [
  "Every project visible — from brief to delivery — in one place",
  "Leadership sees project health in real time without chasing teams",
  "Client delivery becomes a repeatable, scalable system",
  "Capacity and workload managed proactively, not reactively",
  "Consistent execution across every team and project type",
];

const ldJson = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ClickUp Workspace Implementation",
  provider: { "@type": "Organization", name: "Naison Hardy Consultancy" },
  description: "Custom ClickUp workspace build and handover for agencies and delivery teams",
  areaServed: "GB",
  offers: { "@type": "Offer", priceRange: "$5000-$15000" },
};

function ClickUpLandingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />

      <PageHero
        title={
          <GradientText as="h1" className="text-4xl text-foreground sm:text-5xl lg:text-6xl">
            ClickUp. Configured
            <br />
            for Delivery Excellence.
          </GradientText>
        }
        subtitle="We design and build a ClickUp workspace that transforms how your team executes — structured, automated, and built for the way your business actually delivers — then hand it over ready to run."
        ctaText="Book a Discovery Call"
        ctaHref="/consultancy/contact"
      />

      {/* Trust Stats */}
      <section className="border-border border-t px-6 py-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: "3–6wk", label: "Typical build time" },
              { value: "100%", label: "Project visibility" },
              { value: "AI", label: "Task generation built-in" },
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
                  ClickUp is powerful. Most teams barely scratch the surface.
                </h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    Teams sign up for ClickUp, spend weeks trying to set it up, and end up with a chaotic mix of
                    half-used features, inconsistent processes, and a tool nobody trusts.
                  </p>
                  <p>
                    Deadlines still get missed. Projects still go over budget. And your PMs still spend more time
                    chasing updates than managing delivery.
                  </p>
                </div>
              </div>
            </FadeInView>
            <FadeInView direction="right">
              <div className="space-y-4">
                <Badge className="text-xs uppercase tracking-widest">The Solution</Badge>
                <h2 className="font-bold text-3xl text-foreground tracking-tight">
                  A ClickUp environment that runs like a machine.
                </h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    We map your delivery process from first contact to final invoice, then architect ClickUp around
                    it — with automations, dashboards, and workflows that make execution effortless.
                  </p>
                  <p>Build. Handover. And flexible support packages to keep it optimised as you scale.</p>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="What We Build" subtitle="A ClickUp workspace built for consistent, scalable delivery" />
          <div className="mb-8 flex justify-center">
            <DeliveryGridIllustration className="h-24 w-24 text-primary" />
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
            subtitle="We embed intelligence into your ClickUp so your team executes faster with less friction"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
          <SectionHeading title="The Outcome" subtitle="A delivery machine that runs with or without you in the room" />
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

      {/* Built For */}
      <section className="border-border border-t px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            title="Built For"
            subtitle="Teams that need consistent delivery without constant management overhead"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Creative & digital agencies",
              "Software development teams",
              "Marketing & content teams",
              "Client services businesses",
              "Operations & product teams",
              "Scaling SMEs with complex delivery",
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
          <SectionHeading title="Investment" subtitle="Transparent pricing for teams committed to delivery excellence" />

          <div className="mb-12 grid gap-6 sm:grid-cols-2">
            <FadeInView direction="up">
              <div className="glass p-8">
                <p className="mb-2 text-muted-foreground text-sm uppercase tracking-widest">One-Time</p>
                <h3 className="mb-1 font-bold text-foreground text-2xl">Build & Handover</h3>
                <div className="my-4 font-bold text-4xl text-primary">$5k – $15k</div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Scoped to your team size and the complexity of your delivery workflows. Includes full ClickUp
                  configuration, automations, dashboards, training, and handover documentation.
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
                  Ongoing operational oversight. We act as your embedded Chief Systems Officer — continuously
                  improving your workflows, dashboards, and AI integrations as your business scales.
                </p>
              </div>
            </FadeInView>
          </div>

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
        heading="Ready to Build Your Delivery Machine?"
        description="Book a free discovery call and we'll map out exactly what a ClickUp build looks like for your team."
        buttonText="Book a Discovery Call"
        buttonHref="/consultancy/contact"
      />
    </>
  );
}
