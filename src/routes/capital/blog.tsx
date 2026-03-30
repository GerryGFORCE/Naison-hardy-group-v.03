import { createFileRoute } from "@tanstack/react-router";
import { FadeInView, GradientText } from "#/components/animations";
import { CTASection } from "#/components/shared/CTASection";
import { PageHero } from "#/components/shared/PageHero";
import { SectionHeading } from "#/components/shared/SectionHeading";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";

export const Route = createFileRoute("/capital/blog")({
  component: CapitalBlog,
  head: () => ({
    meta: [{ title: "Capital Intelligence — Naison Hardy Capital" }],
  }),
});

const upcomingArticles = [
  {
    title: "Raising your first institutional round — what investors actually want to see",
    category: "Fundraising",
    description:
      "Most founders walk into investor meetings with the wrong materials and the wrong story. We break down what institutional investors actually scrutinise — and what they dismiss in the first five minutes.",
    readTime: "8 min read",
  },
  {
    title: "How to structure founder equity to survive a Series A",
    category: "Equity & Structure",
    description:
      "Early cap table decisions have a long shadow. Understand how vesting schedules, option pools, and founder agreements affect your leverage — and your ownership — when institutional capital arrives.",
    readTime: "10 min read",
  },
  {
    title: "The due diligence checklist every founder should prepare before they need it",
    category: "Due Diligence",
    description:
      "Investor due diligence doesn't begin when they ask for the data room — it begins the moment you start the conversation. Here is the full checklist your business should be ready to produce at any time.",
    readTime: "12 min read",
  },
];

function CapitalBlog() {
  return (
    <>
      <PageHero
        title={
          <span className="text-foreground">
            Capital Intelligence — <GradientText>Coming Soon</GradientText>
          </span>
        }
        subtitle="Market insights, deal analysis, and strategic thinking for founders and investors navigating growth."
      />

      {/* Teaser */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Upcoming Articles"
            subtitle="We are preparing a series of in-depth pieces on capital strategy, fundraising, and the mechanics of growth finance."
          />
          <div className="grid gap-8 lg:grid-cols-3">
            {upcomingArticles.map((article, i) => (
              <FadeInView key={article.title} delay={i * 0.15}>
                <div className="glass flex h-full flex-col rounded-lg border border-white/10 p-8">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <Badge variant="secondary">{article.category}</Badge>
                    <span className="text-muted-foreground text-xs">{article.readTime}</span>
                  </div>
                  <h3 className="mb-4 font-semibold text-foreground text-lg leading-snug">{article.title}</h3>
                  <p className="mt-auto text-muted-foreground text-sm leading-relaxed">{article.description}</p>
                  <div className="mt-6 rounded border border-white/10 bg-white/5 px-4 py-2 text-center">
                    <p className="text-muted-foreground text-xs">Coming soon</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter signup */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <FadeInView>
            <div className="glass rounded-lg border border-white/10 p-10">
              <h2 className="mb-4 font-semibold text-2xl text-foreground">Get Notified When We Publish</h2>
              <p className="mb-8 text-muted-foreground leading-relaxed">
                Be the first to receive Capital Intelligence articles — practical, honest analysis for founders and investors who take
                capital strategy seriously.
              </p>
              <p className="mb-6 text-muted-foreground text-sm">
                Send your name and email to{" "}
                <a
                  href="mailto:blog@naisonhardy.com"
                  className="font-medium text-primary underline underline-offset-4 transition-opacity hover:opacity-80"
                >
                  blog@naisonhardy.com
                </a>{" "}
                to be added to the early access list.
              </p>
              <Button asChild size="lg" variant="outline" className="border-primary/40 text-primary hover:bg-primary/10">
                <a href="mailto:blog@naisonhardy.com">Subscribe via Email</a>
              </Button>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Topics preview */}
      <section className="border-border border-t px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <SectionHeading title="Topics We Cover" subtitle="Intelligence that matters to founders, operators, and investors." />
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Fundraising Strategy",
              "Cap Table Management",
              "Term Sheet Negotiation",
              "Due Diligence",
              "Investor Relations",
              "Capital Structure",
              "Series A & Beyond",
              "Debt vs Equity",
              "Deal Preparation",
              "Market Analysis",
            ].map((topic, i) => (
              <FadeInView key={topic} delay={i * 0.05}>
                <Badge variant="outline" className="border-white/20 px-4 py-2 text-muted-foreground">
                  {topic}
                </Badge>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Talk Strategy?"
        description="While the blog is in development, our advisory team is available to discuss your capital strategy directly."
        buttonText="Book a Discovery Call"
        buttonHref="/capital/contact"
      />
    </>
  );
}
