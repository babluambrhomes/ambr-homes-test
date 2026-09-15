import type { Metadata } from "next";
import { Figtree, Manrope } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlassPopup } from "@/components/layout/GlassPopup";
import { BottomNav } from "@/components/layout/BottomNav";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Preloader } from "@/components/layout/Preloader";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ambrhomes.com"),
  title: {
    default: "Ambr Homes | 2 & 3 BHK in Greater Noida West",
    template: "%s | Ambr Homes",
  },
  description:
    "Five communities. Fully sanctioned & approved. Ambr Homes builds 2 & 3 BHK homes in Greater Noida West — designed for light, ventilation and the twelve years after handover.",
  keywords: [
    "Ambr Homes",
    "2 BHK in Greater Noida West",
    "3 BHK in Greater Noida West",
    "Flats in Vaidpura",
    "Flats in Bishrakh",
    "Residential projects Greater Noida West",
    "Ambr Aspire",
    "Ambr Magnolia",
    "Ambr Amore",
    "Ambr Atlanta",
    "Ambr Ambrosia",
  ],
  authors: [{ name: "Ambr Homes", url: "https://ambrhomes.com" }],
  creator: "Ambr Homes",
  publisher: "Ambr Homes",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ambrhomes.com",
    siteName: "Ambr Homes",
    title: "Ambr Homes | 2 & 3 BHK in Greater Noida West",
    description:
      "Five communities. Fully sanctioned & approved. Ambr Homes builds 2 & 3 BHK homes in Greater Noida West — designed for light, ventilation and the twelve years after handover.",
    images: [
      {
        url: "/images/hero-1.jpeg",
        width: 1200,
        height: 630,
        alt: "Ambr Homes — Residential Communities in Greater Noida West",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ambr Homes | 2 & 3 BHK in Greater Noida West",
    description:
      "Five communities. Fully sanctioned & approved. Ambr Homes builds 2 & 3 BHK homes in Greater Noida West — designed for light, ventilation and the twelve years after handover.",
    images: ["/images/hero-1.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "RealEstateAgent"],
      "@id": "https://ambrhomes.com/#organization",
      name: "Ambr Homes",
      url: "https://ambrhomes.com",
      logo: "https://ambrhomes.com/images/logo_white.png",
      telephone: "+919090090032",
      email: "hello@ambrhomes.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ambr Homes Site Office, Sector-10/16C, Vaidpura",
        addressLocality: "Greater Noida West",
        postalCode: "203207",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
      sameAs: [
        process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
          "https://www.instagram.com/ambrhomes?stkn=Y3JkcWN1MXl3bWRl&utm_source=qr",
        process.env.NEXT_PUBLIC_FACEBOOK_URL ||
          "https://www.facebook.com/share/1DBFLJSCRv/?mibextid=wwXIfr",
        process.env.NEXT_PUBLIC_LINKEDIN_URL ||
          "https://www.linkedin.com/company/ambr-homes-pvt-ltd/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://ambrhomes.com/#website",
      url: "https://ambrhomes.com",
      name: "Ambr Homes",
      publisher: {
        "@id": "https://ambrhomes.com/#organization",
      },
    },
  ],
};

export default function RootLayout(props: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Preloader />
      
        <Header />
        <main id="main" className="flex-1">
          {props.children}
        </main>
        <Footer />
        <GlassPopup />
        <BottomNav />
        <StickyCTA />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
