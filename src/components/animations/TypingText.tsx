import { motion } from "motion/react";
import { cn } from "#/lib/utils";

interface TypingTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function TypingText({ text, className, speed = 0.04, delay = 0, as: Tag = "span" }: TypingTextProps) {
  const chars = text.split("");

  return (
    <Tag className={cn("inline-block", className)}>
      {chars.map((char, i) => (
        <motion.span
          key={`${i}-${char}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.05, delay: delay + i * speed }}
        >
          {char}
        </motion.span>
      ))}
    </Tag>
  );
}
