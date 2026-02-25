import { Plane, Car, Heart, Briefcase, Shield, Users, MapPin, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  keywords: string;
  icon: LucideIcon;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Voordelen van Vooraf Boeken voor Luchthavenvervoer",
    slug: "voordelen-vooraf-boeken-luchthavenvervoer",
    excerpt: "Ontdek waarom het verstandig is om uw taxi naar Schiphol of Eindhoven Airport van tevoren te reserveren. Stiptheid, zekerheid en rust.",
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
    image: "/images/blog-1.jpg",
    author: "Fijn Rit Taxi",
    date: "15 februari 2026",
    readTime: "4 min",
    category: "Luchthavenvervoer",
    icon: Plane,
    keywords: "Schiphol taxi boeken, luchthavenvervoer reserveren, airport transfer",
  },
  {
    id: 2,
    title: "Veilig Vakantievervoer voor het Hele Gezin",
    slug: "veilig-vakantievervoer-gezin",
    excerpt: "Plan uw vakantie zonder zorgen over vervoer. Wij brengen u en uw gezin veilig naar uw vakantiebestemming of de luchthaven.",
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
    image: "/images/blog-2.jpg",
    author: "Fijn Rit Taxi",
    date: "10 februari 2026",
    readTime: "3 min",
    category: "Vakantie",
    icon: Car,
    keywords: "vakantievervoer, gezinstaxi, vakantie taxi",
  },
  {
    id: 3,
    title: "Productief Onderweg: Zakelijk Vervoer",
    slug: "productief-zakelijk-vervoer",
    excerpt: "Maximaliseer uw tijd met ons zakelijk vervoer. Werk onderweg in een comfortabele omgeving terwijl wij u naar uw bestemming brengen.",
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
    image: "/images/blog-3.jpg",
    author: "Fijn Rit Taxi",
    date: "5 februari 2026",
    readTime: "4 min",
    category: "Zakelijk",
    icon: Briefcase,
    keywords: "zakelijk vervoer, business taxi, corporate transport",
  },
  {
    id: 4,
    title: "Zorgvervoer: Speciale Aandacht voor Iedereen",
    slug: "zorgvervoer-speciale-aandacht",
    excerpt: "Ons zorgvervoer biedt comfortabele en veilige ritten voor mensen met speciale zorgbehoeften. Geduldig, behulpzaam en betrouwbaar.",
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
    image: "/images/blog-4.jpg",
    author: "Fijn Rit Taxi",
    date: "1 februari 2026",
    readTime: "3 min",
    category: "Zorgvervoer",
    icon: Heart,
    keywords: "zorgvervoer, patiëntenvervoer, medische taxi",
  },
  {
    id: 5,
    title: "Veilig Thuiskomen: Taxi in de Nacht",
    slug: "veilig-thuiskomen-nacht",
    excerpt: "Onze 24/7 service zorgt ervoor dat u altijd veilig thuiskomt, ook na een avondje uit of een late werkdag.",
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
    image: "/images/blog-5.jpg",
    author: "Fijn Rit Taxi",
    date: "28 januari 2026",
    readTime: "3 min",
    category: "Veiligheid",
    icon: Shield,
    keywords: "nacht taxi, 24/7 taxi, veilig thuis",
  },
  {
    id: 6,
    title: "Leerlingenvervoer: Veilig naar School",
    slug: "leerlingenvervoer-veilig-school",
    excerpt: "Vertrouw uw kinderen toe aan onze betrouwbare leerlingenvervoer service. Veilig, stipt en met zorg voor uw kinderen.",
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
    image: "/images/blog-6.jpg",
    author: "Fijn Rit Taxi",
    date: "25 januari 2026",
    readTime: "4 min",
    category: "Onderwijs",
    icon: Users,
    keywords: "schoolvervoer, leerlingen taxi, studenten vervoer",
  },
  {
    id: 7,
    title: "Toegankelijk Vervoer voor Iedereen",
    slug: "toegankelijk-vervoer-iedereen",
    excerpt: "Iedereen verdient mobiliteit. Ontdek onze mogelijkheden voor toegankelijk vervoer, inclusief rolstoelvervoer.",
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
    image: "/images/blog-7.jpg",
    author: "Fijn Rit Taxi",
    date: "20 januari 2026",
    readTime: "3 min",
    category: "Toegankelijkheid",
    icon: Heart,
    keywords: "rolstoelvervoer, toegankelijke taxi, aangepast vervoer",
  },
  {
    id: 8,
    title: "Ontdek Gorinchem met Fijn Rit Taxi",
    slug: "ontdek-gorinchem",
    excerpt: "Gorinchem is een prachtige stad met veel te bieden. Laat u rondrijden en ontdek alle bezienswaardigheden comfortabel.",
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
    image: "/images/blog-8.jpg",
    author: "Fijn Rit Taxi",
    date: "15 januari 2026",
    readTime: "4 min",
    category: "Gorinchem",
    icon: MapPin,
    keywords: "taxi Gorinchem, stadstour, bezienswaardigheden",
  },
  {
    id: 9,
    title: "Groepsvervoer voor Bedrijven en Evenementen",
    slug: "groepsvervoer-bedrijven-evenementen",
    excerpt: "Organiseert u een bedrijfsuitje, teambuilding of evenement? Wij verzorgen groepsvervoer voor groepen van alle groottes.",
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
    image: "/images/blog-9.jpg",
    author: "Fijn Rit Taxi",
    date: "10 januari 2026",
    readTime: "3 min",
    category: "Groepsvervoer",
    icon: Users,
    keywords: "groepsvervoer, bedrijfsuitje, evenementenvervoer",
  },
  {
    id: 10,
    title: "Waarom Klanten voor Fijn Rit Taxi Kiezen",
    slug: "waarom-klanten-kiezen",
    excerpt: "Lees waarom zoveel klanten in Gorinchem en omgeving kiezen voor Fijn Rit Taxi. Ervaringen en beoordelingen.",
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
    image: "/images/blog-10.jpg",
    author: "Fijn Rit Taxi",
    date: "5 januari 2026",
    readTime: "4 min",
    category: "Klanten",
    icon: Star,
    keywords: "taxi ervaringen, klantbeoordelingen, Fijn Rit Taxi",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return blogPosts;
}

export function getRelatedPosts(currentSlug: string): BlogPost[] {
  return blogPosts.filter((post) => post.slug !== currentSlug).slice(0, 3);
}
