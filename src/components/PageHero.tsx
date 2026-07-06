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
      <div className="container-tes relative grid items-center gap-6 py-10 sm:py-14 lg:grid-cols-[1fr_20rem] lg:py-20">
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            {eyebrow}
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-lg text-navy-200">{subtitle}</p>
          )}
        </div>
        {/* Circuit art lives in its own column so it never sits under the text */}
        <div className="relative hidden h-full min-h-40 lg:block">
          <CircuitBackdrop className="absolute inset-0 h-full w-full text-navy-700" />
        </div>
      </div>
    </section>
  );
}
