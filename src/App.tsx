import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Star,
  CheckCircle,
  Menu,
  X,
  MessageCircle,
  ChevronRight,
  Calendar,
  Users,
  Heart,
  Briefcase,
  Plane,
  Car,
  Newspaper
} from 'lucide-react';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';
import './App.css';

// Services data
const services = [
  {
    id: 1,
    title: 'Luchthavenvervoer',
    description: 'Betrouwbaar vervoer naar Schiphol, Eindhoven en Rotterdam Airport met vaste, voordelige tarieven. Wij zorgen voor een stressvrije start van uw reis.',
    image: '/images/service-airport.jpg',
    icon: Plane,
    keywords: 'Schiphol taxi, airport transfer, vliegveld vervoer'
  },
  {
    id: 2,
    title: 'Privé Ophaalservice',
    description: 'Persoonlijke ophaalservice aan huis met professionele chauffeurs. Comfortabel en veilig vervoer voor al uw privé ritten in Gorinchem en omgeving.',
    image: '/images/service-private.jpg',
    icon: Car,
    keywords: 'privé taxi, ophaalservice, thuis ophalen'
  },
  {
    id: 3,
    title: 'Interstedelijke ritten',
    description: 'Comfortabel vervoer tussen steden door heel Nederland. Of u nu naar Amsterdam, Rotterdam of Den Haag moet, wij brengen u er stipt op tijd.',
    image: '/images/service-intercity.jpg',
    icon: MapPin,
    keywords: 'interstedelijk vervoer, taxi tussen steden, lange afstand'
  },
  {
    id: 4,
    title: 'Leerlingenvervoer',
    description: 'Veilig en betrouwbaar vervoer voor scholieren. Ouders kunnen met een gerust hart hun kinderen aan onze zorg toevertrouwen voor schooltransport.',
    image: '/images/service-student.jpg',
    icon: Users,
    keywords: 'schoolvervoer, leerlingen taxi, studenten vervoer'
  },
  {
    id: 5,
    title: 'Zorgvervoer',
    description: 'Speciaal vervoer voor zorginstellingen en patiënten. Wij werken samen met zorgverleners en bieden comfortabel vervoer voor mensen met speciale zorgbehoeften.',
    image: '/images/service-care.jpg',
    icon: Heart,
    keywords: 'zorgvervoer, patiëntenvervoer, medische taxi'
  },
  {
    id: 6,
    title: 'Zakelijk vervoer',
    description: 'Professioneel zakelijk vervoer voor bedrijven en organisaties. Representatieve chauffeurs en luxe voertuigen voor uw zakelijke relaties.',
    image: '/images/service-business.jpg',
    icon: Briefcase,
    keywords: 'zakelijk vervoer, business taxi, corporate transport'
  }
];

// Reviews data
const reviews = [
  {
    id: 1,
    name: 'Maria van Dijk',
    rating: 5,
    text: 'Uitstekende service! De chauffeur was stipt op tijd en heel vriendelijk. De auto was schoon en comfortabel. Zeker aan te bevelen voor luchthavenvervoer.',
    location: 'Gorinchem'
  },
  {
    id: 2,
    name: 'Jan Petersen',
    rating: 5,
    text: 'Ik gebruik Fijn Rit Taxi regelmatig voor zakelijke ritten. Altijd professioneel en betrouwbaar. De prijzen zijn ook zeer redelijk.',
    location: 'Dordrecht'
  },
  {
    id: 3,
    name: 'Emma de Jong',
    rating: 5,
    text: 'Mijn ouders gebruiken deze taxi service voor zorgvervoer. De chauffeurs zijn geduldig en behulpzaam. Echt een aanrader voor ouderen!',
    location: 'Gorinchem'
  },
  {
    id: 4,
    name: 'Pieter Bakker',
    rating: 5,
    text: 'Perfecte service naar Schiphol. Geen stress meer over parkeren. De chauffeur wist precies welke route het beste was.',
    location: 'Leerdam'
  }
];

// Features data
const features = [
  {
    icon: Clock,
    title: 'Stipt op Tijd',
    description: 'Wij zijn altijd stipt aanwezig bij vooraf gemaakte reserveringen'
  },
  {
    icon: Shield,
    title: 'Veilig Vervoer',
    description: 'Schone, comfortabele en betrouwbare auto\'s voor uw veiligheid'
  },
  {
    icon: Star,
    title: 'Beste Prijs',
    description: 'Altijd lager dan standaardtarieven, zonder in te leveren op kwaliteit'
  },
  {
    icon: CheckCircle,
    title: 'Kinderzitje',
    description: 'Kinderzitje beschikbaar bij vooraf boeken van uw rit'
  }
];

