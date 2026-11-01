import { createFileRoute, Link } from "@tanstack/react-router";
import { Mic, Landmark, Network, Smartphone, Route as RouteIcon, ArrowRight } from "lucide-react";
import terminal from "@/assets/terminal.jpg";
import { PageHero, SectionHead } from "@/components/site/SiteChrome";
import { capabilities, researchCards, awarenessThemes } from "@/lib/content";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/what-we-do")({
  head: () => ({
    meta: [
      { title: "What We Do — WYRSAKE" },
      {
        name: "description",
        content:
          "Road safety training, research & evidence, GBV and climate awareness, e-mobility pilots, and skills development for women and youth.",
      },
      { property: "og:title", content: "What We Do — WYRSAKE" },
      {
        property: "og:description",
        content:
          "Evidence-grounded road safety, GBV awareness, climate resilience and inclusive mobility in Kenya.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhatWeDo,
});

function WhatWeDo() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Putting safety and sustainability into practice"
        intro="From the terminal to the policy table, we work across the whole public transport value chain."
        image={terminal}
      />
      <section className="mx-auto max-w-5xl px-5 py-24">
        <SectionHead eyebrow="What we do" title="Five ways we make a difference" />
        <ol className="mt-12 divide-y divide-border">
          {capabilities.map((c, i) => (
            <li key={c.title} className="grid gap-4 py-8 md:grid-cols-[6rem_1fr]">
              <span className="font-display text-5xl font-bold text-sun">0{i + 1}</span>
              <div>
                <h3 className="text-2xl font-bold text-primary">{c.title}</h3>
                <p className="mt-2 text-muted-foreground">{c.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Section B: Research & Evidence */}
      <section className="bg-secondary/60 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHead
              eyebrow="Evidence for change"
              title="What unsafe and unreliable transport really costs"
              intro="Policy moves when the numbers are on the table. We work with women and youth in communities to document how transport conditions shape income and opportunity, and take the findings to regulators, operators and partners."
            />
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shrink-0 self-start md:self-end"
            >
              <Link to="/contact">
                Partner on this research <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {researchCards.map((rc) => (
              <div
                key={rc.title}
                className="flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-8 shadow-card"
              >
                <div>
                  <h3 className="text-2xl font-bold text-primary">{rc.title}</h3>
                  <div className="mt-6 space-y-5">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-rose">
                        Objective
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-foreground/90">
                        {rc.objective}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-sky">
                        Approach
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {rc.approach}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-teal">
                        Outcome
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed font-medium text-foreground/90">
                        {rc.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section C: Awareness & Community Action */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHead eyebrow="Community Action" title="Safer journeys start with awareness" />
          <Button
            asChild
            size="lg"
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shrink-0 self-start md:self-end"
          >
            <Link to="/contact">
              Host an awareness session <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {awarenessThemes.map((theme) => (
            <div
              key={theme.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-card"
            >
              <h3 className="text-2xl font-bold text-primary">{theme.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{theme.intro}</p>
              <ul className="mt-6 space-y-3">
                {theme.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground/90">
                    <span className="mt-2 h-2 w-2 rounded-full bg-rose shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-band text-navy-foreground">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <p className="eyebrow !text-sun">Proposed initiative · March 2025</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold md:text-4xl">
            Transforming Nairobi’s paratransit system
          </h2>
          <p className="mt-5 max-w-3xl text-lg text-navy-foreground/85">
            Our presentation proposes an ICT-enabled Integrated Demand Responsive Transport (iDRT)
            approach to tackle congestion, long waiting times, unpredictable fares and poorly
            coordinated routes.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Network,
                title: "Connected transport modes",
                text: "Integrating minibuses, motorcycles and buses for smoother journeys across Nairobi.",
              },
              {
                icon: Smartphone,
                title: "Digital transport services",
                text: "Real-time vehicle tracking, online booking, cashless payments and centralized fleet management.",
              },
              {
                icon: RouteIcon,
                title: "Passenger-led scheduling",
                text: "Scheduling vehicles around passenger needs and optimizing routes to use fleets more efficiently.",
              },
            ].map((item) => (
              <div key={item.title} className="border-t border-navy-foreground/25 pt-6">
                <item.icon className="h-8 w-8 text-sun" />
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-navy-foreground/80">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-8 border-t border-navy-foreground/25 pt-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-sun">A phased implementation proposal</h3>
              <p className="mt-3 text-navy-foreground/80">
                Begin with selected transport corridors, engage SACCOs, Nairobi County and NaMATA,
                then roll out digital solutions in phases. Next steps include securing funding and
                conducting public awareness campaigns.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-sun">
                Expected environmental & social benefits
              </h3>
              <p className="mt-3 text-navy-foreground/80">
                Optimized routing and fleet modernization could reduce emissions. Digital ticketing
                could cut paper waste, while better coordination aims to improve commuter safety,
                reliability and affordability.
              </p>
            </div>
          </div>
          <Button
            asChild
            variant="outline"
            className="mt-8 border-navy-foreground/40 bg-transparent text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground"
          >
            <Link to="/contact">
              Discuss a partnership <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
      <section className="bg-secondary/60 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHead eyebrow="Engagement" title="Advocacy & industry engagement" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                icon: Mic,
                title: "Industry Events",
                text: "Representing women, youth and inclusive-mobility priorities at sector convenings, launches and PSV industry forums.",
              },
              {
                icon: Landmark,
                title: "Lobbying & Advocacy",
                text: "Engaging regulators and government agencies to shape policy on public transport, road safety and electric mobility.",
              },
            ].map((e) => (
              <div key={e.title} className="rounded-2xl bg-card p-8 shadow-card">
                <e.icon className="h-10 w-10 text-rose" />
                <h3 className="mt-5 text-2xl font-bold">{e.title}</h3>
                <p className="mt-3 text-muted-foreground">{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
