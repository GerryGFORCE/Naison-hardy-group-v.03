import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Clock,
  Cpu,
  GitMerge,
  Layers,
  ListChecks,
  Map,
  RefreshCw,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { FadeInView, GradientText } from "#/components/animations";
import { CTASection } from "#/components/shared/CTASection";
import { IntegrationIllustration } from "#/components/shared/Illustrations";
import { PageHero } from "#/components/shared/PageHero";
import { SectionHeading } from "#/components/shared/SectionHeading";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";

export const Route = createFileRoute("/consultancy/solutions/pm-tools")({
  component: PMToolsLandingPage,
  head: () => ({
    meta: [
      { title: "Project Management Tool Setup & Consulting — Asana, Monday, Jira & More | Naison Hardy" },
      {
        name: "description",
        content:
          "Platform-agnostic project management tool consulting. We select, configure, and implement Asana, Monday.com, Jira, Linear, and more — with AI automation built in. Setup from $5k.",
      },
      {
        name: "keywords",
        content:
          "project management tool setup, Asana implementation, Monday.com consultant, Jira setup service, PM tool consultant UK, project management consulting, Asana setup UK, Linear setup service",
      },
      { property: "og:title", content: "Project Management Tool Implementation — Naison Hardy Consultancy" },
      {
        property: "og:description",
        content:
          "We select and implement the right PM tool for your team — Asana, Monday.com, Jira, Linear and more. Process-first, AI-integrated, fully adopted.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

const platforms = [
  { name: "Asana" },
  { name: "Monday.com" },
  { name: "Jira" },
  { name: "Linear" },
  { name: "Basecamp" },
  { name: "Teamwork" },
  { name: "Wrike" },
  { name: "Smartsheet" },
];

const phases = [
  {
    number: "01",
    title: "Discovery & Tool Selection",
    description:
      "We audit your current workflows, team size, delivery complexity, and integration needs — then recommend the PM platform that fits your business today and scales with you tomorrow.",
    icon: <Map className="h-6 w-6" />,
  },
  {
    number: "02",
    title: "Workflow Architecture",
    description:
      "Every project type, department workflow, and approval process mapped and structured in your chosen tool. Consistent, repeatable, and documented.",
    icon: <Layers className="h-6 w-6" />,
  },
  {
    number: "03",
    title: "Automation & Integration",
    description:
      "Status-based automations, recurring task templates, and integrations with your CRM, communication tools, and finance systems — eliminating manual handoffs.",
    icon: <GitMerge className="h-6 w-6" />,
  },
  {
    number: "04",
    title: "Reporting & Visibility",
    description:
      "Custom dashboards for every stakeholder layer — from individual contributors tracking their tasks to leadership monitoring portfolio health at a glance.",
    icon: <BarChart3 className="h-6 w-6" />,
  },
  {
    number: "05",
    title: "Team Adoption & Training",
    description:
      "Structured rollout plan, team training sessions, and a playbook so your team doesn't just get access — they actually use the tool the right way.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    number: "06",
    title: "Handover & Documentation",
    description:
      "Full documentation of your workspace — admin guides, user guides, and SOPs — so your team can maintain and expand the system independently.",
    icon: <ListChecks className="h-6 w-6" />,
  },
];

const addOns = [
  {
    title: "Cross-Tool Migration",
    description: "Full migration from your current PM tool — data, tasks, projects, and history — to your new platform.",
    detail: "+15h & 3 weeks",
  },
  {
    title: "Finance & Invoicing Integration",
    description: "Connect your PM tool to QuickBooks or Xero for automated project-based billing via n8n.",
    detail: "+20h & 1 month",
  },
];

const aiFeatures = [
  {
    icon: <Bot className="h-5 w-5" />,
    title: "AI Task Generation",
    description:
      "Brief your PM tool in natural language. AI converts meeting notes, emails, and briefs into structured tasks with owners, deadlines, and dependencies — automatically.",
  },
  {
    icon: <Cpu className="h-5 w-5" />,
    title: "Predictive Delivery Intelligence",
    description:
      "AI models trained on your project data that forecast delivery risks, resource bottlenecks, and budget overruns — before they become problems.",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Automated Progress Reporting",
    description:
      "AI-generated weekly status reports compiled from your PM tool data and sent to stakeholders automatically — no manual updates required.",
  },
  {
    icon: <RefreshCw className="h-5 w-5" />,
    title: "Intelligent Cross-Tool Sync",
    description:
      "AI-powered middleware connecting your PM tool to your CRM, comms platforms, and finance tools — keeping every system aligned without a human in the loop.",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Smart Workload Balancing",
    description:
      "AI analysis of team capacity versus assigned work — surfacing imbalances and suggesting reallocation before deadlines slip.",
  },
];

const supportPackages = [
  {
    name: "Starter Support",
    hours: "10h / month",
    price: "$1,500",
    perMonth: "/mo",
    features: ["Workflow fixes & tweaks", "Template updates", "Email support", "Monthly check-in call"],
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
      "Tool migration support",
      "Weekly strategy call",
    ],
    highlight: false,
  },
];

const outcomes = [
  "The right tool selected and configured for your exact business model",
  "Every project tracked consistently, regardless of team or client",
  "Leadership visibility without manual status meetings",
  "Seamless handoffs between sales, delivery, and finance",
  "A team that actually adopts and trusts the system",
];

const ldJson = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Project Management Tool Implementation",
  provider: { "@type": "Organization", name: "Naison Hardy Consultancy" },
  description: "Custom ClickUp workspace build and handover for agencies and delivery teams",
  areaServed: "GB",
  offers: { "@type": "Offer", priceRange: "$5000-$15000" },
};

function PMToolsLandingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />

      <PageHero
        title={
          <GradientText as="h1" className="text-4xl text-foreground sm:text-5xl lg:text-6xl">
            Project Management.
            <br />
            Built Around Your Business.
          </GradientText>
        }
        subtitle="Platform-agnostic PM consulting. We select, architect, and implement the right project management tool for your team — then build the workflows, automations, and AI integrations that make it stick."
        ctaText="Book a Discovery Call"
        ctaHref="/consultancy/contact"
      />

      {/* Platforms */}
      <section className="border-border border-t px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-8 text-muted-foreground text-sm uppercase tracking-widest">
            Platform expertise across
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {platforms.map((p, i) => (
              <FadeInView key={p.name} delay={i * 0.05}>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  {p.name}
                </Badge>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="border-border border-t px-6 py-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: "8+", label: "Platforms supported" },
              { value: "6", label: "Phase delivery process" },
              { value: "AI", label: "Automation built-in" },
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
                  The tool isn't the problem. The setup is.
                </h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    Most teams pick a PM tool, dump their tasks into it, and wonder why nothing improves. Projects
                    still slip. Communication still breaks. Leadership still doesn't know what's happening.
                  </p>
                  <p>
                    The tool is only as good as the system behind it. Without intentional architecture, even the
                    best platform becomes a glorified to-do list nobody trusts.
                  </p>
                </div>
              </div>
            </FadeInView>
            <FadeInView direction="right">
              <div className="space-y-4">
                <Badge className="text-xs uppercase tracking-widest">The Solution</Badge>
                <h2 className="font-bold text-3xl text-foreground tracking-tight">
                  A PM system designed for how your business actually runs.
                </h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    We start with your processes, not the platform. Once we understand how work flows through your
                    business, we select and configure the right tool — with automations and AI that make adoption
                    effortless and outcomes measurable.
                  </p>
                  <p>
                    Build. Handover. And ongoing support to evolve the system as you grow.
                  </p>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Our Process" subtitle="Six phases from discovery to a fully adopted PM system" />
          <div className="mb-8 flex justify-center">
            <IntegrationIllustration className="h-28 w-28 text-primary" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {phases.map((phase, i) => (
              <FadeInView key={phase.title} delay={i * 0.1} direction="up">
                <div className="glass flex h-full flex-col gap-4 p-6">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-2xl text-primary">{phase.number}</span>
                    <div className="text-primary">{phase.icon}</div>
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">{phase.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{phase.description}</p>
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
            subtitle="We embed AI across your PM stack to automate the work around the work"
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
          <SectionHeading title="The Outcome" subtitle="A PM system your team trusts, uses, and grows with" />
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
            subtitle="Businesses ready to fix how work gets tracked, managed, and delivered"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Teams outgrowing spreadsheets",
              "Companies switching PM platforms",
              "Businesses with inconsistent delivery",
              "Agencies with multiple client projects",
              "Ops teams needing cross-team visibility",
              "Founders building scalable processes",
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
          <SectionHeading title="Investment" subtitle="Transparent pricing for businesses ready to fix how work gets done" />

          <div className="mb-12 grid gap-6 sm:grid-cols-2">
            <FadeInView direction="up">
              <div className="glass p-8">
                <p className="mb-2 text-muted-foreground text-sm uppercase tracking-widest">One-Time</p>
                <h3 className="mb-1 font-bold text-foreground text-2xl">Build & Handover</h3>
                <div className="my-4 font-bold text-4xl text-primary">$5k – $15k</div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Scoped to team size, number of workflows, and integration complexity. Includes tool selection,
                  full configuration, automations, training, and handover documentation.
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
                  Ongoing operational oversight as your embedded Chief Systems Officer. We evolve your PM environment,
                  build new automations, and ensure your delivery operations stay ahead of your growth.
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
        heading="Ready to Fix How Your Team Delivers?"
        description="Book a free discovery call and we'll identify the right PM platform and build plan for your business."
        buttonText="Book a Discovery Call"
        buttonHref="/consultancy/contact"
      />
    </>
  );
}
