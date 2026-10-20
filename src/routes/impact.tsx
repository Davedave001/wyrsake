import { createFileRoute } from "@tanstack/react-router";
import van from "@/assets/m-van.jpg";
import { PageHero } from "@/components/site/SiteChrome";
import { milestones } from "@/lib/content";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Our Impact — WYRSAKE Milestones" },
      { name: "description", content: "Electric PSV launches, driver training, scheduled routes and policy engagements across Kenya." },
      { property: "og:title", content: "Our Impact — WYRSAKE" },
      { property: "og:description", content: "Milestones from our road safety and e-mobility work." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Impact,
});

function Impact() {
  return (
    <>
      <PageHero
        eyebrow="Milestones"
        title="Our impact in action"
        intro="Pilots, trainings, forums and policy engagements moving Kenyan mobility forward."
        image={van}
      />
      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid gap-8 md:grid-cols-2">
          {milestones.map((m, i) => (
            <figure key={m.text} className="group overflow-hidden rounded-2xl bg-card shadow-card">
              <div className="overflow-hidden">
                <img src={m.img} alt={m.text} loading="lazy" className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <figcaption className="flex gap-4 p-6">
                <span className="font-display text-2xl font-bold text-sun">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-medium">{m.text}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
