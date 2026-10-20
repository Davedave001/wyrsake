import { createFileRoute } from "@tanstack/react-router";
import forum from "@/assets/m-forum.jpg";
import { PageHero } from "@/components/site/SiteChrome";
import { partners } from "@/lib/content";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Our Partners — WYRSAKE" },
      { name: "description", content: "Government agencies, transport authorities, federations and private operators we work with across Kenya." },
      { property: "og:title", content: "Our Partners — WYRSAKE" },
      { property: "og:description", content: "Collaborating for safer, more inclusive mobility in Kenya." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Partners,
});

function Partners() {
  return (
    <>
      <PageHero
        eyebrow="Collaboration"
        title="Our partners"
        intro="We work alongside government agencies, transport authorities, sector federations and private-sector operators to advance safer, more inclusive mobility across Kenya."
        image={forum}
      />
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {partners.map((p) => (
            <div key={p.name} className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-border bg-card p-6 shadow-card">
              <img src={p.img} alt={p.name} className="max-h-full max-w-full object-contain" loading="lazy" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
