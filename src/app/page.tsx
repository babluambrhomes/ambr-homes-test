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
  {
    img: {
      src: "/images/unsp11.jpg",
      alt: "Home layout plan",
    },
    tag: "READ THE PLAN",
    title: "Read The Plan",
    body: "Don't just look at the number of bedrooms. Look at room sizes, movement, balconies, windows and how your furniture might actually fit.",
  },
  {
    img: {
      src: "/images/unsp13.jpg",
      alt: "Balcony view at an Ambr Homes flat",
    },
    tag: "DRIVE THE ROUTE",
    title: "Drive The Route",
    body: "A location looks different at 11 AM than it does at 8:30 AM on a weekday. Try the journey you will actually make.",
  },
  {
    img: {
      src: "/images/unsp14.jpg",
      alt: "Finished living room at an Ambr Homes flat",
    },
    tag: "LOOK BEYOND THE SHOW HOME",
    title: "Look Beyond The Show Home",
    body: "Ask what is standard. Ask what is optional. Ask what is included. Read the specifications.",
  },
  {
    img: {
      src: "/images/see1.jpg",
      alt: "Under construction at an Ambr Homes project",
    },
    tag: "SEE SOMETHING FINISHED",
    title: "See Something Finished",
    body: "A render shows what a home is supposed to become. A completed home shows what a builder actually builds.",
  },
  {
    img: {
      src: "/images/keys.jpg",
      alt: "Ambr Homes community at dusk",
    },
    tag: "ASK WHAT HAPPENS AFTER",
    title: "Ask What Happens After",
    body: "The sale is one day. Living in the home is years. Know who remains responsible when the keys are handed over.",
  },
];

const STATS = [
  { value: "4+", label: "Years Building Homes", icon: Calendar },
  { value: "11", label: "Completed Communities", icon: Building2 },
  { value: "250+", label: "Homes Under Construction", icon: LandPlot },
  { value: "100%", label: "Projects Built With Care", icon: ShieldCheck },
];

const HERO_SLIDES = [
  {
    img: "/images/about-01.jpeg",
    alt: "An Ambr Homes residential building in Greater Noida West at dusk",
    eyebrow: "HOMES DESIGNED AROUND LIFE AFTER KEYS",
    title: "Homes Designed Around The Life After Keys.",
    body: "A home should have room for the people you are today — and the people your family is becoming.",
  },
  {
    img: "/images/ambr38.jpeg",
    alt: "Ambr Aura residential building by Ambr Homes",
    eyebrow: "READY TO MOVE IN",
    title: "See It. Walk In. Make It Yours.",
    body: "With Amore, the home is already here. Walk through the rooms, step onto the balcony, and see what your everyday could look like.",
  },
  {
    img: "/images/ambr45.jpeg",
    alt: "Ambr Droplets residential building by Ambr Homes",
    eyebrow: "TAKING SHAPE",
    title: "Your Next Home Is Taking Shape.",
    body: "Magnolia and Aspire are being built now. Come see the progress, understand the plans, and choose a home with clarity.",
  },
];

const PARALLAX_CARDS = [
  { img: { src: "/images/ambr8.jpeg", alt: "Ambr Homes building exterior" } },
  { img: { src: "/images/ambr6.jpeg", alt: "Courtyard garden at an Ambr Homes community" } },
  { img: { src: "/images/hero-3.jpeg", alt: "Ambr Homes building at dusk" } },
];

