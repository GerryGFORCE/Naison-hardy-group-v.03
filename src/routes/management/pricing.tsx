import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, HelpCircle } from "lucide-react";
import { FadeInView, GradientText } from "#/components/animations";
import { CTASection } from "#/components/shared/CTASection";
import { PageHero } from "#/components/shared/PageHero";
import { SectionHeading } from "#/components/shared/SectionHeading";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";

export const Route = createFileRoute("/management/pricing")({
  component: ManagementPricing,
  head: () => ({
    meta: [{ title: "Pricing — Naison Hardy Management" }],
  }),
});

const tiers = [
  {
    name: "Strategic Advisory",
    price: "$2k–$5k",
    period: "/mo retainer",
    badge: "Entry",
    badgeVariant: "outline" as const,
    description: "For business owners who need a thinking partner — board-level insight without full operational involvement.",
    features: [
      "Board-level strategic insight",
      "Monthly strategy sessions",
      "Quarterly business reviews",
      "Email & async advisory access",
      "Founder-led perspective on key decisions",
    ],
    highlight: false,
  },
  {
    name: "Operational Partnership",
    price: "$5k–$10k",
    period: "/mo retainer",
    badge: "Most Popular",
    badgeVariant: "default" as const,
    description: "Active operational involvement for scaling SMEs. We get inside the business — systems, team structure, process design.",
    features: [
      "Everything in Strategic Advisory",
      "Active operational involvement",
      "Systems design and implementation",
      "Team structure and hiring advisory",
      "Process design and optimisation",
      "Weekly check-ins and accountability",
    ],
    highlight: true,
  },
  {
    name: "Full Management Engagement",
    price: "Bespoke",
    period: "pricing",
    badge: "Enterprise",
    badgeVariant: "secondary" as const,
    description: "Where we become embedded in your operations. For portfolio companies and complex turnarounds requiring sustained executive presence.",
    features: [
      "Everything in Operational Partnership",
      "Full operational embeddedness",
      "Executive-level representation",
      "Portfolio company management",
      "Complex turnaround leadership",
      "Board membership consideration",
    ],
    highlight: false,
  },
];

const faqs = [
  {
    q: "What's included in the retainer?",
    a: "Each retainer tier includes defined access levels — from monthly strategy sessions at the Advisory tier through to full operational involvement at the Partnership level. Everything is documented before engagement begins. There are no hidden extras; any scope additions are priced and agreed in writing.",
  },
  {
    q: "Do you work on equity?",
    a: "On a case-by-case basis for Full Management Engagements, we may consider a hybrid structure that includes a performance-based equity component. This is discussed during the discovery process and is never offered as a substitute for retainer — it's an addition that aligns long-term incentives.",
  },
  {
    q: "What's the minimum engagement term?",
    a: "We require a minimum three-month initial term across all tiers. This allows enough time to understand your business properly and deliver meaningful impact. After the initial term, engagements roll monthly with 30 days written notice to exit.",
  },
  {
    q: "Can I upgrade or downgrade?",
    a: "Yes. Engagements can be adjusted at the end of any monthly billing cycle. If your needs grow (or contract), we'll discuss the scope change, update the service agreement, and continue from the next billing date. There are no penalties for moving between tiers.",
  },
];

function ManagementPricing() {
  return (
    <>
      <PageHero
        title={
          <span className="text-foreground">
            Transparent Pricing for{" "}
            <GradientText>Serious Operators</GradientText>
          </span>
        }
        subtitle="One size fits all retainers don't work. We price around the scope of your operation."
        showStars
      />

      {/* Problem / Solution */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <FadeInView direction="up">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Most advisory firms charge a flat fee regardless of what your business actually needs. We don't.
              Every engagement starts with a discovery session to understand the complexity, stage, and goals of
              your operation — then we agree a tier and scope that reflects the real work ahead.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Engagement Tiers" subtitle="Select the level of involvement that fits where you are right now" />
          <div className="grid gap-8 lg:grid-cols-3">
            {tiers.map((tier, i) => (
              <FadeInView key={tier.name} delay={i * 0.1} direction="up">
                <div
                  className={`glass flex h-full flex-col gap-6 p-8 ${
                    tier.highlight ? "border-primary/40 bg-primary/5" : "border-white/10"
                  }`}
                >
                  <div>
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="font-bold text-foreground text-xl">{tier.name}</h3>
                      <Badge variant={tier.badgeVariant}>{tier.badge}</Badge>
                    </div>
                    <div className="mb-4 flex items-baseline gap-1">
                      <span className="font-bold text-3xl text-primary">{tier.price}</span>
                      <span className="text-muted-foreground text-sm">{tier.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{tier.description}</p>
                  </div>
                  <ul className="flex-1 space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant={tier.highlight ? "default" : "outline"} className="w-full">
                    <Link to="/management/contact">
                      {tier.highlight ? "Start a Conversation" : "Book Discovery Call"}
                    </Link>
                  </Button>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding Fee */}
      <section className="border-border border-t px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <FadeInView direction="up">
            <div className="glass border-primary/20 p-8 text-center">
              <p className="mb-2 font-mono text-primary text-sm uppercase tracking-widest">One-Time Fee</p>
              <h3 className="mb-3 font-bold text-foreground text-2xl">Setup & Onboarding — $2,500</h3>
              <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
                All engagements include a one-time setup and onboarding fee of $2,500. This covers the initial
                business deep-dive, onboarding documentation, communication infrastructure, and the first
                structured strategy session. It is billed once at the start of the engagement.
              </p>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Commitment note */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <FadeInView direction="up">
            <div className="flex items-start justify-center gap-3 rounded-lg border border-primary/20 bg-primary/5 p-6">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-left text-muted-foreground text-sm leading-relaxed">
                <span className="font-semibold text-foreground">No surprises policy:</span> All engagements require a
                free discovery session first. Pricing is confirmed in writing before any commitment is made. You will
                never be billed for anything you haven't explicitly agreed to.
              </p>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="Frequently Asked Questions" subtitle="Clarity before commitment" />
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <FadeInView key={faq.q} delay={i * 0.08} direction="up">
                <div className="glass p-6">
                  <div className="mb-3 flex items-start gap-3">
                    <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <h4 className="font-semibold text-foreground">{faq.q}</h4>
                  </div>
                  <p className="pl-8 text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Book a Discovery Call"
        description="Every engagement starts with a free, no-obligation discovery session. Tell us about your business and we'll tell you honestly whether and how we can help."
        buttonText="Book a Discovery Call"
        buttonHref="/management/contact"
      />
    </>
  );
}
