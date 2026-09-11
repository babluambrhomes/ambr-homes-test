import { Reveal } from "@/components/shared/Reveal";
import { Heading } from "@/components/shared/ui";
import type { Project } from "@/lib/data";

export function ProjectBenefits({ project }: { project: Project }) {
  const isAspire = project.slug === "aspire";

  const aspireBenefits = [
    {
      title: "Natural Light Where It Matters",
      desc: "The brochure positions natural light and cross ventilation as core planning priorities, helping homes feel brighter and better aired through the day.",
    },
    {
      title: "Balconies With Room To Sit",
      desc: "The project is presented with wider balconies designed to be used — not simply added to the elevation.",
    },
    {
      title: "Clear Project Information",
      desc: "The project information should be easy to inspect before you commit — including the sanctioned plans, current commercial information and the documents applicable to your purchase.",
    },
    {
      title: "Landscape Is Part Of The Experience",
      desc: "The brochure places landscaped surroundings, green open spaces, movement areas and recreation alongside the residential blocks, so the spaces between homes are part of the experience.",
    },
    {
      title: "See The Work As It Progresses",
      desc: "Construction is easier to trust when progress is visible. The page should make dated project updates and the current construction position easy for buyers to find.",
    },
    {
      title: "Early Choice",
      desc: "Pre-booking can give you earlier access to the available choice of floor, facing and plan. Current pricing and inventory should always be confirmed with the latest price sheet.",
    },
  ];

  const benefits = isAspire ? aspireBenefits : project.benefits;

  return (
    <section className="wrap py-[clamp(56px,6vw,96px)]">
      <Reveal>
        <Heading
          eyebrow={isAspire ? "The Details That Change Daily Life" : "Benefits"}
          title={
            isAspire
              ? "The Things You Notice Every Day"
              : "Built To Be Lived In, Not Just Sold"
          }
          description="The details that look small on a specification sheet are often the ones a family notices every day"
        />
      </Reveal>

      <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b, i) => (
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
                  viewBox="0 0 18 18"
                  fill="none"
                  className="text-ink/30 transition-all duration-500 group-hover:translate-x-1 group-hover:text-brand"
                  aria-hidden="true"
                >
                  <path
                    d="M5 13L13 5M6.5 5H13V11.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>

              <h3 className="mt-4 text-lg font-medium tracking-[-0.01em] text-ink">
                {b.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-ink/60">
                {b.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}