import { Reveal } from "@/components/shared/Reveal";
import { Glass } from "@/components/shared/Glass";
import type { Project } from "@/lib/data";

const FACTS = (p: Project) => {
  if (p.slug === "aspire") {
    return [
      {
        label: "2 & 3 BHK",
        value: "Homes planned for different stages of family life.",
        icon: (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-brand"
          >
            <path d="M3 21h18M5 21V7l8-4 8 4v14M9 21v-6h6v6" />
          </svg>
        ),
      },
      {
        label: "12 FT",
        value: "Ceiling height highlighted in the project brochure.",
        icon: (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-brand"
          >
            <path d="M4 20h16M6 20V4M18 20V4M6 7h12" />
          </svg>
        ),
      },
      {
        label: "EVERY ROOM",
        value: "Ventilation is specifically highlighted in the brochure.",
        icon: (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-brand"
          >
            <path d="M3 12h18M12 3v18M5.5 5.5l13 13M18.5 5.5l-13 13" />
          </svg>
        ),
      },
      {
        label: "VAIDPURA",
        value: "Greater Noida West",
        icon: (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-brand"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        ),
      },
    ];
  }

  return [
    {
      label: "Configurations",
      value: "2 & 3 BHK Homes",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-brand"
        >
          <path d="M3 21h18M5 21V7l8-4 8 4v14M9 21v-6h6v6" />
        </svg>
      ),
    },
    {
      label: "Location",
      value: `${p.locality}, Greater Noida West`,
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-brand"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
    {
      label: "Status",
      value: p.statusLabel,
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-brand"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
    },
    {
      label: "Approvals",
      value: "Sanctioned & Approved",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-brand"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
    },
  ];
};

export function ProjectFacts({ project }: { project: Project }) {
  const facts = FACTS(project);

  return (
    <section className="relative -mt-1 z-10">
      <div className="wrap grid grid-cols-2 gap-3 py-12 sm:gap-4 md:grid-cols-4 md:py-16">
        {facts.map((f, i) => (
          <Reveal key={f.label} delay={i * 0.06} className="h-full">
            <Glass
              variant="strong"
              sheen
              className="group relative flex h-full flex-col justify-start !overflow-visible !rounded-2xl p-6 sm:p-7"
            >
              <span className="pointer-events-none absolute -top-px left-6 h-px w-10 bg-brand/60 transition-all duration-500 group-hover:w-16 group-hover:bg-brand" />

              <div className="flex items-start justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 ring-1 ring-brand/0 transition-all duration-500 group-hover:bg-brand/15 group-hover:ring-brand/40">
                  {f.icon}
                </div>

                <span className="text-xs font-semibold tabular-nums tracking-[0.18em] text-line transition-colors duration-500 group-hover:text-brand">
                  0{i + 1}
                </span>
              </div>

              <p className="mt-5 text-[0.6875rem] font-semibold uppercase tracking-wider text-muted">
                {f.label}
              </p>

              <p className="mt-1.5 text-lg font-medium leading-snug tracking-[-0.01em] text-ink sm:text-xl">
                {f.value}
              </p>
            </Glass>
          </Reveal>
        ))}
      </div>
    </section>
  );
}