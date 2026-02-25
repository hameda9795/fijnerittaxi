import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import {
  ArrowLeft, Calendar, Clock, User, MessageCircle, ChevronRight,
} from "lucide-react";
import { getPostBySlug, getAllPosts, getRelatedPosts } from "@/lib/blog-data";

const WA_LINK = "https://wa.me/31643463636";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Artikel niet gevonden | Fijn Rit Taxi" };

  return {
    title: `${post.title} | Fijn Rit Taxi Blog`,
    description: post.excerpt,
    keywords: post.keywords.split(", "),
    authors: [{ name: post.author }],
    alternates: { canonical: `https://fijnerittaxi.nl/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://fijnerittaxi.nl/blog/${post.slug}`,
      type: "article",
      authors: [post.author],
      images: [{ url: `https://fijnerittaxi.nl${post.image}`, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`https://fijnerittaxi.nl${post.image}`],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post!.title,
    description: post!.excerpt,
    image: `https://fijnerittaxi.nl${post!.image}`,
    datePublished: new Date(post!.date).toISOString(),
    author: { "@type": "Organization", name: post!.author },
    publisher: {
      "@type": "Organization",
      name: "Fijn Rit Taxi",
      logo: { "@type": "ImageObject", url: "https://fijnerittaxi.nl/images/logo.png" },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://fijnerittaxi.nl/blog/${post!.slug}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fijnerittaxi.nl/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://fijnerittaxi.nl/blog" },
      { "@type": "ListItem", position: 3, name: post!.title, item: `https://fijnerittaxi.nl/blog/${post!.slug}` },
    ],
  };

  const renderContent = (content: string) =>
    content.split("\n\n").map((paragraph, idx) => {
      if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
        return (
          <h3 key={idx} className="text-lg md:text-xl font-bold mt-8 mb-4 text-[#1a5f3f]">
            {paragraph.replace(/\*\*/g, "")}
          </h3>
        );
      }
      return <p key={idx} className="text-gray-600 mb-4 leading-relaxed">{paragraph.replace(/\*\*/g, "")}</p>;
    });

  return (
    <>
      <Script id="article-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/blog" className="flex items-center gap-2 text-[#1a5f3f] hover:text-[#2d8a5e] font-medium transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span className="hidden sm:inline">Terug naar Blog</span>
                <span className="sm:hidden">Terug</span>
              </Link>
              <Image src="/images/logo.png" alt="Fijn Rit Taxi" width={100} height={40} className="h-10 w-auto" />
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-sm py-2 px-4">
                <MessageCircle className="w-4 h-4" /><span className="hidden sm:inline">BOEKEN</span>
              </a>
            </div>
          </div>
        </header>

        {/* Hero */}
        <div className="relative h-64 md:h-80">
          <Image src={post!.image} alt={post!.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="max-w-4xl mx-auto">
              <span className="inline-block bg-[#1a5f3f] text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                {post!.category}
              </span>
              <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">{post!.title}</h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">
          <div className="flex flex-wrap items-center gap-4 text-gray-500 mb-6 pb-6 border-b border-gray-200">
            <span className="flex items-center gap-1.5 text-sm"><User className="w-4 h-4" />{post!.author}</span>
            <span className="flex items-center gap-1.5 text-sm"><Calendar className="w-4 h-4" />{post!.date}</span>
            <span className="flex items-center gap-1.5 text-sm"><Clock className="w-4 h-4" />{post!.readTime} leestijd</span>
          </div>

          <div className="prose prose-gray max-w-none">{renderContent(post!.content)}</div>

          <div className="mt-12 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-400"><span className="font-medium">Keywords:</span> {post!.keywords}</p>
          </div>

          {/* CTA */}
          <div className="mt-8 bg-gradient-to-r from-[#1a5f3f] to-[#2d8a5e] rounded-2xl p-8 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Klaar om te Rijden?</h3>
            <p className="text-white/90 mb-6">Boek nu uw rit via WhatsApp en ervaar het comfort van Fijn Rit Taxi.</p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp inline-flex justify-center">
              <MessageCircle className="w-5 h-5" />Boek Nu via WhatsApp
            </a>
          </div>
        </article>

        {/* Related Posts */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Gerelateerde Artikelen</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((rp) => (
                <Link key={rp.id} href={`/blog/${rp.slug}`} className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group">
                  <div className="h-40 overflow-hidden relative">
                    <Image src={rp.image} alt={rp.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-[#1a5f3f] font-medium">{rp.category}</span>
                    <h3 className="text-base font-bold mt-1 line-clamp-2">{rp.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="flex justify-center gap-6 mb-4">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#25D366]">+31 6 43463636</a>
              <a href="mailto:info@fijnerittaxi.nl" className="text-gray-400 hover:text-white">info@fijnerittaxi.nl</a>
            </div>
            <div className="text-gray-500 text-sm">© {new Date().getFullYear()} Fijn Rit Taxi. Alle rechten voorbehouden.</div>
          </div>
        </footer>

        {/* Floating WhatsApp */}
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all duration-300 hover:scale-110 z-50 animate-float"
          aria-label="Contact via WhatsApp">
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>
    </>
  );
}
