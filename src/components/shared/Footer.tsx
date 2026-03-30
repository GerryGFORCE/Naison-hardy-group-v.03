import { Link } from "@tanstack/react-router";
import { LanguageSwitcher } from "#/components/shared/LanguageSwitcher";
import { Discord, Instagram, LinkedIn, YouTube } from "#/components/shared/SocialIcons";
import { Separator } from "#/components/ui/separator";
import { cn } from "#/lib/utils";

export interface FooterSocials {
  linkedin: string;
  youtube: string;
  instagram: string;
  discord: string;
}

export interface FooterConfig {
  subsidiary: "consultancy" | "management" | "capital";
  socials: FooterSocials;
}

interface FooterProps {
  className?: string;
  config?: FooterConfig;
}

const subsidiaries = [
  { name: "Naison Hardy Management", href: "/management" },
  { name: "Naison Hardy Consulting", href: "/consultancy" },
  { name: "Naison Hardy Capital", href: "/capital" },
];

const socialIcons: Record<keyof FooterSocials, { icon: React.ElementType; label: string }> = {
  linkedin: { icon: LinkedIn, label: "LinkedIn" },
  youtube: { icon: YouTube, label: "YouTube" },
  instagram: { icon: Instagram, label: "Instagram" },
  discord: { icon: Discord, label: "Discord" },
};

function FooterLink({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground text-sm transition-colors hover:text-primary"
      >
        {children}
      </a>
    );
  }
  return (
    <Link to={href} className="text-muted-foreground text-sm transition-colors hover:text-primary">
      {children}
    </Link>
  );
}

export function Footer({ className, config }: FooterProps) {
  const sub = config?.subsidiary ?? "consultancy";

  const resources = [
    { label: "Pricing", href: `/${sub}/pricing` },
    { label: "Support", href: `/${sub}/support` },
    { label: "Blog", href: `/${sub}/blog` },
    { label: "Help Centre", href: `/${sub}/help` },
  ];

  const company = [
    { label: "About Us", href: `/${sub}/about` },
    { label: "Careers", href: `/${sub}/careers` },
    { label: "Privacy & GDPR", href: "/legal/privacy" },
    { label: "Terms of Service", href: "/legal/terms" },
  ];

  const defaultSocials: FooterSocials = {
    linkedin: "https://linkedin.com/company/naison-hardy-group",
    youtube: "https://youtube.com/@naisonhardygroup",
    instagram: "https://instagram.com/naisonhardygroup",
    discord: "https://discord.gg/naisonhardy",
  };

  const socials = config?.socials ?? defaultSocials;

  return (
    <footer className={cn("border-border border-t bg-background/80 px-6 py-16", className)}>
      <div className="mx-auto max-w-7xl">
        {/* Main grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">Naison Hardy Group</h3>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
              A holding company driving growth across management, consultancy, and capital services.
            </p>
            <div className="mt-4 space-y-1 text-muted-foreground text-sm">
              <p>info@naisonhardygroup.com</p>
              <p>Cape Town, South Africa</p>
            </div>
          </div>

          {/* Our Companies */}
          <div>
            <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">Our Companies</h3>
            <ul className="mt-4 space-y-2">
              {subsidiaries.map((s) => (
                <li key={s.href}>
                  <FooterLink href={s.href}>{s.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">Resources</h3>
            <ul className="mt-4 space-y-2">
              {resources.map((r) => (
                <li key={r.href}>
                  <FooterLink href={r.href}>{r.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              {company.map((c) => (
                <li key={c.href}>
                  <FooterLink href={c.href}>{c.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">Follow Us</h3>
            <ul className="mt-4 space-y-3">
              {(Object.keys(socialIcons) as Array<keyof FooterSocials>).map((key) => {
                const { icon: Icon, label } = socialIcons[key];
                return (
                  <li key={key}>
                    <a
                      href={socials[key]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground text-sm transition-colors hover:text-primary"
                    >
                      <Icon className="h-4 w-4" />
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Language Switcher */}
        <div className="mb-6 flex items-center justify-center">
          <LanguageSwitcher />
        </div>

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-muted-foreground text-xs">
            &copy; {new Date().getFullYear()} Naison Hardy Group. All rights reserved. Registered in Cape Town, South Africa.
          </p>
          <div className="flex items-center gap-4">
            <FooterLink href="/legal/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/legal/terms">Terms of Service</FooterLink>
            <FooterLink href="/">← Back to Group</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
