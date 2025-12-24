"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Star,
  Users,
  Award,
  Clock,
  Play,
  Heart,
  BookOpen,
  Brain,
  Globe,
  Sparkles,
  Baby,
  GraduationCap,
  Backpack,
  Sun,
  Quote,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] gradient-hero overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-[#EC4899]/20 rounded-full animate-float" />
          <div className="absolute top-40 right-20 w-32 h-32 bg-[#F59E0B]/20 rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
          <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-[#10B981]/20 rounded-full animate-float" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-[#3B82F6]/20 rounded-full animate-float" style={{ animationDelay: "1.5s" }} />

          {/* Stars */}
          <Star className="absolute top-32 left-1/3 w-6 h-6 text-[#F59E0B] animate-bounce-slow" />
          <Star className="absolute top-60 right-1/4 w-4 h-4 text-[#EC4899] animate-bounce-slow" style={{ animationDelay: "0.3s" }} />
          <Star className="absolute bottom-32 left-1/2 w-5 h-5 text-[#10B981] animate-bounce-slow" style={{ animationDelay: "0.6s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full shadow-md mb-6">
                <Sparkles className="w-5 h-5 text-[#F59E0B]" />
                <span className="text-sm font-medium text-gray-700">
                  Pendaftaran 2025/2026 Dibuka!
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-gray-800">Tempat Terbaik untuk</span>
                <br />
                <span className="bg-gradient-to-r from-[#F59E0B] via-[#EC4899] to-[#10B981] bg-clip-text text-transparent">
                  Si Kecil Belajar & Bermain
                </span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                PAUD & TK dengan kurikulum bermain berbasis karakter.
                Lingkungan aman, guru penuh kasih, fasilitas lengkap.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                <Link
                  href="/pendaftaran"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] text-white font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all"
                >
                  Daftar Sekarang
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 font-semibold rounded-full shadow-md hover:shadow-lg transition-all border-2 border-gray-100">
                  <Play className="w-5 h-5 text-[#EC4899]" />
                  Virtual Tour
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#F59E0B]">500+</div>
                  <div className="text-sm text-gray-600">Alumni</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#EC4899]">15</div>
                  <div className="text-sm text-gray-600">Tahun Berdiri</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#10B981]">1:8</div>
                  <div className="text-sm text-gray-600">Rasio Guru-Murid</div>
                </div>
              </div>
            </motion.div>

            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Main Circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/30 via-[#EC4899]/20 to-[#10B981]/30 rounded-full" />

                {/* Inner Circle */}
                <div className="absolute inset-8 bg-gradient-to-tr from-[#FBBF24]/40 to-[#F472B6]/40 rounded-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 bg-white rounded-full shadow-xl flex items-center justify-center">
                      <GraduationCap className="w-16 h-16 text-[#F59E0B]" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Ceria Pintar</h3>
                    <p className="text-sm text-gray-600">Belajar Sambil Bermain</p>
                    <p className="text-sm text-gray-600">Tumbuh dengan Cinta</p>
                  </div>
                </div>

                {/* Floating Icons */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4">
                  <div className="w-16 h-16 bg-[#EC4899] rounded-2xl shadow-lg flex items-center justify-center animate-bounce-slow">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4">
                  <div className="w-16 h-16 bg-[#10B981] rounded-2xl shadow-lg flex items-center justify-center animate-bounce-slow" style={{ animationDelay: "0.3s" }}>
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4">
                  <div className="w-16 h-16 bg-[#3B82F6] rounded-2xl shadow-lg flex items-center justify-center animate-bounce-slow" style={{ animationDelay: "0.6s" }}>
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4">
                  <div className="w-16 h-16 bg-[#F59E0B] rounded-2xl shadow-lg flex items-center justify-center animate-bounce-slow" style={{ animationDelay: "0.9s" }}>
                    <Star className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-4 py-2 bg-[#FEF3C7] text-[#F59E0B] rounded-full text-sm font-semibold mb-4"
            >
              Program Kami
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              Pilihan Program Terbaik untuk{" "}
              <span className="text-[#F59E0B]">Si Kecil</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan berbagai program yang disesuaikan dengan tahap perkembangan anak
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Baby,
                title: "Playgroup",
                age: "2-3 tahun",
                desc: "Stimulasi motorik & sensorik",
                color: "#EC4899",
                bgColor: "#FCE7F3",
              },
              {
                icon: Backpack,
                title: "TK A",
                age: "4-5 tahun",
                desc: "Pengenalan calistung menyenangkan",
                color: "#F59E0B",
                bgColor: "#FEF3C7",
              },
              {
                icon: GraduationCap,
                title: "TK B",
                age: "5-6 tahun",
                desc: "Persiapan masuk SD",
                color: "#10B981",
                bgColor: "#D1FAE5",
              },
              {
                icon: Sun,
                title: "Daycare",
                age: "All ages",
                desc: "Penitipan anak dengan aktivitas edukatif",
                color: "#3B82F6",
                bgColor: "#DBEAFE",
              },
            ].map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: program.bgColor }}
                >
                  <program.icon className="w-8 h-8" style={{ color: program.color }} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{program.title}</h3>
                <p className="text-sm font-medium mb-3" style={{ color: program.color }}>
                  {program.age}
                </p>
                <p className="text-gray-600 text-sm">{program.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/program"
              className="inline-flex items-center gap-2 text-[#F59E0B] font-semibold hover:gap-3 transition-all"
            >
              Lihat Semua Program
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Kurikulum Section */}
      <section className="py-20 bg-gradient-to-br from-[#FEF3C7] to-[#FCE7F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-4 py-2 bg-white text-[#EC4899] rounded-full text-sm font-semibold mb-4"
            >
              Kurikulum Unggulan
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              Metode Pembelajaran{" "}
              <span className="text-[#EC4899]">Terbaik</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 max-w-2xl mx-auto">
              Kurikulum kami dirancang untuk mengembangkan potensi anak secara holistik
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Play,
                title: "Belajar Melalui Bermain",
                desc: "Metode pembelajaran fun & interaktif yang membuat anak senang belajar",
                color: "#F59E0B",
              },
              {
                icon: Heart,
                title: "Character Building",
                desc: "Pembentukan karakter positif sejak dini: jujur, mandiri, dan bertanggung jawab",
                color: "#EC4899",
              },
              {
                icon: Brain,
                title: "Multiple Intelligence",
                desc: "Pengembangan semua kecerdasan anak: linguistik, logika, kinestetik, dll",
                color: "#10B981",
              },
              {
                icon: Globe,
                title: "Bilingual Program",
                desc: "Pengenalan bahasa Inggris sejak dini melalui kegiatan menyenangkan",
                color: "#3B82F6",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-5 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  <item.icon className="w-7 h-7" style={{ color: item.color }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-[#D1FAE5] text-[#10B981] rounded-full text-sm font-semibold mb-4">
                Mengapa Ceria Pintar?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Dipercaya Ratusan{" "}
                <span className="text-[#10B981]">Orang Tua</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Kami memahami bahwa memilih sekolah untuk anak adalah keputusan penting.
                Di Ceria Pintar, kami berkomitmen memberikan yang terbaik.
              </p>

              <div className="space-y-4">
                {[
                  "Guru bersertifikat dengan pengalaman 5+ tahun",
                  "Lingkungan belajar aman dengan CCTV 24 jam",
                  "Kurikulum berbasis karakter dan kreativitas",
                  "Fasilitas lengkap dan terawat",
                  "Rasio guru-murid 1:8 untuk perhatian optimal",
                  "Laporan perkembangan anak berkala",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#10B981] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Users, value: "500+", label: "Alumni", color: "#F59E0B" },
                { icon: Award, value: "15+", label: "Tahun Pengalaman", color: "#EC4899" },
                { icon: Star, value: "4.9", label: "Rating Orang Tua", color: "#10B981" },
                { icon: Clock, value: "8+", label: "Jam Operasional", color: "#3B82F6" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
                >
                  <div
                    className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center"
                    style={{ backgroundColor: `${stat.color}20` }}
                  >
                    <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                  </div>
                  <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-[#DBEAFE] to-[#D1FAE5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-4 py-2 bg-white text-[#3B82F6] rounded-full text-sm font-semibold mb-4"
            >
              Testimoni
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              Apa Kata{" "}
              <span className="text-[#3B82F6]">Orang Tua?</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "Anak saya jadi lebih percaya diri dan mandiri setelah di Ceria Pintar. Guru-gurunya sangat profesional dan penuh perhatian.",
                name: "Ibu Rina",
                child: "Orang tua Keyla (TK B)",
                color: "#F59E0B",
              },
              {
                quote: "Guru-gurunya sabar dan perhatian. Anak saya selalu semangat sekolah. Setiap hari selalu cerita pengalaman seru di sekolah.",
                name: "Bapak Andi",
                child: "Orang tua Raka (TK A)",
                color: "#EC4899",
              },
              {
                quote: "Fasilitas lengkap dan bersih. Aman untuk anak-anak. Sebagai orang tua, saya sangat tenang menitipkan anak di sini.",
                name: "Ibu Maya",
                child: "Orang tua Kayla (Playgroup)",
                color: "#10B981",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <Quote className="w-10 h-10 mb-4" style={{ color: testimonial.color }} />
                <p className="text-gray-600 mb-6 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: testimonial.color }}
                  >
                    {testimonial.name.charAt(0)}
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#F59E0B] via-[#EC4899] to-[#10B981]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pendaftaran Tahun Ajaran 2025/2026
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Periode pendaftaran: Januari - Juni 2025. Segera daftarkan putra-putri Anda!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link
                href="/pendaftaran"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#F59E0B] font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all"
              >
                Daftar Online
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/kontak"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white/10 transition-all"
              >
                Hubungi Kami
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl font-bold">Rp 500K</div>
                <div className="text-sm text-white/80">Biaya Pendaftaran</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl font-bold">Rp 1.2Jt</div>
                <div className="text-sm text-white/80">SPP Playgroup/bln</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl font-bold">Rp 1.5Jt</div>
                <div className="text-sm text-white/80">SPP TK/bln</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
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
