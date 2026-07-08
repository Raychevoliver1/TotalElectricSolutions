"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "@/components/Icon";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/services/", label: "Services" },
  { href: "/projects/", label: "Projects" },
  { href: "/training-apprenticeships/", label: "Training & Apprenticeships" },
  { href: "/contact/", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-navy-100">
      <div className="container-tes flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center shrink-0"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/brand/tes-logo.png"
            alt="Total Electric Solutions"
            width={168}
            height={121}
            className="h-12 w-auto sm:h-14"
            priority
          />
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm font-semibold tracking-wide transition-colors ${
                  isActive
                    ? "text-navy-600"
                    : "text-navy-900/70 hover:text-navy-600"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:01689810802"
            className="flex items-center gap-1.5 text-sm font-semibold text-navy-900/80 hover:text-navy-600"
          >
            <Icon name="phone" className="h-4 w-4" />
            01689 810802
          </a>
          <Link
            href="/contact/"
            className="inline-flex items-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-blue-700"
          >
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-navy-900"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="lg:hidden border-t border-navy-100 bg-white">
          <nav aria-label="Mobile" className="container-tes flex flex-col py-4">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base font-semibold text-navy-900 border-b border-navy-50 last:border-none"
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact/"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-sm font-bold text-white"
            >
              Get a Quote
            </Link>
            <a href="tel:01689810802" className="mt-3 text-center text-sm font-semibold text-navy-900/80">
              Or call 01689 810802
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
