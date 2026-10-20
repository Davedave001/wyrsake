import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import terminal from "@/assets/terminal.jpg";
import { PageHero, SectionHead } from "@/components/site/SiteChrome";
import { Button } from "@/components/ui/button";
import { contact } from "@/lib/content";

export const Route = createFileRoute("/contact")({

  head: () => ({
    meta: [
      { title: "Contact WYRSAKE — Nairobi Office" },
      { name: "description", content: "Reach the Women & Youth Road Safety Association Kenya at 11th Floor, 4th Ngong Avenue Towers, Nairobi. Email Wyrsake@gmail.com or call +254 722 886 159." },
      { property: "og:title", content: "Contact WYRSAKE" },
      { property: "og:description", content: "Nairobi office, email and phone for the Women & Youth Road Safety Association Kenya." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const details = [
  {
    icon: MapPin,
    title: "Office",
    lines: [contact.address, contact.city],
    href: contact.maps,
    hrefLabel: "Get directions",
    color: "text-rose",
  },
  {
    icon: Mail,
    title: "Email",
    lines: [contact.email],
    href: `mailto:${contact.email}`,
    hrefLabel: "Send an email",
    color: "text-sky",
  },
  {
    icon: Phone,
    title: "Phone",
    lines: [contact.phone],
    href: `tel:${contact.phoneHref}`,
    hrefLabel: "Call us",
    color: "text-teal",
  },
];

function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function send(e: React.FormEvent) {
    e.preventDefault();
    const subject = `Website enquiry from ${name || "a visitor"}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  }

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact WYRSAKE"
        intro="Get in touch with our Nairobi office about road safety, transport initiatives and partnership opportunities."
        image={terminal}
      />

      <section className="mx-auto max-w-7xl px-5 py-24">
        <SectionHead eyebrow="Contact details" title="Reach the association" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {details.map((d) => (
            <div key={d.title} className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <d.icon className={`h-10 w-10 ${d.color}`} />
              <h3 className="mt-6 text-xl font-bold text-primary">{d.title}</h3>
              {d.lines.map((l) => (
                <p key={l} className="mt-2 break-words text-muted-foreground">{l}</p>
              ))}
              <a
                href={d.href}
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
              >
                {d.hrefLabel} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-24">
        <div className="mx-auto max-w-3xl px-5">
          <SectionHead
            eyebrow="Send a message"
            title="Write to us"
            intro="For enquiries and partnership opportunities."
          />
          <form onSubmit={send} className="mt-10 space-y-5 rounded-2xl border border-border bg-card p-8 shadow-card">
            <label className="block">
              <span className="text-sm font-semibold text-primary">Your name</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Jane Wanjiru"
                className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring"
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-primary">Message</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                placeholder="How can we help?"
                className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring"
              />
            </label>
            <Button type="submit" size="lg" className="rounded-full">
              Open email draft <ArrowRight />
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
