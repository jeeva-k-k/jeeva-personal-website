"use client";

import {
  BookOpenCheck,
  Bot,
  BrainCircuit,
  Cloud,
  LifeBuoy,
  Megaphone,
  MonitorSmartphone,
  MousePointerClick,
  PanelsTopLeft,
  PenTool,
  Search,
  Share2,
  ShieldCheck,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, LucideIcon> = {
  BookOpenCheck,
  Bot,
  BrainCircuit,
  Cloud,
  LifeBuoy,
  Megaphone,
  MonitorSmartphone,
  MousePointerClick,
  PanelsTopLeft,
  PenTool,
  Search,
  Share2,
  ShieldCheck,
  Sparkles,
  Workflow,
};

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
};

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  const Icon = iconMap[icon] ?? Sparkles;

  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group min-h-[218px] rounded-[8px] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl"
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-[8px] border border-cyan-200/20 bg-cyan-200/10 text-cyan-100 transition-colors group-hover:border-cyan-200/40 group-hover:bg-cyan-200/15">
        <Icon size={22} aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold text-stone-50">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-stone-300">{description}</p>
    </motion.article>
  );
}
