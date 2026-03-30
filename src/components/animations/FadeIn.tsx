import { type HTMLMotionProps, motion } from "motion/react";
import { forwardRef, type ReactNode } from "react";
import { cn } from "#/lib/utils";

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const FadeIn = forwardRef<HTMLDivElement, FadeInProps>(({ children, delay = 0, duration = 0.5, className, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
});

FadeIn.displayName = "FadeIn";
