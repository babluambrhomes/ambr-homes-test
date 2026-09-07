import type { Project } from "@/lib/projects";
import {
  ProjectHero,
  ProjectGallery,
  ProjectFacts,
  ProjectConfigs,
  ProjectWhy,
  ProjectBenefits,
  ProjectTech,
  ProjectAudience,
  ProjectWorkflow,
  ProjectFAQ,
  ProjectCTA,
} from "./sections";

export function ProjectPage({ project }: { project: Project }) {
  return (
    <>
      <ProjectHero project={project} />
      <ProjectGallery project={project} />
      <ProjectFacts project={project} />
      <ProjectConfigs project={project} />
      <ProjectWhy project={project} />
      <ProjectBenefits project={project} />
      <ProjectTech project={project} />
      <ProjectAudience project={project} />
      <ProjectWorkflow project={project} />
      <ProjectFAQ project={project} />
      <ProjectCTA project={project} />
    </>
  );
}