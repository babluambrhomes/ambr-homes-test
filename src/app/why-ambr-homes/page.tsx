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
  { value: "6+", label: "Years Building Homes", icon: Calendar },
  { value: "4", label: "Completed Communities", icon: Building2 },
  { value: "2 & 3", label: "BHK Homes", icon: Layers },
  { value: "250+", label: "Units Under Construction", icon: ShieldCheck },
];

const SIX_THINGS = [
  {
    title: "CLEAR BEFORE COMMITMENT",
    desc: "Know what you’re buying before you buy it.\n\nPlans, specifications, pricing, timelines and the process should not require a decoder. If something is unclear, ask. If there is something worth knowing, we would rather tell you early.",
  },
  {
    title: "A DATE SHOULD MEAN SOMETHING",
    desc: "Your move is not just a date on our calendar.\n\nIt might be the day a lease ends. A child starts school. Parents move in. A new chapter begins. We understand why possession timelines matter because your life is planned around them.",
  },
  {
    title: "BUILT FOR TUESDAY, NOT JUST LAUNCH DAY",
    desc: "A home has to work when nobody is looking.\n\nWhere does the morning light fall? Where do children leave their bags? Can two people use the kitchen without getting in each other’s way? Where does everyone sit when the family comes over?",
  },
  {
    title: "LIGHT & AIR COME EARLY",
    desc: "The things you cannot add later deserve attention early.\n\nNatural light. Ventilation. Usable balconies. Movement through the home. We think about these while decisions can still be made — not after everything is finished.",
  },
  {
    title: "BUILT FOR THE YEARS AFTER",
    desc: "The handover is not the finish line.\n\nA home should still make sense after the furniture changes, the paint gets lived with and the first excitement wears out. That is why materials, fittings and everyday usability matter to us.",
  },
  {
    title: "WE DON’T DISAPPEAR AFTER THE KEYS",
    desc: "Handover isn’t goodbye.\n\nMoving into a home always brings questions. Something needs explaining, checking or fixing. You should know who to call — and you should expect someone to answer.",
  },
];

const TABLE_ROWS = [
  {
    feat: "Handover date",
    icon: Clock,
    common: "“We’ll explain it later.”",
    ambr: "We explain the important details before you commit.",
  },
  {
    feat: "The brochure",
    icon: ShieldCheck,
    common: "The brochure shows everything at its best.",
    ambr: "We encourage you to visit and see what has actually been built.",
  },
  {
    feat: "The floor plan",
    icon: LayoutGrid,
    common: "The floor plan looks good on paper.",
    ambr: "We think about how the family will actually use the rooms.",
  },
  {
    feat: "Possession",
    icon: CalendarCheck,
    common: "The possession date becomes a moving target.",
    ambr: "We treat a date as something that matters to the family waiting for it.",
  },
  {
    feat: "After the sale",
    icon: MessageSquare,
    common: "The relationship ends after the sale.",
    ambr: "We stay involved through handover and the questions that follow.",
  },
  {
    feat: "The promise",
    icon: SearchCheck,
    common: "The promise is bigger than the proof.",
    ambr: "We would rather show you something standing.",
  },
];

const ADVANTAGES = [
  {
    img: {
      src: "/images/aspire-03.jpeg",
      alt: "Ambr Homes community at dusk",
    },
    icon: MapPin,
    title: "Structure",
    body: "What holds everything together.",
  },
  {
    img: {
      src: "/images/ambr43.jpeg",
      alt: "Under construction at an Ambr Homes project",
    },
    icon: Users,
    title: "Construction",
    body: "The work behind the finished surface.",
  },
  {
    img: {
      src: "/images/hero-4.jpeg",
      alt: "Finished living room at an Ambr Homes flat",
    },
    icon: KeyRound,
    title: "Finishes",
    body: "The things your hands and eyes meet every day.",
  },
  {
    img: {
      src: "/images/hero-1.jpeg",
      alt: "Ambr Homes residential community in Greater Noida West",
    },
    icon: Award,
    title: "The Home",
    body: "The result should feel simple. The work behind it isn't.",
  },
];
const SHOWCASE_CARDS = [
  { img: { src: "/images/hero-3.jpeg", alt: "Ambr Homes building exterior" }, label: "Ambr Residency" },
  { img: { src: "/images/ambr18.jpeg", alt: "Courtyard garden at an Ambr Homes community" }, label: "The Courtyard" },
  { img: { src: "/images/ambr36.jpeg", alt: "Ambr Homes building at dusk" }, label: "After Dusk" },
];

