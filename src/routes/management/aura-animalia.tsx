import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { FadeInView } from "#/components/animations";
import { CTASection } from "#/components/shared/CTASection";
import { GlassCard } from "#/components/shared/GlassCard";
import { PageHero } from "#/components/shared/PageHero";
import { SectionHeading } from "#/components/shared/SectionHeading";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";

export const Route = createFileRoute("/management/aura-animalia")({
  component: AuraAnimalia,
  head: () => ({
    meta: [{ title: "Aura Animalia — Naison Hardy Management" }],
  }),
});

const highlights = [
  {
    title: "Consumer-First Retail",
    description:
      "Aura Animalia serves pet owners directly through an online retail experience designed around ease, quality, and trust. Every product listed has been considered for its value to the end customer — not just its margin.",
  },
  {
    title: "Curated Product Range",
    description:
      "Rather than listing thousands of products, Aura Animalia takes a curated approach — stocking items that meet a defined quality standard across categories including accessories, health, and daily essentials.",
  },
  {
    title: "Fully Owned & Operated",
    description:
      "As a wholly owned company under Naison Hardy Management, Aura Animalia benefits from direct founder involvement in its strategic direction, operational decisions, and long-term positioning in the pet retail market.",
  },
  {
    title: "Growth-Oriented",
    description:
      "The business is actively being developed — with ongoing work on product range expansion, customer experience, and brand presence. It operates as a growing e-commerce brand, not a static catalogue.",
  },
];

function AuraAnimalia() {
  return (
    <>
      <PageHero
        title={<span className="text-foreground">Aura Animalia</span>}
        subtitle="An online consumer pet store retailer — owned and managed by the founder. Built for pet owners who care about quality."
        showStars
      />

      {/* Hero image */}
      <div className="relative h-64 overflow-hidden sm:h-80">
        <img
          src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1600&q=80"
          alt="Aura Animalia — pet retail"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      {/* About */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <FadeInView>
            <GlassCard>
              <div className="space-y-5 p-2">
                <div className="flex flex-wrap gap-2">
                  <Badge>E-Commerce</Badge>
                  <Badge>Consumer Retail</Badge>
                  <Badge>D2C</Badge>
                  <Badge variant="secondary">Owned by NHM</Badge>
                </div>
                <h2 className="font-bold text-2xl text-foreground">About Aura Animalia</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Aura Animalia is an online consumer pet store retailer — fully owned and operated under the Naison Hardy
                  Management umbrella. The business serves pet owners directly, offering a product range built around
                  quality, reliability, and the needs of the modern pet household.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From accessories and everyday essentials to health and lifestyle products, Aura Animalia's catalogue
                  is designed with intention. The brand doesn't compete on volume — it competes on the quality of what
                  it offers and the experience it creates for its customers.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  As a Naison Hardy Management company, Aura Animalia is actively developed. Strategic direction, product
                  decisions, and operational priorities are set with founder involvement — ensuring the business grows
                  with clarity and purpose rather than simply scaling at pace.
                </p>
                <div className="pt-2">
                  <Button asChild size="sm">
                    <a
                      href="https://auraanimalia.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      Visit Aura Animalia
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </GlassCard>
          </FadeInView>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="What Makes It Different" subtitle="How the business is built and run" />
          <div className="grid gap-6 sm:grid-cols-2">
            {highlights.map((item, i) => (
              <FadeInView key={item.title} delay={i * 0.1} direction="up">
                <GlassCard title={item.title}>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </GlassCard>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Second image */}
      <div className="relative h-48 overflow-hidden sm:h-64">
        <img
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1600&q=80"
          alt="Pets lifestyle"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      {/* CTA */}
      <CTASection
        heading="Want to Know More?"
        description="Aura Animalia is one of several businesses under active management. Explore the full portfolio or get in touch."
        buttonText="View Full Portfolio"
        buttonHref="/management/portfolio"
      />
    </>
  );
}
