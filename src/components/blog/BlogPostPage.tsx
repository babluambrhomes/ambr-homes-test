"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, CalendarDays, Clock, Share2 } from "lucide-react";
import { Heading, Media } from "../shared/ui";
import { RedCta } from "../shared/RedCta";
import { getRelatedPosts } from "@/lib/blog";
import type { BlogPost } from "@/lib/blog";

export function BlogPostPage({ post }: { post: BlogPost }) {
  const related = getRelatedPosts(post.slug);

  return (
    <>
      {/* Article hero */}
      <section className="relative overflow-hidden bg-ink pb-20 pt-[clamp(88px,13vw,160px)] text-white">
        <div className="absolute inset-0">
          <Media img={post.heroImg} priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/55 to-ink" />
        </div>

        <div className="wrap relative">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/70 transition-colors duration-300 hover:text-brand"
          >
            <ArrowLeft size="15" />
            All articles
          </Link>

          <div className="mt-10 max-w-2xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-brand px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.12em] text-white/60">
                <CalendarDays size="14" /> {post.date}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.12em] text-white/60">
                <Clock size="14" /> {post.readTime}
              </span>
            </div>
            <h1 className="mt-6 text-[clamp(2.2rem,4.6vw,3.8rem)] font-medium leading-[1.08] tracking-[-0.02em] text-white">
              {post.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">{post.excerpt}</p>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="relative py-[clamp(48px,6vw,88px)]">
        <div className="wrap">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[0.28fr_1fr]">
            {/* Sticky meta sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-8">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-brand text-sm font-semibold text-white">
                      AH
                    </span>
                    <div>
                      <p className="text-sm font-medium text-ink">{post.author}</p>
                      <p className="text-xs text-muted">{post.role}</p>
                    </div>
                  </div>
                </div>

                <div className="h-px w-full bg-line" />

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">Tags</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {post.tags.map((t) => (
                      <span key={t} className="rounded-full border border-line px-3 py-1 text-xs font-medium text-ink">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-gradient-to-b from-white to-band p-5">
                  <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-ink">
                    <Share2 size="14" className="text-brand" /> Liked it? Share it
                  </p>
                  <p className="mt-2 text-sm text-ink-2">Or better — come see what the article is about, in person.</p>
                  <Link
                    href="/contact"
                    className="tlink mt-3 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.08em]"
                  >
                    Book a visit <ArrowRight size="14" />
                  </Link>
                </div>
              </div>
            </aside>

            {/* Body */}
            <div>
              <div className="space-y-7">
                {post.blocks.map((b, i) => {
                  if (b.type === "p") {
                    return (
                      <p key={i} className="leading-relaxed text-ink-2 sm:text-lg">
                        {b.text}
                      </p>
                    );
                  }
                  if (b.type === "h2") {
                    return (
                      <h2 key={i} className="pt-4 text-2xl font-medium leading-snug tracking-[-0.01em] text-ink sm:text-3xl">
                        {b.text}
                      </h2>
                    );
                  }
                  if (b.type === "quote") {
                    return (
                      <blockquote
                        key={i}
                        className="relative my-9 overflow-hidden rounded-[1.5rem] bg-ink p-8 text-white shadow-[0_30px_70px_-40px_rgba(16,16,16,0.65)] sm:p-10"
                      >
                        <span className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand/25 blur-[70px]" />
                        <span className="relative mb-5 block h-1 w-14 rounded-full bg-brand" />
                        <p className="relative text-xl font-medium leading-snug sm:text-2xl">{b.text}</p>
                        <span className="relative mt-6 block text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/50">
                          The Ambr Homes standard
                        </span>
                      </blockquote>
                    );
                  }
                  if (b.type === "list") {
                    return (
                      <div key={i} className="rounded-[1.5rem] border border-line/70 bg-white p-8 shadow-[0_10px_30px_-20px_rgba(16,16,16,0.25)] sm:p-9">
                        {b.title ? (
                          <h3 className="flex items-center gap-3 text-lg font-medium text-ink">
                            <span className="h-2 w-2 rounded-full bg-brand" />
                            {b.title}
                          </h3>
                        ) : null}
                        <ul className={`space-y-3.5 ${b.title ? "mt-5" : ""}`}>
                          {b.items.map((item, j) => (
                            <li key={j} className="flex items-start gap-3.5 leading-relaxed text-ink-2">
                              <span className="mt-2 h-2 w-2 flex-none rounded-full bg-brand/70" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  }
                  if (b.type === "img") {
                    return (
                      <figure key={i} className="my-9">
                        <div className="overflow-hidden rounded-[1.5rem] shadow-[0_20px_50px_-30px_rgba(16,16,16,0.4)]">
                          <Media img={b.img} sizes="(max-width: 768px) 100vw, 60vw" />
                        </div>
                        {b.caption ? (
                          <figcaption className="mt-3 text-center text-sm text-muted">{b.caption}</figcaption>
                        ) : null}
                      </figure>
                    );
                  }
                  return null;
                })}
              </div>

              {/* Mobile author + tags */}
              <div className="mt-12 space-y-6 border-t border-line pt-8 lg:hidden">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-brand text-sm font-semibold text-white">
                    AH
                  </span>
                  <div>
                    <p className="text-sm font-medium text-ink">{post.author}</p>
                    <p className="text-xs text-muted">{post.role}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">Tags</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {post.tags.map((t) => (
                      <span key={t} className="rounded-full border border-line px-3 py-1 text-xs font-medium text-ink">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* More from the journal */}
              <div className="mt-14">
                <Heading eyebrow="Keep reading" title="More From The Journal" />
                <div className="mt-7 grid gap-5 sm:grid-cols-3">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/blogs/${r.slug}`}
                      className="group flex flex-col overflow-hidden rounded-[1.25rem] border border-line/70 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-28px_rgba(226,1,15,0.3)]"
                    >
                      <div className="relative h-36 overflow-hidden">
                        <Media
                          img={r.heroImg}
                          sizes="(max-width: 768px) 90vw, 30vw"
                          className="transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 to-transparent" />
                        <span className="absolute left-3 top-3 rounded-full bg-white/15 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-md ring-1 ring-white/20">
                          {r.category}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <h3 className="text-[0.95rem] font-medium leading-snug text-ink transition-colors duration-300 group-hover:text-brand">
                          {r.title}
                        </h3>
                        <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-xs font-semibold uppercase tracking-[0.1em] text-brand">
                          Read <ArrowUpRight size="14" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-8 flex justify-center">
                  <Link href="/blogs" className="tlink inline-flex items-center gap-2">
                    View all articles
                    <ArrowRight size="16" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <RedCta
        eyebrow="Turn the reading into a visit"
        title="Come, Compare It In Person"
        description="Articles are useful; a floor plan is better than an opinion. Walk a delivered flat, read the sanctioned layout and check the RERA filing — then decide."
        buttons={[
          { label: "Book A Site Visit", href: "/contact", className: "border border-white/40 hover:!bg-white hover:!text-ink" },
          { label: "Why Ambr Homes", href: "/why-ambr-homes", className: "!bg-white !text-brand hover:!bg-ink hover:!text-white" },
        ]}
      />
    </>
  );
}