"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, CalendarDays, Clock, Tag } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { Heading, Media } from "@/components/shared/ui";
import { RedCta } from "@/components/shared/RedCta";
import { fetchPosts } from "@/lib/blog";
import type { BlogCard } from "@/lib/blog";

const PER_PAGE = 12;

type WpState = {
  status: "loading" | "success" | "error";
  posts: BlogCard[];
  page: number;
  hasMore: boolean;
  message?: string;
};

export default function BlogsPage() {
  const [wp, setWp] = useState<WpState>({
    status: "loading",
    posts: [],
    page: 1,
    hasMore: true,
  });

  const loadPosts = useCallback(async (page: number) => {
    setWp((prev) => ({ ...prev, status: "loading" }));
    try {
      const { posts, totalPages } = await fetchPosts(page, PER_PAGE);
      setWp((prev) => ({
        status: "success",
        posts: page === 1 ? posts : [...prev.posts, ...posts],
        page,
        hasMore: page < totalPages,
      }));
    } catch (e) {
      setWp((prev) => ({
        ...prev,
        status: "error",
        message: e instanceof Error ? e.message : "Unknown error",
      }));
    }
  }, []);

  useEffect(() => {
    loadPosts(1);
  }, [loadPosts]);

  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.2]);

  const featured = wp.posts[0];
  const gridPosts = wp.posts.slice(1);

  return (
    <>
      {/* Hero — parallax + overlay */}
      <section ref={heroRef} className="relative overflow-hidden bg-ink pb-36 pt-[clamp(90px,15vw,180px)] text-white">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0">
          <Media img={{ src: "/images/ambr42.jpeg", alt: "Ambr Homes community at dusk" }} priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/40 to-ink" />
        </motion.div>

        <div className="wrap relative">
          <div className="max-w-3xl">
            <span className="flex items-center gap-[13px] text-[0.8125rem] font-semibold uppercase tracking-[0.06em] text-brand after:h-px after:w-14 after:shrink-0 after:bg-brand/60 after:content-['']">
              The Ambr Journal
            </span>
            <h1 className="mt-5 text-[clamp(1.9rem,4.8vw,4.6rem)] font-medium leading-[1.05] tracking-[-0.02em] text-white">
              What Matters Before, During And After Buying A Home
            </h1>
          </div>
        </div>
      </section>

      {/* Featured post */}
      <section className="wrap py-[clamp(48px,6vw,88px)]">
        <div className="grid items-stretch gap-8 lg:grid-cols-[1.05fr_1fr]">
          <Reveal>
            {featured ? (
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
                    Featured
                  </span>
                  <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight text-white sm:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 max-w-2xl line-clamp-2 text-white/75">{featured.excerpt}</p>
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
            ) : (
              <div className="flex h-full min-h-[340px] items-center justify-center rounded-[1.8rem] bg-ink/5">
                <span className="text-sm text-muted">
                  {wp.status === "error" ? wp.message : "Loading latest post…"}
                </span>
              </div>
            )}
          </Reveal>

          <div className="flex flex-col justify-between rounded-[1.8rem] border border-line/70 bg-white p-8 shadow-[0_10px_30px_-20px_rgba(16,16,16,0.25)] sm:p-10">
            <Heading
              eyebrow="The Ambr Journal"
              title="Notes From The Corridor"
              description="We cannot make buying a home simple, but we can make it transparent. These are the questions our own buyers keep asking — answered in writing, with the theory removed."
            />
          </div>
        </div>
      </section>

      {/* Post grid */}
      <section className="bg-gradient-to-b from-band to-white py-[clamp(56px,7vw,100px)]">
        <div className="wrap">
          {wp.status === "loading" && wp.posts.length === 0 && (
            <p className="mb-10 text-center text-sm text-muted">Loading articles…</p>
          )}
          {wp.status === "error" && wp.posts.length === 0 && (
            <p className="mb-10 text-center text-sm text-red-500">
              Failed to load posts: {wp.message}
            </p>
          )}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {gridPosts.map((p, i) => (
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
                    <p className="mt-2.5 flex-1 line-clamp-3 leading-relaxed text-ink-2">{p.excerpt}</p>
                    <span className="mt-6 inline-flex items-center gap-2 border-t border-line pt-5 text-xs font-semibold uppercase tracking-[0.1em] text-ink transition-colors duration-300 group-hover:text-brand">
                      Read the post
                      <ArrowUpRight size="15" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {wp.hasMore && (
            <div className="mt-12 flex flex-col items-center gap-4">
              <button
                onClick={() => loadPosts(wp.page + 1)}
                disabled={wp.status === "loading"}
                className="group inline-flex items-center gap-3 rounded-full border border-brand bg-brand px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.1em] text-white shadow-[0_16px_40px_-14px_rgba(226,1,15,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
              >
                {wp.status === "loading" && wp.page > 1
                  ? "Loading…"
                  : "Load More Articles"}
                <span className="text-white/70 transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
              </button>
              <p className="flex items-center gap-2 text-sm text-muted">
                <Tag size="15" className="text-brand" />
                Showing {wp.posts.length} articles, updated as projects advance
              </p>
            </div>
          )}

          {!wp.hasMore && (
            <p className="mt-12 flex items-center justify-center gap-2 text-center text-sm text-muted">
              <Tag size="15" className="text-brand" />
              You've seen all {wp.posts.length} articles
            </p>
          )}
        </div>
      </section>

      <RedCta
        eyebrow="Rather talk than read?"
        title="The Corridor Is Better Seen Than Explained"
        description="Every claim in these articles can be checked in person — walk an approved project, a finished flat and a community occupied for years. Pick a time and we will keep it open."
        buttons={[
          { label: "Book A Site Visit", href: "/contact#enquiry", className: "border border-white/40 hover:!bg-white hover:!text-ink" },
          { label: "Explore The Projects", href: "/projects/aspire", className: "!bg-white !text-brand hover:!bg-ink hover:!text-white" },
        ]}
      />
    </>
  );
}