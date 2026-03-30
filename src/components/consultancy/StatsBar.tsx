import { CountingNumber, FadeInView } from "#/components/animations";

interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

interface StatsBarProps {
  stats: Stat[];
}

export function StatsBar({ stats }: StatsBarProps) {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
      {stats.map((stat, i) => (
        <FadeInView key={stat.label} delay={i * 0.1} direction="up">
          <div className="glass p-6 text-center">
            <div className="font-bold text-3xl text-primary sm:text-4xl">
              <CountingNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
            </div>
            <p className="mt-2 text-muted-foreground text-sm">{stat.label}</p>
          </div>
        </FadeInView>
      ))}
    </div>
  );
}
