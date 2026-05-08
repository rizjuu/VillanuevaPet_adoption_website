import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="p-10 text-4xl font-bold">
      Villanueva Pet Adoption Website Working ✅
    </div>
  );
}