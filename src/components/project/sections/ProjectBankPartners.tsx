"use client";

import { Reveal } from "@/components/shared/Reveal";
import { Heading, Media } from "@/components/shared/ui";

const BANK_PARTNERS = [
  "Aadhar Housing Finance Ltd",
  "Bajaj Housing Finance",
  "Aditya Birla Capital Home Loans",
  "Tata Capital Housing Finance",
  "PNB Housing Finance Limited",
  "Vastu Housing Finance",
  "KIFS Home Loans",
  "ICICI Home Finance",
];

const DELIVERED_PROJECTS = [
  {
    no: "01",
    name: "Olympia",
    detail: "4 Side Open — 45 Units Successfully Delivered",
    img: { src: "/images/ambr36.jpeg", alt: "Olympia by Ambr Homes" },
  },
  {
    no: "02",
    name: "Sunny",
    detail: "23 Units Successfully Delivered",
    img: { src: "/images/ambr19.jpeg", alt: "Sunny by Ambr Homes" },
  },
  {
    no: "03",
    name: "Droplets",
    detail: "41 Units Delivered Project in Dwarka",
    img: { src: "/images/ambr45.jpeg", alt: "Droplets by Ambr Homes" },
  },
  {
    no: "04",
    name: "Atlanta",
    detail: "28 Units Successfully Delivered in Greater Noida West",
    img: { src: "/images/Batlanta.jpg", alt: "Atlanta by Ambr Homes" },
  },
  {
    no: "05",
    name: "Ambrosia",
    detail: "Ambrosia Luxury Homes — 88 Families Happily Shifted",
    img: { src: "/images/Bambrosia.jpeg", alt: "Ambrosia by Ambr Homes" },
  },
  {
    no: "06",
    name: "Aura",
    detail: "22 Units Successfully Delivered in Greater Noida West",
    img: { src: "/images/ambr10.jpeg", alt: "Aura by Ambr Homes" },
  },
  {
    no: "07",
    name: "Helios & Orbit",
    detail: "4 Side Open — 45 Units Successfully Delivered",
    img: { src: "/images/ambr38.jpeg", alt: "Helios & Orbit by Ambr Homes" },
  },
  {
    no: "08",
    name: "Amore",
    detail: "102 Units Successfully Delivered in Greater Noida West",
    img: { src: "/images/ambr43.jpeg", alt: "Amore by Ambr Homes" },
  },
];

export function ProjectBankPartners() {
  return (
    <section className="wrap py-[clamp(56px,6vw,96px)]">
      {/* Banking & Finance Partners */}
      <Reveal>
        <Heading
          eyebrow="FINANCING & APPROVALS"
          title="Our Banking & Finance Partners"
          description="Pre-approved home loan facilities available from leading national banks and financial institutions."
        />
      </Reveal>

      <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4">
        {BANK_PARTNERS.map((bank, i) => (
          <Reveal key={bank} delay={i * 0.04}>
            <div className="flex min-h-[64px] sm:min-h-[76px] items-center justify-center rounded-2xl border border-line bg-surface p-3 sm:p-5 text-center transition-all duration-300 hover:border-brand/40 hover:bg-white hover:shadow-lg dark:hover:bg-ink">
              <span className="text-xs sm:text-sm font-semibold text-ink">{bank}</span>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Delivered Projects Track Record */}
      <div className="mt-14 sm:mt-20">
        <Reveal>
          <Heading
            eyebrow="OUR TRACK RECORD"
            title="Our Delivered Projects"
            description="Over 600+ homes successfully delivered across Greater Noida West & Delhi NCR."
          />
        </Reveal>

        <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DELIVERED_PROJECTS.map((proj, i) => (
            <Reveal key={proj.name} delay={i * 0.04}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-lg">
                <div className="relative aspect-[16/11] overflow-hidden bg-muted/10">
                  <Media
                    img={proj.img}
                    className="absolute inset-0 h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-108"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                  
                  {/* Subtle Glassmorphic Number Badge */}
                  <span className="absolute left-3.5 top-3.5 inline-flex items-center justify-center rounded-full border border-white/20 bg-ink/75 px-3 py-0.5 text-xs font-semibold tabular-nums text-white backdrop-blur-md shadow-md">
                    {proj.no}
                  </span>
                </div>

                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <span className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-muted">
                      Handed Over & Occupied
                    </span>
                    <h4 className="mt-1 text-xl font-bold tracking-tight text-ink">
                      {proj.name}
                    </h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted">
                      {proj.detail}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
