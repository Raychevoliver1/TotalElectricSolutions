import type { Milestone } from "@/lib/content";

export default function Timeline({ milestones }: { milestones: Milestone[] }) {
  return (
    <ol className="relative border-l-2 border-navy-100 pl-8 space-y-8">
      {milestones.map((milestone, i) => {
        const isLast = i === milestones.length - 1;
        return (
          <li key={milestone.year + milestone.title} className="relative">
            {/* wire node */}
            <span
              aria-hidden="true"
              className={`absolute -left-[41px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                isLast
                  ? "border-lime-400 bg-lime-400 shadow-[0_0_10px_2px_rgba(190,209,48,0.5)]"
                  : "border-blue-500 bg-white"
              }`}
            />
            <p className="font-display text-sm font-bold uppercase tracking-widest text-blue-600">
              {milestone.year}
            </p>
            <h3 className="mt-1 font-display text-lg sm:text-xl font-semibold text-navy-950">
              {milestone.title}
            </h3>
            <p className="mt-1.5 text-sm sm:text-base text-navy-900/70 leading-relaxed">
              {milestone.body}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
