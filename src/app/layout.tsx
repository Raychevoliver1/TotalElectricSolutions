import type { Metadata } from "next";
import { Inter, Archivo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSite } from "@/lib/content";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const site = getSite();

export const metadata: Metadata = {
  metadataBase: new URL("https://www.totalelectricsolutions.co.uk"),
  title: {
    default: `${site.companyName} | Commercial Electrical Contractors`,
    template: `%s | ${site.companyName}`,
  },
  description: site.heroSubheading,
  openGraph: {
    title: `${site.companyName} | Commercial Electrical Contractors`,
    description: site.heroSubheading,
    url: "https://www.totalelectricsolutions.co.uk",
    siteName: site.companyName,
    locale: "en_GB",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ElectricalContractor",
  name: site.legalName,
  url: "https://www.totalelectricsolutions.co.uk",
  telephone: site.phone,
  email: site.email,
  foundingDate: String(site.founded),
  sameAs: [site.linkedin],
  address: site.offices.map((office) => ({
    "@type": "PostalAddress",
    streetAddress: office.address.slice(0, -2).join(", "),
    addressLocality: office.address.at(-2),
    postalCode: office.address.at(-1),
    addressCountry: "GB",
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${archivo.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans text-navy-950 bg-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-blue-600 focus:px-4 focus:py-2.5 focus:text-sm focus:font-bold focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
