import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { FadeInView } from "#/components/animations";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";

export interface SlideCompany {
  name: string;
  type: "Owned" | "Managed";
  description: string;
  tags: string[];
  url?: string;
  image: string;
  href?: string;
}

interface PortfolioSliderProps {
  companies: SlideCompany[];
}

export function PortfolioSlider({ companies }: PortfolioSliderProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % companies.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [companies.length]);

  const prev = () => setCurrent((c) => (c - 1 + companies.length) % companies.length);
  const next = () => setCurrent((c) => (c + 1) % companies.length);

  return (
    <FadeInView>
      <div className="relative">
        {/* Slide container */}
        <div className="relative min-h-[320px] overflow-hidden">
          {companies.map((company, i) => (
            <div
              key={company.name}
              className={`transition-all duration-500 ease-in-out ${
                i === current ? "pointer-events-auto relative opacity-100" : "pointer-events-none absolute inset-0 opacity-0"
              }`}
            >
              <div className="glass grid overflow-hidden border-white/10 lg:grid-cols-2">
                {/* Image */}
                <div className="relative h-56 lg:h-80">
                  <img
                    src={company.image}
                    alt={company.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/30 to-transparent" />
                </div>
                {/* Content */}
                <div className="flex flex-col justify-center gap-4 p-8">
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      className={
                        company.type === "Owned"
                          ? "bg-primary/20 text-primary"
                          : "bg-white/10 text-muted-foreground"
                      }
                    >
                      {company.type}
                    </Badge>
                    {company.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="font-bold text-2xl text-foreground">{company.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{company.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {company.href && (
                      <Button asChild variant="outline" size="sm">
                        <a href={company.href}>Learn More</a>
                      </Button>
                    )}
                    {company.url && (
                      <Button asChild variant="ghost" size="sm">
                        <a
                          href={company.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5"
                        >
                          Visit Site
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="mt-5 flex items-center justify-between">
          {/* Progress dots */}
          <div className="flex items-center gap-2">
            {companies.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-primary"
                    : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                }`}
              />
            ))}
          </div>
          {/* Arrow navigation */}
          <div className="flex gap-2">
            <Button type="button" variant="outline" size="icon" className="h-8 w-8" onClick={prev}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button type="button" variant="outline" size="icon" className="h-8 w-8" onClick={next}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </FadeInView>
  );
}
