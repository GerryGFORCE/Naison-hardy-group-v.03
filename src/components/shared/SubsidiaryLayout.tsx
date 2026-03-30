import { Outlet } from "@tanstack/react-router";
import { Footer, type FooterConfig } from "#/components/shared/Footer";
import { SubsidiaryNav } from "#/components/shared/SubsidiaryNav";

type LogoVariant = "black" | "white" | "grey" | "silver";

interface NavItem {
  label: string;
  href: string;
}

interface SubsidiaryLayoutProps {
  brandName: string;
  logoVariant: LogoVariant;
  navItems: NavItem[];
  footerConfig?: FooterConfig;
}

export function SubsidiaryLayout({ brandName, logoVariant, navItems, footerConfig }: SubsidiaryLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SubsidiaryNav brandName={brandName} logoVariant={logoVariant} navItems={navItems} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer config={footerConfig} />
    </div>
  );
}
