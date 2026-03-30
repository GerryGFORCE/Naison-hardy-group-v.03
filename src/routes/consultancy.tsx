import { createFileRoute } from "@tanstack/react-router";
import type { FooterConfig } from "#/components/shared/Footer";
import { SubsidiaryLayout } from "#/components/shared/SubsidiaryLayout";

const navItems = [
  { label: "Home", href: "/consultancy" },
  { label: "Services", href: "/consultancy/services" },
  { label: "Solutions", href: "/consultancy/solutions" },
  { label: "About", href: "/consultancy/about" },
  { label: "Contact", href: "/consultancy/contact" },
];

const footerConfig: FooterConfig = {
  subsidiary: "consultancy",
  socials: {
    linkedin: "https://linkedin.com/company/naison-hardy-consultancy",
    youtube: "https://youtube.com/@naisonhardyconsultancy",
    instagram: "https://instagram.com/naisonhardyconsultancy",
    discord: "https://discord.gg/naisonhardyconsultancy",
  },
};

export const Route = createFileRoute("/consultancy")({
  component: ConsultancyLayout,
});

function ConsultancyLayout() {
  return (
    <SubsidiaryLayout
      brandName="Naison Hardy Consultancy"
      logoVariant="grey"
      navItems={navItems}
      footerConfig={footerConfig}
    />
  );
}
