import { AnimatePresence, motion } from "motion/react";
import { cn } from "#/lib/utils";

interface CenterPromptProps {
  visible: boolean;
  className?: string;
}

export function CenterPrompt({ visible, className }: CenterPromptProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={cn("pointer-events-none absolute inset-0 z-20 flex items-center justify-center", className)}
        >
          <div className="text-center">
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="relative inline-block bg-[length:200%_100%] bg-gradient-to-r from-white via-primary to-white bg-clip-text font-light text-2xl text-transparent uppercase tracking-widest sm:text-3xl"
            >
              Enter
            </motion.p>
            <motion.div
              animate={{ scaleX: [0.3, 1, 0.3] }}
              transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
