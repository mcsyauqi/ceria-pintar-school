"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Camera, Play, X, ChevronLeft, ChevronRight, GraduationCap, Music, Palette, PartyPopper, BookOpen, TreePine, ArrowRight, Calendar, Star, Heart, Users, Award, Sparkles } from "lucide-react";

const categories = [
  { id: "all", label: "Semua", icon: Camera },
  { id: "kegiatan", label: "Kegiatan Belajar", icon: BookOpen },
  { id: "seni", label: "Seni & Kreativitas", icon: Palette },
  { id: "musik", label: "Musik & Tari", icon: Music },
  { id: "acara", label: "Acara Khusus", icon: PartyPopper },
  { id: "outdoor", label: "Outdoor Activity", icon: TreePine },
];

const galleryItems = [
  { id: 1, category: "kegiatan", title: "Belajar Membaca", desc: "Anak-anak TK B belajar membaca dengan metode fonik yang menyenangkan", color: "amber", date: "November 2024" },
  { id: 2, category: "seni", title: "Melukis Bersama", desc: "Aktivitas melukis kreatif menggunakan cat air dan finger painting", color: "pink", date: "Oktober 2024" },
  { id: 3, category: "musik", title: "Latihan Menari", desc: "Persiapan penampilan tari tradisional untuk acara akhir tahun", color: "green", date: "November 2024" },
  { id: 4, category: "acara", title: "Wisuda TK B", desc: "Momen kelulusan siswa TK B angkatan 2024", color: "blue", date: "Juni 2024" },
  { id: 5, category: "outdoor", title: "Field Trip", desc: "Kunjungan ke kebun buah untuk belajar tentang alam", color: "purple", date: "September 2024" },
  { id: 6, category: "kegiatan", title: "Eksperimen Sains", desc: "Percobaan sains sederhana tentang gunung meletus", color: "amber", date: "Oktober 2024" },
  { id: 7, category: "acara", title: "Perayaan Kartini", desc: "Anak-anak berbaju adat merayakan Hari Kartini", color: "pink", date: "April 2024" },
  { id: 8, category: "musik", title: "Pentas Seni", desc: "Penampilan spektakuler di acara akhir tahun ajaran", color: "green", date: "Juni 2024" },
  { id: 9, category: "seni", title: "Craft Day", desc: "Membuat kerajinan tangan dari bahan daur ulang", color: "blue", date: "Agustus 2024" },
  { id: 10, category: "outdoor", title: "Bermain di Taman", desc: "Aktivitas outdoor dan permainan fisik di playground", color: "purple", date: "November 2024" },
  { id: 11, category: "kegiatan", title: "Cooking Class", desc: "Belajar memasak sederhana - membuat salad buah", color: "amber", date: "Oktober 2024" },
  { id: 12, category: "acara", title: "Hari Kemerdekaan", desc: "Peringatan 17 Agustus dengan berbagai lomba", color: "pink", date: "Agustus 2024" },
  { id: 13, category: "musik", title: "Drumband Cilik", desc: "Latihan drumband untuk parade hari kemerdekaan", color: "green", date: "Agustus 2024" },
  { id: 14, category: "seni", title: "Puppet Show", desc: "Pertunjukan wayang modern oleh siswa TK B", color: "blue", date: "September 2024" },
  { id: 15, category: "outdoor", title: "Outbound Day", desc: "Kegiatan outbound untuk membangun kerja sama tim", color: "purple", date: "Juli 2024" },
  { id: 16, category: "acara", title: "Hari Ibu", desc: "Perayaan Hari Ibu dengan penampilan spesial", color: "pink", date: "Desember 2024" },
];

const videos = [
  { id: 1, title: "Virtual Tour Sekolah", desc: "Lihat fasilitas lengkap Ceria Pintar School dari ruang kelas hingga playground", duration: "3:45", views: "2.5K" },
  { id: 2, title: "Kegiatan Sehari-hari", desc: "Aktivitas belajar dan bermain yang dilakukan anak-anak setiap hari", duration: "5:20", views: "1.8K" },
  { id: 3, title: "Pentas Seni 2024", desc: "Highlight penampilan spektakuler di pentas seni akhir tahun", duration: "8:15", views: "3.2K" },
  { id: 4, title: "Wisuda TK B 2024", desc: "Momen spesial kelulusan siswa TK B angkatan 2024", duration: "12:30", views: "4.1K" },
  { id: 5, title: "Dokumenter Sekolah", desc: "Perjalanan Ceria Pintar School dari awal hingga sekarang", duration: "15:00", views: "1.5K" },
  { id: 6, title: "Tips Parenting PAUD", desc: "Tips mendidik anak usia dini dari tim guru kami", duration: "10:45", views: "2.0K" },
];

const highlights = [
  { title: "Wisuda 2024", date: "Juni 2024", photos: 48, desc: "Kelulusan 32 siswa TK B" },
  { title: "Pentas Seni", date: "Juni 2024", photos: 65, desc: "Pertunjukan akhir tahun" },
  { title: "Hari Kemerdekaan", date: "Agustus 2024", photos: 52, desc: "Lomba 17-an meriah" },
  { title: "Field Trip", date: "September 2024", photos: 38, desc: "Kunjungan ke kebun buah" },
];

const monthlyActivities = [
  { month: "Desember", activities: ["Perayaan Natal", "Hari Ibu", "Liburan Semester"] },
  { month: "November", activities: ["Hari Pahlawan", "Parent Meeting", "Latihan Pentas"] },
  { month: "Oktober", activities: ["Sumpah Pemuda", "Cooking Class", "Eksperimen Sains"] },
  { month: "September", activities: ["Field Trip", "Puppet Show", "Olahraga Anak"] },
];

