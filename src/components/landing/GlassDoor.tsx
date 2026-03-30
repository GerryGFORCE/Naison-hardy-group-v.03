import { motion } from "motion/react";
import { cn } from "#/lib/utils";

interface GlassDoorProps {
  isOpen: boolean;
  onOpen: () => void;
  className?: string;
}

export function GlassDoor({ isOpen, onOpen, className }: GlassDoorProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 z-10", isOpen && "pointer-events-none", className)} aria-hidden="true">
      {/* Left door (desktop) / Top door (mobile) */}
      <motion.div
        initial={{ x: "0%", y: "0%" }}
        animate={
          isOpen
            ? {
                x: ["-100%", "-100%"],
                y: ["0%", "-100%"],
              }
            : { x: "0%", y: "0%" }
        }
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        className="pointer-events-auto absolute top-0 left-0 h-full w-1/2 cursor-pointer will-change-transform max-md:h-1/2 max-md:w-full"
        style={{ willChange: "transform" }}
        onClick={!isOpen ? onOpen : undefined}
        onKeyDown={
          !isOpen
            ? (e) => {
                if (e.key === "Enter" || e.key === " ") onOpen();
              }
            : undefined
        }
        role={!isOpen ? "button" : undefined}
        tabIndex={!isOpen ? 0 : undefined}
        aria-label={!isOpen ? "Open doors to enter" : undefined}
      >
        <div className="glass-strong h-full w-full" />
        {/* Handle line */}
        <div className="-translate-y-1/2 absolute top-1/2 right-4 h-16 w-px bg-white/20 max-md:top-auto max-md:right-1/2 max-md:bottom-4 max-md:h-px max-md:w-16 max-md:translate-x-1/2 max-md:translate-y-0" />
      </motion.div>

      {/* Right door (desktop) / Bottom door (mobile) */}
      <motion.div
        initial={{ x: "0%", y: "0%" }}
        animate={
          isOpen
            ? {
                x: ["100%", "100%"],
                y: ["0%", "100%"],
              }
            : { x: "0%", y: "0%" }
        }
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        className="pointer-events-auto absolute top-0 right-0 h-full w-1/2 cursor-pointer will-change-transform max-md:top-auto max-md:bottom-0 max-md:h-1/2 max-md:w-full"
        style={{ willChange: "transform" }}
        onClick={!isOpen ? onOpen : undefined}
        role="presentation"
      >
        <div className="glass-strong h-full w-full" />
        {/* Handle line */}
        <div className="-translate-y-1/2 absolute top-1/2 left-4 h-16 w-px bg-white/20 max-md:top-4 max-md:right-1/2 max-md:left-auto max-md:h-px max-md:w-16 max-md:translate-x-1/2 max-md:translate-y-0" />
      </motion.div>
    </div>
  );
}
