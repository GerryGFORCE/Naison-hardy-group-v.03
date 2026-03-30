import { Link } from "@tanstack/react-router";
import { FadeInView } from "#/components/animations";
import { Button } from "#/components/ui/button";
import { cn } from "#/lib/utils";

interface CTASectionProps {
  heading: string;
  description?: string;
  buttonText: string;
  buttonHref: string;
  className?: string;
}

export function CTASection({ heading, description, buttonText, buttonHref, className }: CTASectionProps) {
  return (
    <section className={cn("border-border border-t px-6 py-20", className)}>
      <FadeInView className="mx-auto max-w-3xl text-center">
        <h2 className="font-bold text-3xl text-foreground tracking-tight sm:text-4xl">{heading}</h2>
        {description && <p className="mt-4 text-lg text-muted-foreground">{description}</p>}
        <div className="mt-8">
          <Button asChild size="lg" className="px-8 font-semibold text-base">
            <Link to={buttonHref}>{buttonText}</Link>
          </Button>
        </div>
      </FadeInView>
    </section>
  );
}
