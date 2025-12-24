"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Users, Award, Clock, Play, Heart, BookOpen, Brain, Globe, Sparkles, Baby, GraduationCap, Backpack, Sun, Quote, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-amber-50 via-pink-50 to-amber-100 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-50 animate-float" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-amber-200 rounded-full opacity-50 animate-float" />
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-green-200 rounded-full opacity-50 animate-float" />

        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center lg:text-left"
            >
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
                PAUD & TK dengan kurikulum bermain berbasis karakter. Lingkungan aman, guru penuh kasih, fasilitas lengkap.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                <Link href="/pendaftaran" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-white font-bold rounded-full hover:bg-amber-600 transition-colors">
                  Daftar Sekarang
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 font-semibold rounded-full shadow-md hover:shadow-lg transition-shadow">
                  <Play className="w-5 h-5 text-pink-500" />
                  Virtual Tour
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-amber-500">500+</div>
                  <div className="text-sm text-gray-600">Alumni</div>
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

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
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
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-600 rounded-full text-sm font-semibold mb-4">
              Program Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Pilihan Program Terbaik untuk <span className="text-amber-500">Si Kecil</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan berbagai program yang disesuaikan dengan tahap perkembangan anak
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Baby, title: "Playgroup", age: "2-3 tahun", desc: "Stimulasi motorik & sensorik", color: "pink" },
              { icon: Backpack, title: "TK A", age: "4-5 tahun", desc: "Pengenalan calistung menyenangkan", color: "amber" },
              { icon: GraduationCap, title: "TK B", age: "5-6 tahun", desc: "Persiapan masuk SD", color: "green" },
              { icon: Sun, title: "Daycare", age: "All ages", desc: "Penitipan anak dengan aktivitas edukatif", color: "blue" },
            ].map((program) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${
                  program.color === "pink" ? "bg-pink-100" :
                  program.color === "amber" ? "bg-amber-100" :
                  program.color === "green" ? "bg-green-100" : "bg-blue-100"
                }`}>
                  <program.icon className={`w-8 h-8 ${
                    program.color === "pink" ? "text-pink-500" :
                    program.color === "amber" ? "text-amber-500" :
                    program.color === "green" ? "text-green-500" : "text-blue-500"
                  }`} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{program.title}</h3>
                <p className={`text-sm font-medium mb-3 ${
                  program.color === "pink" ? "text-pink-500" :
                  program.color === "amber" ? "text-amber-500" :
                  program.color === "green" ? "text-green-500" : "text-blue-500"
                }`}>{program.age}</p>
                <p className="text-gray-600 text-sm">{program.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/program" className="inline-flex items-center gap-2 text-amber-500 font-semibold hover:gap-3 transition-all">
              Lihat Semua Program <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Kurikulum Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-white text-pink-500 rounded-full text-sm font-semibold mb-4">
              Kurikulum Unggulan
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Metode Pembelajaran <span className="text-pink-500">Terbaik</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Play, title: "Belajar Melalui Bermain", desc: "Metode pembelajaran fun & interaktif", color: "amber" },
              { icon: Heart, title: "Character Building", desc: "Pembentukan karakter positif sejak dini", color: "pink" },
              { icon: Brain, title: "Multiple Intelligence", desc: "Pengembangan semua kecerdasan anak", color: "green" },
              { icon: Globe, title: "Bilingual Program", desc: "Pengenalan bahasa Inggris sejak dini", color: "blue" },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex gap-5 bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  item.color === "amber" ? "bg-amber-100" :
                  item.color === "pink" ? "bg-pink-100" :
                  item.color === "green" ? "bg-green-100" : "bg-blue-100"
                }`}>
                  <item.icon className={`w-7 h-7 ${
                    item.color === "amber" ? "text-amber-500" :
                    item.color === "pink" ? "text-pink-500" :
                    item.color === "green" ? "text-green-500" : "text-blue-500"
                  }`} />
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

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4">
                Mengapa Ceria Pintar?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Dipercaya Ratusan <span className="text-green-500">Orang Tua</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Kami memahami bahwa memilih sekolah untuk anak adalah keputusan penting.
              </p>

              <div className="space-y-4">
                {[
                  "Guru bersertifikat dengan pengalaman 5+ tahun",
                  "Lingkungan belajar aman dengan CCTV 24 jam",
                  "Kurikulum berbasis karakter dan kreativitas",
                  "Fasilitas lengkap dan terawat",
                  "Rasio guru-murid 1:8 untuk perhatian optimal",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, value: "500+", label: "Alumni", color: "amber" },
                { icon: Award, value: "15+", label: "Tahun Pengalaman", color: "pink" },
                { icon: Star, value: "4.9", label: "Rating Orang Tua", color: "green" },
                { icon: Clock, value: "8+", label: "Jam Operasional", color: "blue" },
              ].map((stat) => (
                <div key={stat.label} className="bg-gray-50 rounded-2xl p-6 text-center shadow-lg">
                  <div className={`w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center ${
                    stat.color === "amber" ? "bg-amber-100" :
                    stat.color === "pink" ? "bg-pink-100" :
                    stat.color === "green" ? "bg-green-100" : "bg-blue-100"
                  }`}>
                    <stat.icon className={`w-6 h-6 ${
                      stat.color === "amber" ? "text-amber-500" :
                      stat.color === "pink" ? "text-pink-500" :
                      stat.color === "green" ? "text-green-500" : "text-blue-500"
                    }`} />
                  </div>
                  <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-white text-blue-500 rounded-full text-sm font-semibold mb-4">
              Testimoni
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Apa Kata <span className="text-blue-500">Orang Tua?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "Anak saya jadi lebih percaya diri dan mandiri setelah di Ceria Pintar.", name: "Ibu Rina", child: "Orang tua Keyla (TK B)", color: "amber" },
              { quote: "Guru-gurunya sabar dan perhatian. Anak saya selalu semangat sekolah.", name: "Bapak Andi", child: "Orang tua Raka (TK A)", color: "pink" },
              { quote: "Fasilitas lengkap dan bersih. Aman untuk anak-anak.", name: "Ibu Maya", child: "Orang tua Kayla (Playgroup)", color: "green" },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <Quote className={`w-10 h-10 mb-4 ${
                  testimonial.color === "amber" ? "text-amber-500" :
                  testimonial.color === "pink" ? "text-pink-500" : "text-green-500"
                }`} />
                <p className="text-gray-600 mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                    testimonial.color === "amber" ? "bg-amber-500" :
                    testimonial.color === "pink" ? "bg-pink-500" : "bg-green-500"
                  }`}>
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
      <section className="py-20 bg-gradient-to-r from-amber-500 via-pink-500 to-green-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pendaftaran Tahun Ajaran 2025/2026
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Periode pendaftaran: Januari - Juni 2025
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link href="/pendaftaran" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-amber-500 font-bold rounded-full hover:shadow-xl transition-shadow">
              Daftar Online <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/kontak" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white/10 transition-colors">
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
        </div>
      </section>
    </div>
  );
}
