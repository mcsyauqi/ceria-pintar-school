"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GraduationCap, Award, Heart, Users, Mail, Star, Baby, Backpack, BookOpen, Lightbulb, Target, CheckCircle2, ArrowRight, Clock, Sparkles, Brain, Trophy, Shield, Smile, Calendar } from "lucide-react";

const teachers = [
  {
    name: "Ibu Sarah Wijaya, M.Pd",
    role: "Kepala Sekolah",
    education: "S2 Pendidikan Anak Usia Dini - UI",
    experience: "15 tahun pengalaman",
    color: "amber",
    quote: "Setiap anak adalah bintang yang unik dengan cahayanya masing-masing.",
    specialties: ["Manajemen PAUD", "Kurikulum", "Psikologi Anak"],
    certifications: ["Sertifikasi Guru Penggerak", "Training Montessori", "Child Psychology"]
  },
  {
    name: "Ibu Dewi Sartika, S.Pd",
    role: "Guru TK B",
    education: "S1 PGPAUD - UNJ",
    experience: "8 tahun pengalaman",
    color: "green",
    quote: "Belajar yang menyenangkan akan menjadi kenangan indah seumur hidup.",
    specialties: ["Persiapan SD", "Calistung", "Bahasa Inggris"],
    certifications: ["Sertifikasi Guru PAUD", "TEFL Certificate"]
  },
  {
    name: "Ibu Ratna Kusuma, S.Psi",
    role: "Guru TK A",
    education: "S1 Psikologi Anak - UGM",
    experience: "6 tahun pengalaman",
    color: "pink",
    quote: "Memahami dunia anak adalah kunci untuk mendidik dengan cinta.",
    specialties: ["Psikologi Anak", "Perkembangan Emosi", "Problem Solving"],
    certifications: ["Psikolog Anak", "Play Therapy Certificate"]
  },
  {
    name: "Ibu Ani Nurhayati, S.Pd",
    role: "Guru Playgroup",
    education: "S1 PAUD - UNNES",
    experience: "5 tahun pengalaman",
    color: "blue",
    quote: "Bermain adalah pekerjaan penting anak-anak.",
    specialties: ["Sensory Play", "Motorik", "Sosialisasi Awal"],
    certifications: ["Sertifikasi Guru PAUD", "Montessori 0-3"]
  },
];

const assistantTeachers = [
  { name: "Kak Lina", role: "Asisten TK B", experience: "3 tahun", specialty: "Seni & Kreativitas" },
  { name: "Kak Maya", role: "Asisten TK A", experience: "2 tahun", specialty: "Musik & Bernyanyi" },
  { name: "Kak Dina", role: "Asisten Playgroup", experience: "4 tahun", specialty: "Motorik & Sensori" },
  { name: "Kak Rini", role: "Asisten Daycare", experience: "5 tahun", specialty: "Perawatan Anak" },
];

const supportStaff = [
  { name: "Pak Budi", role: "Satpam", desc: "Menjaga keamanan sekolah 24 jam", icon: Shield },
  { name: "Ibu Tini", role: "Juru Masak", desc: "Menyiapkan menu sehat & bergizi", icon: Heart },
  { name: "Pak Joko", role: "Office Boy", desc: "Menjaga kebersihan sekolah", icon: Sparkles },
  { name: "Ibu Siti", role: "Admin", desc: "Mengelola administrasi sekolah", icon: BookOpen },
];

const achievements = [
  { icon: GraduationCap, value: "100%", label: "Guru Bersertifikat" },
  { icon: Award, value: "5+", label: "Tahun Rata-rata Pengalaman" },
  { icon: Heart, value: "4.9", label: "Rating dari Orang Tua" },
  { icon: Users, value: "1:8", label: "Rasio Guru-Murid" },
];

const teacherValues = [
  { icon: Heart, title: "Penuh Kasih Sayang", desc: "Memperlakukan setiap anak dengan cinta dan perhatian seperti anak sendiri", color: "pink" },
  { icon: Brain, title: "Profesional", desc: "Terus mengembangkan diri melalui pelatihan dan sertifikasi terbaru", color: "blue" },
  { icon: Lightbulb, title: "Kreatif & Inovatif", desc: "Menciptakan metode pembelajaran yang menarik dan menyenangkan", color: "amber" },
  { icon: Target, title: "Fokus pada Anak", desc: "Mengutamakan kebutuhan dan perkembangan setiap anak secara individual", color: "green" },
];

