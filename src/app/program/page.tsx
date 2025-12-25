"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Baby, GraduationCap, Backpack, Sun, Clock, Users, ArrowRight, CheckCircle2, Music, Palette, Trophy, BookOpen, Brain, Heart, Sparkles, Target, Lightbulb, Puzzle, Star, MessageCircle, Globe, Calculator, Pencil } from "lucide-react";

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
    description: "Program untuk anak usia 2-3 tahun yang berfokus pada stimulasi motorik dan sensorik melalui bermain. Di usia ini, anak belajar melalui eksplorasi lingkungan dan interaksi sosial dasar.",
    activities: ["Stimulasi motorik halus & kasar", "Pengenalan warna & bentuk", "Bermain sensorik", "Bernyanyi & menari", "Sosialisasi", "Toilet training"],
    outcomes: ["Mampu berinteraksi dengan teman sebaya", "Mengenal warna dasar dan bentuk", "Mengembangkan kemandirian awal", "Meningkatkan koordinasi motorik"],
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
    description: "Program untuk anak usia 4-5 tahun dengan pengenalan calistung yang menyenangkan melalui metode bermain sambil belajar. Fokus pada pengembangan kognitif dan kreativitas.",
    activities: ["Pengenalan huruf & angka", "Membaca permulaan", "Menulis nama sendiri", "Berhitung 1-20", "Bahasa Inggris dasar", "Eksperimen sains"],
    outcomes: ["Mengenal semua huruf alfabet", "Mampu menulis nama sendiri", "Berhitung 1-20", "Memahami konsep dasar sains"],
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
    description: "Program persiapan masuk SD untuk anak usia 5-6 tahun dengan kurikulum komprehensif. Memastikan kesiapan akademis, sosial, dan emosional untuk jenjang pendidikan berikutnya.",
    activities: ["Membaca lancar", "Menulis huruf & kata", "Berhitung sampai 100", "Penjumlahan & pengurangan", "Bahasa Inggris percakapan", "Kesiapan masuk SD"],
    outcomes: ["Membaca dengan lancar", "Menulis kalimat sederhana", "Operasi matematika dasar", "Siap secara akademis untuk SD"],
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
    description: "Layanan penitipan anak sepanjang hari dengan aktivitas edukatif dan pengawasan penuh. Ideal untuk orang tua yang bekerja namun ingin anak tetap mendapat stimulasi optimal.",
    activities: ["Program belajar sesuai usia", "Makan siang & 2x snack", "Tidur siang", "Aktivitas indoor & outdoor", "Pengawasan penuh", "Laporan harian"],
    outcomes: ["Rutinitas harian teratur", "Nutrisi terjamin", "Stimulasi sesuai usia", "Perkembangan optimal"],
  },
];

const extracurriculars = [
  { icon: Music, title: "Musik & Vokal", desc: "Bernyanyi dan bermain alat musik sederhana seperti keyboard, angklung, dan perkusi", schedule: "Selasa & Kamis" },
  { icon: Palette, title: "Seni & Kreativitas", desc: "Melukis, menggambar, dan crafting dengan berbagai media kreatif", schedule: "Senin & Rabu" },
  { icon: Trophy, title: "Tari Tradisional", desc: "Mengenal budaya Indonesia melalui tarian daerah yang disesuaikan untuk anak", schedule: "Rabu & Jumat" },
  { icon: BookOpen, title: "Mengaji & Iqro", desc: "Belajar Al-Quran dengan metode Iqro yang menyenangkan", schedule: "Setiap Hari" },
];

const learningMethods = [
  { icon: Puzzle, title: "Learning by Playing", desc: "Anak belajar melalui permainan yang dirancang khusus untuk mengembangkan berbagai aspek kemampuan.", color: "pink" },
  { icon: Brain, title: "Multiple Intelligences", desc: "Mengembangkan 8 kecerdasan majemuk: linguistik, logis-matematis, spasial, musikal, kinestetik, interpersonal, intrapersonal, dan naturalis.", color: "amber" },
  { icon: Heart, title: "Positive Parenting", desc: "Kolaborasi erat antara guru dan orang tua untuk memastikan konsistensi pendidikan di sekolah dan rumah.", color: "green" },
  { icon: Sparkles, title: "Character Building", desc: "Menanamkan nilai-nilai karakter seperti kejujuran, tanggung jawab, dan empati sejak dini.", color: "blue" },
];

