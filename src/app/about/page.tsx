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
  { value: "4+", label: "Years Building Homes", icon: Calendar },
  { value: "11", label: "Completed Communities", icon: Building2 },
  { value: "250+", label: "Homes Under Construction", icon: LandPlot },
  { value: "100%", label: "Projects Built With Care", icon: ShieldCheck },
];

const STORY_CHAPTERS = [
  {
    year: "2022",
    img: {
      src: "/images/sp1.jpg",
      alt: "Ambr Homes site office, Bishrakh",
    },
    title: "It Started With A Simple Idea.",
    body: "Build homes the way we would want our own family to live in them. The first address gave us a place to start in 2022. The families who moved in gave us something more important — a standard to live up to.",
  },
  {
    year: "2023",
    img: {
      src: "/images/sp2.jpg",
      alt: "Ambr Homes building exterior",
    },
    title: "The First Handover.",
    body: "The day a family gets the keys is not the end of a project. It is the beginning of everything the building was meant for. That first handover taught us to look at a home differently — not just as something we build, but as somewhere someone will actually live.",
  },
  {
    year: "2025",
    img: {
      src: "/images/ambr41.jpeg",
      alt: "Ambr Homes community at dusk",
    },
    title: "We Chose To Stay Close.",
    body: "Rather than spread ourselves across the city, we continued building along the Greater Noida West corridor we knew. The reason was simple. Being close means you cannot become distant from your own work.",
  },
  {
    year: "2026",
    img: {
      src: "/images/ambr10.jpeg",
      alt: "Ambr Amore residential community in Greater Noida West",
    },
    title: "Five Addresses. One Standard.",
    body: "Today, AMBR has completed communities, homes ready for families to move into and new projects taking shape. The scale has changed. The reason for building hasn't. Build well. Stay close. Keep improving.",
  },
];

