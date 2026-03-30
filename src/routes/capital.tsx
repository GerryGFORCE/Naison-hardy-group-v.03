import { createFileRoute } from "@tanstack/react-router";
import type { FooterConfig } from "#/components/shared/Footer";
import { SubsidiaryLayout } from "#/components/shared/SubsidiaryLayout";

const navItems = [
  { label: "Home", href: "/capital" },
  { label: "Services", href: "/capital/services" },
  { label: "About", href: "/capital/about" },
  { label: "Contact", href: "/capital/contact" },
];

const footerConfig: FooterConfig = {
  subsidiary: "capital",
  socials: {
    linkedin: "https://linkedin.com/company/naison-hardy-capital",
    youtube: "https://youtube.com/@naisonhardycapital",
    instagram: "https://instagram.com/naisonhardycapital",
    discord: "https://discord.gg/naisonhardycapital",
  },
};

export const Route = createFileRoute("/capital")({
  component: CapitalLayout,
});

function CapitalLayout() {
  return (
    <SubsidiaryLayout
      brandName="Naison Hardy Capital"
      logoVariant="silver"
      navItems={navItems}
      footerConfig={footerConfig}
    />
  );
}
