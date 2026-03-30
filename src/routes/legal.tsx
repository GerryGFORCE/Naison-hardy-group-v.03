import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { Footer } from "#/components/shared/Footer";

export const Route = createFileRoute("/legal")({
  component: LegalLayout,
});

function LegalLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Minimal header */}
      <header className="border-border border-b px-6 py-4">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link to="/" className="font-semibold text-foreground text-sm uppercase tracking-widest hover:text-primary">
            Naison Hardy Group
          </Link>
          <nav className="flex items-center gap-6 text-muted-foreground text-sm">
            <Link to="/legal/privacy" className="transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/legal/terms" className="transition-colors hover:text-primary">
              Terms of Service
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
