"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/shared/Button";
import { Heading, Media } from "@/components/shared/ui";
import { StatCards } from "@/components/shared/StatCards";
import { RedCta } from "@/components/shared/RedCta";
import { FromAmbrSection } from "@/components/shared/FromAmbrSection";
import { PartnerSection } from "@/components/shared/PartnerSection";
import { ParallaxShowcase } from "@/components/shared/ParallaxShowcase";
import { Calendar, Building2, Layers, ShieldCheck, MapPin, ArrowUpRight, LandPlot, Handshake, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import {
  HeroSwiper,
  FreeModeStrip,
  Coverflow,
} from "@/components/swiper";
import { PROJECTS } from "@/lib/data";


 const FROM_ARMB_ITEMS = [
  { img: { src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=80", alt: "Home layout plan" }, tag: "Before you commit", title: "Read the RERA number, not the brochure", body: "Every Ambr project carries an UP RERA registration number. Check it yourself at up-rera.in before you put anything down." },
  { img: { src: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=80", alt: "Balcony view at an Ambr Homes flat" }, tag: "The floor plate", title: "A balcony, or a ledge?", body: "If a balcony cannot take two chairs and a table, it is a ledge. Ours are measured for the chairs before the layout is signed." },
  { img: { src: "/images/hero-4.jpeg", alt: "Finished living room at an Ambr Homes flat" }, tag: "Orientation", title: "Cross ventilation & morning light", body: "We test how light and air move through every layout before it is drawn, so the rooms you live in stay cooler for longer." },
  { img: { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80", alt: "Under construction at an Ambr Homes project" }, tag: "On a site visit", title: "What to inspect, not just admire", body: "Look at joints, drips and finishing. Ask for a delivered flat years old — not renderings — and read the updates on the one under construction." },
  { img: { src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80", alt: "Ambr Homes community at dusk" }, tag: "The agreement", title: "The full cost, in writing", body: "Payment schedule, handover date and delay compensation all sit in the agreement for sale — read it in full before anything is signed." },
];

 const STATS = [
  { value: "15+", label: "Years building", icon: Calendar },
  { value: "4", label: "Communities delivered", icon: Building2 },
  { value: "2 & 3", label: "BHK homes", icon: Layers },
  { value: "100%", label: "RERA registered", icon: ShieldCheck },
];

 const HERO_SLIDES = [
  {
    img: "/images/hero-1.jpeg",
    alt: "Modern residential building at Ambr Homes, Greater Noida West",
    eyebrow: "Greater Noida West",
    title: "Built The Way We Would Want Ours Built",
    body: "Five communities. All RERA registered. Designed for the twelve years after handover — not just the day you get the keys.",
  },
  {
    img: "/images/hero-3.jpeg",
    alt: "Ambr Homes building exterior",
    eyebrow: "Five Communities",
    title: "Homes Designed Around The Life After Keys",
    body: "Every layout tested for cross ventilation and morning light, delivered on the date we gave at booking.",
  },
  {
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
    alt: "Lounge interior at an Ambr Homes flat",
    eyebrow: "Vaidpura & Bishrakh",
    title: "One Corridor. Five Addresses.",
    body: "Three projects in Bishrakh and two in Vaidpura — all within a half-hour drive of each other.",
  },
];


 const PARALLAX_CARDS = [
  { img: { src: "/images/hero-3.jpeg", alt: "Ambr Homes building exterior" }  },
  { img: { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80", alt: "Courtyard garden at an Ambr Homes community" } },
  { img: { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80", alt: "Ambr Homes building at dusk" }},
];

 const STORY_CHAPTERS = [
  {
    year: "2010",
    img: { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80", alt: "Ambr Homes site office, Bishrakh" },
    title: "Two brothers and one site office",
    body: "Ambr Homes began as two brothers, a desk and a promise at a site office in Bishrakh — build homes the way we would want our own family to live in them.",
  },
  {
    year: "2013",
    img: { src: "/images/hero-3.jpeg", alt: "Ambr Homes building exterior" },
    title: "The first handover — on the date we said",
    body: "Our first community was delivered before the date we had put in writing. That habit — meeting the date — became the rule every project has followed since.",
  },
  {
    year: "2016",
    img: { src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80", alt: "Ambr Homes community at dusk" },
    title: "The corridor takes shape",
    body: "Instead of spreading projects across the city, we chose to stay on one short corridor between Bishrakh and Vaidpura — so every resident is minutes, not dispatches, from us.",
  },
  {
    year: "Today",
    img: { src: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1600&q=80", alt: "Ambr Homes residential community in Greater Noida West" },
    title: "Five communities, one standard",
    body: "Aspire pre-bookings are open in Vaidpura, and families from our first handovers still live three streets away. One corridor, five addresses, one way of building.",
  },
];

 const PARTNER_ITEMS = [
  {
    icon: LandPlot,
    title: "Landowners & Joint Ventures",
    body: "You know the land. We bring the development experience, design, construction and sales. Let's build a proposition that works for both sides.",
  },
  {
    icon: Handshake,
    title: "Channel Partners & Brokers",
    body: "Clear inventory, straightforward conversations and a team that stays responsive. Bring your clients the kind of homes you are comfortable putting your name behind.",
  },
  {
    icon: TrendingUp,
    title: "Investors",
    body: "Explore opportunities across our growing residential portfolio with a focus on practical homes, considered locations and disciplined execution.",
  },
];

 const WHY_ITEMS = [
  { img: { src: "/images/hero-3.jpeg", alt: "Ambr Homes building exterior" }, tag: "Evidence, not assurance", title: "See It Before You Sign", body: "Every claim on this site can be checked in person — walk a delivered flat, a finished balcony and a community that has been lived in for years." },
  { img: { src: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1600&q=80", alt: "Ambr Homes residential community in Greater Noida West" }, tag: "Built first, promised later", title: "Streets That Are Lived In", body: "Our first buyers are still neighbours three streets away. Ten years on, the buildings stand, the corridors hold and families stay." },
  { img: { src: "/images/hero-4.jpeg", alt: "Finished living room at an Ambr Homes flat" }, tag: "Fifteen monsoons", title: "Finishes That Lasted", body: "The wall, the floor, the balcony rail — chosen to look right on move-in day and still right a decade of monsoons later." },
  { img: { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80", alt: "Under construction at an Ambr Homes project" }, tag: "You can verify", title: "Updates You Can Check", body: "Dated construction photographs and written progress reports, published every month for every pre-booked buyer." },
  { img: { src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80", alt: "Ambr Homes community at dusk" }, tag: "One corridor", title: "A Community, Not A Brokerage", body: "Five addresses within a half-hour drive of one site office. When something needs a visit, it's a drive — not a logged ticket." },
];

 const STRIP_ITEMS = [
  { img: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=80", alt: "Balcony view at an Ambr Homes flat", title: "Balconies you can use", sub: "Deep enough for two chairs" },
  { img: "/images/hero-4.jpeg", alt: "Finished living room at an Ambr Homes flat", title: "Finished interiors", sub: "Chosen for ten monsoons" },
  { img: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1600&q=80", alt: "Park-facing home at Ambr Homes", title: "Park-facing plans", sub: "Morning light in every room" },
  { img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=80", alt: "Home layout plan", title: "Sanctioned layouts", sub: "Published before booking" },
  { img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80", alt: "Under construction at an Ambr Homes project", title: "Monthly updates", sub: "Dated progress photographs" },
  { img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1600&q=80", alt: "Ambr Homes residential community in Greater Noida West", title: "Communities", sub: "That outlast the launch" },
];


const COVERFLOW_ITEMS = PROJECTS.slice(0, 5).map((p, i) => ({
  img: i % 2 ? p.configs[0].img.src : p.heroImg.src,
  alt: p.heroAlt,
  label: `${p.name} · ${p.statusLabel}`,
}));





export default function HomePage() {
  const whySwiper = useRef<any>(null);
  const [whyIdx, setWhyIdx] = useState(0);
  return (
    <>
      {/* Hero — fade + parallax + progress pagination */}
      <section className="relative h-screen overflow-hidden bg-ink">
        <HeroSwiper slides={HERO_SLIDES} />
      </section>

      <section className="wrap relative pt-24">
        <StatCards stats={STATS} />
      </section>

    
     
     
      <section className="pt-24">
        <div className="wrap mb-6 ">
          <Heading
            eyebrow="What we offer"
            title="Designed For How A Home Is Lived In"
            description="Three projects in Bishrakh and two in Vaidpura — all within a half-hour drive of each other."
          />
        </div>
        <div className="wrap">
          <FreeModeStrip items={STRIP_ITEMS} />
        </div>
      </section>

       {/* Our Story */}
      <section className="relative pt-28">
        <div className="wrap">
          <div className="mx-auto max-w-3xl text-center">
            <Heading
              align="center"
              eyebrow="Our story"
              title="Built Around A Promise We Made In 2010"
              description="Fifteen years of saying what we will do, then doing it on the date we said. This is the short version — in four chapters, one corridor, five addresses."
            />
          </div>
        </div>

        <div className="wrap relative mt-16 grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Sticky narrative panel */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative overflow-hidden rounded-[1.8rem] bg-ink p-8 text-white shadow-[0_40px_90px_-40px_rgba(16,16,16,0.55)] sm:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/25 blur-[80px]" />
              <div className="relative">
                <span className="inline-flex items-center gap-2.5 rounded-full bg-white/10 px-3.5 py-1.5 text-[0.7rem] font-semibold tracking-[0.14em] text-white ring-1 ring-white/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  EST. 2010 · GREATER NOIDA WEST
                </span>
                <h3 className="mt-6 text-[clamp(1.6rem,2.6vw,2.2rem)] font-medium leading-snug text-white">
                  A service call is a drive, not a dispatch.
                </h3>
                <p className="mt-4 text-white/75">
                  Three projects in Bishrakh and two in Vaidpura — all within a half-hour drive of each other.
                  We have never built outside this corridor, so when something needs a visit, it is a short
                  drive, not a logged ticket.
                </p>

                <div className="mt-7 grid grid-cols-3 divide-x divide-white/15 rounded-2xl border border-white/10 bg-white/5 p-4">
                  {[
                    ["15+", "Years"],
                    ["4", "Delivered"],
                    ["100%", "RERA"],
                  ].map(([v, l]) => (
                    <div key={l} className="px-3 text-center">
                      <p className="bg-gradient-to-br from-white to-white/60 bg-clip-text text-xl font-medium text-transparent sm:text-2xl">
                        {v}
                      </p>
                      <p className="mt-1 text-[0.68rem] uppercase tracking-[0.12em] text-white/60">{l}</p>
                    </div>
                  ))}
                </div>

                <Link href="/about" className="group mt-7 inline-flex items-center gap-2 text-brand">
                  <span className="text-sm font-semibold tracking-[0.06em] uppercase">Read the full story</span>
                  <ArrowUpRight size="16" className="text-brand transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Vertical timeline */}
          <div className="relative">
            {/* center line */}
            <span className="absolute bottom-2 left-1/2 top-2 hidden w-px -translate-x-1/2 border-l border-dashed border-ink/20 lg:block" />

            {STORY_CHAPTERS.map((c, i) => {
              const left = i % 2 === 0;
              return (
                <div
                  key={c.year}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-16 ${i !== STORY_CHAPTERS.length - 1 ? "lg:pb-16" : ""}`}
                >
                  {/* logo on the center line */}
                  <span className="absolute left-1/2 top-2 hidden -translate-x-1/2 lg:block">
                    <img src="/images/logo.png" alt="Ambr" className="h-[36px] w-auto" />
                  </span>

                  <Reveal className={`${left ? "lg:col-start-2" : "lg:col-start-1"} pt-10 lg:pt-0`}>
                    {/* big year stamp */}
                    <div className={`mb-4 flex items-center gap-3 ${left ? "lg:justify-start" : "lg:justify-end"}`}>
                      <span className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-6xl font-semibold leading-none tracking-tight text-transparent sm:text-7xl">
                        {c.year}
                      </span>
                      <span className="hidden text-xs font-semibold uppercase tracking-[0.14em] text-muted lg:block">
                        Chapter {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="group relative overflow-hidden rounded-[1.5rem]  border-line/10 bg-white  transition-all duration-500 hover:-translate-y-1.5 ">
                      <div className="relative h-48 overflow-hidden sm:h-56">
                        <Media img={c.img} sizes="(max-width: 1024px) 90vw, 40vw" className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                        <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl bg-white/15 text-sm font-semibold text-white backdrop-blur-md ring-1 ring-white/20 transition-transform duration-500 group-hover:rotate-6">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="absolute bottom-4 left-4 h-1 w-10 bg-brand" />
                      </div>
                      <div className="flex gap-5 pt-7">
                        <div className="hidden flex-none pt-0.5 sm:block">
                          <span className="block h-10 w-px bg-gradient-to-b from-brand to-line" />
                        </div>
                        <div>
                          <h4 className="text-xl font-medium text-ink">{c.title}</h4>
                          <p className="mt-2 leading-relaxed text-ink-2">{c.body}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>

                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Featured project — Aspire spotlight */}
      <section className="wrap py-24">
        {/* <div className="mb-6 flex items-end justify-between gap-6">
          <Heading
            eyebrow="Featured Project"
            title="Aspire"
            description=""
          />
          <Link href="/projects/aspire" className="tlink hidden whitespace-nowrap md:inline-flex">
            Full project page
          </Link>
        </div> */}

        <div className="group relative overflow-hidden rounded-[2rem] bg-ink shadow-[0_40px_90px_-40px_rgba(16,16,16,0.6)] ring-1 ring-white/10">
          <div className="grid lg:grid-cols-[1.15fr_1fr]">
            {/* Image side */}
            <div className="relative min-h-[380px] overflow-hidden sm:min-h-[460px] lg:min-h-[600px]">
              <Media
                img={{ src: "/images/hero-1.jpeg", alt: "Modern residential building at Ambr Homes, Greater Noida West" }}
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/20 to-transparent" />

              {/* top-left chips */}
              <div className="absolute left-6 top-6 flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-md ring-1 ring-white/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  Under Construction · Pre-booking
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-md ring-1 ring-white/20">
                  <MapPin size="12" className="text-brand" />
                  Vaidpura
                </span>
              </div>

              {/* bottom stat strip on image */}
              <div className="absolute inset-x-0 bottom-0 grid grid-cols-3 divide-x divide-white/15 border-t border-white/10 px-2 py-5 backdrop-blur-sm">
                {[
                  ["2 & 3", "BHK homes"],
                  ["Park", "facing edge"],
                  ["100%", "RERA registered"],
                ].map(([v, l]) => (
                  <div key={l} className="px-4 text-center">
                    <p className="text-xl font-medium text-white sm:text-2xl">{v}</p>
                    <p className="mt-0.5 text-[0.7rem] uppercase tracking-[0.12em] text-white/60">{l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Content side */}
            <div className="relative flex flex-col justify-center gap-6 p-8 sm:p-10 lg:p-14">
              <span className="text-[clamp(2.6rem,6vw,5rem)] font-semibold leading-[0.9] tracking-[-0.03em]">
                <span className="bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent">
                  Our Most Generous Plans Yet
                </span>
              </span>
              <p className="max-w-md text-lg leading-relaxed text-white/75">
                Wider balconies, larger kitchens and a park edge that most homes look directly onto. Aspire is
                designed for families buying their second home — not their first compromise.
              </p>

              {/* config pills */}
              <div className="space-y-3">
                {[
                  { tag: "2 BHK", t: "Park facing", img: { src: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1600&q=80", alt: "Park-facing home at Ambr Homes" } },
                  { tag: "3 BHK", t: "Corner unit", img: { src: "/images/hero-4.jpeg", alt: "Finished living room at an Ambr Homes flat" } },
                ].map((c) => (
                  <div key={c.tag} className="group/config flex items-center gap-4 rounded-2xl bg-white/5 p-3 ring-1 ring-white/10 transition-colors duration-300 hover:bg-white/10">
                    <span className="relative h-14 w-16 flex-none overflow-hidden rounded-lg">
                      <Media img={c.img} sizes="64px" className="transition-transform duration-700 group-hover/config:scale-110" />
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">{c.tag}</p>
                      <p className="text-xs text-white/60">{c.t}</p>
                    </div>
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition-all duration-300 group-hover/config:bg-brand group-hover/config:text-white">
                      <ArrowUpRight size="15" />
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button href="/projects/aspire" className="!bg-white !text-ink hover:!bg-brand hover:!text-white">
                  Explore Aspire
                </Button>
                <Button href="/contact" variant="ghost" className="border border-white/30 text-white hover:!bg-white hover:!text-ink">
                  Book A Site Visit
                </Button>
              </div>
            </div>
          </div>

          {/* brand corner accent */}
          <span className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-brand/20 blur-[70px]" />
        </div>
      </section>

      {/* Parallax showcase */}
      <ParallaxShowcase
        bg={{ src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80", alt: "Ambr Homes community at dusk" }}
        cards={PARALLAX_CARDS}
        title="One Corridor"
        eyebrow="Three addresses · One way of building"
        desc="Five communities, all registered before a single flat goes to market. Every project within a half-hour drive of one site office — so a service call is a drive, not a dispatch."
        link="/why"
        linkLabel="Why we build this way"
      />

      {/* Coverflow communities gallery */}
      <section className="mesh bg-gradient-to-b from-white to-band py-24">
        <div className="wrap">
          <div className="mx-auto max-w-2xl">
            <Heading
              align="center"
              eyebrow="All Projects"
              title="Five Communities. All RERA Registered."
              description=""
            />
          </div>
          <div className="mt-10">
            <Coverflow items={COVERFLOW_ITEMS} />
          </div>
          <div className="mt-4 flex justify-center">
            <Link href="/projects/aspire" className="tlink">
              All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Partner With Us */}
      <PartnerSection items={PARTNER_ITEMS} />

      {/* Why Ambr Homes */}
      <section className="wrap pt-24">
        <div className="grid gap-12 lg:grid-cols-[0.3fr_0.7fr] lg:items-center">
          {/* Left — narrative */}
          <div className="lg:pr-8">
            
            <Heading
                eyebrow="Why Ambr Homes"
                title="A Home Is A Big Decision. We Keep It Simple."
              />
            <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-2">
              You should not have to take a builder's word for everything. Come, look closely. Ask the
              practical questions. See what has already been built and understand what is still being built.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <button
                onClick={() => whySwiper.current?.slidePrev()}
                aria-label="Previous"
                className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink transition-colors duration-300 hover:border-brand hover:bg-brand hover:text-white"
              >
                <ChevronLeft size="18" />
              </button>
              <button
                onClick={() => whySwiper.current?.slideNext()}
                aria-label="Next"
                className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink transition-colors duration-300 hover:border-brand hover:bg-brand hover:text-white"
              >
                <ChevronRight size="18" />
              </button>
              <span className="why-counter ml-2 inline-flex items-baseline text-sm text-muted">
                <span className="text-xl font-medium text-ink tabular-nums">{String(whyIdx + 1).padStart(2, "0")}</span>
                <span className="mx-1.5 text-ink/40">/</span>
                <span className="tabular-nums">{String(WHY_ITEMS.length).padStart(2, "0")}</span>
              </span>
            </div>
          </div>

          {/* Right — 70% swiper cards */}
          <div className="min-w-0">
            <Swiper
              modules={[Navigation, Pagination]}
              onSwiper={(s) => (whySwiper.current = s)}
              onSlideChange={(s) => setWhyIdx(s.activeIndex)}
              pagination={{ el: ".why-pagination", clickable: true }}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{ 640: { slidesPerView: 2 } }}
              className="!overflow-hidden !pb-4"
            >
              {WHY_ITEMS.map((c, i) => (
                <SwiperSlide key={c.title} className="!h-auto">
                  <div className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-line/70 bg-white  transition-all duration-500 hover:-translate-y-1.5 ">
                    <div className="relative h-48 overflow-hidden sm:h-56">
                      <Media img={c.img} sizes="(max-width: 1024px) 90vw, 40vw" className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                      <span className="absolute left-4 top-4 rounded-full bg-white/15 px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-md ring-1 ring-white/20">
                        {c.tag}
                      </span>
                      <span className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md ring-1 ring-white/20">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <h4 className="text-xl font-medium text-ink">{c.title}</h4>
                      <p className="mt-2.5 flex-1 leading-relaxed text-ink-2">{c.body}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="why-pagination mt-6" />
          </div>
        </div>
      </section>

      {/* From Ambr — things to know */}
      <FromAmbrSection items={FROM_ARMB_ITEMS} />

      <RedCta
        eyebrow="Ready to see it for yourself"
        title="Come And See What We've Built"
        description="Whether you are comparing 2 and 3 BHK options, ready to pre-book, or just want to walk through something we finished years ago — tell us when you are free and we will keep the flat open."
        buttons={[
          { label: "Book A Site Visit", href: "tel:+910000000000", className: "border border-white/40 hover:!bg-white hover:!text-ink" },
          { label: "+91 00000 00000", href: "/contact", className: "!bg-white !text-brand hover:!bg-ink hover:!text-white" },
        ]}
      />
    </>
  );
}
