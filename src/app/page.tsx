"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Users, Award, Clock, Play, Heart, BookOpen, Brain, Globe, Sparkles, Baby, GraduationCap, Backpack, Sun, Quote, ArrowRight, CheckCircle2, Camera, Calendar, MapPin, Phone, Tv, Trees, Music, Shield, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-amber-50 via-pink-50 to-amber-100 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-50 animate-float" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-amber-200 rounded-full opacity-50 animate-float" />
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-green-200 rounded-full opacity-50 animate-float" />
        <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-blue-200 rounded-full opacity-50 animate-float" />

        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md mb-6">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span className="text-sm font-medium text-gray-700">Pendaftaran 2025/2026 Dibuka!</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-gray-800">Tempat Terbaik untuk</span>
                <br />
                <span className="text-amber-500">Si Kecil Belajar</span>
                <span className="text-pink-500"> & </span>
                <span className="text-green-500">Bermain</span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                PAUD & TK dengan kurikulum bermain berbasis karakter. Lingkungan aman, guru penuh kasih, fasilitas lengkap untuk tumbuh kembang optimal anak Anda.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                <Link href="/pendaftaran" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-white font-bold rounded-full hover:bg-amber-600 transition-colors">
                  Daftar Sekarang <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/galeri" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 font-semibold rounded-full shadow-md hover:shadow-lg transition-shadow">
                  <Play className="w-5 h-5 text-pink-500" /> Virtual Tour
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-amber-500">500+</div>
                  <div className="text-sm text-gray-600">Alumni Sukses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-pink-500">15</div>
                  <div className="text-sm text-gray-600">Tahun Berdiri</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-green-500">1:8</div>
                  <div className="text-sm text-gray-600">Rasio Guru-Murid</div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200 via-pink-200 to-green-200 rounded-full opacity-50" />
                <div className="absolute inset-8 bg-gradient-to-tr from-amber-100 to-pink-100 rounded-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 bg-white rounded-full shadow-xl flex items-center justify-center">
                      <GraduationCap className="w-16 h-16 text-amber-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Ceria Pintar</h3>
                    <p className="text-sm text-gray-600">Belajar Sambil Bermain</p>
                    <p className="text-sm text-gray-600">Tumbuh dengan Cinta</p>
                  </div>
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-16 h-16 bg-pink-500 rounded-2xl shadow-lg flex items-center justify-center animate-bounce-slow">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 w-16 h-16 bg-green-500 rounded-2xl shadow-lg flex items-center justify-center animate-bounce-slow">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-16 h-16 bg-blue-500 rounded-2xl shadow-lg flex items-center justify-center animate-bounce-slow">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-16 h-16 bg-amber-500 rounded-2xl shadow-lg flex items-center justify-center animate-bounce-slow">
                  <Star className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-600 rounded-full text-sm font-semibold mb-4">Program Kami</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Pilihan Program Terbaik untuk <span className="text-amber-500">Si Kecil</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Kami menyediakan berbagai program yang disesuaikan dengan tahap perkembangan anak, dari usia 2 hingga 6 tahun</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Baby, title: "Playgroup", age: "2-3 tahun", desc: "Stimulasi motorik & sensorik melalui bermain kreatif", color: "pink", href: "/program#playgroup" },
              { icon: Backpack, title: "TK A", age: "4-5 tahun", desc: "Pengenalan calistung dengan metode menyenangkan", color: "amber", href: "/program#tk-a" },
              { icon: GraduationCap, title: "TK B", age: "5-6 tahun", desc: "Persiapan masuk SD dengan kurikulum lengkap", color: "green", href: "/program#tk-b" },
              { icon: Sun, title: "Daycare", age: "All ages", desc: "Penitipan anak full day dengan aktivitas edukatif", color: "blue", href: "/program#daycare" },
            ].map((program) => (
              <Link key={program.title} href={program.href}>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100 cursor-pointer h-full">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${program.color === "pink" ? "bg-pink-100" : program.color === "amber" ? "bg-amber-100" : program.color === "green" ? "bg-green-100" : "bg-blue-100"}`}>
                    <program.icon className={`w-8 h-8 ${program.color === "pink" ? "text-pink-500" : program.color === "amber" ? "text-amber-500" : program.color === "green" ? "text-green-500" : "text-blue-500"}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{program.title}</h3>
                  <p className={`text-sm font-medium mb-3 ${program.color === "pink" ? "text-pink-500" : program.color === "amber" ? "text-amber-500" : program.color === "green" ? "text-green-500" : "text-blue-500"}`}>{program.age}</p>
                  <p className="text-gray-600 text-sm">{program.desc}</p>
                  <div className={`mt-4 flex items-center gap-1 text-sm font-medium ${program.color === "pink" ? "text-pink-500" : program.color === "amber" ? "text-amber-500" : program.color === "green" ? "text-green-500" : "text-blue-500"}`}>
                    Selengkapnya <ChevronRight className="w-4 h-4" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/program" className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-white font-semibold rounded-full hover:bg-amber-600 transition-colors">
              Lihat Semua Program <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Jadwal Harian Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-white text-blue-500 rounded-full text-sm font-semibold mb-4">Jadwal Harian</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Aktivitas <span className="text-blue-500">Sehari-hari</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Kegiatan terstruktur yang menyenangkan untuk perkembangan optimal anak</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { time: "07:30 - 08:00", activity: "Penyambutan & Free Play", icon: Heart, color: "pink" },
              { time: "08:00 - 08:30", activity: "Circle Time & Berdoa", icon: Users, color: "amber" },
              { time: "08:30 - 09:30", activity: "Kegiatan Inti Pembelajaran", icon: BookOpen, color: "green" },
              { time: "09:30 - 10:00", activity: "Snack Time", icon: Sun, color: "orange" },
              { time: "10:00 - 10:30", activity: "Outdoor Play", icon: Trees, color: "green" },
              { time: "10:30 - 11:00", activity: "Seni & Kreativitas", icon: Music, color: "purple" },
              { time: "11:00 - 11:30", activity: "Review & Penutup", icon: Star, color: "amber" },
              { time: "11:30", activity: "Pulang / Lanjut Daycare", icon: GraduationCap, color: "blue" },
            ].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="bg-white rounded-2xl p-5 shadow-lg">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${
                  item.color === "pink" ? "bg-pink-100" : item.color === "amber" ? "bg-amber-100" : item.color === "green" ? "bg-green-100" : item.color === "orange" ? "bg-orange-100" : item.color === "purple" ? "bg-purple-100" : "bg-blue-100"
                }`}>
                  <item.icon className={`w-6 h-6 ${
                    item.color === "pink" ? "text-pink-500" : item.color === "amber" ? "text-amber-500" : item.color === "green" ? "text-green-500" : item.color === "orange" ? "text-orange-500" : item.color === "purple" ? "text-purple-500" : "text-blue-500"
                  }`} />
                </div>
                <div className="text-sm font-bold text-blue-500 mb-1">{item.time}</div>
                <div className="text-gray-800 font-medium">{item.activity}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Kurikulum Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-white text-pink-500 rounded-full text-sm font-semibold mb-4">Kurikulum Unggulan</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Metode Pembelajaran <span className="text-pink-500">Terbaik</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Kurikulum kami dirancang untuk mengembangkan potensi anak secara holistik</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Play, title: "Belajar Melalui Bermain", desc: "Metode pembelajaran fun & interaktif yang membuat anak senang belajar. Setiap permainan dirancang untuk mengembangkan aspek kognitif, motorik, dan sosial anak.", color: "amber" },
              { icon: Heart, title: "Character Building", desc: "Pembentukan karakter positif sejak dini: jujur, mandiri, bertanggung jawab, dan peduli sesama. Nilai-nilai ini ditanamkan melalui kegiatan sehari-hari.", color: "pink" },
              { icon: Brain, title: "Multiple Intelligence", desc: "Pengembangan semua kecerdasan anak: linguistik, logika-matematika, kinestetik, musikal, visual-spasial, interpersonal, dan intrapersonal.", color: "green" },
              { icon: Globe, title: "Bilingual Program", desc: "Pengenalan bahasa Inggris sejak dini melalui lagu, cerita, dan percakapan sederhana. Anak akan terbiasa dengan bahasa internasional.", color: "blue" },
            ].map((item) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex gap-5 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color === "amber" ? "bg-amber-100" : item.color === "pink" ? "bg-pink-100" : item.color === "green" ? "bg-green-100" : "bg-blue-100"}`}>
                  <item.icon className={`w-7 h-7 ${item.color === "amber" ? "text-amber-500" : item.color === "pink" ? "text-pink-500" : item.color === "green" ? "text-green-500" : "text-blue-500"}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/program" className="inline-flex items-center gap-2 text-pink-500 font-semibold hover:gap-3 transition-all">
              Pelajari Kurikulum Lengkap <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Fasilitas Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4">Fasilitas</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Fasilitas <span className="text-green-500">Lengkap & Modern</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Kami menyediakan fasilitas terbaik untuk mendukung proses belajar dan bermain anak-anak</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: Tv, title: "Kelas AC", color: "amber" },
              { icon: Trees, title: "Playground", color: "green" },
              { icon: BookOpen, title: "Perpustakaan", color: "blue" },
              { icon: Music, title: "Ruang Musik", color: "purple" },
              { icon: Camera, title: "CCTV 24 Jam", color: "red" },
              { icon: Shield, title: "Keamanan", color: "gray" },
            ].map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="bg-gray-50 rounded-2xl p-4 text-center hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 ${
                  item.color === "amber" ? "bg-amber-100" : item.color === "green" ? "bg-green-100" : item.color === "blue" ? "bg-blue-100" : item.color === "purple" ? "bg-purple-100" : item.color === "red" ? "bg-red-100" : "bg-gray-200"
                }`}>
                  <item.icon className={`w-6 h-6 ${
                    item.color === "amber" ? "text-amber-500" : item.color === "green" ? "text-green-500" : item.color === "blue" ? "text-blue-500" : item.color === "purple" ? "text-purple-500" : item.color === "red" ? "text-red-500" : "text-gray-600"
                  }`} />
                </div>
                <div className="text-sm font-medium text-gray-800">{item.title}</div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/fasilitas" className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-colors">
              Lihat Semua Fasilitas <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-white text-green-600 rounded-full text-sm font-semibold mb-4">Mengapa Ceria Pintar?</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Dipercaya Ratusan <span className="text-green-500">Orang Tua</span></h2>
              <p className="text-gray-600 mb-8">Kami memahami bahwa memilih sekolah untuk anak adalah keputusan penting. Di Ceria Pintar, kami berkomitmen memberikan yang terbaik untuk putra-putri Anda.</p>

              <div className="space-y-4">
                {[
                  "Guru bersertifikat dengan pengalaman 5+ tahun",
                  "Lingkungan belajar aman dengan CCTV 24 jam",
                  "Kurikulum berbasis karakter dan kreativitas",
                  "Fasilitas lengkap dan terawat dengan baik",
                  "Rasio guru-murid 1:8 untuk perhatian optimal",
                  "Laporan perkembangan anak berkala untuk orang tua",
                  "Komunikasi aktif dengan orang tua via WhatsApp",
                ].map((item, index) => (
                  <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <Link href="/guru" className="inline-flex items-center gap-2 text-green-500 font-semibold hover:gap-3 transition-all">
                  Kenali Tim Guru Kami <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, value: "500+", label: "Alumni Sukses", color: "amber" },
                { icon: Award, value: "15+", label: "Tahun Pengalaman", color: "pink" },
                { icon: Star, value: "4.9", label: "Rating Orang Tua", color: "green" },
                { icon: Clock, value: "8+", label: "Jam Operasional", color: "blue" },
              ].map((stat) => (
                <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center ${stat.color === "amber" ? "bg-amber-100" : stat.color === "pink" ? "bg-pink-100" : stat.color === "green" ? "bg-green-100" : "bg-blue-100"}`}>
                    <stat.icon className={`w-6 h-6 ${stat.color === "amber" ? "text-amber-500" : stat.color === "pink" ? "text-pink-500" : stat.color === "green" ? "text-green-500" : "text-blue-500"}`} />
                  </div>
                  <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Galeri Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">Galeri</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Momen <span className="text-purple-500">Berharga</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Lihat berbagai aktivitas seru dan momen indah anak-anak kami</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Kegiatan Belajar", color: "amber" },
              { title: "Seni & Kreativitas", color: "pink" },
              { title: "Outdoor Activity", color: "green" },
              { title: "Pentas Seni", color: "purple" },
              { title: "Field Trip", color: "blue" },
              { title: "Perayaan Hari Besar", color: "red" },
              { title: "Wisuda", color: "amber" },
              { title: "Cooking Class", color: "orange" },
            ].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className={`aspect-square rounded-2xl flex items-center justify-center cursor-pointer hover:scale-105 transition-transform ${
                item.color === "amber" ? "bg-amber-100" : item.color === "pink" ? "bg-pink-100" : item.color === "green" ? "bg-green-100" : item.color === "purple" ? "bg-purple-100" : item.color === "blue" ? "bg-blue-100" : item.color === "red" ? "bg-red-100" : "bg-orange-100"
              }`}>
                <div className="text-center p-4">
                  <Camera className={`w-8 h-8 mx-auto mb-2 ${
                    item.color === "amber" ? "text-amber-400" : item.color === "pink" ? "text-pink-400" : item.color === "green" ? "text-green-400" : item.color === "purple" ? "text-purple-400" : item.color === "blue" ? "text-blue-400" : item.color === "red" ? "text-red-400" : "text-orange-400"
                  }`} />
                  <div className="text-sm font-medium text-gray-700">{item.title}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/galeri" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 text-white font-semibold rounded-full hover:bg-purple-600 transition-colors">
              Lihat Galeri Lengkap <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-white text-amber-500 rounded-full text-sm font-semibold mb-4">Testimoni</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Apa Kata <span className="text-amber-500">Orang Tua?</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Dengarkan pengalaman para orang tua yang sudah mempercayakan anak-anak mereka kepada kami</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "Anak saya jadi lebih percaya diri dan mandiri setelah di Ceria Pintar. Guru-gurunya sangat profesional dan penuh perhatian. Setiap hari anak saya selalu semangat berangkat sekolah!", name: "Ibu Rina Wulandari", child: "Orang tua Keyla (TK B)", color: "amber" },
              { quote: "Guru-gurunya sabar dan perhatian. Anak saya selalu semangat sekolah dan selalu cerita pengalaman seru di sekolah. Perkembangan anak saya sangat pesat sejak bersekolah di sini.", name: "Bapak Andi Prasetyo", child: "Orang tua Raka (TK A)", color: "pink" },
              { quote: "Fasilitas lengkap dan bersih. Aman untuk anak-anak. Sebagai orang tua yang bekerja, saya sangat tenang menitipkan anak di daycare Ceria Pintar. Komunikasinya juga sangat baik.", name: "Ibu Maya Sari", child: "Orang tua Kayla (Playgroup)", color: "green" },
            ].map((testimonial, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Quote className={`w-10 h-10 mb-4 ${testimonial.color === "amber" ? "text-amber-500" : testimonial.color === "pink" ? "text-pink-500" : "text-green-500"}`} />
                <p className="text-gray-600 mb-6 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${testimonial.color === "amber" ? "bg-amber-500" : testimonial.color === "pink" ? "bg-pink-500" : "bg-green-500"}`}>
                    {testimonial.name.split(" ")[1].charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.child}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lokasi Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">Lokasi Kami</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Mudah <span className="text-blue-500">Dijangkau</span></h2>
              <p className="text-gray-600 mb-8">Lokasi strategis di Jakarta Selatan, mudah diakses dengan kendaraan pribadi maupun transportasi umum.</p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Alamat</h4>
                    <p className="text-gray-600">Jl. Pendidikan No. 123, Kelurahan Ceria, Kecamatan Pintar, Jakarta Selatan 12345</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Telepon</h4>
                    <p className="text-gray-600">(021) 1234-5678 / 0812-3456-7890</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Jam Operasional</h4>
                    <p className="text-gray-600">Senin - Jumat: 07:00 - 15:00</p>
                    <p className="text-gray-600">Sabtu: 08:00 - 12:00</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/kontak" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition-colors">
                  Hubungi Kami <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl h-80 md:h-96 flex items-center justify-center shadow-xl">
              <div className="text-center text-white p-8">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Ceria Pintar School</h3>
                <p className="text-white/80">Jakarta Selatan</p>
                <Link href="/kontak" className="inline-block mt-4 px-6 py-2 bg-white text-blue-500 font-semibold rounded-full hover:shadow-lg transition-shadow">
                  Lihat Peta
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 via-pink-500 to-green-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pendaftaran Tahun Ajaran 2025/2026</h2>
            <p className="text-white/90 text-lg mb-8">Periode pendaftaran: Januari - Juni 2025. Segera daftarkan putra-putri Anda!</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link href="/pendaftaran" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-amber-500 font-bold rounded-full hover:shadow-xl transition-shadow">
                Daftar Online Sekarang <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/kontak" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white/10 transition-colors">
                <Phone className="w-5 h-5" /> Hubungi Kami
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold">Rp 500K</div>
                <div className="text-sm text-white/80">Biaya Pendaftaran</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold">Rp 1.2Jt</div>
                <div className="text-sm text-white/80">SPP Playgroup/bln</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold">Rp 1.5Jt</div>
                <div className="text-sm text-white/80">SPP TK/bln</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold">Jan-Jun</div>
                <div className="text-sm text-white/80">Periode Daftar</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
