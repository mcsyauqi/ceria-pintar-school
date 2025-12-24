"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  GraduationCap,
  Award,
  Heart,
  Users,
  ArrowRight,
  Mail,
  Star,
  BookOpen,
  Baby,
  Backpack,
} from "lucide-react";

const teachers = [
  {
    name: "Ibu Sarah Wijaya, M.Pd",
    role: "Kepala Sekolah",
    education: "S2 Pendidikan Anak Usia Dini - UI",
    experience: "15 tahun pengalaman",
    specialization: "Manajemen PAUD & Kurikulum",
    color: "#F59E0B",
    quote: "Setiap anak adalah bintang yang unik dengan cahayanya masing-masing.",
  },
  {
    name: "Ibu Dewi Sartika, S.Pd",
    role: "Guru TK B",
    education: "S1 PGPAUD - UNJ",
    experience: "8 tahun pengalaman",
    specialization: "Persiapan Masuk SD",
    color: "#10B981",
    quote: "Belajar yang menyenangkan akan menjadi kenangan indah seumur hidup.",
  },
  {
    name: "Ibu Ratna Kusuma, S.Psi",
    role: "Guru TK A",
    education: "S1 Psikologi Anak - UGM",
    experience: "6 tahun pengalaman",
    specialization: "Perkembangan Psikologi Anak",
    color: "#EC4899",
    quote: "Memahami dunia anak adalah kunci untuk mendidik dengan cinta.",
  },
  {
    name: "Ibu Ani Nurhayati, S.Pd",
    role: "Guru Playgroup",
    education: "S1 PAUD - UNNES",
    experience: "5 tahun pengalaman",
    specialization: "Stimulasi Anak Usia Dini",
    color: "#3B82F6",
    quote: "Bermain adalah pekerjaan penting anak-anak.",
  },
];

const supportStaff = [
  { name: "Pak Budi", role: "Satpam", desc: "Menjaga keamanan sekolah 24 jam" },
  { name: "Ibu Tini", role: "Juru Masak", desc: "Menyiapkan menu sehat & bergizi" },
  { name: "Pak Joko", role: "Office Boy", desc: "Menjaga kebersihan sekolah" },
  { name: "Ibu Siti", role: "Admin", desc: "Mengelola administrasi sekolah" },
];

const achievements = [
  { icon: GraduationCap, value: "100%", label: "Guru Bersertifikat" },
  { icon: Award, value: "5+", label: "Tahun Rata-rata Pengalaman" },
  { icon: Heart, value: "4.9", label: "Rating dari Orang Tua" },
  { icon: Users, value: "1:8", label: "Rasio Guru-Murid" },
];

export default function GuruPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FCE7F3] via-[#FEF3C7] to-[#D1FAE5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-white text-[#EC4899] rounded-full text-sm font-semibold mb-4">
              Tim Pengajar
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Guru <span className="text-[#EC4899]">Berpengalaman & Penuh Kasih</span>
            </h1>
            <p className="text-lg text-gray-600">
              Tim pengajar kami terdiri dari guru-guru profesional yang bersertifikat,
              berpengalaman, dan memiliki dedikasi tinggi dalam mendidik anak.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 rounded-xl bg-[#FEF3C7] flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-7 h-7 text-[#F59E0B]" />
                </div>
                <div className="text-3xl font-bold text-gray-800">{item.value}</div>
                <div className="text-sm text-gray-600">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-20 bg-gradient-to-br from-[#FFFBEB] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Kenali <span className="text-[#F59E0B]">Guru Kami</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Setiap guru kami dipilih dengan seleksi ketat dan memiliki passion dalam mendidik anak.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {teachers.map((teacher, index) => (
              <motion.div
                key={teacher.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    <div
                      className="w-24 h-24 rounded-2xl flex items-center justify-center text-white text-3xl font-bold flex-shrink-0"
                      style={{ backgroundColor: teacher.color }}
                    >
                      {teacher.name.split(" ")[1].charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{teacher.name}</h3>
                      <p className="font-medium mb-2" style={{ color: teacher.color }}>
                        {teacher.role}
                      </p>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-4 h-4" style={{ color: teacher.color }} />
                          {teacher.education}
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4" style={{ color: teacher.color }} />
                          {teacher.experience}
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4" style={{ color: teacher.color }} />
                          {teacher.specialization}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="mt-6 p-4 rounded-xl italic text-gray-600"
                    style={{ backgroundColor: `${teacher.color}10` }}
                  >
                    &ldquo;{teacher.quote}&rdquo;
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Teachers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Guru <span className="text-[#10B981]">Per Program</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#FCE7F3] rounded-2xl p-6 text-center">
              <Baby className="w-12 h-12 text-[#EC4899] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Playgroup</h3>
              <p className="text-gray-600 mb-4">2 Guru + 1 Asisten</p>
              <p className="text-sm text-gray-500">Rasio 1:6</p>
            </div>
            <div className="bg-[#FEF3C7] rounded-2xl p-6 text-center">
              <Backpack className="w-12 h-12 text-[#F59E0B] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">TK A</h3>
              <p className="text-gray-600 mb-4">2 Guru + 1 Asisten</p>
              <p className="text-sm text-gray-500">Rasio 1:8</p>
            </div>
            <div className="bg-[#D1FAE5] rounded-2xl p-6 text-center">
              <GraduationCap className="w-12 h-12 text-[#10B981] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">TK B</h3>
              <p className="text-gray-600 mb-4">2 Guru + 1 Asisten</p>
              <p className="text-sm text-gray-500">Rasio 1:8</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Staff */}
      <section className="py-20 bg-gradient-to-br from-[#DBEAFE] to-[#D1FAE5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Tim <span className="text-[#3B82F6]">Pendukung</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Selain guru, kami juga didukung oleh tim yang menjaga keamanan, kebersihan,
              dan kelancaran operasional sekolah.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {supportStaff.map((staff, index) => (
              <motion.div
                key={staff.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg"
              >
                <div className="w-16 h-16 rounded-full bg-[#3B82F6] flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {staff.name.charAt(0)}
                </div>
                <h3 className="font-bold text-gray-800 mb-1">{staff.name}</h3>
                <p className="text-[#3B82F6] font-medium text-sm mb-2">{staff.role}</p>
                <p className="text-gray-600 text-sm">{staff.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-gradient-to-r from-[#EC4899] to-[#F59E0B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Bergabunglah dengan Tim Kami
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Kami selalu mencari guru-guru berbakat yang memiliki passion dalam mendidik anak.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontak"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#EC4899] font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all"
              >
                <Mail className="w-5 h-5" />
                Kirim Lamaran
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
