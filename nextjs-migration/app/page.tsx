import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Star,
  CheckCircle,
  MessageCircle,
  ChevronRight,
  Calendar,
  Users,
  Heart,
  Briefcase,
  Plane,
  Car,
  Newspaper,
} from "lucide-react";
import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Fijn Rit Taxi | Betrouwbaar Taxi & Luchthavenvervoer in Gorinchem",
  description: "Boek uw taxi bij Fijn Rit Taxi in Gorinchem. Wij bieden comfortabel en betrouwbaar luchthavenvervoer naar Schiphol, Eindhoven & Rotterdam, privéritten, zorgvervoer en zakelijk vervoer. Vaste lage tarieven, 24/7 beschikbaar.",
  alternates: { canonical: "https://fijnerittaxi.nl" },
  openGraph: {
    title: "Fijn Rit Taxi | Betrouwbaar Taxi & Luchthavenvervoer",
    description: "Boek uw taxi bij Fijn Rit Taxi. Comfortabel luchthavenvervoer, privéritten en zakelijke diensten in Gorinchem.",
    url: "https://fijnerittaxi.nl",
    siteName: "Fijn Rit Taxi",
    images: [{ url: "https://fijnerittaxi.nl/images/cover-hero.png", width: 1200, height: 630, alt: "Fijn Rit Taxi" }],
    type: "website",
    locale: "nl_NL",
  },
};

const WA_LINK = "https://wa.me/31643463636";

const services = [
  { id: 1, title: "Luchthavenvervoer", description: "Betrouwbaar vervoer naar Schiphol, Eindhoven en Rotterdam Airport met vaste, voordelige tarieven. Wij zorgen voor een stressvrije start van uw reis.", image: "/images/service-airport.jpg", icon: Plane },
  { id: 2, title: "Privé Ophaalservice", description: "Persoonlijke ophaalservice aan huis met professionele chauffeurs. Comfortabel en veilig vervoer voor al uw privé ritten in Gorinchem en omgeving.", image: "/images/service-private.jpg", icon: Car },
  { id: 3, title: "Interstedelijke ritten", description: "Comfortabel vervoer tussen steden door heel Nederland. Of u nu naar Amsterdam, Rotterdam of Den Haag moet, wij brengen u er stipt op tijd.", image: "/images/service-intercity.jpg", icon: MapPin },
  { id: 4, title: "Leerlingenvervoer", description: "Veilig en betrouwbaar vervoer voor scholieren. Ouders kunnen met een gerust hart hun kinderen aan onze zorg toevertrouwen voor schooltransport.", image: "/images/service-student.jpg", icon: Users },
  { id: 5, title: "Zorgvervoer", description: "Speciaal vervoer voor zorginstellingen en patiënten. Wij werken samen met zorgverleners en bieden comfortabel vervoer voor mensen met speciale zorgbehoeften.", image: "/images/service-care.jpg", icon: Heart },
  { id: 6, title: "Zakelijk vervoer", description: "Professioneel zakelijk vervoer voor bedrijven en organisaties. Representatieve chauffeurs en luxe voertuigen voor uw zakelijke relaties.", image: "/images/service-business.jpg", icon: Briefcase },
];

const reviews = [
  { id: 1, name: "Maria van Dijk", rating: 5, text: "Uitstekende service! De chauffeur was stipt op tijd en heel vriendelijk. De auto was schoon en comfortabel. Zeker aan te bevelen voor luchthavenvervoer.", location: "Gorinchem" },
  { id: 2, name: "Jan Petersen", rating: 5, text: "Ik gebruik Fijn Rit Taxi regelmatig voor zakelijke ritten. Altijd professioneel en betrouwbaar. De prijzen zijn ook zeer redelijk.", location: "Dordrecht" },
  { id: 3, name: "Emma de Jong", rating: 5, text: "Mijn ouders gebruiken deze taxi service voor zorgvervoer. De chauffeurs zijn geduldig en behulpzaam. Echt een aanrader voor ouderen!", location: "Gorinchem" },
  { id: 4, name: "Pieter Bakker", rating: 5, text: "Perfecte service naar Schiphol. Geen stress meer over parkeren. De chauffeur wist precies welke route het beste was.", location: "Leerdam" },
];

