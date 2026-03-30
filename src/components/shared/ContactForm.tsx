import { useState } from "react";
import { GlassCard } from "#/components/shared/GlassCard";
import { Button } from "#/components/ui/button";
import { Input } from "#/components/ui/input";
import { Label } from "#/components/ui/label";
import { Textarea } from "#/components/ui/textarea";
import { cn } from "#/lib/utils";
import { client } from "#/orpc/client";

interface ContactFormProps {
  source?: string;
  className?: string;
  extraFields?: React.ReactNode;
}

interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
  serviceInterest: string;
}

export function ContactForm({ source, className, extraFields }: ContactFormProps) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    message: "",
    serviceInterest: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      await client.submitContact({
        name: form.name,
        email: form.email,
        company: form.company || undefined,
        message: form.message,
        source,
        serviceInterest: form.serviceInterest || undefined,
      });
      setStatus("success");
      setForm({ name: "", email: "", company: "", message: "", serviceInterest: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <GlassCard className={cn("p-8 text-center", className)}>
        <div className="mb-4 text-4xl text-primary">&#10003;</div>
        <h3 className="mb-2 font-semibold text-foreground text-xl">Message Sent</h3>
        <p className="text-muted-foreground">Thank you for your inquiry. We will be in touch shortly.</p>
        <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
          Send Another
        </Button>
      </GlassCard>
    );
  }

  return (
    <GlassCard className={cn(className)}>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            required
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            placeholder="Your name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            placeholder="your@email.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            value={form.company}
            onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
            placeholder="Your company"
          />
        </div>

        {extraFields}

        <div className="space-y-2">
          <Label htmlFor="message">Message *</Label>
          <Textarea
            id="message"
            required
            minLength={10}
            rows={5}
            value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
            placeholder="How can we help you?"
          />
        </div>

        {status === "error" && <p className="text-destructive text-sm">{errorMessage}</p>}

        <Button type="submit" size="lg" className="w-full font-semibold" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </GlassCard>
  );
}
