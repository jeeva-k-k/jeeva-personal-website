import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SamplePhysicsSimulation } from "@/components/blog/sample-physics-simulation";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import Link from "next/link";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

const blogDir = path.join(process.cwd(), "content/blog");

// Generate static params for Next.js to pre-render the pages
export async function generateStaticParams() {
  if (!fs.existsSync(blogDir)) {
    return [];
  }

  const files = fs.readdirSync(blogDir);
  return files
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(/\.mdx?$/, ""),
    }));
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  
  // Try reading both .md and .mdx extensions
  let filePath = path.join(blogDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(blogDir, `${slug}.mdx`);
  }

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContent);

  // Parse markdown to HTML string using 'marked'
  const rawHtml = await marked.parse(content);

  // Split content by our custom placeholder tokens
  const htmlParts = rawHtml.split("<p>[physics-simulation]</p>");

  return (
    <>
      <SiteHeader />
      <main className="portfolio-light min-h-screen bg-transparent pt-32 pb-24 text-slate-100">
        <article className="mx-auto max-w-3xl px-6 sm:px-8">
          
          {/* Back button */}
          <Link 
            href="/blog"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-400 transition hover:text-white mb-8"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            Back to articles
          </Link>

          {/* Heading metadata */}
          <header className="mb-10">
            <h1 className="font-serif text-3xl font-semibold tracking-tight text-stone-50 sm:text-4xl lg:text-5xl leading-tight">
              {data.title || "Untitled Post"}
            </h1>
            
            <div className="mt-6 flex flex-wrap items-center gap-6 border-y border-white/10 py-4 text-sm text-stone-400">
              <span className="flex items-center gap-2">
                <User size={14} />
                {data.author || "Jeeva K K"}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={14} />
                {new Date(data.date || "2026-05-26").toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={14} />
                5 min read
              </span>
            </div>
          </header>

          {/* HTML rendered sections, injecting simulation component */}
          <div className="prose prose-invert prose-indigo max-w-none leading-8 text-stone-300">
            {htmlParts.map((part, index) => (
              <div key={index}>
                <div dangerouslySetInnerHTML={{ __html: part }} />
                {index < htmlParts.length - 1 && <SamplePhysicsSimulation />}
              </div>
            ))}
          </div>

          {/* Footer Tags */}
          {data.tags && data.tags.length > 0 && (
            <div className="mt-12 flex flex-wrap gap-2 border-t border-white/10 pt-6">
              {data.tags.map((tag: string) => (
                <span 
                  key={tag}
                  className="rounded-full bg-white/[0.04] border border-white/10 px-3 py-1 text-xs text-stone-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

        </article>
      </main>
      <SiteFooter />
    </>
  );
}
