import { createFileRoute, Link } from "@tanstack/react-router";
import { BarChart3, Brain, Cog, LineChart, MonitorSmartphone, Target } from "lucide-react";
import { FadeInView } from "#/components/animations";
import { CTASection } from "#/components/shared/CTASection";
import { PageHero } from "#/components/shared/PageHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "#/components/ui/accordion";
import { Button } from "#/components/ui/button";

export const Route = createFileRoute("/consultancy/services")({
  component: ConsultancyServices,
  head: () => ({
    meta: [{ title: "Services — Naison Hardy Consultancy" }],
  }),
});

const services = [
  {
    id: "crm",
    icon: <MonitorSmartphone className="h-6 w-6" />,
    title: "CRM Solutions",
    summary: "Custom CRM implementations to streamline customer relationships and boost sales performance.",
    details: [
      "CRM platform selection and evaluation (Salesforce, HubSpot, Dynamics 365)",
      "Custom implementation and data migration",
      "Integration with existing tech stack",
      "User training and adoption programs",
      "Ongoing optimization and support",
    ],
    result: "Average 40% increase in sales pipeline visibility for our clients.",
    solutionHref: "/consultancy/solutions/ghl",
    solutionLabel: "View GoHighLevel Solution",
  },
  {
    id: "ai",
    icon: <Brain className="h-6 w-6" />,
    title: "AI & Automation",
    summary: "Leverage artificial intelligence and automation to transform your business processes.",
    details: [
      "AI readiness assessment and strategy",
      "Machine learning model development and deployment",
      "Process automation (RPA) implementation",
      "Natural language processing solutions",
      "Predictive analytics and forecasting",
    ],
    result: "Clients typically see 50%+ reduction in manual processing time.",
    solutionHref: "/consultancy/solutions/ghl",
    solutionLabel: "View AI Integration Features",
  },
  {
    id: "pm",
    icon: <Cog className="h-6 w-6" />,
    title: "Project Management Tools",
    summary: "Selection, implementation, and optimization of PM tools for your team.",
    details: [
      "Tool assessment and selection (Jira, Asana, Monday.com, Linear)",
      "Workflow design and configuration",
      "Agile/Scrum methodology training",
      "Cross-team collaboration optimization",
      "Reporting and dashboard setup",
    ],
    result: "Teams report 30% improvement in project delivery timelines.",
    solutionHref: "/consultancy/solutions/pm-tools",
    solutionLabel: "View PM Tool Solutions",
    extraSolutionHref: "/consultancy/solutions/clickup",
    extraSolutionLabel: "View ClickUp Solution",
  },
  {
    id: "financial",
    icon: <LineChart className="h-6 w-6" />,
    title: "Financial Systems",
    summary: "ERP and financial software consulting for complete operational transparency.",
    details: [
      "ERP selection and implementation (SAP, Oracle, NetSuite)",
      "Financial reporting and compliance systems",
      "Accounts payable/receivable automation",
      "Budgeting and forecasting tools",
      "Audit trail and governance frameworks",
    ],
    result: "Reduce monthly close time by an average of 60%.",
  },
  {
    id: "bi",
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Business Intelligence",
    summary: "Data analytics platforms and dashboards for data-driven decision making.",
    details: [
      "Data warehouse design and implementation",
      "BI tool deployment (Power BI, Tableau, Looker)",
      "Custom dashboard and report development",
      "Data governance and quality frameworks",
      "Self-service analytics enablement",
    ],
    result: "Enable real-time insights across all departments.",
    solutionHref: "/consultancy/solutions/notion",
    solutionLabel: "View Notion Solution",
  },
  {
    id: "strategy",
    icon: <Target className="h-6 w-6" />,
    title: "Strategy Consulting",
    summary: "Market analysis, growth strategy, and competitive positioning for sustainable growth.",
    details: [
      "Market research and competitive analysis",
      "Growth strategy development",
      "Digital transformation roadmaps",
      "Organizational change management",
      "M&A due diligence and integration planning",
    ],
    result: "Clients achieve measurable growth within 6-12 months of engagement.",
  },
];

function ConsultancyServices() {
  return (
    <>
      <PageHero
        title={<span className="text-foreground">Our Services</span>}
        subtitle="End-to-end consulting solutions across six core practice areas. Each tailored to your unique business challenges."
        showStars
      />

      {/* Image break with overlay quote */}
      <div className="relative h-64 overflow-hidden sm:h-80">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80"
          alt="Data analytics and business intelligence"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="max-w-2xl px-6 text-center font-semibold text-lg text-muted-foreground italic">
            "We don't sell tools — we build the systems that make businesses run better, faster, and smarter."
          </p>
        </div>
      </div>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {services.map((service, i) => (
              <FadeInView key={service.id} delay={i * 0.1}>
                <AccordionItem value={service.id} className="glass border-white/10 px-6">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className="text-primary">{service.icon}</div>
                      <div className="text-left">
                        <div className="font-semibold text-foreground">{service.title}</div>
                        <div className="text-muted-foreground text-sm">{service.summary}</div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 pt-2">
                      <h4 className="font-medium text-foreground text-sm">What we deliver:</h4>
                      <ul className="space-y-2">
                        {service.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-2 text-muted-foreground text-sm">
                            <span className="mt-1.5 h-1 w-1 shrink-0 bg-primary" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                      <div className="border-border border-t pt-4">
                        <p className="font-medium text-primary text-sm">{service.result}</p>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <Button asChild size="sm">
                          <Link to="/consultancy/contact">Enquire About {service.title}</Link>
                        </Button>
                        {service.solutionHref && (
                          <Button asChild size="sm" variant="outline">
                            <Link to={service.solutionHref}>{service.solutionLabel} →</Link>
                          </Button>
                        )}
                        {service.extraSolutionHref && (
                          <Button asChild size="sm" variant="outline">
                            <Link to={service.extraSolutionHref}>{service.extraSolutionLabel} →</Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </FadeInView>
            ))}
          </Accordion>
        </div>
      </section>

      <CTASection
        heading="Need a Custom Solution?"
        description="Our team can design a bespoke consulting engagement tailored to your specific requirements."
        buttonText="Get in Touch"
        buttonHref="/consultancy/contact"
      />
    </>
  );
}
