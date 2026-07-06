import Icon from "@/components/Icon";
import type { IconName } from "@/lib/icons";

const VARIANTS = {
  navy: "bg-navy-700 text-white",
  blue: "bg-blue-600 text-white",
  "navy-outline": "bg-navy-50 text-navy-700",
  "on-dark": "bg-white/10 text-blue-300",
} as const;

const SIZES = {
  sm: { box: "h-9 w-9", icon: "h-4.5 w-4.5" },
  md: { box: "h-12 w-12", icon: "h-6 w-6" },
  lg: { box: "h-14 w-14", icon: "h-7 w-7" },
} as const;

export default function IconBadge({
  name,
  variant = "navy",
  size = "md",
  className = "",
}: {
  name: IconName | string;
  variant?: keyof typeof VARIANTS;
  size?: keyof typeof SIZES;
  className?: string;
}) {
  const { box, icon } = SIZES[size];
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-lg ${box} ${VARIANTS[variant]} ${className}`}
    >
      <Icon name={name} className={icon} />
    </span>
  );
}
