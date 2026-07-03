import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { getSite, getServices, getProjects } from "@/lib/content";

export default function Home() {
  const site = getSite();
  const services = getServices();
  const projects = getProjects().slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/projects/capco.jpg"
            alt=""
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/95 to-navy-950/70" />
        </div>

        <div className="container-tes relative py-24 lg:py-32">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
            {site.tagline}
          </p>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight max-w-3xl">
            {site.heroHeading}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-navy-200">{site.heroSubheading}</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center rounded-md bg-blue-500 px-7 py-3.5 text-sm font-bold text-white hover:bg-blue-600 transition-colors"
            >
              Enquire About Our Services
            </Link>
            <Link
              href="/projects/"
              className="inline-flex items-center justify-center rounded-md border-2 border-white/40 px-7 py-3.5 text-sm font-bold text-white hover:bg-white hover:text-navy-950 transition-colors"
            >
              See Our Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-navy-100">
        <div className="container-tes py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {site.stats.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <p className="font-display text-3xl sm:text-4xl font-bold text-navy-600">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-navy-900/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container-tes">
          <div className="max-w-2xl">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-navy-500">
              Why Choose Us
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-navy-950">
              A complete electrical package, handled in-house
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {site.whyChooseUs.map((item, i) => (
              <div key={item.title} className="rounded-xl border border-navy-100 p-7">
                <span className="font-display text-4xl font-bold text-blue-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-navy-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-navy-900/70 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-50">
        <div className="container-tes">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div className="max-w-2xl">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-navy-500">
                What We Do
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-navy-950">
                Our Services
              </h2>
            </div>
            <Link
              href="/services/"
              className="font-semibold text-navy-600 hover:text-blue-600 transition-colors"
            >
              View all services &rarr;
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href="/services/"
                className="group rounded-xl bg-white border border-navy-100 p-7 hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <h3 className="font-display text-lg font-semibold text-navy-950 group-hover:text-navy-600">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-navy-900/70 leading-relaxed">
                  {service.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-tes">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div className="max-w-2xl">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-navy-500">
                Our Work
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-navy-950">
                Recent Projects
              </h2>
            </div>
            <Link
              href="/projects/"
              className="font-semibold text-navy-600 hover:text-blue-600 transition-colors"
            >
              View all projects &rarr;
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-lime-400">
                    {project.category}
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold text-white">
                    {project.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
