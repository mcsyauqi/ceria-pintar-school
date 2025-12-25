"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Tv, Blocks, Trees, BookOpen, Music, Droplets, Camera, Utensils, ShieldCheck, Car, Heart, ArrowRight, CheckCircle2, Sparkles, Sun, Wind, Wifi, Phone, Clock, Users, Star, Baby, ThermometerSun, Leaf, Smile } from "lucide-react";

const facilities = [
  { icon: Tv, title: "Kelas AC Modern", desc: "Ruang kelas ber-AC dengan pencahayaan optimal dan ventilasi yang baik untuk kenyamanan belajar anak", color: "amber", features: ["AC setiap ruangan", "Pencahayaan LED hemat energi", "Meja kursi ergonomis anak", "Loker pribadi murid"] },
  { icon: Blocks, title: "Mainan Edukatif", desc: "Koleksi mainan edukatif berkualitas internasional yang mendukung perkembangan kognitif dan motorik", color: "pink", features: ["Lego & building blocks", "Puzzle beragam tingkat", "Mainan sensorik Montessori", "Alat peraga edukatif"] },
  { icon: Trees, title: "Playground Indoor & Outdoor", desc: "Area bermain indoor dan outdoor yang aman dengan matras pelindung dan pengawasan ketat", color: "green", features: ["Perosotan aman", "Ayunan & jungkat-jungkit", "Matras pelindung tebal", "Area pasir bersih"] },
  { icon: BookOpen, title: "Perpustakaan Mini", desc: "Koleksi buku cerita bergambar dalam Bahasa Indonesia dan Inggris dengan area baca yang nyaman", color: "blue", features: ["500+ buku cerita", "Buku bilingual", "Area baca bean bag", "Pojok dongeng"] },
  { icon: Music, title: "Ruang Musik & Seni", desc: "Ruang khusus untuk mengembangkan kreativitas dan bakat seni anak dengan peralatan lengkap", color: "purple", features: ["Alat musik anak", "Ruang tari dengan cermin", "Art supplies lengkap", "Audio system"] },
  { icon: Droplets, title: "Water Play Area", desc: "Area bermain air yang aman dan higienis untuk stimulasi sensorik dan kesenangan anak", color: "cyan", features: ["Kolam dangkal (30cm)", "Water toys bervariasi", "Pengawasan ketat", "Shower & ruang ganti"] },
  { icon: Camera, title: "CCTV 24 Jam", desc: "Sistem keamanan CCTV yang dapat dipantau orang tua real-time melalui aplikasi smartphone", color: "red", features: ["Pantau via app mobile", "Recording 24 jam", "Setiap ruangan terpantau", "Cloud backup"] },
  { icon: Utensils, title: "Dapur Higienis", desc: "Dapur bersih bersertifikat dengan menu halal dan bergizi yang diawasi ahli gizi anak", color: "orange", features: ["Menu bergizi seimbang", "Dapur bersertifikat BPOM", "100% menu halal", "Alergi-friendly options"] },
];

const safetyFeatures = [
  { icon: ShieldCheck, title: "Satpam 24 Jam", desc: "Keamanan sepanjang hari dengan petugas terlatih yang ramah anak" },
  { icon: Camera, title: "CCTV Online", desc: "Pantau aktivitas anak dari mana saja melalui smartphone" },
  { icon: Car, title: "Drop Zone Aman", desc: "Area antar-jemput terpisah dengan pengawasan ketat" },
  { icon: Heart, title: "P3K & UKS", desc: "Pertolongan pertama siap dengan perawat terlatih" },
];

const stats = [
  { value: "2.000", label: "m² Luas Area", icon: Trees },
  { value: "12", label: "Ruang Kelas", icon: Tv },
  { value: "8", label: "Area Bermain", icon: Blocks },
  { value: "24/7", label: "Pengawasan CCTV", icon: Camera },
];

const classroomFeatures = [
  { icon: Wind, title: "AC & Ventilasi", desc: "Suhu ruangan selalu nyaman" },
  { icon: Sun, title: "Pencahayaan Optimal", desc: "Lampu LED hemat energi" },
  { icon: Wifi, title: "Smart Classroom", desc: "Proyektor & sound system" },
  { icon: ThermometerSun, title: "Suhu Terjaga", desc: "22-24°C sepanjang hari" },
];

const outdoorAreas = [
  { title: "Playground Utama", desc: "Area bermain dengan perosotan, ayunan, dan jungkat-jungkit yang aman untuk semua usia", size: "500 m²", color: "green" },
  { title: "Taman Bermain Pasir", desc: "Area pasir bersih yang disterlisasi rutin untuk bermain sensori dan kreativitas", size: "100 m²", color: "amber" },
  { title: "Lapangan Mini", desc: "Lapangan rumput sintetis untuk aktivitas fisik, senam, dan olahraga ringan", size: "300 m²", color: "blue" },
  { title: "Kebun Edukasi", desc: "Area berkebun untuk mengajarkan anak tentang tanaman dan alam sekitar", size: "150 m²", color: "pink" },
];

