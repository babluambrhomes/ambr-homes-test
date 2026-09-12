"use client";

import { useState } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { Heading } from "@/components/shared/ui";
import type { Project } from "@/lib/data";

const ASPIRE_UNITS = [
  { unit: "A-01 / B-01", type: "2 BHK", area: "1266 sq ft", segment: "Prime", highlight: "Big Size Main Road Facing" },
  { unit: "A-02 / B-02", type: "3 BHK", area: "1558.3 sq ft", segment: "Elite", highlight: "Big Drawing Room Corner Unit" },
  { unit: "A-03 / B-03", type: "2 BHK", area: "1266 sq ft", segment: "Prime", highlight: "Big Size Drawing Room" },
  { unit: "A-04 / B-04", type: "2 BHK", area: "1266 sq ft", segment: "Prime", highlight: "Big Drawing Room" },
  { unit: "A-05 / B-05", type: "3 BHK", area: "1524.5 sq ft", segment: "Elite", highlight: "Big Size Party Drawing Room" },
  { unit: "A-06 / B-06", type: "3 BHK", area: "1534.5 sq ft", segment: "Elite", highlight: "Big Drawing Room" },
  { unit: "C-01", type: "2 BHK", area: "1270 sq ft", segment: "Prime", highlight: "Big Size Drawing Room" },
  { unit: "C-02", type: "2 BHK", area: "1266 sq ft", segment: "Prime", highlight: "Big Size Drawing Room" },
  { unit: "C-03", type: "2 BHK", area: "1270 sq ft", segment: "Prime", highlight: "Big Room" },
  { unit: "C-04", type: "2 BHK", area: "1270 sq ft", segment: "Prime", highlight: "Big Drawing Room" },
  { unit: "D-01", type: "2 BHK", area: "1270 sq ft", segment: "Prime", highlight: "Relax Size Drawing Room" },
  { unit: "D-02", type: "2 BHK", area: "1266 sq ft", segment: "Prime", highlight: "Relax Size Big Drawing Room" },
  { unit: "D-03", type: "2 BHK", area: "1266 sq ft", segment: "Prime", highlight: "Relax Size Big Drawing Room" },
  { unit: "D-04", type: "2 BHK", area: "1270 sq ft", segment: "Prime", highlight: "Relax Size Big Drawing Room" },
];

const MAGNOLIA_UNITS = [
  { unit: "Unit-01", type: "2 BHK", area: "1266 sq ft", segment: "Prime", highlight: "Big Size Main Road Facing" },
  { unit: "Unit-02", type: "3 BHK", area: "1558 sq ft", segment: "Elite", highlight: "Big Size 2 Side Facing" },
  { unit: "Unit-03", type: "2 BHK + Puja", area: "1266 sq ft", segment: "Prime", highlight: "Big Size Drawing Room" },
  { unit: "Unit-04", type: "2 BHK", area: "1266 sq ft", segment: "Prime", highlight: "Big Size Drawing Room" },
  { unit: "Unit-05", type: "2 BHK", area: "1266 sq ft", segment: "Prime", highlight: "Big Size Drawing Room" },
];

export function ProjectFloorPlans({ project }: { project: Project }) {
  const isAspire = project.slug === "aspire";
  const units = isAspire ? ASPIRE_UNITS : MAGNOLIA_UNITS;
  const [activeFilter, setActiveFilter] = useState<"all" | "2BHK" | "3BHK">("all");

  const filteredUnits = units.filter((u) => {
    if (activeFilter === "2BHK") return u.type.includes("2 BHK");
    if (activeFilter === "3BHK") return u.type.includes("3 BHK");
    return true;
  });

  return (
    <section className="wrap py-[clamp(56px,6vw,96px)]">
      <Reveal>
        <Heading
          eyebrow="FLOOR PLANS & UNIT SIZES"
          title={`${project.name} Sanctioned Unit Layouts`}
          description="Detailed floor plans engineered for space efficiency, maximum ventilation, and multi-generational living."
        />
      </Reveal>

      {/* Filter Tabs */}
      <div className="mt-8 flex justify-center gap-3">
        {(["all", "2BHK", "3BHK"] as const).map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
              activeFilter === filter
                ? "bg-brand text-white shadow-lg shadow-brand/25"
                : "border border-line bg-surface text-ink-2 hover:bg-surface/80"
            }`}
          >
            {filter === "all" ? "All Layouts" : filter}
          </button>
        ))}
      </div>

      {/* Units Grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredUnits.map((u, i) => (
          <Reveal key={u.unit} delay={i * 0.04}>
            <div className="group relative flex flex-col justify-between rounded-3xl border border-line bg-surface p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/50 hover:shadow-2xl">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold tracking-tight text-ink">
                    {u.unit}
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-wider ${
                      u.segment === "Elite"
                        ? "bg-brand/15 text-brand"
                        : "bg-surface-2 text-ink-2"
                    }`}
                  >
                    {u.segment}
                  </span>
                </div>

                <div className="mt-4 flex items-baseline gap-3">
                  <span className="text-2xl font-semibold text-brand">
                    {u.type}
                  </span>
                  <span className="text-sm font-medium text-ink-2">
                    {u.area}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {u.highlight}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-line/60 pt-4 text-xs font-medium text-ink-2">
                <span>Sanctioned Layout</span>
                <span className="text-brand group-hover:underline">View Spec Sheet →</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
