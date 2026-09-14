import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Ambr Homes | Thoughtful Living in Greater Noida West",
  description:
    "Discover why families choose Ambr Homes: cross ventilation, usable balconies, daylight in living spaces, and construction you can judge in person.",
  alternates: {
    canonical: "/why-ambr-homes",
  },
  openGraph: {
    title: "Why Ambr Homes | Thoughtful Living in Greater Noida West",
    description:
      "Discover why families choose Ambr Homes: cross ventilation, usable balconies, daylight in living spaces, and construction you can judge in person.",
    url: "https://ambrhomes.com/why-ambr-homes",
    type: "website",
    images: [
      {
        url: "/images/hero-1.jpeg",
        width: 1200,
        height: 630,
        alt: "Why Ambr Homes — Thoughtful Living in Greater Noida West",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Ambr Homes | Thoughtful Living in Greater Noida West",
    description:
      "Discover why families choose Ambr Homes: cross ventilation, usable balconies, daylight in living spaces, and construction you can judge in person.",
    images: ["/images/hero-1.jpeg"],
  },
};

const whySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://ambrhomes.com/why-ambr-homes#webpage",
      url: "https://ambrhomes.com/why-ambr-homes",
      name: "Why Ambr Homes | Thoughtful Living in Greater Noida West",
      description:
        "Discover why families choose Ambr Homes: cross ventilation, usable balconies, daylight in living spaces, and construction you can judge in person.",
      isPartOf: {
        "@id": "https://ambrhomes.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://ambrhomes.com/why-ambr-homes#breadcrumb",
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
          name: "Why Ambr Homes",
          item: "https://ambrhomes.com/why-ambr-homes",
        },
      ],
    },
  ],
};

export default function WhyAmbrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(whySchema) }}
      />
      {children}
    </>
  );
}
