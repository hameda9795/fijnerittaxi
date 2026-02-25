import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  ChevronRight,
} from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog | Fijn Rit Taxi - Nieuws en Tips",
  description: "Lees het laatste nieuws en handige tips over taxi vervoer, luchthavenvervoer, zakelijke ritten en meer. Uw betrouwbare bron voor vervoersinformatie in Gorinchem.",
  keywords: ["taxi blog", "luchthavenvervoer tips", "taxi Gorinchem nieuws", "zakelijk vervoer tips"],
  openGraph: {
    title: "Blog | Fijn Rit Taxi - Nieuws en Tips",
    description: "Lees het laatste nieuws en handige tips over taxi vervoer, luchthavenvervoer, zakelijke ritten en meer.",
    url: "https://fijnerittaxi.nl/blog",
    type: "website",
  },
  alternates: {
    canonical: "https://fijnerittaxi.nl/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link
              href="/"
              className="flex items-center gap-2 text-[#1a5f3f] hover:text-[#2d8a5e] font-medium transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Terug naar Home</span>
              <span className="sm:hidden">Terug</span>
            </Link>
            <Image
              src="/images/logo.png"
              alt="Fijn Rit Taxi"
              width={120}
              height={48}
              className="h-10 md:h-12 w-auto"
            />
            <div className="w-24">{/* Spacer for alignment */}</div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-[#1a5f3f] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-[#c9a227] font-semibold text-sm uppercase tracking-wider">Blog</span>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Nieuws en <span className="text-[#c9a227]">Informatie</span>
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Lees meer over onze diensten, tips voor reizen en waarom klanten voor Fijn Rit Taxi kiezen.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-44 md:h-52 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#1a5f3f] text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-[#1a5f3f] transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-[#1a5f3f] font-semibold text-sm">
                    Lees meer
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Fijn Rit Taxi. Alle rechten voorbehouden.
          </div>
        </div>
      </footer>
    </div>
  );
}
