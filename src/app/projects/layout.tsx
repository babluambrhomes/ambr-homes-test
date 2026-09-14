import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residential Projects in Greater Noida West",
  description:
    "Explore 2 & 3 BHK residential communities by Ambr Homes in Vaidpura and Bishrakh, Greater Noida West — Aspire, Magnolia, Amore, Atlanta, and Ambrosia.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Residential Projects in Greater Noida West | Ambr Homes",
    description:
      "Explore 2 & 3 BHK residential communities by Ambr Homes in Vaidpura and Bishrakh, Greater Noida West — Aspire, Magnolia, Amore, Atlanta, and Ambrosia.",
    url: "https://ambrhomes.com/projects",
    type: "website",
    images: [
      {
        url: "/images/Batlanta.jpg",
        width: 1200,
        height: 630,
        alt: "Ambr Homes Residential Projects in Greater Noida West",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Residential Projects in Greater Noida West | Ambr Homes",
    description:
      "Explore 2 & 3 BHK residential communities by Ambr Homes in Vaidpura and Bishrakh, Greater Noida West — Aspire, Magnolia, Amore, Atlanta, and Ambrosia.",
    images: ["/images/Batlanta.jpg"],
  },
};

const projectsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://ambrhomes.com/projects#webpage",
      url: "https://ambrhomes.com/projects",
      name: "Residential Projects in Greater Noida West | Ambr Homes",
      description:
        "Explore 2 & 3 BHK residential communities by Ambr Homes in Vaidpura and Bishrakh, Greater Noida West — Aspire, Magnolia, Amore, Atlanta, and Ambrosia.",
      isPartOf: {
        "@id": "https://ambrhomes.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://ambrhomes.com/projects#breadcrumb",
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
      ],
    },
  ],
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
      {children}
    </>
  );
}
