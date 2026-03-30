import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageSquare } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "#/components/ui/accordion";
import { FadeInView, GradientText } from "#/components/animations";
import { CTASection } from "#/components/shared/CTASection";
import { PageHero } from "#/components/shared/PageHero";
import { SectionHeading } from "#/components/shared/SectionHeading";

export const Route = createFileRoute("/consultancy/help")({
  component: ConsultancyHelpPage,
  head: () => ({
    meta: [
      { title: "Help Centre & FAQs — Naison Hardy Consultancy" },
      {
        name: "description",
        content:
          "Answers to common questions about GoHighLevel, Notion, ClickUp, and PM tool implementations. Pricing, process, support, and AI integration FAQs.",
      },
    ],
  }),
});

const faqSections = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "How does the engagement process work?",
        a: "It starts with a free 45-minute discovery call where we understand your business, current tools, and goals. We then produce a Statement of Work with a fixed price and timeline. Once signed and the deposit paid, we kick off immediately.",
      },
      {
        q: "How long does a typical build take?",
        a: "Most builds take 3–6 weeks depending on complexity. A focused GHL setup might be 3 weeks. A full Notion workspace with integrations and automations is typically 4–5 weeks. Timelines are confirmed in your SOW.",
      },
      {
        q: "What do I need to provide before you start?",
        a: "Admin access to your chosen platform(s), a brief description of your current workflows, and clarity on your main pain points. We handle everything else — including any platform setup or account creation.",
      },
      {
        q: "Do you work with businesses outside the UK?",
        a: "Yes. We work with clients globally. All client calls and collaboration happen remotely via video call and shared workspaces.",
      },
    ],
  },
  {
    category: "GoHighLevel (GHL)",
    questions: [
      {
        q: "Do I need a GoHighLevel account before engaging you?",
        a: "No. We can set up your account as part of the engagement. If you already have one, we'll audit and rebuild from within your existing account.",
      },
      {
        q: "Can you migrate data from our current CRM?",
        a: "Yes. CRM data migration (contacts, notes, deal history) can be added to the scope. This is priced as an add-on based on data volume and source system.",
      },
      {
        q: "Do you offer white-label GHL for agencies?",
        a: "We can help agencies set up and configure white-label GHL (SAAS mode) for their own client delivery. This is a separate engagement — contact us for details.",
      },
      {
        q: "What is the 'Missed Call Text Back' automation?",
        a: "It's an automation that sends an SMS to any caller who doesn't get through to you — immediately and automatically. It's one of the highest-ROI quick wins we build for GHL clients. Typical results: 20–40% of missed leads re-engaged within 24 hours.",
      },
    ],
  },
  {
    category: "Notion & ClickUp",
    questions: [
      {
        q: "Can you migrate our data from another PM tool?",
        a: "Yes, for ClickUp especially. Asana, Monday.com, and Trello migrations are available as add-ons. Notion migrations are handled on a case-by-case basis depending on source format.",
      },
      {
        q: "How do you ensure team adoption?",
        a: "We build training sessions and a 'Day 1 playbook' into every engagement. We also create short video walkthroughs for each workflow so new team members can self-onboard.",
      },
      {
        q: "Can you build client-facing portals in Notion?",
        a: "Yes. Shared Notion portals for client collaboration, progress tracking, and document delivery are an available add-on. We scope these separately.",
      },
    ],
  },
  {
    category: "AI Integration",
    questions: [
      {
        q: "What AI tools do you integrate?",
        a: "We primarily work with OpenAI (GPT models), Anthropic Claude, native AI features in GHL/Notion/ClickUp, and automation platforms like n8n and Make. We select the right AI based on your specific use case.",
      },
      {
        q: "Is AI integration included in the base price?",
        a: "Core AI automations (like intelligent follow-up sequences or AI-assisted lead scoring in GHL) are included. More complex custom AI builds — like a trained knowledge base or custom AI agent — are scoped separately.",
      },
      {
        q: "Is our data safe when using AI integrations?",
        a: "Yes. We never connect your business data to AI models without explicit scoping and your approval. We use API integrations that do not train public models on your data, and we follow GDPR-compliant data handling practices.",
      },
    ],
  },
  {
    category: "Support & Billing",
    questions: [
      {
        q: "What's included in the support packages?",
        a: "All packages include bug fixes, workflow adjustments, and a monthly call. Growth and Scale also include new automation builds, integration support, and priority response times. See our pricing page for full details.",
      },
      {
        q: "Can I cancel a support package?",
        a: "Yes, with 30 days written notice. There are no lock-in contracts for support packages beyond the initial 90-day minimum commitment.",
      },
      {
        q: "Do unused hours roll over?",
        a: "Hours don't roll over month-to-month, but we always aim to use the full allocation productively. If there's less reactive work, we use hours proactively on system improvements.",
      },
    ],
  },
];

function ConsultancyHelpPage() {
  return (
    <>
      <PageHero
        title={
          <GradientText as="h1" className="text-4xl text-foreground sm:text-5xl lg:text-6xl">
            Help Centre
          </GradientText>
        }
        subtitle="Answers to the questions we get asked most — before, during, and after an engagement. Can't find what you need? Email us directly."
        ctaText="Contact Support"
        ctaHref="mailto:support@naisonhardy.com"
      />

      {/* FAQs */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-4xl space-y-12">
          {faqSections.map((section, si) => (
            <FadeInView key={section.category} delay={si * 0.05}>
              <div>
                <h2 className="mb-6 font-bold text-foreground text-2xl">{section.category}</h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {section.questions.map((item, qi) => (
                    <AccordionItem key={item.q} value={`${si}-${qi}`} className="glass border-0 px-5">
                      <AccordionTrigger className="py-4 text-left font-semibold text-foreground hover:text-primary hover:no-underline">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 text-muted-foreground leading-relaxed">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </FadeInView>
          ))}
        </div>
      </section>

      {/* Contact Options */}
      <section className="border-border border-t px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading title="Still Have Questions?" subtitle="We respond to every enquiry within 24 hours" />
          <div className="grid gap-6 sm:grid-cols-2">
            <FadeInView direction="up">
              <div className="glass flex items-start gap-4 p-6">
                <Mail className="h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground">Email Support</h3>
                  <p className="mt-1 text-muted-foreground text-sm">For general questions and non-urgent issues.</p>
                  <a href="mailto:support@naisonhardy.com" className="mt-2 block text-primary text-sm hover:underline">
                    support@naisonhardy.com
                  </a>
                </div>
              </div>
            </FadeInView>
            <FadeInView direction="up" delay={0.1}>
              <div className="glass flex items-start gap-4 p-6">
                <MessageSquare className="h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground">Book a Call</h3>
                  <p className="mt-1 text-muted-foreground text-sm">
                    Prefer to talk? Book a free 20-minute call with our team.
                  </p>
                  <a href="/consultancy/contact" className="mt-2 block text-primary text-sm hover:underline">
                    Book a call →
                  </a>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Get Started?"
        description="Turn your tech stack into a growth engine. Book a free discovery call today."
        buttonText="Book a Free Discovery Call"
        buttonHref="/consultancy/contact"
      />
    </>
  );
}
