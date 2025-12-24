"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, GraduationCap, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/program", label: "Program" },
  { href: "/fasilitas", label: "Fasilitas" },
  { href: "/guru", label: "Guru" },
  { href: "/galeri", label: "Galeri" },
  { href: "/pendaftaran", label: "Pendaftaran" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#FBBF24] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#F59E0B] font-[family-name:var(--font-nunito)]">
                Ceria Pintar
              </h1>
              <p className="text-xs text-gray-500 -mt-1">TK & PAUD</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-gray-700 hover:text-[#F59E0B] font-medium transition-colors rounded-lg hover:bg-[#FEF3C7]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+6281234567890"
              className="flex items-center gap-2 text-gray-600 hover:text-[#F59E0B] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">0812-3456-7890</span>
            </a>
            <Link
              href="/pendaftaran"
              className="px-6 py-2.5 bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all"
            >
              Daftar Sekarang
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-[#FEF3C7] transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:text-[#F59E0B] font-medium transition-colors rounded-lg hover:bg-[#FEF3C7]"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t">
                <Link
                  href="/pendaftaran"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] text-white font-semibold rounded-full"
                >
                  Daftar Sekarang
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
