export const WP_API = "https://ambrhomes.com/wp-json/wp/v2";
export const FALLBACK_IMG = "/images/hero-1.jpeg";

export type WpTerm = { id: number; name: string; slug: string; taxonomy: string };
export type WpPostRaw = {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  link: string;
  _embedded?: {
    author?: { name: string }[];
    "wp:featuredmedia"?: { source_url?: string }[];
    "wp:term"?: WpTerm[][];
  };
};

export type BlogCard = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  heroImg: { src: string; alt: string };
};

export type BlogPostDetail = BlogCard & {
  author: string;
  tags: string[];
  contentHtml: string;
};

export function decodeHtml(str: string): string {
  return str
    .replace(/<[^>]*>/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&#x27;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8216;|&#8217;/g, "'")
    .replace(/&#8220;|&#8221;/g, '"')
    .replace(/&hellip;|&#8230;/g, "…")
    .replace(/&amp;/g, "&")
    .trim();
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function trimWPExcerpt(text: string): string {
  return text
    .replace(/\s*\[(?:&hellip;|…|\.{3})\]?\s*$/g, "")
    .replace(/\s*(?:&hellip;|…|\.{3})\s*$/g, "")
    .trim();
}

export function sumTitle(t: string): string {
  return t
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0] ?? "")
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function readMinutes(html: string): string {
  const words = decodeHtml(html).split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

export function mapWpPost(p: WpPostRaw): BlogCard {
  const src = p._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? FALLBACK_IMG;
  const title = decodeHtml(p.title.rendered) || "Ambr Homes";
  return {
    slug: p.slug,
    title,
    excerpt: trimWPExcerpt(
      decodeHtml(p.excerpt.rendered) || decodeHtml(p.content.rendered).slice(0, 220)
    ),
    date: formatDate(p.date),
    readTime: readMinutes(p.content.rendered),
    heroImg: { src, alt: title },
  };
}

export function mapWpPostDetail(p: WpPostRaw): BlogPostDetail {
  const card = mapWpPost(p);
  const terms = (p._embedded?.["wp:term"] ?? []).flat();
  const tags = terms
    .filter((t) => t.taxonomy === "tag")
    .map((t) => t.name);
  return {
    ...card,
    author: p._embedded?.author?.[0]?.name ?? "The Ambr Homes Team",
    tags,
    contentHtml: p.content.rendered,
  };
}

export async function fetchPosts(page = 1, perPage = 6) {
  const res = await fetch(`${WP_API}/posts?_embed&per_page=${perPage}&page=${page}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const totalPages = Number(res.headers.get("X-WP-TotalPages")) || page;
  const raw = (await res.json()) as WpPostRaw[];
  return { posts: raw.map(mapWpPost), totalPages };
}

export async function fetchPostBySlug(slug: string): Promise<WpPostRaw | null> {
  const res = await fetch(`${WP_API}/posts?slug=${encodeURIComponent(slug)}&_embed`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = (await res.json()) as WpPostRaw[];
  return data[0] ?? null;
}