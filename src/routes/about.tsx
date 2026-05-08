import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertTriangle, Lightbulb, Target, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Villanueva Pet Adoption" },
      { name: "description", content: "Learn about our mission to centralize pet adoption in Villanueva and reduce the stray animal population." },
      { property: "og:title", content: "About — Villanueva Pet Adoption" },
      { property: "og:description", content: "A centralized platform for compassionate pet adoption." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="relative">
      <div className="blob -top-20 left-1/3 size-96 bg-primary" />
      <div className="blob top-60 -right-10 size-80 bg-secondary" />

      <section className="relative mx-auto max-w-4xl px-5 lg:px-8 pt-16 pb-10 text-center">
        <h1 className="font-display text-5xl sm:text-6xl font-black text-plum">Our story</h1>
        <p className="mt-5 text-lg text-muted-foreground">Villanueva Pet Adoption began as a small group of neighbors feeding strays. Today we're a community-powered shelter helping every animal find their family.</p>
      </section>

      <section className="relative mx-auto max-w-6xl px-5 lg:px-8 py-12 grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl bg-card p-8 shadow-sm border-l-4 border-destructive">
          <span className="grid place-items-center size-12 rounded-2xl bg-destructive/10 text-destructive"><AlertTriangle className="size-6" /></span>
          <h2 className="mt-4 font-display text-2xl font-bold">The problem</h2>
          <ul className="mt-4 space-y-2 text-foreground/80">
            <li>• Hundreds of stray and abandoned animals roam our streets.</li>
            <li>• Adoption is slow and scattered across informal channels.</li>
            <li>• No centralized platform to match pets with caring families.</li>
          </ul>
        </div>
        <div className="rounded-3xl bg-card p-8 shadow-sm border-l-4 border-secondary">
          <span className="grid place-items-center size-12 rounded-2xl bg-secondary/15 text-secondary"><Lightbulb className="size-6" /></span>
          <h2 className="mt-4 font-display text-2xl font-bold">Our solution</h2>
          <ul className="mt-4 space-y-2 text-foreground/80">
            <li>• A single, friendly platform for browsing and adopting.</li>
            <li>• Vet-verified profiles and transparent applications.</li>
            <li>• Faster, kinder adoption — for both pets and people.</li>
          </ul>
        </div>
      </section>

      <section className="relative mx-auto max-w-5xl px-5 lg:px-8 py-12">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-primary to-plum p-10 md:p-14 text-primary-foreground text-center">
          <span className="grid place-items-center size-14 rounded-2xl bg-secondary text-secondary-foreground mx-auto"><Target className="size-7" /></span>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl font-black">Our mission</h2>
          <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/85 text-lg">To reduce the population of stray animals in Villanueva, promote responsible pet ownership, and ensure every rescued companion finds a loving forever home.</p>
          <Link to="/pets" className="mt-8 inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3.5 text-sm font-bold text-secondary-foreground hover:scale-105 transition">
            <Heart className="size-4" /> Start adopting
          </Link>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-5 lg:px-8 py-16 grid md:grid-cols-4 gap-6 text-center">
        {[{n:"240+",l:"Pets adopted"},{n:"85",l:"Volunteers"},{n:"12",l:"Foster homes"},{n:"5yrs",l:"Serving Villanueva"}].map(s=>(
          <div key={s.l} className="rounded-3xl bg-card p-6 shadow-sm">
            <div className="font-display text-4xl font-black text-primary">{s.n}</div>
            <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </section>
    </div>
  );
}
