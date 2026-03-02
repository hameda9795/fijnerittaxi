import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, Plane, Clock, Shield, CheckCircle, Luggage, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luchthavenvervoer Gorinchem | Schiphol, Eindhoven, Rotterdam | Vaste Prijs",
  description: "Betrouwbaar luchthavenvervoer vanuit Gorinchem naar Schiphol, Eindhoven en Rotterdam Airport. Vaste lage prijzen, geen verrassingen. Boek via WhatsApp: 06 43463636.",
  alternates: { canonical: "https://fijnerittaxi.nl/luchthavenvervoer" },
  openGraph: {
    title: "Luchthavenvervoer Gorinchem | Fijn Rit Taxi",
    description: "Luchthavenvervoer naar Schiphol, Eindhoven, Rotterdam. Vaste prijzen vanuit Gorinchem. Boek via WhatsApp.",
    url: "https://fijnerittaxi.nl/luchthavenvervoer",
    siteName: "Fijn Rit Taxi",
    locale: "nl_NL",
  },
};

const WA_LINK = "https://wa.me/31643463636";

const airports = [
  { name: "Schiphol Airport", time: "ca. 60 min", features: ["Directe route", "Flight tracking", "24/7 service"] },
  { name: "Eindhoven Airport", time: "ca. 45 min", features: ["Directe route", "Vaste prijs", "Comfortabele auto"] },
  { name: "Rotterdam Airport", time: "ca. 35 min", features: ["Dichtbij", "Snelle service", "Vaste prijs"] },
];

export default function LuchthavenvervoerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TaxiService",
            name: "Fijn Rit Taxi - Luchthavenvervoer Gorinchem",
            description: "Luchthavenvervoer naar Schiphol, Eindhoven en Rotterdam vanuit Gorinchem",
            areaServed: {
              "@type": "City",
              name: "Gorinchem",
            },
            serviceType: "Luchthavenvervoer",
            telephone: "+31643463636",
            url: "https://fijnerittaxi.nl/luchthavenvervoer",
            priceRange: "€",
            openingHours: "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59",
          }),
        }}
      />
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative bg-gradient-to-r from-[#1a5f3f] to-[#2d8a5e] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Luchthavenvervoer Gorinchem
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Comfortabel vervoer naar Schiphol, Eindhoven en Rotterdam Airport. 
                Vaste lage prijzen, geen verrassingen achteraf. 24/7 beschikbaar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={WA_LINK} className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#128C7E] transition-all duration-300 flex items-center justify-center gap-2">
                  <MessageCircle className="w-6 h-6" />
                  Vraag Vaste Prijs aan
                </a>
                <a href="tel:+31643463636" className="bg-white text-[#1a5f3f] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2">
                  <Phone className="w-6 h-6" />
                  Bel: 06 43463636
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Airports */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Naar Welke Luchthaven?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {airports.map((airport, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <Plane className="w-12 h-12 text-[#1a5f3f] mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{airport.name}</h3>
                  <p className="text-gray-500 mb-4">{airport.time} vanuit Gorinchem</p>
                  <ul className="space-y-2 mb-6">
                    {airport.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-[#1a5f3f]" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={WA_LINK} className="block w-full bg-[#25D366] text-white text-center py-3 rounded-full font-bold hover:bg-[#128C7E] transition-all">
                    Boek Nu
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Waarom Kiezen voor Ons Luchthavenvervoer?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#1a5f3f] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h3 className="font-bold text-lg">Vaste Prijs, Geen Verrassingen</h3>
                      <p className="text-gray-600">Wat u van tevoren hoort, betaalt u. Geen extra kosten voor files of wachttijden.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#1a5f3f] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h3 className="font-bold text-lg">Altijd op Tijd</h3>
                      <p className="text-gray-600">Wij rekenen de reistijd slim uit. Zo komt u nooit te laat voor uw vlucht.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#1a5f3f] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h3 className="font-bold text-lg">Comfortabele Auto's</h3>
                      <p className="text-gray-600">Ruime, schone auto's met airco. Genoeg ruimte voor al uw bagage.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#1a5f3f] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <h3 className="font-bold text-lg">24/7 Service</h3>
                      <p className="text-gray-600">Vroege vlucht of late landing? Geen probleem. Wij rijden dag en nacht.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#1a5f3f] text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Hoe Werkt het?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 flex-shrink-0" />
                    <div>
                      <p className="font-bold">Stap 1: Boek</p>
                      <p className="text-white/80 text-sm">Via WhatsApp of telefoon. Geef vluchtnummer door.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Luggage className="w-6 h-6 flex-shrink-0" />
                    <div>
                      <p className="font-bold">Stap 2: Ophalen</p>
                      <p className="text-white/80 text-sm">Wij halen u thuis op op het afgesproken tijdstip.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Plane className="w-6 h-6 flex-shrink-0" />
                    <div>
                      <p className="font-bold">Stap 3: Aankomst</p>
                      <p className="text-white/80 text-sm">Wij brengen u naar de vertrekhal van de luchthaven.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#1a5f3f] to-[#2d8a5e] text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vraag Direct een Vaste Prijs aan
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Geen verrassingen, geen extra kosten. Vaste prijs voor uw rit 
              van Gorinchem naar de luchthaven.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WA_LINK} className="bg-[#25D366] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#128C7E] transition-all duration-300 flex items-center justify-center gap-2">
                <MessageCircle className="w-6 h-6" />
                WhatsApp: 06 43463636
              </a>
            </div>
            <p className="mt-6 text-white/80">
              KVK: 96706147 | 24/7 Beschikbaar | Gorinchem & Omgeving
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
