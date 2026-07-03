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
    <section className="bg-navy-950 text-white">
      <div className="container-tes py-16 lg:py-20">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
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
