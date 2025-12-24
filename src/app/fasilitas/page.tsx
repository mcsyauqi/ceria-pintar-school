"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Tv,
  Blocks,
  Trees,
  BookOpen,
  Music,
  Droplets,
  Camera,
  Utensils,
  ShieldCheck,
  Wifi,
  Car,
  Heart,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const facilities = [
  {
    icon: Tv,
    title: "Kelas AC Modern",
    desc: "Ruang kelas ber-AC dengan pencahayaan optimal dan dekorasi menarik untuk anak-anak",
    color: "#F59E0B",
    features: ["AC setiap ruangan", "Pencahayaan LED", "Meja kursi ergonomis", "Papan tulis interaktif"],
  },
  {
    icon: Blocks,
    title: "Mainan Edukatif",
    desc: "Koleksi mainan edukatif berkualitas yang mendukung perkembangan kognitif dan motorik anak",
    color: "#EC4899",
    features: ["Lego & building blocks", "Puzzle beragam", "Mainan sensorik", "Alat peraga belajar"],
  },
  {
    icon: Trees,
    title: "Playground Indoor & Outdoor",
    desc: "Area bermain yang aman dan menyenangkan untuk aktivitas fisik anak-anak",
    color: "#10B981",
    features: ["Perosotan aman", "Ayunan", "Climbing frame", "Matras pelindung"],
  },
  {
    icon: BookOpen,
    title: "Perpustakaan Mini",
    desc: "Koleksi buku cerita bergambar dan buku edukatif untuk menumbuhkan minat baca",
    color: "#3B82F6",
    features: ["500+ buku cerita", "Buku bilingual", "Area baca nyaman", "Storytelling corner"],
  },
  {
    icon: Music,
    title: "Ruang Musik & Seni",
    desc: "Ruang khusus untuk kegiatan musik, menari, dan berkreasi seni",
    color: "#8B5CF6",
    features: ["Alat musik anak", "Ruang tari", "Art supplies", "Display karya"],
  },
  {
    icon: Droplets,
    title: "Water Play Area",
    desc: "Area bermain air yang aman untuk aktivitas sensory dan menyenangkan",
    color: "#06B6D4",
    features: ["Kolam dangkal", "Water toys", "Area teduh", "Pengawasan ketat"],
  },
  {
    icon: Camera,
    title: "CCTV 24 Jam",
    desc: "Sistem keamanan dengan CCTV di setiap sudut yang dapat dipantau orang tua",
    color: "#EF4444",
    features: ["Pantau via app", "Recording 24 jam", "Setiap ruangan", "Akses real-time"],
  },
  {
    icon: Utensils,
    title: "Dapur Higienis",
    desc: "Dapur bersih untuk menyiapkan snack dan makan siang bergizi untuk anak-anak",
    color: "#F97316",
    features: ["Menu bergizi", "Dapur bersertifikat", "Staff terlatih", "Menu halal"],
  },
];

const safetyFeatures = [
  { icon: ShieldCheck, title: "Satpam 24 Jam", desc: "Keamanan sepanjang hari" },
  { icon: Camera, title: "CCTV Online", desc: "Pantau anak dari mana saja" },
  { icon: Car, title: "Drop Zone Aman", desc: "Area antar-jemput terpisah" },
  { icon: Heart, title: "P3K & UKS", desc: "Pertolongan pertama siap" },
];

export default function FasilitasPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#D1FAE5] via-[#DBEAFE] to-[#FEF3C7] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-white text-[#10B981] rounded-full text-sm font-semibold mb-4">
              Fasilitas Kami
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Fasilitas <span className="text-[#10B981]">Lengkap & Modern</span>
            </h1>
            <p className="text-lg text-gray-600">
              Kami menyediakan fasilitas terbaik untuk mendukung proses belajar dan bermain
              anak-anak dalam lingkungan yang aman dan nyaman.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${facility.color}20` }}
                >
                  <facility.icon className="w-8 h-8" style={{ color: facility.color }} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{facility.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{facility.desc}</p>
                <div className="space-y-2">
                  {facility.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                      <CheckCircle2 className="w-4 h-4" style={{ color: facility.color }} />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-20 bg-gradient-to-br from-[#FEF3C7] to-[#FCE7F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-white text-[#EF4444] rounded-full text-sm font-semibold mb-4">
              Keamanan
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Keamanan <span className="text-[#EF4444]">Nomor Satu</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami sangat serius dalam menjaga keamanan anak-anak. Berbagai sistem keamanan
              diterapkan untuk memberikan ketenangan bagi orang tua.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
              >
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-20 bg-gradient-to-r from-[#10B981] to-[#3B82F6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ingin Melihat Langsung?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Jadwalkan kunjungan ke sekolah kami untuk melihat fasilitas secara langsung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontak"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#10B981] font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all"
              >
                Jadwalkan Kunjungan
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white/10 transition-all">
                Virtual Tour 360°
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
