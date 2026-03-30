import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Mail } from "lucide-react";
import { FadeInView, GradientText } from "#/components/animations";
import { CTASection } from "#/components/shared/CTASection";
import { PageHero } from "#/components/shared/PageHero";
import { SectionHeading } from "#/components/shared/SectionHeading";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";

export const Route = createFileRoute("/management/blog")({
  component: ManagementBlog,
  head: () => ({
    meta: [{ title: "Management Insights — Naison Hardy Management" }],
  }),
});

const teasers = [
  {
    tag: "Operations",
    title: "How to Structure Your First Operational Audit",
    description:
      "Most business owners know something is broken but don't know where to start. A structured operational audit gives you a clear diagnostic — what's working, what isn't, and what to fix first.",
    readTime: "8 min read",
  },
  {
    tag: "Hiring",
    title: "When to Hire vs Outsource Your Next Function",
    description:
      "The build vs buy question is one of the most consequential decisions a scaling business makes. We walk through the framework we use with clients to get it right — and the mistakes we see most often.",
    readTime: "6 min read",
  },
  {
    tag: "Playbooks",
    title: "The 90-Day Playbook for a New Operational Engagement",
    description:
      "When Naison Hardy Management embeds in a new business, the first 90 days follow a proven structure. Here's how we approach discovery, diagnosis, and delivery — and what we expect from the leadership team.",
    readTime: "10 min read",
  },
];

function ManagementBlog() {
  return (
    <>
      <PageHero
        title={
          <span className="text-foreground">
            Management Insights —{" "}
            <GradientText>Coming Soon</GradientText>
          </span>
        }
        subtitle="We're building a resource library of operational playbooks, case studies, and strategic frameworks for ambitious business owners."
        showStars
      />

      {/* Description */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <FadeInView direction="up">
            <p className="text-lg text-muted-foreground leading-relaxed">
              The best operators don't hoard knowledge — they share it. Our management insights series will
              cover the frameworks, decisions, and hard-won lessons from inside real business engagements.
              No theory for its own sake. Only what actually works.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Teaser Cards */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Topics We're Working On"
            subtitle="A preview of what's coming to the Naison Hardy Management blog"
          />
          <div className="grid gap-8 lg:grid-cols-3">
            {teasers.map((teaser, i) => (
              <FadeInView key={teaser.title} delay={i * 0.1} direction="up">
                <div className="glass flex h-full flex-col gap-5 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <Badge variant="outline">{teaser.tag}</Badge>
                    <span className="text-muted-foreground text-xs">{teaser.readTime}</span>
                  </div>
                  <div className="flex flex-1 flex-col gap-3">
                    <div className="flex items-start gap-3">
                      <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <h3 className="font-bold text-foreground leading-snug">{teaser.title}</h3>
                    </div>
                    <p className="flex-1 text-muted-foreground text-sm leading-relaxed">{teaser.description}</p>
                  </div>
                  <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-60">
                    <span>Coming soon</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <FadeInView direction="up">
            <div className="glass border-primary/20 p-10 text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary/10 p-3">
                  <Mail className="h-7 w-7 text-primary" />
                </div>
              </div>
              <p className="mb-2 font-mono text-primary text-sm uppercase tracking-widest">Stay Ahead</p>
              <h3 className="mb-4 font-bold text-foreground text-2xl">Be First to Read New Insights</h3>
              <p className="mx-auto mb-8 max-w-xl text-muted-foreground leading-relaxed">
                When new articles, case studies, and playbooks go live, we'll send them directly to you. No
                newsletters full of padding — just content worth your time.
              </p>
              <p className="mb-2 text-muted-foreground text-sm">
                Send your name and a brief note to get on the early-access list:
              </p>
              <a
                href="mailto:blog@naisonhardy.com"
                className="inline-flex items-center gap-2 font-semibold text-primary transition-opacity hover:opacity-80"
              >
                <Mail className="h-4 w-4" />
                blog@naisonhardy.com
              </a>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* While You Wait */}
      <section className="border-border border-t px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <FadeInView direction="up">
            <h3 className="mb-4 font-bold text-foreground text-xl">While You Wait</h3>
            <p className="mb-8 text-muted-foreground leading-relaxed">
              Want to discuss an operational challenge now? Our team is available for discovery conversations
              with founders and operators at any stage.
            </p>
            <Button asChild size="lg" className="px-8 font-semibold text-base">
              <Link to="/management/contact">Talk to the Team</Link>
            </Button>
          </FadeInView>
        </div>
      </section>

      <CTASection
        heading="Ready to Work With Us?"
        description="Don't wait for the blog — get direct access to the thinking that will power it. Book a discovery call with Naison Hardy Management."
        buttonText="Book a Discovery Call"
        buttonHref="/management/contact"
      />
    </>
  );
}
