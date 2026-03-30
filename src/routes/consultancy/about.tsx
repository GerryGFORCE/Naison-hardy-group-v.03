import { createFileRoute } from "@tanstack/react-router";
import { FadeInView } from "#/components/animations";
import { CTASection } from "#/components/shared/CTASection";
import { GlassCard } from "#/components/shared/GlassCard";
import { PageHero } from "#/components/shared/PageHero";
import { SectionHeading } from "#/components/shared/SectionHeading";

export const Route = createFileRoute("/consultancy/about")({
  component: ConsultancyAbout,
  head: () => ({
    meta: [{ title: "About — Naison Hardy Consultancy" }],
  }),
});

const methodology = [
  {
    step: "01",
    title: "Discovery",
    description: "Deep-dive into your business, processes, and challenges. We listen before we advise.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Develop a tailored roadmap with clear milestones, timelines, and measurable outcomes.",
  },
  {
    step: "03",
    title: "Implementation",
    description: "Execute with precision — our hands-on approach ensures solutions are delivered right.",
  },
  {
    step: "04",
    title: "Optimization",
    description: "Continuous monitoring, refinement, and support to maximize long-term value.",
  },
];

const expertise = [
  "Technology Strategy & Digital Transformation",
  "CRM & Customer Experience Platforms",
  "Artificial Intelligence & Machine Learning",
  "Business Intelligence & Data Analytics",
  "Enterprise Resource Planning (ERP)",
  "Project & Portfolio Management",
  "Change Management & Organizational Design",
  "Financial Systems & Compliance",
];

function ConsultancyAbout() {
  return (
    <>
      <PageHero
        title={<span className="text-foreground">About Naison Hardy Consultancy</span>}
        subtitle="A results-driven consultancy helping businesses navigate complexity and unlock their full potential."
        showStars
      />

      {/* Image banner */}
      <div className="relative h-56 overflow-hidden sm:h-72">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80"
          alt="Consulting team collaboration"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      {/* Methodology */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Our Methodology" subtitle="A proven four-step approach to delivering results" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {methodology.map((item, i) => (
              <FadeInView key={item.step} delay={i * 0.15} direction="up">
                <div className="glass relative p-6">
                  <span className="font-mono text-4xl text-primary/20">{item.step}</span>
                  <h3 className="mt-2 font-semibold text-foreground text-lg">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <FadeInView direction="left">
            <SectionHeading title="Areas of Expertise" className="text-left" />
            <ul className="space-y-3">
              {expertise.map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <span className="h-1.5 w-1.5 shrink-0 bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeInView>
          <FadeInView direction="right" delay={0.2}>
            <GlassCard title="Our Team" description="Expert consultants with deep industry knowledge">
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Our consultants bring decades of combined experience across technology, finance, and strategy. Every engagement is led by
                  senior professionals who have delivered results at the highest level.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe in partnership over prescriptions. Our team works alongside yours, transferring knowledge and building internal
                  capability that lasts long after our engagement ends.
                </p>
              </div>
            </GlassCard>
          </FadeInView>
        </div>
      </section>

      {/* Values */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Our Values" />
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Client-First",
                desc: "Your success is our success. Every recommendation is driven by what's best for your business.",
              },
              { title: "Evidence-Based", desc: "We let data guide our decisions. No guesswork, no assumptions — just proven approaches." },
              {
                title: "Transparent",
                desc: "Clear communication, honest timelines, and no hidden costs. You always know where you stand.",
              },
            ].map((value, i) => (
              <FadeInView key={value.title} delay={i * 0.1}>
                <div className="glass p-6 text-center">
                  <h3 className="mb-2 font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.desc}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Let's Work Together"
        description="Discover how our expertise can help transform your business."
        buttonText="Start a Conversation"
        buttonHref="/consultancy/contact"
      />
    </>
  );
}
