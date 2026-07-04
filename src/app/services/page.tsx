import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import IconBadge from "@/components/IconBadge";
import { getServices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Electrical surveying & design, lighting solutions, installation & certification, data solutions and fire alarm services for the commercial sector.",
};

export default function ServicesPage() {
  const services = getServices();

  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="A complete electrical package, under one roof"
        subtitle="From the first site survey through to NICEIC-certified handover, our in-house team manages every stage of the electrical package for your commercial building."
      />

      <section className="py-10 sm:py-14 lg:py-20">
        <div className="container-tes space-y-4 sm:space-y-6">
          {services.map((service) => (
            <div
              key={service.slug}
              id={service.slug}
              className="flex gap-4 sm:gap-6 rounded-xl border border-navy-100 p-5 sm:p-6 lg:p-8"
            >
              <IconBadge name={service.icon} variant="blue" size="lg" className="shrink-0" />
              <div>
                <h2 className="font-display text-xl sm:text-2xl font-semibold text-navy-950">
                  {service.title}
                </h2>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base text-navy-900/75 leading-relaxed max-w-3xl">
                  {service.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-10 sm:pb-14 lg:pb-20">
        <div className="container-tes">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 rounded-xl bg-navy-950 p-6 sm:p-8 text-center">
            <Image
              src="/images/brand/niceic-logo.svg"
              alt="NICEIC approved contractor"
              width={220}
              height={80}
              className="h-16 w-auto"
            />
            <p className="max-w-xl text-navy-200">
              Every installation we deliver is tested and certified to{" "}
              <strong className="text-white">NICEIC</strong> standards, with full
              documentation and Building Control sign-off provided as standard.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
