import { createFileRoute } from "@tanstack/react-router";
import { Heart, CheckCircle2, Leaf } from "lucide-react";
import nairobi from "@/assets/nairobi.jpg";
import engagement from "@/assets/engagement.jpg";
import { PageHero, SectionHead } from "@/components/site/SiteChrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About WYRSAKE — Vision, Mission & Values" },
      { name: "description", content: "Our vision of inclusive and safe transport, and the mission to empower women and youth through road safety." },
      { property: "og:title", content: "About WYRSAKE" },
      { property: "og:description", content: "Vision, mission and values of the Women & Youth Road Safety Association Kenya." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const principles = [
  { icon: Heart, title: "Vision", text: "Inclusive and safe transport.", color: "text-rose" },
  { icon: CheckCircle2, title: "Mission", text: "Empower women and youth through road safety, investment and sustainable mobility.", color: "text-sky" },
  { icon: Leaf, title: "Values", text: "Integrity, Professionalism, Inclusivity, Innovation.", color: "text-teal" },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="Mobility that is accessible, protected and future-ready"
        intro="WYRSAKE is a non-profit organization addressing road safety and transport issues in Kenya, with a focus on women, youth and safer public transport."
        image={nairobi}
      />
      <section className="mx-auto max-w-7xl px-5 py-24">
        <SectionHead eyebrow="Guiding principles" title="What drives us" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {principles.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <p.icon className={`h-10 w-10 ${p.color}`} />
              <h3 className="mt-6 text-2xl font-bold text-primary">{p.title}</h3>
              <p className="mt-3 text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-band text-navy-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-2">
          <img src={engagement} alt="WYRSAKE team engaging government leaders" className="rounded-2xl" loading="lazy" />
          <div>
            <p className="eyebrow !text-sun">A growing movement</p>
            <h2 className="mt-3 text-4xl font-bold">200,000 members and counting</h2>
            <p className="mt-5 text-navy-foreground/80">
              Led by our Chair, Nyambura Githaiga, the association has organized the transport space for women and youth to engage Government and partners on welfare, safety and economic empowerment.
            </p>
            <p className="mt-4 text-navy-foreground/80">
              We convene stakeholders across the PSV sector, engage policymakers on regulatory reform, and deliver hands-on training and pilot programs that put safety and sustainability into practice on Kenyan roads.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
