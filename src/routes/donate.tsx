import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, Stethoscope, Utensils, Home } from "lucide-react";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Villanueva Pet Adoption" },
      { name: "description", content: "Support animal care, feeding, and shelter maintenance in Villanueva. Every donation saves a life." },
      { property: "og:title", content: "Donate to Villanueva Pets" },
      { property: "og:description", content: "Your gift feeds, heals, and shelters rescued animals." },
    ],
  }),
  component: Donate,
});

const amounts = [10, 25, 50, 100];

function Donate() {
  const [amount, setAmount] = useState<number | "">(25);
  const [thanks, setThanks] = useState(false);

  return (
    <div className="relative">
      <div className="blob -top-20 right-0 size-96 bg-secondary" />
      <div className="blob top-40 -left-10 size-80 bg-primary" />

      <section className="relative mx-auto max-w-4xl px-5 lg:px-8 pt-16 pb-8 text-center">
        <h1 className="font-display text-5xl sm:text-6xl font-black text-plum">Every peso saves a tail</h1>
        <p className="mt-5 text-lg text-muted-foreground">Your donation directly funds vet care, daily feeding and shelter maintenance for our rescued animals.</p>
      </section>

      <section className="relative mx-auto max-w-5xl px-5 lg:px-8 py-8 grid md:grid-cols-3 gap-6">
        {[
          { Icon: Stethoscope, title: "Medical care", desc: "Vaccinations, deworming, surgeries." },
          { Icon: Utensils, title: "Daily meals", desc: "Nutritious food for every rescue." },
          { Icon: Home, title: "Shelter upkeep", desc: "Clean, safe and warm spaces." },
        ].map(({Icon,title,desc})=>(
          <div key={title} className="rounded-3xl bg-card p-6 shadow-sm">
            <span className="grid place-items-center size-12 rounded-2xl bg-primary/10 text-primary"><Icon className="size-6" /></span>
            <h3 className="mt-3 font-display text-xl font-bold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </section>

      <section className="relative mx-auto max-w-3xl px-5 lg:px-8 py-12">
        <div className="rounded-[2.5rem] bg-card shadow-xl p-8 md:p-10">
          {thanks ? (
            <div className="text-center py-8">
              <div className="mx-auto grid place-items-center size-16 rounded-full bg-secondary text-secondary-foreground"><Heart className="size-8 fill-current" /></div>
              <h2 className="mt-4 font-display text-3xl font-black text-plum">Thank you! 🧡</h2>
              <p className="mt-3 text-muted-foreground">Your generosity will feed and heal our rescued friends.</p>
            </div>
          ) : (
            <>
              <h2 className="font-display text-3xl font-bold text-center">Choose an amount</h2>
              <div className="mt-6 grid grid-cols-4 gap-3">
                {amounts.map((a)=>(
                  <button key={a} onClick={()=>setAmount(a)} className={`rounded-2xl py-4 font-bold transition ${amount===a?"bg-primary text-primary-foreground shadow-lg":"bg-muted hover:bg-accent"}`}>${a}</button>
                ))}
              </div>
              <div className="mt-4">
                <input type="number" min="1" placeholder="Custom amount" value={amount} onChange={(e)=>setAmount(e.target.value === "" ? "" : Number(e.target.value))} className="w-full rounded-2xl bg-muted px-4 py-3 outline-none focus:ring-2 ring-primary" />
              </div>
              <button onClick={()=>setThanks(true)} className="mt-6 w-full rounded-full bg-secondary py-4 text-secondary-foreground font-bold shadow-lg hover:scale-[1.02] transition">
                Donate ${amount || 0} now
              </button>
              <p className="mt-3 text-xs text-center text-muted-foreground">Mock checkout — no real charge.</p>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
