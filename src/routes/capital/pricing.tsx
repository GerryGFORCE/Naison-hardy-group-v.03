import { createFileRoute } from "@tanstack/react-router";
import { FadeInView } from "#/components/animations";
import { CTASection } from "#/components/shared/CTASection";
import { GlassCard } from "#/components/shared/GlassCard";
import { PageHero } from "#/components/shared/PageHero";
import { SectionHeading } from "#/components/shared/SectionHeading";
import { Badge } from "#/components/ui/badge";

export const Route = createFileRoute("/capital/pricing")({
  component: CapitalPricing,
  head: () => ({
    meta: [{ title: "Pricing — Naison Hardy Capital" }],
  }),
});

const tiers = [
  {
    name: "Strategic Capital Advisory",
    type: "Retainer",
    price: "$3,000 – $6,000 / month",
    badge: "Monthly Retainer",
    description:
      "For founders and business owners seeking a long-term capital strategy partner — from early positioning through to a successful raise.",
    includes: [
      "Monthly strategy sessions with your lead advisor",
      "Pitch deck review and narrative development",
      "Curated investor target list",
      "Capital readiness assessment",
      "Ongoing deal pipeline commentary",
    ],
  },
  {
    name: "Deal Advisory",
    type: "Project",
    price: "$5,000 – $25,000 one-time",
    badge: "Project Based",
    description:
      "Focused support for a specific raise, transaction, or capital event. Scoped to your deal and delivered with precision.",
    includes: [
      "Due diligence preparation and data room build",
      "Term sheet review and negotiation support",
      "Capital structure modelling",
      "Investor Q&A preparation",
      "Post-raise transition guidance",
    ],
  },
];

const faqs = [
  {
    q: "Do you deploy capital directly?",
    a: "No. Naison Hardy Capital is an advisory firm. We do not deploy, manage, or custodise client funds. We help you navigate capital markets, connect with the right investors, and prepare for successful raises — but we do not act as a fund or investment manager.",
  },
  {
    q: "Who is this service for?",
    a: "Our capital advisory services are designed for founders, owner-operators, and leadership teams at growth-stage businesses who are preparing for or actively pursuing a fundraise, strategic investment, or capital restructure. We work with companies at pre-seed through to Series B and beyond.",
  },
  {
    q: "How do you charge for introductions?",
    a: "Introductions are part of our advisory engagement — they are not charged separately. We do not accept finder's fees or third-party commissions from investors. Our only compensation is the advisory fee agreed with you, ensuring our incentives remain fully aligned.",
  },
  {
    q: "What is the typical engagement timeline?",
    a: "Retainer engagements run month-to-month with a recommended minimum of three months for meaningful strategy work. Project-based deal advisory typically spans four to twelve weeks depending on the complexity of the transaction and the state of your materials at the outset.",
  },
];

function CapitalPricing() {
  return (
    <>
      <PageHero
        title={<span className="text-foreground">Capital Advisory — Investment Built Around Your Goals</span>}
        subtitle="Transparent pricing for founders and business owners seeking serious capital strategy."
      />

      {/* Disclaimer */}
      <section className="px-6 pb-4">
        <div className="mx-auto max-w-4xl">
          <FadeInView>
            <div className="glass rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-6">
              <p className="text-center text-sm text-yellow-200/80 leading-relaxed">
                <span className="font-semibold text-yellow-300">Important Notice: </span>
                Naison Hardy Capital provides advisory and information services only. Nothing here constitutes financial advice or an offer
                to invest. All engagements are subject to our standard terms and a confidential discovery session.
              </p>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Advisory Services" subtitle="Two engagement models designed to meet you where you are." />
          <div className="grid gap-8 lg:grid-cols-2">
            {tiers.map((tier, i) => (
              <FadeInView key={tier.name} delay={i * 0.15}>
                <div className="glass flex h-full flex-col rounded-lg border border-white/10 p-8">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <h3 className="font-semibold text-foreground text-xl">{tier.name}</h3>
                    <Badge variant="secondary" className="shrink-0">
                      {tier.badge}
                    </Badge>
                  </div>
                  <p className="mb-2 font-bold text-2xl text-primary">{tier.price}</p>
                  <p className="mb-6 text-muted-foreground text-sm leading-relaxed">{tier.description}</p>
                  <div className="mt-auto">
                    <p className="mb-3 font-medium text-foreground text-sm">Includes:</p>
                    <ul className="space-y-2">
                      {tier.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <span className="mt-1.5 h-1 w-1 shrink-0 bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Due Diligence Fee */}
      <section className="border-border border-t px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <FadeInView>
            <GlassCard title="Onboarding & Due Diligence Assessment">
              <div className="space-y-4">
                <div className="flex items-baseline gap-3">
                  <span className="font-bold text-3xl text-primary">$1,500</span>
                  <span className="text-muted-foreground text-sm">one-time assessment fee</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  All new engagements begin with a structured due diligence and onboarding assessment. This allows us to understand your
                  business, current capital position, and objectives before recommending an advisory structure. The $1,500 assessment fee
                  is fully applied to your retainer if you proceed with an ongoing engagement.
                </p>
                <div className="border-border border-t pt-4">
                  <p className="font-medium text-primary text-sm">
                    All capital engagements begin with a confidential discovery session.
                  </p>
                </div>
              </div>
            </GlassCard>
          </FadeInView>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FadeInView key={faq.q} delay={i * 0.1}>
                <div className="glass rounded-lg border border-white/10 p-6">
                  <h4 className="mb-3 font-semibold text-foreground">{faq.q}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Book a Discovery Call"
        description="Every engagement begins with a confidential conversation. No pressure, no commitment — just clarity."
        buttonText="Book a Discovery Call"
        buttonHref="/capital/contact"
      />
    </>
  );
}
