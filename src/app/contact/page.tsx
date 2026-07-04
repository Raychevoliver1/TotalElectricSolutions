import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import IconBadge from "@/components/IconBadge";
import Icon from "@/components/Icon";
import { getSite } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Total Electric Solutions. Offices in Orpington, Kent and Central London. Call 01689 810802 or email info@totalelectricsolutions.co.uk.",
};

export default function ContactPage() {
  const site = getSite();

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's talk about your project"
        subtitle="Whether it's a full commercial fit-out or a single survey, our team is ready to help."
      />

      <section className="py-10 sm:py-14 lg:py-20">
        <div className="container-tes grid gap-10 lg:gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy-950">
              Send Us A Message
            </h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy-950">
              Contact Details
            </h2>
            <div className="mt-6 space-y-4">
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 text-lg font-semibold text-navy-600 hover:text-blue-600"
              >
                <IconBadge name="phone" variant="blue" size="sm" />
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 text-lg font-semibold text-navy-600 hover:text-blue-600"
              >
                <IconBadge name="mail" variant="blue" size="sm" />
                {site.email}
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm font-semibold text-navy-900/70 hover:text-blue-600"
              >
                <IconBadge name="users" variant="navy-outline" size="sm" />
                LinkedIn &rarr;
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>

            <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-5 sm:grid-cols-2">
              {site.offices.map((office) => (
                <div key={office.name} className="rounded-xl border border-navy-100 p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-blue-600">
                    <Icon name="map-pin" className="h-4 w-4 shrink-0" />
                    <p className="font-display text-sm font-semibold uppercase tracking-widest">
                      {office.name}
                    </p>
                  </div>
                  <address className="mt-2 not-italic text-navy-900/80 leading-relaxed">
                    {office.address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
