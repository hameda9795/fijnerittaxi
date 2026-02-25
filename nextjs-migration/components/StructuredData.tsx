"use client";
import Script from "next/script";

export default function StructuredData() {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://fijnerittaxi.nl",
    name: "Fijn Rit Taxi",
    image: "https://fijnerittaxi.nl/images/logo.png",
    url: "https://fijnerittaxi.nl",
    telephone: "+31643463636",
    email: "info@fijnerittaxi.nl",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gorinchem",
      addressRegion: "ZH",
      addressCountry: "NL",
    },
    openingHoursSpecification: [{
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "00:00",
      closes: "23:59",
    }],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "1000",
    },
  };

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Taxi Service",
    provider: { "@type": "LocalBusiness", name: "Fijn Rit Taxi" },
    areaServed: { "@type": "City", name: "Gorinchem" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Taxi Diensten",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Luchthavenvervoer" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Privé Ophaalservice" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Zakelijk vervoer" } },
      ],
    },
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://fijnerittaxi.nl/",
    }],
  };

  return (
    <>
      <Script id="local-business-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }} />
      <Script id="service-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }} />
      <Script id="breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
    </>
  );
}