const STORY_CHAPTERS = [
  {
    year: "2022",
    img: {
      src: "/images/WhatsApp Image 2026-09-07 at 6.03.05 PM.jpeg",
      alt: "Olympia by Ambr Homes",
    },
    title: "Olympia — 4-Side Open Living.",
    body: "Our flagship low-rise development in Bishrakh. Designed with Stilt + 5 architecture, 4-side open ventilation, warm wooden false-ceiling balconies, and covered car parking for 45 families.",
  },
  {
    year: "2022",
    img: {
      src: "/images/ambr19.jpeg",
      alt: "Sunny by Ambr Homes",
    },
    title: "Sunny — Boutique Luxury Residences.",
    body: "Delivering 23 boutique homes with illuminated timber facade panels, glass-railed balconies, and private ground stilt parking — establishing our standard of quiet low-density privacy.",
  },
  {
    year: "2023",
    img: {
      src: "/images/hero-1.jpeg",
      alt: "Helios & Orbit by Ambr Homes",
    },
    title: "Helios & Orbit — Neo-Classical Grandeur.",
    body: "Featuring neo-classical architecture with prominent Ambr Homes gold signage, grand arched pilasters, and tree-lined boulevards — delivering 45 residences with secure stilt parking.",
  },
  {
    year: "2024",
    img: {
      src: "/images/contact-03.jpeg",
      alt: "Droplets by Ambr Homes",
    },
    title: "Droplets — Modern Balcony Living.",
    body: "Showcasing Ambr Droplets with signature illuminated wooden balcony ceilings, vertical green wall accents, and gated security — delivering 41 premium apartments designed for natural light.",
  },
  {
    year: "2024",
    img: {
      src: "/images/Bambrosia.jpeg",
      alt: "Ambrosia by Ambr Homes",
    },
    title: "Ambrosia & Multi-Block Living.",
    body: "Delivering landmark developments like Ambrosia in Bishrakh. We prioritized 4-side open layouts, park-facing balconies, and high-speed elevators for everyday resident comfort.",
  },
  {
    year: "2025",
    img: {
      src: "/images/ambr-aura.jpeg",
      alt: "Aura by Ambr Homes",
    },
    title: "Aura & Uninterrupted Execution.",
    body: "Delivering Aura and advancing ongoing projects on schedule. Our dedicated site teams protected material supply chains and construction standards so families receive keys without compromise.",
  },
  {
    year: "2026",
    img: {
      src: "/images/Batlanta.jpg",
      alt: "Atlanta by Ambr Homes",
    },
    title: "Atlanta — Landmark Luxury.",
    body: "Introducing Atlanta, our landmark luxury development offering low-rise, low-density 2 & 3 BHK residences with Vastu-compliant planning, 3-tier gated security, and wide balconies.",
  },
  {
    year: "2026",
    img: {
      src: "/images/ambr10.jpeg",
      alt: "Ambr Amore residential community in Greater Noida West",
    },
    title: "Amore — Classical Refinement.",
    body: "Launching Amore, blending timeless classical architecture with smart digital door locks, wooden flooring, and eco-friendly design — completing 5 flagship addresses across the corridor.",
  },
];

const PARTNER_ITEMS = [
  {
    icon: LandPlot,
    title: "Landowners",
    body: "Have land with potential? Let's explore what we can build together.",
  },
  {
    icon: Handshake,
    title: "Channel Partners",
    body: "Homes become easier to sell when you can stand behind them. Let's work together.",
  },
  {
    icon: TrendingUp,
    title: "Investors",
    body: "Looking at residential opportunities in a growing corridor? Let's have a conversation.",
  },
];

