import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { FadeInView } from "#/components/animations";
import { ContactForm } from "#/components/shared/ContactForm";
import { GlassCard } from "#/components/shared/GlassCard";
import { PageHero } from "#/components/shared/PageHero";

export const Route = createFileRoute("/management/contact")({
  component: ManagementContact,
  head: () => ({
    meta: [{ title: "Contact — Naison Hardy Management" }],
  }),
});

function ManagementContact() {
  return (
    <>
      <PageHero
        title={<span className="text-foreground">Get in Touch</span>}
        subtitle="Whether you're a business owner exploring options or an investor seeking opportunities, we'd love to hear from you."
      />

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-5">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <FadeInView direction="left">
              <ContactForm source="management" />
            </FadeInView>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 lg:col-span-2">
            <FadeInView direction="right" delay={0.2}>
              <GlassCard>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground">Office</h3>
                      <p className="mt-1 text-muted-foreground text-sm">Cape Town, South Africa</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="mt-1 text-muted-foreground text-sm">sales.management@naisonhardygroup.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <p className="mt-1 text-muted-foreground text-sm">(+27) 61 050 5394</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </FadeInView>

            <FadeInView direction="right" delay={0.3}>
              <GlassCard title="Response Time">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We typically respond within 1-2 business days. For urgent inquiries, please call our office directly.
                </p>
              </GlassCard>
            </FadeInView>
          </div>
        </div>
      </section>
    </>
  );
}
