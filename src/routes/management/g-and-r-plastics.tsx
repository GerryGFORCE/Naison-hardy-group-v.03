import { createFileRoute } from "@tanstack/react-router";
import { FadeInView } from "#/components/animations";
import { CTASection } from "#/components/shared/CTASection";
import { GlassCard } from "#/components/shared/GlassCard";
import { PageHero } from "#/components/shared/PageHero";
import { SectionHeading } from "#/components/shared/SectionHeading";
import { Badge } from "#/components/ui/badge";

export const Route = createFileRoute("/management/g-and-r-plastics")({
  component: GAndRPlastics,
  head: () => ({
    meta: [{ title: "G&R Plastics — Naison Hardy Management" }],
  }),
});

const operationalHighlights = [
  {
    title: "Rigid Packaging Specialist",
    description:
      "G&R Plastics focuses specifically on rigid packaging — a category that demands precision, material consistency, and reliable production at scale. The company's expertise is in polyethylene, producing durable containers, packaging units, and related components.",
  },
  {
    title: "Exclusively B2B",
    description:
      "The company operates a pure B2B model, supplying directly to businesses with no consumer-facing channel. This means all commercial relationships are with clients in the supply chain — manufacturers, distributors, and product companies that require packaging solutions.",
  },
  {
    title: "No End-Consumer Interaction",
    description:
      "G&R Plastics sits upstream of the consumer market. Its products reach end consumers through the brands and businesses it supplies — but G&R Plastics itself operates entirely within the industrial and commercial layer of the supply chain.",
  },
  {
    title: "Actively Managed",
    description:
      "As a company under the Naison Hardy Management umbrella, G&R Plastics receives active operational oversight. Strategic decisions, client relationships, and growth priorities are shaped with founder-level involvement.",
  },
];

function GAndRPlastics() {
  return (
    <>
      <PageHero
        title={<span className="text-foreground">G&R Plastics</span>}
        subtitle="A rigid packaging company specialising in polyethylene products — operating exclusively in the B2B space. Managed by Naison Hardy Management."
      />

      {/* Hero image */}
      <div className="relative h-64 overflow-hidden sm:h-80">
        <img
          src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1600&q=80"
          alt="G&R Plastics — industrial manufacturing"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />
      </div>

      {/* About */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <FadeInView>
            <GlassCard>
              <div className="space-y-5 p-2">
                <div className="flex flex-wrap gap-2">
                  <Badge>Manufacturing</Badge>
                  <Badge>B2B</Badge>
                  <Badge>Rigid Packaging</Badge>
                  <Badge>Industrial</Badge>
                  <Badge variant="secondary">Managed by NHM</Badge>
                </div>
                <h2 className="font-bold text-2xl text-foreground">About G&R Plastics</h2>
                <p className="text-muted-foreground leading-relaxed">
                  G&R Plastics is a rigid packaging company focused on polyethylene products. The business manufactures
                  packaging solutions for other businesses — operating strictly within the B2B segment of the supply
                  chain with no direct interaction with end consumers.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Polyethylene rigid packaging is a foundational component across industries including food and beverage,
                  personal care, household products, and industrial goods. G&R Plastics sits within this supply chain,
                  providing reliable, specification-driven packaging to commercial clients.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Under active management by Naison Hardy Management, the company operates with clear operational
                  discipline and a structured approach to client relationships, quality, and growth.
                </p>
              </div>
            </GlassCard>
          </FadeInView>
        </div>
      </section>

      {/* Operational highlights */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="How the Business Operates"
            subtitle="Key characteristics of G&R Plastics as a managed company"
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {operationalHighlights.map((item, i) => (
              <FadeInView key={item.title} delay={i * 0.1} direction="up">
                <GlassCard title={item.title}>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </GlassCard>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Context section */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <FadeInView direction="left">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80"
                  alt="Industrial operations"
                  className="h-72 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </FadeInView>
            <FadeInView direction="right" delay={0.15}>
              <div className="space-y-5">
                <p className="font-mono text-primary text-sm uppercase tracking-widest">Sector Context</p>
                <h2 className="font-bold text-2xl text-foreground">Packaging That Powers Industries</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Rigid polyethylene packaging is one of the most widely used packaging formats globally. From bottles
                  and containers to industrial drums and specialty moulded units, it underpins supply chains across
                  virtually every consumer and industrial category.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  G&R Plastics operates in this market as a supplier to the businesses that use it — providing
                  specification-driven, consistent product that enables its clients to meet their own customers'
                  demands reliably.
                </p>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      <CTASection
        heading="Interested in the Portfolio?"
        description="G&R Plastics is one of several companies under active management. View the full portfolio or reach out."
        buttonText="View Full Portfolio"
        buttonHref="/management/portfolio"
      />
    </>
  );
}
