import CircuitBackdrop from "@/components/CircuitBackdrop";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <CircuitBackdrop className="hidden sm:block absolute inset-y-0 right-0 h-full w-full max-w-2xl text-navy-300" />
      <div className="container-tes relative py-10 sm:py-14 lg:py-20">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold tracking-tight max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg text-navy-200">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