const PRAISE = [
  {
    quote: "Does it still feel comfortable when the house is full?",
    name: "THE HOME",
    home: "The home",
    years: "",
  },
  {
    quote:
      "Do the things that looked good on day one still make sense years later?",
    name: "THE DETAILS",
    home: "The details",
    years: "",
  },
  {
    quote:
      "When something needs attention, is there still someone to speak to?",
    name: "THE PEOPLE",
    home: "The people",
    years: "",
  },
];
const FROM_ARMB_ITEMS = [
  {
    img: {
      src: "/images/unsp11.jpg",
      alt: "Home layout plan",
    },
    tag: "READ THE PLAN",
    title: "READ THE PLAN",
    body: "Don't just look at the number of bedrooms. Look at room sizes, movement, balconies, windows and how your furniture might actually fit.",
  },
  {
    img: {
      src: "/images/unsp13.jpg",
      alt: "Balcony view at an Ambr Homes flat",
    },
    tag: "DRIVE THE ROUTE",
    title: "DRIVE THE ROUTE",
    body: "A location looks different at 11 AM than it does at 8:30 AM on a weekday. Try the journey you will actually make.",
  },
  {
    img: {
      src: "/images/unsp14.jpg",
      alt: "Finished living room at an Ambr Homes flat",
    },
    tag: "LOOK BEYOND THE SHOW HOME",
    title: "LOOK BEYOND THE SHOW HOME",
    body: "Ask what is standard. Ask what is optional. Ask what is included. Read the specifications.",
  },
  {
    img: {
      src: "/images/unsp15.jpg",
      alt: "Under construction at an Ambr Homes project",
    },
    tag: "SEE SOMETHING FINISHED",
    title: "SEE SOMETHING FINISHED",
    body: "A render shows what a home is supposed to become. A completed home shows what a builder actually builds.",
  },
  {
    img: {
      src: "/images/unsp19.jpg",
      alt: "Ambr Homes community at dusk",
    },
    tag: "ASK WHAT HAPPENS AFTER",
    title: "ASK WHAT HAPPENS AFTER",
    body: "The sale is one day. Living in the home is years. Know who remains responsible when the keys are handed over.",
  },
];

const LIFE_STAGES = [
  {
    year: "01",
    img: {
      src: "/images/unsp7.jpg",
      alt: "Finished living room at an Ambr Homes flat",
    },
    title: "THE FIRST MORNING",
    body: "Boxes everywhere. Tea in the kitchen. The first night in your own home.",
  },
  {
    year: "02",
    img: {
      src: "/images/unsp8.jpg",
      alt: "Ambr Homes building exterior",
    },
    title: "THE ROUTINE",
    body: "School mornings. Work calls. Grocery lists. Life finds its rhythm.",
  },
  {
    year: "03",
    img: {
      src: "/images/unsp9.jpg",
      alt: "Under construction at an Ambr Homes project",
    },
    title: "THE FAMILY GROWS",
    body: "A new room gets a new purpose.",
  },
  {
    year: "04",
    img: {
      src: "/images/unsp10.jpg",
      alt: "Lounge interior at an Ambr Homes flat",
    },
    title: "PEOPLE COME OVER",
    body: "Festivals, birthdays, dinners and relatives staying a little longer.",
  },
  {
    year: "05",
    img: {
      src: "/images/unsp12.jpg",
      alt: "Ambr Homes residential community in Greater Noida West",
    },
    title: "THE HOME CHANGES",
    body: "Furniture moves. Walls get memories. The house becomes unmistakably yours.",
  },
  {
    year: "06",
    img: {
      src: "/images/hero-1.jpeg",
      alt: "Ambr Homes community at dusk",
    },
    title: "YEARS LATER",
    body: "The best test of a home is whether it still feels right after the novelty is gone.",
  },
];

