"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Camera,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Music,
  Palette,
  PartyPopper,
  BookOpen,
  TreePine,
  ArrowRight,
} from "lucide-react";

const categories = [
  { id: "all", label: "Semua", icon: Camera },
  { id: "kegiatan", label: "Kegiatan Belajar", icon: BookOpen },
  { id: "seni", label: "Seni & Kreativitas", icon: Palette },
  { id: "musik", label: "Musik & Tari", icon: Music },
  { id: "acara", label: "Acara Khusus", icon: PartyPopper },
  { id: "outdoor", label: "Outdoor Activity", icon: TreePine },
];

const galleryItems = [
  {
    id: 1,
    category: "kegiatan",
    title: "Belajar Membaca",
    desc: "Anak-anak TK B belajar membaca dengan metode fun learning",
    color: "#F59E0B",
  },
  {
    id: 2,
    category: "seni",
    title: "Melukis Bersama",
    desc: "Aktivitas melukis untuk mengembangkan kreativitas",
    color: "#EC4899",
  },
  {
    id: 3,
    category: "musik",
    title: "Latihan Menari",
    desc: "Penampilan tari tradisional untuk perayaan 17 Agustus",
    color: "#10B981",
  },
  {
    id: 4,
    category: "acara",
    title: "Wisuda TK B",
    desc: "Momen kelulusan siswa-siswi TK B 2024",
    color: "#3B82F6",
  },
  {
    id: 5,
    category: "outdoor",
    title: "Field Trip ke Kebun",
    desc: "Kunjungan edukatif ke kebun buah",
    color: "#8B5CF6",
  },
  {
    id: 6,
    category: "kegiatan",
    title: "Eksperimen Sains",
    desc: "Percobaan sains sederhana yang seru",
    color: "#F59E0B",
  },
  {
    id: 7,
    category: "acara",
    title: "Perayaan Kartini",
    desc: "Anak-anak mengenakan baju adat",
    color: "#EC4899",
  },
  {
    id: 8,
    category: "musik",
    title: "Pentas Seni",
    desc: "Penampilan musik dan tari di akhir tahun",
    color: "#10B981",
  },
  {
    id: 9,
    category: "seni",
    title: "Craft Day",
    desc: "Membuat kerajinan tangan dari bahan daur ulang",
    color: "#3B82F6",
  },
  {
    id: 10,
    category: "outdoor",
    title: "Bermain di Taman",
    desc: "Aktivitas outdoor di playground",
    color: "#8B5CF6",
  },
  {
    id: 11,
    category: "kegiatan",
    title: "Cooking Class",
    desc: "Belajar memasak menu sederhana",
    color: "#F59E0B",
  },
  {
    id: 12,
    category: "acara",
    title: "Peringatan Isra Miraj",
    desc: "Kegiatan keagamaan untuk siswa Muslim",
    color: "#EC4899",
  },
];

const videos = [
  {
    id: 1,
    title: "Virtual Tour Sekolah",
    desc: "Lihat fasilitas lengkap Ceria Pintar School",
    duration: "3:45",
  },
  {
    id: 2,
    title: "Kegiatan Sehari-hari",
    desc: "Aktivitas belajar dan bermain anak-anak",
    duration: "5:20",
  },
  {
    id: 3,
    title: "Pentas Seni 2024",
    desc: "Highlight pentas seni akhir tahun",
    duration: "8:15",
  },
];

export default function GaleriPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

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
      <section className="bg-gradient-to-br from-[#DBEAFE] via-[#FCE7F3] to-[#FEF3C7] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-white text-[#3B82F6] rounded-full text-sm font-semibold mb-4">
              Galeri
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Momen <span className="text-[#3B82F6]">Berharga</span> di Ceria Pintar
            </h1>
            <p className="text-lg text-gray-600">
              Lihat berbagai aktivitas seru dan momen indah anak-anak kami selama
              belajar dan bermain di sekolah.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-[#3B82F6] text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div layout className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(item.id)}
                >
                  <div
                    className="aspect-square rounded-2xl overflow-hidden relative shadow-lg group-hover:shadow-2xl transition-all"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Camera className="w-16 h-16" style={{ color: item.color }} />
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
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-20 bg-gradient-to-br from-[#FEF3C7] to-[#FCE7F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-white text-[#EC4899] rounded-full text-sm font-semibold mb-4">
              Video
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Video <span className="text-[#EC4899]">Kegiatan</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-[#EC4899] to-[#F59E0B] relative overflow-hidden shadow-lg group-hover:shadow-2xl transition-all">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-[#EC4899] ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 px-2 py-1 bg-black/50 rounded text-white text-sm">
                    {video.duration}
                  </div>
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

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("prev");
              }}
              className="absolute left-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("next");
              }}
              className="absolute right-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {(() => {
              const item = galleryItems.find((i) => i.id === selectedImage);
              if (!item) return null;
              return (
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  onClick={(e) => e.stopPropagation()}
                  className="max-w-4xl w-full"
                >
                  <div
                    className="aspect-video rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${item.color}30` }}
                  >
                    <Camera className="w-32 h-32" style={{ color: item.color }} />
                  </div>
                  <div className="mt-4 text-center text-white">
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className="text-white/70">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GraduationCap className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ingin Si Kecil Menjadi Bagian dari Kami?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Daftarkan putra-putri Anda sekarang dan biarkan mereka merasakan pengalaman belajar yang menyenangkan.
            </p>
            <Link
              href="/pendaftaran"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#3B82F6] font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all"
            >
              Daftar Sekarang
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
