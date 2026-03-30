import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { FadeInView } from "#/components/animations";
import { ContactForm } from "#/components/shared/ContactForm";
import { GlassCard } from "#/components/shared/GlassCard";
import { PageHero } from "#/components/shared/PageHero";
import { Input } from "#/components/ui/input";
import { Label } from "#/components/ui/label";

export const Route = createFileRoute("/capital/contact")({
  component: CapitalContact,
  head: () => ({
    meta: [{ title: "Contact — Naison Hardy Capital" }],
  }),
});

function CapitalContact() {
  return (
    <>
      <PageHero
        title={<span className="text-foreground">Contact Naison Hardy Capital</span>}
        subtitle="We welcome confidential enquiries from individuals and institutions seeking sophisticated financial solutions."
      />

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <FadeInView direction="left">
              <ContactForm
                source="capital"
                extraFields={
                  <div className="space-y-2">
                    <Label htmlFor="investmentInterest">Investment Interest</Label>
                    <Input id="investmentInterest" placeholder="e.g. Capital Management, Wealth Advisory, Investment Services" />
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
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#C0C0C0]" />
                    <div>
                      <h3 className="font-semibold text-foreground">Office</h3>
                      <p className="mt-1 text-muted-foreground text-sm">Cape Town, South Africa</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#C0C0C0]" />
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="mt-1 text-muted-foreground text-sm">sales.capital@naisonhardygroup.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#C0C0C0]" />
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <p className="mt-1 text-muted-foreground text-sm">(+27) 61 050 5394</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </FadeInView>

            <FadeInView direction="right" delay={0.3}>
              <GlassCard title="Confidentiality">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  All enquiries are treated with the utmost confidentiality. We adhere to strict data protection standards and will never
                  share your information with third parties without your explicit consent.
                </p>
              </GlassCard>
            </FadeInView>

            <FadeInView direction="right" delay={0.4}>
              <div className="glass p-4">
                <p className="text-muted-foreground text-xs leading-relaxed">
                  <strong className="text-foreground">Important Notice:</strong> The information provided on this website does not
                  constitute financial advice. Past performance is not indicative of future results. Please consult with a qualified
                  financial advisor before making any investment decisions.
                </p>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>
    </>
  );
}
