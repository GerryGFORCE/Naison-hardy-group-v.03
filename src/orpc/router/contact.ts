import { os } from "@orpc/server";
import { ContactFormSchema } from "#/orpc/schema";

export const submitContact = os.input(ContactFormSchema).handler(({ input }) => {
  // Log to console for now — replace with email/DB later
  console.log("[Contact Form Submission]", {
    name: input.name,
    email: input.email,
    company: input.company,
    message: input.message,
    source: input.source,
    serviceInterest: input.serviceInterest,
    timestamp: new Date().toISOString(),
  });

  return { success: true, message: "Thank you for your inquiry. We will be in touch shortly." };
});
