import Link from "next/link";
import { getSite } from "@/lib/content";

export default function CTASection() {
  const site = getSite();

  return (
    <section className="bg-navy-950">
      <div className="container-tes py-14 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white">
            Ready to talk about your project?
          </h2>
          <p className="mt-2 text-navy-200 max-w-xl">
            Tell us about your building, your timeline, and your electrical requirements —
            we&apos;ll come back with a straight answer.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center rounded-md bg-blue-500 px-6 py-3 text-sm font-bold text-white hover:bg-blue-600 transition-colors"
          >
            Enquire about our services
          </Link>
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center rounded-md border-2 border-white/40 px-6 py-3 text-sm font-bold text-white hover:bg-white hover:text-navy-950 transition-colors"
          >
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
