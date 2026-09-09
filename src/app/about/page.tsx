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
  { value: "6+", label: "Years Building Homes", icon: Calendar },
  { value: "4", label: "Completed Communities", icon: Building2 },
  { value: "250+", label: "Homes Under Construction", icon: LandPlot },
  { value: "100%", label: "Projects Built With Care", icon: ShieldCheck },
];

const STORY_CHAPTERS = [
  {
    year: "2010",
    img: {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
      alt: "Ambr Homes site office, Bishrakh",
    },
    title: "It Started With A Simple Idea.",
    body: "Build homes the way we would want our own family to live in them. That meant thinking beyond the elevation — about the rooms, the light, the everyday movement and the small things that make a home feel comfortable once life takes over. The first address gave us our starting point. The families who moved in gave us our standard.",
  },
  {
    year: "2013",
    img: {
      src: "/images/hero-3.jpeg",
      alt: "Ambr Homes building exterior",
    },
    title: "The First Handover Changed Everything.",
    body: "The first families didn't just receive keys. They started living the life we had been building towards. That was when the questions became real: Does the home work on a busy morning? Is there enough room when everyone is home? Does the building still feel cared for after possession? The answers shaped everything we built next.",
  },
  {
    year: "2016",
    img: {
      src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80",
      alt: "Ambr Homes community at dusk",
    },
    title: "We Chose To Stay Close.",
    body: "Instead of scattering projects across the city, we kept building in the same Greater Noida West corridor. Because staying close changes the relationship. You know the neighbourhood. You know what residents need. And when someone needs you, you're close enough to show up. For us, being nearby was never just a location strategy. It became part of how we work.",
  },
  {
    year: "TODAY",
    img: {
      src: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1600&q=80",
      alt: "Ambr Homes residential community in Greater Noida West",
    },
    title: "Five Communities. One Standard.",
    body: "Today, AMBR has completed communities where families already live, a ready-to-move home you can walk through, and new homes taking shape for the next generation of families. The addresses have grown. The principle hasn't. Build well. Stay close. Keep making the next home better.",
  },
];

const VALUES = [
  {
    title: "Act With Integrity.",
    desc: "We believe in being clear about what we build, what it costs and when it will be ready. No fine print designed to confuse. No promises we can't keep.",
  },
  {
    title: "Build For The Long Term.",
    desc: "The things that matter most are often the things nobody sees. Structure, waterproofing, plumbing, electrical work and materials chosen to hold up over time.",
  },
  {
    title: "Stay Close.",
    desc: "We build where we know the neighbourhood. Staying close means knowing the community, understanding what families need and being there when they need us.",
  },
  {
    title: "Think About Real Life.",
    desc: "A home is not a brochure. It's where people wake up, eat, work, play, host friends and grow older. Every decision starts with how the space will actually be lived in.",
  },
  {
    title: "Keep Getting Better.",
    desc: "Every home teaches us something. We carry those lessons into the next project, because the next family deserves a better home than the last one.",
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
              We Build Homes. You Make Them Ghar.
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
      <section className="bg-gradient-to-b from-white to-band py-[clamp(64px,8vw,110px)]">
        <div className="wrap">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <Heading
                eyebrow="Our Story"
                title="Built Around A Promise We Made In 2010."
                description="A home is a big promise. So is building one. Our story is not really about how many years we have been around. It is about what we have learned by staying close to the homes, the neighbourhood and the families who live in them. Four chapters. One corridor. Five addresses."
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
      <section className="bg-white pt-28">
        <div className="wrap grid gap-12 lg:grid-cols-2">
          <div>
            <Heading
              eyebrow="Core Values"
              title="What We Believe"
            />

            <p className="mt-4 leading-relaxed text-ink-2">
              The principles that guide how we build, how we work and how we stay connected to the families and communities around us.
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
        description="The right home isn't just about the number on the price sheet. It's about whether the home, building and neighbourhood will work for your family."
        items={[
          {
            img: {
              src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=80",
              alt: "Home layout plan",
            },
            tag: "01",
            title: "2 BHK Or 3 BHK?",
            body: "Don't only count bedrooms. Think about who will live with you now, who might live with you later, and what you don't want to compromise on.",
          },
          {
            img: {
              src: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=80",
              alt: "Balcony view at an Ambr Homes flat",
            },
            tag: "02",
            title: "Carpet Area Is Where Life Happens.",
            body: "Super built-up numbers can sound impressive. Your everyday life happens in the space you can actually use.",
          },
          {
            img: {
              src: "/images/hero-4.jpeg",
              alt: "Finished living room at an Ambr Homes flat",
            },
            tag: "03",
            title: "Visit Before You Decide.",
            body: "Photos show a home. A visit lets you hear it, walk it, feel the light and imagine a normal Tuesday there.",
          },
        ]}
      />

      {/* Where we build — parallax showcase */}
      <ParallaxShowcase
        bg={{
          src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80",
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
              src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80",
              alt: "Courtyard garden at an Ambr Homes community",
            },
          },
          {
            img: {
              src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
              alt: "Ambr Homes building at dusk",
            },
          },
        ]}
        title="One Corridor. A Place We Know Well."
        eyebrow="06 — ONE CORRIDOR"
        desc="We chose to keep building close to home. Not everywhere. Not wherever the next plot appeared. Here. Because when your projects stay close, you learn the neighbourhood differently. You know how people live, what families ask for, what changes around them and what a community needs after the buildings are finished. Five addresses later, Greater Noida West isn't just where we build. It's where we know our work."
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
