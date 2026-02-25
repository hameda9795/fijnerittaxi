import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fijn Rit Taxi | Betrouwbaar Taxi & Luchthavenvervoer in Gorinchem",
  description: "Boek uw taxi bij Fijn Rit Taxi in Gorinchem. Wij bieden comfortabel en betrouwbaar luchthavenvervoer naar Schiphol, Eindhoven & Rotterdam, privéritten, zorgvervoer en zakelijk vervoer. Vaste lage tarieven, 24/7 beschikbaar.",
  keywords: ["taxi Gorinchem", "Schiphol taxi", "luchthavenvervoer", "airport transfer", "privé taxi", "zorgvervoer", "zakelijk vervoer", "personenvervoer", "Fijn Rit Taxi", "goedkope taxi"],
  authors: [{ name: "Fijn Rit Taxi" }],
  creator: "Fijn Rit Taxi",
  publisher: "Fijn Rit Taxi",
  metadataBase: new URL("https://fijnerittaxi.nl"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "Fijn Rit Taxi",
    title: "Fijn Rit Taxi | Betrouwbaar Taxi & Luchthavenvervoer",
    description: "Boek uw taxi bij Fijn Rit Taxi. Wij bieden comfortabel luchthavenvervoer, privéritten en zakelijke diensten in Gorinchem.",
    images: [{
      url: "/images/cover-hero.png",
      width: 1200,
      height: 630,
      alt: "Fijn Rit Taxi - Professioneel taxi vervoer",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fijn Rit Taxi | Betrouwbaar Taxi & Luchthavenvervoer",
    description: "Boek uw taxi bij Fijn Rit Taxi. Wij bieden comfortabel luchthavenvervoer, privéritten en zakelijke diensten in Gorinchem.",
    images: ["/images/cover-hero.png"],
  },
  verification: {
    google: "googleac781cb3d376b4a5",
  },
  category: "Transport",
  classification: "Business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
