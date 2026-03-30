import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "#/components/ui/card";
import { cn } from "#/lib/utils";

interface GlassCardProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  headerClassName?: string;
}

export function GlassCard({ title, description, children, className, headerClassName }: GlassCardProps) {
  return (
    <Card className={cn("glass border-white/10 bg-white/5", className)}>
      {(title || description) && (
        <CardHeader className={headerClassName}>
          {title && <CardTitle className="text-foreground">{title}</CardTitle>}
          {description && <CardDescription className="text-muted-foreground">{description}</CardDescription>}
        </CardHeader>
      )}
      {children && <CardContent>{children}</CardContent>}
    </Card>
  );
}
