import { Code2, Link, Mail, MapPin, Send } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/data";

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Want to talk about work, research, or a project?"
            description="Reach out for portfolio conversations, Zenin Hive work, AI automation ideas, website projects, cloud/IT discussions, or ethical academic research guidance."
          />
          <div className="mt-10 space-y-4 text-stone-300">
            <a href={`mailto:${siteConfig.email}`} className="contact-link">
              <Mail size={18} />
              {siteConfig.email}
            </a>
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="contact-link">
              <Link size={18} />
              LinkedIn
            </a>
            <a href={siteConfig.github} target="_blank" rel="noreferrer" className="contact-link">
              <Code2 size={18} />
              GitHub
            </a>
            <p className="contact-link">
              <MapPin size={18} />
              {siteConfig.location}
            </p>
          </div>
        </div>
        <form className="rounded-[8px] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
          {/* TODO: Integrate with an email service or CRM endpoint. */}
          <div className="grid gap-5">
            <label className="grid gap-2 text-sm font-medium text-stone-200">
              Name
              <input
                type="text"
                name="name"
                className="form-field"
                placeholder="Your name"
                autoComplete="name"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-stone-200">
              Email
              <input
                type="email"
                name="email"
                className="form-field"
                placeholder="you@example.com"
                autoComplete="email"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-stone-200">
              Message
              <textarea
                name="message"
                className="form-field min-h-36 resize-y"
                placeholder="Tell me what you want to discuss."
              />
            </label>
            <button type="submit" className="primary-button w-full sm:w-fit">
              Submit
              <Send size={17} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
