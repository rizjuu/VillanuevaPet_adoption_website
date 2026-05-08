import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { pets } from "@/data/pets";
import { PetCard } from "@/components/pet-card";

export const Route = createFileRoute("/pets")({
  head: () => ({
    meta: [
      { title: "Browse Adoptable Pets — Villanueva Pet Adoption" },
      { name: "description", content: "Browse rescued dogs and cats available for adoption in Villanueva. Filter by type, age, breed, and gender." },
      { property: "og:title", content: "Browse Pets — Villanueva Pet Adoption" },
      { property: "og:description", content: "Find your future best friend among our rescued pets." },
    ],
  }),
  component: PetsPage,
});

const types = ["All", "Dog", "Cat"] as const;
const ages = ["All", "Puppy", "Young", "Adult", "Senior"] as const;
const genders = ["All", "Male", "Female"] as const;

function PetsPage() {
  const [type, setType] = useState<(typeof types)[number]>("All");
  const [age, setAge] = useState<(typeof ages)[number]>("All");
  const [gender, setGender] = useState<(typeof genders)[number]>("All");
  const [breed, setBreed] = useState("");
  const [q, setQ] = useState("");

  const breeds = useMemo(() => ["All", ...Array.from(new Set(pets.map((p) => p.breed)))], []);

  const filtered = pets.filter((p) =>
    (type === "All" || p.type === type) &&
    (age === "All" || p.ageGroup === age) &&
    (gender === "All" || p.gender === gender) &&
    (!breed || breed === "All" || p.breed === breed) &&
    (!q || p.name.toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <div className="relative">
      <div className="blob -top-20 -left-20 size-72 bg-primary" />
      <div className="blob top-20 right-0 size-72 bg-secondary" />
      <section className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-14 pb-8">
        <h1 className="font-display text-4xl sm:text-5xl font-black text-plum">Find your new best friend</h1>
        <p className="mt-3 text-muted-foreground max-w-xl">Browse rescued pets currently looking for loving homes. Use the filters to narrow your search.</p>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 lg:px-8 pb-6">
        <div className="rounded-3xl bg-card shadow-sm border border-border p-5 grid gap-4 md:grid-cols-5">
          <div className="md:col-span-2 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search by name…" className="w-full rounded-full bg-muted pl-11 pr-4 py-3 text-sm outline-none focus:ring-2 ring-primary" />
          </div>
          <Select label="Type" value={type} onChange={(v)=>setType(v as typeof type)} options={types as readonly string[]} />
          <Select label="Age" value={age} onChange={(v)=>setAge(v as typeof age)} options={ages as readonly string[]} />
          <Select label="Gender" value={gender} onChange={(v)=>setGender(v as typeof gender)} options={genders as readonly string[]} />
          <div className="md:col-span-5">
            <div className="flex flex-wrap gap-2">
              {breeds.map((b) => (
                <button key={b} onClick={()=>setBreed(b)} className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition ${ (breed||"All")===b ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border hover:bg-muted"}`}>{b}</button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 lg:px-8 pb-20">
        {filtered.length ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => <PetCard key={p.id} pet={p} />)}
          </div>
        ) : (
          <div className="rounded-3xl bg-card p-12 text-center text-muted-foreground">No pets match your filters yet — try widening your search.</div>
        )}
      </section>
    </div>
  );
}

function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: readonly string[] }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-muted-foreground ml-3">{label}</span>
      <select value={value} onChange={(e)=>onChange(e.target.value)} className="mt-1 w-full rounded-full bg-muted px-4 py-3 text-sm outline-none focus:ring-2 ring-primary">
        {options.map((o)=><option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}
