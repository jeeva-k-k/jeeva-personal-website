import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-cyan-200/80">
        {eyebrow}
      </p>
      <h2 className="font-serif text-3xl font-semibold tracking-tight text-stone-50 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-stone-300 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
