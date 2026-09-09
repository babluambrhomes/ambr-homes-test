"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { BlogPostPage } from "@/components/blog/BlogPostPage";
import type { BlogCard, BlogPostDetail } from "@/lib/blog";
import { fetchPostBySlug, fetchPosts, mapWpPostDetail } from "@/lib/blog";

type State =
  | { status: "loading" }
  | { status: "success"; post: BlogPostDetail; related: BlogCard[] }
  | { status: "error"; message: string };

export default function BlogRoute() {
  const { slug } = useParams<{ slug: string }>();
  const [state, setState] = useState<State>({ status: "loading" });

  useEffect(() => {
    (async () => {
      setState({ status: "loading" });
      try {
        const raw = await fetchPostBySlug(slug);
        if (!raw) {
          setState({ status: "error", message: "Article not found." });
          return;
        }
        const relatedPosts = await fetchPosts(1, 3);
        setState({
          status: "success",
          post: mapWpPostDetail(raw),
          related: relatedPosts.posts.filter((p) => p.slug !== slug).slice(0, 3),
        });
      } catch (e) {
        setState({
          status: "error",
          message: e instanceof Error ? e.message : "Unknown error",
        });
      }
    })();
  }, [slug]);

  if (state.status === "loading") {
    return (
      <section className="wrap flex min-h-[50vh] items-center justify-center pt-40 text-sm text-muted">
        Loading article…
      </section>
    );
  }

  if (state.status === "error") {
    return (
      <section className="wrap flex min-h-[50vh] flex-col items-center justify-center gap-4 pt-40 text-center">
        <p className="text-sm text-muted">{state.message}</p>
        <Link href="/blogs" className="tlink inline-flex items-center gap-2 text-sm">
          <ArrowLeft size="15" />
          Back to all articles
        </Link>
      </section>
    );
  }

  return <BlogPostPage post={state.post} related={state.related} />;
}