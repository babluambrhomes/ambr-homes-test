import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Articles & Home Buyer Guides",
  description:
    "Read practical guides, construction insights, and neighborhood perspectives for home buyers in Greater Noida West from the Ambr Homes team.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Real Estate Articles & Home Buyer Guides | Ambr Homes",
    description:
      "Read practical guides, construction insights, and neighborhood perspectives for home buyers in Greater Noida West from the Ambr Homes team.",
    url: "https://ambrhomes.com/blogs",
    type: "website",
    images: [
      {
        url: "/images/hero-1.jpeg",
        width: 1200,
        height: 630,
        alt: "Ambr Homes Real Estate Articles & Guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Articles & Home Buyer Guides | Ambr Homes",
    description:
      "Read practical guides, construction insights, and neighborhood perspectives for home buyers in Greater Noida West from the Ambr Homes team.",
    images: ["/images/hero-1.jpeg"],
  },
};

const blogsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": "https://ambrhomes.com/blogs#blog",
      url: "https://ambrhomes.com/blogs",
      name: "Ambr Homes Blog",
      description:
        "Read practical guides, construction insights, and neighborhood perspectives for home buyers in Greater Noida West from the Ambr Homes team.",
      publisher: {
        "@id": "https://ambrhomes.com/#organization",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://ambrhomes.com/blogs#breadcrumb",
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
          name: "Blog",
          item: "https://ambrhomes.com/blogs",
        },
      ],
    },
  ],
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogsSchema) }}
      />
      {children}
    </>
  );
}
