import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Villanueva Pet Adoption" },
      { name: "description", content: "Get in touch with Villanueva Pet Adoption. Email, phone, and social media." },
      { property: "og:title", content: "Contact Villanueva Pets" },
      { property: "og:description", content: "We'd love to hear from you." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="relative">
      <div className="blob -top-10 -left-10 size-80 bg-primary" />
      <div className="blob top-20 right-0 size-72 bg-secondary" />

      <section className="relative mx-auto max-w-4xl px-5 lg:px-8 pt-16 pb-10 text-center">
        <h1 className="font-display text-5xl sm:text-6xl font-black text-plum">Let's talk</h1>
        <p className="mt-4 text-lg text-muted-foreground">Whether you're adopting, volunteering, or just want to say hi — we're here for it.</p>
      </section>

      <section className="relative mx-auto max-w-5xl px-5 lg:px-8 py-8 grid md:grid-cols-3 gap-5">
        {[
          { Icon: Mail, label: "Email", value: "hello@villanuevapets.org" },
          { Icon: Phone, label: "Phone", value: "+63 912 345 6789" },
          { Icon: MapPin, label: "Address", value: "Brgy. Centro, Villanueva" },
        ].map(({Icon,label,value})=>(
          <div key={label} className="rounded-3xl bg-card p-6 shadow-sm">
            <span className="grid place-items-center size-12 rounded-2xl bg-primary/10 text-primary"><Icon className="size-6" /></span>
            <div className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">{label}</div>
            <div className="font-semibold mt-1">{value}</div>
          </div>
        ))}
      </section>

      <section className="relative mx-auto max-w-3xl px-5 lg:px-8 py-12 text-center">
        <h2 className="font-display text-2xl font-bold">Follow us</h2>
        <div className="mt-4 flex justify-center gap-3">
          {[Facebook, Instagram, Twitter].map((Icon, i) => (
            <a key={i} href="#" className="grid place-items-center size-12 rounded-full bg-card shadow hover:bg-secondary hover:text-secondary-foreground transition"><Icon className="size-5" /></a>
          ))}
        </div>
      </section>
    </div>
  );
}
