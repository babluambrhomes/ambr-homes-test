import { PROJECTS } from "@/lib/data";
import { fetchPosts } from "@/lib/blog";

export const BASE_URL = "https://ambrhomes.com";

export type SitemapEntry = {
  url: string;
  lastModified: Date;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
};

const STATIC_PATHS = [
  { path: "", changeFrequency: "weekly" as const, priority: 1.0 },
  { path: "/projects", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/why-ambr-homes", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/blogs", changeFrequency: "weekly" as const, priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly" as const, priority: 0.7 },
];

export async function buildSitemapEntries(): Promise<SitemapEntry[]> {
  const now = new Date();

  const staticRoutes: SitemapEntry[] = STATIC_PATHS.map((r) => ({
    url: `${BASE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const projectRoutes: SitemapEntry[] = PROJECTS.map((p) => ({
    url: `${BASE_URL}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  let blogRoutes: SitemapEntry[] = [];
  try {
    const res = await fetchPosts(1, 100);
    blogRoutes = res.posts.map((post) => ({
      url: `${BASE_URL}/blogs/${post.slug}`,
      lastModified: new Date(post.date || now),
      changeFrequency: "monthly",
      priority: 0.7,
    }));
  } catch {
    // Fallback if WP API is temporarily unavailable
  }

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}

export async function buildSitemapText(): Promise<string> {
  const entries = await buildSitemapEntries();
  return entries.map((e) => e.url).join("\n") + "\n";
}
