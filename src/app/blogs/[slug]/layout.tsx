import type { Metadata } from "next";
import {
  fetchPostBySlug,
  decodeHtml,
  trimWPExcerpt,
  FALLBACK_IMG,
} from "@/lib/blog";

type Props = {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const raw = await fetchPostBySlug(slug);
    if (!raw) {
      return {
        title: "Article | Ambr Homes Blog",
        alternates: { canonical: `/blogs/${slug}` },
      };
    }
    const title = decodeHtml(raw.title.rendered);
    const description = trimWPExcerpt(decodeHtml(raw.excerpt.rendered));
    const image =
      raw._embedded?.["wp:featuredmedia"]?.[0]?.source_url || FALLBACK_IMG;

    return {
      title,
      description,
      alternates: {
        canonical: `/blogs/${slug}`,
      },
      openGraph: {
        title: `${title} | Ambr Homes Blog`,
        description,
        url: `https://ambrhomes.com/blogs/${slug}`,
        type: "article",
        publishedTime: raw.date,
        images: [{ url: image, alt: title }],
      },
      twitter: {
        card: "summary_large_image",
        title: `${title} | Ambr Homes Blog`,
        description,
        images: [image],
      },
    };
  } catch {
    return {
      title: "Article | Ambr Homes Blog",
      alternates: { canonical: `/blogs/${slug}` },
    };
  }
}

export default async function BlogDetailLayout({
  params,
  children,
}: Props) {
  const { slug } = await params;
  let articleSchema = null;

  try {
    const raw = await fetchPostBySlug(slug);
    if (raw) {
      const title = decodeHtml(raw.title.rendered);
      const description = trimWPExcerpt(decodeHtml(raw.excerpt.rendered));
      const image =
        raw._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
        `https://ambrhomes.com${FALLBACK_IMG}`;

      articleSchema = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BlogPosting",
            "@id": `https://ambrhomes.com/blogs/${slug}#article`,
            headline: title,
            description,
            datePublished: raw.date,
            image,
            mainEntityOfPage: `https://ambrhomes.com/blogs/${slug}`,
            publisher: {
              "@type": "Organization",
              name: "Ambr Homes",
              url: "https://ambrhomes.com",
              logo: "https://ambrhomes.com/images/logo_white.png",
            },
          },
          {
            "@type": "BreadcrumbList",
            "@id": `https://ambrhomes.com/blogs/${slug}#breadcrumb`,
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
              {
                "@type": "ListItem",
                position: 3,
                name: title,
                item: `https://ambrhomes.com/blogs/${slug}`,
              },
            ],
          },
        ],
      };
    }
  } catch {
    // Graceful fallback if API fails
  }

  return (
    <>
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      {children}
    </>
  );
}
