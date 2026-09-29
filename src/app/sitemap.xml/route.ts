import { buildSitemapText } from "@/lib/sitemap";

export const dynamic = "force-dynamic";

export async function GET() {
  return new Response(await buildSitemapText(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
