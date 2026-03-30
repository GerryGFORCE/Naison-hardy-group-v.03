import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { FadeInView } from "#/components/animations";
import { CTASection } from "#/components/shared/CTASection";
import { GlassCard } from "#/components/shared/GlassCard";
import { PageHero } from "#/components/shared/PageHero";
import { SectionHeading } from "#/components/shared/SectionHeading";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";

export const Route = createFileRoute("/management/portfolio")({
  component: ManagementPortfolio,
  head: () => ({
    meta: [{ title: "Portfolio — Naison Hardy Management" }],
  }),
});

const ownedCompanies = [
  {
    name: "Aura Animalia",
    headline: "Online Consumer Pet Store Retailer",
    description:
      "Aura Animalia is a fully owned online pet store retailer serving pet owners directly. The brand offers a curated selection of products across accessories, health, and lifestyle — with a focus on quality and the modern pet owner's expectations.",
    tags: ["E-Commerce", "Consumer Retail", "D2C", "Pets"],
    url: "https://auraanimalia.com",
    href: "/management/aura-animalia",
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",
  },
];

const managedCompanies = [
  {
    name: "G&R Plastics",
    headline: "Rigid Packaging — Polyethylene Products",
    description:
      "G&R Plastics is a rigid packaging company focused on polyethylene products for consumers, operating exclusively on a B2B model. The company serves business clients and does not interact directly with end consumers, operating in an industrial supply chain context.",
    tags: ["Manufacturing", "B2B", "Rigid Packaging", "Industrial"],
    href: "/management/g-and-r-plastics",
    image:
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Edithora Experience",
    headline: "Online Luxury Goods Retailer",
    description:
      "Edithora Experience is an online consumer luxury goods retailer delivering a curated selection of premium products. The brand is built around elevated presentation, considered curation, and a shopping experience that matches the expectations of a luxury customer.",
    tags: ["E-Commerce", "Luxury", "Consumer Retail", "D2C"],
    url: "https://edithora.shop",
    href: "/management/edithora-experience",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80",
  },
];

function CompanyCard({
  name,
  headline,
  description,
  tags,
  url,
  href,
  image,
  delay = 0,
}: {
  name: string;
  headline: string;
  description: string;
  tags: string[];
  url?: string;
  href?: string;
  image: string;
  delay?: number;
}) {
  return (
    <FadeInView delay={delay} direction="up">
      <GlassCard className="h-full overflow-hidden p-0">
        <div className="relative h-48 overflow-hidden">
          <img src={image} alt={name} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
        <div className="flex flex-col gap-4 p-6">
          <div>
            <h3 className="font-bold text-foreground text-xl">{name}</h3>
            <p className="text-muted-foreground text-sm">{headline}</p>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="mt-auto flex flex-wrap gap-3 pt-2">
            {href && (
              <Button asChild variant="outline" size="sm">
                <Link to={href}>Learn More</Link>
              </Button>
            )}
            {url && (
              <Button asChild variant="ghost" size="sm">
                <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                  Visit Site
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </GlassCard>
    </FadeInView>
  );
}

function ManagementPortfolio() {
  return (
    <>
      <PageHero
        title={<span className="text-foreground">Our Portfolio</span>}
        subtitle="A focused portfolio of businesses — owned and actively managed by the founder. Each company operates in a distinct market, united by the same standards of management and performance."
        showStars
      />

      {/* Owned */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Companies Owned"
            subtitle="Fully owned businesses under Naison Hardy Management"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ownedCompanies.map((company, i) => (
              <CompanyCard key={company.name} {...company} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Managed */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Companies Managed"
            subtitle="Businesses under active management — not owned outright, but operated with the same hands-on approach"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {managedCompanies.map((company, i) => (
              <CompanyCard key={company.name} {...company} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* What this means */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="The Management Difference" subtitle="What it means to be in our portfolio" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Founder-Led Oversight",
                desc: "The founder takes a direct, active role in each portfolio company — not a passive board seat, but genuine operational involvement.",
              },
              {
                title: "Strategic Direction",
                desc: "Every company in the portfolio is aligned to a clear growth thesis. Decisions are made with long-term sustainability in mind.",
              },
              {
                title: "Cross-Portfolio Leverage",
                desc: "Where applicable, companies within the portfolio benefit from shared expertise, networks, and operational resources.",
              },
            ].map((item, i) => (
              <FadeInView key={item.title} delay={i * 0.1} direction="up">
                <div className="glass p-6">
                  <h3 className="mb-3 font-semibold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Interested in Working With Us?"
        description="We selectively take on new management engagements. If you think there's a fit, we'd like to hear from you."
        buttonText="Start a Conversation"
        buttonHref="/management/contact"
      />
    </>
  );
}
