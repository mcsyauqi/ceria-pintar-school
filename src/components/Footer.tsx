import Link from "next/link";
import { GraduationCap, MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-500">Ceria Pintar</h3>
                <p className="text-xs text-gray-400">TK & PAUD</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              Belajar Sambil Bermain, Tumbuh dengan Cinta. Kami berkomitmen memberikan pendidikan terbaik untuk putra-putri Anda.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-500">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-500">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-500">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-amber-500">Menu</h4>
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
                  <Link href={link.href} className="text-gray-400 hover:text-amber-500 text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-pink-500">Program</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Playgroup (2-3 tahun)</li>
              <li>TK A (4-5 tahun)</li>
              <li>TK B (5-6 tahun)</li>
              <li>Daycare</li>
              <li>Ekstrakurikuler</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-green-500">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">Jl. Pendidikan No. 123, Jakarta Selatan 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">(021) 1234-5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@ceriapintar.sch.id</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <p>Senin - Jumat: 07:00 - 15:00</p>
                  <p>Sabtu: 08:00 - 12:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">&copy; 2025 Ceria Pintar School. All rights reserved.</p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Website ini dibuat dengan <Heart className="w-4 h-4 text-red-500" /> oleh{" "}
              <a href="https://creativism.id" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:underline font-medium">
                Creativism Digital Marketing Agency
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
