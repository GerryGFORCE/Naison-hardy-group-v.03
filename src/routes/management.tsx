import { createFileRoute } from "@tanstack/react-router";
import type { FooterConfig } from "#/components/shared/Footer";
import { SubsidiaryLayout } from "#/components/shared/SubsidiaryLayout";

const navItems = [
  { label: "Home", href: "/management" },
  { label: "About", href: "/management/about" },
  { label: "Services", href: "/management/services" },
  { label: "Portfolio", href: "/management/portfolio" },
  { label: "Contact", href: "/management/contact" },
];

const footerConfig: FooterConfig = {
  subsidiary: "management",
  socials: {
    linkedin: "https://linkedin.com/company/naison-hardy-management",
    youtube: "https://youtube.com/@naisonhardymanagement",
    instagram: "https://instagram.com/naisonhardymanagement",
    discord: "https://discord.gg/naisonhardymanagement",
  },
};

export const Route = createFileRoute("/management")({
  component: ManagementLayout,
});

function ManagementLayout() {
  return (
    <SubsidiaryLayout
      brandName="Naison Hardy Management"
      logoVariant="white"
      navItems={navItems}
      footerConfig={footerConfig}
    />
  );
}
