import { useEffect, useState } from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  MessageCircle,
  ChevronRight,
  Plane,
  MapPin,
  Star,
  Shield,
  Heart,
  Briefcase,
  Car,
  Users,
  Phone,
  Mail
} from 'lucide-react';

// Blog posts data in Dutch
const blogPosts = [
  {
    id: 1,
    title: 'Voordelen van Vooraf Boeken voor Luchthavenvervoer',
    excerpt: 'Ontdek waarom het verstandig is om uw taxi naar Schiphol of Eindhoven Airport van tevoren te reserveren. Stiptheid, zekerheid en rust.',
    content: `Wanneer u een vlucht heeft gepland, is het laatste waar u zich zorgen over wilt maken het vervoer naar de luchthaven. Door vooraf te boeken bij Fijn Rit Taxi, geniet u van diverse voordelen.

**Stiptheid en Betrouwbaarheid**
Bij een vooraf gemaakte reservering zijn wij altijd stipt aanwezig op het afgesproken tijdstip. U hoeft niet te wachten of zich zorgen te maken over vertragingen.

**Vaste Prijzen**
Wij bieden vaste, eerlijke tarieven voor ritten naar Schiphol, Eindhoven en Rotterdam Airport. Zo weet u precies waar u aan toe bent, zonder verrassingen achteraf.

**Comfort en Gemak**
Onze auto's zijn schoon, comfortabel en goed onderhouden. Tijdens de rit kunt u ontspannen of uw reisdocumenten doornemen.

**Kinderzitje Beschikbaar**
Wanneer u van tevoren boekt, kunt u een kinderzitje aanvragen. Zo reist uw hele gezin veilig en comfortabel.

Boek vandaag nog uw luchthavenvervoer en ervaar het verschil!`,
    image: '/images/blog-1.jpg',
    author: 'Fijn Rit Taxi',
    date: '15 februari 2026',
    readTime: '4 min',
    category: 'Luchthavenvervoer',
    icon: Plane,
    keywords: 'Schiphol taxi boeken, luchthavenvervoer reserveren, airport transfer'
  },
  {
    id: 2,
    title: 'Veilig Vakantievervoer voor het Hele Gezin',
    excerpt: 'Plan uw vakantie zonder zorgen over vervoer. Wij brengen u en uw gezin veilig naar uw vakantiebestemming of de luchthaven.',
    content: `De vakantieperiode is een tijd om te ontspannen en te genieten. Fijn Rit Taxi zorgt ervoor dat uw vakantie al goed begint met comfortabel en veilig vervoer.

**Ruimte voor Bagage**
Onze voertuigen bieden voldoende ruimte voor al uw koffers en vakantiespullen. Geen gedoe met inpakken of beperkte bagageruimte.

**Kinderen Welkom**
Wij begrijpen dat reizen met kinderen extra aandacht vereist. Op verzoek plaatsen wij een kinderzitje, zodat uw kleintjes veilig mee kunnen.

**Flexibele Ophaaltijden**
Of u nu vroeg in de ochtend of laat in de avond vertrekt, wij passen ons aan uw schema aan. Onze 24/7 service staat altijd voor u klaar.

**Retourritten met Korting**
Boek direct uw heen- en terugreis en profiteer van aantrekkelijke kortingen op de terugrit.

Begin uw vakantie ontspannen met Fijn Rit Taxi!`,
    image: '/images/blog-2.jpg',
    author: 'Fijn Rit Taxi',
    date: '10 februari 2026',
    readTime: '3 min',
    category: 'Vakantie',
    icon: Car,
    keywords: 'vakantievervoer, gezinstaxi, vakantie taxi'
  },
  {
    id: 3,
    title: 'Productief Onderweg: Zakelijk Vervoer',
    excerpt: 'Maximaliseer uw tijd met ons zakelijk vervoer. Werk onderweg in een comfortabele omgeving terwijl wij u naar uw bestemming brengen.',
    content: `Voor zakelijke klanten is tijd geld. Fijn Rit Taxi biedt professioneel zakelijk vervoer waarbij u onderweg gewoon kunt doorwerken.

**Representatief en Professioneel**
Onze chauffeurs zijn representatief gekleed en begrijpen de etiquette van zakelijk vervoer. Uw zakelijke relaties worden met respect behandeld.

**Comfortabele Werkomgeving**
Onze auto's bieden een rustige en comfortabele omgeving waar u telefoongesprekken kunt voeren of op uw laptop kunt werken.

**Stiptheid is Key**
In het zakenleven is stiptheid essentieel. Wij zorgen ervoor dat u altijd op tijd aankomt bij uw afspraken, vergaderingen of conferenties.

**Vaste Relatievoordelen**
Voor bedrijven die regelmatig gebruik maken van onze diensten bieden wij speciale tarieven en een vaste contactpersoon.

**Vanuit Gorinchem naar heel Nederland**
Of u nu naar Amsterdam, Rotterdam of Den Haag moet, wij brengen u er professioneel naartoe.

Neem contact op voor een zakelijk voorstel op maat!`,
    image: '/images/blog-3.jpg',
    author: 'Fijn Rit Taxi',
    date: '5 februari 2026',
    readTime: '4 min',
    category: 'Zakelijk',
    icon: Briefcase,
    keywords: 'zakelijk vervoer, business taxi, corporate transport'
  },
  {
    id: 4,
    title: 'Zorgvervoer: Speciale Aandacht voor Iedereen',
    excerpt: 'Ons zorgvervoer biedt comfortabele en veilige ritten voor mensen met speciale zorgbehoeften. Geduldig, behulpzaam en betrouwbaar.',
    content: `Fijn Rit Taxi werkt graag samen met zorginstellingen en biedt speciale zorg aan mensen die extra aandacht nodig hebben tijdens het vervoer.

**Geduldige Chauffeurs**
Onze chauffeurs zijn getraind in het omgaan met mensen die extra tijd of hulp nodig hebben. Er is alle tijd en aandacht voor elke passagier.

**Comfortabele In- en Uitstap**
Wij zorgen voor een comfortabele in- en uitstap, met extra aandacht voor mobiliteit en veiligheid.

**Op tijd voor Afspraken**
Of het nu gaat om een bezoek aan het ziekenhuis, de fysiotherapeut of een dagbesteding, wij brengen u stipt op tijd.

**Samenwerking met Zorginstellingen**
Wij werken samen met diverse zorginstellingen in Gorinchem en omgeving om naadloos vervoer te bieden.

**Rolstoeltoegankelijk**
Vraag naar onze mogelijkheden voor rolstoelvervoer.

Neem contact op voor meer informatie over ons zorgvervoer!`,
    image: '/images/blog-4.jpg',
    author: 'Fijn Rit Taxi',
    date: '1 februari 2026',
    readTime: '3 min',
    category: 'Zorgvervoer',
    icon: Heart,
    keywords: 'zorgvervoer, patiëntenvervoer, medische taxi'
  },
  {
    id: 5,
    title: 'Veilig Thuiskomen: Taxi in de Nacht',
    excerpt: 'Onze 24/7 service zorgt ervoor dat u altijd veilig thuiskomt, ook na een avondje uit of een late werkdag.',
    content: `De nacht brengt soms uitdagingen met zich mee voor vervoer. Fijn Rit Taxi staat 24 uur per dag, 7 dagen per week voor u klaar.

**Altijd Beschikbaar**
Of u nu laat werkt, een feestje heeft of een vroege vlucht heeft, wij zijn er om u veilig te vervoeren.

**Veiligheid Voorop**
Onze chauffeurs zijn ervaren in nachtelijk rijden en kennen de wegen in en rond Gorinchem als hun broekzak.

**Geen Zorgen over Parkeren**
Na een avondje uit hoeft u niet meer te zoeken naar een parkeerplaats of te rijden na het drinken. Wij brengen u veilig thuis.

**Vaste Prijzen**
Ook 's nachts hanteren wij transparante en eerlijke prijzen, zonder nachttoeslagen.

**Snelle Responstijd**
Voor last-minute ritten doen wij ons best om zo snel mogelijk bij u te zijn.

Bel ons voor een veilige rit naar huis!`,
    image: '/images/blog-5.jpg',
    author: 'Fijn Rit Taxi',
    date: '28 januari 2026',
    readTime: '3 min',
    category: 'Veiligheid',
    icon: Shield,
    keywords: 'nacht taxi, 24/7 taxi, veilig thuis'
  },
  {
    id: 6,
    title: 'Leerlingenvervoer: Veilig naar School',
    excerpt: 'Vertrouw uw kinderen toe aan onze betrouwbare leerlingenvervoer service. Veilig, stipt en met zorg voor uw kinderen.',
    content: `Als ouder wilt u dat uw kinderen veilig en op tijd op school aankomen. Fijn Rit Taxi biedt betrouwbaar leerlingenvervoer in Gorinchem en omgeving.

**Ervaren Chauffeurs**
Onze chauffeurs hebben ervaring met het vervoer van kinderen en begrijpen het belang van veiligheid en betrouwbaarheid.

**Stipt op Tijd**
Wij zorgen ervoor dat uw kinderen nooit te laat komen op school. Punctualiteit staat bij ons hoog in het vaandel.

**Veilige Voertuigen**
Onze auto's worden regelmatig gecontroleerd en onderhouden voor maximale veiligheid.

**Kinderzitje Beschikbaar**
Voor jongere kinderen zorgen wij voor passende kinderzitjes, conform de wettelijke voorschriften.

**Flexibele Routes**
Wij stemmen de ophaal- en afzetlocaties af op uw wensen en het schoolrooster.

**Contact met Ouders**
Wij houden ouders op de hoogte van eventuele wijzigingen of vertragingen.

Neem contact op voor meer informatie over ons leerlingenvervoer!`,
    image: '/images/blog-6.jpg',
    author: 'Fijn Rit Taxi',
    date: '25 januari 2026',
    readTime: '4 min',
    category: 'Onderwijs',
    icon: Users,
    keywords: 'schoolvervoer, leerlingen taxi, studenten vervoer'
  },
  {
    id: 7,
    title: 'Toegankelijk Vervoer voor Iedereen',
    excerpt: 'Iedereen verdient mobiliteit. Ontdek onze mogelijkheden voor toegankelijk vervoer, inclusief rolstoelvervoer.',
    content: `Bij Fijn Rit Taxi vinden wij dat iedereen moet kunnen reizen, ongeacht mobiliteitsbeperkingen. Wij bieden toegankelijk vervoer voor iedereen.

**Rolstoelvervoer**
Vraag naar onze mogelijkheden voor rolstoelvervoer. Wij zorgen voor een veilige en comfortabele rit.

**Hulp bij In- en Uitstappen**
Onze chauffeurs helpen passagiers die extra ondersteuning nodig hebben bij het in- en uitstappen.

**Geduld en Aandacht**
Er is alle tijd voor elke passagier. Wij zorgen ervoor dat iedereen zich op zijn gemak voelt tijdens de rit.

**Samenwerking met Zorgverleners**
Wij werken samen met zorgverleners en therapeuten om het vervoer af te stemmen op specifieke behoeften.

**Vaste Chauffeurs**
Voor regelmatige ritten kunt u een vaste chauffeur aanvragen, zodat u altijd een bekend gezicht ziet.

Neem contact op om de mogelijkheden te bespreken!`,
    image: '/images/blog-7.jpg',
    author: 'Fijn Rit Taxi',
    date: '20 januari 2026',
    readTime: '3 min',
    category: 'Toegankelijkheid',
    icon: Heart,
    keywords: 'rolstoelvervoer, toegankelijke taxi, aangepast vervoer'
  },
  {
    id: 8,
    title: 'Ontdek Gorinchem met Fijn Rit Taxi',
    excerpt: 'Gorinchem is een prachtige stad met veel te bieden. Laat u rondrijden en ontdek alle bezienswaardigheden comfortabel.',
    content: `Gorinchem, ook wel Gorkum genoemd, is een historische stad met een rijk verleden. Fijn Rit Taxi helpt u graag bij het ontdekken van deze mooie stad.

**Historische Binnenstad**
Bezoek de vestingwerken, de Grote Kerk en de vele monumentale panden in het centrum van Gorinchem.

**Winkelcentrum Westfield**
Voor een dagje winkelen brengen wij u graag naar winkelcentrum Westfield, één van de grootste winkelcentra van Nederland.

**Evenementen en Festivals**
Gorinchem kent vele evenementen door het jaar heen. Wij brengen u er graag naartoe en halen u weer op.

**Restaurants en Horeca**
Geniet van het uitgebreide aanbod aan restaurants en cafés in Gorinchem. Wij zorgen voor veilig vervoer, ook na een avondje uit.

**Dagtrips vanuit Gorinchem**
Vanuit Gorinchem kunt u gemakkelijk diverse dagtrips maken naar steden als Dordrecht, Rotterdam of Den Bosch.

Boek een rit en ontdek Gorinchem!`,
    image: '/images/blog-8.jpg',
    author: 'Fijn Rit Taxi',
    date: '15 januari 2026',
    readTime: '4 min',
    category: 'Gorinchem',
    icon: MapPin,
    keywords: 'taxi Gorinchem, stadstour, bezienswaardigheden'
  },
  {
    id: 9,
    title: 'Groepsvervoer voor Bedrijven en Evenementen',
    excerpt: 'Organiseert u een bedrijfsuitje, teambuilding of evenement? Wij verzorgen groepsvervoer voor groepen van alle groottes.',
    content: `Fijn Rit Taxi biedt niet alleen individueel vervoer, maar ook groepsvervoer voor bedrijven en organisaties.

**Bedrijfsuitjes**
Of het nu gaat om een teambuilding, kerstborrel of jubileum, wij zorgen ervoor dat iedereen veilig op de bestemming aankomt.

**Meerdere Voertuigen**
Voor grotere groepen kunnen wij meerdere voertuigen inzetten, zodat iedereen tegelijkertijd arriveert.

**Conferenties en Beurzen**
Wij verzorgen vervoer voor deelnemers aan conferenties, beurzen en zakelijke evenementen.

**Vaste Tarieven**
Voor bedrijven bieden wij aantrekkelijke tarieven en duidelijke afspraken.

**Flexibele Planning**
Wij passen ons aan uw programma aan en zijn flexibel bij wijzigingen.

**Representatief**
Onze chauffeurs en voertuigen zijn representatief voor uw bedrijf.

Neem contact op voor een offerte op maat!`,
    image: '/images/blog-9.jpg',
    author: 'Fijn Rit Taxi',
    date: '10 januari 2026',
    readTime: '3 min',
    category: 'Groepsvervoer',
    icon: Users,
    keywords: 'groepsvervoer, bedrijfsuitje, evenementenvervoer'
  },
  {
    id: 10,
    title: 'Waarom Klanten voor Fijn Rit Taxi Kiezen',
    excerpt: 'Lees waarom zoveel klanten in Gorinchem en omgeving kiezen voor Fijn Rit Taxi. Ervaringen en beoordelingen.',
    content: `Fijn Rit Taxi heeft in korte tijd een trouwe klantenkring opgebouwd in Gorinchem en omgeving. Waarom kiezen klanten voor ons?

**Stiptheid**
"Altijd op tijd, zelfs vroeg in de ochtend." - Maria van Dijk

**Vriendelijkheid**
"De chauffeurs zijn altijd vriendelijk en behulpzaam." - Jan Petersen

**Schone Auto's**
"De auto's zijn altijd schoon en ruiken lekker fris." - Emma de Jong

**Eerlijke Prijzen**
"Geen verrassingen achteraf, de prijs is de prijs." - Pieter Bakker

**Flexibiliteit**
"Ook last-minute kunnen zij mij helpen." - Sophie van den Berg

**Veiligheid**
"Ik voel me altijd veilig tijdens de rit." - Robert Jansen

**Kinderen**
"Mijn kinderen vinden het heerlijk om met deze taxi te rijden." - Linda Vermeer

Wij zijn trots op de positieve feedback van onze klanten en blijven ons inzetten voor de beste service.

Word ook een tevreden klant en boek vandaag nog!`,
    image: '/images/blog-10.jpg',
    author: 'Fijn Rit Taxi',
    date: '5 januari 2026',
    readTime: '4 min',
    category: 'Klanten',
    icon: Star,
    keywords: 'taxi ervaringen, klantbeoordelingen, Fijn Rit Taxi'
  }
];

