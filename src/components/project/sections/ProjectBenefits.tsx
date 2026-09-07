import { Reveal } from "@/components/shared/Reveal";
import { Heading } from "@/components/shared/ui";
import type { Project } from "@/lib/projects";

export function ProjectBenefits({ project }: { project: Project }) {
  return (
    <section className="wrap py-[clamp(56px,6vw,96px)]">
      <Reveal>
        <Heading
          eyebrow="Benefits"
          title="Built To Be Lived In, Not Just Sold"
        />
      </Reveal>
      <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {project.benefits.map((b, i) => (
          <Reveal key={b.title} delay={i * 0.05}>
            <div className="group relative border-t border-line transition-colors duration-500 hover:border-ink/20">
              <span className="absolute -top-px left-0 h-[2px] w-10 bg-brand transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
              <div className="flex items-baseline justify-between">
                <span className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-ink/10 transition-all duration-500 group-hover:text-ink/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="mt-7 text-line transition-all duration-500 group-hover:translate-x-1 group-hover:text-brand"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </div>
              <h3 className="mt-3 text-xl font-medium tracking-[-0.01em] text-ink">{b.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{b.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
