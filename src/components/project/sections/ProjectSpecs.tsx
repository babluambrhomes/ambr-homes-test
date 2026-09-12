"use client";

import { Reveal } from "@/components/shared/Reveal";
import { Heading } from "@/components/shared/ui";
import type { Project } from "@/lib/data";

const SPECS = [
  {
    category: "Structure",
    icon: "🏗️",
    items: [
      "RCC (Ready Mix Concrete) structure using M25 grade concrete without fly ash",
      "Crafted with 53-grade UltraTech Cement",
      "Earthquake-resistant & engineered by highly experienced structural consultants for safety and durability",
    ],
  },
  {
    category: "Electrical",
    icon: "⚡",
    items: [
      "High-quality copper wiring by Great White",
      "Premium modular switches with elegant switch plates (Great White)",
      "MCB circuits for enhanced safety and load management",
    ],
  },
  {
    category: "Flooring",
    icon: "📐",
    items: [
      "Drawing & Dining: Premium vitrified tiles (2' x 4')",
      "Master Bedroom: Elegant wooden flooring",
      "Other Bedrooms: Vitrified tiles (2' x 4')",
      "Kitchen, Toilets & Balconies: Anti-skid ceramic tiles (Kajaria / Equivalent)",
      "Staircases & Common Areas: Finished with white & grey marble/Kota stone/tiles",
    ],
  },
  {
    category: "Wall Finish",
    icon: "🎨",
    items: [
      "Smooth finish with JK White / Birla POP in living, dining, bedrooms, and kitchen",
      "High-quality plastic emulsion paint by Asian Paints / Birla Opus or equivalent",
    ],
  },
  {
    category: "Exterior Finish",
    icon: "🏢",
    items: [
      "Weather-resistant, long-lasting exterior paint with aesthetically pleasing textures and shades for a premium façade",
    ],
  },
  {
    category: "Doors & Windows",
    icon: "🚪",
    items: [
      "Main Entrance Door: 8 ft. high laminated flush door with polished hardwood frame",
      "Internal Doors: 8 ft. high European-style doors with polished hardwood frames",
      "Kitchen Doors & Windows: UPVC / Wooden finish",
      "Toilet Windows: UPVC / Wooden with additional wire mesh panel",
    ],
  },
  {
    category: "Toilets",
    icon: "🚿",
    items: [
      "Provision for hot & cold water system",
      "Designer glazed tiles up to ceiling height (2' x 4')",
      "Premium sanitary fittings from brands like Cera / Hindware / Equivalent",
      "Vanity / washbasin with modern design",
      "Chrome-plated taps and fittings",
      "Designer false ceiling with POP",
    ],
  },
  {
    category: "Kitchen",
    icon: "🍳",
    items: [
      "Granite working platform",
      "Stainless steel sink",
      "2 ft. high glazed ceramic tile backsplash",
      "Modular kitchen setup for modern convenience",
    ],
  },
  {
    category: "Water Supply",
    icon: "💧",
    items: [
      "Efficient water management system with underground and overhead tanks to ensure 24x7 uninterrupted water supply in every block",
    ],
  },
  {
    category: "Smart Digital Door Lock",
    icon: "🔐",
    items: [
      "Advanced fingerprint & number lock system for secure, keyless entry",
      "One-touch fingerprint access & PIN code entry",
      "Auto-lock & emergency key backup for enhanced security",
    ],
  },
];

const BRANDS = [
  { name: "UltraTech Cement", tag: "The Engineer's Choice" },
  { name: "AKG", tag: "Dr. A.K. Garg Group" },
  { name: "GreatWhite Electricals", tag: "Premium Wiring & Switches" },
  { name: "KETHOS", tag: "Bringing Life To Your Home" },
  { name: "Hindware", tag: "Sanitaryware & Fittings" },
  { name: "CERA", tag: "Sanitaryware & Bathware" },
];

export function ProjectSpecs({ project }: { project: Project }) {
  return (
    <section className="wrap py-[clamp(56px,6vw,96px)]">
      <Reveal>
        <Heading
          eyebrow="AMENITIES & FACILITIES"
          title={`Specifications For ${project.name}`}
          description="Superior quality branded materials from foundation to finish, engineered to deliver lasting luxury."
        />
      </Reveal>

      {/* Grid of Specifications */}
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SPECS.map((spec, i) => (
          <Reveal key={spec.category} delay={i * 0.04}>
            <div className="group relative h-full rounded-2xl border border-line bg-surface/50 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/40 hover:bg-white hover:shadow-xl dark:hover:bg-ink">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-xl">
                  {spec.icon}
                </span>
                <h3 className="text-lg font-semibold tracking-[-0.01em] text-ink">
                  {spec.category}
                </h3>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-ink-2">
                {spec.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Branded Materials Banner */}
      <Reveal delay={0.3}>
        <div className="mt-14 rounded-3xl border border-line bg-ink p-8 text-white sm:p-10">
          <div className="text-center">
            <span className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
              FOUNDATION TO FINISH
            </span>
            <h4 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl">
              Superior Quality Branded Materials
            </h4>
            <p className="mt-2 text-sm text-white/70">
              We partner with trusted, industry-leading manufacturers for lasting reliability.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {BRANDS.map((b) => (
              <div
                key={b.name}
                className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-4 text-center transition-colors duration-300 hover:border-brand/40 hover:bg-white/10"
              >
                <span className="text-base font-bold text-white">{b.name}</span>
                <span className="mt-1 text-[0.6875rem] text-white/50">{b.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
