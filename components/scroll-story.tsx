"use client";

import {
  Bot,
  CloudCog,
  FlaskConical,
  LineChart,
  Search,
  ArrowUpRight,
  CheckCircle2,
  Globe,
  Terminal,
  Activity,
  Layers
} from "lucide-react";
import FlowArt, { FlowSection } from "@/components/ui/story-scroll";

const sectionsData = [
  {
    id: "websites",
    num: "01",
    tag: "Development",
    title: "Website and WordPress Execution",
    description:
      "I design and develop responsive, high-performance websites and WordPress systems that serve as reliable digital assets. Focused on user experience, custom Gutenberg blocks, and optimization.",
    bgClass: "from-[#0c0f1e] to-[#04060c]",
    borderClass: "border-indigo-500/20",
    accentColor: "#6366f1",
    textColor: "text-indigo-400",
    glowColor: "rgba(99, 102, 241, 0.15)",
    bullets: [
      "Custom Gutenberg block development",
      "Next.js and React landing pages",
      "Performance optimization & Core Web Vitals",
      "Clean, modern responsive UI design"
    ],
    visual: (
      <div className="relative h-full w-full rounded-2xl border border-indigo-500/20 bg-slate-950/60 p-6 backdrop-blur">
        {/* Top bar mockup */}
        <div className="mb-6 flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-rose-500/80" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="rounded-md bg-slate-900 px-3 py-1 text-xs text-slate-400 font-mono">
            https://zeninhive.com
          </div>
          <div className="h-4 w-4 rounded bg-slate-800" />
        </div>

        {/* Lighthouse performance widget */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 flex flex-col items-center">
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-4 border-emerald-500">
              <span className="text-xl font-bold text-emerald-400">100</span>
            </div>
            <span className="mt-3 text-xs text-slate-400 font-medium">Performance</span>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 flex flex-col items-center">
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-4 border-indigo-500">
              <span className="text-xl font-bold text-indigo-400">98</span>
            </div>
            <span className="mt-3 text-xs text-slate-400 font-medium">SEO & Best Practices</span>
          </div>
        </div>

        {/* Mock WordPress block UI */}
        <div className="mt-5 space-y-3">
          <div className="flex items-center gap-3 rounded-lg border border-indigo-500/10 bg-indigo-500/5 p-3">
            <Globe className="text-indigo-400 shrink-0" size={18} />
            <div className="min-w-0 flex-1">
              <div className="h-2.5 w-24 rounded bg-indigo-400/30" />
              <div className="mt-1.5 h-2 w-32 rounded bg-indigo-400/20" />
            </div>
            <span className="rounded bg-indigo-500/20 px-2 py-0.5 text-[10px] text-indigo-300 font-mono">
              Active
            </span>
          </div>

          <div className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-900/50 p-3">
            <Layers className="text-slate-500 shrink-0" size={18} />
            <div className="min-w-0 flex-1">
              <div className="h-2.5 w-16 rounded bg-slate-700" />
              <div className="mt-1.5 h-2 w-24 rounded bg-slate-800" />
            </div>
            <span className="rounded bg-slate-800 px-2 py-0.5 text-[10px] text-slate-500 font-mono">
              Draft
            </span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "seo",
    num: "02",
    tag: "Visibility",
    title: "Search Visibility & Growth",
    description:
      "I apply structured search engine optimization practices. This covers auditing technical crawling blockers, deploying valid schema markups, on-page structures, and ranking local profiles.",
    bgClass: "from-[#041d24] to-[#020d11]",
    borderClass: "border-teal-500/20",
    accentColor: "#14b8a6",
    textColor: "text-teal-400",
    glowColor: "rgba(20, 184, 166, 0.15)",
    bullets: [
      "JSON-LD structured data and schema markup",
      "Technical crawler auditing and indexing control",
      "Google Business Profile optimization",
      "Semantic content architecture & keyphrase indexing"
    ],
    visual: (
      <div className="relative h-full w-full rounded-2xl border border-teal-500/20 bg-slate-950/60 p-6 backdrop-blur">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-5">
          <h4 className="text-sm font-semibold text-slate-200">SEO Audit Metrics</h4>
          <span className="flex h-2 w-2 rounded-full bg-teal-500" />
        </div>

        {/* Traffic Growth Widget */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-400 uppercase tracking-wider">Organic Impressions</span>
              <h5 className="text-2xl font-bold text-teal-400 mt-1">48.2k</h5>
            </div>
            <span className="rounded bg-teal-500/20 px-2 py-1 text-xs text-teal-300 font-medium">
              +14.8%
            </span>
          </div>
          {/* Simple Sparkline Chart using SVG */}
          <div className="mt-4 h-16 w-full">
            <svg viewBox="0 0 100 30" className="h-full w-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="tealGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,25 Q15,18 30,22 T60,10 T90,5 L100,8 L100,30 L0,30 Z"
                fill="url(#tealGlow)"
              />
              <path
                d="M0,25 Q15,18 30,22 T60,10 T90,5 L100,8"
                fill="none"
                stroke="#14b8a6"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        {/* Schema Status Widget */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-3 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500/10 text-teal-400">
              <CheckCircle2 size={16} />
            </div>
            <div>
              <p className="text-[10px] text-slate-400">JSON-LD</p>
              <p className="text-xs font-semibold text-slate-200">Validated</p>
            </div>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-3 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500/10 text-teal-400">
              <Search size={16} />
            </div>
            <div>
              <p className="text-[10px] text-slate-400">Crawl Health</p>
              <p className="text-xs font-semibold text-slate-200">100% Index</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "ads",
    num: "03",
    tag: "Acquisition",
    title: "Lead Gen & Paid Campaigns",
    description:
      "I execute PPC strategy across Google Ads and Meta Ads Manager. From setting up tracking pixels and conversion actions to aligning landing page messaging to minimize cost-per-lead.",
    bgClass: "from-[#0b172a] to-[#030712]",
    borderClass: "border-blue-500/20",
    accentColor: "#4f46e5",
    textColor: "text-blue-400",
    glowColor: "rgba(79, 70, 229, 0.15)",
    bullets: [
      "Search and display campaign setups",
      "Pixel configuration and conversion tracking",
      "Landing page Conversion Rate Optimization (CRO)",
      "ROAS metrics auditing & budget control"
    ],
    visual: (
      <div className="relative h-full w-full rounded-2xl border border-blue-500/20 bg-slate-950/60 p-6 backdrop-blur">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-5">
          <h4 className="text-sm font-semibold text-slate-200">ROAS Dashboard</h4>
          <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-[10px] text-blue-300 font-mono">
            Active Campaign
          </span>
        </div>

        {/* Ad Metrics Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider">Avg. CPA</span>
            <h5 className="text-xl font-bold text-slate-100 mt-1">$4.20</h5>
            <div className="mt-2 h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full w-3/4 bg-blue-500 rounded-full" />
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider">ROAS</span>
            <h5 className="text-xl font-bold text-indigo-400 mt-1">4.2x</h5>
            <div className="mt-2 h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full w-4/5 bg-indigo-500 rounded-full" />
            </div>
          </div>
        </div>

        {/* Mock Campaign Card */}
        <div className="mt-5 rounded-lg border border-slate-800 bg-slate-900/40 p-4">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="h-3.5 w-28 rounded bg-slate-700" />
              <div className="h-2 w-48 rounded bg-slate-800" />
            </div>
            <LineChart className="text-blue-400" size={18} />
          </div>
          <div className="mt-4 flex items-center justify-between text-xs border-t border-slate-800/60 pt-3 text-slate-400">
            <span>Impressions: 12,480</span>
            <span>Conversions: 88</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "ai-agents",
    num: "04",
    tag: "Automation",
    title: "AI Workflows & LLM Integration",
    description:
      "I map and build practical AI automations. This means engineering prompts, integrating chat assistants into support workflows, deploying automated WhatsApp alert pathways, and scripting content generation models.",
    bgClass: "from-[#120a2b] to-[#070312]",
    borderClass: "border-purple-500/20",
    accentColor: "#a855f7",
    textColor: "text-purple-400",
    glowColor: "rgba(168, 85, 247, 0.15)",
    bullets: [
      "Custom GPT & LLM pipeline scripting",
      "Customer support agent integrations",
      "WhatsApp & Email API event triggers",
      "No-code / code orchestration (Make, Zapier, Python)"
    ],
    visual: (
      <div className="relative h-full w-full rounded-2xl border border-purple-500/20 bg-slate-950/60 p-6 backdrop-blur">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-500/20 text-purple-400">
              <Bot size={12} />
            </div>
            <h4 className="text-xs font-semibold text-slate-200">Zenin Agent Core</h4>
          </div>
          <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live
          </span>
        </div>

        {/* Chat UI simulation */}
        <div className="space-y-3">
          <div className="rounded-lg bg-slate-900/60 p-3 border border-slate-800/80">
            <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
              <span className="font-semibold text-slate-300">User</span>
              <span>• Just now</span>
            </div>
            <p className="mt-1 text-xs text-slate-300">
              How do I route new leads from ads to WhatsApp notifications?
            </p>
          </div>

          <div className="rounded-lg bg-purple-950/30 p-3 border border-purple-500/10">
            <div className="flex items-center gap-1.5 text-[10px] text-purple-300">
              <span className="font-semibold">AI Agent</span>
              <span>• 1s ago</span>
            </div>
            <p className="mt-1 text-xs text-slate-200 leading-5">
              Analyzing webhook structure... Setting up trigger event on ad submission to route payload through LLM extractor and send formatted WhatsApp payload.
            </p>
          </div>
        </div>

        {/* Active node triggers */}
        <div className="mt-4 flex items-center justify-between gap-2 border-t border-slate-800/60 pt-3">
          <span className="text-[10px] text-slate-500 font-mono">Webhook Triggered</span>
          <span className="rounded bg-purple-500/20 px-2 py-0.5 text-[10px] text-purple-300 font-mono">
            OK (200)
          </span>
        </div>
      </div>
    )
  },
  {
    id: "cloud",
    num: "05",
    tag: "Infrastructure",
    title: "Cloud & Workspace IT Operations",
    description:
      "Experienced in enterprise IT administration. This covers identity governance in Microsoft Entra ID, cloud resources in Microsoft Azure, endpoint security deployments with Intune, and Defender monitoring.",
    bgClass: "from-[#0c0d12] to-[#040406]",
    borderClass: "border-sky-500/20",
    accentColor: "#0ea5e9",
    textColor: "text-sky-400",
    glowColor: "rgba(14, 165, 233, 0.15)",
    bullets: [
      "Microsoft Azure cloud administration",
      "Microsoft Entra ID & IAM architecture",
      "Microsoft 365 migrations & Tenant admin",
      "Defender & Intune endpoint management"
    ],
    visual: (
      <div className="relative h-full w-full rounded-2xl border border-sky-500/20 bg-slate-950/60 p-6 backdrop-blur">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-5">
          <h4 className="text-sm font-semibold text-slate-200">Entra & Azure Gateway</h4>
          <Activity className="text-sky-400" size={16} />
        </div>

        {/* Security Compliance widgets */}
        <div className="space-y-3">
          <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/50 p-3">
            <div className="flex items-center gap-3">
              <CloudCog className="text-sky-400" size={18} />
              <div>
                <p className="text-xs font-semibold text-slate-200">Defender Security Score</p>
                <p className="text-[10px] text-slate-400">Identity & Device Compliance</p>
              </div>
            </div>
            <span className="text-sm font-bold text-sky-400">98%</span>
          </div>

          <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/50 p-3">
            <div className="flex items-center gap-3">
              <Terminal className="text-slate-400" size={18} />
              <div>
                <p className="text-xs font-semibold text-slate-200">Active Tenant Sync</p>
                <p className="text-[10px] text-slate-400">Entra ID Connect Directory</p>
              </div>
            </div>
            <span className="rounded bg-sky-500/25 px-2 py-0.5 text-[10px] text-sky-300 font-mono">
              Healthy
            </span>
          </div>
        </div>

        {/* System log terminal view */}
        <div className="mt-4 rounded bg-black p-3 font-mono text-[9px] text-slate-400">
          <p className="text-sky-400">$ az group list --output table</p>
          <p className="mt-1">Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Location&nbsp;&nbsp;&nbsp;Status</p>
          <p>zh-rg-prod&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;eastus&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Succeeded</p>
        </div>
      </div>
    )
  },
  {
    id: "physics",
    num: "06",
    tag: "Science",
    title: "Physics Mindset & Support",
    description:
      "With an MSc in Physics (Distinction), I maintain a research habit in theoretical particle physics. I apply this analytical methodology to digital execution, and guide academic writing and LaTeX compilation.",
    bgClass: "from-[#1a0b16] to-[#070306]",
    borderClass: "border-rose-500/20",
    accentColor: "#f43f5e",
    textColor: "text-rose-400",
    glowColor: "rgba(244, 63, 94, 0.15)",
    bullets: [
      "Mathematical modeling & analytical thinking",
      "LaTeX compilation & layout design",
      "Scientific writing & research editing support",
      "Theoretical particle physics focus"
    ],
    visual: (
      <div className="relative h-full w-full rounded-2xl border border-rose-500/20 bg-slate-950/60 p-6 backdrop-blur">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-5">
          <h4 className="text-sm font-semibold text-slate-200">Theoretical Model Sandbox</h4>
          <FlaskConical className="text-rose-400" size={16} />
        </div>

        {/* Feynman Diagram SVG representation */}
        <div className="flex h-20 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/50 p-4">
          <svg className="h-full w-auto text-slate-400" viewBox="0 0 100 40" fill="none">
            {/* electron lines */}
            <path d="M 10 35 L 35 20" stroke="currentColor" strokeWidth="1.5" />
            <path d="M 10 5 L 35 20" stroke="currentColor" strokeWidth="1.5" />
            {/* photon wavy line */}
            <path d="M 35 20 C 40 20, 42 16, 45 20 C 48 24, 52 20, 55 20 C 58 20, 60 16, 65 20" stroke="#f43f5e" strokeWidth="1.5" />
            {/* quark lines */}
            <path d="M 65 20 L 90 35" stroke="currentColor" strokeWidth="1.5" />
            <path d="M 65 20 L 90 5" stroke="currentColor" strokeWidth="1.5" />
            <text x="3" y="38" className="fill-slate-500 font-serif text-[7px]">e-</text>
            <text x="3" y="8" className="fill-slate-500 font-serif text-[7px]">e+</text>
            <text x="47" y="14" className="fill-rose-400 font-sans text-[7px]">γ</text>
            <text x="91" y="38" className="fill-slate-500 font-serif text-[7px]">q</text>
            <text x="91" y="8" className="fill-slate-500 font-serif text-[7px]">q̄</text>
          </svg>
        </div>

        {/* LaTeX styled code preview */}
        <div className="mt-4 rounded bg-slate-900/50 border border-slate-800 p-3 font-mono text-[9px] text-slate-300">
          <p className="text-rose-400">\begin{"{"}equation{"}"}</p>
          <p className="pl-3">\mathcal{"{"}L{"}"} = -\frac{"{"}1{"}"}{"{"}4{"}"} F___{"{"}\mu\nu{"}"}F^^{"{"}\mu\nu{"}"} + i\bar{"{"}\psi{"}"}\gamma^\mu D_\mu\psi</p>
          <p className="text-rose-400">\end{"{"}equation{"}"}</p>
        </div>
      </div>
    )
  }
];

export function ScrollStory() {
  return (
    <section className="relative bg-transparent py-16 sm:py-24">
      {/* Sticky header structure that will stay at the top or introduce the flow */}
      <div className="mx-auto max-w-7xl px-6 pb-12 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.26em] text-cyan-200/80">
            Core Portfolio
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-stone-50 sm:text-5xl lg:text-6xl">
            My areas of execution & focus.
          </h2>
          <p className="mt-4 text-base leading-8 text-stone-300 sm:text-lg">
            Below is the structured catalog of systems I build, manage, and research. Scroll down to see each fold in detail.
          </p>
        </div>
      </div>

      <FlowArt className="relative">
        {sectionsData.map((section) => {
          return (
            <FlowSection
              key={section.id}
              aria-label={section.title}
              className={`bg-gradient-to-br ${section.bgClass} text-slate-100`}
            >
              {/* Outer boundary shadow + borders for premium feel */}
              <div 
                className="absolute inset-0 z-0 opacity-15"
                style={{
                  backgroundImage: `radial-gradient(circle at 75% 25%, ${section.accentColor}, transparent 45%)`
                }}
              />
              
              <div className="relative z-10 grid h-full w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 my-auto">
                <div className="space-y-6 sm:space-y-8">
                  {/* Category Tag & Numbers */}
                  <div className="flex items-center gap-4">
                    <span 
                      className="flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-bold font-mono"
                      style={{
                        background: `${section.glowColor}`,
                        color: `${section.accentColor}`,
                        border: `1px solid ${section.accentColor}30`
                      }}
                    >
                      {section.num}
                    </span>
                    <span className={`text-xs font-bold uppercase tracking-[0.24em] ${section.textColor}`}>
                      {section.tag}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-4">
                    <h3 className="font-serif text-3xl font-semibold leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
                      {section.title}
                    </h3>
                    <p className="text-base leading-8 text-slate-300 sm:text-lg">
                      {section.description}
                    </p>
                  </div>

                  {/* Bullet Highlights */}
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <CheckCircle2 
                          className="mt-1 shrink-0" 
                          size={16} 
                          style={{ color: section.accentColor }} 
                        />
                        <span className="text-sm leading-relaxed text-slate-200">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Explore button if they want to jump */}
                  <div className="pt-2">
                    <a
                      href="#services"
                      className="group inline-flex items-center gap-2 rounded-full bg-white/5 px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-white border border-white/10 backdrop-blur transition hover:bg-white/10 hover:border-white/20"
                    >
                      View skill map
                      <ArrowUpRight 
                        size={14} 
                        className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" 
                      />
                    </a>
                  </div>
                </div>

                {/* Right Column Custom Simulated Visual */}
                <div className="relative flex h-[320px] w-full items-center justify-center sm:h-[400px] lg:h-auto">
                  {/* Accent glow behind visual */}
                  <div 
                    className="absolute h-72 w-72 rounded-full blur-3xl opacity-20 -z-10"
                    style={{ background: section.accentColor }}
                  />
                  <div className="w-full max-w-[460px] lg:max-w-full">
                    {section.visual}
                  </div>
                </div>
              </div>
            </FlowSection>
          );
        })}
      </FlowArt>
    </section>
  );
}
