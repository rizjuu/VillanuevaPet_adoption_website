import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Cake, Mars, Venus, Stethoscope, CheckCircle2 } from "lucide-react";
import { getPet, pets } from "@/data/pets";

export const Route = createFileRoute("/pets/$petId")({
  loader: ({ params }) => {
    const pet = getPet(params.petId);
    if (!pet) throw notFound();
    return pet;
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.name} — Adopt at Villanueva Pets` },
      { name: "description", content: `${loaderData.name} is a ${loaderData.age} ${loaderData.breed} looking for a loving home in Villanueva.` },
      { property: "og:title", content: `${loaderData.name} — Adopt me!` },
      { property: "og:description", content: loaderData.description },
      { property: "og:image", content: loaderData.image },
    ] : [],
  }),
  component: PetDetail,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-5 py-24 text-center">
      <h1 className="font-display text-4xl font-black">Pet not found</h1>
      <p className="mt-3 text-muted-foreground">This furry friend may have already found their home.</p>
      <Link to="/pets" className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">Browse all pets</Link>
    </div>
  ),
  errorComponent: ({ error }) => <div className="p-10 text-center">{error.message}</div>,
});

function PetDetail() {
  const pet = Route.useLoaderData();
  const [active, setActive] = useState(0);
  const Icon = pet.gender === "Male" ? Mars : Venus;
  const related = pets.filter((p) => p.id !== pet.id).slice(0, 3);

  return (
    <div className="relative">
      <div className="blob -top-10 -left-20 size-72 bg-primary" />
      <div className="blob top-20 right-0 size-80 bg-secondary" />

      <section className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-10">
        <Link to="/pets" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary">
          <ArrowLeft className="size-4" /> Back to pets
        </Link>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 lg:px-8 py-8 grid lg:grid-cols-2 gap-10">
        <div>
          <div className="rounded-[2.5rem] overflow-hidden bg-card shadow-xl">
            <img src={pet.gallery[active]} alt={pet.name} className="w-full aspect-square object-cover" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {pet.gallery.map((g, i) => (
              <button key={i} onClick={()=>setActive(i)} className={`overflow-hidden rounded-2xl aspect-square transition ${active===i?"ring-4 ring-primary":""}`}>
                <img src={g} alt={`${pet.name} ${i+1}`} className="size-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="inline-flex items-center rounded-full bg-secondary/20 text-secondary-foreground px-3 py-1 text-xs font-semibold">{pet.status}</span>
          <h1 className="mt-3 font-display text-5xl font-black text-plum">{pet.name}</h1>
          <p className="mt-2 text-lg text-muted-foreground">{pet.breed} · {pet.type}</p>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { Icon: Cake, label: "Age", value: pet.age },
              { Icon, label: "Gender", value: pet.gender },
              { Icon: Stethoscope, label: "Status", value: "Healthy" },
            ].map(({ Icon, label, value }) => (
              <div key={label} className="rounded-2xl bg-card p-4 shadow-sm">
                <Icon className="size-5 text-primary" />
                <div className="mt-2 text-xs text-muted-foreground">{label}</div>
                <div className="font-semibold">{value}</div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-foreground/90 leading-relaxed">{pet.description}</p>

          <div className="mt-6 rounded-2xl bg-card p-5">
            <h3 className="font-display text-lg font-bold">Health</h3>
            <ul className="mt-3 grid grid-cols-2 gap-2">
              {pet.health.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm"><CheckCircle2 className="size-4 text-secondary" /> {h}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex gap-3">
            <Link to="/adopt" search={{ pet: pet.id }} className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 hover:scale-105 transition">
              Adopt {pet.name}
            </Link>
            <Link to="/contact" className="inline-flex items-center rounded-full bg-card border border-border px-6 py-3.5 text-sm font-bold hover:bg-muted">Ask about {pet.name}</Link>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 lg:px-8 py-16">
        <h2 className="font-display text-3xl font-black mb-6">More friends to meet</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((p) => (
            <Link key={p.id} to="/pets/$petId" params={{ petId: p.id }} className="group rounded-3xl overflow-hidden bg-card shadow-sm hover:shadow-xl transition">
              <img src={p.image} alt={p.name} className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition" />
              <div className="p-4"><div className="font-display font-bold">{p.name}</div><div className="text-xs text-muted-foreground">{p.breed}</div></div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
