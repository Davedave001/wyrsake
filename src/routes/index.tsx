import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import nairobi from "@/assets/nairobi.jpg";
import van from "@/assets/ev-van.jpg";
import { Button } from "@/components/ui/button";
import { SectionHead } from "@/components/site/SiteChrome";
import { pillars, milestones, partners } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WYRSAKE — Women & Youth Road Safety Association Kenya" },
      { name: "description", content: "Advocating for safer, inclusive and sustainable mobility for women, youth and every commuter in Kenya." },
      { property: "og:title", content: "WYRSAKE — Women & Youth Road Safety Association Kenya" },
      { property: "og:description", content: "Road safety, e-mobility and inclusion across Kenya's public transport." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <img src={nairobi} alt="Nairobi skyline at dusk" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero" />
        <div className="relative mx-auto max-w-7xl px-5 py-28 md:py-40">
          <p className="eyebrow !text-sun">Women & Youth Road Safety Association Kenya</p>
          <h1 className="mt-5 max-w-3xl text-5xl font-bold leading-[1.05] md:text-7xl">
            Safer, inclusive & sustainable roads.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-navy-foreground/85">
            We partner with regulators, transport operators and communities to make Kenya's roads and public transport safer, cleaner and more accessible.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full bg-sun text-accent-foreground hover:bg-sun/90">
              <Link to="/what-we-do">What we do <ArrowRight /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-navy-foreground/40 bg-transparent text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground">
              <Link to="/impact">See our impact</Link>
            </Button>
          </div>
        </div>
        <div className="road-stripe relative" />
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-2">
        <div>
          <SectionHead
            eyebrow="Who we are"
            title="Advocates for safer, inclusive mobility"
            intro="We work at the intersection of road safety, e-mobility and inclusion — convening stakeholders across the PSV sector, engaging policymakers on regulatory reform, and delivering hands-on training and pilot programs."
          />
          <dl className="mt-10 grid grid-cols-3 gap-4">
            {[["200K+", "Members"], ["05", "Focus areas"], ["PSV", "Sector-wide"]].map(([v, l]) => (
              <div key={l} className="rounded-xl border border-border bg-card p-4">
                <dt className="font-display text-3xl font-bold text-primary">{v}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <img src={van} alt="100% electric PSV van" className="rounded-2xl shadow-card" />
          <div className="absolute -bottom-5 -left-5 rounded-xl bg-sun px-5 py-3 font-display font-bold text-accent-foreground shadow-card">
            E-Mobility pilots led
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHead eyebrow="Strategic focus" title="Five pillars that guide our work" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {pillars.map((p, i) => (
              <div key={p.title} className="rounded-2xl bg-card p-6 shadow-card">
                <span className="font-display text-sm font-bold text-muted-foreground">0{i + 1}</span>
                <p.icon className={`mt-6 h-9 w-9 ${p.color}`} />
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHead eyebrow="Milestones" title="Our impact in action" />
          <Link to="/impact" className="font-semibold text-primary hover:underline">All milestones →</Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {milestones.slice(0, 3).map((m) => (
            <figure key={m.text} className="overflow-hidden rounded-2xl bg-card shadow-card">
              <img src={m.img} alt={m.text} className="aspect-[4/3] w-full object-cover" loading="lazy" />
              <figcaption className="p-5 text-sm">{m.text}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="mx-auto max-w-7xl px-5">
          <p className="eyebrow text-center">Working alongside</p>
          <div className="mt-8 grid grid-cols-4 items-center gap-8 md:grid-cols-8">
            {partners.map((p) => (
              <img key={p.name} src={p.img} alt={p.name} className="mx-auto max-h-14 object-contain" loading="lazy" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
