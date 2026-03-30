import { Link } from "@tanstack/react-router";
import { FadeInView, StarsBackground } from "#/components/animations";
import { Button } from "#/components/ui/button";
import { cn } from "#/lib/utils";

interface PageHeroProps {
  title: React.ReactNode;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  showStars?: boolean;
  className?: string;
}

export function PageHero({ title, subtitle, ctaText, ctaHref, showStars = false, className }: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden px-6 py-24 sm:py-32", className)}>
      {showStars && <StarsBackground />}
      <div className="relative mx-auto max-w-4xl text-center">
        <FadeInView direction="up" duration={0.8}>
          <div className="mb-6 font-bold text-4xl tracking-tight sm:text-5xl lg:text-6xl">{title}</div>
        </FadeInView>
        {subtitle && (
          <FadeInView direction="up" delay={0.2} duration={0.8}>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">{subtitle}</p>
          </FadeInView>
        )}
        {ctaText && ctaHref && (
          <FadeInView direction="up" delay={0.4} duration={0.8}>
            <div className="mt-8">
              <Button asChild size="lg" className="px-8 font-semibold text-base">
                <Link to={ctaHref}>{ctaText}</Link>
              </Button>
            </div>
          </FadeInView>
        )}
      </div>
    </section>
  );
}
