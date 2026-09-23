import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Site Office & Visits",
  description:
    "Connect with Ambr Homes. Visit our site office at Plot no 768, near ACE divine, Sector 1, Aimnabad, Bisrakh Jalalpur, Greater Noida or schedule a walkthrough of our completed and upcoming communities.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Site Office & Visits | Ambr Homes",
    description:
      "Connect with Ambr Homes. Visit our site office at Plot no 768, near ACE divine, Sector 1, Aimnabad, Bisrakh Jalalpur, Greater Noida or schedule a walkthrough of our completed and upcoming communities.",
    url: "https://ambrhomes.com/contact",
    type: "website",
    images: [
      {
        url: "/images/hero-1.jpeg",
        width: 1200,
        height: 630,
        alt: "Contact Ambr Homes Site Office",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Site Office & Visits | Ambr Homes",
    description:
      "Connect with Ambr Homes. Visit our site office at Plot no 768, near ACE divine, Sector 1, Aimnabad, Bisrakh Jalalpur, Greater Noida or schedule a walkthrough of our completed and upcoming communities.",
    images: ["/images/hero-1.jpeg"],
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://ambrhomes.com/contact#webpage",
      url: "https://ambrhomes.com/contact",
      name: "Contact Us | Ambr Homes",
      description:
        "Connect with Ambr Homes. Visit our site office at Plot no 768, near ACE divine, Sector 1, Aimnabad, Bisrakh Jalalpur, Greater Noida or schedule a walkthrough of our completed and upcoming communities.",
      isPartOf: {
        "@id": "https://ambrhomes.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://ambrhomes.com/contact#breadcrumb",
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
          name: "Contact Us",
          item: "https://ambrhomes.com/contact",
        },
      ],
    },
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      {children}
    </>
  );
}
