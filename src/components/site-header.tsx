import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, PawPrint } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/pets", label: "Browse Pets" },
  { to: "/about", label: "About" },
  { to: "/donate", label: "Donate" },
  { to: "/contact", label: "Contact" },
  { to: "/admin", label: "Admin" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/75 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid place-items-center size-9 rounded-2xl bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-md transition-transform group-hover:rotate-6">
            <PawPrint className="size-5" />
          </span>
          <span className="font-display font-bold text-lg leading-none">
            Villanueva<span className="text-secondary"> Pets</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="px-3 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition"
              activeProps={{ className: "px-3 py-2 rounded-full text-sm font-semibold text-primary bg-primary/10" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/pets"
            className="ml-2 inline-flex items-center rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground shadow hover:brightness-105 transition"
          >
            Adopt Now
          </Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center size-10 rounded-full bg-muted"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div className={cn("md:hidden overflow-hidden transition-all", open ? "max-h-96" : "max-h-0")}>
        <nav className="px-5 pb-4 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              className="px-4 py-3 rounded-2xl text-sm font-medium hover:bg-muted"
              activeProps={{ className: "px-4 py-3 rounded-2xl text-sm font-semibold text-primary bg-primary/10" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
