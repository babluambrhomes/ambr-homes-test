import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Ambr Homes builds thoughtful 2 & 3 BHK communities in Greater Noida West. Learn about our standards, our journey since 2022, and our focus on long-term livability.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Ambr Homes",
    description:
      "Ambr Homes builds thoughtful 2 & 3 BHK communities in Greater Noida West. Learn about our standards, our journey since 2022, and our focus on long-term livability.",
    url: "https://ambrhomes.com/about",
    type: "website",
    images: [
      {
        url: "/images/ambr41.jpeg",
        width: 1200,
        height: 630,
        alt: "About Ambr Homes — Building Communities in Greater Noida West",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Ambr Homes",
    description:
      "Ambr Homes builds thoughtful 2 & 3 BHK communities in Greater Noida West. Learn about our standards, our journey since 2022, and our focus on long-term livability.",
    images: ["/images/ambr41.jpeg"],
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://ambrhomes.com/about#webpage",
      url: "https://ambrhomes.com/about",
      name: "About Us | Ambr Homes",
      description:
        "Ambr Homes builds thoughtful 2 & 3 BHK communities in Greater Noida West. Learn about our standards, our journey since 2022, and our focus on long-term livability.",
      isPartOf: {
        "@id": "https://ambrhomes.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://ambrhomes.com/about#breadcrumb",
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
          name: "About Us",
          item: "https://ambrhomes.com/about",
        },
      ],
    },
  ],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      {children}
    </>
  );
}
