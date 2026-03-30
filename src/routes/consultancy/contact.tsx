import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { FadeInView } from "#/components/animations";
import { ContactForm } from "#/components/shared/ContactForm";
import { GlassCard } from "#/components/shared/GlassCard";
import { PageHero } from "#/components/shared/PageHero";
import { Input } from "#/components/ui/input";
import { Label } from "#/components/ui/label";

export const Route = createFileRoute("/consultancy/contact")({
  component: ConsultancyContact,
  head: () => ({
    meta: [{ title: "Contact — Naison Hardy Consultancy" }],
  }),
});

function ConsultancyContact() {
  return (
    <>
      <PageHero
        title={<span className="text-foreground">Contact Us</span>}
        subtitle="Tell us about your challenges and we'll show you how we can help. Free initial consultation included."
      />

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <FadeInView direction="left">
              <ContactForm
                source="consultancy"
                extraFields={
                  <div className="space-y-2">
                    <Label htmlFor="serviceInterest">Service Interest</Label>
                    <Input id="serviceInterest" placeholder="e.g. CRM Solutions, AI Integration, Strategy" />
                  </div>
                }
              />
            </FadeInView>
          </div>

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
                      <p className="mt-1 text-muted-foreground text-sm">sales.consulting@naisonhardygroup.com</p>
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
              <GlassCard title="Free Consultation">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Every engagement starts with a complimentary discovery call. No obligations — just an honest conversation about your
                  business needs and how we can help.
                </p>
              </GlassCard>
            </FadeInView>
          </div>
        </div>
      </section>
    </>
  );
}
