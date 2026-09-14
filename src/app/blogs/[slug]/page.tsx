import { cache } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostPage } from "@/components/blog/BlogPostPage";
import { fetchPostBySlug, fetchPosts, mapWpPostDetail } from "@/lib/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

const getPost = cache(async (slug: string) => {
  return fetchPostBySlug(slug);
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const raw = await getPost(slug);

  if (!raw) {
    return {
      title: "Article Not Found",
    };
  }

  const post = mapWpPostDetail(raw);
  const title = post.title;
  const description = post.excerpt;
  const image = post.heroImg.src.startsWith("http")
    ? post.heroImg.src
    : `https://ambrhomes.com${post.heroImg.src}`;

  return {
    title,
    description,
    alternates: {
      canonical: `/blogs/${post.slug}`,
    },
    openGraph: {
      title: `${title} | Ambr Homes Blog`,
      description,
      url: `https://ambrhomes.com/blogs/${post.slug}`,
      type: "article",
      publishedTime: raw.date,
      images: [
        {
          url: image,
          alt: post.heroImg.alt || title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Ambr Homes Blog`,
      description,
      images: [image],
    },
  };
}

export default async function BlogRoute({ params }: Props) {
  const { slug } = await params;
  const raw = await getPost(slug);

  if (!raw) {
    notFound();
  }

  const post = mapWpPostDetail(raw);
  const relatedPosts = await fetchPosts(1, 3);
  const related = relatedPosts.posts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  const image = post.heroImg.src.startsWith("http")
    ? post.heroImg.src
    : `https://ambrhomes.com${post.heroImg.src}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `https://ambrhomes.com/blogs/${post.slug}#article`,
        headline: post.title,
        description: post.excerpt,
        datePublished: raw.date,
        image,
        mainEntityOfPage: `https://ambrhomes.com/blogs/${post.slug}`,
        publisher: {
          "@type": "Organization",
          name: "Ambr Homes",
          url: "https://ambrhomes.com",
          logo: "https://ambrhomes.com/images/logo_white.png",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://ambrhomes.com/blogs/${post.slug}#breadcrumb`,
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
            name: post.title,
            item: `https://ambrhomes.com/blogs/${post.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogPostPage post={post} related={related} />
    </>
  );
}