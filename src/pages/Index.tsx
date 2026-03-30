import { useState, useEffect } from "react";
import groupLogo from "@/assets/group-transparent.png";
import managementLogo from "@/assets/management-transparent.png";
import consultingLogo from "@/assets/consulting-transparent.png";
import capitalLogo from "@/assets/capital-transparent.png";
import boardroom from "@/assets/boardroom.png";

const subsidiaries = [
  { name: "Naison Hardy Management", logo: managementLogo, url: "https://naisонhardymanagement.com" },
  { name: "Naison Hardy Consulting", logo: consultingLogo, url: "https://naisonhardyconsulting.com" },
  { name: "Naison Hardy Capital", logo: capitalLogo, url: "https://naisonhardycapital.com" },
];

const Index = () => {
  const [doorOpen, setDoorOpen] = useState(false);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setDoorOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubsidiaryClick = (index: number, url: string) => {
    setClickedIndex(index);
    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
      setTimeout(() => setClickedIndex(null), 400);
    }, 700);
  };

  return (
    <div className="min-h-screen bg-[hsl(0,0%,5%)] flex flex-col">
      <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
        {/* Boardroom background */}
        <img
          src={boardroom}
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-[3px] brightness-[0.35]"
        />

        {/* Subsidiary logos behind the door */}
        <div
          className="relative z-10 flex flex-col items-center gap-8 sm:gap-12 px-4 transition-opacity duration-700"
          style={{ opacity: doorOpen ? 1 : 0 }}
        >
          {/* Top row - Management & Consulting (inverted triangle) */}
          <div className="flex items-center gap-20 sm:gap-32">
            {subsidiaries.slice(0, 2).map((sub, i) => (
              <button
                key={sub.name}
                onClick={() => handleSubsidiaryClick(i, sub.url)}
                className="block w-36 sm:w-48 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:brightness-125 active:scale-[0.97] cursor-pointer bg-transparent border-none p-0"
                style={{
                  filter: "drop-shadow(0 6px 24px rgba(0,0,0,0.5))",
                  transform: clickedIndex === i ? "scale(2.5)" : "scale(1)",
                  opacity: clickedIndex === i ? 0 : clickedIndex !== null ? 0.3 : 1,
                }}
              >
                <img src={sub.logo} alt={sub.name} className="w-full" />
              </button>
            ))}
          </div>

          {/* Bottom - Capital */}
          <button
            onClick={() => handleSubsidiaryClick(2, subsidiaries[2].url)}
            className="block w-36 sm:w-48 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:brightness-125 active:scale-[0.97] cursor-pointer bg-transparent border-none p-0"
            style={{
              filter: "drop-shadow(0 6px 24px rgba(0,0,0,0.5))",
              transform: clickedIndex === 2 ? "scale(2.5)" : "scale(1)",
              opacity: clickedIndex === 2 ? 0 : clickedIndex !== null ? 0.3 : 1,
            }}
          >
            <img src={subsidiaries[2].logo} alt={subsidiaries[2].name} className="w-full" />
          </button>
        </div>

        {/* Glass sliding doors */}
        {/* Left door */}
        <div
          className="absolute inset-y-0 left-0 z-20 w-1/2 transition-transform duration-[3s] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
          style={{
            transform: doorOpen ? "translateX(-100%)" : "translateX(0)",
            background: "linear-gradient(135deg, hsla(0,0%,100%,0.08) 0%, hsla(0,0%,100%,0.03) 50%, hsla(0,0%,100%,0.06) 100%)",
            backdropFilter: "blur(12px)",
            borderRight: "1px solid hsla(0,0%,100%,0.1)",
            boxShadow: "inset 0 0 60px hsla(0,0%,100%,0.04), 4px 0 30px hsla(0,0%,0%,0.3)",
          }}
        >
          {/* Left half of logo */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[140px] sm:w-[180px] h-auto overflow-hidden"
          >
            <img
              src={groupLogo}
              alt=""
              className="w-[280px] sm:w-[360px] max-w-none"
              style={{ filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.4))" }}
            />
          </div>
        </div>

        {/* Right door */}
        <div
          className="absolute inset-y-0 right-0 z-20 w-1/2 transition-transform duration-[3s] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
          style={{
            transform: doorOpen ? "translateX(100%)" : "translateX(0)",
            background: "linear-gradient(225deg, hsla(0,0%,100%,0.08) 0%, hsla(0,0%,100%,0.03) 50%, hsla(0,0%,100%,0.06) 100%)",
            backdropFilter: "blur(12px)",
            borderLeft: "1px solid hsla(0,0%,100%,0.1)",
            boxShadow: "inset 0 0 60px hsla(0,0%,100%,0.04), -4px 0 30px hsla(0,0%,0%,0.3)",
          }}
        >
          {/* Right half of logo */}
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 w-[140px] sm:w-[180px] h-auto overflow-hidden"
          >
            <img
              src={groupLogo}
              alt=""
              className="w-[280px] sm:w-[360px] max-w-none ml-[-140px] sm:ml-[-180px]"
              style={{ filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.4))" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
