"use client";

import { Reveal } from "@/components/shared/Reveal";
import { Heading, Media } from "@/components/shared/ui";
import type { Project } from "@/lib/data";

const LIFESTYLE_HIGHLIGHTS = [
  {
    title: "Rooftop Club House",
    tag: "EXCLUSIVITY & RECREATION",
    desc: "An exclusive rooftop venue featuring a party lounge, open-air terrace, and panoramic views of Greater Noida West — designed for memorable evenings with friends and family.",
    img: { src: "/images/ambr41.jpeg", alt: "Rooftop Club House at Ambr Homes" },
    pills: ["Party Lounge", "Panoramic Views", "Terrace Seating", "Sunset Deck"],
  },
  {
    title: "Luxury Swimming Pool",
    tag: "WELLNESS & REFRESHMENT",
    desc: "Refresh, relax, and rejuvenate in a beautifully designed swimming pool surrounded by lush landscaping, sun loungers, ambient lighting, and tranquil surroundings.",
    img: { src: "/images/aspire-01.jpeg", alt: "Luxury Swimming Pool at Ambr Homes" },
    pills: ["Temperature Friendly", "Poolside Deck", "Kids Pool", "Lounge Seating", "Premium Landscape"],
  },
  {
    title: "Fitness Studio",
    tag: "HEALTH & ENERGY",
    desc: "Stay active in a premium fitness environment featuring modern cardio equipment, strength training machines, free weights, yoga space, and panoramic views that inspire every workout.",
    img: { src: "/images/hero-3.jpeg", alt: "Fitness Studio & Gym at Ambr Homes" },
    pills: ["Imported Gym Equipment", "Cardio Zone", "Strength Training", "Yoga & Wellness Space", "Air Conditioned"],
  },
];

const ALL_AMENITIES = [
  { name: "Clubhouse", icon: "🏛️" },
  { name: "Banquet Hall", icon: "🎉" },
  { name: "Swimming Pool", icon: "🏊" },
  { name: "Indoor Gym", icon: "🏋️" },
  { name: "Kids Play Area", icon: "🛝" },
  { name: "Jogging Track", icon: "🏃" },
  { name: "Landscaped Walkways", icon: "🌿" },
  { name: "Splash Pool", icon: "💦" },
  { name: "Temple", icon: "🛕" },
  { name: "Multi-purpose Hall", icon: "🎭" },
  { name: "Billiards Room", icon: "🎱" },
  { name: "Zumba Hall", icon: "💃" },
  { name: "TT Room", icon: "🏓" },
  { name: "Carrom Room", icon: "🎯" },
];

const LIVING_SPACES = [
  {
    title: "Spacious Living & Dining Area",
    img: { src: "/images/ambr18.jpeg", alt: "Spacious Living and Dining Area" },
    desc: "Open-plan layouts planned for maximum daylight, cross-ventilation, and family gatherings.",
  },
  {
    title: "Modular Kitchen",
    img: { src: "/images/ambr38.jpeg", alt: "Modular Kitchen" },
    desc: "Granite platform, stainless steel sink, and high glazed ceramic backsplash.",
  },
  {
    title: "Comfortable Bedroom",
    img: { src: "/images/3bhk-2.jpg", alt: "Comfortable Bedroom" },
    desc: "Wooden flooring in master bedroom with large windows for morning sunlight.",
  },
  {
    title: "Premium Bathroom",
    img: { src: "/images/ambr10.jpeg", alt: "Premium Bathroom" },
    desc: "Designer ceiling-height glazed tiles, vanity washbasin, and Cera/Hindware fittings.",
  },
];

export function ProjectLifestyleShowcase({ project }: { project: Project }) {
  return (
    <section className="wrap py-[clamp(56px,6vw,96px)]">
      {/* Section Header */}
      <Reveal>
        <Heading
          eyebrow="LIFESTYLE & RECREATION"
          title={`Experience Elevated Lifestyle at ${project.name}`}
          description="Designed for the life you deserve — where wellness, recreation, and elegance come together."
        />
      </Reveal>

      {/* Featured Lifestyle Cards (Rooftop Clubhouse, Pool, Fitness Studio) */}
      <div className="mt-14 space-y-12">
        {LIFESTYLE_HIGHLIGHTS.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <div
              className={`group grid items-center gap-8 overflow-hidden rounded-3xl border border-line bg-surface p-6 sm:p-8 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              <div className={`relative aspect-[16/10] overflow-hidden rounded-2xl ${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <Media
                  img={item.img}
                  className="absolute inset-0 h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-brand px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                  {item.tag}
                </span>
              </div>

              <div className="flex flex-col justify-center">
                <span className="text-xs font-bold tracking-[0.16em] text-brand uppercase">
                  {String(i + 1).padStart(2, "0")} — AMENITY HIGHLIGHT
                </span>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-2">
                  {item.desc}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.pills.map((pill) => (
                    <span
                      key={pill}
                      className="rounded-full border border-line bg-white/60 px-3.5 py-1 text-xs font-medium text-ink dark:bg-white/10 dark:text-white"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* 14 Amenities Grid */}
      <div className="mt-20">
        <Reveal>
          <Heading
            eyebrow="COMPLETE AMENITIES LIST"
            title="14+ Thoughtfully Planned Facilities"
            description="Every detail crafted to enrich your daily routine, from active sports to quiet relaxation."
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {ALL_AMENITIES.map((a, i) => (
            <Reveal key={a.name} delay={i * 0.03}>
              <div className="flex flex-col items-center justify-center rounded-2xl border border-line bg-surface p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-white hover:shadow-lg dark:hover:bg-ink">
                <span className="text-3xl">{a.icon}</span>
                <span className="mt-3 text-xs font-semibold text-ink">
                  {a.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* 4 Living Spaces Grid */}
      <div className="mt-20">
        <Reveal>
          <Heading
            eyebrow="EXQUISITE INTERIORS"
            title="Living Spaces Crafted For Comfort"
            description="Explore the thoughtfully planned corners of your future home."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LIVING_SPACES.map((space, i) => (
            <Reveal key={space.title} delay={i * 0.05}>
              <div className="group relative overflow-hidden rounded-2xl border border-line bg-surface">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Media
                    img={space.img}
                    className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                </div>
                <div className="p-5">
                  <h4 className="text-base font-bold text-ink">{space.title}</h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">{space.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
