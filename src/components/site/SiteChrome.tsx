import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";
import { contact } from "@/lib/content";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/what-we-do", label: "What We Do" },
  { to: "/impact", label: "Impact" },
  { to: "/partners", label: "Partners" },
  { to: "/contact", label: "Contact" },
] as const;


export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="WYRSAKE logo" className="h-12 w-12 rounded-md object-cover" />
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold text-primary">WYRSAKE</span>
            <span className="block text-xs text-muted-foreground">Women & Youth Road Safety Association</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "bg-secondary text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Button variant="ghost" size="icon" className="lg:hidden shrink-0" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-5 py-3 lg:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 font-medium">
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-band text-navy-foreground">
      <div className="road-stripe" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={logo} alt="WYRSAKE logo" className="h-20 w-20 rounded-lg object-cover" />
          <p className="mt-4 max-w-xs text-sm text-navy-foreground/75">
            Safer, inclusive and sustainable mobility for women, youth and every commuter in Kenya.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-sun">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/80">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-sun">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sun">Our Values</h4>
          <p className="mt-4 text-sm text-navy-foreground/80">Integrity · Professionalism · Inclusivity · Innovation</p>
        </div>
        <div>
          <h4 className="font-semibold text-sun">Contact</h4>
          <address className="mt-4 space-y-2 text-sm not-italic text-navy-foreground/80">
            <p>{contact.address}<br />{contact.city}</p>
            <p><a href={`mailto:${contact.email}`} className="hover:text-sun">{contact.email}</a></p>
            <p><a href={`tel:${contact.phoneHref}`} className="hover:text-sun">{contact.phone}</a></p>
          </address>
        </div>

      </div>
      <div className="border-t border-navy-foreground/10 py-5 text-center text-xs text-navy-foreground/60">
        © {new Date().getFullYear()} Women & Youth Road Safety Association Kenya
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, intro, image }: { eyebrow: string; title: string; intro: string; image: string }) {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-hero" />
      <div className="relative mx-auto max-w-7xl px-5 py-24 md:py-32">
        <p className="eyebrow !text-sun">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-navy-foreground/85">{intro}</p>
      </div>
      <div className="road-stripe relative" />
    </section>
  );
}

export function SectionHead({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-muted-foreground">{intro}</p>}
    </div>
  );
}
