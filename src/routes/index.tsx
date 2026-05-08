import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, HandHeart, Sparkles, ShieldCheck, Star } from "lucide-react";
import hero from "@/assets/hero-pets.jpg";
import { pets } from "@/data/pets";
import { PetCard } from "@/components/pet-card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Villanueva Pet Adoption — Find a Furry Friend Today" },
      { name: "description", content: "Adopt loving rescued pets in Villanueva. Browse dogs and cats, donate, and help reduce stray animals in our community." },
      { property: "og:title", content: "Villanueva Pet Adoption" },
      { property: "og:description", content: "Providing love and care for your furry friends." },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = pets.slice(0, 3);
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="blob top-10 -left-20 size-96 bg-primary" />
        <div className="blob -top-10 right-0 size-96 bg-secondary" />
        <div className="blob bottom-0 left-1/3 size-72 bg-accent" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-20 grid lg:grid-cols-2 gap-10 items-center">
          <div className="animate-[fade-up_0.7s_ease-out]">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary/15 text-secondary-foreground px-4 py-1.5 text-xs font-semibold">
              <Sparkles className="size-3.5 text-secondary" /> Villanueva's #1 community shelter
            </span>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] text-plum">
              Providing <span className="italic text-primary">love</span> and care for your{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-secondary">furry friends</span>
                <span className="absolute inset-x-0 bottom-1 h-3 bg-secondary/25 -z-0 rounded-full" />
              </span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              We rescue, rehabilitate and rehome stray and abandoned animals across Villanueva.
              Every wagging tail and gentle purr starts with someone like you saying yes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/pets" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 hover:scale-105 transition">
                Adopt Now <ArrowRight className="size-4" />
              </Link>
              <Link to="/pets" className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-6 py-3.5 text-sm font-semibold hover:bg-muted transition">
                View Pets
              </Link>
            </div>
            <div className="mt-10 flex gap-8">
              {[
                { n: "240+", l: "Pets rehomed" },
                { n: "85", l: "Active volunteers" },
                { n: "4.9★", l: "Family rating" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-2xl font-bold text-primary">{s.n}</div>
                  <div className="text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl" />
            <div className="relative rounded-[3rem] overflow-hidden bg-card shadow-2xl animate-[float_6s_ease-in-out_infinite]">
              <img src={hero} alt="Adorable adoptable puppy and kitten" width={1280} height={960} className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-card p-4 shadow-xl flex items-center gap-3">
              <span className="grid place-items-center size-10 rounded-full bg-secondary/20 text-secondary"><Heart className="size-5" /></span>
              <div>
                <div className="text-xs text-muted-foreground">Today</div>
                <div className="font-semibold text-sm">3 new adoptions 🎉</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-16 grid md:grid-cols-3 gap-6">
        {[
          { Icon: Heart, title: "Rescue with love", desc: "We bring stray and abandoned animals into safe foster homes." },
          { Icon: ShieldCheck, title: "Vet-checked & ready", desc: "Every pet is vaccinated, dewormed and health-screened before adoption." },
          { Icon: HandHeart, title: "Lifelong support", desc: "Free post-adoption guidance so your new family thrives together." },
        ].map(({ Icon, title, desc }) => (
          <div key={title} className="rounded-3xl bg-card p-6 shadow-sm hover:shadow-md transition">
            <span className="grid place-items-center size-12 rounded-2xl bg-primary/10 text-primary mb-4"><Icon className="size-6" /></span>
            <h3 className="font-display text-xl font-bold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-sm font-semibold text-secondary">⭐ Featured pets</span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-black">Meet this week's stars</h2>
          </div>
          <Link to="/pets" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
            See all pets <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p) => <PetCard key={p.id} pet={p} />)}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-secondary">Happy tails</span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-black">Adoption stories from our community</h2>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            { name: "Maria & Bruno", quote: "Bruno changed our home. The team made adoption feel like a celebration." },
            { name: "Carlos", quote: "Smooth, transparent and full of heart. Whiskers is now my best friend." },
            { name: "Ana & family", quote: "From rescue to forever home in two weeks. Thank you Villanueva Pets!" },
          ].map((t) => (
            <div key={t.name} className="rounded-3xl bg-card p-6 shadow-sm">
              <div className="flex gap-1 text-secondary">{Array.from({length:5}).map((_,i)=><Star key={i} className="size-4 fill-current" />)}</div>
              <p className="mt-3 text-foreground/90">"{t.quote}"</p>
              <p className="mt-4 text-sm font-semibold">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 pb-12">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary to-plum p-10 md:p-16 text-primary-foreground">
          <div className="blob -top-10 -right-10 size-72 bg-secondary opacity-60" />
          <div className="relative grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-black">Adopt, don't shop.</h2>
              <p className="mt-3 text-primary-foreground/85 max-w-md">Open your home to a rescued companion and change two lives — yours and theirs.</p>
            </div>
            <div className="flex md:justify-end gap-3">
              <Link to="/pets" className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3.5 text-sm font-bold text-secondary-foreground hover:scale-105 transition">Browse pets <ArrowRight className="size-4" /></Link>
              <Link to="/donate" className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-6 py-3.5 text-sm font-bold hover:bg-white/20 transition">Donate</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
