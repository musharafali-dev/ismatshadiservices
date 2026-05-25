import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Ismat Matrimonial & Matchmaking Bureau | Premium Halal Registry USA",
  description: "An elite, private matchmaking space engineered strictly for second-generation Muslim professionals in the United States. No public directories. Complete discretion.",
  keywords: "Halal matchmaking USA, Muslim marriage services, American Muslim matchmaking, premium matrimonial registry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        {/* Schema.org Structured Metadata for Service and Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Bespoke Muslim Matrimonial & Matchmaking Bureau",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Ismat Shaadi Services",
                "image": "https://ismatshaadiservices.com/images/mrs-ismat-avatar.png",
                "priceRange": "$$$",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "N Michigan Ave",
                  "addressLocality": "Chicago",
                  "addressRegion": "IL",
                  "postalCode": "60611",
                  "addressCountry": "US"
                }
              },
              "areaServed": "United States",
              "description": "Premium Shariah-compliant matrimonial service for elite North American Muslim professionals including Physicians, Attorneys, Executives, and Venture Capitalists."
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-alabaster text-slate-custom editorial-bg islamic-pattern-bg antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
