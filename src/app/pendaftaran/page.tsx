"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Calendar,
  FileText,
  CreditCard,
  CheckCircle2,
  Baby,
  Backpack,
  GraduationCap,
  Sun,
  Phone,
  Mail,
  ArrowRight,
  Download,
  ClipboardList,
  User,
  Users,
} from "lucide-react";

const programs = [
  {
    id: "playgroup",
    icon: Baby,
    title: "Playgroup",
    age: "2-3 tahun",
    spp: "Rp 1.200.000",
    color: "#EC4899",
    bgColor: "#FCE7F3",
  },
  {
    id: "tk-a",
    icon: Backpack,
    title: "TK A",
    age: "4-5 tahun",
    spp: "Rp 1.500.000",
    color: "#F59E0B",
    bgColor: "#FEF3C7",
  },
  {
    id: "tk-b",
    icon: GraduationCap,
    title: "TK B",
    age: "5-6 tahun",
    spp: "Rp 1.500.000",
    color: "#10B981",
    bgColor: "#D1FAE5",
  },
  {
    id: "daycare",
    icon: Sun,
    title: "Daycare",
    age: "Semua usia",
    spp: "Rp 2.500.000",
    color: "#3B82F6",
    bgColor: "#DBEAFE",
  },
];

const requirements = [
  "Fotokopi Akta Kelahiran Anak",
  "Fotokopi Kartu Keluarga",
  "Fotokopi KTP Orang Tua",
  "Pas foto anak ukuran 3x4 (4 lembar)",
  "Pas foto orang tua ukuran 3x4 (2 lembar)",
  "Surat Keterangan Sehat dari Dokter",
  "Fotokopi Kartu Imunisasi",
];

const steps = [
  {
    icon: ClipboardList,
    title: "Isi Formulir Online",
    desc: "Lengkapi formulir pendaftaran online di bawah ini",
  },
  {
    icon: FileText,
    title: "Siapkan Dokumen",
    desc: "Siapkan semua dokumen yang diperlukan",
  },
  {
    icon: CreditCard,
    title: "Pembayaran",
    desc: "Lakukan pembayaran biaya pendaftaran",
  },
  {
    icon: CheckCircle2,
    title: "Konfirmasi",
    desc: "Tunggu konfirmasi dari tim kami",
  },
];

export default function PendaftaranPage() {
  const [selectedProgram, setSelectedProgram] = useState("");
  const [formData, setFormData] = useState({
    childName: "",
    birthDate: "",
    gender: "",
    parentName: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Formulir pendaftaran berhasil dikirim! Tim kami akan menghubungi Anda segera.");
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FEF3C7] via-[#FCE7F3] to-[#D1FAE5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-white text-[#F59E0B] rounded-full text-sm font-semibold mb-4">
              Pendaftaran Siswa Baru
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Pendaftaran Tahun Ajaran{" "}
              <span className="text-[#F59E0B]">2025/2026</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Periode pendaftaran: Januari - Juni 2025
            </p>
            <div className="flex justify-center gap-4">
              <div className="bg-white rounded-xl px-6 py-4 shadow-lg">
                <div className="text-2xl font-bold text-[#F59E0B]">Rp 500.000</div>
                <div className="text-sm text-gray-600">Biaya Pendaftaran</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center relative"
              >
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200" />
                )}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-[#FEF3C7] flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-[#F59E0B]" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#F59E0B] text-white font-bold flex items-center justify-center mx-auto -mt-6 mb-4 text-sm">
                    {index + 1}
                  </div>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Selection & Form */}
      <section className="py-20 bg-gradient-to-br from-[#FFFBEB] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Program & Requirements */}
            <div className="lg:col-span-1 space-y-8">
              {/* Program Selection */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Pilih Program</h3>
                <div className="space-y-3">
                  {programs.map((program) => (
                    <label
                      key={program.id}
                      className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all ${
                        selectedProgram === program.id
                          ? "ring-2"
                          : "hover:bg-gray-50"
                      }`}
                      style={{
                        backgroundColor: selectedProgram === program.id ? program.bgColor : undefined,
                        ringColor: selectedProgram === program.id ? program.color : undefined,
                      }}
                    >
                      <input
                        type="radio"
                        name="program"
                        value={program.id}
                        checked={selectedProgram === program.id}
                        onChange={(e) => setSelectedProgram(e.target.value)}
                        className="sr-only"
                      />
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${program.color}20` }}
                      >
                        <program.icon className="w-6 h-6" style={{ color: program.color }} />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-800">{program.title}</div>
                        <div className="text-sm text-gray-500">{program.age}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold" style={{ color: program.color }}>
                          {program.spp}
                        </div>
                        <div className="text-xs text-gray-500">/bulan</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Syarat Pendaftaran</h3>
                <div className="space-y-3">
                  {requirements.map((req, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{req}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 flex items-center justify-center gap-2 px-4 py-3 bg-[#FEF3C7] text-[#F59E0B] font-semibold rounded-xl hover:bg-[#F59E0B] hover:text-white transition-all">
                  <Download className="w-5 h-5" />
                  Download Brosur
                </button>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Formulir Pendaftaran</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Child Info */}
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
                      <Baby className="w-5 h-5 text-[#EC4899]" />
                      Data Anak
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nama Lengkap Anak
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.childName}
                          onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent outline-none transition-all"
                          placeholder="Nama lengkap anak"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Tanggal Lahir
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.birthDate}
                          onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent outline-none transition-all"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Jenis Kelamin
                        </label>
                        <div className="flex gap-4">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="gender"
                              value="L"
                              checked={formData.gender === "L"}
                              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                              className="w-4 h-4 text-[#F59E0B]"
                            />
                            Laki-laki
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="gender"
                              value="P"
                              checked={formData.gender === "P"}
                              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                              className="w-4 h-4 text-[#F59E0B]"
                            />
                            Perempuan
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Parent Info */}
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-[#3B82F6]" />
                      Data Orang Tua
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nama Orang Tua/Wali
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.parentName}
                          onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent outline-none transition-all"
                          placeholder="Nama orang tua/wali"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          No. Telepon/WhatsApp
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent outline-none transition-all"
                          placeholder="08xxxxxxxxxx"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent outline-none transition-all"
                          placeholder="email@example.com"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Alamat Lengkap
                        </label>
                        <textarea
                          required
                          rows={3}
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent outline-none transition-all resize-none"
                          placeholder="Alamat lengkap tempat tinggal"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] text-white font-bold rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                  >
                    Kirim Pendaftaran
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-[#F59E0B] to-[#EC4899]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ada Pertanyaan?
            </h2>
            <p className="text-white/90 mb-8">
              Hubungi kami untuk informasi lebih lanjut tentang pendaftaran
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+6281234567890"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#F59E0B] font-semibold rounded-full hover:shadow-lg transition-all"
              >
                <Phone className="w-5 h-5" />
                0812-3456-7890
              </a>
              <a
                href="mailto:info@ceriapintar.sch.id"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-full border-2 border-white hover:bg-white/20 transition-all"
              >
                <Mail className="w-5 h-5" />
                info@ceriapintar.sch.id
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