// Home Component
function Home() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/31643463636', '_blank');
  };

  const goToBlog = () => {
    navigate('/blog');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
          }`}
      >
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24 lg:h-28">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src={isScrolled ? "/images/logo-dark.png" : "/images/logo-white.png"}
                alt="Fijn Rit Taxi"
                className="h-16 md:h-20 lg:h-24 w-auto transition-opacity duration-300"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <button onClick={() => scrollToSection('home')} className={`${isScrolled ? 'text-[#1e40af] hover:text-[#f59e0b]' : 'text-[#1e40af] hover:text-[#f59e0b]'} font-bold transition-colors text-base lg:text-lg drop-shadow-md`}>
                Home
              </button>
              <button onClick={() => scrollToSection('diensten')} className={`${isScrolled ? 'text-[#1e40af] hover:text-[#f59e0b]' : 'text-[#1e40af] hover:text-[#f59e0b]'} font-bold transition-colors text-base lg:text-lg drop-shadow-md`}>
                Diensten
              </button>
              <button onClick={() => scrollToSection('over-ons')} className={`${isScrolled ? 'text-[#1e40af] hover:text-[#f59e0b]' : 'text-[#1e40af] hover:text-[#f59e0b]'} font-bold transition-colors text-base lg:text-lg drop-shadow-md`}>
                Over Ons
              </button>
              <button onClick={() => scrollToSection('reviews')} className={`${isScrolled ? 'text-[#1e40af] hover:text-[#f59e0b]' : 'text-[#1e40af] hover:text-[#c9a227]'} font-bold transition-colors text-base lg:text-lg drop-shadow-md`}>
                Reviews
              </button>
              <button onClick={goToBlog} className={`${isScrolled ? 'text-[#1e40af] hover:text-[#f59e0b]' : 'text-[#1e40af] hover:text-[#f59e0b]'} font-bold transition-colors flex items-center gap-1 text-base lg:text-lg drop-shadow-md`}>
                <Newspaper className="w-4 h-4" />
                Blog
              </button>
              <button onClick={() => scrollToSection('contact')} className={`${isScrolled ? 'text-[#1e40af] hover:text-[#f59e0b]' : 'text-[#1e40af] hover:text-[#f59e0b]'} font-bold transition-colors text-base lg:text-lg drop-shadow-md`}>
                Contact
              </button>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button onClick={openWhatsApp} className="btn-whatsapp text-sm lg:text-base py-2.5 lg:py-3 px-4 lg:px-6">
                <MessageCircle className="w-4 h-4 lg:w-5 lg:h-5" />
                BOEKEN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 text-[#1e40af]`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-4 py-4 space-y-2">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2.5 text-gray-800 hover:text-[#f59e0b] text-base">
                Home
              </button>
              <button onClick={() => scrollToSection('diensten')} className="block w-full text-left py-2.5 text-gray-800 hover:text-[#f59e0b] text-base">
                Diensten
              </button>
              <button onClick={() => scrollToSection('over-ons')} className="block w-full text-left py-2.5 text-gray-800 hover:text-[#f59e0b] text-base">
                Over Ons
              </button>
              <button onClick={() => scrollToSection('reviews')} className="block w-full text-left py-2.5 text-gray-800 hover:text-[#f59e0b] text-base">
                Reviews
              </button>
              <button onClick={goToBlog} className="block w-full text-left py-2.5 text-gray-800 hover:text-[#f59e0b] flex items-center gap-2 text-base">
                <Newspaper className="w-4 h-4" />
                Blog
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2.5 text-gray-800 hover:text-[#f59e0b] text-base">
                Contact
              </button>
              <button onClick={openWhatsApp} className="btn-whatsapp w-full justify-center mt-4 py-3">
                <MessageCircle className="w-5 h-5" />
                BOEKEN
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/cover-hero.png)' }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
          <div className="max-w-2xl animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full text-white mb-4 md:mb-6">
              <Star className="w-3 h-3 md:w-4 md:h-4 text-[#c9a227]" />
              <span className="text-xs md:text-sm font-medium">Betrouwbaar Taxi Vervoer in Gorinchem</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Veilig, Comfortabel en <span className="text-[#c9a227]">Stipt</span> Reizen
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed">
              Fijn Rit Taxi brengt u op tijd naar uw bestemming. Met schone, comfortabele auto's
              en professionele chauffeurs bent u bij ons in goede handen.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <button onClick={openWhatsApp} className="btn-whatsapp justify-center text-sm md:text-base py-3 md:py-4">
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                Direct Boeken
              </button>
              <button
                onClick={() => scrollToSection('diensten')}
                className="px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold border-2 border-white text-white 
                         hover:bg-white hover:text-[#f59e0b] transition-all duration-300 text-sm md:text-base"
              >
                Onze Diensten
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/20">
              <div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-[#c9a227]">1000+</div>
                <div className="text-white/80 text-xs md:text-sm">Tevreden Klanten</div>
              </div>
              <div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-[#c9a227]">24/7</div>
                <div className="text-white/80 text-xs md:text-sm">Beschikbaar</div>
              </div>
              <div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-[#c9a227]">5★</div>
                <div className="text-white/80 text-xs md:text-sm">Beoordeling</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-white rotate-90" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 md:py-16 bg-[#1a5f3f]">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center text-white">
                <feature.icon className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-2 md:mb-4 text-[#c9a227]" />
                <h3 className="font-semibold text-sm md:text-lg mb-1 md:mb-2">{feature.title}</h3>
                <p className="text-white/80 text-xs md:text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="diensten" className="section-padding bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-[#1a5f3f] font-semibold text-xs md:text-sm uppercase tracking-wider">Onze Diensten</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-3 md:mt-4 mb-4 md:mb-6">
              Wat Wij <span className="text-gradient">Aanbieden</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base lg:text-lg px-4">
              Van luchthavenvervoer tot zorgvervoer, wij bieden een compleet pakket aan taxi diensten
              voor particulieren en bedrijven in Gorinchem en omgeving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-4 md:px-0">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg card-hover group"
              >
                <div className="relative h-40 md:h-48 lg:h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4">
                    <service.icon className="w-6 h-6 md:w-8 md:h-8 text-[#c9a227]" />
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-base md:text-lg lg:text-xl font-bold mb-2 md:mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-3 md:mb-4 leading-relaxed text-xs md:text-sm">{service.description}</p>
                  <button
                    onClick={openWhatsApp}
                    className="w-full btn-whatsapp justify-center text-xs md:text-sm py-2.5 md:py-3"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Boek Nu via WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-8 md:mt-12 px-4">
            <button onClick={openWhatsApp} className="btn-whatsapp text-sm md:text-base py-3 md:py-4">
              <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
              Direct een Rit Boeken
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="over-ons" className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center px-4 md:px-0">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/car-interior.jpg"
                  alt="Fijn Rit Taxi Interieur"
                  className="w-full h-auto"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-4 md:-bottom-6 -right-2 md:-right-6 bg-white p-4 md:p-6 rounded-lg md:rounded-xl shadow-xl">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-[#1a5f3f] rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 md:w-7 md:h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-lg md:text-2xl font-bold text-[#1a5f3f]">24/7</div>
                    <div className="text-gray-600 text-xs md:text-sm">Service</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-[#1a5f3f] font-semibold text-xs md:text-sm uppercase tracking-wider">Over Ons</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-3 md:mt-4 mb-4 md:mb-6">
                Uw Betrouwbare <span className="text-gradient">Taxi Partner</span>
              </h2>
              <div className="space-y-3 md:space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                <p>
                  Veilig, Comfortabel en Stipt Reizen met Fijn Rit Taxi. Wij brengen u op tijd naar uw bestemming.
                  Bij een vooraf gemaakte reservering zijn wij altijd stipt aanwezig, en voor last-minute ritten
                  doen wij ons best om zo snel mogelijk bij u te zijn.
                </p>
                <p>
                  U reist in een schone, comfortabele en betrouwbare auto. Tijdens langere ritten kunt u naar uw
                  favoriete muziek luisteren en genieten van een ontspannen reis. Wanneer u uw rit van tevoren boekt,
                  kunt u ook een kinderzitje aanvragen.
                </p>
                <p>
                  Wij bieden vaste, eerlijke tarieven voor ritten naar de luchthavens Schiphol, Eindhoven en Rotterdam.
                  Onze diensten zijn beschikbaar in Gorinchem en de omgeving.
                </p>
              </div>

              {/* Checklist */}
              <div className="grid grid-cols-2 gap-2 md:gap-4 mt-6 md:mt-8">
                {[
                  'Schone auto\'s',
                  'Professionele chauffeurs',
                  'Vaste tarieven',
                  'Kinderzitje',
                  'Kortingen',
                  '24/7 beschikbaar'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 md:gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#1a5f3f] flex-shrink-0" />
                    <span className="text-gray-700 text-xs md:text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 md:mt-8">
                <button onClick={openWhatsApp} className="btn-primary text-sm md:text-base py-2.5 md:py-3">
                  <Phone className="w-4 h-4 md:w-5 md:h-5" />
                  Neem Contact Op
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Airport Prices Section */}
      <section className="section-padding bg-[#1a5f3f] text-white">
        <div className="container-custom mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              Vaste Tarieven naar <span className="text-[#c9a227]">Luchthavens</span>
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base">
              Vanuit Gorinchem en omgeving bieden wij scherpe vaste prijzen naar alle grote luchthavens in Nederland.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {[
              { airport: 'Schiphol Airport', oldPrice: '€180', newPrice: '€129', time: 'ca. 60 min' },
              { airport: 'Eindhoven Airport', oldPrice: '€150', newPrice: '€119', time: 'ca. 45 min' },
              { airport: 'Rotterdam Airport', oldPrice: '€120', newPrice: '€89', time: 'ca. 35 min' }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 text-center hover:bg-white/20 transition-colors">
                <Plane className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-[#c9a227]" />
                <h3 className="text-base md:text-xl font-bold mb-2">{item.airport}</h3>
                <div className="mb-1 md:mb-2">
                  <span className="text-lg md:text-xl text-white/50 line-through mr-2">{item.oldPrice}</span>
                  <span className="text-2xl md:text-3xl font-bold text-[#c9a227]">{item.newPrice}</span>
                </div>
                <div className="text-white/70 text-xs md:text-sm">{item.time}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 md:mt-8 text-white/60 text-xs md:text-sm">
            * Prijzen zijn indicatief en kunnen variëren afhankelijk van de exacte ophaallocatie
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="section-padding bg-gray-50">
        <div className="container-custom mx-auto px-4 md:px-0">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-[#1a5f3f] font-semibold text-xs md:text-sm uppercase tracking-wider">Klantbeoordelingen</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-3 md:mt-4 mb-4 md:mb-6">
              Wat Onze <span className="text-gradient">Klanten</span> Zeggen
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base lg:text-lg">
              Wij zijn trots op de positieve feedback van onze klanten. Lees hieronder wat zij over onze service vinden.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-lg card-hover">
                {/* Stars */}
                <div className="flex gap-1 mb-3 md:mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-[#c9a227] text-[#c9a227]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-xs md:text-sm">{review.text}</p>

                {/* Author */}
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-[#1a5f3f] rounded-full flex items-center justify-center text-white font-semibold text-sm md:text-base">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm md:text-base">{review.name}</div>
                    <div className="text-xs md:text-sm text-gray-500">{review.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto px-4 md:px-0">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-[#1a5f3f] font-semibold text-xs md:text-sm uppercase tracking-wider">Blog</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-3 md:mt-4 mb-4 md:mb-6">
              Laatste <span className="text-gradient">Nieuws</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base lg:text-lg">
              Lees meer over onze diensten, tips voor reizen en waarom klanten voor Fijn Rit Taxi kiezen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {[
              {
                title: 'Voordelen van Vooraf Boeken voor Luchthavenvervoer',
                excerpt: 'Ontdek waarom het verstandig is om uw taxi naar Schiphol of Eindhoven Airport van tevoren te reserveren.',
                image: '/images/blog-1.jpg',
                date: '15 februari 2026'
              },
              {
                title: 'Veilig Vakantievervoer voor het Hele Gezin',
                excerpt: 'Plan uw vakantie zonder zorgen over vervoer. Wij brengen u en uw gezin veilig naar uw bestemming.',
                image: '/images/blog-2.jpg',
                date: '10 februari 2026'
              },
              {
                title: 'Productief Onderweg: Zakelijk Vervoer',
                excerpt: 'Maximaliseer uw tijd met ons zakelijk vervoer. Werk onderweg in een comfortabele omgeving.',
                image: '/images/blog-3.jpg',
                date: '5 februari 2026'
              }
            ].map((post, index) => (
              <div key={index} className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg card-hover">
                <div className="h-36 md:h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4 md:p-6">
                  <div className="text-xs md:text-sm text-gray-500 mb-2">{post.date}</div>
                  <h3 className="text-sm md:text-lg font-bold mb-2 md:mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">{post.excerpt}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <button onClick={goToBlog} className="btn-primary text-sm md:text-base py-2.5 md:py-3">
              <Newspaper className="w-4 h-4 md:w-5 md:h-5" />
              Bekijk Alle Artikelen
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-[#1a5f3f] to-[#2d8a5e]">
        <div className="container-custom mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
            Klaar om te Rijden?
          </h2>
          <p className="text-white/90 text-sm md:text-base lg:text-lg max-w-2xl mx-auto mb-6 md:mb-8">
            Boek nu uw rit via WhatsApp en ervaar het comfort van Fijn Rit Taxi.
            Wij staan 24/7 voor u klaar!
          </p>
          <button onClick={openWhatsApp} className="bg-[#25D366] text-white px-6 md:px-10 py-3 md:py-4 rounded-full font-bold text-sm md:text-base lg:text-lg hover:bg-[#128C7E] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center gap-2 md:gap-3">
            <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
            Boek Nu via WhatsApp
          </button>
        </div>
      </section>

      {/* Contact & Footer Section */}
      <section id="contact" className="bg-gray-900 text-white">
        {/* Contact Info */}
        <div className="py-12 md:py-16 lg:py-20">
          <div className="container-custom mx-auto px-4 md:px-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8">
              {/* Company Info */}
              <div>
                <div className="bg-white rounded-lg p-3 inline-block mb-4 md:mb-6">
                  <img
                    src="/images/logo-dark.png"
                    alt="Fijn Rit Taxi"
                    className="h-16 md:h-20 lg:h-24 w-auto"
                  />
                </div>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  Fijn Rit Taxi is uw betrouwbare partner voor al uw vervoersbehoeften in Gorinchem en omgeving.
                  Veilig, comfortabel en stipt.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6">Snelle Links</h3>
                <ul className="space-y-2 md:space-y-3">
                  {[
                    { label: 'Home', id: 'home' },
                    { label: 'Diensten', id: 'diensten' },
                    { label: 'Over Ons', id: 'over-ons' },
                    { label: 'Reviews', id: 'reviews' },
                    { label: 'Blog', action: goToBlog },
                    { label: 'Contact', id: 'contact' }
                  ].map((link, idx) => (
                    <li key={idx}>
                      {link.action ? (
                        <button
                          onClick={link.action}
                          className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                        >
                          {link.label}
                        </button>
                      ) : (
                        <button
                          onClick={() => scrollToSection(link.id!)}
                          className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                        >
                          {link.label}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6">Onze Diensten</h3>
                <ul className="space-y-2 md:space-y-3">
                  {[
                    { label: 'Luchthavenvervoer', id: 'diensten' },
                    { label: 'Privé Ophaalservice', id: 'diensten' },
                    { label: 'Interstedelijke ritten', id: 'diensten' },
                    { label: 'Leerlingenvervoer', id: 'diensten' },
                    { label: 'Zorgvervoer', id: 'diensten' },
                    { label: 'Zakelijk vervoer', id: 'diensten' }
                  ].map((service, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => scrollToSection(service.id)}
                        className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                      >
                        {service.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6">Contact</h3>
                <ul className="space-y-3 md:space-y-4">
                  <li>
                    <a
                      href="https://wa.me/31643463636"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 md:gap-3 text-gray-400 hover:text-[#25D366] transition-colors text-sm md:text-base"
                    >
                      <Phone className="w-4 h-4 md:w-5 md:h-5" />
                      +31 6 43463636
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@fijnerittaxi.nl"
                      className="flex items-center gap-2 md:gap-3 text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                    >
                      <Mail className="w-4 h-4 md:w-5 md:h-5" />
                      info@fijnerittaxi.nl
                    </a>
                  </li>
                  <li className="flex items-center gap-2 md:gap-3 text-gray-400 text-sm md:text-base">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                    Gorinchem, Netherlands
                  </li>
                  <li className="flex items-center gap-2 md:gap-3 text-gray-400 text-sm md:text-base">
                    <Briefcase className="w-4 h-4 md:w-5 md:h-5" />
                    KVK: 96706147
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-4 md:py-6">
          <div className="container-custom mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
              <div className="text-gray-500 text-xs md:text-sm text-center md:text-left">
                © {new Date().getFullYear()} Fijn Rit Taxi. Alle rechten voorbehouden.
              </div>
              <div className="text-gray-500 text-xs md:text-sm text-center md:text-right">
                KVK Nummer: 96706147 | Gorinchem, Netherlands
              </div>
            </div>
          </div>
        </div>
      </section>

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

// Main App Component
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog onBack={() => window.history.back()} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
