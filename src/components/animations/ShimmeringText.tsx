import { cn } from "#/lib/utils";

interface ShimmeringTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export function ShimmeringText({ children, className, as: Tag = "span" }: ShimmeringTextProps) {
  return (
    <Tag
      className={cn(
        "relative inline-block animate-shimmer bg-[length:200%_100%] bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent",
        className,
      )}
      style={{
        animation: "shimmer 3s ease-in-out infinite",
      }}
    >
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
      {children}
    </Tag>
  );
}