interface BlogProps {
  onBack: () => void;
}

function Blog({ onBack }: BlogProps) {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openWhatsApp = () => {
    window.open('https://wa.me/31643463636', '_blank');
  };

  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, idx) => {
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return (
          <h3 key={idx} className="text-lg md:text-xl font-bold mt-6 md:mt-8 mb-3 md:mb-4 text-[#1a5f3f]">
            {paragraph.replace(/\*\*/g, '')}
          </h3>
        );
      }
      return (
        <p key={idx} className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">
          {paragraph.replace(/\*\*/g, '')}
        </p>
      );
    });
  };

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14 md:h-20">
              <button 
                onClick={() => setSelectedPost(null)}
                className="flex items-center gap-2 text-[#1a5f3f] hover:text-[#2d8a5e] font-medium transition-colors text-sm md:text-base"
              >
                <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
                <span className="hidden sm:inline">Terug naar Blog</span>
                <span className="sm:hidden">Terug</span>
              </button>
              <img 
                src="/images/logo.png" 
                alt="Fijn Rit Taxi" 
                className="h-8 md:h-12 w-auto"
              />
              <button onClick={openWhatsApp} className="btn-whatsapp text-xs md:text-sm py-2 md:py-3 px-3 md:px-6">
                <MessageCircle className="w-4 h-4" />
                <span className="hidden sm:inline">BOEKEN</span>
              </button>
            </div>
          </div>
        </header>

        {/* Article Hero */}
        <div className="relative h-48 md:h-64 lg:h-80">
          <img 
            src={selectedPost.image} 
            alt={selectedPost.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
              <span className="inline-block bg-[#1a5f3f] text-white px-3 py-1 rounded-full text-xs md:text-sm font-medium mb-3">
                {selectedPost.category}
              </span>
              <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                {selectedPost.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-gray-500 mb-6 md:mb-8 pb-6 md:pb-8 border-b border-gray-200">
            <span className="flex items-center gap-1.5 text-sm">
              <User className="w-4 h-4" />
              {selectedPost.author}
            </span>
            <span className="flex items-center gap-1.5 text-sm">
              <Calendar className="w-4 h-4" />
              {selectedPost.date}
            </span>
            <span className="flex items-center gap-1.5 text-sm">
              <Clock className="w-4 h-4" />
              {selectedPost.readTime} leestijd
            </span>
          </div>

          {/* Content */}
          <div className="prose prose-gray max-w-none">
            {renderContent(selectedPost.content)}
          </div>

          {/* Keywords */}
          <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200">
            <p className="text-xs md:text-sm text-gray-400">
              <span className="font-medium">Keywords:</span> {selectedPost.keywords}
            </p>
          </div>

          {/* CTA Box */}
          <div className="mt-8 md:mt-12 bg-gradient-to-r from-[#1a5f3f] to-[#2d8a5e] rounded-xl md:rounded-2xl p-6 md:p-8 text-center">
            <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-3">
              Klaar om te Rijden?
            </h3>
            <p className="text-white/90 text-sm md:text-base mb-4 md:mb-6">
              Boek nu uw rit via WhatsApp en ervaar het comfort van Fijn Rit Taxi.
            </p>
            <button onClick={openWhatsApp} className="btn-whatsapp text-sm md:text-base">
              <MessageCircle className="w-5 h-5" />
              Boek Nu via WhatsApp
            </button>
          </div>
        </article>

        {/* Related Posts */}
        <section className="bg-white py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Gerelateerde Artikelen</h2>
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {blogPosts
                .filter(post => post.id !== selectedPost.id)
                .slice(0, 3)
                .map((post) => (
                  <div 
                    key={post.id} 
                    onClick={() => setSelectedPost(post)}
                    className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="h-32 md:h-40 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-xs text-[#1a5f3f] font-medium">{post.category}</span>
                      <h3 className="text-sm md:text-base font-bold mt-1 line-clamp-2">{post.title}</h3>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="bg-white rounded-lg p-2">
                <img 
                  src="/images/logo.png" 
                  alt="Fijn Rit Taxi" 
                  className="h-8 md:h-10 w-auto"
                />
              </div>
              <div className="text-center md:text-right">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Phone className="w-4 h-4" />
                  <a href="https://wa.me/31643463636" className="hover:text-[#25D366]">+31 6 43463636</a>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:info@fijnerittaxi.nl" className="hover:text-white">info@fijnerittaxi.nl</a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-500 text-xs md:text-sm">
              © {new Date().getFullYear()} Fijn Rit Taxi. Alle rechten voorbehouden.
            </div>
          </div>
        </footer>

        {/* Floating WhatsApp Button */}
        <button 
          onClick={openWhatsApp}
          className="fixed bottom-4 md:bottom-6 right-4 md:right-6 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all duration-300 hover:scale-110 z-50 animate-float"
        >
          <MessageCircle className="w-5 h-5 md:w-7 md:h-7" />
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-20">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-[#1a5f3f] hover:text-[#2d8a5e] font-medium transition-colors text-sm md:text-base"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">Terug naar Home</span>
              <span className="sm:hidden">Terug</span>
            </button>
            <img 
              src="/images/logo.png" 
              alt="Fijn Rit Taxi" 
              className="h-8 md:h-12 w-auto"
            />
            <button onClick={openWhatsApp} className="btn-whatsapp text-xs md:text-sm py-2 md:py-3 px-3 md:px-6">
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">BOEKEN</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-[#1a5f3f] text-white py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-[#c9a227] font-semibold text-xs md:text-sm uppercase tracking-wider">Blog</span>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mt-3 md:mt-4 mb-4 md:mb-6">
              Nieuws en <span className="text-[#c9a227]">Informatie</span>
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base lg:text-lg">
              Lees meer over onze diensten, tips voor reizen en waarom klanten voor Fijn Rit Taxi kiezen.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              onClick={() => setSelectedPost(post)}
              className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
            >
              {/* Image */}
              <div className="relative h-40 md:h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 md:top-4 left-3 md:left-4">
                  <span className="bg-[#1a5f3f] text-white px-2.5 md:px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6">
                {/* Meta */}
                <div className="flex items-center gap-3 text-xs md:text-sm text-gray-500 mb-2 md:mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 md:w-4 md:h-4" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-base md:text-lg font-bold mb-2 md:mb-3 text-gray-900 line-clamp-2 group-hover:text-[#1a5f3f] transition-colors">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <div className="flex items-center text-[#1a5f3f] font-semibold text-sm">
                  Lees meer
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#1a5f3f] text-white py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-4">Klaar om te Rijden?</h2>
          <p className="text-white/80 text-sm md:text-base mb-6 md:mb-8">
            Boek nu uw rit via WhatsApp en ervaar het comfort van Fijn Rit Taxi.
          </p>
          <button onClick={openWhatsApp} className="btn-whatsapp text-sm md:text-base">
            <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
            Boek Nu via WhatsApp
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="bg-white rounded-lg p-2">
              <img 
                src="/images/logo.png" 
                alt="Fijn Rit Taxi" 
                className="h-8 md:h-10 w-auto"
              />
            </div>
            <div className="text-center md:text-right">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4" />
                <a href="https://wa.me/31643463636" className="hover:text-[#25D366]">+31 6 43463636</a>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@fijnerittaxi.nl" className="hover:text-white">info@fijnerittaxi.nl</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-500 text-xs md:text-sm">
            © {new Date().getFullYear()} Fijn Rit Taxi. Alle rechten voorbehouden.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button 
        onClick={openWhatsApp}
        className="fixed bottom-4 md:bottom-6 right-4 md:right-6 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all duration-300 hover:scale-110 z-50 animate-float"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-5 h-5 md:w-7 md:h-7" />
      </button>
    </div>
  );
}

export default Blog;
