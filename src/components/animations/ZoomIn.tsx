import { type HTMLMotionProps, motion } from "motion/react";
import { forwardRef, type ReactNode } from "react";
import { cn } from "#/lib/utils";

interface ZoomInProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  scale?: number;
  className?: string;
}

export const ZoomIn = forwardRef<HTMLDivElement, ZoomInProps>(
  ({ children, delay = 0, duration = 0.5, scale = 0.8, className, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration, delay, ease: "easeOut" }}
        className={cn(className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  },
);

ZoomIn.displayName = "ZoomIn";
