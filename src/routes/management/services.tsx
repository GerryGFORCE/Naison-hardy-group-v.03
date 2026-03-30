import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  BookOpen,
  Briefcase,
  Building2,
  DollarSign,
  Handshake,
  Shield,
  TrendingUp,
} from "lucide-react";
import { FadeInView } from "#/components/animations";
import { CTASection } from "#/components/shared/CTASection";
import { GlassCard } from "#/components/shared/GlassCard";
import { PageHero } from "#/components/shared/PageHero";
import { SectionHeading } from "#/components/shared/SectionHeading";
import { Button } from "#/components/ui/button";

export const Route = createFileRoute("/management/services")({
  component: ManagementServices,
  head: () => ({
    meta: [{ title: "Services — Naison Hardy Management" }],
  }),
});

const services = [
  {
    icon: <Briefcase className="h-7 w-7 text-primary" />,
    title: "Acquisitions Management",
    summary: "End-to-end strategic acquisition advisory",
    description:
      "From sourcing and evaluation through due diligence to post-acquisition integration, the founder takes a hands-on role in identifying businesses with genuine upside. We assess operational health, market position, and growth trajectory — then deploy capital with conviction.",
    points: [
      "Target identification & market scanning",
      "Financial and operational due diligence",
      "Deal structuring and negotiation",
      "Post-acquisition integration and value creation",
    ],
  },
  {
    icon: <Building2 className="h-7 w-7 text-primary" />,
    title: "Portfolio Company Management",
    summary: "Active operational oversight of owned and managed businesses",
    description:
      "We don't take a passive investor stance. Each company under our umbrella benefits from the founder's direct involvement — from hiring the right leadership and setting strategic direction to ensuring operational efficiency and long-term sustainability.",
    points: [
      "Executive leadership and governance",
      "Operational efficiency and process optimisation",
      "KPI frameworks and performance accountability",
      "Cross-portfolio synergy and resource sharing",
    ],
  },
  {
    icon: <Handshake className="h-7 w-7 text-primary" />,
    title: "Active Partnerships",
    summary: "Strategic partnerships with the founder's direct involvement",
    description:
      "Not all engagement is through ownership. We operate within select active partnerships where the founder contributes strategic direction, market access, and executive-level oversight — without taking a full acquisition position.",
    points: [
      "Joint venture structuring and governance",
      "Strategic direction and growth alignment",
      "Market access and commercial introductions",
      "Partnership performance reviews",
    ],
  },
  {
    icon: <Award className="h-7 w-7 text-primary" />,
    title: "Board Membership & Advisory",
    summary: "Governance expertise at the highest level",
    description:
      "The founder sits on the boards of select businesses, bringing a track record in acquisitions, risk management, and scaling operations. Board membership is offered where there's a genuine value match — not as a title, but as an active governance contribution.",
    points: [
      "Non-executive director roles",
      "Board-level strategic guidance",
      "Corporate governance frameworks",
      "Fiduciary oversight and risk counsel",
    ],
  },
  {
    icon: <Shield className="h-7 w-7 text-primary" />,
    title: "Business Risk Management",
    summary: "Protecting portfolio businesses from foreseeable and unforeseen risks",
    description:
      "Risk isn't an afterthought — it's built into every decision. We help portfolio companies and advisory clients establish comprehensive risk frameworks that cover operational, financial, reputational, and regulatory exposure.",
    points: [
      "Enterprise risk framework design",
      "Scenario planning and stress testing",
      "Regulatory and compliance advisory",
      "Crisis management preparedness",
    ],
  },
  {
    icon: <DollarSign className="h-7 w-7 text-primary" />,
    title: "Strategic Capital Expenditure",
    summary: "Deploying capital where it creates the most durable value",
    description:
      "Capital allocation is a discipline, not a guessing game. We work with founders and executive teams to prioritise capex decisions — ensuring every pound deployed is tied to a clear return thesis, timed well, and executed with rigour.",
    points: [
      "Capex prioritisation and ROI modelling",
      "Build vs. buy analysis",
      "Asset acquisition and disposal strategy",
      "Long-term balance sheet management",
    ],
  },
  {
    icon: <BookOpen className="h-7 w-7 text-primary" />,
    title: "Corporate Governance Advisory",
    summary: "Building governance structures that protect and enable growth",
    description:
      "Many ambitious businesses outpace their governance — and it shows. We help founders and senior executives build the structures, policies, and board dynamics needed to operate at a higher level of accountability and institutional credibility.",
    points: [
      "Board composition and charter design",
      "Shareholder agreement and ownership structuring",
      "Compliance and reporting frameworks",
      "Succession and continuity planning",
    ],
  },
  {
    icon: <TrendingUp className="h-7 w-7 text-primary" />,
    title: "Business Portfolio Building",
    summary: "Guiding executives and founders building multi-business portfolios",
    description:
      "For entrepreneurs who want to move beyond running one company and into managing a portfolio of businesses, we provide the strategic roadmap, execution frameworks, and decision-making models that make multi-entity ownership manageable and profitable.",
    points: [
      "Portfolio thesis development",
      "Sector diversification strategy",
      "Holding structure and entity design",
      "Portfolio-level performance management",
    ],
  },
];