const WHY_ITEMS = [
  {
    img: {
      src: "/images/about-01.jpeg",
      alt: "Clear project information",
    },
    tag: "01",
    title: "See What We've Already Built",
    body: "A completed home tells you more than a render ever can. See the building, the finishes and how the spaces feel when they are actually lived in.",
  },
  {
    img: {
      src: "/images/unsp6.jpg",
      alt: "Commitment to handover",
    },
    tag: "02",
    title: "Look Beyond The Living Room",
    body: "The things behind the walls matter too. Construction quality, waterproofing, services, materials and the details that only become important after you've lived somewhere for a while.",
  },
  {
    img: {
      src: "/images/ambr46.jpeg",
      alt: "Experienced building team",
    },
    tag: "03",
    title: "Built Around Family Life",
    body: "Morning routines are different from Sunday afternoons. Children grow. Parents visit. Families change. A good home needs to leave room for all of it.",
  },
  {
    img: {
      src: "/images/ambr39.jpeg",
      alt: "Family-first layouts",
    },
    tag: "04",
    title: "Know The Place Before You Buy It",
    body: "Walk the neighbourhood. See what's around you. Understand the everyday routes, open spaces and things your family will actually use.",
  },
  {
    img: {
      src: "/images/keys.jpg",
      alt: "Support after handover",
    },
    tag: "05",
    title: "We Don't Disappear After The Keys",
    body: "Possession isn't the finish line. It is the point where your relationship with the home actually begins.",
  },
];

const STRIP_ITEMS = [
  {
    img: "/images/unsp1.jpg",
    alt: "Naturally bright and ventilated home",
    title: "Daylight & Cross-Ventilation",
    sub: "East-west oriented layouts engineered to maximize natural morning sunlight, continuous cross-ventilation, and bright living rooms.",
  },
  {
    img: "/images/unsp2.jpg",
    alt: "Family living space at an Ambr Homes community",
    title: "Expansive Living Proportions",
    sub: "Generous living and dining zones planned for comfortable daily movement, family gatherings, and flexible furniture arrangements.",
  },
  {
    img: "/images/unsp3.jpg",
    alt: "Green community space for families",
    title: "Landscaped Balcony Views",
    sub: "Wide step-out balconies overlooking green open spaces, providing a peaceful outdoor extension for morning tea and evening relaxation.",
  },
  {
    img: "/images/unsp4.jpg",
    alt: "Thoughtfully planned home interior",
    title: "Precision Space Planning",
    sub: "Dedicated wardrobe niches, practical modular kitchen counters, and zero-waste corridor planning engineered for maximum usable carpet area.",
  },
  {
    img: "/images/unsp5.jpg",
    alt: "Thoughtfully planned community spaces",
    title: "Gated Safety & Amenities",
    sub: "3-tier security infrastructure, high-speed dual elevators, uninterrupted power backup, and step-free access designed for all age groups.",
  },
];


const COVERFLOW_ITEMS = PROJECTS.slice(0, 5).map((p) => ({
  img: p.heroImg.src,
  alt: p.heroAlt,
  label: `${p.name} · ${p.statusLabel}`,
}));





