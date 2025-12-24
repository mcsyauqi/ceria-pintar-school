"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Baby,
  GraduationCap,
  Backpack,
  Sun,
  Clock,
  Users,
  BookOpen,
  Music,
  Palette,
  Trophy,
  ArrowRight,
  CheckCircle2,
  Calendar,
} from "lucide-react";

const programs = [
  {
    id: "playgroup",
    icon: Baby,
    title: "Playgroup",
    age: "2-3 tahun",
    schedule: "Senin - Jumat, 08:00 - 11:00",
    ratio: "1:6",
    price: "Rp 1.200.000/bulan",
    color: "#EC4899",
    bgColor: "#FCE7F3",
    description:
      "Program khusus untuk anak usia 2-3 tahun yang berfokus pada stimulasi motorik dan sensorik. Anak-anak belajar melalui bermain dengan pendampingan penuh dari guru.",
    activities: [
      "Stimulasi motorik halus & kasar",
      "Pengenalan warna, bentuk & angka",
      "Bermain sensorik (pasir, air, playdough)",
      "Bernyanyi & menari",
      "Sosialisasi dengan teman sebaya",
      "Toilet training",
    ],
  },
  {
    id: "tk-a",
    icon: Backpack,
    title: "TK A",
    age: "4-5 tahun",
    schedule: "Senin - Jumat, 07:30 - 11:30",
    ratio: "1:8",
    price: "Rp 1.500.000/bulan",
    color: "#F59E0B",
    bgColor: "#FEF3C7",
    description:
      "Program untuk anak usia 4-5 tahun dengan pengenalan calistung (baca, tulis, hitung) yang menyenangkan. Anak mulai dipersiapkan untuk kemandirian.",
    activities: [
      "Pengenalan huruf & angka",
      "Membaca permulaan",
      "Menulis nama sendiri",
      "Berhitung sederhana 1-20",
      "Pengenalan bahasa Inggris",
      "Eksperimen sains sederhana",
    ],
  },
  {
    id: "tk-b",
    icon: GraduationCap,
    title: "TK B",
    age: "5-6 tahun",
    schedule: "Senin - Jumat, 07:30 - 12:00",
    ratio: "1:8",
    price: "Rp 1.500.000/bulan",
    color: "#10B981",
    bgColor: "#D1FAE5",
    description:
      "Program persiapan masuk SD untuk anak usia 5-6 tahun. Fokus pada kemampuan akademik dasar dan kesiapan emosional untuk sekolah dasar.",
    activities: [
      "Membaca lancar",
      "Menulis huruf & kata",
      "Berhitung sampai 100",
      "Penjumlahan & pengurangan dasar",
      "Bahasa Inggris percakapan",
      "Kesiapan masuk SD",
    ],
  },
  {
    id: "daycare",
    icon: Sun,
    title: "Daycare",
    age: "Semua usia",
    schedule: "Senin - Jumat, 07:00 - 17:00",
    ratio: "1:5",
    price: "Rp 2.500.000/bulan",
    color: "#3B82F6",
    bgColor: "#DBEAFE",
    description:
      "Layanan penitipan anak sepanjang hari dengan aktivitas edukatif. Cocok untuk orang tua yang bekerja. Termasuk makan siang dan snack.",
    activities: [
      "Program belajar sesuai usia",
      "Makan siang & 2x snack",
      "Tidur siang",
      "Aktivitas indoor & outdoor",
      "Pengawasan penuh",
      "Laporan harian via aplikasi",
    ],
  },
];

const extracurriculars = [
  { icon: Music, title: "Musik & Vokal", desc: "Bernyanyi dan bermain alat musik" },
  { icon: Palette, title: "Seni & Kreativitas", desc: "Melukis, menggambar, dan crafting" },
  { icon: Trophy, title: "Tari Tradisional", desc: "Mengenal budaya Indonesia" },
  { icon: BookOpen, title: "Mengaji & Iqro", desc: "Belajar Al-Quran untuk Muslim" },
];

export default function ProgramPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FEF3C7] via-[#FCE7F3] to-[#DBEAFE] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-white text-[#F59E0B] rounded-full text-sm font-semibold mb-4">
              Program Kami
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Program Pendidikan{" "}
              <span className="text-[#F59E0B]">Terbaik</span> untuk Si Kecil
            </h1>
            <p className="text-lg text-gray-600">
              Kami menyediakan berbagai program yang disesuaikan dengan tahap perkembangan anak,
              dari playgroup hingga TK B dan daycare.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Detail Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4"
                    style={{ backgroundColor: program.bgColor, color: program.color }}
                  >
                    <program.icon className="w-5 h-5" />
                    {program.age}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Program {program.title}
                  </h2>
                  <p className="text-gray-600 mb-6">{program.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5" style={{ color: program.color }} />
                      <div>
                        <div className="text-sm text-gray-500">Jadwal</div>
                        <div className="font-medium text-gray-800">{program.schedule}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5" style={{ color: program.color }} />
                      <div>
                        <div className="text-sm text-gray-500">Rasio Guru:Murid</div>
                        <div className="font-medium text-gray-800">{program.ratio}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5" style={{ color: program.color }} />
                      <div>
                        <div className="text-sm text-gray-500">Biaya SPP</div>
                        <div className="font-medium text-gray-800">{program.price}</div>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/pendaftaran"
                    className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-full transition-all hover:shadow-lg hover:scale-105"
                    style={{ backgroundColor: program.color }}
                  >
                    Daftar {program.title}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div
                    className="rounded-3xl p-8 shadow-xl"
                    style={{ backgroundColor: program.bgColor }}
                  >
                    <div className="flex items-center justify-center mb-6">
                      <div
                        className="w-24 h-24 rounded-2xl flex items-center justify-center bg-white shadow-lg"
                      >
                        <program.icon className="w-12 h-12" style={{ color: program.color }} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                      Aktivitas Pembelajaran
                    </h3>
                    <div className="space-y-3">
                      {program.activities.map((activity, i) => (
                        <div key={i} className="flex items-center gap-3 bg-white rounded-lg p-3">
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: program.color }} />
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

      {/* Extracurricular Section */}
      <section className="py-20 bg-gradient-to-br from-[#D1FAE5] to-[#DBEAFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-white text-[#10B981] rounded-full text-sm font-semibold mb-4">
              Ekstrakurikuler
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Kegiatan <span className="text-[#10B981]">Tambahan</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Selain program utama, kami juga menyediakan berbagai kegiatan ekstrakurikuler
              untuk mengembangkan bakat dan minat anak.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {extracurriculars.map((extra, index) => (
              <motion.div
                key={extra.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#FEF3C7] flex items-center justify-center mx-auto mb-4">
                  <extra.icon className="w-8 h-8 text-[#F59E0B]" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{extra.title}</h3>
                <p className="text-gray-600 text-sm">{extra.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#F59E0B] to-[#EC4899]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Siap Bergabung dengan Kami?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Daftarkan putra-putri Anda sekarang dan berikan pendidikan terbaik untuk mereka.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pendaftaran"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#F59E0B] font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all"
              >
                Daftar Sekarang
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/kontak"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white/10 transition-all"
              >
                Hubungi Kami
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
