import { createFileRoute } from "@tanstack/react-router";
import { FadeInView } from "#/components/animations";
import { CTASection } from "#/components/shared/CTASection";
import { GlassCard } from "#/components/shared/GlassCard";
import { PageHero } from "#/components/shared/PageHero";
import { SectionHeading } from "#/components/shared/SectionHeading";

export const Route = createFileRoute("/capital/about")({
  component: CapitalAbout,
  head: () => ({
    meta: [{ title: "About — Naison Hardy Capital" }],
  }),
});

function CapitalAbout() {
  return (
    <>
      <PageHero
        title={<span className="text-foreground">About Naison Hardy Capital</span>}
        subtitle="A disciplined approach to capital management, built on integrity, expertise, and a commitment to our clients' long-term success."
        showStars
      />

      {/* Image banner */}
      <div className="relative h-56 overflow-hidden sm:h-72">
        <img
          src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1600&q=80"
          alt="Wealth and capital management"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      {/* Investment Philosophy */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <FadeInView direction="left">
            <GlassCard title="Investment Philosophy">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We believe in the power of compounding — both in returns and in relationships. Our investment philosophy centres on
                  fundamental analysis, disciplined risk management, and a long-term time horizon.
                </p>
                <p>
                  We avoid leverage-driven speculation and instead focus on identifying genuine value across asset classes. This
                  conservative yet opportunistic approach has served our clients well through multiple market cycles.
                </p>
              </div>
            </GlassCard>
          </FadeInView>
          <FadeInView direction="right" delay={0.2}>
            <GlassCard title="Our Credentials">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Our team comprises seasoned financial professionals with backgrounds in institutional asset management, private banking,
                  and corporate finance. We combine deep market knowledge with a client-first mentality.
                </p>
                <ul className="space-y-2">
                  {[
                    "CFA Charterholders and CAIA designees",
                    "Former institutional portfolio managers",
                    "Regulatory and compliance expertise",
                    "Cross-border investment experience",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <span className="h-1.5 w-1.5 shrink-0 bg-[#C0C0C0]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          </FadeInView>
        </div>
      </section>

      {/* Values */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Our Principles" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Integrity", desc: "We act as fiduciaries, always placing our clients' interests first." },
              { title: "Discipline", desc: "Rigorous process and risk management at every stage of the investment lifecycle." },
              { title: "Transparency", desc: "Clear, honest communication and comprehensive reporting." },
              { title: "Excellence", desc: "We pursue the highest standards in research, execution, and client service." },
            ].map((value, i) => (
              <FadeInView key={value.title} delay={i * 0.1}>
                <div className="glass p-6 text-center">
                  <h3 className="mb-2 font-semibold text-[#C0C0C0]">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.desc}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <FadeInView>
            <GlassCard title="Regulatory Compliance">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Naison Hardy Capital operates within the regulatory framework of the Republic of South Africa. We maintain robust
                compliance procedures and internal controls to ensure the protection of our clients and the integrity of our
                operations. For specific regulatory information, please contact our compliance team.
              </p>
            </GlassCard>
          </FadeInView>
        </div>
      </section>

      <CTASection
        heading="Learn More About Our Approach"
        description="We welcome the opportunity to discuss our investment philosophy and how it can serve your objectives."
        buttonText="Get in Touch"
        buttonHref="/capital/contact"
      />
    </>
  );
}
