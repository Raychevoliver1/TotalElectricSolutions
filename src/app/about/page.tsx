import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import TeamCard from "@/components/TeamCard";
import { getAbout, getTeam } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded in 2006 by Ian French, Total Electric Solutions is a family-run commercial electrical contractor based in Orpington and London.",
};

export default function AboutPage() {
  const about = getAbout();
  const team = getTeam();

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={about.heading}
        subtitle={about.intro}
      />

      <section className="py-20">
        <div className="container-tes grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/images/team-shot.jpg"
              alt="The Total Electric Solutions team"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold text-navy-950">
              Our approach
            </h2>
            <p className="mt-4 text-navy-900/75 leading-relaxed">{about.approach}</p>
            <h2 className="mt-8 font-display text-3xl font-semibold text-navy-950">
              What we value
            </h2>
            <p className="mt-4 text-navy-900/75 leading-relaxed">{about.values}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-50">
        <div className="container-tes">
          <div className="flex items-center gap-6 rounded-xl bg-white border border-navy-100 p-8">
            <Image
              src="/images/brand/small-awards-logo.jpg"
              alt="Small Awards logo"
              width={100}
              height={67}
              className="h-16 w-auto rounded shrink-0"
            />
            <div>
              <h2 className="font-display text-xl font-semibold text-navy-950">
                {about.recognitionHeading}
              </h2>
              <p className="mt-2 text-navy-900/75">{about.recognitionBody}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-tes">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-navy-500">
            Our People
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-navy-950">
            Leadership
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.leadership.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>

          <h2 className="mt-16 font-display text-3xl sm:text-4xl font-semibold text-navy-950">
            Site Managers
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.siteManagers.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>

          <p className="mt-10 max-w-3xl text-navy-900/70 leading-relaxed">
            {team.officeTeamNote}
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
