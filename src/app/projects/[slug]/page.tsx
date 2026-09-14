import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, PROJECTS } from "@/lib/data";
import { ProjectPage } from "@/components/project/ProjectPage";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return { title: "Project | Ambr Homes" };

  const title = `${p.name} – ${p.sub}`;
  const description = p.intro;
  const url = `https://ambrhomes.com/projects/${p.slug}`;
  const image = `https://ambrhomes.com${p.heroImg.src}`;

  return {
    title,
    description,
    alternates: {
      canonical: `/projects/${p.slug}`,
    },
    openGraph: {
      title: `${title} | Ambr Homes`,
      description,
      url,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: p.heroAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Ambr Homes`,
      description,
      images: [image],
    },
  };
}

export default async function ProjectRoute({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const projectSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ApartmentComplex", "Residence"],
        "@id": `https://ambrhomes.com/projects/${project.slug}#residence`,
        name: project.name,
        description: project.intro,
        url: `https://ambrhomes.com/projects/${project.slug}`,
        image: `https://ambrhomes.com${project.heroImg.src}`,
        address: {
          "@type": "PostalAddress",
          streetAddress: project.address,
          addressLocality: project.locality,
          addressRegion: "Uttar Pradesh",
          postalCode: "201306",
          addressCountry: "IN",
        },
        containedInPlace: {
          "@type": "Place",
          name: `${project.locality}, Greater Noida West`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://ambrhomes.com/projects/${project.slug}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://ambrhomes.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projects",
            item: "https://ambrhomes.com/projects",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.name,
            item: `https://ambrhomes.com/projects/${project.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <ProjectPage project={project} />
    </>
  );
}
