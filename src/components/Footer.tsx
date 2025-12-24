"use client";

import Link from "next/link";
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Heart
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#1F2937] to-[#111827] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#FBBF24] flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#F59E0B]">Ceria Pintar</h3>
                <p className="text-xs text-gray-400">TK & PAUD</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Belajar Sambil Bermain, Tumbuh dengan Cinta. Kami berkomitmen memberikan pendidikan terbaik untuk putra-putri Anda.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F59E0B] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#EC4899] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-500 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#F59E0B]">Menu</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Beranda" },
                { href: "/program", label: "Program" },
                { href: "/fasilitas", label: "Fasilitas" },
                { href: "/guru", label: "Guru" },
                { href: "/galeri", label: "Galeri" },
                { href: "/pendaftaran", label: "Pendaftaran" },
                { href: "/kontak", label: "Kontak" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#F59E0B] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#EC4899]">Program</h4>
            <ul className="space-y-3">
              {[
                "Playgroup (2-3 tahun)",
                "TK A (4-5 tahun)",
                "TK B (5-6 tahun)",
                "Daycare",
                "Summer Camp",
                "Ekstrakurikuler",
              ].map((program) => (
                <li key={program}>
                  <span className="text-gray-400 text-sm">{program}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#10B981]">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Jl. Pendidikan No. 123, Kelurahan Ceria, Jakarta Selatan 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#10B981] flex-shrink-0" />
                <a href="tel:+6281234567890" className="text-gray-400 text-sm hover:text-[#10B981] transition-colors">
                  (021) 1234-5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#10B981] flex-shrink-0" />
                <a href="mailto:info@ceriapintar.sch.id" className="text-gray-400 text-sm hover:text-[#10B981] transition-colors">
                  info@ceriapintar.sch.id
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <p>Senin - Jumat: 07:00 - 15:00</p>
                  <p>Sabtu: 08:00 - 12:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; 2025 Ceria Pintar School. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Website ini dibuat dengan <Heart className="w-4 h-4 text-red-500 fill-red-500" /> oleh{" "}
              <a
                href="https://creativism.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F59E0B] hover:underline font-medium"
              >
                Creativism Digital Marketing Agency
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
