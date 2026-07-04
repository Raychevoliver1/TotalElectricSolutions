import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { getProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "A selection of commercial electrical and lighting projects delivered by Total Electric Solutions, including Capco, Paddy Power and John Brown Media.",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Projects we're proud of"
        subtitle="A selection of the commercial electrical and lighting installations we've delivered for clients across London and the South East."
      />

      <section className="py-10 sm:py-14 lg:py-20">
        <div className="container-tes grid gap-5 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.slug} className="group overflow-hidden rounded-xl border border-navy-100">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                  {project.category}
                </p>
                <h2 className="mt-1 font-display text-xl font-semibold text-navy-950">
                  {project.name}
                </h2>
                <p className="mt-2 text-sm text-navy-900/70">{project.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
