import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "#/components/shared/Logo";
import { Button } from "#/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "#/components/ui/sheet";
import { cn } from "#/lib/utils";

type LogoVariant = "black" | "white" | "grey" | "silver";

interface NavItem {
  label: string;
  href: string;
}

interface SubsidiaryNavProps {
  brandName: string;
  logoVariant: LogoVariant;
  navItems: NavItem[];
  className?: string;
}

export function SubsidiaryNav({ brandName, logoVariant, navItems, className }: SubsidiaryNavProps) {
  const [open, setOpen] = useState(false);
  const homeHref = navItems[0]?.href ?? "/";

  return (
    <nav
      className={cn(
        "sticky top-0 z-40 flex h-16 items-center justify-between border-border border-b bg-background/80 px-6 backdrop-blur-md",
        className,
      )}
    >
      {/* Logo / brand */}
      <Link to={homeHref} className="flex items-center gap-2">
        <Logo variant={logoVariant} />
      </Link>

      {/* Desktop links */}
      <div className="hidden items-center gap-6 md:flex">
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="font-medium text-muted-foreground text-sm transition-colors hover:text-primary"
            activeProps={{ className: "text-sm font-medium text-primary" }}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Desktop right: subsidiary home + group link */}
      <div className="hidden items-center gap-3 md:flex">
        <Link
          to={homeHref}
          className="text-muted-foreground text-xs transition-colors hover:text-primary"
          activeProps={{ className: "text-xs text-primary" }}
        >
          {brandName}
        </Link>
        <span className="text-border text-xs">|</span>
        <Link to="/" className="text-muted-foreground text-xs transition-colors hover:text-primary">
          ← Naison Hardy Group
        </Link>
      </div>

      {/* Mobile Sheet */}
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-background">
            <SheetTitle className="sr-only">{brandName} Navigation</SheetTitle>
            <div className="mb-6 flex items-center justify-between border-border border-b pb-4">
              <Logo variant={logoVariant} />
              <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close menu">
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 font-medium text-muted-foreground text-sm transition-colors hover:text-primary"
                  activeProps={{ className: "px-3 py-2 text-sm font-medium text-primary bg-primary/10" }}
                >
                  {item.label}
                </Link>
              ))}
              {/* Group link in mobile menu */}
              <div className="mt-2 border-border border-t pt-3">
                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 text-muted-foreground text-xs transition-colors hover:text-primary"
                >
                  ← Naison Hardy Group
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
