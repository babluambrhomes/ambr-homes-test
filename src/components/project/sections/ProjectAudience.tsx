import { Reveal } from "@/components/shared/Reveal";
import { Heading, Media } from "@/components/shared/ui";
import type { Project } from "@/lib/data";

export function ProjectAudience({ project }: { project: Project }) {
  return (
    <section className="wrap py-[clamp(56px,6vw,96px)]">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <Heading
            align="center"
            eyebrow="Who It's For"
            title="Designed For Every Stage Of Family Life"
          />
        </Reveal>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {project.uses.map((u, i) => (
          <Reveal key={u.title} delay={i * 0.06}>
            <div className="group relative h-full overflow-hidden rounded-2xl">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Media
                  img={u.img}
                  className="absolute inset-0 h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-medium text-white">{u.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/70">{u.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
