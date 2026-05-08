import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import type { Pet } from "@/data/pets";
import { cn } from "@/lib/utils";

const statusStyles: Record<Pet["status"], string> = {
  Available: "bg-secondary text-secondary-foreground",
  Pending: "bg-accent text-accent-foreground",
  Adopted: "bg-muted text-muted-foreground",
};

export function PetCard({ pet }: { pet: Pet }) {
  return (
    <Link
      to="/pets/$petId"
      params={{ petId: pet.id }}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-card shadow-[0_8px_30px_rgb(76,29,149,0.08)] hover:shadow-[0_18px_50px_rgb(76,29,149,0.18)] transition-all hover:-translate-y-1"
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={pet.image}
          alt={pet.name}
          loading="lazy"
          width={800}
          height={800}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className={cn("absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-semibold", statusStyles[pet.status])}>
          {pet.status}
        </span>
        <span className="absolute top-3 right-3 grid place-items-center size-9 rounded-full bg-white/90 text-primary backdrop-blur">
          <Heart className="size-4" />
        </span>
      </div>
      <div className="p-5 flex flex-col gap-1">
        <div className="flex items-baseline justify-between">
          <h3 className="font-display text-xl font-bold">{pet.name}</h3>
          <span className="text-xs font-medium text-muted-foreground">{pet.gender}</span>
        </div>
        <p className="text-sm text-muted-foreground">{pet.breed} · {pet.age}</p>
        <p className="mt-2 text-sm line-clamp-2 text-foreground/80">{pet.description}</p>
        <span className="mt-4 inline-flex w-fit items-center rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground group-hover:bg-secondary group-hover:text-secondary-foreground transition">
          Meet {pet.name} →
        </span>
      </div>
    </Link>
  );
}
