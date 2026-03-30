import { Link } from "@tanstack/react-router";
import { FadeInView } from "#/components/animations";
import { Button } from "#/components/ui/button";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export function ServiceCard({ icon, title, description, delay = 0 }: ServiceCardProps) {
  return (
    <FadeInView delay={delay} direction="up">
      <div className="glass group p-6 transition-all duration-300 hover:bg-white/10">
        <div className="mb-4 text-primary">{icon}</div>
        <h3 className="mb-2 font-semibold text-foreground text-lg">{title}</h3>
        <p className="mb-4 text-muted-foreground text-sm leading-relaxed">{description}</p>
        <Button asChild variant="ghost" size="sm" className="text-primary hover:text-primary">
          <Link to="/consultancy/services">Learn More &rarr;</Link>
        </Button>
      </div>
    </FadeInView>
  );
}
