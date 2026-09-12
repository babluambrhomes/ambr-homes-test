"use client";

import { Reveal } from "@/components/shared/Reveal";
import { Heading } from "@/components/shared/ui";
import type { Project } from "@/lib/data";

const CONNECTIVITY_ROUTES = [
  {
    from: "From Noida",
    route: "Noida → Parthala Chowk → Gaur Chowk → KDGS Hospital → AMBR HOMES",
  },
  {
    from: "From Greater Noida",
    route: "Pari Chowk → Knowledge Park V → Greater Noida West Link Road → KDGS Hospital → AMBR HOMES",
  },
  {
    from: "From Dadri",
    route: "Eastern Peripheral Expressway → Kheri Road → Sector 10 → AMBR HOMES",
  },
  {
    from: "From Ghaziabad / NH-09 / NE-3",
    route: "NH-09/NE3 → ABES Cut → Gaur Chowk → Bisrakh → KDGS Hospital → AMBR HOMES",
  },
];

const ESSENTIALS = [
  {
    category: "Hospitals",
    icon: "🏥",
    items: [
      { name: "KDSG Super-Speciality Hospital", time: "2 mins" },
      { name: "Yatharth Super Speciality Hospital", time: "7 mins" },
      { name: "Kailash Hospital", time: "10 mins" },
      { name: "Fortis Hospital", time: "15 mins" },
      { name: "Numed Hospital", time: "15 mins" },
    ],
  },
  {
    category: "Schools",
    icon: "🏫",
    items: [
      { name: "GD Goenka International School", time: "10 mins" },
      { name: "Lotus Valley School", time: "10 mins" },
      { name: "Ryan International School", time: "10 mins" },
      { name: "Delhi Public School", time: "10 mins" },
      { name: "Sarvottam International School", time: "10 mins" },
      { name: "The Wisdom Tree School", time: "10 mins" },
      { name: "St. Xavier's School", time: "10 mins" },
    ],
  },
  {
    category: "Shopping & Markets",
    icon: "🛍️",
    items: [
      { name: "Gaur City Mall", time: "10 mins" },
      { name: "D-Mart", time: "10 mins" },
      { name: "Gaur City Market", time: "10 mins" },
      { name: "Galaxy Diamond Plaza", time: "8 mins" },
    ],
  },
  {
    category: "Connectivity & Highways",
    icon: "🛣️",
    items: [
      { name: "NH-24 / NH-9 (Delhi-Meerut Expressway)", time: "10 mins" },
      { name: "Greater Noida West Link Road", time: "5 mins" },
      { name: "Noida-Greater Noida Corridor", time: "5 mins" },
      { name: "FNG Expressway", time: "10 mins" },
      { name: "Eastern Peripheral Expressway", time: "5 mins" },
      { name: "Kisan Chowk", time: "10 mins" },
    ],
  },
  {
    category: "Petrol Pumps",
    icon: "⛽",
    items: [
      { name: "Indian Oil CNG Station", time: "5 mins" },
      { name: "Indian Oil Petrol Pump", time: "5 mins" },
      { name: "HP Petrol Pump", time: "10 mins" },
      { name: "Bharat Petroleum Pump", time: "10 mins" },
    ],
  },
  {
    category: "Key Landmarks",
    icon: "📍",
    items: [
      { name: "Gaur Chowk", time: "10 mins" },
      { name: "Yatharth Hospital", time: "7 mins" },
      { name: "Bisrakh", time: "10 mins" },
      { name: "Knowledge Park V", time: "10 mins" },
      { name: "Roza Yakubpur", time: "5 mins" },
      { name: "Sector 10, Greater Noida West", time: "5 mins" },
    ],
  },
];

export function ProjectLocationMap({ project }: { project: Project }) {
  return (
    <section className="wrap py-[clamp(56px,6vw,96px)]">
      <Reveal>
        <Heading
          eyebrow="PREMIUM LIVING · PRIME LOCATION"
          title={`Location & Connectivity Advantage`}
          description={`Perfectly connected to key destinations in Noida, Greater Noida, Ghaziabad & Dadri. Everything you need is minutes away from ${project.name}.`}
        />
      </Reveal>

      {/* Connectivity Routes */}
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {CONNECTIVITY_ROUTES.map((r, i) => (
          <Reveal key={r.from} delay={i * 0.05}>
            <div className="group rounded-2xl border border-line bg-surface/60 p-6 transition-all duration-300 hover:border-brand/40 hover:bg-white dark:hover:bg-ink">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                {r.from}
              </span>
              <p className="mt-2.5 text-sm font-medium leading-relaxed text-ink">
                {r.route}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Nearby Essentials Grid */}
      <div className="mt-14">
        <h3 className="text-xl font-semibold tracking-tight text-ink">
          Nearby Essentials
        </h3>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ESSENTIALS.map((cat, i) => (
            <Reveal key={cat.category} delay={i * 0.05}>
              <div className="rounded-2xl border border-line bg-surface p-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{cat.icon}</span>
                  <h4 className="text-base font-semibold text-ink">
                    {cat.category}
                  </h4>
                </div>

                <ul className="mt-4 divide-y divide-line/60">
                  {cat.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center justify-between py-2.5 text-xs text-ink-2"
                    >
                      <span className="font-medium text-ink/80">{item.name}</span>
                      <span className="rounded-full bg-brand/10 px-2.5 py-0.5 font-semibold text-brand">
                        {item.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
