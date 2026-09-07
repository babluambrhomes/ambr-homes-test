"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export type ParallaxCard = {
  img: { src: string; alt: string };
};

const EASE = [0.22, 1, 0.36, 1] as const;

export function ParallaxShowcase({
  bg,
  cards,
  eyebrow = "Greater Noida West",
  title = "One Corridor",
  desc,
  link,
  linkLabel = "Explore the corridor",
}: {
  bg: { src: string; alt: string };
  cards: ParallaxCard[];
  eyebrow?: string;
  title?: string;
  desc?: string;
  link?: string;
  linkLabel?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const yText = useTransform(scrollYProgress, [0, 1], ["35%", "-35%"]);
  const card1Y = useTransform(scrollYProgress, [0, 1], ["10%", "-45%"]);
  const card2Y = useTransform(scrollYProgress, [0, 1], ["-30%", "5%"]);
  const card3Y = useTransform(scrollYProgress, [0, 1], ["20%", "-25%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-ink py-[clamp(80px,14vw,200px)]">
      {/* Parallax background (slowest layer) */}
      <motion.div style={{ y: yBg, scale: scaleBg }} className="absolute -inset-y-[15%] inset-x-0">
        <Image
          src={bg.src}
          alt={bg.alt}
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/40 to-ink" />
      </motion.div>

      {/* Soft brand glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-brand/10 to-transparent" />

      <div className="wrap relative grid min-h-[70vh] items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
        {/* Left — big parallax display text */}
        <motion.div style={{ y: yText }} className="relative z-10">
          <span className="flex items-center gap-[13px] text-[0.8125rem] font-semibold uppercase tracking-[0.06em] text-brand after:h-px after:w-12 after:shrink-0 after:bg-brand/60 after:content-['']">
            {eyebrow}
          </span>
          <h2 className="mt-4 bg-gradient-to-br from-white to-white/40 bg-clip-text text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.9] tracking-[-0.03em] text-transparent">
            {title}
          </h2>
          {desc && <p className="mt-6 max-w-md text-lg leading-relaxed text-white/70">{desc}</p>}
          {link && (
            <Link href={link} className="tlink mt-7 inline-flex items-center gap-2 text-white underline-offset-8">
              {linkLabel}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8h10m0 0L9 4m4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          )}
        </motion.div>

        {/* Right — floating parallax cards (depth layers) */}
        <div className="relative h-[520px]">
          {cards[0] && (
            <motion.div
              style={{ y: card1Y }}
              className="absolute left-0 top-0 z-30 w-[58%]"
            >
              <ParallaxFrame img={cards[0].img}  rotate="-rotate-2" />
            </motion.div>
          )}
          {cards[1] && (
            <motion.div
              style={{ y: card2Y }}
              className="absolute right-0 top-[26%] z-20 w-[55%]"
            >
              <ParallaxFrame img={cards[1].img}  rotate="rotate-3" />
            </motion.div>
          )}
          {cards[2] && (
            <motion.div
              style={{ y: card3Y }}
              className="absolute left-[12%] bottom-0 z-10 w-[50%]"
            >
              <ParallaxFrame img={cards[2].img}  rotate="-rotate-1" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

function ParallaxFrame({
  img,
  rotate,
}: {
  img: { src: string; alt: string };
  rotate: string;
}) {
  return (
    <div className={`group overflow-hidden rounded-2xl bg-white p-2 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] ${rotate}`}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes="(max-width: 1024px) 60vw, 28vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
        />
      </div>
      <div className="flex items-center justify-between px-2 py-2.5">

      </div>
    </div>
  );
}
