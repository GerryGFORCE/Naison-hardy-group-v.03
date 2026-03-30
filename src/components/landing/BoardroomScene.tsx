import { cn } from "#/lib/utils";

interface BoardroomSceneProps {
  className?: string;
}

export function BoardroomScene({ className }: BoardroomSceneProps) {
  return (
    <div className={cn("-z-10 fixed inset-0", className)}>
      {/* Background image — nighttime cityscape */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/images/boardroom-night.webp')",
          filter: "blur(2px)",
        }}
      />
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
    </div>
  );
}