function ManagementServices() {
  return (
    <>
      <PageHero
        title={<span className="text-foreground">What We Do</span>}
        subtitle="Naison Hardy Management provides active, founder-led business management across acquisitions, portfolio companies, strategic partnerships, and board-level governance."
        showStars
      />

      {/* Image break */}
      <div className="relative h-64 overflow-hidden sm:h-80">
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80"
          alt="Executive strategy session"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="max-w-2xl px-6 text-center font-semibold text-lg text-muted-foreground italic">
            "We don't manage from a distance — every business in our portfolio benefits from direct, accountable leadership."
          </p>
        </div>
      </div>

      {/* Services grid */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Our Service Offerings"
            subtitle="Hands-on management, strategic counsel, and executive governance — across the full business lifecycle"
          />
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service, i) => (
              <FadeInView key={service.title} delay={i * 0.08} direction="up">
                <GlassCard className="h-full">
                  <div className="flex flex-col gap-4 p-6">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 rounded-sm bg-primary/10 p-2">{service.icon}</div>
                      <div>
                        <h3 className="font-bold text-foreground text-lg">{service.title}</h3>
                        <p className="text-muted-foreground text-sm">{service.summary}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                    <ul className="space-y-1.5">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <span className="mt-2 h-1 w-1 shrink-0 bg-primary" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassCard>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Who is this for? */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Who This Is For"
            subtitle="Naison Hardy Management works with a specific type of leader"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Founders Scaling Beyond One Business",
                desc: "You've built something that works and want to expand your footprint — acquiring, managing, and building a portfolio of businesses without losing control or clarity.",
              },
              {
                title: "CEOs Navigating Complex Decisions",
                desc: "Critical decisions around acquisitions, capital allocation, and corporate governance need more than instinct. You want a rigorous, experienced perspective in your corner.",
              },
              {
                title: "Senior Executives Building Authority",
                desc: "You're stepping into board roles, leading major transactions, or restructuring operations — and you want frameworks and counsel that reflect the weight of those responsibilities.",
              },
              {
                title: "Business Owners Seeking a Strategic Partner",
                desc: "You're open to bringing in an experienced operator who will take an active role — not a passive investor, but someone who genuinely co-pilots the business.",
              },
              {
                title: "Executives Managing Risk at Scale",
                desc: "As businesses grow, risk surfaces in new forms. We help you build the structures to identify, assess, and mitigate risk across your organisation or portfolio.",
              },
              {
                title: "Leaders Raising Governance Standards",
                desc: "Your business is ready for institutional credibility — proper board structures, shareholder governance, and accountability frameworks that attract serious capital and partners.",
              },
            ].map((item, i) => (
              <FadeInView key={item.title} delay={i * 0.1} direction="up">
                <div className="glass h-full p-6">
                  <h3 className="mb-3 font-semibold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Dual CTA */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="font-bold text-3xl text-foreground tracking-tight sm:text-4xl">Not Sure Where to Start?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We offer two distinct pathways depending on what your business needs right now.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <FadeInView direction="left">
              <div className="glass flex h-full flex-col gap-6 border-primary/20 p-8">
                <div>
                  <p className="mb-2 font-mono text-primary text-sm uppercase tracking-widest">For Businesses</p>
                  <h3 className="font-bold text-foreground text-xl">Need Help Building Your Tech Stack?</h3>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                    If your challenge is operational — CRM systems, ERP platforms, AI tools, project management
                    infrastructure, or digital transformation — Naison Hardy Consulting is the right fit. We build
                    and optimise the technology that runs modern businesses.
                  </p>
                </div>
                <Button asChild variant="outline" className="mt-auto w-fit">
                  <Link to="/consultancy">Explore Naison Hardy Consulting</Link>
                </Button>
              </div>
            </FadeInView>
            <FadeInView direction="right" delay={0.15}>
              <div className="glass flex h-full flex-col gap-6 border-primary/30 bg-primary/5 p-8">
                <div>
                  <p className="mb-2 font-mono text-primary text-sm uppercase tracking-widest">For Leaders</p>
                  <h3 className="font-bold text-foreground text-xl">Building or Managing a Portfolio of Businesses?</h3>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                    If your challenge is strategic — acquisitions, business management, governance, risk, or
                    building a portfolio of companies — Naison Hardy Management provides the founder-led
                    expertise and active involvement that makes the difference.
                  </p>
                </div>
                <Button asChild className="mt-auto w-fit">
                  <Link to="/management/contact">Start a Conversation</Link>
                </Button>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Work Together?"
        description="Whether you're exploring an acquisition, building your portfolio, or need board-level counsel — we'd like to hear what you're working on."
        buttonText="Get in Touch"
        buttonHref="/management/contact"
      />
    </>
  );
}
