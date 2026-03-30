import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Globe, Mail, MapPin } from "lucide-react";
import { FadeInView, GradientText } from "#/components/animations";
import { CTASection } from "#/components/shared/CTASection";
import { PageHero } from "#/components/shared/PageHero";
import { SectionHeading } from "#/components/shared/SectionHeading";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";

export const Route = createFileRoute("/management/careers")({
  component: ManagementCareers,
  head: () => ({
    meta: [{ title: "Careers — Naison Hardy Management" }],
  }),
});

const openRoles = [
  {
    title: "Senior Business Operations Consultant",
    location: "Remote / London",
    type: "Full-Time",
    badge: "Hiring Now",
    badgeVariant: "default" as const,
    description:
      "We're looking for a Senior Business Operations Consultant to join the Naison Hardy Management team and lead operational engagements with our clients. You'll work directly with founders and leadership teams to diagnose operational challenges, design systems, and drive implementation across a range of business functions.",
    responsibilities: [
      "Lead end-to-end operational engagements from discovery through delivery",
      "Design and implement systems, processes, and team structures for scaling SMEs",
      "Facilitate strategy sessions and provide board-level advisory input",
      "Produce clear, actionable documentation and operational playbooks",
      "Manage client relationships with professionalism and candour",
    ],
    requirements: [
      "5+ years of operational leadership or management consulting experience",
      "Proven track record working with founder-led or growth-stage businesses",
      "Strong analytical and communication skills",
      "Comfortable working across multiple client engagements simultaneously",
      "Based in or able to travel to London when required",
    ],
  },
  {
    title: "Client Success Manager",
    location: "Remote",
    type: "Full-Time",
    badge: "Hiring Now",
    badgeVariant: "default" as const,
    description:
      "As Client Success Manager, you'll own the post-onboarding client experience at Naison Hardy Management. You'll be the primary point of contact for a portfolio of active clients, ensuring engagements run smoothly, relationships stay strong, and clients get maximum value from their retainer.",
    responsibilities: [
      "Serve as the named account manager for a portfolio of active retainer clients",
      "Coordinate monthly strategy calls, onboarding sessions, and check-ins",
      "Monitor engagement health and flag risks early",
      "Handle support queries, escalations, and billing communications",
      "Work closely with senior consultants to ensure client deliverables are met",
    ],
    requirements: [
      "3+ years in a client success, account management, or consulting support role",
      "Experience working with business owners or senior leadership",
      "Highly organised with strong written and verbal communication",
      "Comfortable with ambiguity and able to manage multiple priorities",
      "Self-directed — thrives in a remote, async-first environment",
    ],
  },
];

const values = [
  {
    title: "Results over activity",
    description:
      "We don't celebrate busy. We celebrate outcomes. If you can achieve the same result in two hours that someone else takes eight to produce, that's a strength — not a problem.",
  },
  {
    title: "Radical candour",
    description:
      "We tell clients what they need to hear, not what they want to hear. We expect the same internally. Directness delivered with respect is a core part of how we work and grow.",
  },
  {
    title: "Long-term thinking",
    description:
      "Short-termism destroys value. We make decisions — with clients and internally — that are built to last. We'd rather lose a client than recommend something that won't serve them.",
  },
  {
    title: "Mastery over mediocrity",
    description:
      "We hire people who care deeply about getting things right. Continuous improvement isn't a company value on a poster — it's how we stay worth what we charge.",
  },
];

function ManagementCareers() {
  return (
    <>
      <PageHero
        title={
          <span className="text-foreground">
            Build the Future of{" "}
            <GradientText>Business Operations</GradientText>{" "}
            With Us
          </span>
        }
        subtitle="We're a small, high-trust team that works with serious operators. If you want to do meaningful work and grow fast, you're in the right place."
        showStars
      />

      {/* Open Roles */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading title="Open Roles" subtitle="Current opportunities to join the Naison Hardy Management team" />
          <div className="space-y-10">
            {openRoles.map((role, i) => (
              <FadeInView key={role.title} delay={i * 0.1} direction="up">
                <div className="glass flex flex-col gap-6 p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-foreground text-2xl">{role.title}</h3>
                      <div className="mt-2 flex flex-wrap items-center gap-3">
                        <span className="flex items-center gap-1.5 text-muted-foreground text-sm">
                          <MapPin className="h-4 w-4 text-primary" />
                          {role.location}
                        </span>
                        <span className="flex items-center gap-1.5 text-muted-foreground text-sm">
                          <Briefcase className="h-4 w-4 text-primary" />
                          {role.type}
                        </span>
                      </div>
                    </div>
                    <Badge variant={role.badgeVariant}>{role.badge}</Badge>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{role.description}</p>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <h4 className="mb-3 font-semibold text-foreground text-sm uppercase tracking-wide">
                        Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {role.responsibilities.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 font-semibold text-foreground text-sm uppercase tracking-wide">
                        What We're Looking For
                      </h4>
                      <ul className="space-y-2">
                        {role.requirements.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-border border-t pt-4">
                    <Button asChild className="w-full sm:w-auto">
                      <a href="mailto:careers@naisonhardy.com?subject=Application — {role.title}">
                        Apply for This Role
                      </a>
                    </Button>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Speculative Applications */}
      <section className="border-border border-t px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <FadeInView direction="up">
            <div className="glass border-primary/20 p-8 text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary/10 p-3">
                  <Mail className="h-7 w-7 text-primary" />
                </div>
              </div>
              <h3 className="mb-3 font-bold text-foreground text-xl">No Role That Fits?</h3>
              <p className="mx-auto mb-6 max-w-xl text-muted-foreground leading-relaxed">
                If you don't see a current opening that matches your background but believe you'd add genuine
                value to the team, we welcome speculative applications. Tell us who you are, what you've done,
                and why Naison Hardy Management makes sense for your next move.
              </p>
              <a
                href="mailto:careers@naisonhardy.com"
                className="inline-flex items-center gap-2 font-semibold text-primary transition-opacity hover:opacity-80"
              >
                <Mail className="h-4 w-4" />
                careers@naisonhardy.com
              </a>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Company Culture / Values */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="How We Work"
            subtitle="The values that shape our team, our client relationships, and the quality of our output"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <FadeInView key={value.title} delay={i * 0.1} direction="up">
                <div className="glass flex h-full flex-col gap-4 p-6">
                  <div className="flex items-center gap-2">
                    <Globe className="h-5 w-5 shrink-0 text-primary" />
                    <h3 className="font-bold text-foreground leading-tight">{value.title}</h3>
                  </div>
                  <p className="flex-1 text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Interested in Working With Us?"
        description="Whether you're applying for a role or just want to understand what life at Naison Hardy Management looks like, we're happy to talk."
        buttonText="Get in Touch"
        buttonHref="/management/contact"
      />
    </>
  );
}