const features = [
  { icon: Clock, title: "Stipt op Tijd", description: "Wij zijn altijd stipt aanwezig bij vooraf gemaakte reserveringen" },
  { icon: Shield, title: "Veilig Vervoer", description: "Schone, comfortabele en betrouwbare auto's voor uw veiligheid" },
  { icon: Star, title: "Beste Prijs", description: "Altijd lager dan standaardtarieven, zonder in te leveren op kwaliteit" },
  { icon: CheckCircle, title: "Kinderzitje", description: "Kinderzitje beschikbaar bij vooraf boeken van uw rit" },
];

const blogPreview = [
  { title: "Voordelen van Vooraf Boeken voor Luchthavenvervoer", excerpt: "Ontdek waarom het verstandig is om uw taxi naar Schiphol van tevoren te reserveren.", image: "/images/blog-1.jpg", date: "15 februari 2026", slug: "voordelen-vooraf-boeken-luchthavenvervoer" },
  { title: "Veilig Vakantievervoer voor het Hele Gezin", excerpt: "Plan uw vakantie zonder zorgen over vervoer. Wij brengen u en uw gezin veilig naar uw bestemming.", image: "/images/blog-2.jpg", date: "10 februari 2026", slug: "veilig-vakantievervoer-gezin" },
  { title: "Productief Onderweg: Zakelijk Vervoer", excerpt: "Maximaliseer uw tijd met ons zakelijk vervoer. Werk onderweg in een comfortabele omgeving.", image: "/images/blog-3.jpg", date: "5 februari 2026", slug: "productief-zakelijk-vervoer" },
];

const airportPrices = [
  { airport: "Schiphol Airport", oldPrice: "€180", newPrice: "€129", time: "ca. 60 min" },
  { airport: "Eindhoven Airport", oldPrice: "€150", newPrice: "€119", time: "ca. 45 min" },
  { airport: "Rotterdam Airport", oldPrice: "€120", newPrice: "€89", time: "ca. 35 min" },
];

