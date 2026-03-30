import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { cn } from "#/lib/utils";

interface SubsidiaryLogoProps {
  name: string;
  subtitle: string;
  href: string;
  delay: number;
  colorClass: string;
  className?: string;
}

export function SubsidiaryLogo({ name, subtitle, href, delay, colorClass, className }: SubsidiaryLogoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={cn("group", className)}
    >
      <Link to={href} className="block">
        <div className="glass relative flex flex-col items-center justify-center p-8 transition-colors duration-300 hover:bg-white/8 sm:p-10">
          {/* Logo placeholder */}
          <div
            className={cn(
              "mb-4 flex h-16 w-16 items-center justify-center border-2 font-bold text-lg transition-colors duration-300 sm:h-20 sm:w-20 sm:text-xl",
              colorClass,
              "group-hover:border-primary group-hover:text-primary",
            )}
          >
            NH
          </div>

          <h3
            className={cn(
              "font-semibold text-base tracking-wide transition-colors duration-300 sm:text-lg",
              colorClass,
              "group-hover:text-primary",
            )}
          >
            {name}
          </h3>
          <p className="mt-1 text-muted-foreground text-xs uppercase tracking-widest sm:text-sm">{subtitle}</p>
        </div>
      </Link>
    </motion.div>
  );
}