const hygieneProtocols = [
  { icon: Sparkles, title: "Sanitasi Rutin", desc: "Pembersihan dan desinfeksi ruangan 3x sehari" },
  { icon: Droplets, title: "Hand Sanitizer", desc: "Tersedia di setiap sudut sekolah" },
  { icon: ThermometerSun, title: "Cek Suhu Harian", desc: "Pemeriksaan suhu tubuh saat masuk" },
  { icon: Wind, title: "Ventilasi Baik", desc: "Sirkulasi udara optimal di setiap ruangan" },
];

const testimonials = [
  { name: "Ibu Maya", child: "Kenzo - TK A", quote: "Fasilitasnya sangat lengkap dan bersih. Saya bisa memantau anak lewat CCTV kapan saja, jadi lebih tenang bekerja.", rating: 5 },
  { name: "Bapak Andi", child: "Alya - TK B", quote: "Playground-nya luar biasa! Anak saya selalu excited untuk bermain. Pengawasannya juga sangat ketat.", rating: 5 },
  { name: "Ibu Sinta", child: "Raka - Playgroup", quote: "Ruang kelasnya nyaman, ber-AC, dan penuh dengan mainan edukatif. Anak saya betah belajar di sini.", rating: 5 },
];

const virtualTourPoints = [
  { title: "Lobby & Resepsionis", desc: "Ruang tunggu nyaman dengan area bermain mini" },
  { title: "Ruang Kelas", desc: "12 kelas dengan kapasitas 15-20 anak per kelas" },
  { title: "Playground Indoor", desc: "Area bermain dalam ruangan yang aman" },
  { title: "Playground Outdoor", desc: "Taman bermain luas dengan berbagai permainan" },
  { title: "Perpustakaan", desc: "Koleksi 500+ buku cerita bergambar" },
  { title: "Ruang Musik", desc: "Studio mini dengan alat musik lengkap" },
  { title: "Dapur & Cafetaria", desc: "Area makan bersih dan higienis" },
  { title: "UKS", desc: "Ruang kesehatan dengan perawat standby" },
];

