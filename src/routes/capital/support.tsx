import { createFileRoute } from "@tanstack/react-router";
import { LockKeyholeIcon, MessageCircleIcon, ShieldCheckIcon } from "lucide-react";
import { FadeInView } from "#/components/animations";
import { CTASection } from "#/components/shared/CTASection";
import { GlassCard } from "#/components/shared/GlassCard";
import { PageHero } from "#/components/shared/PageHero";
import { SectionHeading } from "#/components/shared/SectionHeading";
import { Badge } from "#/components/ui/badge";

export const Route = createFileRoute("/capital/support")({
  component: CapitalSupport,
  head: () => ({
    meta: [{ title: "Support — Naison Hardy Capital" }],
  }),
});

const supportTiers = [
  {
    icon: <MessageCircleIcon className="h-6 w-6" />,
    name: "Active Advisory Support",
    badge: "Priority",
    description: "For clients on an active retainer engagement who require fast, reliable access to their advisory team.",
    features: [
      "Priority response — same-day reply guaranteed",
      "Dedicated Slack channel with your lead advisor",
      "Emergency escalation pathway",
      "Weekly check-in availability",
      "Proactive deal flow commentary",
    ],
  },
  {
    icon: <ShieldCheckIcon className="h-6 w-6" />,
    name: "Standard Support",
    badge: "Standard",
    description: "Responsive support for ongoing enquiries, documentation requests, and advisory follow-ups.",
    features: [
      "48-hour email response commitment",
      "Structured query handling via support portal",
      "Access to shared resource library",
      "Quarterly advisory review sessions",
      "Document request processing",
    ],
  },
  {
    icon: <LockKeyholeIcon className="h-6 w-6" />,
    name: "Document & Due Diligence Support",
    badge: "Secure",
    description: "Secure handling of sensitive business documents for review, analysis, and deal preparation.",
    features: [
      "Encrypted document submission portal",
      "Secure data room provisioning",
      "Signed NDA before document review",
      "Tracked access and audit log",
      "Structured feedback with 5-business-day turnaround",
    ],
  },
];

function CapitalSupport() {
  return (
    <>
      <PageHero
        title={<span className="text-foreground">Capital Advisory Support — Precision When It Counts</span>}
        subtitle="Reliable, secure, and responsive support for every stage of your capital journey."
      />

      {/* Support Tiers */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Support Tiers" subtitle="Choose the level of support that matches your engagement." />
          <div className="grid gap-8 lg:grid-cols-3">
            {supportTiers.map((tier, i) => (
              <FadeInView key={tier.name} delay={i * 0.15}>
                <div className="glass flex h-full flex-col rounded-lg border border-white/10 p-8">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="text-primary">{tier.icon}</div>
                    <Badge variant="secondary" className="shrink-0">
                      {tier.badge}
                    </Badge>
                  </div>
                  <h3 className="mb-3 font-semibold text-foreground text-lg">{tier.name}</h3>
                  <p className="mb-6 text-muted-foreground text-sm leading-relaxed">{tier.description}</p>
                  <ul className="mt-auto space-y-2">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <span className="mt-1.5 h-1 w-1 shrink-0 bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Secure Communication */}
      <section className="border-border border-t px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <FadeInView>
            <GlassCard title="Secure Communication">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Confidentiality is fundamental to everything we do. For sensitive financial discussions — including deal terms, investor
                  conversations, and proprietary business information — we strongly recommend using encrypted communication channels.
                </p>
                <div className="rounded border border-white/10 bg-white/5 p-4">
                  <p className="text-sm">
                    For sensitive financial discussions, we use encrypted email.{" "}
                    <span className="font-medium text-foreground">Request our PGP key at </span>
                    <a
                      href="mailto:security@naisonhardy.com"
                      className="font-medium text-primary underline underline-offset-4 transition-opacity hover:opacity-80"
                    >
                      security@naisonhardy.com
                    </a>
                  </p>
                </div>
                <p className="text-sm">
                  All client documents submitted through our portals are encrypted in transit and at rest. Access is strictly limited to
                  your designated advisory team members and is logged in a full audit trail.
                </p>
              </div>
            </GlassCard>
          </FadeInView>
        </div>
      </section>

      {/* Escalation */}
      <section className="border-border border-t px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <SectionHeading title="Escalation & Direct Access" />
          <div className="grid gap-6 sm:grid-cols-2">
            <FadeInView delay={0}>
              <div className="glass rounded-lg border border-white/10 p-6">
                <h4 className="mb-2 font-semibold text-foreground">Direct Advisor Contact</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Every client has a named lead advisor. In time-sensitive situations, you can reach your advisor directly — bypassing
                  standard support queues. Direct contact details are provided at engagement commencement.
                </p>
              </div>
            </FadeInView>
            <FadeInView delay={0.15}>
              <div className="glass rounded-lg border border-white/10 p-6">
                <h4 className="mb-2 font-semibold text-foreground">Escalation Path</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  If a matter requires senior leadership attention, your lead advisor will escalate internally within one business day.
                  Critical deal situations — such as live term sheet negotiations — receive immediate senior advisory review.
                </p>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      <CTASection
        heading="Need to Reach Us?"
        description="Whether you are an existing client or exploring an engagement, our team is ready to respond."
        buttonText="Contact the Advisory Team"
        buttonHref="/capital/contact"
      />
    </>
  );
}
