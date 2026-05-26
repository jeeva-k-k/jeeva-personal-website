import { cn } from "@/lib/utils";

type SkillCloudProps = {
  items: string[];
  className?: string;
};

export function SkillCloud({ items, className }: SkillCloudProps) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-stone-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