const weeklySchedule = [
  { day: "Senin", themes: ["Bahasa Indonesia", "Seni Rupa", "Motorik Halus"] },
  { day: "Selasa", themes: ["Matematika", "Musik", "Outdoor Play"] },
  { day: "Rabu", themes: ["Sains", "Tari", "Sensory Play"] },
  { day: "Kamis", themes: ["Bahasa Inggris", "Musik", "Eksperimen"] },
  { day: "Jumat", themes: ["Mengaji", "Review Mingguan", "Free Play"] },
];

const testimonials = [
  { name: "Ibu Rina", child: "Ayla - TK B", quote: "Anak saya yang tadinya pemalu, sekarang sudah percaya diri dan bisa membaca lancar berkat metode belajar yang menyenangkan.", rating: 5 },
  { name: "Ibu Dina", child: "Rafa - TK A", quote: "Guru-guru sangat sabar dan penuh kasih. Rafa selalu semangat berangkat sekolah setiap hari!", rating: 5 },
  { name: "Bapak Eko", child: "Nadia - Daycare", quote: "Sebagai orang tua yang bekerja, daycare di sini sangat membantu. Anak saya tetap mendapat stimulasi optimal.", rating: 5 },
];

const faqs = [
  { question: "Apakah ada program trial sebelum mendaftar?", answer: "Ya, kami menyediakan program trial gratis selama 1 hari untuk semua program. Orang tua dapat mendampingi anak selama trial." },
  { question: "Bagaimana metode pengajaran membaca di sini?", answer: "Kami menggunakan metode fonik yang menyenangkan dengan media pembelajaran interaktif, lagu, dan permainan. Tidak ada paksaan, semua sesuai kesiapan anak." },
  { question: "Apakah anak akan diberikan PR?", answer: "Untuk Playgroup dan TK A tidak ada PR. Untuk TK B, ada PR ringan seminggu sekali untuk melatih kemandirian." },
  { question: "Bagaimana jika anak saya menangis saat ditinggal?", answer: "Tim kami sangat berpengalaman menangani masa adaptasi. Kami memiliki program adaptasi bertahap dan komunikasi intensif dengan orang tua." },
];

const developmentAreas = [
  { icon: Brain, title: "Kognitif", desc: "Berpikir logis, problem solving, kreativitas", color: "amber" },
  { icon: MessageCircle, title: "Bahasa", desc: "Berbicara, membaca, menulis, bahasa Inggris", color: "pink" },
  { icon: Users, title: "Sosial-Emosional", desc: "Empati, kerja sama, pengendalian emosi", color: "green" },
  { icon: Target, title: "Motorik", desc: "Motorik halus & kasar, koordinasi", color: "blue" },
  { icon: Lightbulb, title: "Seni", desc: "Musik, tari, seni rupa, kreativitas", color: "purple" },
  { icon: Globe, title: "Moral & Agama", desc: "Nilai-nilai kebaikan, mengaji, akhlak", color: "cyan" },
];

