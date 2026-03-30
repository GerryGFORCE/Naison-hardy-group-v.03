import { createFileRoute } from "@tanstack/react-router";
import { BriefcaseIcon, MapPinIcon } from "lucide-react";
import { FadeInView, GradientText } from "#/components/animations";
import { CTASection } from "#/components/shared/CTASection";
import { GlassCard } from "#/components/shared/GlassCard";
import { PageHero } from "#/components/shared/PageHero";
import { SectionHeading } from "#/components/shared/SectionHeading";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";

export const Route = createFileRoute("/capital/careers")({
  component: CapitalCareers,
  head: () => ({
    meta: [{ title: "Careers — Naison Hardy Capital" }],
  }),
});

const openRoles = [
  {
    title: "Investment Analyst",
    location: "London / Remote",
    type: "Full-time",
    description:
      "We are looking for a rigorous, intellectually curious analyst to support deal research, financial modelling, and due diligence across our advisory engagements. You will work directly with senior advisors and have meaningful client exposure from day one.",
    responsibilities: [
      "Conduct deep-dive research on client businesses, sectors, and comparable transactions",
      "Build and stress-test financial models supporting capital structure and valuation analysis",
      "Prepare due diligence reports, data room reviews, and investor Q&A documentation",
      "Support pitch deck development and narrative refinement",
      "Track deal flow and maintain internal deal intelligence",
    ],
    requirements: [
      "2–4 years experience in investment banking, private equity, venture capital, or management consulting",
      "Strong financial modelling skills (DCF, LBO, comparable analysis)",
      "Excellent written communication — you can translate complexity into clarity",
      "Intellectual curiosity and genuine interest in founder-led businesses",
      "CFA progress or finance-related degree preferred, not required",
    ],
  },
  {
    title: "Business Development Manager",
    location: "Remote",
    type: "Full-time",
    description:
      "A relationship-first role for someone who understands the capital raising journey from a founder's perspective. You will build and nurture relationships with founders, operators, and professional networks, developing a pipeline of advisory engagements.",
    responsibilities: [
      "Identify and cultivate relationships with founders and business owners who may benefit from capital advisory",
      "Develop and manage a pipeline of prospective advisory engagements",
      "Represent Naison Hardy Capital at events, conferences, and in professional communities",
      "Collaborate with the advisory team to ensure a smooth handoff from business development to engagement",
      "Contribute to brand and content strategy for founder-facing channels",
    ],
    requirements: [
      "3–6 years experience in business development, partnerships, or client-facing roles in finance or professional services",
      "Existing network in the startup or growth-stage business ecosystem",
      "Strong instinct for relationship quality over volume",
      "Self-directed with strong written and verbal communication",
      "Entrepreneurial mindset — you understand founders because you think like one",
    ],
  },
];

const values = [
  {
    title: "Analytical Rigour",
    description:
      "We think carefully before we speak. Our advice is grounded in analysis, evidence, and structured thinking — not intuition alone. We expect everyone on the team to bring intellectual precision to their work.",
  },
  {
    title: "Founder-First Mindset",
    description:
      "Our clients are taking real risks to build something meaningful. We serve them with that in mind — with honesty, urgency, and genuine care for their outcomes. We never lose sight of what is at stake for them.",
  },
  {
    title: "Integrity in Every Interaction",
    description:
      "We say what we mean, and we mean what we say. When we cannot help, we say so. When a client is not ready, we tell them. Integrity is not a value we list — it is a standard we hold ourselves to in every conversation.",
  },
  {
    title: "Long-Term Orientation",
    description:
      "We build careers here, not just CVs. We invest in our people the same way we advise our clients to think about capital — with a long-term horizon, patience, and a focus on compounding returns over time.",
  },
];

function CapitalCareers() {
  return (
    <>
      <PageHero
        title={
          <span className="text-foreground">
            Join the <GradientText>Capital Advisory</GradientText> Team
          </span>
        }
        subtitle="We are a small, high-quality team doing serious work for founders who are navigating some of the most consequential decisions in their businesses."
      />

      {/* Open Roles */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Open Roles"
            subtitle="Two positions currently available — both require a high standard and reward accordingly."
          />
          <div className="space-y-10">
            {openRoles.map((role, i) => (
              <FadeInView key={role.title} delay={i * 0.15}>
                <div className="glass rounded-lg border border-white/10 p-8">
                  <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="mb-2 font-semibold text-2xl text-foreground">{role.title}</h3>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="flex items-center gap-1.5 text-muted-foreground text-sm">
                          <MapPinIcon className="h-4 w-4 text-primary" />
                          {role.location}
                        </span>
                        <span className="flex items-center gap-1.5 text-muted-foreground text-sm">
                          <BriefcaseIcon className="h-4 w-4 text-primary" />
                          {role.type}
                        </span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="shrink-0 self-start">
                      Now Hiring
                    </Badge>
                  </div>
                  <p className="mb-8 text-muted-foreground leading-relaxed">{role.description}</p>
                  <div className="grid gap-8 lg:grid-cols-2">
                    <div>
                      <h4 className="mb-4 font-medium text-foreground text-sm uppercase tracking-wide">Responsibilities</h4>
                      <ul className="space-y-2">
                        {role.responsibilities.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm leading-relaxed">
                            <span className="mt-2 h-1 w-1 shrink-0 bg-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-4 font-medium text-foreground text-sm uppercase tracking-wide">What We Are Looking For</h4>
                      <ul className="space-y-2">
                        {role.requirements.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm leading-relaxed">
                            <span className="mt-2 h-1 w-1 shrink-0 bg-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8 border-border border-t pt-6">
                    <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                      <a href={`mailto:careers@naisonhardy.com?subject=Application: ${role.title}`}>Apply for This Role</a>
                    </Button>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Speculative applications */}
      <section className="border-border border-t px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <FadeInView>
            <GlassCard title="No Suitable Role? We Still Want to Hear From You.">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We are always interested in exceptional candidates — people who combine analytical sharpness with genuine curiosity about
                  how businesses grow and how capital flows. If none of the roles above fit but you believe you belong on a team like this,
                  send us a note.
                </p>
                <p>
                  Tell us who you are, what you have done, and why you are drawn to capital advisory. We read every speculative application
                  carefully.
                </p>
                <div className="pt-2">
                  <a
                    href="mailto:careers@naisonhardy.com"
                    className="font-medium text-primary underline underline-offset-4 transition-opacity hover:opacity-80"
                  >
                    careers@naisonhardy.com
                  </a>
                </div>
              </div>
            </GlassCard>
          </FadeInView>
        </div>
      </section>

      {/* Values */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="What We Stand For" subtitle="The principles that shape how we work — with clients and with each other." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <FadeInView key={value.title} delay={i * 0.1}>
                <div className="glass flex h-full flex-col rounded-lg border border-white/10 p-6">
                  <h3 className="mb-3 font-semibold text-primary">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Interested in Joining?"
        description="Whether you are applying for an open role or reaching out speculatively, we would be glad to hear from you."
        buttonText="Get in Touch"
        buttonHref="/capital/contact"
      />
    </>
  );
}
