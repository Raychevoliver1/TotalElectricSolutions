import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import IconBadge from "@/components/IconBadge";
import ClientMarquee from "@/components/ClientMarquee";
import { getSite, getServices, getProjects } from "@/lib/content";

export default function Home() {
  const site = getSite();
  const services = getServices();
  const projects = getProjects().slice(0, 3);

  return (
    <>
      {/* Image-first hero: a real project fills the screen straight away */}
      <section className="relative isolate flex min-h-[78vh] items-end overflow-hidden bg-navy-950 text-white lg:min-h-[86vh]">
        <Image
          src="/images/projects/the-trampery.jpg"
          alt="Commercial lighting and electrical fit-out by Total Electric Solutions"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Mobile: darken bottom-up for legibility. Desktop: only the left third, so the photo stays bright on the right. */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/25 lg:hidden" />
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-navy-950 via-navy-950/70 to-navy-950/5" />

        <div className="container-tes relative py-12 sm:py-16 lg:py-24">
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {site.heroHeading}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-navy-100">{site.heroSubheading}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-blue-700"
            >
              Enquire About Our Services
            </Link>
            <Link
              href="/projects/"
              className="inline-flex items-center justify-center rounded-md border-2 border-white/50 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white hover:text-navy-950"
            >
              See Our Projects
            </Link>
          </div>
        </div>
      </section>

      <ClientMarquee />

      {/* Projects moved up: visitors read the work before the words */}
      <section className="py-10 sm:py-14 lg:py-20">
        <div className="container-tes">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Our Work
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-navy-950 sm:text-4xl">
                Recent Projects
              </h2>
            </div>
            <Link
              href="/projects/"
              className="font-semibold text-blue-600 transition-colors hover:text-blue-700"
            >
              View all projects &rarr;
            </Link>
          </div>

          <div className="mt-6 grid gap-4 sm:mt-10 sm:gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href="/projects/"
                className="group relative aspect-[4/3] overflow-hidden rounded-xl"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"
                />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-300">
                    {project.category}
                  </p>
                  <p className="mt-1 font-display text-lg font-bold text-white">
                    {project.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-navy-50 py-10 sm:py-14 lg:py-20">
        <div className="container-tes">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                What We Do
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-navy-950 sm:text-4xl">
                Our Services
              </h2>
            </div>
            <Link
              href="/services/"
              className="font-semibold text-blue-600 transition-colors hover:text-blue-700"
            >
              View all services &rarr;
            </Link>
          </div>

          <div className="mt-6 grid gap-4 sm:mt-10 sm:gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href="/services/"
                className="group relative flex gap-4 overflow-hidden rounded-xl border border-navy-100 bg-white p-5 transition-all hover:border-blue-400 hover:shadow-lg sm:p-6 lg:p-7"
              >
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"
                />
                <IconBadge name={service.icon} variant="blue" size="md" className="shrink-0" />
                <div>
                  <h3 className="font-display text-lg font-bold text-navy-950 group-hover:text-blue-700">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-900/70">
                    {service.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us, with the headline stats folded in */}
      <section className="py-10 sm:py-14 lg:py-20">
        <div className="container-tes">
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 border-b border-navy-100 pb-8 sm:pb-10 lg:grid-cols-4">
            {site.stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <IconBadge name={stat.icon} variant="navy-outline" size="sm" />
                <div>
                  <p className="font-display text-2xl font-bold leading-tight text-blue-600 sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="text-xs leading-snug text-navy-900/70 sm:text-sm">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 max-w-2xl sm:mt-12">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Why Choose Us
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-950 sm:text-4xl">
              A complete electrical package, handled in-house
            </h2>
          </div>

          <div className="mt-6 grid gap-4 sm:mt-10 sm:gap-6 lg:gap-8 md:grid-cols-3">
            {site.whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-xl border border-navy-100 p-5 sm:p-6 lg:p-7"
              >
                <IconBadge name={item.icon} variant="navy" size="lg" className="shrink-0" />
                <div>
                  <h3 className="font-display text-lg font-bold text-navy-950 sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-900/70 sm:text-base">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
