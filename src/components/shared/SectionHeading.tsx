import { GradientText } from "#/components/animations";
import { cn } from "#/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  gradient?: boolean;
}

export function SectionHeading({ title, subtitle, className, gradient = true }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 text-center", className)}>
      {gradient ? (
        <GradientText as="h2" className="font-bold text-3xl tracking-tight sm:text-4xl">
          {title}
        </GradientText>
      ) : (
        <h2 className="font-bold text-3xl text-foreground tracking-tight sm:text-4xl">{title}</h2>
      )}
      {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