export default function ProgramPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 via-pink-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-white text-amber-500 rounded-full text-sm font-semibold mb-4">Program Kami</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Program Pendidikan <span className="text-amber-500">Terbaik</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">Berbagai program yang disesuaikan dengan tahap perkembangan anak, dirancang oleh tim ahli pendidikan anak usia dini.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#playgroup" className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition-colors">Playgroup</Link>
              <Link href="#tk-a" className="px-6 py-3 bg-amber-500 text-white font-semibold rounded-full hover:bg-amber-600 transition-colors">TK A</Link>
              <Link href="#tk-b" className="px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-colors">TK B</Link>
              <Link href="#daycare" className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition-colors">Daycare</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Aspek Perkembangan Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">6 Aspek <span className="text-amber-500">Perkembangan</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Semua program kami dirancang untuk mengoptimalkan 6 aspek perkembangan anak secara holistik.</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {developmentAreas.map((area, index) => (
              <motion.div key={area.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className={`p-4 rounded-2xl text-center ${
                area.color === "amber" ? "bg-amber-50" :
                area.color === "pink" ? "bg-pink-50" :
                area.color === "green" ? "bg-green-50" :
                area.color === "blue" ? "bg-blue-50" :
                area.color === "purple" ? "bg-purple-50" : "bg-cyan-50"
              }`}>
                <area.icon className={`w-10 h-10 mx-auto mb-3 ${
                  area.color === "amber" ? "text-amber-500" :
                  area.color === "pink" ? "text-pink-500" :
                  area.color === "green" ? "text-green-500" :
                  area.color === "blue" ? "text-blue-500" :
                  area.color === "purple" ? "text-purple-500" : "text-cyan-500"
                }`} />
                <h3 className="font-bold text-gray-800 text-sm mb-1">{area.title}</h3>
                <p className="text-gray-600 text-xs">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metode Pembelajaran Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-white text-pink-500 rounded-full text-sm font-semibold mb-4">Metode Kami</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Metode <span className="text-pink-500">Pembelajaran</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Pendekatan pembelajaran yang kami terapkan berdasarkan riset terkini tentang perkembangan anak.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningMethods.map((method, index) => (
              <motion.div key={method.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                  method.color === "pink" ? "bg-pink-100" :
                  method.color === "amber" ? "bg-amber-100" :
                  method.color === "green" ? "bg-green-100" : "bg-blue-100"
                }`}>
                  <method.icon className={`w-7 h-7 ${
                    method.color === "pink" ? "text-pink-500" :
                    method.color === "amber" ? "text-amber-500" :
                    method.color === "green" ? "text-green-500" : "text-blue-500"
                  }`} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{method.title}</h3>
                <p className="text-gray-600 text-sm">{method.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Program Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-600 rounded-full text-sm font-semibold mb-4">Detail Program</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Pilih Program yang <span className="text-amber-500">Tepat</span></h2>
          </div>
          <div className="space-y-24">
            {programs.map((program, index) => (
              <motion.div id={program.id} key={program.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`scroll-mt-24 grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
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
                        <div className="text-sm text-gray-500">Rasio Guru</div>
                        <div className="font-medium text-gray-800">{program.ratio}</div>
                      </div>
                    </div>
                  </div>

                  <div className={`p-4 rounded-xl mb-6 ${
                    program.color === "pink" ? "bg-pink-50" :
                    program.color === "amber" ? "bg-amber-50" :
                    program.color === "green" ? "bg-green-50" : "bg-blue-50"
                  }`}>
                    <div className="text-sm text-gray-600">Biaya SPP</div>
                    <div className={`text-2xl font-bold ${
                      program.color === "pink" ? "text-pink-500" :
                      program.color === "amber" ? "text-amber-500" :
                      program.color === "green" ? "text-green-500" : "text-blue-500"
                    }`}>{program.price}</div>
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
                    <div className="space-y-3 mb-6">
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
                    <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">Target Capaian</h3>
                    <div className="space-y-2">
                      {program.outcomes.map((outcome, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <Star className={`w-4 h-4 flex-shrink-0 ${
                            program.color === "pink" ? "text-pink-400" :
                            program.color === "amber" ? "text-amber-400" :
                            program.color === "green" ? "text-green-400" : "text-blue-400"
                          }`} />
                          {outcome}
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

      {/* Jadwal Mingguan Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-white text-blue-500 rounded-full text-sm font-semibold mb-4">Jadwal</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Tema <span className="text-blue-500">Mingguan</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Setiap hari memiliki fokus tema yang berbeda untuk memberikan variasi dan stimulasi optimal.</p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {weeklySchedule.map((schedule, index) => (
              <motion.div key={schedule.day} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-500 font-bold">{schedule.day.charAt(0)}</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-3">{schedule.day}</h3>
                <div className="space-y-2">
                  {schedule.themes.map((theme, i) => (
                    <div key={i} className="text-sm text-gray-600 bg-gray-50 rounded-lg py-2 px-3">{theme}</div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ekstrakurikuler Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-white text-green-500 rounded-full text-sm font-semibold mb-4">Ekstrakurikuler</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Kegiatan <span className="text-green-500">Tambahan</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Ekstrakurikuler untuk mengembangkan bakat dan minat anak di luar kurikulum utama.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {extracurriculars.map((extra, index) => (
              <motion.div key={extra.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center mb-4">
                  <extra.icon className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{extra.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{extra.desc}</p>
                <div className="flex items-center gap-2 text-sm text-amber-600">
                  <Clock className="w-4 h-4" />
                  {extra.schedule}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimoni Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-pink-100 text-pink-500 rounded-full text-sm font-semibold mb-4">Testimoni</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Kata <span className="text-pink-500">Orang Tua</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div key={testimonial.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-gradient-to-br from-pink-50 to-amber-50 rounded-2xl p-6 shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.child}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-white text-amber-500 rounded-full text-sm font-semibold mb-4">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Pertanyaan <span className="text-amber-500">Umum</span></h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-gray-800 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Perbandingan Program Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-500 rounded-full text-sm font-semibold mb-4">Perbandingan</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Tabel <span className="text-blue-500">Perbandingan</span></h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-amber-500 to-pink-500 text-white">
                  <th className="py-4 px-6 text-left">Fitur</th>
                  <th className="py-4 px-6 text-center">Playgroup</th>
                  <th className="py-4 px-6 text-center">TK A</th>
                  <th className="py-4 px-6 text-center">TK B</th>
                  <th className="py-4 px-6 text-center">Daycare</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium text-gray-800">Usia</td>
                  <td className="py-4 px-6 text-center text-gray-600">2-3 tahun</td>
                  <td className="py-4 px-6 text-center text-gray-600">4-5 tahun</td>
                  <td className="py-4 px-6 text-center text-gray-600">5-6 tahun</td>
                  <td className="py-4 px-6 text-center text-gray-600">Semua usia</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-800">Durasi</td>
                  <td className="py-4 px-6 text-center text-gray-600">3 jam</td>
                  <td className="py-4 px-6 text-center text-gray-600">4 jam</td>
                  <td className="py-4 px-6 text-center text-gray-600">4.5 jam</td>
                  <td className="py-4 px-6 text-center text-gray-600">10 jam</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium text-gray-800">Rasio Guru</td>
                  <td className="py-4 px-6 text-center text-gray-600">1:6</td>
                  <td className="py-4 px-6 text-center text-gray-600">1:8</td>
                  <td className="py-4 px-6 text-center text-gray-600">1:8</td>
                  <td className="py-4 px-6 text-center text-gray-600">1:5</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-800">Calistung</td>
                  <td className="py-4 px-6 text-center"><span className="text-gray-400">-</span></td>
                  <td className="py-4 px-6 text-center"><CheckCircle2 className="w-5 h-5 text-amber-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center text-gray-400">Sesuai usia</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium text-gray-800">Bahasa Inggris</td>
                  <td className="py-4 px-6 text-center"><span className="text-gray-400">-</span></td>
                  <td className="py-4 px-6 text-center"><CheckCircle2 className="w-5 h-5 text-amber-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center text-gray-400">Sesuai usia</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-800">Makan Siang</td>
                  <td className="py-4 px-6 text-center"><span className="text-gray-400">-</span></td>
                  <td className="py-4 px-6 text-center"><span className="text-gray-400">-</span></td>
                  <td className="py-4 px-6 text-center"><span className="text-gray-400">-</span></td>
                  <td className="py-4 px-6 text-center"><CheckCircle2 className="w-5 h-5 text-blue-500 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-gray-800">Biaya/bulan</td>
                  <td className="py-4 px-6 text-center font-bold text-pink-500">Rp 1.2 jt</td>
                  <td className="py-4 px-6 text-center font-bold text-amber-500">Rp 1.5 jt</td>
                  <td className="py-4 px-6 text-center font-bold text-green-500">Rp 1.5 jt</td>
                  <td className="py-4 px-6 text-center font-bold text-blue-500">Rp 2.5 jt</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-pink-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Siap Bergabung?</h2>
          <p className="text-white/90 text-lg mb-8">Daftarkan putra-putri Anda sekarang dan berikan pendidikan terbaik sejak dini.</p>
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
