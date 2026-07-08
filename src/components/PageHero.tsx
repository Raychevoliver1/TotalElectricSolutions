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
      <div className="container-tes py-10 sm:py-14 lg:py-20">
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
    </section>
  );
}
