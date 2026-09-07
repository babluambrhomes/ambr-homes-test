import { Reveal } from "@/components/shared/Reveal";
import { Heading, Media } from "@/components/shared/ui";
import type { Project } from "@/lib/projects";

export function ProjectConfigs({ project }: { project: Project }) {
  return (
    <section className="wrap py-[clamp(56px,6vw,96px)]">
      <div className="grid items-end gap-8 md:grid-cols-2">
        <div>
          <Heading eyebrow="Configurations" title="2 & 3 BHK Homes" />
        </div>
        <p className="text-lg leading-relaxed text-ink-2 md:pb-1 md:pl-6">
          Every {project.name} home is planned for cross ventilation and morning light, with a kitchen
          that sees the living room and a balcony deep enough to hold two chairs and a table. Sanctioned
          layouts are published before booking.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {project.configs.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.1}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-ink text-white shadow-[0_10px_50px_-20px_rgba(16,16,16,0.5)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_70px_-30px_rgba(226,1,15,0.35)]">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Media
                  img={c.img}
                  className="absolute inset-0 h-full w-full opacity-85 transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/5" />

                <span className="absolute right-4 top-4 rounded-full border border-white/25 bg-white/15 px-3.5 py-1 text-xs font-semibold tracking-wide text-white uppercase backdrop-blur-md">
                  {c.tag}
                </span>

                <span className="absolute left-5 bottom-0 select-none text-[6rem] leading-none font-semibold tracking-[-0.04em] text-white/12">
                  0{i + 1}
                </span>
              </div>

              <div className="relative -mt-12 flex flex-1 flex-col px-6 pb-6">
                <h3 className="text-2xl font-medium tracking-[-0.015em] text-white">{c.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/70">{c.desc}</p>

                <div className="mt-6 flex items-center justify-between border-t border-white/15 pt-5">
                  <span className="text-[0.6875rem] font-semibold tracking-[0.14em] text-white/45 uppercase">
                    Configuration {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand bg-brand text-white transition-all duration-500 group-hover:bg-white group-hover:text-ink">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-500 group-hover:rotate-45"
                    >
                      <path d="M7 17 17 7" />
                      <path d="M8 7h9v9" />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
