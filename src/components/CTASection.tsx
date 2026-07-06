import Link from "next/link";
import Icon from "@/components/Icon";
import { getSite } from "@/lib/content";

export default function CTASection() {
  const site = getSite();

  return (
    <section className="bg-navy-950">
      <div className="container-tes py-10 sm:py-14 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Ready to talk about your project?
          </h2>
          <p className="mt-2 text-navy-200 max-w-xl">
            Tell us about your building, your timeline and your electrical requirements,
            and we&apos;ll come back with a straight answer.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-bold text-white hover:bg-blue-700 transition-colors"
          >
            Enquire about our services
          </Link>
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/40 px-6 py-3 text-sm font-bold text-white hover:bg-white hover:text-navy-950 transition-colors"
          >
            <Icon name="phone" className="h-4 w-4" />
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
