import { Reveal } from "@/components/shared/Reveal";
import { Heading } from "@/components/shared/ui";
import type { Project } from "@/lib/data";

export function ProjectWhy({ project }: { project: Project }) {
  return (
    <section className="bg-grey py-[clamp(56px,6vw,96px)]">
      <div className="wrap">
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal>
            <Heading
              eyebrow={`Why Choose ${project.name}?`}
              title={project.whyTitle}
            />
          </Reveal>
          <div className="space-y-0">
            {project.whyRows.map((row, i) => (
              <Reveal key={row.h} delay={i * 0.1}>
                <div className="relative border-l-2 border-brand/20 pl-6 pb-8 last:pb-0">
                  <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 border-brand bg-white" />
                  <h3 className="text-lg font-medium text-ink">{row.h}</h3>
                  <p className="mt-2.5 leading-relaxed text-ink-2">{row.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
