"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Link } from "lucide-react";
import type { CSSProperties } from "react";
import { navItems, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

const wordVariants: Variants = {
  hidden: { y: 34, opacity: 0, filter: "blur(10px)" },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.075,
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

type WordsPullUpProps = {
  text: string;
  className?: string;
};

export function WordsPullUp({ text, className }: WordsPullUpProps) {
  return (
    <span className={cn("inline-flex flex-wrap gap-x-4 gap-y-2 overflow-hidden", className)}>
      {text.split(" ").map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          custom={index}
          variants={wordVariants}
          initial="hidden"
          animate="visible"
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export function WordsPullUpMultiStyle() {
  const words = [
    { text: "cloud", className: "text-[#f4ead7]" },
    { text: "AI", className: "text-[#61d5c7]" },
    { text: "physics", className: "text-[#9fb7ff]" },
  ];

  return (
    <span className="inline-flex flex-wrap gap-x-4 gap-y-2 overflow-hidden">
      {words.map((word, index) => (
        <motion.span
          key={word.text}
          custom={index}
          variants={wordVariants}
          initial="hidden"
          animate="visible"
          className={cn("inline-block", word.className)}
        >
          {word.text}
        </motion.span>
      ))}
    </span>
  );
}

export function ZeninHero() {
  return (
    <section id="home" className="min-h-screen bg-[#f8fafc] px-3 py-3 text-[#f3f4f6] sm:px-5 sm:py-5">
      <div className="hero-shell relative min-h-[calc(100vh-24px)] overflow-hidden rounded-[28px] border border-slate-800 bg-[#030712] shadow-2xl shadow-slate-950/25 sm:min-h-[calc(100vh-40px)] sm:rounded-[36px]">
        <div className="hero-aurora" aria-hidden="true" />
        <video
          className="absolute inset-0 z-[1] h-full w-full object-cover opacity-35 mix-blend-screen"
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-particles" aria-hidden="true">
          {Array.from({ length: 22 }).map((_, index) => (
            <span key={index} style={{ "--i": index } as CSSProperties} />
          ))}
        </div>
        <div className="hero-noise" aria-hidden="true" />
        <div className="absolute inset-0 z-[4] bg-[linear-gradient(180deg,rgba(3,7,18,0.18),rgba(3,7,18,0.22)_38%,rgba(3,7,18,0.88))]" />

        <nav
          aria-label="Hero navigation"
          className="absolute left-1/2 top-5 z-20 hidden -translate-x-1/2 rounded-full border border-white/10 bg-black/40 px-3 py-2 shadow-xl shadow-slate-950/20 backdrop-blur-xl lg:block"
        >
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/60"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="relative z-10 flex min-h-[calc(100vh-24px)] flex-col justify-between p-5 sm:min-h-[calc(100vh-40px)] sm:p-8 lg:p-10">
          <div className="flex items-start justify-between gap-6">
            <a href="#home" className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur">
              Jeeva K K
            </a>
            <div className="flex gap-2">
              <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" aria-label="Jeeva K K on LinkedIn" className="icon-button">
                <Link size={18} />
              </a>
            </div>
          </div>

          <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-indigo-400">
                Portfolio / Founder / Cloud / AI / Physics
              </p>
              <h1 className="font-serif max-w-6xl text-balance text-5xl font-semibold leading-[0.94] tracking-normal text-white sm:text-6xl lg:text-7xl xl:text-8xl">
                <span className="block hero-title-line">Jeeva K K</span>{" "}
                <span className="block hero-title-line hero-title-line-delay-1">
                  <span className="text-slate-100">Cloud.</span>{" "}
                  <span className="text-indigo-400">AI.</span>{" "}
                  <span className="text-rose-400">Physics.</span>
                </span>{" "}
                <span className="block hero-title-line hero-title-line-delay-2">Digital execution.</span>
              </h1>
            </div>

            <div className="max-w-xl justify-self-end">
              <p className="text-base leading-8 text-slate-300 sm:text-lg">
                I&apos;m Jeeva K K, Managing Director of Zenin Hive, cloud engineer, AI consultant, WordPress developer, SEO specialist, and physicist. This portfolio collects what I do, what I have worked on, and what I am currently learning across technology, marketing, automation, and theoretical physics.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href="#work-in-progress" className="primary-button">
                  Current Focus
                  <ArrowRight size={18} />
                </a>
                <a href="#about" className="secondary-button">
                  About Me
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col justify-between gap-5 border-t border-white/10 pt-5 text-sm text-slate-400 md:flex-row md:items-center">
            <p className="max-w-md">
              Based in Bangalore, working across Zenin Hive, cloud operations, AI workflows, websites, SEO, and independent physics research.
            </p>
            <p className="text-slate-500">Founder work / Technical skills / Research curiosity</p>
          </div>
        </div>
      </div>
    </section>
  );
}
