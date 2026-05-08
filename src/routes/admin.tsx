import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Pencil, Trash2, PawPrint, Inbox } from "lucide-react";
import { pets as initialPets, type Pet } from "@/data/pets";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard — Villanueva Pet Adoption" },
      { name: "description", content: "Manage pet listings and adoption applications." },
      { property: "og:title", content: "Admin — Villanueva Pets" },
      { property: "og:description", content: "Internal management dashboard." },
    ],
  }),
  component: Admin,
});

const mockApps = [
  { name: "Maria Cruz", pet: "Buddy", date: "May 4, 2026", status: "Pending" },
  { name: "Carlos Reyes", pet: "Luna", date: "May 3, 2026", status: "Approved" },
  { name: "Ana Santos", pet: "Coco", date: "May 2, 2026", status: "Pending" },
];

function Admin() {
  const [list, setList] = useState<Pet[]>(initialPets);
  const [tab, setTab] = useState<"pets"|"apps">("pets");

  return (
    <div className="relative">
      <div className="blob -top-20 left-10 size-72 bg-primary" />

      <section className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-12 pb-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <span className="text-xs font-semibold text-secondary">Internal</span>
            <h1 className="font-display text-4xl font-black text-plum">Admin Dashboard</h1>
          </div>
          <div className="flex gap-2 rounded-full bg-card p-1 shadow-sm">
            <button onClick={()=>setTab("pets")} className={`px-4 py-2 rounded-full text-sm font-semibold ${tab==="pets"?"bg-primary text-primary-foreground":""}`}><PawPrint className="size-4 inline mr-1" /> Pets</button>
            <button onClick={()=>setTab("apps")} className={`px-4 py-2 rounded-full text-sm font-semibold ${tab==="apps"?"bg-primary text-primary-foreground":""}`}><Inbox className="size-4 inline mr-1" /> Applications</button>
          </div>
        </div>
      </section>

      {tab === "pets" ? (
        <section className="relative mx-auto max-w-7xl px-5 lg:px-8 pb-16">
          <div className="rounded-3xl bg-card shadow-sm overflow-hidden">
            <div className="flex justify-between items-center p-5 border-b border-border">
              <h2 className="font-display text-xl font-bold">Pet listings ({list.length})</h2>
              <button className="inline-flex items-center gap-1.5 rounded-full bg-secondary text-secondary-foreground px-4 py-2 text-sm font-semibold"><Plus className="size-4" /> Add pet</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted text-muted-foreground text-xs uppercase">
                  <tr><th className="text-left p-4">Pet</th><th className="text-left p-4">Breed</th><th className="text-left p-4">Age</th><th className="text-left p-4">Status</th><th className="text-right p-4">Actions</th></tr>
                </thead>
                <tbody>
                  {list.map((p)=>(
                    <tr key={p.id} className="border-t border-border hover:bg-muted/40">
                      <td className="p-3"><div className="flex items-center gap-3"><img src={p.image} className="size-10 rounded-xl object-cover" alt={p.name} /><span className="font-semibold">{p.name}</span></div></td>
                      <td className="p-3">{p.breed}</td>
                      <td className="p-3">{p.age}</td>
                      <td className="p-3"><span className="rounded-full bg-secondary/15 text-secondary-foreground px-2.5 py-1 text-xs font-semibold">{p.status}</span></td>
                      <td className="p-3 text-right">
                        <button className="inline-grid place-items-center size-8 rounded-lg hover:bg-muted"><Pencil className="size-4" /></button>
                        <button onClick={()=>setList(list.filter(x=>x.id!==p.id))} className="inline-grid place-items-center size-8 rounded-lg hover:bg-destructive/10 text-destructive"><Trash2 className="size-4" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ) : (
        <section className="relative mx-auto max-w-7xl px-5 lg:px-8 pb-16">
          <div className="rounded-3xl bg-card shadow-sm overflow-hidden">
            <div className="p-5 border-b border-border"><h2 className="font-display text-xl font-bold">Adoption applications</h2></div>
            <table className="w-full text-sm">
              <thead className="bg-muted text-muted-foreground text-xs uppercase">
                <tr><th className="text-left p-4">Applicant</th><th className="text-left p-4">Pet</th><th className="text-left p-4">Date</th><th className="text-left p-4">Status</th></tr>
              </thead>
              <tbody>
                {mockApps.map((a,i)=>(
                  <tr key={i} className="border-t border-border">
                    <td className="p-4 font-semibold">{a.name}</td>
                    <td className="p-4">{a.pet}</td>
                    <td className="p-4 text-muted-foreground">{a.date}</td>
                    <td className="p-4"><span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${a.status==="Approved"?"bg-secondary/20 text-secondary-foreground":"bg-accent text-accent-foreground"}`}>{a.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}
