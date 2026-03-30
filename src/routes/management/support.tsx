import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MessageSquare, Phone, PhoneCall, Zap } from "lucide-react";
import { FadeInView, GradientText } from "#/components/animations";
import { CTASection } from "#/components/shared/CTASection";
import { PageHero } from "#/components/shared/PageHero";
import { SectionHeading } from "#/components/shared/SectionHeading";
import { Badge } from "#/components/ui/badge";

export const Route = createFileRoute("/management/support")({
  component: ManagementSupport,
  head: () => ({
    meta: [{ title: "Support — Naison Hardy Management" }],
  }),
});

const channels = [
  {
    icon: <Mail className="h-7 w-7 text-primary" />,
    title: "Email Support",
    badge: "All Clients",
    badgeVariant: "outline" as const,
    description: "Reach our team by email for any non-urgent queries, documentation requests, or strategic questions that require a considered response.",
    detail: "Response within 24 hours on business days.",
    contact: "support@naisonhardy.com",
  },
  {
    icon: <MessageSquare className="h-7 w-7 text-primary" />,
    title: "Priority Slack Access",
    badge: "Active Retainer",
    badgeVariant: "default" as const,
    description: "Active retainer clients are added to a dedicated Slack workspace for direct, informal access to the management team. Ideal for quick decisions and fast-moving situations.",
    detail: "Response within 4 hours during business hours.",
    contact: "Provided at onboarding",
  },
  {
    icon: <Clock className="h-7 w-7 text-primary" />,
    title: "Monthly Strategy Call",
    badge: "All Plans",
    badgeVariant: "outline" as const,
    description: "A structured 60-minute strategy call is included in all plans, every month. Use it for big-picture alignment, performance review, or working through a specific challenge in depth.",
    detail: "60 minutes, scheduled monthly. Included in all plans.",
    contact: "Booked via your account manager",
  },
  {
    icon: <Zap className="h-7 w-7 text-primary" />,
    title: "Emergency Advisory",
    badge: "Retainer Clients",
    badgeVariant: "default" as const,
    description: "When a critical decision can't wait, retainer clients can trigger an emergency advisory session. Same-day response for time-sensitive situations that require immediate strategic counsel.",
    detail: "Same-day response for critical decisions.",
    contact: "Contact your account manager directly",
  },
];

const escalationSteps = [
  {
    step: "01",
    title: "Submit via Email or Slack",
    description: "Start by sending your query or concern to support@naisonhardy.com or via your dedicated Slack channel (retainer clients). Include as much context as possible so we can respond substantively.",
  },
  {
    step: "02",
    title: "Account Manager Review",
    description: "Your named account manager will triage the request and respond directly — or loop in the relevant specialist. For operational or strategic matters, the founder may be involved directly.",
  },
  {
    step: "03",
    title: "Resolution & Follow-Up",
    description: "We'll confirm resolution in writing and schedule a follow-up if the matter is ongoing. Complex issues may be added to your next monthly strategy call agenda for deeper discussion.",
  },
];

function ManagementSupport() {
  return (
    <>
      <PageHero
        title={
          <span className="text-foreground">
            Management Support —{" "}
            <GradientText>We're in Your Corner</GradientText>
          </span>
        }
        subtitle="When you're working with Naison Hardy Management, you have access to real people with real accountability. Here's how we keep you supported."
      />

      {/* Support Channels */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="How to Reach Us"
            subtitle="Multiple access points depending on urgency and your engagement tier"
          />
          <div className="grid gap-8 sm:grid-cols-2">
            {channels.map((channel, i) => (
              <FadeInView key={channel.title} delay={i * 0.1} direction="up">
                <div className="glass flex h-full flex-col gap-5 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="shrink-0 rounded-sm bg-primary/10 p-2">{channel.icon}</div>
                    <Badge variant={channel.badgeVariant}>{channel.badge}</Badge>
                  </div>
                  <div>
                    <h3 className="mb-2 font-bold text-foreground text-lg">{channel.title}</h3>
                    <p className="mb-4 text-muted-foreground text-sm leading-relaxed">{channel.description}</p>
                    <div className="space-y-1 border-border border-t pt-4">
                      <p className="text-muted-foreground text-xs">
                        <span className="font-semibold text-foreground">Response time:</span> {channel.detail}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        <span className="font-semibold text-foreground">Contact:</span> {channel.contact}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Submit a Support Request */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading title="Submit a Support Request" subtitle="Two ways to get in touch with the management team directly" />
          <div className="grid gap-6 sm:grid-cols-2">
            <FadeInView direction="left">
              <div className="glass flex flex-col gap-4 p-6">
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-foreground text-lg">Email Us Directly</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  For non-urgent support requests, documentation, invoicing queries, or any matter that benefits from
                  a written record — email is the right channel.
                </p>
                <a
                  href="mailto:support@naisonhardy.com"
                  className="font-medium text-primary text-sm transition-opacity hover:opacity-80"
                >
                  support@naisonhardy.com
                </a>
              </div>
            </FadeInView>
            <FadeInView direction="right" delay={0.15}>
              <div className="glass flex flex-col gap-4 p-6">
                <div className="flex items-center gap-3">
                  <PhoneCall className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-foreground text-lg">Contact Your Account Manager</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Every client is assigned a named account manager at onboarding. For urgent matters or if you prefer to
                  speak directly, contact your account manager via their direct line or Slack.
                </p>
                <p className="text-muted-foreground text-sm">
                  Contact details are provided in your onboarding documentation.
                </p>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Escalation Process */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            title="Escalation Process"
            subtitle="A simple three-step ladder so you always know what happens next"
          />
          <div className="space-y-6">
            {escalationSteps.map((step, i) => (
              <FadeInView key={step.step} delay={i * 0.1} direction="up">
                <div className="glass flex gap-6 p-6">
                  <div className="shrink-0">
                    <span className="font-bold text-3xl text-primary/30">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="mb-2 font-bold text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Not Yet a Client?"
        description="Support starts from day one. Book a discovery call to understand what working with Naison Hardy Management looks like in practice."
        buttonText="Book a Discovery Call"
        buttonHref="/management/contact"
      />
    </>
  );
}
