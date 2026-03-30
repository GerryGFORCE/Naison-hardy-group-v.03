import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { FadeInView } from "#/components/animations";
import { CTASection } from "#/components/shared/CTASection";
import { GlassCard } from "#/components/shared/GlassCard";
import { PageHero } from "#/components/shared/PageHero";
import { SectionHeading } from "#/components/shared/SectionHeading";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";

export const Route = createFileRoute("/management/edithora-experience")({
  component: EdithoraExperience,
  head: () => ({
    meta: [{ title: "Edithora Experience — Naison Hardy Management" }],
  }),
});

const brandPillars = [
  {
    title: "Luxury Goods, Online",
    description:
      "Edithora Experience brings a premium, curated luxury goods retail experience to the online channel — meeting the expectations of discerning consumers who want the standard of luxury shopping without the limitations of physical retail.",
  },
  {
    title: "Curation Over Volume",
    description:
      "The brand is defined by what it chooses not to carry as much as what it does. Every product on Edithora is there because it meets the standard — luxury positioning isn't about price alone, it's about the overall standard of the offering.",
  },
  {
    title: "Experience-Led Commerce",
    description:
      "The name says it all. Edithora Experience is built around the quality of the experience from discovery to delivery. In the luxury segment, how something is presented and delivered is as important as what it is.",
  },
  {
    title: "Consumer-Facing D2C",
    description:
      "Edithora sells directly to consumers through its online store. There are no wholesale or B2B channels — the relationship is between the brand and the end customer, and that relationship is held to a high standard.",
  },
];

function EdithoraExperience() {
  return (
    <>
      <PageHero
        title={<span className="text-foreground">Edithora Experience</span>}
        subtitle="An online consumer luxury goods retailer. Curation, presentation, and experience — at the standard luxury customers expect."
        showStars
      />

      {/* Hero image */}
      <div className="relative h-64 overflow-hidden sm:h-96">
        <img
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1600&q=80"
          alt="Edithora Experience — luxury retail"
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
                  <Badge>Luxury</Badge>
                  <Badge>Consumer Retail</Badge>
                  <Badge>D2C</Badge>
                  <Badge variant="secondary">Managed by NHM</Badge>
                </div>
                <h2 className="font-bold text-2xl text-foreground">About Edithora Experience</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Edithora Experience is an online consumer luxury goods retailer, managed under the Naison Hardy
                  Management portfolio. The business is built around a simple but demanding premise: deliver a
                  genuinely luxury shopping experience through a digital channel.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  In a market where "luxury" is often applied loosely, Edithora holds a higher bar. The product
                  range is curated, the presentation is deliberate, and the customer experience is designed to
                  reflect the expectations of a consumer who shops in the premium segment.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  As a company managed by Naison Hardy Management, Edithora's commercial direction and operational
                  priorities are shaped with the founder's direct involvement — ensuring the brand is positioned
                  to compete in the luxury space with credibility, not just aspiration.
                </p>
                <div className="pt-2">
                  <Button asChild size="sm">
                    <a
                      href="https://edithora.shop"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      Visit Edithora
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </GlassCard>
          </FadeInView>
        </div>
      </section>

      {/* Brand pillars */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Brand & Business Principles" subtitle="What Edithora Experience is built on" />
          <div className="grid gap-6 sm:grid-cols-2">
            {brandPillars.map((item, i) => (
              <FadeInView key={item.title} delay={i * 0.1} direction="up">
                <GlassCard title={item.title}>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </GlassCard>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Image & context */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <FadeInView direction="left">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
                  alt="Luxury retail environment"
                  className="h-72 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </FadeInView>
            <FadeInView direction="right" delay={0.15}>
              <div className="space-y-5">
                <p className="font-mono text-primary text-sm uppercase tracking-widest">Sector Context</p>
                <h2 className="font-bold text-2xl text-foreground">The Online Luxury Market</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The global luxury goods market continues to shift online. Consumers in the premium segment
                  increasingly expect to access curated, high-quality products digitally — with the same
                  presentation standards they'd find in premium physical retail.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Edithora Experience is positioned to serve this consumer directly — removing the friction
                  of geography while maintaining the standards that define the luxury category.
                </p>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      <CTASection
        heading="Explore the Full Portfolio"
        description="Edithora Experience is one of several businesses under active management. See the full picture."
        buttonText="View Full Portfolio"
        buttonHref="/management/portfolio"
      />
    </>
  );
}
