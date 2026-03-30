import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, MessageSquare } from "lucide-react";
import { FadeInView, GradientText } from "#/components/animations";
import { CTASection } from "#/components/shared/CTASection";
import { PageHero } from "#/components/shared/PageHero";
import { SectionHeading } from "#/components/shared/SectionHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "#/components/ui/accordion";
import { Button } from "#/components/ui/button";

export const Route = createFileRoute("/management/help")({
  component: ManagementHelp,
  head: () => ({
    meta: [{ title: "Help Centre — Naison Hardy Management" }],
  }),
});

const gettingStarted = [
  {
    value: "gs-1",
    q: "How does the onboarding process work?",
    a: "Once you've completed your discovery call and agreed on an engagement tier, we send you a service agreement and onboarding questionnaire. After that's returned and signed, we schedule a structured kick-off session — typically within five business days. This covers your business context, current challenges, communication preferences, and the initial 90-day plan. You'll also be introduced to your named account manager at this stage.",
  },
  {
    value: "gs-2",
    q: "What information do I need to provide at the start?",
    a: "We'll ask for a high-level overview of your business — structure, team size, revenue stage, current pain points, and your key objectives for the engagement. You don't need to have everything prepared perfectly; the initial discovery sessions are designed to draw that information out in a structured way. The more context you share, the faster we can add value.",
  },
  {
    value: "gs-3",
    q: "How quickly can we start?",
    a: "Subject to capacity, we aim to begin onboarding within ten business days of a signed agreement. If your situation is urgent, flag that during the discovery call — in some cases we can accelerate the timeline. We won't rush the onboarding process itself, as thorough preparation is what makes the engagement effective.",
  },
  {
    value: "gs-4",
    q: "Who will be my main point of contact?",
    a: "Every client is assigned a named account manager at onboarding. This is your primary point of contact for day-to-day communication, scheduling, and non-urgent support. For strategic matters, you'll have direct access to the relevant senior advisor or founding team member, depending on your engagement tier.",
  },
];

const servicesScope = [
  {
    value: "ss-1",
    q: "Can you manage multiple business functions simultaneously?",
    a: "Yes. Depending on your engagement tier, we can work across several functions at once — operations, people, finance, commercial strategy, and more. Our approach is to identify the highest-leverage areas first and expand from there. We don't try to fix everything at once; we prioritise ruthlessly and move in sequence.",
  },
  {
    value: "ss-2",
    q: "Do you provide operational staff or just advisory?",
    a: "Our core offering is management-level advisory and operational oversight — we're not a staffing agency. However, for Full Management Engagements, we may take on executive-level responsibilities that go beyond advice. We can also help you identify, recruit, and onboard operational hires as part of the engagement scope.",
  },
  {
    value: "ss-3",
    q: "What industries do you specialise in?",
    a: "We work primarily with founder-led businesses in professional services, trade and construction, hospitality, e-commerce, and early-stage tech. Our approach is methodology-first rather than sector-first — the operational and strategic frameworks we use translate well across industries. If you're unsure whether your sector is a good fit, bring it to a discovery call and we'll be honest.",
  },
  {
    value: "ss-4",
    q: "Can you help with a business in difficulty?",
    a: "Yes — turnaround situations are a core part of our Full Management Engagement offering. We've worked with businesses experiencing cash flow pressure, operational breakdown, leadership gaps, and structural problems. If you're in difficulty, the sooner you engage with us the more options you'll have. Book a discovery call and we'll assess what's possible.",
  },
];

