import Link from "next/link";
import { getSite } from "@/lib/content";

export default function CTASection() {
  const site = getSite();

  return (
    <section className="bg-amber-500">
      <div className="container-tes py-14 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-navy-950">
            Ready to talk about your project?
          </h2>
          <p className="mt-2 text-navy-900/80 max-w-xl">
            Tell us about your building, your timeline, and your electrical requirements —
            we&apos;ll come back with a straight answer.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center rounded-md bg-navy-950 px-6 py-3 text-sm font-bold text-white hover:bg-navy-800 transition-colors"
          >
            Enquire about our services
          </Link>
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center rounded-md border-2 border-navy-950 px-6 py-3 text-sm font-bold text-navy-950 hover:bg-navy-950 hover:text-white transition-colors"
          >
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
