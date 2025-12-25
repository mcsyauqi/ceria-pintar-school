"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Facebook, Instagram, Youtube, CheckCircle2, ArrowRight, Calendar, Users, Star, HelpCircle, Baby, Backpack, GraduationCap } from "lucide-react";

const contactInfo = [
  { icon: MapPin, title: "Alamat", content: "Jl. Pendidikan No. 123, Kelurahan Maju, Kecamatan Sejahtera, Jakarta Selatan 12345", action: "Lihat di Maps", href: "#", color: "green" },
  { icon: Phone, title: "Telepon", content: "(021) 1234-5678\n0812-3456-7890 (WhatsApp)", action: "Hubungi Kami", href: "tel:+6281234567890", color: "amber" },
  { icon: Mail, title: "Email", content: "info@ceriapintar.sch.id\nadmisi@ceriapintar.sch.id", action: "Kirim Email", href: "mailto:info@ceriapintar.sch.id", color: "pink" },
  { icon: Clock, title: "Jam Operasional", content: "Senin - Jumat: 07:00 - 15:00\nSabtu: 08:00 - 12:00\nMinggu & Libur: Tutup", action: "Jadwalkan Kunjungan", href: "#form", color: "blue" },
];

const faqs = [
  { question: "Berapa usia minimal untuk masuk Playgroup?", answer: "Usia minimal untuk Playgroup adalah 2 tahun per tanggal 1 Juli tahun ajaran berjalan." },
  { question: "Apakah ada program trial sebelum mendaftar?", answer: "Ya, kami menyediakan program trial gratis selama 1 hari. Orang tua dapat mendampingi anak selama trial." },
  { question: "Bagaimana cara pemantauan anak oleh orang tua?", answer: "Kami menyediakan akses CCTV online via aplikasi mobile dan laporan harian melalui WhatsApp group." },
  { question: "Apakah menyediakan layanan antar-jemput?", answer: "Saat ini kami belum menyediakan layanan antar-jemput, namun memiliki drop zone yang aman dan nyaman." },
  { question: "Bagaimana jika anak saya berkebutuhan khusus?", answer: "Kami menerima anak berkebutuhan khusus ringan dengan assessment terlebih dahulu. Silakan konsultasi langsung dengan kami." },
  { question: "Apakah ada diskon untuk mendaftarkan lebih dari satu anak?", answer: "Ya, kami memberikan diskon 10% untuk anak kedua dan 15% untuk anak ketiga dari keluarga yang sama." },
];

const visitReasons = [
  { icon: Users, title: "Observasi Langsung", desc: "Lihat sendiri suasana belajar dan bermain anak-anak" },
  { icon: Star, title: "Konsultasi Gratis", desc: "Diskusi dengan guru tentang kebutuhan anak Anda" },
  { icon: Calendar, title: "Trial Class", desc: "Anak dapat mencoba kelas gratis selama 1 hari" },
];

const programs = [
  { icon: Baby, title: "Playgroup", age: "2-3 tahun", color: "pink" },
  { icon: Backpack, title: "TK A", age: "4-5 tahun", color: "amber" },
  { icon: GraduationCap, title: "TK B", age: "5-6 tahun", color: "green" },
];

