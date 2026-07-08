import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import { getSite } from "@/lib/content";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/services/", label: "Services" },
  { href: "/projects/", label: "Projects" },
  { href: "/training-apprenticeships/", label: "Training & Apprenticeships" },
  { href: "/contact/", label: "Contact" },
];

export default function Footer() {
  const site = getSite();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="container-tes py-10 sm:py-14 grid gap-8 sm:gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Image
            src="/images/brand/logo.svg"
            alt={site.companyName}
            width={160}
            height={112}
            className="h-12 w-auto mb-4 brightness-0 invert"
          />
          <p className="max-w-sm text-sm text-navy-300">{site.heroSubheading}</p>
          <div className="mt-6 flex items-center gap-4">
            <Image
              src="/images/brand/niceic-logo.svg"
              alt="NICEIC approved contractor"
              width={220}
              height={80}
              className="h-14 w-auto"
            />
            <span className="inline-flex items-center justify-center rounded-lg bg-white p-1.5">
              <Image
                src="/images/brand/safecontractor-approved.png"
                alt="SafeContractor Approved"
                width={56}
                height={56}
                className="h-12 w-12"
              />
            </span>
          </div>
        </div>

        <nav aria-label="Footer">
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-white">
            Menu
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-navy-300">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-blue-400 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-white">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-navy-300">
            <li>
              <a
                href={site.phoneHref}
                className="flex items-center gap-2.5 hover:text-blue-400 transition-colors"
              >
                <Icon name="phone" className="h-4 w-4 shrink-0 text-blue-400" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2.5 hover:text-blue-400 transition-colors break-all"
              >
                <Icon name="mail" className="h-4 w-4 shrink-0 text-blue-400" />
                {site.email}
              </a>
            </li>
            {site.offices.map((office) => (
              <li key={office.name} className="flex gap-2.5">
                <Icon name="map-pin" className="h-4 w-4 shrink-0 text-blue-400 mt-0.5" />
                <div>
                  <p className="font-semibold text-navy-200">{office.name}</p>
                  <p>{office.address.join(", ")}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-800">
        <div className="container-tes py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-navy-200">
          <p>
            &copy; {year} {site.legalName}. All rights reserved.
          </p>
          <p>{site.footerNote}</p>
        </div>
      </div>
    </footer>
  );
}
