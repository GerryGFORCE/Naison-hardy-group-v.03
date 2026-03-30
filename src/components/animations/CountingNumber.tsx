import { useInView, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";
import { cn } from "#/lib/utils";

interface CountingNumberProps {
  value: number;
  className?: string;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

export function CountingNumber({ value, className, duration = 2, prefix = "", suffix = "" }: CountingNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.round(latest)}${suffix}`;
      }
    });
    return unsubscribe;
  }, [springValue, prefix, suffix]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}0{suffix}
    </span>
  );
}
