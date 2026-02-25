"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Menu, X, Newspaper } from "lucide-react";

const WA_LINK = "https://wa.me/31643463636";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24 lg:h-28">
          {/* Logo */}
          <button onClick={() => scrollToSection("home")}>
            <Image
              src={isScrolled ? "/images/logo-dark.png" : "/images/logo-white.png"}
              alt="Fijn Rit Taxi"
              width={160}
              height={64}
              className="h-14 md:h-18 lg:h-22 w-auto transition-opacity duration-300"
              priority
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {[
              { label: "Home", id: "home" },
              { label: "Diensten", id: "diensten" },
              { label: "Over Ons", id: "over-ons" },
              { label: "Reviews", id: "reviews" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-bold transition-colors text-base lg:text-lg drop-shadow-md ${
                  isScrolled
                    ? "text-[#1e40af] hover:text-[#f59e0b]"
                    : "text-white hover:text-[#c9a227]"
                }`}
              >
                {item.label}
              </button>
            ))}
            <Link
              href="/blog"
              className={`font-bold transition-colors flex items-center gap-1 text-base lg:text-lg drop-shadow-md ${
                isScrolled
                  ? "text-[#1e40af] hover:text-[#f59e0b]"
                  : "text-white hover:text-[#c9a227]"
              }`}
            >
              <Newspaper className="w-4 h-4" />
              Blog
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-6 py-2.5 lg:py-3 rounded-full font-semibold hover:bg-[#128C7E] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 text-sm lg:text-base"
            >
              <MessageCircle className="w-4 h-4 lg:w-5 lg:h-5" />
              BOEKEN
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? "text-[#1e40af]" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {[
              { label: "Home", id: "home" },
              { label: "Diensten", id: "diensten" },
              { label: "Over Ons", id: "over-ons" },
              { label: "Reviews", id: "reviews" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2.5 text-gray-800 hover:text-[#f59e0b] text-base font-medium"
              >
                {item.label}
              </button>
            ))}
            <Link
              href="/blog"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 py-2.5 text-gray-800 hover:text-[#f59e0b] text-base font-medium"
            >
              <Newspaper className="w-4 h-4" />
              Blog
            </Link>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] text-white py-3 px-6 rounded-full font-semibold hover:bg-[#128C7E] transition-colors flex items-center justify-center gap-2 mt-4"
            >
              <MessageCircle className="w-5 h-5" />
              BOEKEN
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