const VALUES = [
  {
    title: "Be Clear From The Start.",
    desc: "No confusing promises. No hiding behind fine print. Tell people what they are buying, what is being built and what comes next.",
  },
  {
    title: "Build To Last.",
    desc: "The finish should look good on day one. The construction should still matter years later.",
  },
  {
    title: "A Date Should Mean Something.",
    desc: "When we give a family a date, it should not be just another line in a brochure. A date creates expectations. We take that seriously.",
  },
  {
    title: "Leave Room For People.",
    desc: "Homes aren't showrooms. Children grow. Families change. Parents visit. Friends stay late. We build spaces that can keep up.",
  },
  {
    title: "Don't Disappear After The Keys.",
    desc: "Possession is where the family's relationship with the home begins. It should not be where ours ends.",
  },
];
const CONSULTANTS = [
  "Structural Consultant",
  "MEP Consultant",
  "Landscape Architect",
  "Legal & Statutory Compliance",
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
          <Media img={{ src: "/images/ambr41.jpeg", alt: "Ambr Homes building at dusk" }} priority sizes="100vw" className="opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/35 to-ink" />
        </motion.div>

        <div className="wrap relative">
          <div className="max-w-3xl">
            <span className="flex items-center gap-[13px] text-[0.8125rem] font-semibold uppercase tracking-[0.06em] text-brand after:h-px after:w-14 after:shrink-0 after:bg-brand/60 after:content-['']">
              About Us
            </span>
            <h1 className="mt-5 text-[clamp(1.9rem,4.8vw,4.6rem)] font-medium leading-[1.05] tracking-[-0.02em] text-white">
              We Build Homes. You Make Them Ghar.
            </h1>

            <div className="mt-8 flex flex-wrap gap-3">
              {["EST. 2022", "Approved Layouts", "Bishrakh · Vaidpura"].map((t) => (
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
              title: "Homes That Hold Up.",
              body: "We build homes that hold up to real life — the rushed mornings, growing families, visiting parents, Sunday lunches and everything that happens after the keys are handed over.",
            },
            {
              tag: "Our Vision",
              title: "A Place People Choose To Stay.",
              body: "We want to help build a Greater Noida West where families don't just find a home. They find a neighbourhood they know, people they recognise and a place they can see themselves staying in for years.",
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
      <section className="bg-gradient-to-b from-white to-band py-[clamp(64px,8vw,110px)] overflow-hidden max-w-full">
        <div className="wrap">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <Heading
                eyebrow="Our Story"
                title="Built Around A Promise We Made In 2022."
                description="Four moments tell the story better than a long company profile. A beginning in Bishrakh in 2022. A first handover. A decision to stay close to one corridor. And today — five addresses, with families already living in some and new homes taking shape in others. We have grown by building here, learning here and staying close enough to see what happens after possession."
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
                <span className="text-xl font-medium text-ink tabular-nums">
                  {String(storyIdx + 1).padStart(2, "0")}
                </span>
                <span className="mx-1.5 text-ink/40">/</span>
                <span className="tabular-nums">
                  {String(STORY_CHAPTERS.length).padStart(2, "0")}
                </span>
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
              breakpoints={{
                640: { slidesPerView: 1.6 },
                1024: { slidesPerView: 2.3 },
              }}
              className="!overflow-hidden !pb-4"
            >
              {STORY_CHAPTERS.map((ch, i) => (
                <SwiperSlide key={`${ch.year}-${i}`} className="!h-auto">
                  <Reveal delay={i * 0.05}>
                    <div className="group relative min-h-[440px] overflow-hidden rounded-t-[2rem] rounded-b-[1rem]">
                      <Media
                        img={ch.img}
                        sizes="(max-width: 1024px) 90vw, 38vw"
                        className="transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-transparent to-transparent" />

                      <div className="absolute inset-x-0 bottom-0 p-8">
                        <span className="mb-5 block h-[3px] w-10 rounded-full bg-brand transition-all duration-500 group-hover:w-16" />

                        <h3 className="text-[1.4rem] font-medium leading-snug text-white sm:text-[1.65rem]">
                          {ch.title}
                        </h3>

                        <p className="mt-3 text-[0.9rem] leading-[1.75] text-white/70 sm:text-sm">
                          {ch.body}
                        </p>
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
      <section className="bg-white pt-28 overflow-hidden max-w-full">
        <div className="wrap grid gap-12 lg:grid-cols-2">
          <div>
            <Heading
              eyebrow="Core Values"
              title="Built On The Things That Matter When No One Is Looking."
            />

            <p className="mt-4 leading-relaxed text-ink-2">
              A building shows you what a developer wants you to see. Our values show up in the things you may never notice. How we communicate. How we handle a problem. How carefully we finish something that won't make it into a photograph. That's where trust is built.
            </p>
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
        eyebrow="Before You Buy"
        title="Things Worth Knowing Before You Buy A Home."
        description="Buying a home comes with enough questions already. So we would rather help you ask the right ones."
        items={[
          {
            img: {
              src: "/images/about2.jpg",
              alt: "Home layout plan",
            },
            tag: "01",
            title: "Read The Sanctioned Plan, Not The Brochure.",
            body: "A project should be easy to verify. Know the legal details. Check the documents. Understand what is promised before you book.",
          },
          {
            img: {
              src: "/images/about3.jpg",
              alt: "Balcony view at an Ambr Homes flat",
            },
            tag: "02",
            title: "A Balcony, Or A Ledge?",
            body: "The difference matters. Think about how you'll actually use the space — morning tea, plants, children, evenings, guests.",
          },
          {
            img: {
              src: "/images/about4.jpg",
              alt: "Finished living room at an Ambr Homes flat",
            },
            tag: "03",
            title: "Cross Ventilation & Morning Light.",
            body: "Visit at different times of day. See where the light comes from. Notice how air moves through the home.",
          },
        ]}
      />

      {/* Where we build — parallax showcase */}
      <ParallaxShowcase
        bg={{
          src: "/images/ambr46.jpeg",
          alt: "Ambr Homes community at dusk",
        }}
        cards={[
          {
            img: {
              src: "/images/hero-3.jpeg",
              alt: "Ambr Homes building exterior",
            },
          },
          {
            img: {
              src: "/images/aspire-01.jpeg",
              alt: "Courtyard garden at an Ambr Homes community",
            },
          },
          {
            img: {
              src: "/images/ambr39.jpeg",
              alt: "Ambr Homes building at dusk",
            },
          },
        ]}
        title="One Corridor. A Place We Know Well."
        eyebrow="06 — ONE CORRIDOR"
        desc="We didn't try to be everywhere. We chose to know one place properly. The roads. The neighbourhoods. The everyday routes. The questions families ask before buying. And what happens after they move in. From Bishrakh towards Vaidpura, our projects sit within a corridor we have kept coming back to. Because being close changes the way you build."
        link="/projects"
        linkLabel="Explore The Location"
      />

      {/* Partner With Us */}
      <PartnerSection
        eyebrow="Partner With Us"
        title="Let's Build The Next Address Together."
        description="Good residential development takes more than a building. It takes the right land, the right people and a clear idea of who the home is being built for. If you have an opportunity in Greater Noida West, let's talk."
        items={[
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
        ]}
      />

      <RedCta
        eyebrow="Come See For Yourself"
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
