import { motion } from "motion/react";
import { type ReactNode, useRef, useState } from "react";
import { cn } from "#/lib/utils";

interface TiltProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}

export function Tilt({ children, className, maxTilt = 10 }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      rotateX: -y * maxTilt,
      rotateY: x * maxTilt,
    });
  }

  function handleMouseLeave() {
    setTilt({ rotateX: 0, rotateY: 0 });
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={tilt}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ perspective: 1000 }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