const trainingPrograms = [
  { title: "Pelatihan Berkala", desc: "Workshop bulanan dengan pakar pendidikan anak", icon: Calendar },
  { title: "Sertifikasi Nasional", desc: "Semua guru wajib memiliki sertifikat kompetensi", icon: Award },
  { title: "Studi Banding", desc: "Kunjungan ke sekolah unggulan nasional & internasional", icon: GraduationCap },
  { title: "Mentoring Program", desc: "Bimbingan senior untuk guru baru", icon: Users },
];

const parentTestimonials = [
  { name: "Ibu Rani", child: "Azzam - TK B", quote: "Ibu Dewi sangat sabar mengajar anak saya. Azzam yang tadinya pemalu jadi percaya diri berkat bimbingannya.", rating: 5 },
  { name: "Bapak Hendra", child: "Nayla - TK A", quote: "Guru-gurunya profesional dan penuh kasih. Komunikasi dengan orang tua juga sangat baik.", rating: 5 },
  { name: "Ibu Dinda", child: "Arkan - Playgroup", quote: "Kak Ani dan timnya luar biasa menangani anak yang masih sangat kecil. Arkan sangat betah di sekolah.", rating: 5 },
];

const teachingApproach = [
  { step: "1", title: "Observasi", desc: "Mengamati keunikan dan kebutuhan setiap anak" },
  { step: "2", title: "Personalisasi", desc: "Menyesuaikan pendekatan untuk setiap anak" },
  { step: "3", title: "Stimulasi", desc: "Memberikan aktivitas yang tepat untuk perkembangan" },
  { step: "4", title: "Evaluasi", desc: "Memantau progres dan melaporkan ke orang tua" },
];

