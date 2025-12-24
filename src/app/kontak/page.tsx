"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Facebook,
  Instagram,
  Youtube,
  CheckCircle2,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Alamat",
    content: "Jl. Pendidikan No. 123, Kelurahan Ceria, Jakarta Selatan 12345",
    action: "Lihat di Maps",
    href: "#",
    color: "#10B981",
  },
  {
    icon: Phone,
    title: "Telepon",
    content: "(021) 1234-5678 / 0812-3456-7890",
    action: "Hubungi Kami",
    href: "tel:+6281234567890",
    color: "#F59E0B",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@ceriapintar.sch.id",
    action: "Kirim Email",
    href: "mailto:info@ceriapintar.sch.id",
    color: "#EC4899",
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    content: "Senin - Jumat: 07:00 - 15:00\nSabtu: 08:00 - 12:00",
    action: "Jadwalkan Kunjungan",
    href: "#",
    color: "#3B82F6",
  },
];

const faqs = [
  {
    question: "Berapa usia minimal untuk masuk Playgroup?",
    answer: "Usia minimal untuk Playgroup adalah 2 tahun. Anak sudah bisa mengikuti kegiatan stimulasi motorik dan sensorik dengan pendampingan guru.",
  },
  {
    question: "Apakah ada program trial sebelum mendaftar?",
    answer: "Ya, kami menyediakan program trial gratis selama 1 hari. Orang tua dapat melihat langsung bagaimana anak beradaptasi dengan lingkungan sekolah.",
  },
  {
    question: "Bagaimana cara pemantauan anak oleh orang tua?",
    answer: "Kami menyediakan akses CCTV online dan laporan harian melalui aplikasi. Orang tua dapat memantau kegiatan anak kapan saja.",
  },
  {
    question: "Apakah menyediakan layanan antar-jemput?",
    answer: "Saat ini kami belum menyediakan layanan antar-jemput. Namun, kami memiliki area drop zone yang aman dan nyaman.",
  },
];

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#DBEAFE] via-[#D1FAE5] to-[#FEF3C7] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-white text-[#3B82F6] rounded-full text-sm font-semibold mb-4">
              Hubungi Kami
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Kami Siap <span className="text-[#3B82F6]">Membantu Anda</span>
            </h1>
            <p className="text-lg text-gray-600">
              Punya pertanyaan? Ingin berkunjung? Atau ingin mendaftarkan putra-putri Anda?
              Hubungi kami melalui berbagai cara di bawah ini.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${info.color}20` }}
                >
                  <info.icon className="w-7 h-7" style={{ color: info.color }} />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{info.title}</h3>
                <p className="text-gray-600 text-sm whitespace-pre-line mb-4">{info.content}</p>
                <a
                  href={info.href}
                  className="text-sm font-semibold hover:underline"
                  style={{ color: info.color }}
                >
                  {info.action} →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gradient-to-br from-[#FFFBEB] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Kirim Pesan</h2>
                <p className="text-gray-600 mb-6">
                  Isi formulir di bawah ini dan kami akan merespons secepatnya.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle2 className="w-16 h-16 text-[#10B981] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Pesan Terkirim!</h3>
                    <p className="text-gray-600">
                      Terima kasih telah menghubungi kami. Tim kami akan segera merespons.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nama Lengkap
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent outline-none transition-all"
                          placeholder="Nama Anda"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent outline-none transition-all"
                          placeholder="email@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        No. Telepon
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent outline-none transition-all"
                        placeholder="08xxxxxxxxxx"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subjek
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Pilih subjek</option>
                        <option value="pendaftaran">Informasi Pendaftaran</option>
                        <option value="program">Informasi Program</option>
                        <option value="kunjungan">Jadwal Kunjungan</option>
                        <option value="lainnya">Lainnya</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pesan
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tulis pesan Anda di sini..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white font-bold rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Kirim Pesan
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rounded-2xl h-80 flex items-center justify-center shadow-lg">
                <div className="text-center text-white">
                  <MapPin className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Lokasi Kami</h3>
                  <p className="text-white/80 text-sm max-w-xs mx-auto">
                    Jl. Pendidikan No. 123, Kelurahan Ceria, Jakarta Selatan
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-gray-800 mb-4">Ikuti Kami</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl bg-[#FF0000] flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <Youtube className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <MessageCircle className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Quick WhatsApp */}
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#25D366] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-white"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                    <MessageCircle className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Chat via WhatsApp</h3>
                    <p className="text-white/80 text-sm">Respon cepat dalam jam kerja</p>
                  </div>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-[#FEF3C7] text-[#F59E0B] rounded-full text-sm font-semibold mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Pertanyaan <span className="text-[#F59E0B]">Umum</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <h3 className="font-bold text-gray-800 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
