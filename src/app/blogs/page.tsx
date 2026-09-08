"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, CalendarDays, Clock, Tag } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { Heading, Media } from "@/components/shared/ui";
import { RedCta } from "@/components/shared/RedCta";
import { BLOG_CATEGORIES, BLOG_POSTS } from "@/lib/data";

const ALL = "All";
const PER_PAGE = 3;

export default function BlogsPage() {
  const heroRef = useRef<HTMLElement>(null);
  const [category, setCategory] = useState(ALL);
  const [visible, setVisible] = useState(PER_PAGE);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.2]);

  const featured = BLOG_POSTS[0];
  const all = useMemo(
    () =>
      category === ALL
        ? BLOG_POSTS.slice(1)
        : BLOG_POSTS.filter((p) => p.category === category),
    [category]
  );
  const filtered = all.slice(0, visible);
  const hasMore = visible < all.length;

  return (
    <>
      {/* Hero — parallax + overlay */}
      <section ref={heroRef} className="relative overflow-hidden bg-ink pb-36 pt-[clamp(90px,15vw,180px)] text-white">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0">
          <Media img={{ src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80", alt: "Ambr Homes community at dusk" }} priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/40 to-ink" />
        </motion.div>

        <div className="wrap relative">
          <div className="max-w-3xl">
            <span className="flex items-center gap-[13px] text-[0.8125rem] font-semibold uppercase tracking-[0.06em] text-brand after:h-px after:w-14 after:shrink-0 after:bg-brand/60 after:content-['']">
              The Ambr Journal
            </span>
            <h1 className="mt-5 text-[clamp(2.4rem,5.2vw,4.6rem)] font-medium leading-[1.05] tracking-[-0.02em] text-white">
              What Matters Before, During And After Buying A Home
            </h1>
            {/* <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              Plain-English notes on RERA, floor plans, site visits and the years that follow handover.
              Written by the team that actually builds in Greater Noida West — not by a marketing desk.
            </p> */}
          </div>
        </div>
      </section>

      {/* Featured post */}
      <section className="wrap py-[clamp(48px,6vw,88px)]">
        <div className="grid items-stretch gap-8 lg:grid-cols-[1.05fr_1fr]">
          <Reveal>
            <Link
              href={`/blogs/${featured.slug}`}
              className="group relative flex h-full min-h-[340px] flex-col justify-end overflow-hidden rounded-[1.8rem] shadow-[0_40px_90px_-45px_rgba(16,16,16,0.65)]"
            >
              <Media
                img={featured.heroImg}
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="absolute inset-0 transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/10" />
              <div className="relative p-8 sm:p-10">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_10px_25px_-10px_rgba(226,1,15,0.6)]">
                  Featured · {featured.category}
                </span>
                <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight text-white sm:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-4 max-w-2xl text-white/75">{featured.excerpt}</p>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.12em] text-white/60">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays size="14" /> {featured.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size="14" /> {featured.readTime}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-brand">
                    Read the post <ArrowUpRight size="14" className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>

          <div className="flex flex-col justify-between rounded-[1.8rem] border border-line/70 bg-white p-8 shadow-[0_10px_30px_-20px_rgba(16,16,16,0.25)] sm:p-10">
            <div>
              <Heading
                eyebrow="The Ambr Journal"
                title="Notes From The Corridor"
                description="We cannot make buying a home simple, but we can make it transparent. These are the questions our own buyers keep asking — answered in writing, with the theory removed."
              />
            </div>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {[ALL, ...BLOG_CATEGORIES].map((c) => (
                <button
                  key={c}
                  onClick={() => {
                    setCategory(c);
                    setVisible(PER_PAGE);
                  }}
                  className={`rounded-full border px-4 py-1.5 text-xs font-semibold tracking-[0.08em] transition-all duration-300 ${
                    category === c
                      ? "border-brand bg-brand text-white shadow-[0_10px_25px_-10px_rgba(226,1,15,0.55)]"
                      : "border-line text-muted hover:border-brand/40 hover:text-ink"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Post grid */}
      <section className="bg-gradient-to-b from-band to-white py-[clamp(56px,7vw,100px)]">
        <div className="wrap">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05}>
                <Link
                  href={`/blogs/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-line/70 bg-white transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-28px_rgba(226,1,15,0.3)]"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Media
                      img={p.heroImg}
                      sizes="(max-width: 768px) 90vw, 33vw"
                      className="transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/15 px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-md ring-1 ring-white/20">
                      {p.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.12em] text-muted">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays size="13" /> {p.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock size="13" /> {p.readTime}
                      </span>
                    </div>
                    <h3 className="mt-4 text-xl font-medium leading-snug text-ink transition-colors duration-300 group-hover:text-brand">
                      {p.title}
                    </h3>
                    <p className="mt-2.5 flex-1 leading-relaxed text-ink-2">{p.excerpt}</p>
                    <span className="mt-6 inline-flex items-center gap-2 border-t border-line pt-5 text-xs font-semibold uppercase tracking-[0.1em] text-ink transition-colors duration-300 group-hover:text-brand">
                      Read the post
                      <ArrowUpRight size="15" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {hasMore && (
            <div className="mt-12 flex flex-col items-center gap-4">
              <button
                onClick={() => setVisible((v) => v + PER_PAGE)}
                className="group inline-flex items-center gap-3 rounded-full border border-brand bg-brand px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.1em] text-white shadow-[0_16px_40px_-14px_rgba(226,1,15,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark"
              >
                Load More Articles
                <span className="text-white/70 transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
              </button>
              <p className="flex items-center gap-2 text-sm text-muted">
                <Tag size="15" className="text-brand" />
                Showing {visible} of {all.length} · {BLOG_POSTS.length} articles total, updated as projects advance
              </p>
            </div>
          )}

          {!hasMore && (
            <p className="mt-12 flex items-center justify-center gap-2 text-center text-sm text-muted">
              <Tag size="15" className="text-brand" />
              You&apos;ve seen all {all.length} articles 
            </p>
          )}
        </div>
      </section>

      <RedCta
        eyebrow="Rather talk than read?"
        title="The Corridor Is Better Seen Than Explained"
        description="Every claim in these articles can be checked in person — walk a RERA-registered project, a finished flat and a community occupied for years. Pick a time and we will keep it open."
        buttons={[
          { label: "Book A Site Visit", href: "/contact", className: "border border-white/40 hover:!bg-white hover:!text-ink" },
          { label: "Explore The Projects", href: "/projects/aspire", className: "!bg-white !text-brand hover:!bg-ink hover:!text-white" },
        ]}
      />
    </>
  );
}