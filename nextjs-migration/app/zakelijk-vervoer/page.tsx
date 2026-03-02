import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, Briefcase, Clock, Shield, CheckCircle, Users, Building } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zakelijk Vervoer Gorinchem | Professionele Taxi Service | Fijn Rit Taxi",
  description: "Zakelijk vervoer in Gorinchem voor bedrijven. Professionele chauffeurs, representatieve auto's, op rekening mogelijk. 24/7 beschikbaar. Bel: 06 43463636.",
  alternates: { canonical: "https://fijnerittaxi.nl/zakelijk-vervoer" },
  openGraph: {
    title: "Zakelijk Vervoer Gorinchem | Fijn Rit Taxi",
    description: "Professioneel zakelijk vervoer voor bedrijven in Gorinchem. Luxe voertuigen, representatieve chauffeurs.",
    url: "https://fijnerittaxi.nl/zakelijk-vervoer",
    siteName: "Fijn Rit Taxi",
    locale: "nl_NL",
  },
};

const WA_LINK = "https://wa.me/31643463636";

const features = [
  { icon: Briefcase, title: "Professioneel", description: "Representatieve chauffeurs en luxe voertuigen voor uw zakelijke relaties." },
  { icon: Clock, title: "Stipt op tijd", description: "Wij garanderen punctualiteit voor al uw zakelijke afspraken." },
  { icon: Building, title: "Op rekening", description: "Mogelijkheid om zakelijk op rekening te rijden met maandelijkse facturatie." },
  { icon: Users, title: "Groepsvervoer", description: "Vervoer voor groepen tot 8 personen met onze comfortabele taxibus." },
];

const services = [
  { 
    title: "Directievervoer", 
    description: "Representatief vervoer voor directeuren en managers. Stijlvolle auto's en discrete chauffeurs." 
  },
  { 
    title: "Vergadervervoer", 
    description: "Transport naar vergaderingen, congressen en beurzen. Wij zorgen dat u ontspannen arriveert." 
  },
  { 
    title: "Luchthaventransfers", 
    description: "Betrouwbaar vervoer van en naar Schiphol, Eindhoven en Rotterdam voor zakenreizigers." 
  },
  { 
    title: "Gastenvervoer", 
    description: "Ophaalservice voor uw zakelijke gasten en relaties. Een warm welkom voor uw bezoekers." 
  },
];

export default function ZakelijkVervoerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TaxiService",
            name: "Fijn Rit Taxi - Zakelijk Vervoer Gorinchem",
            description: "Professioneel zakelijk vervoer voor bedrijven in Gorinchem en omgeving",
            areaServed: {
              "@type": "City",
              name: "Gorinchem",
            },
            serviceType: "Zakelijk vervoer",
            telephone: "+31643463636",
            url: "https://fijnerittaxi.nl/zakelijk-vervoer",
            priceRange: "€€",
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
                Zakelijk Vervoer in Gorinchem
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Professioneel zakelijk vervoer voor bedrijven en organisaties. 
                Representatieve chauffeurs en luxe voertuigen voor uw zakelijke relaties. 
                Op rekening mogelijk.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={WA_LINK} className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#128C7E] transition-all duration-300 flex items-center justify-center gap-2">
                  <MessageCircle className="w-6 h-6" />
                  Zakelijke Aanvraag
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
              Voordelen van Zakelijk Vervoer
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
                  <feature.icon className="w-12 h-12 text-[#1a5f3f] mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Onze Zakelijke Diensten
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <Briefcase className="w-10 h-10 text-[#1a5f3f] mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Waarom kiezen voor Fijn Rit Taxi?
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="bg-[#1a5f3f] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">✓</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Betrouwbaar en Punctueel</h3>
                  <p className="text-gray-600">Wij begrijpen dat tijd geld is in het zakenleven. Onze chauffeurs zijn altijd stipt op tijd, zodat u nooit een afspraak mist.</p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="bg-[#1a5f3f] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">✓</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Representatief</h3>
                  <p className="text-gray-600">Onze auto's zijn altijd schoon en goed onderhouden. Onze chauffeurs dragen nette kleding en gedragen zich professioneel.</p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="bg-[#1a5f3f] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">✓</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Flexibele Betaling</h3>
                  <p className="text-gray-600">Kies voor directe betaling of vraag een zakelijke rekening aan. Wij bieden maandelijkse facturatie met overzichtelijke specificaties.</p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="bg-[#1a5f3f] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">✓</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">24/7 Beschikbaar</h3>
                  <p className="text-gray-600">Vroege vlucht of late meeting? Geen probleem. Wij rijden dag en nacht, ook in het weekend en op feestdagen.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Zakelijk Vervoer voor Elke Gelegenheid
            </h2>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Fijn Rit Taxi is uw betrouwbare partner voor zakelijk vervoer in Gorinchem en omgeving. 
                  Wij begrijpen de eisen van het zakelijke leven en zorgen ervoor dat u en uw relaties 
                  altijd op tijd en in stijl op de plaats van bestemming arriveren.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Of het nu gaat om het ophalen van belangrijke klanten van de luchthaven, 
                  vervoer naar een congres, of dagelijks vervoer voor uw medewerkers — 
                  wij regelen het graag voor u. Met onze ervaring in zakelijk vervoer weten 
                  wij precies wat er nodig is om een professionele indruk achter te laten.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Neem contact met ons op voor een vrijblijvende offerte. 
                  Wij bespreken graag uw wensen en maken een passend voorstel voor uw bedrijf. 
                  Met onze flexibele tarieven en uitstekende service bent u verzekerd van kwaliteit.
                </p>
              </div>

              <div className="bg-[#1a5f3f] text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Start vandaag nog</h3>
                <p className="text-white/90 mb-6">
                  Vraag een vrijblijvende offerte aan voor zakelijk vervoer. 
                  Wij maken graag kennis met uw bedrijf.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c9a227]" />
                    <span>Scherpe tarieven</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c9a227]" />
                    <span>Maandelijkse facturatie</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c9a227]" />
                    <span>Geen verborgen kosten</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c9a227]" />
                    <span>Prioriteit bij boekingen</span>
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
              Vraag een vrijblijvende offerte aan
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Ontdek de voordelen van zakelijk vervoer met Fijn Rit Taxi.
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
