import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/legal/terms")({
  component: TermsOfService,
  head: () => ({
    meta: [
      { title: "Terms of Service — Naison Hardy Group" },
      {
        name: "description",
        content:
          "Terms of service governing use of Naison Hardy Group websites and engagement with Naison Hardy Management, Consultancy, and Capital services.",
      },
    ],
  }),
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 font-bold text-foreground text-2xl">{title}</h2>
      <div className="space-y-3 text-muted-foreground leading-relaxed">{children}</div>
    </section>
  );
}

function TermsOfService() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      {/* Header */}
      <div className="mb-12 border-border border-b pb-8">
        <p className="mb-2 text-muted-foreground text-sm uppercase tracking-widest">Legal</p>
        <h1 className="mb-4 font-bold text-4xl text-foreground">Terms of Service</h1>
        <p className="text-muted-foreground">
          Last updated: <strong className="text-foreground">1 March 2026</strong>
        </p>
        <p className="mt-3 text-muted-foreground">
          These Terms of Service govern your use of all websites operated by Naison Hardy Group and its subsidiaries
          (Naison Hardy Management Ltd, Naison Hardy Consultancy Ltd, and Naison Hardy Capital Ltd), and the engagement
          of any services provided by those subsidiaries.
        </p>
      </div>

      <Section title="1. Acceptance of Terms">
        <p>
          By accessing or using any website or service operated by Naison Hardy Group or its subsidiaries, you agree to
          be bound by these Terms. If you do not agree, please do not use our websites or services. These Terms apply
          to all visitors, prospects, clients, and any other users.
        </p>
      </Section>

      <Section title="2. Our Services">
        <p>Naison Hardy Group provides services through three subsidiary businesses:</p>
        <ul className="ml-4 list-disc space-y-2">
          <li>
            <strong className="text-foreground">Naison Hardy Management</strong> — business management advisory,
            operational consulting, and portfolio management services.
          </li>
          <li>
            <strong className="text-foreground">Naison Hardy Consultancy</strong> — technology stack implementation
            (GoHighLevel, Notion, ClickUp, project management tools), CRM consulting, AI integration services, and
            ongoing operational support.
          </li>
          <li>
            <strong className="text-foreground">Naison Hardy Capital</strong> — investment advisory, due diligence, and
            capital deployment services.
          </li>
        </ul>
        <p>
          The specific terms governing any service engagement are set out in a separate Statement of Work or Service
          Agreement, which takes precedence over these general Terms where they conflict.
        </p>
      </Section>

      <Section title="3. Eligibility">
        <p>
          Our services are intended for business professionals and entities. By using our services, you represent that
          you are at least 18 years of age and are engaging on behalf of yourself or a legally constituted business
          entity. You are responsible for ensuring that your use of our services complies with all applicable laws in
          your jurisdiction.
        </p>
      </Section>

      <Section title="4. Client Engagements">
        <p>
          <strong className="text-foreground">4.1 Statements of Work.</strong> Each service engagement will be governed
          by a Statement of Work (SOW) or equivalent written agreement specifying scope, deliverables, timelines, and
          fees. No work commences until a SOW is signed and any required upfront payment is received.
        </p>
        <p>
          <strong className="text-foreground">4.2 Fees & Payment.</strong> Setup fees are due before work commences.
          Monthly retainers and support packages are invoiced monthly in advance. Invoices are payable within 14 days.
          Late payment may result in work being paused and interest being charged at the applicable statutory rate
          in accordance with South African law.
        </p>
        <p>
          <strong className="text-foreground">4.3 Refunds.</strong> Setup fees are non-refundable once work has
          commenced, unless we are in material breach of the SOW. Unused portions of pre-paid support hours may be
          credited to future invoices at our discretion.
        </p>
        <p>
          <strong className="text-foreground">4.4 Client Responsibilities.</strong> Clients are responsible for
          providing timely access to systems, accounts, and information necessary for us to deliver the agreed services.
          Delays caused by the client may affect timelines and may constitute grounds for additional fees.
        </p>
      </Section>

      <Section title="5. Intellectual Property">
        <p>
          <strong className="text-foreground">5.1 Our IP.</strong> All pre-existing methodologies, frameworks,
          templates, and know-how developed by Naison Hardy Group remain our intellectual property. Clients receive a
          non-exclusive licence to use deliverables for their internal business purposes.
        </p>
        <p>
          <strong className="text-foreground">5.2 Client IP.</strong> All data, content, and materials provided by
          clients remain their property. We will not use client data for any purpose other than delivering the agreed
          services.
        </p>
        <p>
          <strong className="text-foreground">5.3 Website Content.</strong> All content on our websites — including
          text, graphics, logos, and design — is owned by or licensed to Naison Hardy Group and may not be reproduced
          without prior written consent.
        </p>
      </Section>

      <Section title="6. Confidentiality">
        <p>
          Both parties agree to keep confidential any non-public information shared during the course of an engagement.
          This obligation survives termination of the engagement for a period of 3 years. Confidentiality obligations do
          not apply to information that is publicly available, independently developed, or required to be disclosed by
          law.
        </p>
      </Section>

      <Section title="7. Limitation of Liability">
        <p>
          To the fullest extent permitted by law, our total liability to you in connection with any engagement shall not
          exceed the total fees paid by you to us in the 3 months preceding the event giving rise to the claim.
        </p>
        <p>
          We shall not be liable for indirect, consequential, special, or incidental losses including loss of profit,
          loss of revenue, loss of data, or loss of goodwill — even if we have been advised of the possibility of such
          losses.
        </p>
        <p>
          Nothing in these Terms limits our liability for death or personal injury caused by our negligence, fraud, or
          fraudulent misrepresentation, or any other liability that cannot be excluded by law.
        </p>
      </Section>

      <Section title="8. Naison Hardy Capital — Important Notice">
        <p>
          Naison Hardy Capital provides investment advisory and information services. Nothing on our websites or in our
          communications constitutes financial advice, a recommendation to invest, or an offer to sell securities.
          Investments involve risk, and past performance is not a reliable indicator of future results. You should seek
          independent financial advice before making any investment decision. Naison Hardy Capital Ltd is not regulated
          by the Financial Sector Conduct Authority (FSCA) and does not conduct regulated financial activities.
        </p>
      </Section>

      <Section title="9. Termination">
        <p>
          Either party may terminate a service engagement by providing written notice as specified in the relevant SOW
          (typically 30 days). On termination, all outstanding invoices become immediately due. We will provide you with
          all deliverables completed up to the termination date.
        </p>
        <p>
          We reserve the right to suspend or terminate access to our websites immediately if you breach these Terms or
          engage in any conduct we reasonably believe is harmful to our business, clients, or reputation.
        </p>
      </Section>

      <Section title="10. Website Use">
        <p>
          You agree not to use our websites to transmit any unlawful, defamatory, or harmful content; attempt to gain
          unauthorised access to our systems; interfere with the performance of our websites; or scrape, copy, or
          reproduce any content without permission.
        </p>
      </Section>

      <Section title="11. Governing Law">
        <p>
          These Terms are governed by the laws of the Republic of South Africa. Any disputes arising from these Terms
          or our services shall be subject to the exclusive jurisdiction of the courts of South Africa.
        </p>
      </Section>

      <Section title="12. Changes to These Terms">
        <p>
          We may update these Terms from time to time. Material changes will be communicated via email or notice on our
          websites. Continued use of our services after notification constitutes acceptance of the updated Terms.
        </p>
      </Section>

      <Section title="13. Contact">
        <p>
          For any questions about these Terms, contact us at{" "}
          <a href="mailto:legal@naisonhardygroup.com" className="text-primary hover:underline">
            legal@naisonhardygroup.com
          </a>
          . For privacy enquiries, see our{" "}
          <Link to="/legal/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </Section>
    </div>
  );
}
