"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GraduationCap, Award, Heart, Users, Mail, Star, Baby, Backpack } from "lucide-react";

const teachers = [
  { name: "Ibu Sarah Wijaya, M.Pd", role: "Kepala Sekolah", education: "S2 Pendidikan Anak Usia Dini - UI", experience: "15 tahun pengalaman", color: "amber", quote: "Setiap anak adalah bintang yang unik dengan cahayanya masing-masing." },
  { name: "Ibu Dewi Sartika, S.Pd", role: "Guru TK B", education: "S1 PGPAUD - UNJ", experience: "8 tahun pengalaman", color: "green", quote: "Belajar yang menyenangkan akan menjadi kenangan indah seumur hidup." },
  { name: "Ibu Ratna Kusuma, S.Psi", role: "Guru TK A", education: "S1 Psikologi Anak - UGM", experience: "6 tahun pengalaman", color: "pink", quote: "Memahami dunia anak adalah kunci untuk mendidik dengan cinta." },
  { name: "Ibu Ani Nurhayati, S.Pd", role: "Guru Playgroup", education: "S1 PAUD - UNNES", experience: "5 tahun pengalaman", color: "blue", quote: "Bermain adalah pekerjaan penting anak-anak." },
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
      <section className="bg-gradient-to-br from-pink-50 via-amber-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-white text-pink-500 rounded-full text-sm font-semibold mb-4">Tim Pengajar</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Guru <span className="text-pink-500">Berpengalaman & Penuh Kasih</span>
            </h1>
            <p className="text-lg text-gray-600">Tim pengajar profesional yang bersertifikat dan berdedikasi tinggi.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center p-6">
                <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-7 h-7 text-amber-500" />
                </div>
                <div className="text-3xl font-bold text-gray-800">{item.value}</div>
                <div className="text-sm text-gray-600">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Kenali <span className="text-amber-500">Guru Kami</span></h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teachers.map((teacher, index) => (
              <motion.div key={teacher.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    <div className={`w-24 h-24 rounded-2xl flex items-center justify-center text-white text-3xl font-bold flex-shrink-0 ${
                      teacher.color === "amber" ? "bg-amber-500" :
                      teacher.color === "green" ? "bg-green-500" :
                      teacher.color === "pink" ? "bg-pink-500" : "bg-blue-500"
                    }`}>
                      {teacher.name.split(" ")[1].charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{teacher.name}</h3>
                      <p className={`font-medium mb-2 ${
                        teacher.color === "amber" ? "text-amber-500" :
                        teacher.color === "green" ? "text-green-500" :
                        teacher.color === "pink" ? "text-pink-500" : "text-blue-500"
                      }`}>{teacher.role}</p>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <GraduationCap className={`w-4 h-4 ${teacher.color === "amber" ? "text-amber-500" : teacher.color === "green" ? "text-green-500" : teacher.color === "pink" ? "text-pink-500" : "text-blue-500"}`} />
                          {teacher.education}
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className={`w-4 h-4 ${teacher.color === "amber" ? "text-amber-500" : teacher.color === "green" ? "text-green-500" : teacher.color === "pink" ? "text-pink-500" : "text-blue-500"}`} />
                          {teacher.experience}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`mt-6 p-4 rounded-xl italic text-gray-600 ${
                    teacher.color === "amber" ? "bg-amber-50" :
                    teacher.color === "green" ? "bg-green-50" :
                    teacher.color === "pink" ? "bg-pink-50" : "bg-blue-50"
                  }`}>
                    &ldquo;{teacher.quote}&rdquo;
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Guru <span className="text-green-500">Per Program</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-pink-50 rounded-2xl p-6 text-center">
              <Baby className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Playgroup</h3>
              <p className="text-gray-600 mb-4">2 Guru + 1 Asisten</p>
              <p className="text-sm text-gray-500">Rasio 1:6</p>
            </div>
            <div className="bg-amber-50 rounded-2xl p-6 text-center">
              <Backpack className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">TK A</h3>
              <p className="text-gray-600 mb-4">2 Guru + 1 Asisten</p>
              <p className="text-sm text-gray-500">Rasio 1:8</p>
            </div>
            <div className="bg-green-50 rounded-2xl p-6 text-center">
              <GraduationCap className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">TK B</h3>
              <p className="text-gray-600 mb-4">2 Guru + 1 Asisten</p>
              <p className="text-sm text-gray-500">Rasio 1:8</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Tim <span className="text-blue-500">Pendukung</span></h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {supportStaff.map((staff, index) => (
              <motion.div key={staff.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {staff.name.charAt(0)}
                </div>
                <h3 className="font-bold text-gray-800 mb-1">{staff.name}</h3>
                <p className="text-blue-500 font-medium text-sm mb-2">{staff.role}</p>
                <p className="text-gray-600 text-sm">{staff.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-pink-500 to-amber-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Bergabunglah dengan Tim Kami</h2>
          <p className="text-white/90 text-lg mb-8">Kami selalu mencari guru-guru berbakat.</p>
          <Link href="/kontak" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-pink-500 font-bold rounded-full hover:shadow-xl transition-shadow">
            <Mail className="w-5 h-5" /> Kirim Lamaran
          </Link>
        </div>
      </section>
    </div>
  );
}
