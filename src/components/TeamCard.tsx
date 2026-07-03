import type { TeamMember } from "@/lib/content";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-navy-100 p-5">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy-600 font-display text-lg font-semibold text-white">
        {initials(member.name)}
      </div>
      <div>
        <p className="font-display text-base font-semibold text-navy-950">{member.name}</p>
        <p className="text-sm text-navy-900/70">{member.role}</p>
      </div>
    </div>
  );
}
