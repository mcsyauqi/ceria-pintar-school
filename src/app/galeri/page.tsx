"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Camera, Play, X, ChevronLeft, ChevronRight, GraduationCap, Music, Palette, PartyPopper, BookOpen, TreePine, ArrowRight } from "lucide-react";

const categories = [
  { id: "all", label: "Semua", icon: Camera },
  { id: "kegiatan", label: "Kegiatan Belajar", icon: BookOpen },
  { id: "seni", label: "Seni & Kreativitas", icon: Palette },
  { id: "musik", label: "Musik & Tari", icon: Music },
  { id: "acara", label: "Acara Khusus", icon: PartyPopper },
  { id: "outdoor", label: "Outdoor Activity", icon: TreePine },
];

const galleryItems = [
  { id: 1, category: "kegiatan", title: "Belajar Membaca", desc: "Anak-anak TK B belajar membaca", color: "amber" },
  { id: 2, category: "seni", title: "Melukis Bersama", desc: "Aktivitas melukis kreatif", color: "pink" },
  { id: 3, category: "musik", title: "Latihan Menari", desc: "Penampilan tari tradisional", color: "green" },
  { id: 4, category: "acara", title: "Wisuda TK B", desc: "Momen kelulusan 2024", color: "blue" },
  { id: 5, category: "outdoor", title: "Field Trip", desc: "Kunjungan ke kebun buah", color: "purple" },
  { id: 6, category: "kegiatan", title: "Eksperimen Sains", desc: "Percobaan sains sederhana", color: "amber" },
  { id: 7, category: "acara", title: "Perayaan Kartini", desc: "Anak-anak berbaju adat", color: "pink" },
  { id: 8, category: "musik", title: "Pentas Seni", desc: "Penampilan akhir tahun", color: "green" },
  { id: 9, category: "seni", title: "Craft Day", desc: "Membuat kerajinan tangan", color: "blue" },
  { id: 10, category: "outdoor", title: "Bermain di Taman", desc: "Aktivitas outdoor", color: "purple" },
  { id: 11, category: "kegiatan", title: "Cooking Class", desc: "Belajar memasak sederhana", color: "amber" },
  { id: 12, category: "acara", title: "Hari Kemerdekaan", desc: "Peringatan 17 Agustus", color: "pink" },
];

const videos = [
  { id: 1, title: "Virtual Tour Sekolah", desc: "Lihat fasilitas lengkap", duration: "3:45" },
  { id: 2, title: "Kegiatan Sehari-hari", desc: "Aktivitas belajar dan bermain", duration: "5:20" },
  { id: 3, title: "Pentas Seni 2024", desc: "Highlight pentas seni", duration: "8:15" },
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
      <section className="bg-gradient-to-br from-blue-50 via-pink-50 to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-white text-blue-500 rounded-full text-sm font-semibold mb-4">Galeri</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Momen <span className="text-blue-500">Berharga</span>
            </h1>
            <p className="text-lg text-gray-600">Berbagai aktivitas seru dan momen indah anak-anak kami.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
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
                      <p className="text-sm text-white/80">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-white text-pink-500 rounded-full text-sm font-semibold mb-4">Video</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Video <span className="text-pink-500">Kegiatan</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <motion.div key={video.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group cursor-pointer">
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-pink-400 to-amber-400 relative overflow-hidden shadow-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-pink-500 ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 px-2 py-1 bg-black/50 rounded text-white text-sm">{video.duration}</div>
                </div>
                <div className="mt-4">
                  <h3 className="font-bold text-gray-800">{video.title}</h3>
                  <p className="text-gray-600 text-sm">{video.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
                  <p className="text-white/70">{item.desc}</p>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <GraduationCap className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ingin Si Kecil Menjadi Bagian dari Kami?</h2>
          <p className="text-white/90 text-lg mb-8">Daftarkan putra-putri Anda sekarang.</p>
          <Link href="/pendaftaran" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-500 font-bold rounded-full hover:shadow-xl transition-shadow">
            Daftar Sekarang <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
