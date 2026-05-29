import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Suman Ahuja Law Office — Real Estate Lawyer & Notary Public | Mississauga",
  description:
    "Flat-fee residential real estate closings, walk-in Notary Public, and estate planning in Mississauga. Trusted since 2004. Hindi & English. Call 905-507-4100.",
  keywords:
    "real estate lawyer Mississauga, notary public Mississauga, walk in notary Mississauga, wills lawyer Mississauga, Hindi speaking lawyer Mississauga, flat fee closing lawyer, Hurontario Matheson lawyer",
  openGraph: {
    title: "Suman Ahuja Law Office — Mississauga Real Estate & Notary",
    description:
      "Flat-fee closings, walk-in notary, wills & POA. Serving Mississauga since 2004. Call 905-507-4100.",
    type: "website",
    locale: "en_CA",
    url: "https://ahujalaw.com",
    siteName: "Suman Ahuja Law Office",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suman Ahuja Law Office — Mississauga Real Estate & Notary",
    description:
      "Flat-fee closings, walk-in notary, wills & POA. Serving Mississauga since 2004.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Suman Umesh Ahuja Professional Corporation",
    alternateName: "Suman Ahuja Law Office",
    description:
      "Solo law office serving Mississauga for residential real estate closings, wills, powers of attorney, and walk-in Notary Public / Commissioner of Oaths services.",
    url: "https://ahujalaw.com",
    telephone: "905-507-4100",
    faxNumber: "905-507-4199",
    email: "lawyers@ahujalaw.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "25 Watline Avenue, Suite GR-09",
      addressLocality: "Mississauga",
      addressRegion: "ON",
      postalCode: "L4Z 2Z1",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "43.626330",
      longitude: "-79.664530",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$",
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
      data-theme="light"
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