export default function FasilitasPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-white text-green-500 rounded-full text-sm font-semibold mb-4">Fasilitas Kami</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Fasilitas <span className="text-green-500">Lengkap & Modern</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">Fasilitas terbaik untuk mendukung proses belajar dan bermain anak-anak dalam lingkungan yang aman, nyaman, dan menstimulasi.</p>
            <Link href="/kontak" className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-colors">
              Jadwalkan Kunjungan <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl">
                <stat.icon className="w-10 h-10 text-green-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Facilities Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-white text-amber-500 rounded-full text-sm font-semibold mb-4">Fasilitas Utama</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Fasilitas <span className="text-amber-500">Lengkap</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Semua fasilitas dirancang khusus untuk keamanan dan kenyamanan anak-anak.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <motion.div key={facility.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${
                  facility.color === "amber" ? "bg-amber-100" :
                  facility.color === "pink" ? "bg-pink-100" :
                  facility.color === "green" ? "bg-green-100" :
                  facility.color === "blue" ? "bg-blue-100" :
                  facility.color === "purple" ? "bg-purple-100" :
                  facility.color === "cyan" ? "bg-cyan-100" :
                  facility.color === "red" ? "bg-red-100" : "bg-orange-100"
                }`}>
                  <facility.icon className={`w-8 h-8 ${
                    facility.color === "amber" ? "text-amber-500" :
                    facility.color === "pink" ? "text-pink-500" :
                    facility.color === "green" ? "text-green-500" :
                    facility.color === "blue" ? "text-blue-500" :
                    facility.color === "purple" ? "text-purple-500" :
                    facility.color === "cyan" ? "text-cyan-500" :
                    facility.color === "red" ? "text-red-500" : "text-orange-500"
                  }`} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{facility.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{facility.desc}</p>
                <div className="space-y-2">
                  {facility.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                      <CheckCircle2 className={`w-4 h-4 ${
                        facility.color === "amber" ? "text-amber-500" :
                        facility.color === "pink" ? "text-pink-500" :
                        facility.color === "green" ? "text-green-500" :
                        facility.color === "blue" ? "text-blue-500" :
                        facility.color === "purple" ? "text-purple-500" :
                        facility.color === "cyan" ? "text-cyan-500" :
                        facility.color === "red" ? "text-red-500" : "text-orange-500"
                      }`} />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Classroom Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-500 rounded-full text-sm font-semibold mb-4">Ruang Kelas</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Kelas <span className="text-blue-500">Modern & Nyaman</span></h2>
              <p className="text-gray-600 mb-8">Setiap ruang kelas kami dirancang dengan standar terbaik untuk menciptakan lingkungan belajar yang optimal bagi anak-anak.</p>
              <div className="grid grid-cols-2 gap-4">
                {classroomFeatures.map((feature, index) => (
                  <motion.div key={feature.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                    <feature.icon className="w-6 h-6 text-blue-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl p-8 shadow-xl">
              <div className="text-center mb-6">
                <Tv className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Smart Classroom</h3>
                <p className="text-gray-600">Dilengkapi teknologi modern untuk pembelajaran interaktif</p>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📺</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Proyektor Interaktif</h4>
                    <p className="text-sm text-gray-600">Untuk pembelajaran visual yang menarik</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🔊</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Sound System</h4>
                    <p className="text-sm text-gray-600">Audio jernih untuk bernyanyi dan storytelling</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🪑</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Furniture Ergonomis</h4>
                    <p className="text-sm text-gray-600">Meja kursi sesuai postur anak</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outdoor Areas Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-white text-green-500 rounded-full text-sm font-semibold mb-4">Area Outdoor</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Ruang <span className="text-green-500">Bermain Terbuka</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Area outdoor yang luas untuk aktivitas fisik dan eksplorasi alam.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {outdoorAreas.map((area, index) => (
              <motion.div key={area.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className={`rounded-2xl p-6 ${
                area.color === "green" ? "bg-green-100" :
                area.color === "amber" ? "bg-amber-100" :
                area.color === "blue" ? "bg-blue-100" : "bg-pink-100"
              }`}>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                  area.color === "green" ? "bg-green-500 text-white" :
                  area.color === "amber" ? "bg-amber-500 text-white" :
                  area.color === "blue" ? "bg-blue-500 text-white" : "bg-pink-500 text-white"
                }`}>
                  {area.size}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{area.title}</h3>
                <p className="text-gray-600 text-sm">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-500 rounded-full text-sm font-semibold mb-4">Keamanan</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Keamanan <span className="text-red-500">Nomor Satu</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Sistem keamanan berlapis untuk menjamin keselamatan anak-anak selama di sekolah.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {safetyFeatures.map((feature, index) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CCTV Feature Highlight */}
          <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">CCTV Monitoring Real-Time</h3>
                <p className="text-white/90 mb-6">Pantau aktivitas anak Anda kapan saja dan di mana saja melalui aplikasi smartphone. Tersedia akses 24 jam untuk orang tua.</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Live streaming setiap ruangan</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Rekaman tersimpan 30 hari</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Notifikasi aktivitas penting</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Akses via iOS & Android</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-2xl p-8 inline-block">
                  <Phone className="w-24 h-24 mx-auto mb-4" />
                  <p className="font-semibold">Download App Parent Portal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hygiene Protocols Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-white text-cyan-500 rounded-full text-sm font-semibold mb-4">Kebersihan</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Protokol <span className="text-cyan-500">Kebersihan</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Standar kebersihan tinggi untuk menjaga kesehatan anak-anak.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hygieneProtocols.map((protocol, index) => (
              <motion.div key={protocol.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-14 h-14 rounded-xl bg-cyan-100 flex items-center justify-center mx-auto mb-4">
                  <protocol.icon className="w-7 h-7 text-cyan-500" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{protocol.title}</h3>
                <p className="text-gray-600 text-sm">{protocol.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour Points Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-500 rounded-full text-sm font-semibold mb-4">Virtual Tour</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Jelajahi <span className="text-purple-500">Sekolah Kami</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Lihat berbagai area di Ceria Pintar School.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {virtualTourPoints.map((point, index) => (
              <motion.div key={point.title} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mb-3">
                  <span className="text-purple-500 font-bold">{index + 1}</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-1">{point.title}</h3>
                <p className="text-gray-600 text-sm">{point.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/galeri" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 text-white font-semibold rounded-full hover:bg-purple-600 transition-colors">
              Lihat Galeri Foto <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-white text-amber-500 rounded-full text-sm font-semibold mb-4">Testimoni</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Kata Orang Tua tentang <span className="text-amber-500">Fasilitas</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div key={testimonial.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold">
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
      <section className="py-20 bg-gradient-to-r from-green-500 to-blue-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ingin Melihat Langsung?</h2>
          <p className="text-white/90 text-lg mb-8">Jadwalkan kunjungan ke sekolah kami dan lihat sendiri fasilitas lengkap yang kami sediakan.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontak" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-500 font-bold rounded-full hover:shadow-xl transition-shadow">
              Jadwalkan Kunjungan <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/pendaftaran" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white/10 transition-colors">
              Daftar Sekarang
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
