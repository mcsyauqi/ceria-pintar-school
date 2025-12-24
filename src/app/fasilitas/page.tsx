"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Tv, Blocks, Trees, BookOpen, Music, Droplets, Camera, Utensils, ShieldCheck, Car, Heart, ArrowRight, CheckCircle2 } from "lucide-react";

const facilities = [
  { icon: Tv, title: "Kelas AC Modern", desc: "Ruang kelas ber-AC dengan pencahayaan optimal", color: "amber", features: ["AC setiap ruangan", "Pencahayaan LED", "Meja kursi ergonomis"] },
  { icon: Blocks, title: "Mainan Edukatif", desc: "Koleksi mainan edukatif berkualitas", color: "pink", features: ["Lego & building blocks", "Puzzle beragam", "Mainan sensorik"] },
  { icon: Trees, title: "Playground", desc: "Area bermain indoor & outdoor yang aman", color: "green", features: ["Perosotan aman", "Ayunan", "Matras pelindung"] },
  { icon: BookOpen, title: "Perpustakaan Mini", desc: "Koleksi buku cerita bergambar", color: "blue", features: ["500+ buku cerita", "Buku bilingual", "Area baca nyaman"] },
  { icon: Music, title: "Ruang Musik & Seni", desc: "Ruang khusus untuk kreativitas", color: "purple", features: ["Alat musik anak", "Ruang tari", "Art supplies"] },
  { icon: Droplets, title: "Water Play Area", desc: "Area bermain air yang aman", color: "cyan", features: ["Kolam dangkal", "Water toys", "Pengawasan ketat"] },
  { icon: Camera, title: "CCTV 24 Jam", desc: "Sistem keamanan yang dapat dipantau", color: "red", features: ["Pantau via app", "Recording 24 jam", "Setiap ruangan"] },
  { icon: Utensils, title: "Dapur Higienis", desc: "Dapur bersih untuk snack bergizi", color: "orange", features: ["Menu bergizi", "Dapur bersertifikat", "Menu halal"] },
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
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-white text-green-500 rounded-full text-sm font-semibold mb-4">Fasilitas Kami</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Fasilitas <span className="text-green-500">Lengkap & Modern</span>
            </h1>
            <p className="text-lg text-gray-600">Fasilitas terbaik untuk mendukung proses belajar dan bermain anak-anak.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <motion.div key={facility.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${
                  facility.color === "amber" ? "bg-amber-100" :
                  facility.color === "pink" ? "bg-pink-100" :
                  facility.color === "green" ? "bg-green-100" :
                  facility.color === "blue" ? "bg-blue-100" :
                  facility.color === "purple" ? "bg-purple-100" :
                  facility.color === "cyan" ? "bg-cyan-100" :
                  facility.color === "red" ? "bg-red-100" : "bg-orange-100"
                }`}>
                  <facility.icon className={`w-8 h-8 ${
                    facility.color === "amber" ? "text-amber-500" :
                    facility.color === "pink" ? "text-pink-500" :
                    facility.color === "green" ? "text-green-500" :
                    facility.color === "blue" ? "text-blue-500" :
                    facility.color === "purple" ? "text-purple-500" :
                    facility.color === "cyan" ? "text-cyan-500" :
                    facility.color === "red" ? "text-red-500" : "text-orange-500"
                  }`} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{facility.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{facility.desc}</p>
                <div className="space-y-2">
                  {facility.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                      <CheckCircle2 className={`w-4 h-4 ${
                        facility.color === "amber" ? "text-amber-500" :
                        facility.color === "pink" ? "text-pink-500" :
                        facility.color === "green" ? "text-green-500" :
                        facility.color === "blue" ? "text-blue-500" :
                        facility.color === "purple" ? "text-purple-500" :
                        facility.color === "cyan" ? "text-cyan-500" :
                        facility.color === "red" ? "text-red-500" : "text-orange-500"
                      }`} />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-white text-red-500 rounded-full text-sm font-semibold mb-4">Keamanan</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Keamanan <span className="text-red-500">Nomor Satu</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyFeatures.map((feature, index) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl p-6 shadow-lg text-center">
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

      <section className="py-20 bg-gradient-to-r from-green-500 to-blue-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ingin Melihat Langsung?</h2>
          <p className="text-white/90 text-lg mb-8">Jadwalkan kunjungan ke sekolah kami.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontak" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-500 font-bold rounded-full hover:shadow-xl transition-shadow">
              Jadwalkan Kunjungan <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
