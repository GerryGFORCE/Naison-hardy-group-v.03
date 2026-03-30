import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { FadeInView, GradientText } from "#/components/animations";
import { CTASection } from "#/components/shared/CTASection";
import { PageHero } from "#/components/shared/PageHero";
import { SectionHeading } from "#/components/shared/SectionHeading";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";

export const Route = createFileRoute("/consultancy/pricing")({
  component: ConsultancyPricingPage,
  head: () => ({
    meta: [
      { title: "Pricing — Naison Hardy Consultancy | GHL, Notion, ClickUp & PM Tool Setup" },
      {
        name: "description",
        content:
          "Transparent, fixed pricing for GoHighLevel, Notion, ClickUp, and PM tool implementations. Build & handover from $5k–$15k. Monthly support packages from $1,500/mo.",
      },
    ],
  }),
});

const solutions = [
  {
    label: "CRM Excellence",
    title: "GoHighLevel (GHL)",
    href: "/consultancy/solutions/ghl",
    tags: ["Pipeline Architecture", "Unified Comms", "AI Lead Scoring", "Contracting Automation"],
  },
  {
    label: "Knowledge Operations",
    title: "Notion Workspace",
    href: "/consultancy/solutions/notion",
    tags: ["Relational Databases", "Company Wiki", "AI Knowledge Retrieval", "Client CRM"],
  },
  {
    label: "Delivery Excellence",
    title: "ClickUp",
    href: "/consultancy/solutions/clickup",
    tags: ["Workflow Architecture", "OKR Framework", "Resource Management", "AI Task Generation"],
  },
  {
    label: "Platform Agnostic",
    title: "Project Management Tools",
    href: "/consultancy/solutions/pm-tools",
    tags: ["Tool Selection", "Workflow Architecture", "AI Automation", "Team Adoption"],
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
      "Priority response (4h)",
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

function ConsultancyPricingPage() {
  return (
    <>
      <PageHero
        title={
          <GradientText as="h1" className="text-4xl text-foreground sm:text-5xl lg:text-6xl">
            Clear Pricing.
            <br />
            No Surprises.
          </GradientText>
        }
        subtitle="All our engagements follow the same pricing model: a one-time build fee, an optional retainer, and flexible support packages. Scoped to your business, confirmed in writing before we start."
        ctaText="Book a Free Discovery Call"
        ctaHref="/consultancy/contact"
      />

      {/* Build & Handover */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Build & Handover" subtitle="A complete implementation, fully yours at the end" />
          <div className="mb-8 grid gap-6 sm:grid-cols-2">
            <FadeInView direction="up">
              <div className="glass p-8">
                <p className="mb-2 text-muted-foreground text-sm uppercase tracking-widest">One-Time Fee</p>
                <h3 className="font-bold text-foreground text-2xl">Full Implementation</h3>
                <div className="my-4 font-bold text-5xl text-primary">
                  $5k – $15k
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Scoped to your business complexity, team size, and integration requirements. The exact fee is
                  confirmed in your Statement of Work after a discovery session — no surprises.
                </p>
                <ul className="mt-4 space-y-2">
                  {["Full system configuration", "Custom workflow builds", "AI integrations", "Team training sessions", "Handover documentation"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-muted-foreground text-sm">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInView>
            <FadeInView direction="up" delay={0.1}>
              <div className="glass p-8">
                <p className="mb-2 text-muted-foreground text-sm uppercase tracking-widest">Monthly Retainer</p>
                <h3 className="font-bold text-foreground text-2xl">Fractional CSO</h3>
                <div className="my-4 font-bold text-5xl text-primary">
                  $2k – $5k
                  <span className="font-normal text-muted-foreground text-xl">/mo</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ongoing strategic oversight. We act as your embedded Chief Systems Officer — continuously improving
                  your systems, strategy, and integrations as your business grows.
                </p>
                <ul className="mt-4 space-y-2">
                  {["Monthly strategy sessions", "System optimisation", "New automation builds", "AI development", "Priority response"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-muted-foreground text-sm">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInView>
          </div>

          {/* By Solution */}
          <div className="mt-12">
            <h3 className="mb-6 font-semibold text-foreground text-xl">Applies Across All Our Solutions</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {solutions.map((s, i) => (
                <FadeInView key={s.title} delay={i * 0.1} direction="up">
                  <Link to={s.href} className="glass block p-5 transition-colors hover:bg-white/10">
                    <Badge variant="secondary" className="mb-3 text-xs uppercase tracking-widest">
                      {s.label}
                    </Badge>
                    <h4 className="mb-3 font-semibold text-foreground">{s.title}</h4>
                    <ul className="space-y-1">
                      {s.tags.map((tag) => (
                        <li key={tag} className="text-muted-foreground text-xs">
                          · {tag}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-3 flex items-center gap-1 text-primary text-xs">
                      View solution <ArrowRight className="h-3 w-3" />
                    </p>
                  </Link>
                </FadeInView>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Packages */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Post-Handover Support"
            subtitle="Quick fixes, new builds, and strategic support — on a flexible monthly basis"
          />
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

      {/* FAQ */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading title="Pricing Questions" subtitle="Answered" />
          <div className="space-y-4">
            {[
              {
                q: "Is the build fee fixed or variable?",
                a: "It's scoped and fixed per engagement. After our discovery session, we provide a Statement of Work with a confirmed fixed fee. No hourly billing or scope creep.",
              },
              {
                q: "Do I have to take a retainer after the build?",
                a: "No. The build and handover is a complete, standalone engagement. The retainer and support packages are optional for businesses that want ongoing partnership.",
              },
              {
                q: "What if my project is simpler than $5k?",
                a: "Our minimum engagement is $5k. This ensures we can do the discovery, strategy, and build properly. Clients who invest at this level are serious about getting results.",
              },
              {
                q: "Can I upgrade my support package?",
                a: "Yes. You can upgrade or downgrade with 30 days notice. Unused hours don't roll over but we'll always use the full allocation productively.",
              },
              {
                q: "What's the payment schedule?",
                a: "Setup fees are 50% upfront and 50% on completion. Monthly support packages are invoiced at the start of each month.",
              },
            ].map((item, i) => (
              <FadeInView key={item.q} delay={i * 0.08}>
                <details className="glass group p-5">
                  <summary className="cursor-pointer font-semibold text-foreground list-none">{item.q}</summary>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{item.a}</p>
                </details>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Get a Quote?"
        description="Book a free discovery call. We'll scope your project and give you a fixed price within 48 hours."
        buttonText="Book a Discovery Call"
        buttonHref="/consultancy/contact"
      />
    </>
  );
}