export default function KontakPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-green-50 to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-white text-blue-500 rounded-full text-sm font-semibold mb-4">Hubungi Kami</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Kami Siap <span className="text-blue-500">Membantu Anda</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">Punya pertanyaan tentang program, pendaftaran, atau ingin menjadwalkan kunjungan? Hubungi kami melalui berbagai cara di bawah ini.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+6281234567890" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition-colors">
                <Phone className="w-5 h-5" /> Telepon Sekarang
              </a>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-colors">
                <MessageCircle className="w-5 h-5" /> Chat WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div key={info.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                  info.color === "green" ? "bg-green-100" :
                  info.color === "amber" ? "bg-amber-100" :
                  info.color === "pink" ? "bg-pink-100" : "bg-blue-100"
                }`}>
                  <info.icon className={`w-7 h-7 ${
                    info.color === "green" ? "text-green-500" :
                    info.color === "amber" ? "text-amber-500" :
                    info.color === "pink" ? "text-pink-500" : "text-blue-500"
                  }`} />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{info.title}</h3>
                <p className="text-gray-600 text-sm whitespace-pre-line mb-4">{info.content}</p>
                <a href={info.href} className={`text-sm font-semibold hover:underline inline-flex items-center gap-1 ${
                  info.color === "green" ? "text-green-500" :
                  info.color === "amber" ? "text-amber-500" :
                  info.color === "pink" ? "text-pink-500" : "text-blue-500"
                }`}>
                  {info.action} <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Reasons Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-white text-amber-500 rounded-full text-sm font-semibold mb-4">Kunjungan</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Mengapa Harus <span className="text-amber-500">Berkunjung?</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {visitReasons.map((reason, index) => (
              <motion.div key={reason.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-sm">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map Section */}
      <section id="form" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Kirim Pesan</h2>
                <p className="text-gray-600 mb-6">Isi formulir di bawah ini dan kami akan merespons dalam 1x24 jam kerja.</p>

                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                    <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Pesan Terkirim!</h3>
                    <p className="text-gray-600 mb-4">Terima kasih telah menghubungi kami.</p>
                    <p className="text-sm text-gray-500">Tim kami akan segera merespons pesan Anda.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap *</label>
                        <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white" placeholder="Nama Anda" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                        <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white" placeholder="email@example.com" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">No. Telepon/WhatsApp</label>
                      <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white" placeholder="08xxxxxxxxxx" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subjek *</label>
                      <select required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white">
                        <option value="">Pilih subjek</option>
                        <option value="pendaftaran">Informasi Pendaftaran</option>
                        <option value="program">Informasi Program</option>
                        <option value="kunjungan">Jadwal Kunjungan</option>
                        <option value="trial">Trial Class</option>
                        <option value="biaya">Informasi Biaya</option>
                        <option value="lainnya">Lainnya</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Pesan *</label>
                      <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none bg-white" placeholder="Tulis pesan Anda di sini..." />
                    </div>
                    <button type="submit" className="w-full py-4 bg-blue-500 text-white font-bold rounded-xl hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
                      <Send className="w-5 h-5" /> Kirim Pesan
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl h-80 flex items-center justify-center shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full" />
                  <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white rounded-full" />
                </div>
                <div className="text-center text-white relative z-10">
                  <MapPin className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Lokasi Kami</h3>
                  <p className="text-white/80 text-sm max-w-xs mx-auto">Jl. Pendidikan No. 123<br />Jakarta Selatan 12345</p>
                  <a href="#" className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-white/20 rounded-full text-sm hover:bg-white/30 transition-colors">
                    <MapPin className="w-4 h-4" /> Buka di Google Maps
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-gray-800 mb-4">Ikuti Kami di Social Media</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition-transform">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center text-white hover:scale-110 transition-transform">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-xl bg-red-500 flex items-center justify-center text-white hover:scale-110 transition-transform">
                    <Youtube className="w-6 h-6" />
                  </a>
                  <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center text-white hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6" />
                  </a>
                </div>
                <p className="text-gray-600 text-sm mt-4">Follow untuk update kegiatan dan info terbaru!</p>
              </div>

              {/* Quick WhatsApp */}
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="block bg-green-500 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-white">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                    <MessageCircle className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">Chat via WhatsApp</h3>
                    <p className="text-white/80 text-sm">Respon cepat dalam jam kerja</p>
                  </div>
                  <ArrowRight className="w-6 h-6" />
                </div>
              </a>

              {/* Programs Quick Info */}
              <div className="bg-gradient-to-br from-amber-50 to-pink-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-800 mb-4">Program Kami</h3>
                <div className="grid grid-cols-3 gap-3">
                  {programs.map((program) => (
                    <Link key={program.title} href="/program" className={`p-3 rounded-xl text-center hover:shadow-lg transition-shadow ${
                      program.color === "pink" ? "bg-pink-100" :
                      program.color === "amber" ? "bg-amber-100" : "bg-green-100"
                    }`}>
                      <program.icon className={`w-6 h-6 mx-auto mb-1 ${
                        program.color === "pink" ? "text-pink-500" :
                        program.color === "amber" ? "text-amber-500" : "text-green-500"
                      }`} />
                      <div className="font-semibold text-gray-800 text-sm">{program.title}</div>
                      <div className="text-xs text-gray-600">{program.age}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-white text-purple-500 rounded-full text-sm font-semibold mb-4">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Pertanyaan <span className="text-purple-500">Umum</span></h2>
            <p className="text-gray-600">Jawaban untuk pertanyaan yang sering ditanyakan orang tua.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Tidak menemukan jawaban yang Anda cari?</p>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 text-white font-semibold rounded-full hover:bg-purple-600 transition-colors">
              <MessageCircle className="w-5 h-5" /> Tanya Langsung via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Siap untuk Berkunjung?</h2>
          <p className="text-white/90 text-lg mb-8">Jadwalkan kunjungan Anda hari ini dan lihat langsung bagaimana kami mendidik putra-putri Anda.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pendaftaran" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-500 font-bold rounded-full hover:shadow-xl transition-shadow">
              Daftar Sekarang <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:+6281234567890" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white/10 transition-colors">
              <Phone className="w-5 h-5" /> 0812-3456-7890
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
