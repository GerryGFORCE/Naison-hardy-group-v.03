import { cn } from "#/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  from?: string;
  via?: string;
  to?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export function GradientText({ children, className, from = "from-primary", via, to = "to-white", as: Tag = "span" }: GradientTextProps) {
  return <Tag className={cn("bg-gradient-to-r bg-clip-text text-transparent", from, via, to, className)}>{children}</Tag>;
}
