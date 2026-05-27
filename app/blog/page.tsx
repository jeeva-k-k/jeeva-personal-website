import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

interface PostMeta {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  author: string;
}

export const revalidate = 3600; // Revalidate every hour

function getBlogPosts(): PostMeta[] {
  const blogDir = path.join(process.cwd(), "content/blog");
  
  if (!fs.existsSync(blogDir)) {
    fs.mkdirSync(blogDir, { recursive: true });
    return [];
  }

  const files = fs.readdirSync(blogDir);
  
  const posts = files
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(blogDir, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContent);
      
      return {
        slug: file.replace(/\.mdx?$/, ""),
        title: data.title || "Untitled Post",
        date: data.date || "2026-05-26",
        summary: data.summary || "",
        tags: data.tags || [],
        author: data.author || "Jeeva K K",
      };
    });

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function BlogIndexPage() {
  const posts = getBlogPosts();

  return (
    <>
      <SiteHeader />
      <main className="portfolio-light min-h-screen overflow-hidden bg-transparent pt-32 pb-24 text-slate-100">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          
          {/* Header */}
          <div className="mb-16">
            <Link 
              href="/"
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-400 transition hover:text-white"
            >
              <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
              Back to main portfolio
            </Link>
            <h1 className="font-serif mt-6 text-4xl font-semibold tracking-tight text-stone-50 sm:text-5xl lg:text-6xl">
              Blog & Thoughts
            </h1>
            <p className="mt-4 text-base leading-8 text-stone-300 sm:text-lg max-w-2xl">
              A personal space to document experiments, theoretical physics concepts, IT systems notes, and digital marketing strategies.
            </p>
          </div>

          {/* Posts Grid */}
          {posts.length === 0 ? (
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-12 text-center backdrop-blur">
              <p className="text-stone-400">No blog posts found. Check back soon!</p>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2">
              {posts.map((post) => (
                <article 
                  key={post.slug}
                  className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-gradient-to-br from-[#0c0f1e]/80 to-[#04060c]/90 p-6 shadow-2xl backdrop-blur-xl transition duration-300 hover:border-indigo-500/40 hover:shadow-indigo-500/5"
                >
                  <div>
                    {/* Meta info */}
                    <div className="flex items-center gap-4 text-xs text-stone-400">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={12} />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={12} />
                        5 min read
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="font-serif mt-4 text-2xl font-semibold text-stone-50 transition group-hover:text-indigo-400">
                      <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        {post.title}
                      </Link>
                    </h2>

                    {/* Summary */}
                    <p className="mt-3 text-sm leading-6 text-stone-300">
                      {post.summary}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="rounded-full bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 text-xs text-indigo-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          )}

        </div>
      </main>
      <SiteFooter />
    </>
  );
}
