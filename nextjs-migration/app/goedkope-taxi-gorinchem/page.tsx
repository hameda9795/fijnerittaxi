import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Goedkope Taxi Gorinchem | Vaste Prijs vanaf €89 | Fijn Rit Taxi",
  description: "Op zoek naar een goedkope taxi in Gorinchem? Fijn Rit Taxi biedt vaste lage prijzen vanaf €89 naar Rotterdam, €119 naar Eindhoven, €129 naar Schiphol. Geen verrassingen, 24/7 beschikbaar. Direct boeken via WhatsApp!",
  keywords: "goedkope taxi gorinchem, taxi gorinchem prijs, taxi bestellen gorinchem, betrouwbare taxi gorinchem, vaste prijs taxi gorinchem",
  alternates: {
    canonical: "https://fijnerittaxi.nl/goedkope-taxi-gorinchem",
  },
  openGraph: {
    title: "Goedkope Taxi Gorinchem | Vaste Prijs vanaf €89",
    description: "Fijn Rit Taxi biedt de goedkoopste taxi service in Gorinchem met vaste prijzen. Geen verrassingen, 24/7 beschikbaar!",
    type: "website",
    locale: "nl_NL",
    url: "https://fijnerittaxi.nl/goedkope-taxi-gorinchem",
  },
};

// Schema.org JSON-LD
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://fijnerittaxi.nl/goedkope-taxi-gorinchem/#webpage",
      "url": "https://fijnerittaxi.nl/goedkope-taxi-gorinchem",
      "name": "Goedkope Taxi Gorinchem | Vaste Prijs vanaf €89 | Fijn Rit Taxi",
      "description": "Op zoek naar een goedkope taxi in Gorinchem? Fijn Rit Taxi biedt vaste lage prijzen vanaf €89. Geen verrassingen, 24/7 beschikbaar.",
      "isPartOf": {
        "@id": "https://fijnerittaxi.nl/#website"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://fijnerittaxi.nl/#localbusiness",
      "name": "Fijn Rit Taxi",
      "image": "https://fijnerittaxi.nl/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Gorinchem",
        "addressRegion": "Zuid-Holland",
        "addressCountry": "NL"
      },
      "telephone": "+31643463636",
      "priceRange": "€",
      "areaServed": {
        "@type": "City",
        "name": "Gorinchem"
      },
      "serviceType": "Taxi Service",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Taxi Diensten",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Taxi naar Rotterdam Airport",
              "price": "89.00",
              "priceCurrency": "EUR"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Taxi naar Eindhoven Airport",
              "price": "119.00",
              "priceCurrency": "EUR"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Taxi naar Schiphol",
              "price": "129.00",
              "priceCurrency": "EUR"
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Hoeveel kost een taxi in Gorinchem?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bij Fijn Rit Taxi betaalt u vaste prijzen vanaf €89 naar Rotterdam Airport, €119 naar Eindhoven, en €129 naar Schiphol. Binnen Gorinchem vanaf €15."
          }
        },
        {
          "@type": "Question",
          "name": "Is Fijn Rit Taxi goedkoper dan Uber in Gorinchem?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, voor langere ritten (zoals naar Schiphol) zijn wij vaak voordeliger dan Uber. Bovendien heeft u bij ons een vaste prijs zonder piektarieven."
          }
        },
        {
          "@type": "Question",
          "name": "Zijn er verborgen kosten bij Fijn Rit Taxi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nee, u betaalt altijd de prijs die van tevoren is afgesproken. Geen extra kosten voor files, wachttijden of bagage."
          }
        },
        {
          "@type": "Question",
          "name": "Kan ik een goedkope taxi reserveren in Gorinchem?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, u kunt eenvoudig reserveren via WhatsApp of telefoon. Reserveren is gratis en u betaalt pas na de rit."
          }
        },
        {
          "@type": "Question",
          "name": "Is er een goedkope taxi beschikbaar 's nachts in Gorinchem?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, Fijn Rit Taxi rijdt 24/7, ook 's nachts en in het weekend, tegen dezelfde vaste tarieven."
          }
        },
        {
          "@type": "Question",
          "name": "Wat is het verschil tussen Fijn Rit Taxi en reguliere taxi's?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wij bieden vaste prijzen (geen lopende meter), zijn altijd op tijd, en hanteren lagere tarieven dan standaard taxibedrijven."
          }
        }
      ]
    }
  ]
};

