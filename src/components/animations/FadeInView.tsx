import { type HTMLMotionProps, motion } from "motion/react";
import { forwardRef, type ReactNode } from "react";
import { cn } from "#/lib/utils";

type Direction = "up" | "down" | "left" | "right";

interface FadeInViewProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
  className?: string;
}

function getInitialTransform(direction: Direction, distance: number) {
  switch (direction) {
    case "up":
      return { y: distance };
    case "down":
      return { y: -distance };
    case "left":
      return { x: distance };
    case "right":
      return { x: -distance };
  }
}

export const FadeInView = forwardRef<HTMLDivElement, FadeInViewProps>(
  ({ children, delay = 0, duration = 0.6, direction = "up", distance = 30, className, ...props }, ref) => {
    const initialTransform = getInitialTransform(direction, distance);

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, ...initialTransform }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration, delay, ease: "easeOut" }}
        className={cn(className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  },
);

FadeInView.displayName = "FadeInView";