export default function HomePage() {
  const whySwiper = useRef<any>(null);
  const [whyIdx, setWhyIdx] = useState(0);
  return (
    <>
      {/*  01 — ONE CORRIDOR */}

      <div className="overflow-hidden max-w-full [&>section]:!min-h-[110vh] [&>section]:!pt-[clamp(48px,6vw,80px)] [&>section]:!pb-[clamp(32px,4vw,55px)]">
        <ParallaxShowcase
          bg={{
            src: "/images/ambr41.jpeg",
            alt: "Ambr Homes community at dusk",
          }}
          cards={PARALLAX_CARDS}
          eyebrow="ONE CORRIDOR"
          title="Greater Noida West.
A Place We Know Well."
          desc="We chose to keep building close to home. Five addresses later, Greater Noida West is more than where we build — it is a neighbourhood we understand, know and believe in."
        // link="/projects"
        // linkLabel="Explore The Location"
        />
      </div>

      {/*  02 — STATS */}
      <section className="wrap relative pt-24 overflow-hidden">
        <StatCards stats={STATS} />
      </section>



      {/*  04 — WHAT WE OFFER */}
      <section className="pt-24 overflow-hidden max-w-full">
        <div className="wrap mb-6">
          <Heading
            eyebrow="Made For Real Life"
            title="Designed For How A Home Is Lived In."
            description="Thoughtfully planned room dimensions, continuous ventilation, zero-waste spatial layouts, and durable finishes engineered to support family life for decades to come."
          />
        </div>

        <div className="wrap">
          <FreeModeStrip items={STRIP_ITEMS} />
        </div>
      </section>

      {/* =========================================================
        05 — OUR STORY
    ========================================================== */}
      <section className="relative pt-28">
        <div className="wrap">
          <div className="mx-auto max-w-3xl text-center">
            <Heading
              align="center"
              eyebrow="Our Story"
              title="Built Around A Promise We Made In 2022."
            />
          </div>
        </div>

        <div className="wrap relative mt-16 grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Sticky narrative panel */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[1.8rem] bg-ink p-6 text-white shadow-[0_40px_90px_-40px_rgba(16,16,16,0.55)] sm:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/25 blur-[80px]" />

              <div className="relative">
                <span className="inline-flex items-center gap-2.5 rounded-full bg-white/10 px-3.5 py-1.5 text-[0.7rem] font-semibold tracking-[0.14em] text-white ring-1 ring-white/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  02 OUR STORY
                </span>

                <h3 className="mt-5 text-[clamp(1.35rem,2.5vw,2.2rem)] font-medium leading-snug text-white">
                  We Build Homes For People Who Plan To Make Them Their Own.
                </h3>

                <p className="mt-3.5 text-sm sm:text-base text-white/75">
                  A home is a big promise. So is building one. Our story is not really about how many years we have been around. It is about what we have learned by staying close to the homes, the neighbourhood and the families who live in them. Eight chapters. One corridor. Five addresses.
                </p>

                <div className="mt-6">
                  <Button href="/about">
                    Meet Ambr Homes
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Vertical timeline */}
          <div className="relative">
            <span className="absolute bottom-2 left-1/2 top-2 hidden w-px -translate-x-1/2 border-l border-dashed border-ink/20 lg:block" />

            {STORY_CHAPTERS.map((c, i) => {
              const left = i % 2 === 0;

              return (
                <div
                  key={`${c.year}-${i}`}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-16 ${i !== STORY_CHAPTERS.length - 1 ? "pb-8 lg:pb-16" : ""
                    }`}
                >
                  <span className="absolute left-1/2 top-2 hidden -translate-x-1/2 lg:block">
                    <img
                      src="/images/logo.png"
                      alt="Ambr"
                      className="h-[36px] w-auto"
                    />
                  </span>

                  <Reveal
                    className={`${left ? "lg:col-start-2" : "lg:col-start-1"
                      } pt-4 lg:pt-0`}
                  >
                    <div
                      className={`mb-3 flex items-center gap-3 ${left ? "lg:justify-start" : "lg:justify-end"
                        }`}
                    >
                      <span className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-4xl font-semibold leading-none tracking-tight text-transparent sm:text-7xl">
                        {c.year}
                      </span>

                      <span className="hidden text-xs font-semibold uppercase tracking-[0.14em] text-muted lg:block">
                        Chapter {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="group relative overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem] border border-line/50 bg-white p-5 sm:p-7 transition-all duration-500 hover:-translate-y-1.5">
                      <div className="relative h-40 overflow-hidden rounded-xl sm:h-56">
                        <Media
                          img={c.img}
                          sizes="(max-width: 1024px) 90vw, 40vw"
                          className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />

                        <span className="absolute left-3 top-3 sm:left-4 sm:top-4 grid h-9 w-9 sm:h-11 sm:w-11 place-items-center rounded-xl bg-white/15 text-xs sm:text-sm font-semibold text-white backdrop-blur-md ring-1 ring-white/20 transition-transform duration-500 group-hover:rotate-6">
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        <span className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 h-1 w-10 bg-brand" />
                      </div>

                      <div className="flex gap-3 sm:gap-5 pt-4 sm:pt-6">
                        <div className="hidden flex-none pt-0.5 sm:block">
                          <span className="block h-10 w-px bg-gradient-to-b from-brand to-line" />
                        </div>

                        <div>
                          <h4 className="text-lg sm:text-xl font-medium text-ink">
                            {c.title}
                          </h4>

                          <p className="mt-1.5 text-sm sm:text-base leading-relaxed text-ink-2">
                            {c.body}
                          </p>
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

      {/* =========================================================
        06 — FEATURED PROJECT — ASPIRE
    ========================================================== */}
      <section className="wrap py-16 sm:py-24 overflow-hidden">
        <div className="group relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] bg-ink shadow-[0_40px_90px_-40px_rgba(16,16,16,0.6)] ring-1 ring-white/10">
          <div className="grid lg:grid-cols-[1.15fr_1fr]">
            <div className="relative min-h-[300px] sm:min-h-[460px] lg:min-h-[600px]">
              <Media
                img={{
                  src: "/images/aspire-02.jpeg",
                  alt: "Modern residential building at Ambr Homes, Greater Noida West",
                }}
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/20 to-transparent" />

              <div className="absolute left-4 top-4 sm:left-6 sm:top-6 flex flex-wrap items-center gap-2 sm:gap-2.5">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[0.7rem] sm:text-xs font-medium text-white backdrop-blur-md ring-1 ring-white/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  Under Construction · Pre-booking
                </span>

                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[0.7rem] sm:text-xs font-medium text-white backdrop-blur-md ring-1 ring-white/20">
                  <MapPin size="12" className="text-brand" />
                  Vaidpura
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 grid grid-cols-3 divide-x divide-white/15 border-t border-white/10 px-1 py-3 sm:px-2 sm:py-5 backdrop-blur-sm">
                {[
                  ["2 & 3", "BHK homes"],
                  ["Park", "facing edge"],
                  ["100%", "Sanctioned plans"],
                ].map(([v, l]) => (
                  <div key={l} className="px-2 sm:px-4 text-center">
                    <p className="text-base sm:text-2xl font-medium text-white">
                      {v}
                    </p>

                    <p className="mt-0.5 text-[0.6rem] sm:text-[0.7rem] uppercase tracking-[0.12em] text-white/60">
                      {l}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex flex-col justify-center gap-5 sm:gap-6 p-6 sm:p-10 lg:p-14">
              <span className="text-[clamp(1.75rem,5vw,5rem)] font-semibold leading-[1.05] sm:leading-[0.9] tracking-[-0.03em]">
                <span className="bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent">
                  Our Most Generous Plans Yet.
                </span>
              </span>

              <p className="max-w-md text-lg leading-relaxed text-white/75">
                Growing families rarely need just another room. They need somewhere for grandparents to stay. A kitchen that can handle Sunday lunch. A balcony people actually use. Space for children to grow without making the whole home feel smaller. That's what we had in mind.
              </p>

              <div className="space-y-3">
                {[
                  {
                    tag: "2 BHK",
                    t: "Park facing",
                    img: {
                      src: "/images/aspire-01.jpeg",
                      alt: "Park-facing home at Ambr Homes",
                    },
                  },
                  {
                    tag: "3 BHK",
                    t: "Corner unit",
                    img: {
                      src: "/images/hero-4.jpeg",
                      alt: "Finished living room at an Ambr Homes flat",
                    },
                  },
                ].map((c) => (
                  <div
                    key={c.tag}
                    className="group/config flex items-center gap-4 rounded-2xl bg-white/5 p-3 ring-1 ring-white/10 transition-colors duration-300 hover:bg-white/10"
                  >
                    <span className="relative h-14 w-16 flex-none overflow-hidden rounded-lg">
                      <Media
                        img={c.img}
                        sizes="64px"
                        className="transition-transform duration-700 group-hover/config:scale-110"
                      />
                    </span>

                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">
                        {c.tag}
                      </p>
                      <p className="text-xs text-white/60">{c.t}</p>
                    </div>

                    <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition-all duration-300 group-hover/config:bg-brand group-hover/config:text-white">
                      <ArrowUpRight size="15" />
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  href="/projects/aspire"
                  className="!bg-white !text-ink hover:!bg-brand hover:!text-white"
                >
                  Explore Aspire
                </Button>

                <Button
                  href="/contact"
                  variant="ghost"
                  className="border border-white/30 text-white hover:!bg-white hover:!text-ink"
                >
                  View Floor Plans
                </Button>
              </div>
            </div>
          </div>

          <span className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-brand/20 blur-[70px]" />
        </div>
      </section>

      {/* =========================================================
        07 — ALL PROJECTS
    ========================================================== */}
      <section className="mesh bg-gradient-to-b from-white to-band py-24 overflow-hidden max-w-full">
        <div className="wrap">
          <div className="mx-auto max-w-2xl">
            <Heading
              align="center"
              eyebrow="All Projects"
              title="Five Communities. All Built For Life Beyond The Brochure."
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

      {/* =========================================================
        08 — PARTNER WITH US
    ========================================================== */}
      <PartnerSection items={PARTNER_ITEMS} />

      {/* =========================================================
        09 — WHY AMBR HOMES
    ========================================================== */}
      <section className="wrap pt-24 overflow-hidden">
        <div className="grid gap-12 lg:grid-cols-[0.3fr_0.7fr] lg:items-center">
          <div className="lg:pr-8">
            <Heading
              eyebrow="Why Ambr Homes"
              title="A Home Is A Big Decision. We Keep It Simple."
            />

            <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-2">
              You don't need another builder telling you how exceptional their homes are. You need to know what you're actually buying. So come see it. Walk through a finished home. Look at the plans. Visit the site. Ask the difficult questions. Take your time.
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
                <span className="text-xl font-medium text-ink tabular-nums">
                  {String(whyIdx + 1).padStart(2, "0")}
                </span>

                <span className="mx-1.5 text-ink/40">/</span>

                <span className="tabular-nums">
                  {String(WHY_ITEMS.length).padStart(2, "0")}
                </span>
              </span>
            </div>
          </div>

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
                  <div className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-line/70 bg-white transition-all duration-500 hover:-translate-y-1.5">
                    <div className="relative h-48 overflow-hidden sm:h-56">
                      <Media
                        img={c.img}
                        sizes="(max-width: 1024px) 90vw, 40vw"
                        className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />

                      <span className="absolute left-4 top-4 rounded-full bg-white/15 px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-md ring-1 ring-white/20">
                        {c.tag}
                      </span>

                      <span className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md ring-1 ring-white/20">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-7">
                      <h4 className="text-xl font-medium text-ink">
                        {c.title}
                      </h4>

                      <p className="mt-2.5 flex-1 leading-relaxed text-ink-2">
                        {c.body}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="why-pagination mt-6" />
          </div>
        </div>
      </section>

      {/* 03 — HERO Premium cinematic slider*/}
      <section className="relative mt-[5vh] h-[75vh] overflow-hidden bg-ink max-w-full">
        <HeroSwiper slides={HERO_SLIDES} />
      </section>
      {/*  10 — FROM AMBR */}
      <FromAmbrSection items={FROM_ARMB_ITEMS} />

      {/* =========================================================
        11 — THE PROOF
    ========================================================== */}
      <RedCta
        eyebrow="THE PROOF"
        title="Come And See What We've Built."
        description="You don't have to decide today. Come see a finished home. Walk through a project taking shape. Ask us what you want to know. Bring your family. Take your time. We'll take it from there."
        buttons={[
          {
            label: "Book A Site Visit",
            href: "/contact",
            className: "border border-white/40 hover:!bg-white hover:!text-ink",
          },
          {
            label: "Talk To AMBR",
            href: "/contact",
            className: "!bg-white !text-brand hover:!bg-ink hover:!text-white",
          },
        ]}
      />
    </>
  );
}
