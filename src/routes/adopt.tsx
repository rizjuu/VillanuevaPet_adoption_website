import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, PawPrint } from "lucide-react";
import { z } from "zod";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { pets, getPet } from "@/data/pets";

const searchSchema = z.object({
  pet: fallback(z.string(), "").default(""),
});

export const Route = createFileRoute("/adopt")({
  validateSearch: zodValidator(searchSchema),
  head: () => ({
    meta: [
      { title: "Adoption Application — Villanueva Pet Adoption" },
      { name: "description", content: "Submit your application to adopt a rescued pet from Villanueva Pet Adoption." },
      { property: "og:title", content: "Apply to Adopt — Villanueva Pets" },
      { property: "og:description", content: "Just a few details and we'll be in touch about your new best friend." },
    ],
  }),
  component: AdoptPage,
});

function AdoptPage() {
  const { pet: petId } = Route.useSearch();
  const preset = petId ? getPet(petId) : undefined;
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", address: "", contact: "", reason: "", pet: preset?.id ?? "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="relative">
        <div className="blob -top-10 left-10 size-72 bg-secondary" />
        <div className="mx-auto max-w-2xl px-5 py-24 text-center relative">
          <div className="mx-auto grid place-items-center size-20 rounded-full bg-secondary text-secondary-foreground"><CheckCircle2 className="size-10" /></div>
          <h1 className="mt-6 font-display text-4xl font-black text-plum">Application received! 🎉</h1>
          <p className="mt-4 text-muted-foreground">Thank you, {form.name || "friend"}. Our team will reach out within 24-48 hours to schedule a meet-and-greet.</p>
          <div className="mt-8 flex justify-center gap-3">
            <Link to="/pets" className="rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground">Browse more pets</Link>
            <Link to="/" className="rounded-full bg-card border border-border px-6 py-3 text-sm font-bold">Back home</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="blob -top-20 -left-20 size-72 bg-primary" />
      <div className="blob top-40 right-0 size-80 bg-secondary" />

      <section className="relative mx-auto max-w-3xl px-5 lg:px-8 pt-14 pb-10 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-xs font-semibold"><PawPrint className="size-3.5" /> Adoption Application</span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl font-black text-plum">A few details, then forever begins</h1>
        <p className="mt-3 text-muted-foreground">All applications are reviewed by our welfare team to ensure the perfect match.</p>
      </section>

      <section className="relative mx-auto max-w-3xl px-5 lg:px-8 pb-24">
        <form onSubmit={onSubmit} className="rounded-3xl bg-card shadow-xl p-6 md:p-10 grid gap-5">
          <Field label="Which pet?" >
            <select value={form.pet} onChange={(e)=>setForm({...form, pet:e.target.value})} className="w-full rounded-2xl bg-muted px-4 py-3 outline-none focus:ring-2 ring-primary">
              <option value="">Not sure yet</option>
              {pets.map((p) => <option key={p.id} value={p.id}>{p.name} — {p.breed}</option>)}
            </select>
          </Field>
          <Field label="Full name" required>
            <input required value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} className="w-full rounded-2xl bg-muted px-4 py-3 outline-none focus:ring-2 ring-primary" />
          </Field>
          <Field label="Address" required>
            <input required value={form.address} onChange={(e)=>setForm({...form, address:e.target.value})} className="w-full rounded-2xl bg-muted px-4 py-3 outline-none focus:ring-2 ring-primary" />
          </Field>
          <Field label="Contact number" required>
            <input required type="tel" value={form.contact} onChange={(e)=>setForm({...form, contact:e.target.value})} className="w-full rounded-2xl bg-muted px-4 py-3 outline-none focus:ring-2 ring-primary" />
          </Field>
          <Field label="Why do you want to adopt?" required>
            <textarea required rows={4} value={form.reason} onChange={(e)=>setForm({...form, reason:e.target.value})} className="w-full rounded-2xl bg-muted px-4 py-3 outline-none focus:ring-2 ring-primary resize-none" />
          </Field>
          <button className="mt-2 rounded-full bg-primary px-6 py-4 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 hover:scale-[1.02] transition">Submit application</button>
        </form>
      </section>
    </div>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold ml-1">{label}{required && <span className="text-destructive ml-1">*</span>}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
