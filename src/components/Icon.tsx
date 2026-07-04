import { ICONS, type IconName } from "@/lib/icons";

export default function Icon({
  name,
  className,
}: {
  name: IconName | string;
  className?: string;
}) {
  const Cmp = ICONS[name as IconName] ?? ICONS.zap;
  return <Cmp className={className} aria-hidden="true" />;
}