const stats = [
  { value: "500+", label: "Foto", icon: Camera },
  { value: "50+", label: "Video", icon: Play },
  { value: "24", label: "Event", icon: Calendar },
  { value: "100%", label: "Memories", icon: Heart },
];

export default function GaleriPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = activeCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory);

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage);
    if (direction === "prev") {
      const newIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
      setSelectedImage(filteredItems[newIndex].id);
    } else {
      const newIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1;
      setSelectedImage(filteredItems[newIndex].id);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-pink-50 to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-white text-blue-500 rounded-full text-sm font-semibold mb-4">Galeri</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Momen <span className="text-blue-500">Berharga</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">Berbagai aktivitas seru dan momen indah anak-anak kami yang terabadikan dalam foto dan video.</p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center p-6 bg-gradient-to-br from-blue-50 to-pink-50 rounded-2xl">
                <stat.icon className="w-10 h-10 text-blue-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-white text-amber-500 rounded-full text-sm font-semibold mb-4">Album Spesial</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Event <span className="text-amber-500">Highlights</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div key={highlight.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl overflow-hidden shadow-lg group cursor-pointer hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-amber-200 to-pink-200 flex items-center justify-center relative">
                  <Camera className="w-12 h-12 text-white/70" />
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/50 rounded text-white text-xs flex items-center gap-1">
                    <Camera className="w-3 h-3" /> {highlight.photos}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-1">{highlight.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{highlight.desc}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Calendar className="w-3 h-3" /> {highlight.date}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-500 rounded-full text-sm font-semibold mb-4">Foto</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Galeri <span className="text-blue-500">Foto</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Filter berdasarkan kategori untuk menemukan momen favorit Anda.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category.id ? "bg-blue-500 text-white shadow-lg" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(item.id)}
              >
                <div className={`aspect-square rounded-2xl overflow-hidden relative shadow-lg ${
                  item.color === "amber" ? "bg-amber-100" :
                  item.color === "pink" ? "bg-pink-100" :
                  item.color === "green" ? "bg-green-100" :
                  item.color === "blue" ? "bg-blue-100" : "bg-purple-100"
                }`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Camera className={`w-16 h-16 ${
                      item.color === "amber" ? "text-amber-400" :
                      item.color === "pink" ? "text-pink-400" :
                      item.color === "green" ? "text-green-400" :
                      item.color === "blue" ? "text-blue-400" : "text-purple-400"
                    }`} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-bold">{item.title}</h3>
                      <p className="text-sm text-white/80">{item.date}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-white text-pink-500 rounded-full text-sm font-semibold mb-4">Video</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Video <span className="text-pink-500">Kegiatan</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Tonton video dokumentasi kegiatan sekolah kami.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <motion.div key={video.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group cursor-pointer">
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-pink-400 to-purple-400 relative overflow-hidden shadow-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Play className="w-8 h-8 text-pink-500 ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <div className="px-2 py-1 bg-black/50 rounded text-white text-sm flex items-center gap-1">
                      <Users className="w-3 h-3" /> {video.views}
                    </div>
                    <div className="px-2 py-1 bg-black/50 rounded text-white text-sm">{video.duration}</div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-bold text-gray-800 mb-1">{video.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{video.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Activities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-500 rounded-full text-sm font-semibold mb-4">Kalender</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Aktivitas <span className="text-green-500">Bulanan</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {monthlyActivities.map((month, index) => (
              <motion.div key={month.month} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500 text-white flex items-center justify-center font-bold">
                    {month.month.charAt(0)}
                  </div>
                  <h3 className="font-bold text-gray-800">{month.month}</h3>
                </div>
                <div className="space-y-2">
                  {month.activities.map((activity, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <Sparkles className="w-4 h-4 text-green-500" />
                      {activity}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-full">
            <X className="w-8 h-8" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); navigateImage("prev"); }} className="absolute left-4 p-2 text-white hover:bg-white/10 rounded-full">
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); navigateImage("next"); }} className="absolute right-4 p-2 text-white hover:bg-white/10 rounded-full">
            <ChevronRight className="w-8 h-8" />
          </button>

          {(() => {
            const item = galleryItems.find((i) => i.id === selectedImage);
            if (!item) return null;
            return (
              <div onClick={(e) => e.stopPropagation()} className="max-w-4xl w-full">
                <div className={`aspect-video rounded-2xl flex items-center justify-center ${
                  item.color === "amber" ? "bg-amber-200" :
                  item.color === "pink" ? "bg-pink-200" :
                  item.color === "green" ? "bg-green-200" :
                  item.color === "blue" ? "bg-blue-200" : "bg-purple-200"
                }`}>
                  <Camera className={`w-32 h-32 ${
                    item.color === "amber" ? "text-amber-500" :
                    item.color === "pink" ? "text-pink-500" :
                    item.color === "green" ? "text-green-500" :
                    item.color === "blue" ? "text-blue-500" : "text-purple-500"
                  }`} />
                </div>
                <div className="mt-4 text-center text-white">
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-white/70 mb-2">{item.desc}</p>
                  <p className="text-white/50 text-sm">{item.date}</p>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <GraduationCap className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ingin Si Kecil Menjadi Bagian dari Kami?</h2>
          <p className="text-white/90 text-lg mb-8">Daftarkan putra-putri Anda sekarang dan ciptakan momen indah bersama kami.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pendaftaran" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-500 font-bold rounded-full hover:shadow-xl transition-shadow">
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
