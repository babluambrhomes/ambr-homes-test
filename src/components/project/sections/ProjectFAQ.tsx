"use client";

import { useState } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { Heading } from "@/components/shared/ui";
import type { Project } from "@/lib/data";

export function ProjectFAQ({ project }: { project: Project }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="wrap py-[clamp(56px,6vw,96px)]">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <Heading
            align="center"
            eyebrow="Questions"
            title={`About ${project.name}`}
          />
        </Reveal>
      </div>
      <div className="mx-auto mt-10 max-w-3xl space-y-3">
        {project.faqs.map((f, i) => {
          const isOpen = openFaq === i;
          return (
            <Reveal key={f.q} delay={i * 0.04}>
              <div className={`rounded-xl border transition-colors duration-300 ${isOpen ? "border-brand/30 bg-white" : "border-line/60"}`}>
                <button
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`pa${i}`}
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                >
                  <span className="font-medium text-ink">{f.q}</span>
                  <span
                    className={`grid h-8 w-8 flex-none place-items-center rounded-full transition-all duration-300 ${
                      isOpen ? "rotate-45 bg-brand text-white" : "border border-line text-ink"
                    }`}
                  >
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                      <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-500 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-ink-2">{f.a}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
