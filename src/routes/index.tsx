import { createFileRoute } from "@tanstack/react-router";
import { FadeIn } from "#/components/animations";
import { BoardroomScene } from "#/components/landing/BoardroomScene";
import { SubsidiaryLogo } from "#/components/landing/SubsidiaryLogo";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      {
        title: "Naison Hardy Group",
      },
      {
        name: "description",
        content: "Naison Hardy Group — a holding company driving growth across management, consultancy, and capital services.",
      },
    ],
  }),
});

const subsidiaries = [
  {
    name: "Naison Hardy",
    subtitle: "Management",
    href: "/management",
    colorClass: "text-white border-white/60",
  },
  {
    name: "Naison Hardy",
    subtitle: "Consultancy",
    href: "/consultancy",
    colorClass: "text-gray-400 border-gray-400/60",
  },
  {
    name: "Naison Hardy",
    subtitle: "Capital",
    href: "/capital",
    colorClass: "text-[#C0C0C0] border-[#C0C0C0]/60",
  },
] as const;

function LandingPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <BoardroomScene />

      <FadeIn duration={0.8} className="relative z-10 w-full px-6">
        {/* Group name */}
        <h1 className="mb-12 text-center font-light text-muted-foreground text-sm uppercase tracking-[0.3em]">Naison Hardy Group</h1>

        {/* Subsidiary options */}
        <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
          {subsidiaries.map((sub, i) => (
            <SubsidiaryLogo
              key={sub.href}
              name={sub.name}
              subtitle={sub.subtitle}
              href={sub.href}
              delay={i * 0.15}
              colorClass={sub.colorClass}
            />
          ))}
        </div>
      </FadeIn>
    </div>
  );
}
