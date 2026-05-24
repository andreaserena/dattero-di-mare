import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { restaurantInfo } from "@/lib/restaurant-info";
import { getRestaurantSchema } from "@/lib/structured-data";

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(restaurantInfo.siteUrl),
  title: {
    default: "Il Dattero di Mare | Ristorante di Pesce a L'Aquila",
    template: "%s | Il Dattero di Mare",
  },
  description:
    "Ristorante di pesce a L'Aquila nel cuore dell'Abruzzo. Crudi d'autore, tartare e ostriche, pescato fresco ogni giorno. Prenota il tuo tavolo.",
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    siteName: restaurantInfo.name,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${restaurantInfo.name} — ${restaurantInfo.tagline}`,
      },
    ],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
};

const restaurantSchemaJson = JSON.stringify(getRestaurantSchema()).replace(/</g, '\\u003c');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${cormorant.variable} ${inter.variable} font-sans antialiased bg-sand text-sea-text`}
      >
        <Script
          id="restaurant-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: restaurantSchemaJson }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