const billingContracts = [
  {
    value: "bc-1",
    q: "How do I cancel?",
    a: "After the initial three-month term, engagements run on a rolling monthly basis. To exit, provide 30 days written notice to your account manager or to support@naisonhardy.com. The engagement will conclude at the end of the final billing period covered by that notice. We'll also schedule a close-out session to hand over any materials and ensure continuity.",
  },
  {
    value: "bc-2",
    q: "What happens if my needs change mid-engagement?",
    a: "Scope changes happen — businesses evolve. If you need to expand, reduce, or redirect the engagement, raise it with your account manager. We'll assess what's needed, agree the change in writing, and adjust the retainer for the following billing cycle. We won't lock you into a scope that no longer fits.",
  },
  {
    value: "bc-3",
    q: "Do you offer project-based work or retainer only?",
    a: "Our primary model is a monthly retainer, which allows for the kind of sustained involvement that delivers real results. For specific, well-scoped projects — such as an operational audit or a hiring sprint — we may consider a fixed-term project arrangement. Discuss this during the discovery call and we'll advise on the right structure for your situation.",
  },
];

function ManagementHelp() {
  return (
    <>
      <PageHero
        title={
          <span className="text-foreground">
            Help Centre —{" "}
            <GradientText>Answers, Fast</GradientText>
          </span>
        }
        subtitle="Everything you need to know about working with Naison Hardy Management — from onboarding to billing and everything in between."
      />

      {/* Getting Started */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="Getting Started" subtitle="New to Naison Hardy Management? Start here." />
          <FadeInView direction="up">
            <div className="glass overflow-hidden border-border">
              <Accordion type="single" collapsible className="px-6">
                {gettingStarted.map((item) => (
                  <AccordionItem key={item.value} value={item.value}>
                    <AccordionTrigger className="text-foreground font-semibold text-base py-5">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Services & Scope */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="Services & Scope" subtitle="What we do, how far we go, and what we don't do" />
          <FadeInView direction="up">
            <div className="glass overflow-hidden border-border">
              <Accordion type="single" collapsible className="px-6">
                {servicesScope.map((item) => (
                  <AccordionItem key={item.value} value={item.value}>
                    <AccordionTrigger className="text-foreground font-semibold text-base py-5">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Billing & Contracts */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="Billing & Contracts" subtitle="Clear terms, no surprises" />
          <FadeInView direction="up">
            <div className="glass overflow-hidden border-border">
              <Accordion type="single" collapsible className="px-6">
                {billingContracts.map((item) => (
                  <AccordionItem key={item.value} value={item.value}>
                    <AccordionTrigger className="text-foreground font-semibold text-base py-5">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Contact Support */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            title="Still Need Help?"
            subtitle="Can't find the answer you're looking for? Reach the team directly."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            <FadeInView direction="left">
              <div className="glass flex flex-col gap-4 p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-sm bg-primary/10 p-2">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">Email Support</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Send your question to our support team and we'll respond within 24 hours on business days.
                  Include as much context as you can so we can give you a substantive answer first time.
                </p>
                <a
                  href="mailto:support@naisonhardy.com"
                  className="font-medium text-primary text-sm transition-opacity hover:opacity-80"
                >
                  support@naisonhardy.com
                </a>
              </div>
            </FadeInView>
            <FadeInView direction="right" delay={0.15}>
              <div className="glass flex flex-col gap-4 p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-sm bg-primary/10 p-2">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">Slack (Retainer Clients)</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Active retainer clients can reach the team via the dedicated Slack workspace provided at
                  onboarding. For urgent queries, Slack is the fastest channel — response within four hours
                  during business hours.
                </p>
                <p className="text-muted-foreground text-xs">Access provided at onboarding.</p>
              </div>
            </FadeInView>
          </div>
          <FadeInView direction="up" delay={0.2} className="mt-8 text-center">
            <Button asChild variant="outline" size="lg" className="px-8">
              <Link to="/management/contact">Open the Contact Page</Link>
            </Button>
          </FadeInView>
        </div>
      </section>

      <CTASection
        heading="Book a Discovery Call"
        description="If your question is about whether or how we can help your business, the fastest answer comes from a direct conversation."
        buttonText="Book a Discovery Call"
        buttonHref="/management/contact"
      />
    </>
  );
}