export default function Home() {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-white">

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <Image src="/images/logo.png" alt="Fijn Rit Taxi" width={120} height={48} className="h-12 w-auto" priority />
              <div className="hidden md:flex items-center space-x-6">
                <a href="#home" className="text-[#1e40af] hover:text-[#f59e0b] font-semibold transition-colors">Home</a>
                <a href="#diensten" className="text-[#1e40af] hover:text-[#f59e0b] font-semibold transition-colors">Diensten</a>
                <a href="#over-ons" className="text-[#1e40af] hover:text-[#f59e0b] font-semibold transition-colors">Over Ons</a>
                <a href="#reviews" className="text-[#1e40af] hover:text-[#f59e0b] font-semibold transition-colors">Reviews</a>
                <Link href="/blog" className="text-[#1e40af] hover:text-[#f59e0b] font-semibold transition-colors flex items-center gap-1">
                  <Newspaper className="w-4 h-4" />Blog
                </Link>
                <a href="#contact" className="text-[#1e40af] hover:text-[#f59e0b] font-semibold transition-colors">Contact</a>
              </div>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-sm py-2 px-4">
                <MessageCircle className="w-4 h-4" />BOEKEN
              </a>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section id="home" className="relative min-h-screen flex items-center pt-20">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/images/cover-hero.png)" }}>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-6">
                <Star className="w-4 h-4 text-[#c9a227]" />
                <span className="text-sm font-medium">Betrouwbaar Taxi Vervoer in Gorinchem</span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Veilig, Comfortabel en <span className="text-[#c9a227]">Stipt</span> Reizen
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Fijn Rit Taxi brengt u op tijd naar uw bestemming. Met schone, comfortabele auto&apos;s en professionele chauffeurs bent u bij ons in goede handen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp justify-center">
                  <MessageCircle className="w-5 h-5" />Direct Boeken
                </a>
                <a href="#diensten" className="px-8 py-4 rounded-full font-semibold border-2 border-white text-white hover:bg-white hover:text-[#f59e0b] transition-all duration-300 text-center">
                  Onze Diensten
                </a>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
                <div><div className="text-3xl font-bold text-[#c9a227]">1000+</div><div className="text-white/80 text-sm">Tevreden Klanten</div></div>
                <div><div className="text-3xl font-bold text-[#c9a227]">24/7</div><div className="text-white/80 text-sm">Beschikbaar</div></div>
                <div><div className="text-3xl font-bold text-[#c9a227]">5★</div><div className="text-white/80 text-sm">Beoordeling</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-[#1a5f3f]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {features.map((f, i) => (
                <div key={i} className="text-center text-white">
                  <f.icon className="w-10 h-10 mx-auto mb-4 text-[#c9a227]" />
                  <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                  <p className="text-white/80 text-sm">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="diensten" className="section-padding bg-gray-50">
          <div className="container-custom mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#1a5f3f] font-semibold text-sm uppercase tracking-wider">Onze Diensten</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">Wat Wij <span className="text-gradient">Aanbieden</span></h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Van luchthavenvervoer tot zorgvervoer, wij bieden een compleet pakket voor particulieren en bedrijven in Gorinchem.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((s) => (
                <div key={s.id} className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={s.image} alt={s.title} fill className="object-cover transition-transform duration-500 hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4"><s.icon className="w-8 h-8 text-[#c9a227]" /></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{s.description}</p>
                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="w-full btn-whatsapp justify-center text-sm py-2.5">
                      <MessageCircle className="w-4 h-4" />Boek Nu via WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="over-ons" className="section-padding">
          <div className="container-custom mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image src="/images/car-interior.jpg" alt="Fijn Rit Taxi Interieur" width={600} height={400} className="w-full h-auto" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-[#1a5f3f] rounded-full flex items-center justify-center">
                      <Calendar className="w-7 h-7 text-white" />
                    </div>
                    <div><div className="text-2xl font-bold text-[#1a5f3f]">24/7</div><div className="text-gray-600 text-sm">Service</div></div>
                  </div>
                </div>
              </div>
              <div>
                <span className="text-[#1a5f3f] font-semibold text-sm uppercase tracking-wider">Over Ons</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Uw Betrouwbare <span className="text-gradient">Taxi Partner</span></h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>Veilig, Comfortabel en Stipt Reizen met Fijn Rit Taxi. Wij brengen u op tijd naar uw bestemming. Bij een vooraf gemaakte reservering zijn wij altijd stipt aanwezig.</p>
                  <p>U reist in een schone, comfortabele en betrouwbare auto. Wij bieden vaste, eerlijke tarieven voor ritten naar de luchthavens Schiphol, Eindhoven en Rotterdam.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {["Schone auto's", "Professionele chauffeurs", "Vaste tarieven", "Kinderzitje", "Kortingen", "24/7 beschikbaar"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#1a5f3f] flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 inline-flex">
                  <Phone className="w-5 h-5" />Neem Contact Op
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Airport Prices */}
        <section className="section-padding bg-[#1a5f3f] text-white">
          <div className="container-custom mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Vaste Tarieven naar <span className="text-[#c9a227]">Luchthavens</span></h2>
              <p className="text-white/80 max-w-2xl mx-auto">Vanuit Gorinchem bieden wij scherpe vaste prijzen naar alle grote luchthavens in Nederland.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {airportPrices.map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-colors">
                  <Plane className="w-12 h-12 mx-auto mb-4 text-[#c9a227]" />
                  <h3 className="text-xl font-bold mb-2">{item.airport}</h3>
                  <div className="mb-2">
                    <span className="text-xl text-white/50 line-through mr-2">{item.oldPrice}</span>
                    <span className="text-3xl font-bold text-[#c9a227]">{item.newPrice}</span>
                  </div>
                  <div className="text-white/70 text-sm">{item.time}</div>
                </div>
              ))}
            </div>
            <p className="text-center mt-8 text-white/60 text-sm">* Prijzen zijn indicatief en kunnen variëren afhankelijk van de exacte ophaallocatie</p>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="section-padding bg-gray-50">
          <div className="container-custom mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#1a5f3f] font-semibold text-sm uppercase tracking-wider">Klantbeoordelingen</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">Wat Onze <span className="text-gradient">Klanten</span> Zeggen</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {reviews.map((r) => (
                <div key={r.id} className="bg-white rounded-xl p-6 shadow-lg card-hover">
                  <div className="flex gap-1 mb-4">{[...Array(r.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-[#c9a227] text-[#c9a227]" />)}</div>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{r.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#1a5f3f] rounded-full flex items-center justify-center text-white font-semibold">{r.name.charAt(0)}</div>
                    <div><div className="font-semibold text-gray-900">{r.name}</div><div className="text-sm text-gray-500">{r.location}</div></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Preview */}
        <section className="section-padding">
          <div className="container-custom mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#1a5f3f] font-semibold text-sm uppercase tracking-wider">Blog</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">Laatste <span className="text-gradient">Nieuws</span></h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {blogPreview.map((post, i) => (
                <Link key={i} href={`/blog/${post.slug}`} className="group block bg-white rounded-2xl overflow-hidden shadow-lg card-hover">
                  <div className="h-48 overflow-hidden">
                    <Image src={post.image} alt={post.title} width={400} height={192} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                    <h3 className="text-lg font-bold mb-3 group-hover:text-[#1a5f3f] transition-colors">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <span className="text-[#1a5f3f] font-semibold text-sm flex items-center gap-1">Lees meer<ChevronRight className="w-4 h-4" /></span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/blog" className="btn-primary inline-flex"><Newspaper className="w-5 h-5" />Bekijk Alle Artikelen</Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#1a5f3f] to-[#2d8a5e]">
          <div className="container-custom mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Klaar om te Rijden?</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">Boek nu uw rit via WhatsApp en ervaar het comfort van Fijn Rit Taxi. Wij staan 24/7 voor u klaar!</p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#128C7E] transition-all duration-300 shadow-xl inline-flex items-center gap-3">
              <MessageCircle className="w-6 h-6" />Boek Nu via WhatsApp
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="bg-gray-900 text-white">
          <div className="py-16">
            <div className="container-custom mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div>
                  <div className="bg-white rounded-lg p-3 inline-block mb-6">
                    <Image src="/images/logo.png" alt="Fijn Rit Taxi" width={120} height={48} className="h-12 w-auto" />
                  </div>
                  <p className="text-gray-400 leading-relaxed">Fijn Rit Taxi is uw betrouwbare partner voor al uw vervoersbehoeften in Gorinchem en omgeving.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-6">Snelle Links</h3>
                  <ul className="space-y-3">
                    <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                    <li><a href="#diensten" className="text-gray-400 hover:text-white transition-colors">Diensten</a></li>
                    <li><a href="#over-ons" className="text-gray-400 hover:text-white transition-colors">Over Ons</a></li>
                    <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                    <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-6">Onze Diensten</h3>
                  <ul className="space-y-3">
                    <li className="text-gray-400">Luchthavenvervoer</li>
                    <li className="text-gray-400">Privé Ophaalservice</li>
                    <li className="text-gray-400">Leerlingenvervoer</li>
                    <li className="text-gray-400">Zorgvervoer</li>
                    <li className="text-gray-400">Zakelijk vervoer</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-6">Contact</h3>
                  <ul className="space-y-4">
                    <li><a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#25D366] transition-colors flex items-center gap-2"><Phone className="w-5 h-5" />+31 6 43463636</a></li>
                    <li><a href="mailto:info@fijnerittaxi.nl" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><Mail className="w-5 h-5" />info@fijnerittaxi.nl</a></li>
                    <li className="flex items-center gap-2 text-gray-400"><MapPin className="w-5 h-5" />Gorinchem, Netherlands</li>
                    <li className="flex items-center gap-2 text-gray-400"><Briefcase className="w-5 h-5" />KVK: 96706147</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 py-6">
            <div className="container-custom mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-500 text-sm">© {new Date().getFullYear()} Fijn Rit Taxi. Alle rechten voorbehouden.</div>
              <div className="text-gray-500 text-sm">KVK Nummer: 96706147 | Gorinchem, Netherlands</div>
            </div>
          </div>
        </footer>

        {/* Floating WhatsApp */}
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all duration-300 hover:scale-110 z-50 animate-float" aria-label="Contact via WhatsApp">
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>
    </>
  );
}
