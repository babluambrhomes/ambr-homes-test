"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, Home, MapPin, MessageSquare } from "lucide-react";
import { Media } from "@/components/shared/ui";
import { Button } from "@/components/shared/Button";
export default function NotFound() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);

  return (
    <section ref={ref} className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-ink px-6 pt-[clamp(80px,12vw,140px)] text-white">
      <motion.div style={{ y }} className="absolute inset-0">
        <Media img={{ src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80", alt: "Ambr Homes building at dusk" }} sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/60 to-ink" />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white ring-1 ring-white/20 backdrop-blur-md">
          <MapPin size="13" className="text-brand" />
          Error 404
        </span>

        <h1 className="mt-8 bg-gradient-to-br from-white to-white/40 bg-clip-text text-[clamp(5rem,16vw,11rem)] font-semibold leading-none tracking-[-0.04em] text-transparent">
          404
        </h1>

        <h2 className="mt-4 text-[clamp(1.6rem,3.6vw,2.6rem)] font-medium leading-tight">
          This Page Hasn&apos;t Been Built Yet
        </h2>
        <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-white/70">
          The address you&apos;re looking for isn&apos;t on the corridor — but the one that matters is
          a short drive away. Let&apos;s get you back to something we actually finished.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/" className="!bg-white !text-ink hover:!bg-brand hover:!text-white">
            <span className="inline-flex items-center gap-2">
              <Home size="16" /> Back To Home
            </span>
          </Button>
          <Button href="/contact" variant="ghost" className="border border-white/30 text-white hover:!bg-white hover:!text-ink">
            <span className="inline-flex items-center gap-2">
              <MessageSquare size="16" /> Contact Us
            </span>
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {[
            { label: "Why Ambr Homes", href: "/why-ambr-homes" },
            { label: "Blogs", href: "/blogs" },
            { label: "Projects", href: "/projects/aspire" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 transition-colors duration-300 hover:text-brand"
            >
              {l.label}
              <ArrowLeft size="14" className="rotate-180" />
            </Link>
          ))}
        </div>

        <div className="mt-14 h-px w-24 bg-gradient-to-r from-brand to-transparent mx-auto" />
        <p className="mt-6 text-xs uppercase tracking-[0.2em] text-white/40">
          Ambr Homes · Greater Noida West
        </p>
      </div>
    </section>
  );
}