const VERIFY_ITEMS = [
  {
    icon: ShieldCheck,
    title: "Project status",
    how: "See the current stage of construction and understand what has been completed and what work is still underway.",
  },

  {
    icon: FileCheck,
    title: "Plans & specifications",
    how: "Understand what is included in your home, from the plans and specifications to the details that matter before you commit.",
  },

  {
    icon: SearchCheck,
    title: "Completed homes",
    how: "Visit what AMBR has already built and see how our completed homes look and feel after families have moved in.",
  },

  {
    icon: ClipboardCheck,
    title: "Commercial terms",
    how: "Know the numbers before you decide, including the important commercial details that should be clear from the beginning.",
  },

  {
    icon: CalendarCheck,
    title: "Handover & support",
    how: "Understand what happens after the keys are handed over and who you can speak to when questions or support are needed.",
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
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-ink pb-40 pt-[clamp(90px,15vw,180px)] text-white"
      >
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <Media
            img={{
              src: "/images/aspire-01.jpeg",
              alt: "Ambr Homes building at dusk",
            }}
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/40 to-ink" />
        </motion.div>

        <div className="wrap relative">
          <div className="max-w-3xl">
            <span className="flex items-center gap-[13px] text-[0.8125rem] font-semibold uppercase tracking-[0.06em] text-brand after:h-px after:w-14 after:shrink-0 after:bg-brand/60 after:content-['']">
              WHY AMBR HOMES
            </span>

            <h1 className="mt-5 text-[clamp(2.4rem,5.2vw,4.6rem)] font-medium leading-[1.05] tracking-[-0.02em] text-white">
              Built The Way We’d Want Ours Built.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              A home is easy to sell in a picture.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/75">
              Living in one is different.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70">
              We think about the things that matter after the excitement is gone —
              how the rooms work on an ordinary morning, whether the light reaches
              where you need it, whether the details hold up, and whether someone is
              still there when you need help.
            </p>

            <div className="mt-8">
              <a
                href="/projects"
                className="inline-flex items-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark"
              >
                See What We’ve Built →
              </a>
            </div>

            <p className="mt-4 text-sm text-white/50">
              Don’t take our word for it. Come see.
            </p>
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
              eyebrow="HOW WE WORK"
              title="Six Things We Do Differently"
              description="There are hundreds of decisions between a floor plan and a front door. Some are visible. Most aren’t. We care about both."
            />
            <span className="hidden items-baseline gap-2 text-sm text-muted lg:inline-flex">
              <span className="bg-gradient-to-b from-brand to-brand-dark bg-clip-text text-6xl font-semibold leading-none text-transparent">
                06
              </span>
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

                      <p className="relative mt-4 max-w-xl leading-relaxed text-white/75">
                        {c.desc}
                      </p>

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

                          <h3 className="mt-2 text-2xl font-medium text-ink">
                            {c.title}
                          </h3>

                          <p className="mt-2 max-w-2xl leading-relaxed text-ink-2">
                            {c.desc}
                          </p>
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

                    <h3 className="relative mt-6 text-xl font-medium leading-snug text-ink">
                      {c.title}
                    </h3>

                    <p className="relative mt-3 leading-relaxed text-ink-2">
                      {c.desc}
                    </p>

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
          <div className="max-w-3xl">
            <Heading
              eyebrow="THE REALITY OF BUYING A HOME"
              title="What Usually Happens, And What We Do Instead"
              description="Buying a home can get complicated very quickly. Too many promises. Too much fine print. Too many answers that somehow create more questions. We prefer to make the important things easier to see."
            />
          </div>

          <Reveal className="mt-12">
            <div className="relative overflow-hidden rounded-[2rem] bg-ink shadow-[0_40px_90px_-40px_rgba(16,16,16,0.6)] ring-1 ring-white/10">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand/15 blur-[90px]" />

              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="px-6 py-5 text-sm font-semibold text-white/50">
                        What you're comparing
                      </th>
                      <th className="px-6 py-5 text-sm font-semibold text-white/50">
                        What often happens
                      </th>
                      <th className="px-6 py-5 text-sm font-semibold text-brand">
                        At Ambr Homes
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {TABLE_ROWS.map((row) => {
                      const Icon = row.icon;

                      return (
                        <tr
                          key={row.feat}
                          className="border-b border-white/[0.07] transition-colors duration-300 hover:bg-white/[0.03]"
                        >
                          <td className="px-6 py-5 font-medium text-white">
                            <span className="flex items-center gap-3">
                              <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand/15 text-brand">
                                <Icon size="17" strokeWidth={1.8} />
                              </span>
                              {row.feat}
                            </span>
                          </td>

                          <td className="px-6 py-5 text-sm text-white/50">
                            {row.common}
                          </td>

                          <td className="px-6 py-5 text-sm font-medium text-brand">
                            {row.ambr}
                          </td>
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

                <span className="text-xs text-white/50">
                  Walk any delivered flat before you commit — we keep them open,
                  evenings and Sundays included.
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Ambr builds differently — image overlay cards */}
      <section className="bg-gradient-to-b from-band to-white py-[clamp(56px,6vw,96px)]">
        <div className="wrap">
          <Heading
            eyebrow="LOOK CLOSER"
            title="Ambr Builds Differently"
            description="Good construction is not one dramatic feature. It is the accumulation of small decisions made correctly — the structure behind the walls, the materials you touch every day, the way light enters a room, the finish you notice when you stop looking at the photograph and start living in the home. The parts nobody photographs still matter."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {ADVANTAGES.map((a, i) => {
              const Icon = a.icon;

              return (
                <Reveal key={a.title} delay={i * 0.05}>
                  <OverlayCard
                    img={a.img}
                    className="relative h-[380px] rounded-[1.5rem] shadow-[0_30px_70px_-40px_rgba(16,16,16,0.5)]"
                  >
                    <span className="absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-xl bg-white/15 text-white backdrop-blur-md ring-1 ring-white/20">
                      <Icon size="19" strokeWidth={1.8} />
                    </span>

                    <span className="absolute right-5 top-5 rounded-full bg-white/15 px-3.5 py-1.5 text-[0.7rem] font-semibold tracking-[0.12em] text-white backdrop-blur-md ring-1 ring-white/20">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="absolute inset-x-0 bottom-0 p-7">
                      <span className="mb-4 block h-0.5 w-12 bg-brand transition-all duration-500 group-hover:w-20" />

                      <h3 className="text-[1.35rem] font-medium leading-snug text-white">
                        {a.title}
                      </h3>

                      <p className="mt-2.5 text-sm leading-relaxed text-white/75">
                        {a.body}
                      </p>
                    </div>
                  </OverlayCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cinematic statement */}
      <ParallaxShowcase
        bg={{
          src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80",
          alt: "Ambr Homes community at dusk",
        }}
        cards={SHOWCASE_CARDS}
        title="A Home Is More Than What You See On Day One."
        eyebrow="THE PART YOU DON'T SEE IN A BROCHURE"
        desc="The photograph shows the room. It doesn't show the first breakfast. The school bags by the door. The birthday everyone ends up celebrating here. The parents who come to stay. The Sunday afternoon when nobody wants to leave. That's why we build for the years that come after the keys."
        link="/projects"
        linkLabel="See what we've built"
      />

      {/* The 12-year view — lifecycle journey */}
      <section className="bg-gradient-to-b from-white to-band py-[clamp(56px,6vw,96px)]">
        <div className="wrap">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <Heading
                eyebrow="THE YEARS AFTER THE KEYS"
                title="A Home, Step By Step."
                description="A home doesn't stay the same. The family grows. The rooms change jobs. The furniture moves. The balcony becomes a garden. The spare room becomes a study. And the home slowly becomes yours."
              />
            </div>

            <div className="flex flex-col items-start gap-5 md:items-end">
              <span className="hidden items-baseline gap-2 text-sm text-muted md:inline-flex">
                <span className="bg-gradient-to-b from-brand to-brand-dark bg-clip-text text-6xl font-semibold leading-none text-transparent">
                  12
                </span>
                <span className="uppercase tracking-[0.12em]">
                  year journey
                </span>
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
              breakpoints={{
                640: { slidesPerView: 2 },
                900: { slidesPerView: 3 },
                1440: { slidesPerView: 4.1 },
              }}
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

                      <h3 className="text-lg font-medium text-white">
                        {s.title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-white/75">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </SwiperReact>

            <div className="life-pagination why-pagination mt-7" />
          </div>
        </div>
      </section>


      {/* The only review that matters */}
      <section className="py-[clamp(56px,6vw,96px)]">
        <div className="wrap">
          <div className="mx-auto max-w-3xl text-center">
            <Heading
              align="center"
              eyebrow="AFTER THE KEYS"
              title="The Only Review That Matters Is A Lived-In One."
              description="A property can have beautiful photographs. A brochure can say all the right things. But a lived-in home tells a different story. So instead of asking you to believe us, we want you to see what our completed communities actually look like after families have moved in. The best proof isn't what we say. It's what is still standing — and how people live in it."
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
                      <Star
                        key={s}
                        size="14"
                        fill="currentColor"
                        strokeWidth={0}
                      />
                    ))}
                  </span>

                  <p className="mt-5 flex-1 leading-relaxed text-ink-2">
                    &ldquo;{p.quote}&rdquo;
                  </p>

                  <div className="mt-7 border-t border-line pt-5">
                    <p className="font-medium text-ink">{p.name}</p>
                    <p className="mt-0.5 text-xs uppercase tracking-[0.12em] text-muted">
                      {p.home}
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
              eyebrow="SHOW US THE QUESTION"
              title="Don't Take Our Word For It."
              description="Ask the question. Ask for the document. Ask to see the home. Ask what has been completed. Ask what is still under construction. Ask what happens next. A serious decision deserves serious answers."
            />
          </div>

          <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] backdrop-blur-md">
            {VERIFY_ITEMS.map((v, i) => {
              const Icon = v.icon;

              return (
                <Reveal key={v.title} delay={i * 0.04}>
                  <div
                    className={`group flex flex-col gap-4 p-6 transition-colors duration-300 hover:bg-white/[0.04] sm:flex-row sm:items-center sm:gap-6 sm:p-7 ${i !== 0 ? "border-t border-white/10" : ""
                      }`}
                  >
                    <span className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-brand/15 text-brand transition-all duration-500 group-hover:rotate-6 group-hover:bg-brand group-hover:text-white">
                      <Icon size="20" strokeWidth={1.8} />
                    </span>

                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-white">
                        {v.title}
                      </h3>

                      <p className="mt-1 text-sm text-white/60">
                        {v.how}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <p className="mt-8 text-center text-sm text-white/50">
            If something matters to your decision, you should be able to ask about it.
          </p>
        </div>
      </section>

      {/* From Ambr — things to know */}
      <FromAmbrSection items={FROM_ARMB_ITEMS} />

      {/* CTA */}
      <RedCta
        eyebrow="THE PROOF"
        title="Judge Us By Something We Finished."
        description="Don't judge AMBR by this website. Don't judge us by a brochure. Don't judge us by what we promise about the future. Go and see something we have already built. Walk through it. Look at the details. Notice what works. Talk to people. Then decide."
        buttons={[
          {
            label: "See Our Completed Homes",
            href: "/projects",
            className: "border border-white/40 hover:!bg-white hover:!text-ink",
          },
          {
            label: "Book A Site Visit",
            href: "/contact",
            className: "!bg-white !text-brand hover:!bg-ink hover:!text-white",
          },
        ]}
      />
    </>
  );
}