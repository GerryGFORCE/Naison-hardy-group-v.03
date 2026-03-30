import { cn } from "#/lib/utils";

type LogoVariant = "black" | "white" | "grey" | "silver";

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  showText?: boolean;
}

const variantStyles: Record<LogoVariant, string> = {
  black: "text-black",
  white: "text-white",
  grey: "text-gray-400",
  silver: "text-[#C0C0C0]",
};

export function Logo({ variant = "white", className, showText = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {/* Placeholder logo — replace with actual SVG when provided */}
      <div
        className={cn(
          "flex h-8 w-8 items-center justify-center border font-bold text-sm",
          variantStyles[variant],
          variant === "black" ? "border-gray-700" : "border-current",
        )}
      >
        NH
      </div>
      {showText && <span className={cn("font-semibold text-sm uppercase tracking-wider", variantStyles[variant])}>Naison Hardy</span>}
    </div>
  );
}
