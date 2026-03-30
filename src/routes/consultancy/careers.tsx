import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Brain, Globe, Shield, Sparkles } from "lucide-react";
import { FadeInView, GradientText } from "#/components/animations";
import { CTASection } from "#/components/shared/CTASection";
import { PageHero } from "#/components/shared/PageHero";
import { SectionHeading } from "#/components/shared/SectionHeading";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";

export const Route = createFileRoute("/consultancy/careers")({
  component: ConsultancyCareersPage,
  head: () => ({
    meta: [{ title: "Careers — Naison Hardy Consultancy" }],
  }),
});

const openRoles = [
  {
    title: "Senior Systems Consultant",
    type: "Full-time · Remote / London",
    badge: "Hiring Now",
    description:
      "Lead end-to-end client engagements across GoHighLevel, Notion, and ClickUp. You'll take ownership of discovery sessions, system architecture, build delivery, and client training. You're not just technical — you think strategically and communicate with clarity.",
    requirements: [
      "3+ years hands-on with GHL, Notion, or ClickUp",
      "Experience delivering client projects independently",
      "Comfortable with automation platforms (n8n, Make, Zapier)",
      "Strong written and verbal communication",
      "Bonus: AI/LLM integration experience",
    ],
  },
  {
    title: "Operations & AI Integration Specialist",
    type: "Full-time · Remote",
    badge: "Hiring Now",
    description:
      "Design and build AI-powered automation layers for our clients' tech stacks. You'll work with OpenAI, Anthropic Claude, and native AI features across GHL, Notion, and ClickUp — turning repetitive workflows into intelligent systems.",
    requirements: [
      "Hands-on experience with AI APIs (OpenAI, Anthropic)",
      "Workflow automation expertise (n8n, Make)",
      "Understanding of CRM and PM tool ecosystems",
      "Product thinking — can translate business problems into AI solutions",
      "Bonus: experience with vector databases or RAG architectures",
    ],
  },
  {
    title: "Client Success Manager",
    type: "Part-time / Contract · Remote",
    badge: "Open",
    description:
      "Keep our clients happy, supported, and growing. You'll manage relationships with active support clients, coordinate with consultants on deliverables, and ensure every client gets more value over time. You're organised, proactive, and genuinely care about client outcomes.",
    requirements: [
      "2+ years in client success or account management",
      "Familiarity with SaaS tools and tech stacks",
      "Excellent communication and follow-up",
      "CRM experience (GHL or HubSpot preferred)",
    ],
  },
];

const values = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Mastery over mediocrity",
    description: "We go deep. Every consultant on our team is genuinely expert in the tools they implement.",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "AI-first thinking",
    description: "We build intelligent systems by default, not as an afterthought. Curiosity about AI is a must.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Client outcomes first",
    description: "We measure success by what our clients achieve — not by hours billed or deliverables ticked.",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Remote, but present",
    description: "Fully remote team with strong async culture. We communicate clearly and show up when it matters.",
  },
];

function ConsultancyCareersPage() {
  return (
    <>
      <PageHero
        title={
          <GradientText as="h1" className="text-4xl text-foreground sm:text-5xl lg:text-6xl">
            Build Systems That
            <br />
            Change How Businesses Work.
          </GradientText>
        }
        subtitle="We're a small, expert team that delivers outsized impact for our clients. If you're deep in CRM, PM tools, or AI automation — and you want to do the best work of your career — let's talk."
        ctaText="View Open Roles"
        ctaHref="#roles"
      />

      {/* Values */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="How We Work" subtitle="Four principles that shape everything we do" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <FadeInView key={v.title} delay={i * 0.1} direction="up">
                <div className="glass flex flex-col gap-3 p-6">
                  <div className="text-primary">{v.icon}</div>
                  <h3 className="font-semibold text-foreground">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section id="roles" className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading title="Open Roles" subtitle="Join a team that takes craft seriously" />
          <div className="space-y-6">
            {openRoles.map((role, i) => (
              <FadeInView key={role.title} delay={i * 0.1} direction="up">
                <div className="glass p-8">
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-bold text-foreground text-xl">{role.title}</h3>
                      <p className="mt-1 text-muted-foreground text-sm">{role.type}</p>
                    </div>
                    <Badge className="shrink-0 text-xs uppercase tracking-widest">{role.badge}</Badge>
                  </div>
                  <p className="mb-5 text-muted-foreground leading-relaxed">{role.description}</p>
                  <ul className="mb-6 space-y-2">
                    {role.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {req}
                      </li>
                    ))}
                  </ul>
                  <Button asChild>
                    <a href="mailto:careers@naisonhardy.com?subject=Application — {role.title}">
                      Apply for this role <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Don't See the Right Role?"
        description="We're always interested in exceptional people. Send a speculative application to careers@naisonhardy.com and tell us what you'd bring to the team."
        buttonText="Send a Speculative Application"
        buttonHref="mailto:careers@naisonhardy.com?subject=Speculative Application"
      />
    </>
  );
}
