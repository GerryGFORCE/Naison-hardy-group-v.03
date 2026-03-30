import { createFileRoute } from "@tanstack/react-router";
import { FadeInView } from "#/components/animations";
import { CTASection } from "#/components/shared/CTASection";
import { GlassCard } from "#/components/shared/GlassCard";
import { PageHero } from "#/components/shared/PageHero";
import { SectionHeading } from "#/components/shared/SectionHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "#/components/ui/accordion";

export const Route = createFileRoute("/management/about")({
  component: ManagementAbout,
  head: () => ({
    meta: [{ title: "About — Naison Hardy Management" }],
  }),
});

const milestones = [
  {
    year: "Foundation",
    title: "Building the Vehicle",
    description:
      "Naison Hardy Management was established as the founder's operating entity — the vehicle through which acquisitions would be evaluated, businesses managed, and strategic partnerships pursued. The mandate from day one: active involvement, not passive investment.",
  },
  {
    year: "First Acquisition",
    title: "Aura Animalia",
    description:
      "The first owned company under the portfolio was Aura Animalia — an online consumer pet store retailer. This established the group's approach: identify a market with real consumer demand, build operational infrastructure, and grow it with intention.",
  },
  {
    year: "Managed Portfolio",
    title: "G&R Plastics & Edithora Experience",
    description:
      "The management mandate expanded with G&R Plastics — a B2B rigid packaging company — and Edithora Experience, an online luxury goods retailer. These additions demonstrated the group's ability to operate across entirely different sectors and business models simultaneously.",
  },
  {
    year: "Governance",
    title: "Boards & Active Partnerships",
    description:
      "Beyond ownership and management, the founder began formalising board memberships and active partnerships — bringing structured governance expertise to select businesses where the value of his involvement warranted a formal seat at the table.",
  },
  {
    year: "Today",
    title: "A Maturing Portfolio",
    description:
      "Naison Hardy Management continues to build a portfolio of businesses across consumer retail, industrial manufacturing, and beyond. The approach remains unchanged: founder-led, operationally active, and focused on long-term value rather than short-term extraction.",
  },
];

function ManagementAbout() {
  return (
    <>
      <PageHero
        title={<span className="text-foreground">About Naison Hardy Management</span>}
        subtitle="A founder-led management entity built for acquiring, operating, and growing a portfolio of businesses across diverse sectors."
        showStars
      />

      {/* Image banner */}
      <div className="relative h-56 overflow-hidden sm:h-72">
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80"
          alt="Strategic planning"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      {/* Mission & Vision */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <FadeInView direction="left">
            <GlassCard title="Our Mission" description="What drives every decision">
              <p className="text-muted-foreground leading-relaxed">
                To build and manage a portfolio of businesses that genuinely perform — through direct founder involvement,
                rigorous operational oversight, and a commitment to creating durable value in each sector we operate in.
                We don't manage from a distance, and we don't outsource accountability.
              </p>
            </GlassCard>
          </FadeInView>
          <FadeInView direction="right" delay={0.2}>
            <GlassCard title="Our Vision" description="Where we're building towards">
              <p className="text-muted-foreground leading-relaxed">
                A diversified portfolio of market-relevant businesses — owned, managed, and partnered — that collectively
                demonstrate what active, principled business management looks like. Each company should be a benchmark
                for quality, not just an asset on a spreadsheet.
              </p>
            </GlassCard>
          </FadeInView>
        </div>
      </section>

      {/* The Founder's Role */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <FadeInView direction="left">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80"
                  alt="Executive leadership"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </FadeInView>
            <FadeInView direction="right" delay={0.2}>
              <div className="space-y-6">
                <div>
                  <p className="font-mono text-primary text-sm uppercase tracking-widest">The Founder's Role</p>
                  <h2 className="mt-3 font-bold text-3xl text-foreground">
                    Active Management, Not Passive Investment
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Naison Hardy Management is not a holding company in the traditional sense. The founder's involvement
                  in each portfolio company is direct and ongoing — from setting strategic direction and hiring key
                  personnel, to sitting on boards and shaping how capital is deployed.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This model requires fewer investments, made with higher conviction. The standard for taking on a
                  management engagement — whether through acquisition, managed operations, or an active partnership —
                  is the same: there must be a clear value-creation opportunity and a genuine commitment to seeing it through.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  In addition to portfolio companies, the founder serves on select boards, providing governance
                  expertise and strategic counsel to businesses navigating critical inflection points.
                </p>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading title="How We Got Here" subtitle="The story of the portfolio's development" />
          <Accordion type="single" collapsible className="space-y-3">
            {milestones.map((milestone) => (
              <FadeInView key={milestone.year}>
                <AccordionItem value={milestone.year} className="glass border-white/10 px-6">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-primary text-sm">{milestone.year}</span>
                      <span className="font-semibold">{milestone.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </AccordionContent>
                </AccordionItem>
              </FadeInView>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Values */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="How We Operate" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Accountability",
                desc: "We own the outcomes of every business we touch — success and failure alike.",
              },
              {
                title: "Long-Term Thinking",
                desc: "We build for permanence. Short-term extraction destroys what long-term stewardship creates.",
              },
              {
                title: "Operational Rigour",
                desc: "Good strategy without execution is just theory. We get into the details.",
              },
              {
                title: "Selective Engagement",
                desc: "We take on fewer things and do them better. Quality over quantity, always.",
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
        heading="Want to Explore Working Together?"
        description="Whether you're a business owner, executive, or investor — we're open to the right conversations."
        buttonText="Get in Touch"
        buttonHref="/management/contact"
      />
    </>
  );
}
