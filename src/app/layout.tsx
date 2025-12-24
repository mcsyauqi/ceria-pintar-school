import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ceria Pintar | TK & PAUD Terbaik Jakarta | Pendaftaran Siswa Baru",
  description: "PAUD & TK dengan kurikulum bermain berbasis karakter. Lingkungan aman, guru penuh kasih, fasilitas lengkap. Belajar Sambil Bermain, Tumbuh dengan Cinta.",
  keywords: "TK Jakarta, PAUD Jakarta, sekolah anak, pendidikan anak usia dini, playgroup, daycare",
  openGraph: {
    title: "Ceria Pintar School - TK & PAUD Terbaik",
    description: "Tempat terbaik untuk si kecil belajar dan bermain. Kurikulum berbasis karakter dengan guru penuh kasih.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
