import { MapPin } from "lucide-react";

type ExperienceCardProps = {
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  highlights: string[];
};

export function ExperienceCard({
  role,
  company,
  period,
  location,
  description,
  highlights,
}: ExperienceCardProps) {
  return (
    <article className="rounded-[8px] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-stone-50">{role}</h3>
          <p className="mt-1 text-lg text-cyan-100">{company}</p>
        </div>
        <p className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-stone-300">
          {period}
        </p>
      </div>
      {location ? (
        <p className="mt-4 flex items-center gap-2 text-sm text-stone-400">
          <MapPin size={16} aria-hidden="true" />
          {location}
        </p>
      ) : null}
      <p className="mt-5 text-base leading-8 text-stone-300">{description}</p>
      <ul className="mt-5 space-y-3 text-sm leading-7 text-stone-300">
        {highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3">
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