export default function GuruPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 via-amber-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-white text-pink-500 rounded-full text-sm font-semibold mb-4">Tim Pengajar</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Guru <span className="text-pink-500">Berpengalaman & Penuh Kasih</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">Tim pengajar profesional yang bersertifikat, berpengalaman, dan berdedikasi tinggi untuk perkembangan optimal putra-putri Anda.</p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center p-6 bg-gradient-to-br from-pink-50 to-amber-50 rounded-2xl">
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

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-white text-blue-500 rounded-full text-sm font-semibold mb-4">Nilai Kami</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nilai yang Kami <span className="text-blue-500">Junjung Tinggi</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Setiap guru di Ceria Pintar School memegang teguh nilai-nilai ini dalam mengajar.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teacherValues.map((value, index) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                  value.color === "pink" ? "bg-pink-100" :
                  value.color === "blue" ? "bg-blue-100" :
                  value.color === "amber" ? "bg-amber-100" : "bg-green-100"
                }`}>
                  <value.icon className={`w-8 h-8 ${
                    value.color === "pink" ? "text-pink-500" :
                    value.color === "blue" ? "text-blue-500" :
                    value.color === "amber" ? "text-amber-500" : "text-green-500"
                  }`} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Teachers Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-white text-amber-500 rounded-full text-sm font-semibold mb-4">Guru Utama</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Kenali <span className="text-amber-500">Guru Kami</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Tim guru profesional dengan latar belakang pendidikan dan pengalaman yang mumpuni.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teachers.map((teacher, index) => (
              <motion.div key={teacher.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start gap-6 mb-6">
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

                  {/* Specialties */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Keahlian:</h4>
                    <div className="flex flex-wrap gap-2">
                      {teacher.specialties.map((specialty, i) => (
                        <span key={i} className={`text-xs px-3 py-1 rounded-full ${
                          teacher.color === "amber" ? "bg-amber-100 text-amber-600" :
                          teacher.color === "green" ? "bg-green-100 text-green-600" :
                          teacher.color === "pink" ? "bg-pink-100 text-pink-600" : "bg-blue-100 text-blue-600"
                        }`}>
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Sertifikasi:</h4>
                    <div className="space-y-1">
                      {teacher.certifications.map((cert, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle2 className={`w-4 h-4 ${
                            teacher.color === "amber" ? "text-amber-500" :
                            teacher.color === "green" ? "text-green-500" :
                            teacher.color === "pink" ? "text-pink-500" : "text-blue-500"
                          }`} />
                          {cert}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`p-4 rounded-xl italic text-gray-600 ${
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

      {/* Assistant Teachers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-500 rounded-full text-sm font-semibold mb-4">Guru Pendamping</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Tim <span className="text-purple-500">Asisten Guru</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Guru pendamping yang membantu aktivitas belajar dan mengajar sehari-hari.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {assistantTeachers.map((teacher, index) => (
              <motion.div key={teacher.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-purple-500 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {teacher.name.split(" ")[1].charAt(0)}
                </div>
                <h3 className="font-bold text-gray-800 mb-1">{teacher.name}</h3>
                <p className="text-purple-500 font-medium text-sm mb-2">{teacher.role}</p>
                <p className="text-gray-600 text-sm mb-2">{teacher.experience}</p>
                <div className="inline-block px-3 py-1 bg-white rounded-full text-xs text-gray-600">
                  {teacher.specialty}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Approach Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-white text-green-500 rounded-full text-sm font-semibold mb-4">Pendekatan</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Pendekatan <span className="text-green-500">Mengajar Kami</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Metode pengajaran yang berpusat pada anak dan perkembangannya.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {teachingApproach.map((step, index) => (
              <motion.div key={step.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center relative">
                {index < teachingApproach.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-green-200" />
                )}
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-full bg-green-500 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4 shadow-lg">
                    {step.step}
                  </div>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guru Per Program Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Guru <span className="text-amber-500">Per Program</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Setiap program memiliki tim guru yang didedikasikan khusus.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-pink-50 rounded-2xl p-6 text-center">
              <Baby className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Playgroup</h3>
              <p className="text-gray-600 mb-4">2 Guru Utama + 2 Asisten</p>
              <p className="text-sm text-gray-500 mb-4">Rasio 1:6</p>
              <div className="space-y-2 text-left">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-pink-500" />
                  Spesialisasi sensory play
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-pink-500" />
                  Training toilet training
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-pink-500" />
                  Sertifikasi Montessori 0-3
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-amber-50 rounded-2xl p-6 text-center">
              <Backpack className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">TK A</h3>
              <p className="text-gray-600 mb-4">2 Guru Utama + 2 Asisten</p>
              <p className="text-sm text-gray-500 mb-4">Rasio 1:8</p>
              <div className="space-y-2 text-left">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                  Spesialisasi calistung dasar
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                  Psikolog anak
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                  Metode multiple intelligences
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-green-50 rounded-2xl p-6 text-center">
              <GraduationCap className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">TK B</h3>
              <p className="text-gray-600 mb-4">2 Guru Utama + 2 Asisten</p>
              <p className="text-sm text-gray-500 mb-4">Rasio 1:8</p>
              <div className="space-y-2 text-left">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Spesialisasi persiapan SD
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Sertifikasi bahasa Inggris
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Training kesiapan sekolah
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-white text-amber-500 rounded-full text-sm font-semibold mb-4">Pengembangan</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Pengembangan <span className="text-amber-500">Guru</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Kami berinvestasi pada pengembangan berkelanjutan tim pengajar kami.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingPrograms.map((program, index) => (
              <motion.div key={program.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
                  <program.icon className="w-7 h-7 text-amber-500" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{program.title}</h3>
                <p className="text-gray-600 text-sm">{program.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Staff Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-white text-blue-500 rounded-full text-sm font-semibold mb-4">Tim Pendukung</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Tim <span className="text-blue-500">Pendukung</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Staf pendukung yang memastikan kelancaran operasional sekolah.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {supportStaff.map((staff, index) => (
              <motion.div key={staff.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <staff.icon className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="font-bold text-gray-800 mb-1">{staff.name}</h3>
                <p className="text-blue-500 font-medium text-sm mb-2">{staff.role}</p>
                <p className="text-gray-600 text-sm">{staff.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-pink-100 text-pink-500 rounded-full text-sm font-semibold mb-4">Testimoni</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Kata Orang Tua tentang <span className="text-pink-500">Guru Kami</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {parentTestimonials.map((testimonial, index) => (
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-amber-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Smile className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Bergabunglah dengan Tim Kami</h2>
          <p className="text-white/90 text-lg mb-8">Kami selalu mencari guru-guru berbakat yang memiliki passion untuk pendidikan anak usia dini.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontak" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-pink-500 font-bold rounded-full hover:shadow-xl transition-shadow">
              <Mail className="w-5 h-5" /> Kirim Lamaran
            </Link>
            <Link href="/pendaftaran" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white/10 transition-colors">
              Daftar Sekolah <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
