import { RedCta } from "@/components/shared/RedCta";
import type { Project } from "@/lib/data";

export function ProjectCTA({ project }: { project: Project }) {
  return (
    <RedCta
      eyebrow="Ready to see it for yourself"
      title={project.finalTitle}
      description={project.finalBody}
      buttons={[
        { label: "Book A Site Visit", href: "/contact", className: "border border-white/40 hover:!bg-white hover:!text-ink" },
        { label: "+91 00000 00000", href: "tel:+910000000000", className: "!bg-white !text-brand hover:!bg-ink hover:!text-white" },
      ]}
    />
  );
}
