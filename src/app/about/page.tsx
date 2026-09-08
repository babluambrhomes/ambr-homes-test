"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Swiper from "swiper";
import { Swiper as SwiperReact, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Reveal } from "@/components/shared/Reveal";
import { Heading, Media } from "@/components/shared/ui";
import { StatCards } from "@/components/shared/StatCards";
import { RedCta } from "@/components/shared/RedCta";
import { FromAmbrSection } from "@/components/shared/FromAmbrSection";
import { PartnerSection } from "@/components/shared/PartnerSection";
import { ParallaxShowcase } from "@/components/shared/ParallaxShowcase";
import { CardsStack } from "@/components/swiper";
import {
  Calendar,
  Building2,
  Layers,
  ShieldCheck,
  LandPlot,
  Handshake,
  TrendingUp,
} from "lucide-react";

const STATS = [
  { value: "15+", label: "Years building", icon: Calendar },
  { value: "4", label: "Communities delivered", icon: Building2 },
  { value: "2 & 3", label: "BHK homes", icon: Layers },
  { value: "100%", label: "RERA registered", icon: ShieldCheck },
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

const VALUES = [
  {
    title: "Act with integrity",
    desc: "Every project registered with UP RERA before it is sold. Approved plans and registration numbers published before anyone is asked for a cheque.",
  },
  {
    title: "Build to last",
    desc: "Waterproofing, slab thickness, drainage falls and lift shafts. The parts nobody photographs decide whether a home still feels good in year twelve.",
  },
  {
    title: "Deliver on time",
    desc: "We would rather commit to a later date and meet it than promise an early one and quietly move it twice. Four communities delivered on the dates we gave.",
  },
  {
    title: "Build communities",
    desc: "Play courts, shaded seating and walking loops sized for daily use — the reason a project becomes a neighbourhood instead of a parking lot with flats above it.",
  },
  {
    title: "Stay after handover",
    desc: "Snag lists, maintenance handover and resident association support are part of the job, not a favour. Our earliest buyers can still reach the people who built for them.",
  },
];

const CONSULTANTS = [
  "Structural Consultant",
  "MEP Consultant",
  "Landscape Architect",
  "Legal & RERA Compliance",
];

export default function AboutPage() {
  const heroRef = useRef<HTMLElement>(null);
  const storySwiper = useRef<any>(null);
  const [storyIdx, setStoryIdx] = useState(0);
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
              About Us
            </span>
            <h1 className="mt-5 text-[clamp(2.4rem,5.2vw,4.6rem)] font-medium leading-[1.05] tracking-[-0.02em] text-white">
              Building Homes For Greater Noida West
            </h1>

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


      <section className="relative z-10 -mt-20">
        <div className="wrap">
          <StatCards stats={STATS} />
        </div>
      </section>

      <section className="wrap pt-[clamp(64px,8vw,110px)]">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              tag: "Our Mission",
              title: "Homes that hold up",
              body: "To build residential homes that hold up — structurally, financially and in daily use — for the families who buy them. That means honest layouts, materials chosen for how they age, and handover dates we actually meet.",
            },
            {
              tag: "Our Vision",
              title: "A place they chose",
              body: "For Greater Noida West to be known not as a place people settled for, but as a place they chose — with neighbourhoods that mature well and communities that outlast the sales campaign that launched them.",
            },
          ].map((c) => (
            <Reveal key={c.tag}>
              <div className="group relative h-full overflow-hidden rounded-[1.5rem] bg-ink p-8 text-white shadow-[0_30px_70px_-40px_rgba(16,16,16,0.6)] sm:p-10">
                <span className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand/25 blur-[70px] transition-transform duration-500 group-hover:scale-125" />
                <span className="relative inline-flex items-center gap-2 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-brand">
                  {c.tag}
                </span>
                <h3 className="relative mt-4 text-2xl font-medium text-white sm:text-3xl">{c.title}</h3>
                <p className="relative mt-4 leading-relaxed text-white/75">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Our Story — cinematic horizontal cards */}
      <section className="bg-gradient-to-b from-white to-band py-[clamp(64px,8vw,110px)]">
        <div className="wrap">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <Heading
                eyebrow="Our Story"
                title="Built Around A Promise We Made In 2010"
                description="Four moments that shaped how we build — from a single desk in Bishrakh to five communities along one corridor."
              />
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => storySwiper.current?.slidePrev()}
                aria-label="Previous"
                className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink transition-colors duration-300 hover:border-brand hover:bg-brand hover:text-white"
              >
                <ChevronLeft size="18" />
              </button>
              <span className="inline-flex items-baseline text-sm text-muted">
                <span className="text-xl font-medium text-ink tabular-nums">{String(storyIdx + 1).padStart(2, "0")}</span>
                <span className="mx-1.5 text-ink/40">/</span>
                <span className="tabular-nums">{String(STORY_CHAPTERS.length).padStart(2, "0")}</span>
              </span>
              <button
                onClick={() => storySwiper.current?.slideNext()}
                aria-label="Next"
                className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink transition-colors duration-300 hover:border-brand hover:bg-brand hover:text-white"
              >
                <ChevronRight size="18" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="wrap">
            <SwiperReact
              modules={[Pagination]}
              onSwiper={(s) => (storySwiper.current = s)}
              onSlideChange={(s) => setStoryIdx(s.activeIndex)}
              pagination={{ el: ".story-pagination", clickable: true }}
              spaceBetween={28}
              slidesPerView={1.15}
              breakpoints={{ 640: { slidesPerView: 1.6 }, 1024: { slidesPerView: 2.3 } }}
              className="!overflow-visible !pb-4"
            >
              {STORY_CHAPTERS.map((ch, i) => (
                <SwiperSlide key={ch.year} className="!h-auto">
                  <Reveal delay={i * 0.05}>
                    <div className="group relative min-h-[440px] overflow-hidden rounded-t-[2rem] rounded-b-[1rem]">
                      <Media
                        img={ch.img}
                        sizes="(max-width: 1024px) 90vw, 38vw"
                        className="transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-transparent to-transparent" />

                      <span className="absolute left-6 top-6 rounded-full bg-brand px-4 py-1.5 text-xs font-semibold tracking-[0.12em] text-white shadow-[0_4px_20px_rgba(226,1,15,0.4)]">
                        {ch.year}
                      </span>

                      <div className="absolute inset-x-0 bottom-0 p-8">
                        <span className="mb-5 block h-[3px] w-10 rounded-full bg-brand transition-all duration-500 group-hover:w-16" />
                        <h3 className="text-[1.4rem] font-medium leading-snug text-white sm:text-[1.65rem]">{ch.title}</h3>
                        <p className="mt-3 text-[0.9rem] leading-[1.75] text-white/70 sm:text-sm">{ch.body}</p>
                      </div>
                    </div>
                  </Reveal>
                </SwiperSlide>
              ))}
            </SwiperReact>
            <div className="why-pagination story-pagination mt-6" />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white pt-28">
        <div className="wrap grid  gap-12 lg:grid-cols-2">
          <div>
            <Heading
              eyebrow="Core Values"
              title="Built On Strong Values"
            />
            <p className="mt-4 leading-relaxed text-ink-2">Five principles that survived fifteen years, five communities and every margin decision in between. Tap through the stack to read them.</p>
            <p className="mt-4 leading-relaxed text-ink-2">Five principles that survived fifteen years, five communities and every margin decision in between. Tap through the stack to read them.</p>
            <p className="mt-4 leading-relaxed text-ink-2">Five principles that survived fifteen years, five communities and every margin decision in between. Tap through the stack to read them.</p>
            <p className="mt-4 leading-relaxed text-ink-2">Five principles that survived fifteen years, five communities and every margin decision in between. Tap through the stack to read them.</p>
          </div>
          <Reveal>
            <div className="mx-auto max-w-lg">
              <CardsStack
                items={VALUES.map((v, i) => ({
                  no: String(i + 1).padStart(2, "0"),
                  title: v.title,
                  desc: v.desc,
                }))}
              />
            </div>
          </Reveal>
        </div>
      </section>



      {/* From Ambr — things to know */}
      <FromAmbrSection
        eyebrow="Things To Know"
        title="Things Worth Knowing Before You Buy A Home"
        description="The questions everyone should ask, answered plainly. Scroll through what to read, what to inspect and what to put in writing — before you sign."
        items={[
          { img: { src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=80", alt: "Home layout plan" }, tag: "Before you commit", title: "Read the RERA number, not the brochure", body: "Every Ambr project carries an UP RERA registration number. Check it yourself at up-rera.in before you put anything down." },
          { img: { src: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=80", alt: "Balcony view at an Ambr Homes flat" }, tag: "The floor plate", title: "A balcony, or a ledge?", body: "If a balcony cannot take two chairs and a table, it is a ledge. Ours are measured for the chairs before the layout is signed." },
          { img: { src: "/images/hero-4.jpeg", alt: "Finished living room at an Ambr Homes flat" }, tag: "Orientation", title: "Cross ventilation & morning light", body: "We test how light and air move through every layout before it is drawn, so the rooms you live in stay cooler for longer." },
          { img: { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80", alt: "Under construction at an Ambr Homes project" }, tag: "On a site visit", title: "What to inspect, not just admire", body: "Look at joints, drips and finishing. Ask for a delivered flat years old — not renderings — and read the updates on the one under construction." },
          { img: { src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80", alt: "Ambr Homes community at dusk" }, tag: "The agreement", title: "The full cost, in writing", body: "Payment schedule, handover date and delay compensation all sit in the agreement for sale — read it in full before anything is signed." },
        ]}
      />

      {/* Where we build — parallax showcase */}
      <ParallaxShowcase
        bg={{ src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80", alt: "Ambr Homes community at dusk" }}
        cards={[
          { img: { src: "/images/hero-3.jpeg", alt: "Ambr Homes building exterior" }, },
          { img: { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80", alt: "Courtyard garden at an Ambr Homes community" }, },
          { img: { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80", alt: "Ambr Homes building at dusk" },  },
        ]}
        title="Two Localities"
        eyebrow="Where we build"
        desc="Every Ambr project sits within the Greater Noida West corridor — three in Bishrakh and two in Vaidpura. We have never built outside it, so our site teams, vendors and service crews are all within the same half-hour drive."
        link="/projects/aspire"
        linkLabel="See the projects"
      />



      {/* Partner With Us */}
      <PartnerSection
        eyebrow="Partner with us"
        title="Let's Build The Next Address Together."
        description="Good partnerships start with clear conversations. If you own land, represent buyers or invest in residential real estate, let's talk about what we can build together."
        items={[
          { icon: LandPlot, title: "Landowners & Joint Ventures", body: "You know the land. We bring the development experience, design, construction and sales. Let's build a proposition that works for both sides." },
          { icon: Handshake, title: "Channel Partners & Brokers", body: "Clear inventory, straightforward conversations and a team that stays responsive. Bring your clients the kind of homes you are comfortable putting your name behind." },
          { icon: TrendingUp, title: "Investors", body: "Steady, RERA-registered stock in an active micro-market. We share transparent data so you can judge a project on the numbers, not the pitch." },
        ]}
      />

      {/* CTA — full-width red band */}
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
