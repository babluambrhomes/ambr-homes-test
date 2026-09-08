"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Swiper from "swiper";
import { Swiper as SwiperReact, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Calendar,
  Building2,
  Layers,
  ShieldCheck,
  Clock,
  LayoutGrid,
  Home,
  TreePine,
  MessageSquare,
  MapPin,
  Users,
  KeyRound,
  Award,
  Quote,
  Star,
  ArrowUpRight,
  CalendarCheck,
  FileCheck,
  SearchCheck,
  ClipboardCheck,
} from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { Heading, Media } from "@/components/shared/ui";
import { StatCards } from "@/components/shared/StatCards";
import { RedCta } from "@/components/shared/RedCta";
import { OverlayCard } from "@/components/shared/OverlayCard";
import { FromAmbrSection } from "@/components/shared/FromAmbrSection";
import { ParallaxShowcase } from "@/components/shared/ParallaxShowcase";

const STATS = [
  { value: "15+", label: "Years building", icon: Calendar },
  { value: "4", label: "Communities delivered", icon: Building2 },
  { value: "2 & 3", label: "BHK homes", icon: Layers },
  { value: "100%", label: "RERA registered", icon: ShieldCheck },
];

const SIX_THINGS = [
  {
    title: "RERA before a rupee",
    desc: "Every project is registered with UP RERA before a single flat is sold. Registration numbers, approved plans and sanctioned layouts are published on the project page — not produced when you ask for them.",
  },
  {
    title: "Dates we actually meet",
    desc: "We would rather commit to a later handover and hit it than promise an early one and move it twice. Four communities delivered on the dates we gave at booking.",
  },
  {
    title: "Daylight tested, not assumed",
    desc: "Every layout is checked for cross ventilation and morning light before it is signed. It costs nothing at drawing stage and saves a family thousands a year in cooling.",
  },
  {
    title: "Materials chosen to age",
    desc: "Branded fittings and tested waterproofing, selected for how they look after ten monsoons rather than on handover day. The finish that photographs best is rarely the one that lasts.",
  },
  {
    title: "Ground kept for residents",
    desc: "Play courts, shaded seating and walking loops sized for daily use. The open ground between buildings is the easiest margin to take, and the first thing residents miss once it is gone.",
  },
  {
    title: "We stay after handover",
    desc: "Snag lists, maintenance handover and resident association support are part of the job, not a favour. Buyers from our earliest project can still reach the people who built for them.",
  },
];

const TABLE_ROWS = [
  {
    feat: "Handover date",
    icon: Clock,
    common: "Quoted optimistically, revised more than once",
    ambr: "Committed once, met on four completed projects",
  },
  {
    feat: "RERA status",
    icon: ShieldCheck,
    common: "Shared on request, sometimes mid-sale",
    ambr: "Registered and published before booking opens",
  },
  {
    feat: "Layout planning",
    icon: LayoutGrid,
    common: "Maximum saleable area per floor plate",
    ambr: "Tested for light and ventilation before sign-off",
  },
  {
    feat: "Materials",
    icon: Home,
    common: "Specified to the price at the time of purchase",
    ambr: "Branded fittings, tested waterproofing, fixed spec",
  },
  {
    feat: "Open ground",
    icon: TreePine,
    common: "Reduced as the plan is value-engineered",
    ambr: "Landscape and play areas held in the sanctioned plan",
  },
  {
    feat: "After handover",
    icon: MessageSquare,
    common: "Sales team moves to the next launch",
    ambr: "Snag list, maintenance handover, association support",
  },
];

