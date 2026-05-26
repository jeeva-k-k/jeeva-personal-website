import { Code2, Link, Mail } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-[#f6f8f3] px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Portfolio, founder work, cloud, AI, and physics.
        </p>
        <div className="flex items-center gap-3">
          <a href={`mailto:${siteConfig.email}`} aria-label="Email Jeeva K K" className="footer-link">
            <Mail size={18} />
          </a>
          <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="footer-link">
            <Link size={18} />
          </a>
          <a href={siteConfig.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="footer-link">
            <Code2 size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
