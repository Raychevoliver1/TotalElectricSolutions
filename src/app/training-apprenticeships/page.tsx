import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import IconBadge from "@/components/IconBadge";
import Icon from "@/components/Icon";
import { getTraining, getSite } from "@/lib/content";

export const metadata: Metadata = {
  title: "Training & Apprenticeships",
  description:
    "Total Electric Solutions has supported apprenticeships through the JTL Training Scheme since 2006, training young people to NICEIC standards on live commercial sites.",
};

export default function TrainingPage() {
  const training = getTraining();
  const site = getSite();

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={training.heading}
        subtitle={training.intro}
      />

      <section className="py-10 sm:py-14 lg:py-20">
        <div className="container-tes grid gap-8 lg:gap-12 lg:grid-cols-2 lg:items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
              <Image
                src="/images/training-1.jpg"
                alt="Total Electric Solutions apprentice on site"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl mt-8">
              <Image
                src="/images/training-2.jpg"
                alt="Total Electric Solutions apprenticeship training"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <div className="flex gap-4">
              <IconBadge name="graduation-cap" variant="navy" size="md" className="shrink-0" />
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-navy-950">
                Real sites, real skills
              </h2>
            </div>
            <p className="mt-4 text-navy-900/75 leading-relaxed">{training.body}</p>
            <div className="mt-6 sm:mt-8 rounded-xl bg-navy-50 border border-navy-100 p-5 sm:p-6">
              <p className="text-navy-900/80">{training.cta}</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-4 inline-flex items-center gap-2 justify-center rounded-md bg-navy-950 px-6 py-3 text-sm font-bold text-white hover:bg-navy-800 transition-colors"
              >
                <Icon name="mail" className="h-4 w-4" />
                Email {site.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
