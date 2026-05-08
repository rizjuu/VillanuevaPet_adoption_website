import { Link } from "@tanstack/react-router";
import { PawPrint, Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative mt-20 overflow-hidden bg-plum text-primary-foreground">
      <div className="blob -top-20 -left-10 size-72 bg-primary" />
      <div className="blob -bottom-24 right-0 size-80 bg-secondary" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid place-items-center size-10 rounded-2xl bg-secondary text-secondary-foreground">
              <PawPrint className="size-5" />
            </span>
            <span className="font-display font-bold text-xl">Villanueva Pets</span>
          </div>
          <p className="mt-4 max-w-md text-primary-foreground/80">
            A community-driven adoption platform helping every stray and rescued animal in
            Villanueva find a loving forever home.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg font-bold mb-3">Explore</h4>
          <ul className="space-y-2 text-primary-foreground/80 text-sm">
            <li><Link to="/pets" className="hover:text-secondary">Browse Pets</Link></li>
            <li><Link to="/about" className="hover:text-secondary">Our Mission</Link></li>
            <li><Link to="/donate" className="hover:text-secondary">Donate</Link></li>
            <li><Link to="/contact" className="hover:text-secondary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg font-bold mb-3">Stay in touch</h4>
          <p className="text-sm text-primary-foreground/80 flex items-center gap-2"><Mail className="size-4" /> hello@villanuevapets.org</p>
          <p className="mt-1 text-sm text-primary-foreground/80 flex items-center gap-2"><Phone className="size-4" /> +63 912 345 6789</p>
          <div className="mt-4 flex gap-2">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="grid place-items-center size-9 rounded-full bg-white/10 hover:bg-secondary hover:text-secondary-foreground transition">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Villanueva Pet Adoption · Made with 🧡 for the animals.
      </div>
    </footer>
  );
}
