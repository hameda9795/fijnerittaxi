import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, Car, Clock, Shield, CheckCircle, MapPin, Star } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privé Ophaalservice Gorinchem | Betrouwbaar Taxi Vervoer | Fijn Rit Taxi",
  description: "Privé ophaalservice in Gorinchem en omgeving. Persoonlijk vervoer aan huis met professionele chauffeurs. 24/7 beschikbaar, vaste prijzen. Bel: 06 43463636.",
  alternates: { canonical: "https://fijnerittaxi.nl/prive-ophaalservice" },
  openGraph: {
    title: "Privé Ophaalservice Gorinchem | Fijn Rit Taxi",
    description: "Persoonlijke ophaalservice aan huis in Gorinchem. Professionele chauffeurs, 24/7 beschikbaar.",
    url: "https://fijnerittaxi.nl/prive-ophaalservice",
    siteName: "Fijn Rit Taxi",
    locale: "nl_NL",
  },
};

const WA_LINK = "https://wa.me/31643463636";

const features = [
  { icon: Clock, title: "Op tijd ophalen", description: "Wij halen u stipt op het afgesproken tijdstip op." },
  { icon: Shield, title: "Veilig vervoer", description: "Schone, comfortabele auto's met ervaren chauffeurs." },
  { icon: Star, title: "Persoonlijke service", description: "Op maat gemaakt vervoer volgens uw wensen." },
  { icon: MapPin, title: "Door heel Nederland", description: "Van Gorinchem naar elke bestemming in Nederland." },
];

const useCases = [
  { title: "Boodschappen", description: "Wij brengen u naar de supermarkt en wachten geduldig tot u klaar bent." },
  { title: "Doktersafspraak", description: "Op tijd bij de huisarts of specialist, zonder parkeerstress." },
  { title: "Bezoek familie", description: "Bezoek familie of vrienden, wij zorgen voor het vervoer." },
  { title: "Dagje uit", description: "Naar het theater, restaurant of pretpark, wij brengen u erheen." },
];

export default function PriveOphaalservicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TaxiService",
            name: "Fijn Rit Taxi - Privé Ophaalservice Gorinchem",
            description: "Persoonlijke ophaalservice aan huis in Gorinchem en omgeving",
            areaServed: {
              "@type": "City",
              name: "Gorinchem",
            },
            serviceType: "Privé vervoer",
            telephone: "+31643463636",
            url: "https://fijnerittaxi.nl/prive-ophaalservice",
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
                Privé Ophaalservice in Gorinchem
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Persoonlijke ophaalservice aan huis met professionele chauffeurs. 
                Comfortabel en veilig vervoer voor al uw privé ritten in Gorinchem en omgeving. 
                24/7 beschikbaar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={WA_LINK} className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#128C7E] transition-all duration-300 flex items-center justify-center gap-2">
                  <MessageCircle className="w-6 h-6" />
                  Direct Boeken
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
              Waarom Kiezen voor Onze Privé Ophaalservice?
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

        {/* Use Cases */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Wanneer kunt u onze ophaalservice gebruiken?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <Car className="w-10 h-10 text-[#1a5f3f] mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Hoe Werkt het?
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="bg-[#1a5f3f] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Bel of WhatsApp</h3>
                  <p className="text-gray-600">Neem contact met ons op via WhatsApp of telefoon. Vertel ons waar en wanneer u opgehaald wilt worden.</p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="bg-[#1a5f3f] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Wij komen naar u toe</h3>
                  <p className="text-gray-600">Onze chauffeur komt op het afgesproken tijdstip naar uw adres in Gorinchem of omgeving.</p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="bg-[#1a5f3f] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Comfortabel vervoer</h3>
                  <p className="text-gray-600">Geniet van een comfortabele rit in onze schone auto's met professionele chauffeurs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Privé Vervoer in Gorinchem en Omgeving
            </h2>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Fijn Rit Taxi biedt een uitstekende privé ophaalservice in Gorinchem en de omliggende dorpen. 
                  Of u nu een boodschap moet doen, een doktersafspraak heeft of familie wilt bezoeken, 
                  wij zorgen ervoor dat u veilig en comfortabel op uw bestemming arriveert.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Onze chauffeurs zijn ervaren, vriendelijk en kennen de regio Gorinchem als hun broekzak. 
                  Zij zorgen niet alleen voor het vervoer, maar denken ook met u mee. 
                  Moet u even wachten bij de dokter? Geen probleem, wij wachten geduldig tot u klaar bent.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Met onze 24/7 service kunt u ons altijd bereiken, ook 's avonds en in het weekend. 
                  Boek uw rit eenvoudig via WhatsApp of bel ons direct. 
                  Wij hanteren vaste, transparante prijzen zonder verborgen kosten.
                </p>
              </div>

              <div className="bg-[#1a5f3f] text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Gebieden die wij bedienen</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {["Gorinchem", "Dordrecht", "Leerdam", "Hardinxveld-Giessendam", "Werkendam", "Sliedrecht", "Papendrecht", "Zwijndrecht"].map(( plaats) => (
                    <div key={plaats} className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#c9a227]" />
                      <span>{plaats}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#1a5f3f] to-[#2d8a5e] text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Boek uw privé ophaalservice vandaag nog
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Geen zorgen meer over vervoer. Wij halen u op waar en wanneer u wilt.
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
