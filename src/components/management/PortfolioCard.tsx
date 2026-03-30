import { Link } from "@tanstack/react-router";
import { FadeInView } from "#/components/animations";
import { GlassCard } from "#/components/shared/GlassCard";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";

interface PortfolioCardProps {
  name: string;
  description: string;
  tags: string[];
  href?: string;
  featured?: boolean;
  delay?: number;
}

export function PortfolioCard({ name, description, tags, href, featured, delay = 0 }: PortfolioCardProps) {
  return (
    <FadeInView delay={delay} direction="up">
      <GlassCard className={featured ? "border-primary/30 ring-1 ring-primary/20" : ""}>
        <div className="space-y-4">
          {featured && (
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              Featured
            </Badge>
          )}
          <h3 className="font-semibold text-foreground text-xl">{name}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          {href && (
            <Button asChild variant="outline" size="sm" className="mt-2">
              <Link to={href}>Learn More</Link>
            </Button>
          )}
        </div>
      </GlassCard>
    </FadeInView>
  );
}
