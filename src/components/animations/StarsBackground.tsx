import { useEffect, useRef } from "react";
import { cn } from "#/lib/utils";

interface StarsBackgroundProps {
  className?: string;
  starCount?: number;
  speed?: number;
}

export function StarsBackground({ className, starCount = 100, speed = 0.5 }: StarsBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.3,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinkleOffset: Math.random() * Math.PI * 2,
    }));

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      // Redistribute stars on resize
      for (const star of stars) {
        star.x = Math.random() * canvas.width;
        star.y = Math.random() * canvas.height;
      }
    }

    function animate(time: number) {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const star of stars) {
        const twinkle = Math.sin(time * star.twinkleSpeed * speed + star.twinkleOffset);
        const opacity = star.opacity + twinkle * 0.2;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.1, opacity)})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    }

    resize();
    window.addEventListener("resize", resize);
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [starCount, speed]);

  return <canvas ref={canvasRef} className={cn("pointer-events-none absolute inset-0 h-full w-full", className)} />;
}
