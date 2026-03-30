import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/legal/privacy")({
  component: PrivacyPolicy,
  head: () => ({
    meta: [
      { title: "Privacy Policy & GDPR — Naison Hardy Group" },
      {
        name: "description",
        content:
          "Privacy policy and GDPR compliance information for Naison Hardy Group and its subsidiaries: Naison Hardy Management, Naison Hardy Consultancy, and Naison Hardy Capital.",
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

function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      {/* Header */}
      <div className="mb-12 border-border border-b pb-8">
        <p className="mb-2 text-muted-foreground text-sm uppercase tracking-widest">Legal</p>
        <h1 className="mb-4 font-bold text-4xl text-foreground">Privacy Policy & GDPR</h1>
        <p className="text-muted-foreground">
          Last updated: <strong className="text-foreground">1 March 2026</strong>
        </p>
        <p className="mt-3 text-muted-foreground">
          This policy applies to Naison Hardy Group and all its subsidiaries: Naison Hardy Management Ltd, Naison Hardy
          Consultancy Ltd, and Naison Hardy Capital Ltd (collectively "we", "us", "our").
        </p>
      </div>

      <Section title="1. Who We Are">
        <p>
          Naison Hardy Group is a holding company registered in Cape Town, South Africa. We operate three subsidiary
          businesses:
        </p>
        <ul className="ml-4 list-disc space-y-1">
          <li>
            <strong className="text-foreground">Naison Hardy Management</strong> — business management and operational
            consulting services.
          </li>
          <li>
            <strong className="text-foreground">Naison Hardy Consultancy</strong> — CRM, technology stack, and
            operational systems consulting (including GoHighLevel, Notion, ClickUp, and AI integrations).
          </li>
          <li>
            <strong className="text-foreground">Naison Hardy Capital</strong> — investment advisory and capital
            deployment services.
          </li>
        </ul>
        <p>
          For data protection purposes, Naison Hardy Group acts as the data controller. Our registered address is in
          Cape Town, South Africa. Contact:{" "}
          <a href="mailto:privacy@naisonhardygroup.com" className="text-primary hover:underline">
            privacy@naisonhardygroup.com
          </a>
        </p>
      </Section>

      <Section title="2. What Data We Collect">
        <p>We may collect the following categories of personal data:</p>
        <p>
          <strong className="text-foreground">Identity & Contact Data:</strong> Name, email address, phone number,
          company name, job title, and LinkedIn profile URL — provided when you contact us, book a discovery call, or
          fill in a form on any of our websites.
        </p>
        <p>
          <strong className="text-foreground">Technical Data:</strong> IP address, browser type, device type, pages
          visited, time on site, and referral source — collected automatically via cookies and analytics tools.
        </p>
        <p>
          <strong className="text-foreground">Communications Data:</strong> Email correspondence, meeting notes, and
          proposals exchanged during a client engagement.
        </p>
        <p>
          <strong className="text-foreground">Financial Data:</strong> Invoicing information, payment records, and
          contract details — shared when you engage our services. We do not store payment card details; payments are
          processed by authorised third-party processors.
        </p>
        <p>
          <strong className="text-foreground">Marketing Data:</strong> Your preferences for receiving marketing
          communications from us.
        </p>
      </Section>

      <Section title="3. How We Use Your Data">
        <p>We use your personal data for the following purposes and on the following legal bases:</p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-border border-b">
                <th className="py-3 text-left font-semibold text-foreground">Purpose</th>
                <th className="py-3 text-left font-semibold text-foreground">Legal Basis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                ["Respond to enquiries and book discovery calls", "Legitimate interests / Pre-contractual steps"],
                ["Deliver contracted services and manage client relationships", "Contract performance"],
                ["Send project updates, proposals, and invoices", "Contract performance"],
                ["Improve our website and services", "Legitimate interests"],
                ["Send marketing communications (with your consent)", "Consent"],
                ["Comply with legal obligations", "Legal obligation"],
                ["Prevent fraud and protect our legal rights", "Legitimate interests"],
              ].map(([purpose, basis]) => (
                <tr key={purpose}>
                  <td className="py-3 pr-4">{purpose}</td>
                  <td className="py-3 text-foreground">{basis}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="4. Your GDPR Rights">
        <p>
          As a data subject under POPIA (Protection of Personal Information Act, South Africa) and applicable data
          protection law, you have the following rights. To exercise any of them, contact us at{" "}
          <a href="mailto:privacy@naisonhardygroup.com" className="text-primary hover:underline">
            privacy@naisonhardygroup.com
          </a>
          . We will respond within 30 days.
        </p>
        <ul className="ml-4 list-disc space-y-2">
          <li>
            <strong className="text-foreground">Right of Access</strong> — request a copy of the personal data we hold
            about you.
          </li>
          <li>
            <strong className="text-foreground">Right to Rectification</strong> — request correction of inaccurate or
            incomplete data.
          </li>
          <li>
            <strong className="text-foreground">Right to Erasure ("Right to be Forgotten")</strong> — request deletion
            of your data where we have no legitimate reason to continue processing it.
          </li>
          <li>
            <strong className="text-foreground">Right to Restrict Processing</strong> — request that we limit how we use
            your data in certain circumstances.
          </li>
          <li>
            <strong className="text-foreground">Right to Data Portability</strong> — receive your data in a structured,
            machine-readable format.
          </li>
          <li>
            <strong className="text-foreground">Right to Object</strong> — object to processing based on legitimate
            interests or for direct marketing purposes.
          </li>
          <li>
            <strong className="text-foreground">Rights related to Automated Decision-Making</strong> — we do not make
            decisions about you solely by automated means that produce legal or significant effects.
          </li>
        </ul>
        <p>
          You also have the right to lodge a complaint with the Information Regulator of South Africa at{" "}
          <a
            href="https://inforegulator.org.za"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            inforegulator.org.za
          </a>
          .
        </p>
      </Section>

      <Section title="5. Data Sharing & Third Parties">
        <p>We do not sell your personal data. We may share it with:</p>
        <ul className="ml-4 list-disc space-y-2">
          <li>
            <strong className="text-foreground">Service providers</strong> — tools we use to operate our business (e.g.
            GoHighLevel for CRM, Google Workspace for email, Stripe for payments, Calendly for booking). Each is bound
            by data processing agreements.
          </li>
          <li>
            <strong className="text-foreground">Professional advisors</strong> — lawyers and accountants under
            confidentiality obligations.
          </li>
          <li>
            <strong className="text-foreground">Regulatory bodies</strong> — when required by law or to protect our
            legal rights.
          </li>
          <li>
            <strong className="text-foreground">Group companies</strong> — other Naison Hardy subsidiaries, where
            relevant to delivering services you have requested.
          </li>
        </ul>
        <p>
          Where data is transferred outside South Africa, we ensure appropriate safeguards are in place in
          accordance with POPIA and applicable cross-border data transfer requirements.
        </p>
      </Section>

      <Section title="6. Data Retention">
        <p>We retain personal data only for as long as necessary:</p>
        <ul className="ml-4 list-disc space-y-2">
          <li>Client data is retained for 7 years after the end of an engagement (for legal and tax compliance).</li>
          <li>Prospecting data (enquiries that did not become clients) is retained for up to 2 years.</li>
          <li>Marketing consent records are retained until you withdraw consent.</li>
          <li>Technical/analytics data is anonymised after 26 months.</li>
        </ul>
      </Section>

      <Section title="7. Cookies">
        <p>
          Our websites use essential cookies to function and, where you consent, analytics cookies to understand how
          visitors use our site. You can manage cookie preferences at any time via your browser settings. For detailed
          information on the cookies we use, please see our Cookie Policy.
        </p>
      </Section>

      <Section title="8. Security">
        <p>
          We implement appropriate technical and organisational measures to protect your data against unauthorised
          access, alteration, disclosure, or destruction. These include encrypted data transmission (SSL/TLS), access
          controls, and regular security reviews. In the event of a data breach that poses a risk to your rights and
          freedoms, we will notify the Information Regulator of South Africa within 72 hours and you without undue
          delay.
        </p>
      </Section>

      <Section title="9. Children's Data">
        <p>
          Our services are directed at business professionals and are not intended for individuals under 18 years of
          age. We do not knowingly collect data from minors.
        </p>
      </Section>

      <Section title="10. Changes to This Policy">
        <p>
          We may update this Privacy Policy periodically. Material changes will be notified by email (where we hold your
          address) or by a prominent notice on our website. The "Last updated" date at the top of this page will always
          reflect the most recent revision.
        </p>
      </Section>

      <Section title="11. Contact Us">
        <p>For any privacy-related queries or to exercise your rights:</p>
        <div className="glass mt-2 p-5">
          <p className="font-semibold text-foreground">Naison Hardy Group — Data Privacy</p>
          <p>
            Email:{" "}
            <a href="mailto:privacy@naisonhardygroup.com" className="text-primary hover:underline">
              privacy@naisonhardygroup.com
            </a>
          </p>
          <p>Post: Naison Hardy Group, Cape Town, South Africa</p>
        </div>
      </Section>
    </div>
  );
}
