import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
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

      <section className="py-20">
        <div className="container-tes grid gap-12 lg:grid-cols-2">
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
            <div className="mt-6 space-y-3">
              <a
                href={site.phoneHref}
                className="block text-lg font-semibold text-navy-600 hover:text-blue-600"
              >
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="block text-lg font-semibold text-navy-600 hover:text-blue-600"
              >
                {site.email}
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="block text-sm font-semibold text-navy-900/70 hover:text-blue-600"
              >
                LinkedIn &rarr;
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {site.offices.map((office) => (
                <div key={office.name} className="rounded-xl border border-navy-100 p-6">
                  <p className="font-display text-sm font-semibold uppercase tracking-widest text-blue-600">
                    {office.name}
                  </p>
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
