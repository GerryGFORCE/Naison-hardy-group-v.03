import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MessageSquare, Phone, Zap } from "lucide-react";
import { FadeInView, GradientText } from "#/components/animations";
import { CTASection } from "#/components/shared/CTASection";
import { PageHero } from "#/components/shared/PageHero";
import { SectionHeading } from "#/components/shared/SectionHeading";
import { Badge } from "#/components/ui/badge";

export const Route = createFileRoute("/consultancy/support")({
  component: ConsultancySupportPage,
  head: () => ({
    meta: [{ title: "Support — Naison Hardy Consultancy" }],
  }),
});

const channels = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email Support",
    sla: "Response within 24 hours",
    badge: "All Clients",
    description:
      "For non-urgent issues, questions, and documentation requests. Our team reviews every ticket and responds with a clear plan of action.",
    contact: "support@naisonhardy.com",
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Priority Slack Channel",
    sla: "Response within 4 hours",
    badge: "Growth & Scale Plans",
    description:
      "A dedicated shared Slack channel with your consultant for fast, contextual communication. Ideal for ongoing builds and active retainer clients.",
    contact: "Set up during onboarding",
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Monthly Strategy Call",
    sla: "60 minutes, scheduled monthly",
    badge: "All Plans",
    description:
      "A structured monthly call to review system performance, plan upcoming automations, and align on priorities. Recorded and summarised for your records.",
    contact: "Booked via your Calendly link",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Emergency Response",
    sla: "Same-day response",
    badge: "Scale Plan",
    description:
      "For business-critical issues — broken automations, system outages, or urgent configuration changes. Reserved for Scale support clients.",
    contact: "Dedicated emergency line shared at onboarding",
  },
];

const escalationSteps = [
  { step: "01", title: "Submit a ticket", description: "Email support@naisonhardy.com or message via Slack with a clear description of the issue." },
  { step: "02", title: "Acknowledgement", description: "We acknowledge within the SLA window for your plan and assign a consultant to the issue." },
  { step: "03", title: "Resolution & update", description: "We resolve the issue, document the fix, and notify you with a summary of what was done and why." },
];

function ConsultancySupportPage() {
  return (
    <>
      <PageHero
        title={
          <GradientText as="h1" className="text-4xl text-foreground sm:text-5xl lg:text-6xl">
            Support That
            <br />
            Shows Up.
          </GradientText>
        }
        subtitle="After we hand over your system, we don't disappear. Our support packages keep your tech stack running, evolving, and performing — with a team who built it and knows it inside out."
        ctaText="View Support Packages"
        ctaHref="/consultancy/pricing"
      />

      {/* Support Channels */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="How We Support You" subtitle="Multiple channels, clear SLAs, real people" />
          <div className="grid gap-6 sm:grid-cols-2">
            {channels.map((channel, i) => (
              <FadeInView key={channel.title} delay={i * 0.1} direction="up">
                <div className="glass flex h-full flex-col gap-4 p-6">
                  <div className="flex items-start justify-between gap-2">
                    <div className="text-primary">{channel.icon}</div>
                    <Badge variant="secondary" className="shrink-0 text-xs">
                      {channel.badge}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">{channel.title}</h3>
                    <div className="mt-1 flex items-center gap-1 text-muted-foreground text-xs">
                      <Clock className="h-3 w-3" />
                      {channel.sla}
                    </div>
                  </div>
                  <p className="flex-1 text-muted-foreground text-sm leading-relaxed">{channel.description}</p>
                  <p className="text-primary text-sm">{channel.contact}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Escalation Process */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading title="How Issues Get Resolved" subtitle="A simple, transparent three-step process" />
          <div className="space-y-4">
            {escalationSteps.map((s, i) => (
              <FadeInView key={s.step} delay={i * 0.1} direction="up">
                <div className="glass flex items-start gap-6 p-6">
                  <span className="shrink-0 font-bold text-3xl text-primary">{s.step}</span>
                  <div>
                    <h3 className="font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-1 text-muted-foreground text-sm leading-relaxed">{s.description}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Not on a Support Plan Yet?"
        description="All support packages are available after your initial build & handover. Pick the plan that matches your pace."
        buttonText="View Pricing"
        buttonHref="/consultancy/pricing"
      />
    </>
  );
}
