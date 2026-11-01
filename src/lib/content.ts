import { ShieldCheck, Zap, Users, Handshake, GraduationCap } from "lucide-react";
import epure from "@/assets/m-epuremotion.jpg";
import namata from "@/assets/m-namata.jpg";
import fedco from "@/assets/m-fedco.jpg";
import treasury from "@/assets/m-treasury.jpg";
import sacco from "@/assets/m-sacco.jpg";
import van from "@/assets/m-van.jpg";
import route111 from "@/assets/m-route111.jpg";
import forum from "@/assets/m-forum.jpg";
import pEpure from "@/assets/partners/epure.jpg";
import pRgc from "@/assets/partners/rgc.jpg";
import pNamata from "@/assets/partners/namata.jpg";
import pNtsa from "@/assets/partners/ntsa.jpg";
import pDong from "@/assets/partners/dongfeng.jpg";
import pJica from "@/assets/partners/jica.jpg";
import pFedco from "@/assets/partners/fedco.jpg";
import pBev from "@/assets/partners/bev.jpg";

export const pillars = [
  {
    icon: ShieldCheck,
    title: "Road Safety",
    color: "text-rose",
    description:
      "Practical training, safety standards and etiquette programs delivered with public transport sector bodies.",
  },
  {
    icon: Zap,
    title: "E-Mobility",
    color: "text-teal",
    description:
      "Piloting electric PSV fleets and clean, scheduled transport solutions alongside operators and authorities.",
  },
  {
    icon: Users,
    title: "Gender Inclusion",
    color: "text-sky",
    description:
      "Safer journeys, fairer opportunity. We tackle harassment and gender-based violence in public transport and measure what unsafe travel costs women economically.",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    color: "text-primary",
    description:
      "Convening PSV investors, operators, county leadership and development partners around shared mobility goals.",
  },
  {
    icon: GraduationCap,
    title: "Skills Development",
    color: "text-rose",
    description:
      "Building capacity and economic opportunity for women and youth across the public transport value chain.",
  },
];

export const capabilities = [
  {
    title: "Road Safety Training & Advocacy",
    text: "Practical training programs delivered with sector bodies such as the Federation of Drivers and Conductors (FEDCO).",
  },
  {
    title: "E-Mobility Pilots & PSV Innovation",
    text: "Piloting electric PSV fleets and scheduled services alongside operators and transport authorities.",
  },
  {
    title: "Policy Lobbying & Regulatory Engagement",
    text: "Engaging regulators and agencies such as NaMATA on public transport policy and infrastructure rollout.",
  },
  {
    title: "Stakeholder & Industry Partnerships",
    text: "Convening PSV investors, operators and development partners around shared mobility goals.",
  },
  {
    title: "Women & Youth Skills Development",
    text: "Building capacity and economic opportunity for women and youth across the transport value chain.",
  },
];

export const researchCards = [
  {
    title: "Violence, Harassment & Economic Opportunity",
    objective:
      "Measure the hidden “pink tax” of unsafe transport, the extra costs women absorb to travel safely.",
    approach:
      "Women- and youth-led focus groups map how harassment on matatus, at stages and on routes shapes travel choices, and track what it costs in daily income, missed job opportunities and limited economic mobility.",
    outcome:
      "Community-grounded evidence to inform safer-transport standards, operator codes of conduct and policy.",
  },
  {
    title: "Climate Resilience & Gendered Economic Loss",
    objective: "Quantify what climate disruption costs the informal economy.",
    approach:
      "We track climate-linked transport failures (flash floods, washed-out roads and damaged infrastructure) and survey women market traders and small-business owners on how these disruptions cut their trade and, in some cases, cause lasting income loss.",
    outcome:
      "Evidence to support climate-resilient transport planning that protects informal-sector livelihoods.",
  },
];

export const awarenessThemes = [
  {
    title: "Gender-Based Violence (GBV) awareness",
    intro:
      "Everyone has the right to travel without fear. We run awareness activities with commuters, drivers, conductors and SACCOs on:",
    items: [
      "Recognising and stopping harassment and GBV in public transport",
      "Bystander action and how to support someone who is targeted",
      "Reporting channels and referral pathways",
      "Driver and crew conduct, built into our road safety and etiquette training (for example with FEDCO)",
      "Campaigns during 16 Days of Activism Against Gender-Based Violence (25 November to 10 December)",
    ],
  },
  {
    title: "Climate change awareness",
    intro: "Climate change is a road safety and livelihoods issue. We raise awareness on:",
    items: [
      "How flooding and extreme weather affect road safety and routes",
      "Cleaner mobility options, linking to our e-mobility pilots",
      "Preparing traders and operators to keep working through disruptions",
    ],
  },
];

export const milestones = [
  {
    img: epure,
    text: "Stakeholder engagement with PSV investors at the launch of E-Puremotion, an EV dealer.",
  },
  {
    img: namata,
    text: "Meeting the NaMATA Director General on the operationalization of BRT Line 2.",
  },
  {
    img: fedco,
    text: "Road safety and etiquette training for the Federation of Drivers and Conductors (FEDCO).",
  },
  { img: treasury, text: "PSV stakeholders' courtesy call to PS Kiptoo (Treasury)." },
  { img: sacco, text: "PSV Investors / SACCOs Forum." },
  { img: van, text: "Launch of the electric 14-seater PSV van." },
  { img: route111, text: "Launch of Route 111 Ngong Road scheduled PSV services." },
  { img: forum, text: "PSV Industry Stakeholders' Forum." },
];

export const partners = [
  { img: pEpure, name: "E-Pure Motion" },
  { img: pRgc, name: "Ride Green Convenience" },
  { img: pNamata, name: "NaMATA" },
  { img: pNtsa, name: "NTSA" },
  { img: pDong, name: "Dongfeng" },
  { img: pJica, name: "JICA" },
  { img: pFedco, name: "FEDCO" },
  { img: pBev, name: "BEV" },
];

export const contact = {
  address: "11th Floor, 4th Ngong Avenue Towers",
  city: "Nairobi, Kenya",
  email: "Wyrsake@gmail.com",
  phone: "+254 722 886 159",
  phoneHref: "+254722886159",
  maps: "https://www.google.com/maps/search/?api=1&query=4th+Ngong+Avenue+Towers+Nairobi",
};
