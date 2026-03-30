import { FadeInView } from "#/components/animations";
import { Separator } from "#/components/ui/separator";

interface ServicePillarProps {
  title: string;
  description: string;
  features: string[];
  index: number;
}

export function ServicePillar({ title, description, features, index }: ServicePillarProps) {
  return (
    <FadeInView delay={index * 0.2} direction="up">
      <section className="py-16">
        {index > 0 && <Separator className="mb-16" />}
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <span className="font-mono text-[#C0C0C0]/40 text-sm uppercase tracking-widest">Pillar {index + 1}</span>
              <h3 className="mt-2 font-bold text-2xl text-foreground sm:text-3xl">{title}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{description}</p>
            </div>
            <div className="space-y-3">
              {features.map((feature) => (
                <div key={feature} className="glass flex items-center gap-3 p-4">
                  <span className="h-2 w-2 shrink-0 bg-[#C0C0C0]" />
                  <span className="text-foreground text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </FadeInView>
  );
}