const ADVANTAGES = [
  {
    img: { src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80", alt: "Ambr Homes community at dusk" },
    icon: MapPin,
    title: "One corridor, five addresses",
    body: "Three projects in Bishrakh, two in Vaidpura — a service call is a drive, not a dispatch.",
  },
  {
    img: { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80", alt: "Under construction at an Ambr Homes project" },
    icon: Users,
    title: "The same crew, fifteen years",
    body: "Site teams and finishing crews have moved with us from Ambrosia to Vaidpura. Standards travel with people.",
  },
  {
    img: { src: "/images/hero-4.jpeg", alt: "Finished living room at an Ambr Homes flat" },
    icon: KeyRound,
    title: "Finished stock you can walk through",
    body: "Amore is complete. Stand in the actual flat, on the actual balcony, before committing to anything.",
  },
  {
    img: { src: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1600&q=80", alt: "Ambr Homes residential community in Greater Noida West" },
    icon: Award,
    title: "Twelve years of evidence",
    body: "Families in our earliest project have lived through a decade of monsoons. That record is a short drive away.",
  },
];

const SHOWCASE_CARDS = [
  { img: { src: "/images/hero-3.jpeg", alt: "Ambr Homes building exterior" }, label: "Ambr Residency" },
  { img: { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80", alt: "Courtyard garden at an Ambr Homes community" }, label: "The Courtyard" },
  { img: { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80", alt: "Ambr Homes building at dusk" }, label: "After Dusk" },
];

const PRAISE = [
  {
    quote: "We were told the handover date in writing, and we actually moved in on that date.",
    name: "Vipin & Meera",
    home: "Ambrosia, Bishrakh",
    years: "11 years",
  },
  {
    quote: "Our flat has faced twelve monsoons and the balcony rail still looks new. Maintenance people still answer the phone.",
    name: "Rakesh G.",
    home: "The Courtyard, Vaidpura",
    years: "9 years",
  },
  {
    quote: "You can walk into five finished flats today. Nobody asks you to believe renderings when the real thing exists.",
    name: "Sneha & Anmol",
    home: "Amore, Greater Noida West",
    years: "3 years",
  },
];

const FROM_ARMB_ITEMS = [
  { img: { src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=80", alt: "Home layout plan" }, tag: "Before you commit", title: "Read the RERA number, not the brochure", body: "Every Ambr project carries an UP RERA registration number. Check it yourself at up-rera.in before you put anything down." },
  { img: { src: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=80", alt: "Balcony view at an Ambr Homes flat" }, tag: "The floor plate", title: "A balcony, or a ledge?", body: "If a balcony cannot take two chairs and a table, it is a ledge. Ours are measured for the chairs before the layout is signed." },
  { img: { src: "/images/hero-4.jpeg", alt: "Finished living room at an Ambr Homes flat" }, tag: "Orientation", title: "Cross ventilation & morning light", body: "We test how light and air move through every layout before it is drawn, so the rooms you live in stay cooler for longer." },
  { img: { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80", alt: "Under construction at an Ambr Homes project" }, tag: "On a site visit", title: "What to inspect, not just admire", body: "Look at joints, drips and finishing. Ask for a delivered flat years old — not renderings — and read the updates on the one under construction." },
  { img: { src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80", alt: "Ambr Homes community at dusk" }, tag: "The agreement", title: "The full cost, in writing", body: "Payment schedule, handover date and delay compensation all sit in the agreement for sale — read it in full before anything is signed." },
];

const LIFE_STAGES = [
  {
    year: "01",
    img: { src: "/images/hero-4.jpeg", alt: "Finished living room at an Ambr Homes flat" },
    title: "The handover",
    body: "You move in on the date written into the agreement. Snag list closed, maintenance handover done, keys given by the people who built the flat.",
  },
  {
    year: "03",
    img: { src: "/images/hero-3.jpeg", alt: "Ambr Homes building exterior" },
    title: "First monsoons",
    body: "Waterproofing, balconies and drainage falls face three full rainy seasons — the parts nobody photographs, tested by the weather itself.",
  },
  {
    year: "06",
    img: { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80", alt: "Under construction at an Ambr Homes project" },
    title: "The machines",
    body: "Lifts, motors and pumps complete their heaviest daily cycles. When one needs a visit, the crew is a half-hour drive, not a logged ticket.",
  },
  {
    year: "10",
    img: { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80", alt: "Lounge interior at an Ambr Homes flat" },
    title: "The finish",
    body: "Flooring, fittings and railings — chosen to look right a decade in, not just on handover day. The finish that photographs best rarely lasts.",
  },
  {
    year: "12+",
    img: { src: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1600&q=80", alt: "Ambr Homes residential community in Greater Noida West" },
    title: "Still answering",
    body: "Residents from our earliest estates still reach the people who built for them. Maintenance, association support — all part of the job.",
  },
];

const VERIFY_ITEMS = [
  {
    icon: ShieldCheck,
    title: "RERA before a rupee",
    how: "Cross-check every registration number at up-rera.in",
    place: "up-rera.in",
  },
  {
    icon: CalendarCheck,
    title: "Dates we actually meet",
    how: "The handover date sits in the agreement for sale, in writing",
    place: "agreement · project page",
  },
  {
    icon: FileCheck,
    title: "Daylight & layout testing",
    how: "Sanctioned layouts published before anyone books a unit",
    place: "each project page",
  },
  {
    icon: SearchCheck,
    title: "Finishes that lasted",
    how: "Stand inside a delivered flat that has faced ten monsoons",
    place: "Amore · walk-in",
  },
  {
    icon: ClipboardCheck,
    title: "We stay after handover",
    how: "Call the site office — the team that built it still answers",
    place: "Bishrakh · site office",
  },
];

export default function WhyAmbrHomesPage() {
  const heroRef = useRef<HTMLElement>(null);
  const lifeSwiper = useRef<any>(null);
  const [lifeIdx, setLifeIdx] = useState(0);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.2]);

  return (
    <>
      {/* Hero — parallax + overlay */}
      <section ref={heroRef} className="relative overflow-hidden bg-ink pb-40 pt-[clamp(90px,15vw,180px)] text-white">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0">
          <Media img={{ src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80", alt: "Ambr Homes building at dusk" }} priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/40 to-ink" />
        </motion.div>

        <div className="wrap relative">
          <div className="max-w-3xl">
            <span className="flex items-center gap-[13px] text-[0.8125rem] font-semibold uppercase tracking-[0.06em] text-brand after:h-px after:w-14 after:shrink-0 after:bg-brand/60 after:content-['']">
              Why Ambr Homes
            </span>
            <h1 className="mt-5 text-[clamp(2.4rem,5.2vw,4.6rem)] font-medium leading-[1.05] tracking-[-0.02em] text-white">
              Built The Way We Would Want Ours Built
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              Most builders sell you the day you get the keys. We plan for the twelve years after it —
              the monsoon that tests the waterproofing, the lift that runs four hundred times a week,
              the child who needs a room of their own by 2031.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["EST. 2010", "UP RERA", "Bishrakh · Vaidpura"].map((t) => (
                <span key={t} className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-[0.12em] text-white ring-1 ring-white/20 backdrop-blur-md">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="relative z-10 -mt-20">
        <div className="wrap">
          <StatCards stats={STATS} />
        </div>
      </section>

{/* Six things we do differently — bento grid */}
      <section className="bg-gradient-to-b from-white to-band py-[clamp(56px,6vw,96px)]">
        <div className="wrap">
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <Heading
              eyebrow="How We Work"
              title="Six Things We Do Differently"
              description="None of these are exotic. They are the things that get quietly dropped when a project runs late or a margin gets tight — which is exactly why we hold them."
            />
            <span className="hidden items-baseline gap-2 text-sm text-muted lg:inline-flex">
              <span className="bg-gradient-to-b from-brand to-brand-dark bg-clip-text text-6xl font-semibold leading-none text-transparent">06</span>
              <span className="uppercase tracking-[0.12em]">principles</span>
            </span>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SIX_THINGS.map((c, i) => {
              const num = String(i + 1).padStart(2, "0");
              if (i === 0) {
                return (
                  <Reveal key={c.title} className="md:col-span-2 lg:col-span-2">
                    <div className="group relative h-full overflow-hidden rounded-[1.5rem] bg-ink p-9 text-white shadow-[0_30px_70px_-40px_rgba(16,16,16,0.6)] transition-all duration-500 hover:-translate-y-1.5 sm:p-10">
                      <span className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full bg-brand/25 blur-[80px] transition-transform duration-500 group-hover:scale-125" />
                      <span className="pointer-events-none absolute -right-2 bottom-0 bg-gradient-to-b from-white/10 to-transparent bg-clip-text text-[9rem] font-bold leading-none text-transparent">
                        {num}
                      </span>
                      <span className="relative inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-brand">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                        Principle {num}
                      </span>
                      <h3 className="relative mt-5 text-2xl font-medium leading-snug text-white sm:text-3xl">
                        {c.title}
                      </h3>
                      <p className="relative mt-4 max-w-xl leading-relaxed text-white/75">{c.desc}</p>
                      <span className="relative mt-7 block h-0.5 w-12 bg-brand transition-all duration-500 group-hover:w-20" />
                    </div>
                  </Reveal>
                );
              }

              if (i === SIX_THINGS.length - 1) {
                return (
                  <Reveal key={c.title} className="md:col-span-2 lg:col-span-3">
                    <div className="group relative h-full overflow-hidden rounded-[1.5rem] border border-line/70 bg-white px-9 py-8 shadow-[0_10px_30px_-20px_rgba(16,16,16,0.25)] transition-all duration-500 hover:-translate-y-1 hover:border-brand/30 sm:px-10">
                      <span className="pointer-events-none absolute -bottom-6 right-2 bg-gradient-to-b from-brand/10 to-transparent bg-clip-text text-[8rem] font-bold leading-none text-transparent">
                        {num}
                      </span>
                      <div className="relative grid items-center gap-6 text-left lg:grid-cols-[auto_1fr_auto] lg:items-center">
                        <span className="grid h-16 w-16 place-items-center rounded-2xl bg-brand/10 text-brand transition-all duration-500 group-hover:rotate-6 group-hover:bg-brand group-hover:text-white">
                          <MessageSquare size="26" strokeWidth={1.8} />
                        </span>
                        <div>
                          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-brand">
                            Principle {num} · The one that lasts
                          </span>
                          <h3 className="mt-2 text-2xl font-medium text-ink">{c.title}</h3>
                          <p className="mt-2 max-w-2xl leading-relaxed text-ink-2">{c.desc}</p>
                        </div>
                        <span className="hidden h-12 w-12 flex-none place-items-center rounded-full border border-line text-ink transition-all duration-500 group-hover:border-brand group-hover:bg-brand group-hover:text-white lg:grid">
                          <ArrowUpRight size="18" />
                        </span>
                      </div>
                    </div>
                  </Reveal>
                );
              }

              return (
                <Reveal key={c.title}>
                  <div className="group relative h-full overflow-hidden rounded-[1.5rem] border border-line/70 bg-white p-8 shadow-[0_10px_30px_-20px_rgba(16,16,16,0.25)] transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-[0_20px_45px_-22px_rgba(226,1,15,0.3)]">
                    <span className="pointer-events-none absolute -top-5 right-3 bg-gradient-to-b from-brand/15 to-transparent bg-clip-text text-[7rem] font-bold leading-none text-transparent">
                      {num}
                    </span>
                    <span className="relative grid h-11 w-11 place-items-center rounded-xl border border-line/70 bg-white text-sm font-semibold text-muted transition-all duration-500 group-hover:border-brand/30 group-hover:bg-brand group-hover:text-white">
                      {num}
                    </span>
                    <h3 className="relative mt-6 text-xl font-medium leading-snug text-ink">{c.title}</h3>
                    <p className="relative mt-3 leading-relaxed text-ink-2">{c.desc}</p>
                    <span className="relative mt-7 block h-0.5 w-10 bg-brand/60 transition-all duration-500 group-hover:w-16 group-hover:bg-brand" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison table — dark panel */}
      <section className="py-[clamp(56px,6vw,96px)]">
        <div className="wrap">
         <div className=" max-w-3xl">
              <Heading
              eyebrow="How We Compare"
              title="What Usually Happens, And What We Do Instead"
              description="We are not the only builder in town. But we are the only one that has delivered four communities on the dates we promised, and kept them open for inspection before you commit."
            />
            </div>

          <Reveal className="mt-12">
            <div className="relative overflow-hidden rounded-[2rem] bg-ink shadow-[0_40px_90px_-40px_rgba(16,16,16,0.6)] ring-1 ring-white/10">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand/15 blur-[90px]" />
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="px-6 py-5 text-sm font-semibold text-white/50">What you&apos;re comparing</th>
                      <th className="px-6 py-5 text-sm font-semibold text-white/50">What often happens</th>
                      <th className="px-6 py-5 text-sm font-semibold text-brand">At Ambr Homes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TABLE_ROWS.map((row) => {
                      const Icon = row.icon;
                      return (
                        <tr key={row.feat} className="border-b border-white/[0.07] transition-colors duration-300 hover:bg-white/[0.03]">
                          <td className="px-6 py-5 font-medium text-white">
                            <span className="flex items-center gap-3">
                              <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand/15 text-brand">
                                <Icon size="17" strokeWidth={1.8} />
                              </span>
                              {row.feat}
                            </span>
                          </td>
                          <td className="px-6 py-5 text-sm text-white/50">{row.common}</td>
                          <td className="px-6 py-5 text-sm font-medium text-brand">{row.ambr}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="flex flex-wrap items-center gap-3 border-t border-white/10 px-6 py-5">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/70">
                  <ShieldCheck size="15" className="text-brand" />
                  Verified at up-rera.in
                </span>
                <span className="hidden h-3 w-px bg-white/15 sm:block" />
                <span className="text-xs text-white/50">Walk any delivered flat before you commit — we keep them open, evenings and Sundays included.</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Ambr builds differently — image overlay cards */}
      <section className="bg-gradient-to-b from-band to-white py-[clamp(56px,6vw,96px)]">
        <div className="wrap">
          <Heading
            eyebrow="The Ambr Advantage"
            title="Ambr Builds Differently"
            description="Fifteen years in one corridor means our site teams, vendors and service crews are all within the same half-hour drive — and everything below follows from that."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {ADVANTAGES.map((a, i) => {
              const Icon = a.icon;
              return (
                <Reveal key={a.title} delay={i * 0.05}>
                  <OverlayCard img={a.img} className="relative h-[380px] rounded-[1.5rem] shadow-[0_30px_70px_-40px_rgba(16,16,16,0.5)]">
                    <span className="absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-xl bg-white/15 text-white backdrop-blur-md ring-1 ring-white/20">
                      <Icon size="19" strokeWidth={1.8} />
                    </span>
                    <span className="absolute right-5 top-5 rounded-full bg-white/15 px-3.5 py-1.5 text-[0.7rem] font-semibold tracking-[0.12em] text-white backdrop-blur-md ring-1 ring-white/20">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-7">
                      <span className="mb-4 block h-0.5 w-12 bg-brand transition-all duration-500 group-hover:w-20" />
                      <h3 className="text-[1.35rem] font-medium leading-snug text-white">{a.title}</h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-white/75">{a.body}</p>
                    </div>
                  </OverlayCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Parallax showcase */}
      <ParallaxShowcase
        bg={{ src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80", alt: "Ambr Homes community at dusk" }}
        cards={SHOWCASE_CARDS}
        title="One Corridor"
        eyebrow="Three addresses · One way of building"
        desc="Five communities across Bishrakh and Vaidpura, all within a half-hour drive of one site office — so a service call is a drive, not a dispatch."
        link="/projects/aspire"
        linkLabel="See what we've built"
      />

      {/* The 12-year view — lifecycle journey */}
      <section className="bg-gradient-to-b from-white to-band py-[clamp(56px,6vw,96px)]">
        <div className="wrap">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <Heading
                eyebrow="The long view"
                title="Twelve Years Inside A Home, Step By Step"
                description="This is what actually happens after you get the keys — and who is still around to care when it does. Every stage below has already played out in a community we built."
              />
            </div>
            <div className="flex flex-col items-start gap-5 md:items-end">
              <span className="hidden items-baseline gap-2 text-sm text-muted md:inline-flex">
                <span className="bg-gradient-to-b from-brand to-brand-dark bg-clip-text text-6xl font-semibold leading-none text-transparent">
                  12
                </span>
                <span className="uppercase tracking-[0.12em]">year journey</span>
              </span>
             
            </div>
          </div>

          <div className="mt-12">
            <SwiperReact
              modules={[Pagination]}
              onSwiper={(s) => (lifeSwiper.current = s)}
              onSlideChange={(s) => setLifeIdx(s.activeIndex)}
              pagination={{ el: ".life-pagination", clickable: true }}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{ 640: { slidesPerView: 2 }, 900: { slidesPerView: 3 }, 1440: { slidesPerView: 4.1 } }}
              className="!overflow-visible !pb-4 [&_.swiper-slide]:!h-auto"
            >
              {LIFE_STAGES.map((s, i) => (
                <SwiperSlide key={s.year} className="!h-auto">
                  <div className="group relative flex h-[380px] flex-col justify-end overflow-hidden rounded-[1.6rem] shadow-[0_30px_70px_-35px_rgba(16,16,16,0.55)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-40px_rgba(226,1,15,0.35)]">
                    <Media
                      img={s.img}
                      sizes="(max-width: 900px) 90vw, (max-width: 1440px) 33vw, 24vw"
                      className="absolute inset-0 transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/10" />

                    <span className="absolute left-5 top-5 grid h-9 w-9 place-items-center rounded-xl bg-white/15 text-xs font-semibold text-white backdrop-blur-md ring-1 ring-white/20 transition-transform duration-500 group-hover:rotate-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* glass content panel */}
                    <div className="relative m-3 rounded-[1.2rem] border border-white/15 bg-white/10 p-5 backdrop-blur-xl transition-all duration-500 group-hover:bg-white/15 sm:p-6">
                      <span className="mb-3 block h-0.5 w-10 bg-brand transition-all duration-500 group-hover:w-16" />
                      <h3 className="text-lg font-medium text-white">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/75">{s.body}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </SwiperReact>
            <div className="life-pagination why-pagination mt-7" />
          </div>
        </div>
      </section>

      {/* What residents say */}
      <section className="py-[clamp(56px,6vw,96px)]">
        <div className="wrap">
          <div className="mx-auto max-w-3xl text-center">
            <Heading
              align="center"
              eyebrow="What residents say"
              title="The Only Review That Matters Is A Lived-In One"
            />
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PRAISE.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.05}>
                <div className="group relative flex h-full flex-col rounded-[1.5rem] border border-line/70 bg-white p-8 shadow-[0_10px_30px_-20px_rgba(16,16,16,0.25)] transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-[0_20px_45px_-22px_rgba(226,1,15,0.25)]">
                  <span className="absolute -top-5 right-7 grid h-11 w-11 place-items-center rounded-full bg-brand shadow-[0_10px_25px_-10px_rgba(226,1,15,0.6)] transition-transform duration-500 group-hover:rotate-6">
                    <Quote size="18" className="text-white" />
                  </span>
                  <span className="flex items-center gap-1 text-brand">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size="14" fill="currentColor" strokeWidth={0} />
                    ))}
                  </span>
                  <p className="mt-5 flex-1 leading-relaxed text-ink-2">&ldquo;{p.quote}&rdquo;</p>
                  <div className="mt-7 border-t border-line pt-5">
                    <p className="font-medium text-ink">{p.name}</p>
                    <p className="mt-0.5 text-xs uppercase tracking-[0.12em] text-muted">
                      {p.home} · {p.years}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Verify it yourself — evidence ledger */}
      <section className="relative overflow-hidden bg-ink py-[clamp(56px,6vw,96px)]">
        <div className="pointer-events-none absolute -left-40 -top-40 h-[480px] w-[480px] rounded-full bg-brand/15 blur-[130px]" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[460px] w-[460px] rounded-full bg-brand/10 blur-[120px]" />

        <div className="wrap relative">
          <div className="mx-auto max-w-3xl">
            <Heading
              align="center"
              light
              eyebrow="Check us"
              title="Every Claim On This Page Can Be Verified"
              description="We are not asking you to take our word for it. Here is exactly where you can check each one — tonight, with a laptop, or on a Sunday walk."
            />
          </div>

          <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] backdrop-blur-md">
            {VERIFY_ITEMS.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 0.04}>
                  <div className={`group flex flex-col gap-4 p-6 transition-colors duration-300 hover:bg-white/[0.04] sm:flex-row sm:items-center sm:gap-6 sm:p-7 ${i !== 0 ? "border-t border-white/10" : ""}`}>
                    <span className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-brand/15 text-brand transition-all duration-500 group-hover:rotate-6 group-hover:bg-brand group-hover:text-white">
                      <Icon size="20" strokeWidth={1.8} />
                    </span>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-white">{v.title}</h3>
                      <p className="mt-1 text-sm text-white/60">{v.how}</p>
                    </div>
                    <span className="flex-none self-start rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white/80 transition-colors duration-300 group-hover:border-brand/50 group-hover:text-white sm:self-center">
                      {v.place}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <p className="mt-8 text-center text-sm text-white/50">
            Walk-ins welcome at Amore, evenings and Sundays included — no appointment needed to come and stand in the finished flat.
          </p>
        </div>
      </section>

      {/* From Ambr — things to know */}
      <FromAmbrSection items={FROM_ARMB_ITEMS} />

      {/* CTA */}
      <RedCta
        eyebrow="Ready to see it for yourself"
        title="Judge Us By Something We Finished"
        description="Every claim on this page can be checked by standing inside a building we handed over years ago. Pick a project, pick a time — evenings and Sundays included — and we will keep the flat open."
        buttons={[
          { label: "Book A Site Visit", href: "/contact", className: "border border-white/40 hover:!bg-white hover:!text-ink" },
          { label: "Explore Aspire", href: "/projects/aspire", className: "!bg-white !text-brand hover:!bg-ink hover:!text-white" },
        ]}
      />
    </>
  );
}