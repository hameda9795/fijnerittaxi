import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, Users, CheckCircle, Clock, Shield, School } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leerlingenvervoer Gorinchem | Fijn Rit Taxi | Veilig Schooltransport",
  description: "Veilig en betrouwbaar leerlingenvervoer in Gorinchem. Schooltransport voor basisschool en middelbare school. Professionele chauffeurs, kinderzitje beschikbaar. Vraag vaste prijs aan via WhatsApp.",
  alternates: { canonical: "https://fijnerittaxi.nl/leerlingenvervoer-gorinchem" },
  openGraph: {
    title: "Leerlingenvervoer Gorinchem | Fijn Rit Taxi",
    description: "Veilig schooltransport in Gorinchem. Professionele chauffeurs, kinderzitje beschikbaar. Vraag vaste prijs aan.",
    url: "https://fijnerittaxi.nl/leerlingenvervoer-gorinchem",
    siteName: "Fijn Rit Taxi",
    locale: "nl_NL",
  },
};

const WA_LINK = "https://wa.me/31643463636";

export default function LeerlingenvervoerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TaxiService",
            name: "Fijn Rit Taxi - Leerlingenvervoer Gorinchem",
            description: "Veilig leerlingenvervoer en schooltransport in Gorinchem",
            areaServed: {
              "@type": "City",
              name: "Gorinchem",
            },
            serviceType: "Leerlingenvervoer",
            telephone: "+31643463636",
            url: "https://fijnerittaxi.nl/leerlingenvervoer-gorinchem",
            priceRange: "€",
            openingHours: "Mo,Tu,We,Th,Fr 06:00-19:00",
          }),
        }}
      />
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative bg-gradient-to-r from-[#1a5f3f] to-[#2d8a5e] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Leerlingenvervoer Gorinchem
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Veilig en betrouwbaar schooltransport voor uw kinderen. 
                Professionele chauffeurs, kinderzitje beschikbaar, altijd stipt op tijd.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={WA_LINK} className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#128C7E] transition-all duration-300 flex items-center justify-center gap-2">
                  <MessageCircle className="w-6 h-6" />
                  Vraag Offerte aan
                </a>
                <a href="tel:+31643463636" className="bg-white text-[#1a5f3f] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2">
                  <Phone className="w-6 h-6" />
                  Bel: 06 43463636
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Waarom Ouders Kiezen voor <span className="text-[#1a5f3f]">Fijn Rit Taxi</span>?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <Shield className="w-12 h-12 text-[#1a5f3f] mb-4" />
                <h3 className="text-xl font-bold mb-3">Veiligheid Eerst</h3>
                <p className="text-gray-600">
                  Kinderzitje beschikbaar voor alle leeftijden. 
                  Onze chauffeurs zijn voorzichtig en hebben ervaring met kinderen.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <Clock className="w-12 h-12 text-[#1a5f3f] mb-4" />
                <h3 className="text-xl font-bold mb-3">Stipt op Tijd</h3>
                <p className="text-gray-600">
                  Wij begrijpen dat school op tijd begint. 
                  Uw kinderen komen nooit te laat op school.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <Users className="w-12 h-12 text-[#1a5f3f] mb-4" />
                <h3 className="text-xl font-bold mb-3">Vaste Chauffeur</h3>
                <p className="text-gray-600">
                  Waar mogelijk rijdt dezelfde chauffeur elke dag. 
                  Zo voelt uw kind zich op zijn gemak.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Voor Welke Scholen?
                </h2>
                <p className="text-gray-600 mb-6">
                  Wij verzorgen leerlingenvervoer voor alle scholen in Gorinchem 
                  en omgeving, waaronder:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <School className="w-6 h-6 text-[#1a5f3f] flex-shrink-0" />
                    <span>Basisscholen in Gorinchem</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <School className="w-6 h-6 text-[#1a5f3f] flex-shrink-0" />
                    <span>Middelbare scholen (Merkuscollege, etc.)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <School className="w-6 h-6 text-[#1a5f3f] flex-shrink-0" />
                    <span>Speciaal onderwijs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <School className="w-6 h-6 text-[#1a5f3f] flex-shrink-0" />
                    <span>Scholen in omliggende dorpen</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#1a5f3f] text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Werkwijze</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="bg-white text-[#1a5f3f] w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                    <p>Ophalen aan huis op het afgesproken tijdstip</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-white text-[#1a5f3f] w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                    <p>Veilige rit naar school met kinderzitje</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-white text-[#1a5f3f] w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                    <p>Afzetten bij school of ophaalpunt</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-white text-[#1a5f3f] w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
                    <p>Optioneel: ophalen na schooltijd</p>
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
              Vraag een Gratis Offerte aan
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Geen verplichtingen. Wij bieden een vaste, maandelijkse prijs 
              voor regelmatig schooltransport.
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
