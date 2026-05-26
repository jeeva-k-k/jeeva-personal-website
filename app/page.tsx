"use client";

import { ArrowRight, Bot, BrainCircuit, CloudCog, GraduationCap, Microscope } from "lucide-react";
import { ContactSection } from "@/components/contact-section";
import { ExperienceCard } from "@/components/experience-card";
import { Reveal } from "@/components/reveal";
import { ScrollStory } from "@/components/scroll-story";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { SiteFooter } from "@/components/site-footer";
import { SkillCloud } from "@/components/skill-cloud";
import { ZeninHero } from "@/components/ui/zenin-hero";


import {
  academicSupport,
  agentTypes,
  aiCapabilities,
  certifications,
  cloudSkills,
  education,
  experiences,
  leadership,
  marketingSkills,
  portfolioFocus,
  services,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      <main className="portfolio-light overflow-hidden bg-transparent text-slate-900">
        <ZeninHero />

        <section id="about" className="px-6 py-24 sm:py-32">
          <Reveal className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeading
              eyebrow="About Jeeva"
              title="A portfolio across cloud engineering, AI workflows, websites, marketing, and physics."
              description="Jeeva K K is the Managing Director of Zenin Hive and a tech + marketing hybrid professional with hands-on experience across cloud engineering, Microsoft 365 administration, AI tools, websites, SEO, digital marketing, automation, and academic research support."
            />
            <div className="grid gap-5 text-base leading-8 text-stone-300">
              <p>
                I started from Physics, completed an MSc Physics with distinction, and still keep an independent interest in theoretical particle physics research. That background influences how I think: structured, curious, mathematical, and comfortable with complex systems.
              </p>
              <p>
                My current work is a mix of founder responsibilities at Zenin Hive, practical digital execution, AI automation exploration, cloud and IT knowledge, and research guidance. This site is meant to show that mix clearly, without turning everything into a sales page.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Managing Director at Zenin Hive",
                  "Cloud Engineer",
                  "AI Consultant and AI Agent Builder",
                  "WordPress Developer and SEO Specialist",
                  "Digital Marketing Strategist",
                  "Physicist and independent researcher",
                ].map((item) => (
                  <div key={item} className="rounded-[8px] border border-white/10 bg-white/[0.045] p-4 text-sm text-stone-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section id="zenin-hive" className="px-6 py-24 sm:py-32">
          <Reveal className="mx-auto max-w-7xl rounded-[8px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-10 lg:p-14">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <SectionHeading
                eyebrow="What I Am Doing Now"
                title="Founder work, cloud experience, AI experiments, and physics research."
                description="Zenin Hive is my current founder track, but it sits alongside a broader technical portfolio: cloud engineering experience, websites, SEO, marketing execution, AI agents, automation ideas, academic support, and independent physics study."
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {portfolioFocus.map((item) => (
                  <div key={item.title} className="rounded-[8px] border border-white/10 bg-black/20 p-5">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/70">
                      {item.eyebrow}
                    </p>
                    <h3 className="text-xl font-semibold text-stone-50">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-stone-300">{item.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-white/[0.07] px-3 py-1 text-xs text-stone-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <ScrollStory />


        <section id="services" className="px-6 py-24 sm:py-32">
          <Reveal className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Skills"
              title="The skills I use across projects, founder work, IT, and research support."
              description="This is not just a list of services. It is the skill map I currently work with: web, WordPress, SEO, ads, AI automation, cloud administration, IT support, security tools, and academic research guidance."
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </Reveal>
        </section>

        <section id="ai-automation" className="px-6 py-24 sm:py-32">
          <Reveal className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionHeading
              eyebrow="AI & Automation"
              title="AI tools and agents I am learning, building, and applying."
              description="My AI work is practical: understanding tools, planning workflows, building prompts, mapping automation ideas, and designing useful agents for support, content, WhatsApp, email, and marketing."
            />
            <div className="space-y-8">
              <SkillCloud items={aiCapabilities} />
              <div className="rounded-[8px] border border-white/10 bg-white/[0.045] p-6">
                <h3 className="text-xl font-semibold text-stone-50">AI agents Jeeva can build or guide</h3>
                <SkillCloud items={agentTypes} className="mt-5" />
              </div>
            </div>
          </Reveal>
        </section>

        <section className="px-6 py-24 sm:py-32">
          <Reveal className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
            <div className="rounded-[8px] border border-white/10 bg-white/[0.045] p-6 sm:p-8">
              <SectionHeading
                eyebrow="Cloud & IT"
                title="Cloud and IT skills from actual support and admin work."
                description="This part of my portfolio comes from Global IT experience: Microsoft 365, Azure administration, identity, endpoint management, Defender, SIEM exposure, and security monitoring."
              />
              <SkillCloud items={cloudSkills} className="mt-8" />
            </div>
            <div className="rounded-[8px] border border-white/10 bg-white/[0.045] p-6 sm:p-8">
              <SectionHeading
                eyebrow="Digital Marketing"
                title="Digital marketing skills I use through Zenin Hive."
                description="I work with SEO, Google Business Profile, Google Ads, Meta Ads, social media, content strategy, landing pages, and lead generation campaigns."
              />
              <SkillCloud items={marketingSkills} className="mt-8" />
            </div>
          </Reveal>
        </section>

        <section className="px-6 py-24 sm:py-32">
          <Reveal className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.95fr]">
            <SectionHeading
              eyebrow="Research & Academic Support"
              title="Academic support as mentoring, structure, review, and research guidance."
              description="I support students through ethical guidance: project structuring, research planning, scientific writing, editing, LaTeX preparation, physics mentoring, and data analysis support when relevant."
            />
            <SkillCloud items={academicSupport} />
          </Reveal>
        </section>

        <section id="research" className="px-6 py-24 sm:py-32">
          <Reveal className="mx-auto max-w-7xl rounded-[8px] border border-white/10 bg-[linear-gradient(135deg,rgba(139,92,246,0.14),rgba(20,184,166,0.08),rgba(255,255,255,0.035))] p-6 sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div className="flex h-28 w-28 items-center justify-center rounded-full border border-violet-200/20 bg-violet-200/10 text-violet-100">
                <Microscope size={42} aria-hidden="true" />
              </div>
              <SectionHeading
                eyebrow="Physics Research"
                title="Physics is part of how I think, not a decorative label."
                description="Alongside my professional work, I keep an active personal interest in theoretical particle physics research. It reflects my curiosity for fundamental science, mathematical reasoning, scientific writing, and complex systems."
              />
            </div>
          </Reveal>
        </section>

        <section className="px-6 py-24 sm:py-32">
          <Reveal className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <SectionHeading
              eyebrow="Experience"
              title="What I have done professionally so far."
            />
            <div className="grid gap-5">
              {experiences.map((experience) => (
                <ExperienceCard key={`${experience.company}-${experience.period}`} {...experience} />
              ))}
            </div>
          </Reveal>
        </section>

        <section className="px-6 py-24 sm:py-32">
          <Reveal className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <SectionHeading eyebrow="Education" title="Academic background in physics." />
            </div>
            <div className="grid gap-5 lg:col-span-2">
              {education.map((item) => (
                <article key={item.degree} className="rounded-[8px] border border-white/10 bg-white/[0.045] p-6">
                  <div className="flex items-start gap-4">
                    <GraduationCap className="mt-1 text-cyan-100" size={24} aria-hidden="true" />
                    <div>
                      <h3 className="text-xl font-semibold text-stone-50">{item.degree}</h3>
                      <p className="mt-1 text-stone-300">{item.school}</p>
                      <p className="mt-3 text-sm text-stone-400">{item.period}</p>
                      <p className="mt-3 text-sm leading-7 text-stone-300">{item.details}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="px-6 py-24 sm:py-32">
          <Reveal className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
            <div className="rounded-[8px] border border-white/10 bg-white/[0.045] p-6 sm:p-8">
              <SectionHeading eyebrow="Certifications" title="Courses and credentials I have added along the way." />
              <ul className="mt-8 grid gap-3 text-sm text-stone-300">
                {certifications.map((certification) => (
                  <li key={certification} className="rounded-[8px] border border-white/10 bg-black/20 p-4">
                    {certification}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[8px] border border-white/10 bg-white/[0.045] p-6 sm:p-8">
              <SectionHeading eyebrow="Leadership" title={`${leadership.role}, ${leadership.organization}`} description={leadership.description} />
              <p className="mt-5 text-sm text-stone-400">{leadership.period}</p>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-stone-300">
                {leadership.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-200" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        <section id="work-in-progress" className="px-6 py-24 sm:py-32">
          <Reveal className="mx-auto max-w-7xl rounded-[8px] border border-white/10 bg-white/[0.045] p-6 sm:p-10">
            <SectionHeading
              eyebrow="Current Focus"
              title="What I am building, practicing, and improving right now."
              description="I do not want to overstate a project portfolio that is not ready yet. For now, this section shows the areas I am actively practicing and turning into stronger public work over time."
            />
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                {
                  icon: Bot,
                  title: "AI agent workflows",
                  description:
                    "Designing practical support, chatbot, WhatsApp, content, and email automation ideas.",
                },
                {
                  icon: CloudCog,
                  title: "Cloud and security notes",
                  description:
                    "Strengthening Azure, Microsoft 365, identity, endpoint, SIEM, and cloud security knowledge.",
                },
                {
                  icon: BrainCircuit,
                  title: "Physics and research writing",
                  description:
                    "Continuing independent theoretical physics reading, research structuring, and LaTeX practice.",
                },
              ].map(({ icon: Icon, title, description }) => (
                <article key={title} className="rounded-[8px] border border-white/10 bg-black/20 p-5">
                  <Icon className="mb-5 text-cyan-100" size={24} aria-hidden="true" />
                  <h3 className="text-xl font-semibold text-stone-50">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone-300">{description}</p>
                </article>
              ))}
            </div>
            <a href="#contact" className="primary-button mt-8 w-full sm:w-fit">
              Start a Conversation
              <ArrowRight size={18} />
            </a>
          </Reveal>
        </section>

        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
