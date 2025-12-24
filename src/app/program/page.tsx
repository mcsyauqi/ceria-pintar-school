"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Baby, GraduationCap, Backpack, Sun, Clock, Users, ArrowRight, CheckCircle2, Music, Palette, Trophy, BookOpen } from "lucide-react";

const programs = [
  {
    id: "playgroup",
    icon: Baby,
    title: "Playgroup",
    age: "2-3 tahun",
    schedule: "Senin - Jumat, 08:00 - 11:00",
    ratio: "1:6",
    price: "Rp 1.200.000/bulan",
    color: "pink",
    description: "Program untuk anak usia 2-3 tahun yang berfokus pada stimulasi motorik dan sensorik.",
    activities: ["Stimulasi motorik halus & kasar", "Pengenalan warna & bentuk", "Bermain sensorik", "Bernyanyi & menari", "Sosialisasi", "Toilet training"],
  },
  {
    id: "tk-a",
    icon: Backpack,
    title: "TK A",
    age: "4-5 tahun",
    schedule: "Senin - Jumat, 07:30 - 11:30",
    ratio: "1:8",
    price: "Rp 1.500.000/bulan",
    color: "amber",
    description: "Program untuk anak usia 4-5 tahun dengan pengenalan calistung yang menyenangkan.",
    activities: ["Pengenalan huruf & angka", "Membaca permulaan", "Menulis nama sendiri", "Berhitung 1-20", "Bahasa Inggris dasar", "Eksperimen sains"],
  },
  {
    id: "tk-b",
    icon: GraduationCap,
    title: "TK B",
    age: "5-6 tahun",
    schedule: "Senin - Jumat, 07:30 - 12:00",
    ratio: "1:8",
    price: "Rp 1.500.000/bulan",
    color: "green",
    description: "Program persiapan masuk SD untuk anak usia 5-6 tahun.",
    activities: ["Membaca lancar", "Menulis huruf & kata", "Berhitung sampai 100", "Penjumlahan & pengurangan", "Bahasa Inggris percakapan", "Kesiapan masuk SD"],
  },
  {
    id: "daycare",
    icon: Sun,
    title: "Daycare",
    age: "Semua usia",
    schedule: "Senin - Jumat, 07:00 - 17:00",
    ratio: "1:5",
    price: "Rp 2.500.000/bulan",
    color: "blue",
    description: "Layanan penitipan anak sepanjang hari dengan aktivitas edukatif.",
    activities: ["Program belajar sesuai usia", "Makan siang & 2x snack", "Tidur siang", "Aktivitas indoor & outdoor", "Pengawasan penuh", "Laporan harian"],
  },
];

const extracurriculars = [
  { icon: Music, title: "Musik & Vokal", desc: "Bernyanyi dan bermain alat musik" },
  { icon: Palette, title: "Seni & Kreativitas", desc: "Melukis, menggambar, dan crafting" },
  { icon: Trophy, title: "Tari Tradisional", desc: "Mengenal budaya Indonesia" },
  { icon: BookOpen, title: "Mengaji & Iqro", desc: "Belajar Al-Quran" },
];

export default function ProgramPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-amber-50 via-pink-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-white text-amber-500 rounded-full text-sm font-semibold mb-4">Program Kami</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Program Pendidikan <span className="text-amber-500">Terbaik</span>
            </h1>
            <p className="text-lg text-gray-600">Berbagai program yang disesuaikan dengan tahap perkembangan anak.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-20">
            {programs.map((program, index) => (
              <motion.div key={program.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
                    program.color === "pink" ? "bg-pink-100 text-pink-600" :
                    program.color === "amber" ? "bg-amber-100 text-amber-600" :
                    program.color === "green" ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600"
                  }`}>
                    <program.icon className="w-5 h-5" />
                    {program.age}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Program {program.title}</h2>
                  <p className="text-gray-600 mb-6">{program.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Clock className={`w-5 h-5 ${program.color === "pink" ? "text-pink-500" : program.color === "amber" ? "text-amber-500" : program.color === "green" ? "text-green-500" : "text-blue-500"}`} />
                      <div>
                        <div className="text-sm text-gray-500">Jadwal</div>
                        <div className="font-medium text-gray-800 text-sm">{program.schedule}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className={`w-5 h-5 ${program.color === "pink" ? "text-pink-500" : program.color === "amber" ? "text-amber-500" : program.color === "green" ? "text-green-500" : "text-blue-500"}`} />
                      <div>
                        <div className="text-sm text-gray-500">Rasio</div>
                        <div className="font-medium text-gray-800">{program.ratio}</div>
                      </div>
                    </div>
                  </div>

                  <Link href="/pendaftaran" className={`inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-full transition-colors ${
                    program.color === "pink" ? "bg-pink-500 hover:bg-pink-600" :
                    program.color === "amber" ? "bg-amber-500 hover:bg-amber-600" :
                    program.color === "green" ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"
                  }`}>
                    Daftar {program.title} <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className={`rounded-3xl p-8 shadow-xl ${
                    program.color === "pink" ? "bg-pink-50" :
                    program.color === "amber" ? "bg-amber-50" :
                    program.color === "green" ? "bg-green-50" : "bg-blue-50"
                  }`}>
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-24 h-24 rounded-2xl flex items-center justify-center bg-white shadow-lg">
                        <program.icon className={`w-12 h-12 ${
                          program.color === "pink" ? "text-pink-500" :
                          program.color === "amber" ? "text-amber-500" :
                          program.color === "green" ? "text-green-500" : "text-blue-500"
                        }`} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Aktivitas Pembelajaran</h3>
                    <div className="space-y-3">
                      {program.activities.map((activity, i) => (
                        <div key={i} className="flex items-center gap-3 bg-white rounded-lg p-3">
                          <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${
                            program.color === "pink" ? "text-pink-500" :
                            program.color === "amber" ? "text-amber-500" :
                            program.color === "green" ? "text-green-500" : "text-blue-500"
                          }`} />
                          <span className="text-gray-700">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-white text-green-500 rounded-full text-sm font-semibold mb-4">Ekstrakurikuler</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Kegiatan <span className="text-green-500">Tambahan</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {extracurriculars.map((extra, index) => (
              <motion.div key={extra.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center mx-auto mb-4">
                  <extra.icon className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{extra.title}</h3>
                <p className="text-gray-600 text-sm">{extra.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-amber-500 to-pink-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Siap Bergabung?</h2>
          <p className="text-white/90 text-lg mb-8">Daftarkan putra-putri Anda sekarang.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pendaftaran" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-amber-500 font-bold rounded-full hover:shadow-xl transition-shadow">
              Daftar Sekarang <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/kontak" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white/10 transition-colors">
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