export default function GoedkopeTaxiGorinchemPage() {
  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Goedkoopste Taxi van Gorinchem</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Goedkope Taxi in Gorinchem
              <span className="block text-emerald-200 mt-2">— Vaste Lage Prijzen</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-emerald-100 max-w-3xl mx-auto mb-8">
              Op zoek naar een <strong className="text-white">goedkope taxi in Gorinchem</strong>? 
              Fijn Rit Taxi biedt vaste lage prijzen vanaf <strong className="text-white">€89</strong>. 
              Geen verrassingen, altijd op tijd, 24/7 beschikbaar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/31643463636"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Direct Boeken via WhatsApp
              </a>
              <a
                href="tel:+31643463636"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl backdrop-blur-sm transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Bel: 06 43463636
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-emerald-100">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Vaste Prijzen</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>24/7 Beschikbaar</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>1000+ Tevreden Klanten</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Taxi Gorinchem Prijzen — Altijd Scherp
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Wij bieden vaste, lage prijzen zonder verborgen kosten. 
              Vergelijk onze tarieven en zie hoeveel u bespaart!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Rotterdam */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6">
                <div className="text-sm font-medium opacity-90">Rotterdam Airport</div>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-4xl font-bold">€89</span>
                  <span className="text-lg opacity-75">vaste prijs</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Ca. 35 minuten</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Directe route
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Geen extra kosten
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Tot 4 personen
                  </li>
                </ul>
              </div>
            </div>

            {/* Eindhoven */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6">
                <div className="text-sm font-medium opacity-90">Eindhoven Airport</div>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-4xl font-bold">€119</span>
                  <span className="text-lg opacity-75">vaste prijs</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Ca. 45 minuten</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Ideaal voor budgetvluchten
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Comfortabele auto
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    24/7 beschikbaar
                  </li>
                </ul>
              </div>
            </div>

            {/* Schiphol */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-emerald-500 overflow-hidden hover:shadow-xl transition-shadow relative">
              <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                POPULAIR
              </div>
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-6">
                <div className="text-sm font-medium opacity-90">Schiphol Airport</div>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-lg line-through opacity-75">€180</span>
                  <span className="text-4xl font-bold">€129</span>
                </div>
                <div className="text-sm mt-1 opacity-90">Je bespaart €51!</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Ca. 60 minuten</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Flight tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Gratis kinderzitje
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Altijd op tijd
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Comparison note */}
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
            <p className="text-amber-800 text-sm">
              <strong>Let op:</strong> Reguliere taxi's rekenen gemiddeld €3,00 per kilometer. 
              Voor Schiphol (75km) betaalt u dan al snel <strong>€225</strong>. 
              Bij ons betaalt u slechts <strong>€129</strong> — u bespaart dus <strong>€96</strong>!
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Waarom Kiezen voor Fijn Rit Taxi?
              </h2>
              <p className="text-lg text-gray-600">
                De goedkoopste én beste taxi service in Gorinchem
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "💰",
                  title: "Vaste Lage Prijzen",
                  description: "Wat u van tevoren hoort, betaalt u. Geen extra kosten voor files of wachttijden."
                },
                {
                  icon: "⏰",
                  title: "Altijd op Tijd",
                  description: "Wij rekenen de reistijd slim uit. Zo komt u nooit te laat voor uw vlucht of afspraak."
                },
                {
                  icon: "🚗",
                  title: "Comfortabele Auto's",
                  description: "Ruime, schone auto's met airco. Genoeg ruimte voor al uw bagage."
                },
                {
                  icon: "🌙",
                  title: "24/7 Service",
                  description: "Vroege vlucht of late meeting? Geen probleem. Wij rijden dag en nacht."
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Veelgestelde Vragen over Goedkope Taxi's in Gorinchem
              </h2>
              <p className="text-gray-600">
                Antwoorden op de meest gestelde vragen
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "Hoeveel kost een taxi in Gorinchem?",
                  answer: "Bij Fijn Rit Taxi betaalt u vaste prijzen vanaf €89 naar Rotterdam Airport, €119 naar Eindhoven, en €129 naar Schiphol. Binnen Gorinchem vanaf €15. Geen verrassingen, geen extra kosten!"
                },
                {
                  question: "Is Fijn Rit Taxi goedkoper dan Uber in Gorinchem?",
                  answer: "Ja, voor langere ritten (zoals naar Schiphol) zijn wij vaak voordeliger dan Uber. Bovendien heeft u bij ons een vaste prijs zonder piektarieven of verrassingen achteraf."
                },
                {
                  question: "Zijn er verborgen kosten bij Fijn Rit Taxi?",
                  answer: "Nee, absoluut niet! U betaalt altijd de prijs die van tevoren is afgesproken. Geen extra kosten voor files, wachttijden, bagage of nachttarieven."
                },
                {
                  question: "Kan ik een goedkope taxi reserveren in Gorinchem?",
                  answer: "Ja, u kunt eenvoudig reserveren via WhatsApp of telefoon. Reserveren is gratis en u betaalt pas na de rit. Zo weet u zeker dat er op tijd een taxi voor u klaarstaat."
                },
                {
                  question: "Is er een goedkope taxi beschikbaar 's nachts in Gorinchem?",
                  answer: "Ja, Fijn Rit Taxi rijdt 24/7, ook 's nachts en in het weekend, tegen dezelfde vaste tarieven. Geen extra toeslagen voor nachtritten!"
                },
                {
                  question: "Wat is het verschil tussen Fijn Rit Taxi en reguliere taxi's?",
                  answer: "Wij bieden vaste prijzen (geen lopende meter), zijn altijd op tijd, en hanteren lagere tarieven dan standaard taxibedrijven. Bovendien zijn wij 24/7 bereikbaar via WhatsApp."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Onze Goedkope Vervoersopties
              </h2>
              <p className="text-lg text-gray-600">
                Voor elke gelegenheid de juiste taxi
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Luchthavenvervoer",
                  description: "Vaste prijzen naar Schiphol, Eindhoven en Rotterdam Airport. Altijd op tijd voor uw vlucht.",
                  price: "Vanaf €89",
                  link: "/luchthavenvervoer/"
                },
                {
                  title: "Zakelijk Vervoer",
                  description: "Representatief vervoer voor uw zakelijke afspraken. Professioneel en stipt.",
                  price: "Op aanvraag",
                  link: "/zakelijk-vervoer/"
                },
                {
                  title: "Privé Ritten",
                  description: "Persoonlijk vervoer voor alle gelegenheden. Van winkelcentrum tot familiebezoek.",
                  price: "Vanaf €15",
                  link: "/prive-ophaalservice/"
                },
                {
                  title: "Leerlingenvervoer",
                  description: "Veilig en betrouwbaar schoolvervoer voor uw kinderen. Ouders kunnen gerust zijn.",
                  price: "Op aanvraag",
                  link: "/leerlingenvervoer-gorinchem/"
                },
                {
                  title: "Zorgvervoer",
                  description: "Speciaal vervoer voor zorginstellingen en patiënten. Comfortabel en zorgzaam.",
                  price: "Op aanvraag",
                  link: "/zorgvervoer-gorinchem/"
                },
                {
                  title: "Groepsvervoer",
                  description: "Vervoer voor groepen tot 8 personen. Ideaal voor uitjes en evenementen.",
                  price: "Vanaf €25 p.p.",
                  link: "#contact"
                }
              ].map((service, index) => (
                <Link 
                  key={index} 
                  href={service.link}
                  className="group bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all border border-gray-100 hover:border-emerald-200"
                >
                  <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-600 font-semibold">{service.price}</span>
                    <span className="text-gray-400 group-hover:text-emerald-500 transition-colors">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Klaar om te Besparen?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Boek nu uw goedkope taxi in Gorinchem en ervaar het comfort van Fijn Rit Taxi. 
              Vaste lage prijzen, 24/7 beschikbaar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="https://wa.me/31643463636"
                className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-5 px-10 rounded-xl transition-all transform hover:scale-105 shadow-xl text-lg"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Direct Boeken via WhatsApp
              </a>
              <a
                href="tel:+31643463636"
                className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold py-5 px-10 rounded-xl backdrop-blur-sm transition-all text-lg"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Bel: 06 43463636
              </a>
            </div>

            <div className="text-sm text-emerald-200">
              <p>KVK: 96706147 | 24/7 Beschikbaar | Gorinchem & Omgeving</p>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Meer Informatie:</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/luchthavenvervoer/" className="text-emerald-600 hover:text-emerald-700 underline">
                Luchthavenvervoer
              </Link>
              <Link href="/zakelijk-vervoer/" className="text-emerald-600 hover:text-emerald-700 underline">
                Zakelijk Vervoer
              </Link>
              <Link href="/prive-ophaalservice/" className="text-emerald-600 hover:text-emerald-700 underline">
                Privé Ophaalservice
              </Link>
              <Link href="/leerlingenvervoer-gorinchem/" className="text-emerald-600 hover:text-emerald-700 underline">
                Leerlingenvervoer
              </Link>
              <Link href="/zorgvervoer-gorinchem/" className="text-emerald-600 hover:text-emerald-700 underline">
                Zorgvervoer
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
