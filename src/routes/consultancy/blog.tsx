import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { FadeInView, GradientText } from "#/components/animations";
import { CTASection } from "#/components/shared/CTASection";
import { PageHero } from "#/components/shared/PageHero";
import { SectionHeading } from "#/components/shared/SectionHeading";
import { Badge } from "#/components/ui/badge";

export const Route = createFileRoute("/consultancy/blog")({
  component: ConsultancyBlogPage,
  head: () => ({
    meta: [{ title: "Blog — Naison Hardy Consultancy" }],
  }),
});

const upcomingPosts = [
  {
    category: "GHL",
    title: "The 5 GHL automations every service business should have running before they sleep tonight",
    description:
      "Missed call text-back, lead nurture sequences, appointment reminders, contract sends, and review requests. Here's exactly how to set them up.",
    readTime: "8 min read",
  },
  {
    category: "Notion",
    title: "Why your Notion workspace fails (and how to architect one that actually sticks)",
    description:
      "Most Notion workspaces die within 90 days. The fix isn't discipline — it's structure. We break down the hierarchy that makes information findable.",
    readTime: "6 min read",
  },
  {
    category: "AI Integration",
    title: "How we use AI to cut admin time by 60% for our consulting clients",
    description:
      "From AI-written follow-up sequences to automated project status reports — a practical breakdown of the tools and workflows we deploy for clients.",
    readTime: "10 min read",
  },
  {
    category: "ClickUp",
    title: "The ClickUp setup that turned a chaotic agency into a delivery machine",
    description:
      "A real-world case study of a 12-person agency that went from missed deadlines to 95% on-time delivery in 6 weeks. The exact structure we built.",
    readTime: "7 min read",
  },
  {
    category: "Strategy",
    title: "CRM vs PM tool — why most businesses get this decision backwards",
    description:
      "The tool you choose first shapes everything that follows. We walk through the decision framework we use with every new consultancy client.",
    readTime: "5 min read",
  },
  {
    category: "GHL",
    title: "GoHighLevel vs HubSpot in 2026 — the honest comparison for SMEs",
    description:
      "Feature-by-feature, price-by-price, use-case by use-case. We've implemented both. Here's when to choose each.",
    readTime: "12 min read",
  },
];

function ConsultancyBlogPage() {
  return (
    <>
      <PageHero
        title={
          <GradientText as="h1" className="text-4xl text-foreground sm:text-5xl lg:text-6xl">
            Insights from the
            <br />
            Ops Trenches.
          </GradientText>
        }
        subtitle="Practical guides, case studies, and frameworks for founders and operators building scalable tech stacks. Written by the team that implements them."
        ctaText="Get Notified When We Launch"
        ctaHref="mailto:blog@naisonhardy.com"
      />

      {/* Coming Soon Banner */}
      <section className="border-border border-t px-6 py-10">
        <FadeInView className="mx-auto max-w-3xl">
          <div className="glass border-primary/30 border p-6 text-center">
            <Badge className="mb-3 text-xs uppercase tracking-widest">Coming Soon</Badge>
            <p className="text-foreground">
              Our blog launches in Q2 2026. Subscribe to be notified — email{" "}
              <a href="mailto:blog@naisonhardy.com" className="text-primary hover:underline">
                blog@naisonhardy.com
              </a>{" "}
              with "Subscribe" in the subject.
            </p>
          </div>
        </FadeInView>
      </section>

      {/* Preview Posts */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="What's Coming" subtitle="Articles we're writing right now" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingPosts.map((post, i) => (
              <FadeInView key={post.title} delay={i * 0.1} direction="up">
                <div className="glass flex h-full flex-col gap-3 p-6">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-muted-foreground text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="font-semibold text-foreground leading-snug">{post.title}</h3>
                  <p className="flex-1 text-muted-foreground text-sm leading-relaxed">{post.description}</p>
                  <p className="flex items-center gap-1 text-muted-foreground text-xs">
                    Notify me <ArrowRight className="h-3 w-3" />
                  </p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Want These Insights Applied to Your Business?"
        description="Don't wait for the blog. Book a discovery call and get our thinking applied directly to your stack."
        buttonText="Book a Discovery Call"
        buttonHref="/consultancy/contact"
      />
    </>
  );
}
