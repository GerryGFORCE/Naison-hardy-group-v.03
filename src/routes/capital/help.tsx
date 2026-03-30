import { createFileRoute } from "@tanstack/react-router";
import { FadeInView } from "#/components/animations";
import { CTASection } from "#/components/shared/CTASection";
import { PageHero } from "#/components/shared/PageHero";
import { SectionHeading } from "#/components/shared/SectionHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "#/components/ui/accordion";

export const Route = createFileRoute("/capital/help")({
  component: CapitalHelp,
  head: () => ({
    meta: [{ title: "Help Centre — Naison Hardy Capital" }],
  }),
});

const faqCategories = [
  {
    category: "Getting Started",
    id: "getting-started",
    faqs: [
      {
        q: "What does capital advisory mean in practice?",
        a: "Capital advisory means we work alongside you as a strategic partner to help you understand, access, and structure capital for your business. In practice, this involves helping you define your capital strategy, preparing your materials for investor conversations, making curated introductions, and guiding you through the mechanics of a raise — from initial positioning through to close. We are not a fund and we do not deploy capital ourselves; we are the expert in your corner who knows how the other side thinks.",
      },
      {
        q: "Is Naison Hardy Capital FCA regulated?",
        a: "Naison Hardy Capital provides advisory and information services only. We do not conduct regulated activities under the Financial Services and Markets Act 2000, such as managing investments or arranging regulated deals on behalf of clients. Our services are strategic and educational in nature. If you require regulated financial services, we can refer you to appropriately authorised firms. Nothing we provide constitutes financial advice.",
      },
      {
        q: "How do I know if I am ready for a capital raise?",
        a: "Readiness for a capital raise depends on several factors: the strength of your financial history and projections, the clarity of your use of funds, the scalability of your business model, and the quality of your team. In our discovery session, we will assess these factors with you honestly — including telling you if we believe it is too early, and what you need to address before approaching investors. Raising at the wrong time or without adequate preparation is one of the most costly mistakes a founder can make.",
      },
      {
        q: "What do I need to prepare for the first session?",
        a: "For the initial discovery session, you do not need to have everything polished. At a minimum, it helps to have a clear description of your business, your current financials (even if early-stage), a sense of how much capital you are looking to raise and what for, and any existing investor materials. We use the discovery session to understand your situation fully — if you have a pitch deck, bring it; if you do not, that is fine too. The conversation is confidential and there is no obligation to proceed.",
      },
    ],
  },
  {
    category: "Services",
    id: "services",
    faqs: [
      {
        q: "Do you provide funding directly?",
        a: "No. Naison Hardy Capital does not deploy, manage, or custodise client funds. We are a capital advisory firm — we help you prepare for, structure, and execute capital raises, and we make introductions to investors within our network. All investment decisions are made between you and the investors you engage with directly. Our role is to maximise your readiness and positioning so those conversations go as well as possible.",
      },
      {
        q: "Can you help with debt as well as equity?",
        a: "Yes. While much of our work is equity-focused — particularly venture and growth equity raises — we also advise on debt structures, including venture debt, revenue-based financing, and structured credit. Capital structure is rarely binary, and understanding the trade-offs between debt and equity is a core part of what we help founders navigate. If your situation calls for a blended approach, we will model and explain the options clearly.",
      },
      {
        q: "What types of businesses do you work with?",
        a: "We primarily work with growth-stage businesses — typically from pre-seed through to Series B — led by founders or leadership teams who are serious about building long-term value. We have experience across technology, professional services, consumer, and B2B sectors. We do not work with businesses in highly speculative or unregulated asset categories, and we carry out a brief onboarding assessment before accepting any engagement to ensure we can add genuine value.",
      },
      {
        q: "Do you take a commission on fundraises?",
        a: "No. We do not accept finder's fees, success fees, or commissions from investors or third parties in connection with introductions we make. Our only compensation is the advisory fee agreed with you at the outset. This structure ensures our incentives are fully aligned with yours — we succeed when you succeed, not when a transaction closes regardless of terms. This is a deliberate and important distinction from many other capital introduction services.",
      },
    ],
  },
  {
    category: "Confidentiality",
    id: "confidentiality",
    faqs: [
      {
        q: "How do you handle sensitive business information?",
        a: "Confidentiality is foundational to our practice. We treat all information shared by clients — including financials, strategic plans, investor conversations, and deal terms — as strictly confidential. Information is not shared with any third party without your explicit written consent. We operate secure document handling procedures and encrypted communication channels for sensitive material. All team members with access to client information are bound by confidentiality obligations.",
      },
      {
        q: "Do you use NDAs?",
        a: "Yes. Before we review any sensitive business documents or proprietary information, we will execute a mutual non-disclosure agreement with you. This is standard practice for all document and due diligence support engagements. For ongoing retainer clients, confidentiality obligations are embedded within the engagement agreement itself. We take these obligations seriously and can provide a copy of our standard NDA template on request.",
      },
      {
        q: "Who has access to my information?",
        a: "Access to your information is strictly limited to your designated advisory team — typically your lead advisor and a supporting analyst. We do not share client files across different client engagements, and access is controlled at the document level with a full audit trail. In the event we need to involve a specialist or external party for a specific purpose, we will always seek your consent first and ensure they are bound by appropriate confidentiality obligations.",
      },
    ],
  },
];

function CapitalHelp() {
  return (
    <>
      <PageHero
        title={<span className="text-foreground">Capital Help Centre</span>}
        subtitle="Answers to the questions founders and investors most commonly ask before and during an engagement."
      />

      {/* FAQ Sections */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl space-y-16">
          {faqCategories.map((category, ci) => (
            <FadeInView key={category.id} delay={ci * 0.1}>
              <div>
                <SectionHeading title={category.category} />
                <div className="glass rounded-lg border border-white/10 px-6">
                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, i) => (
                      <AccordionItem key={faq.q} value={`${category.id}-${i}`}>
                        <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </section>

      {/* Contact at bottom */}
      <section className="border-border border-t px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <FadeInView>
            <div className="glass rounded-lg border border-white/10 p-8 text-center">
              <h3 className="mb-3 font-semibold text-foreground text-xl">Still Have Questions?</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                If you cannot find the answer you are looking for, our advisory team is happy to respond directly. Every enquiry is treated
                with the same care and confidentiality as a client engagement.
              </p>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <a
                  href="mailto:hello@naisonhardy.com"
                  className="font-medium text-primary underline underline-offset-4 transition-opacity hover:opacity-80"
                >
                  hello@naisonhardy.com
                </a>
                <span className="hidden text-muted-foreground sm:inline">·</span>
                <a
                  href="mailto:security@naisonhardy.com"
                  className="font-medium text-primary underline underline-offset-4 transition-opacity hover:opacity-80"
                >
                  security@naisonhardy.com
                </a>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      <CTASection
        heading="Ready to Get Started?"
        description="Book a confidential discovery session and get clear answers tailored to your specific situation."
        buttonText="Book a Discovery Call"
        buttonHref="/capital/contact"
      />
    </>
  );
}
