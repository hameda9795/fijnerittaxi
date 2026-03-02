import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, Heart, CheckCircle, Clock, Shield, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zorgvervoer Gorinchem | Fijn Rit Taxi | Vaste Prijs, 24/7 Beschikbaar",
  description: "Professioneel zorgvervoer in Gorinchem. Betrouwbaar vervoer voor patiënten, senioren en mensen met beperkingen. WMO-indicatie mogelijk. Vraag direct een vaste prijs aan via WhatsApp.",
  alternates: { canonical: "https://fijnerittaxi.nl/zorgvervoer-gorinchem" },
  openGraph: {
    title: "Zorgvervoer Gorinchem | Fijn Rit Taxi",
    description: "Betrouwbaar zorgvervoer in Gorinchem. WMO-indicatie mogelijk. Vraag vaste prijs aan via WhatsApp.",
    url: "https://fijnerittaxi.nl/zorgvervoer-gorinchem",
    siteName: "Fijn Rit Taxi",
    locale: "nl_NL",
  },
};

const WA_LINK = "https://wa.me/31643463636";

export default function ZorgvervoerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TaxiService",
            name: "Fijn Rit Taxi - Zorgvervoer Gorinchem",
            description: "Professioneel zorgvervoer in Gorinchem en omgeving",
            areaServed: {
              "@type": "City",
              name: "Gorinchem",
            },
            serviceType: "Zorgvervoer",
            telephone: "+31643463636",
            url: "https://fijnerittaxi.nl/zorgvervoer-gorinchem",
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
                Zorgvervoer Gorinchem
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Professioneel en betrouwbaar vervoer voor patiënten, senioren en mensen met beperkingen. 
                Wij werken samen met zorgverleners en accepteren WMO-indicatie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={WA_LINK} className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#128C7E] transition-all duration-300 flex items-center justify-center gap-2">
                  <MessageCircle className="w-6 h-6" />
                  Vraag Vaste Prijs aan
                </a>
                <a href="tel:+31643463636" className="bg-white text-[#1a5f3f] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2">
                  <Phone className="w-6 h-6" />
                  Bel Direct: 06 43463636
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Waarom Kiezen voor <span className="text-[#1a5f3f]">Fijn Rit Taxi</span>?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <Heart className="w-12 h-12 text-[#1a5f3f] mb-4" />
                <h3 className="text-xl font-bold mb-3">Geduldige Chauffeurs</h3>
                <p className="text-gray-600">
                  Onze chauffeurs zijn speciaal opgeleid voor zorgvervoer. 
                  Geduldig, behulpzaam en altijd vriendelijk.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <CheckCircle className="w-12 h-12 text-[#1a5f3f] mb-4" />
                <h3 className="text-xl font-bold mb-3">WMO-indicatie</h3>
                <p className="text-gray-600">
                  Wij accepteren WMO-indicatie en werken samen met zorgverleners 
                  en gemeente Gorinchem.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <Clock className="w-12 h-12 text-[#1a5f3f] mb-4" />
                <h3 className="text-xl font-bold mb-3">24/7 Beschikbaar</h3>
                <p className="text-gray-600">
                  Altijd bereikbaar, ook voor spoedritten. 
                  Dag en nacht staan wij voor u klaar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Destinations */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Veelvoorkomende Bestemmingen
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-[#1a5f3f] flex-shrink-0" />
                    <span>Beatrixziekenhuis (Rivas Zorggroep)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-[#1a5f3f] flex-shrink-0" />
                    <span>Huisartsenpraktijken in Gorinchem</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-[#1a5f3f] flex-shrink-0" />
                    <span>Fysiotherapie en revalidatiecentra</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-[#1a5f3f] flex-shrink-0" />
                    <span>Dagbesteding en zorginstellingen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-[#1a5f3f] flex-shrink-0" />
                    <span>Ziekenhuizen in de regio (Dordrecht, Rotterdam)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#1a5f3f] text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Wat is Zorgvervoer?</h3>
                <p className="mb-4">
                  Zorgvervoer is speciaal vervoer voor mensen die door ziekte, 
                  beperking of ouderdom niet zelfstandig kunnen reizen met het 
                  reguliere openbaar vervoer.
                </p>
                <p className="mb-4">
                  <strong>Met WMO-indicatie</strong> kan het vervoer (gedeeltelijk) 
                  vergoed worden door de gemeente Gorinchem.
                </p>
                <a href={WA_LINK} className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold hover:bg-[#128C7E] transition-all">
                  <MessageCircle className="w-5 h-5" />
                  Meer Informatie
                </a>
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
              Geen verrassingen achteraf. Wij bieden altijd een vaste, 
              eerlijke prijs voor uw zorgvervoer.
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
