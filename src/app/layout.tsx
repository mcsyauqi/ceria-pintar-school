import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ceria Pintar | TK & PAUD Terbaik Jakarta",
  description: "PAUD & TK dengan kurikulum bermain berbasis karakter. Lingkungan aman, guru penuh kasih, fasilitas lengkap. Belajar Sambil Bermain, Tumbuh dengan Cinta.",
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
