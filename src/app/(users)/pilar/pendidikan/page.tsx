import HeroSection from "@/components/user/pilar/pendidikan/HeroSection";
import SdgsSection from "@/components/user/pilar/pendidikan/SdgsSection";
import ArticleSection from "@/components/user/pilar/pendidikan/ArticleSection";
import DonationCTA from "@/components/common/DonationCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://yayasanindonesiaemas.com"),
  title: "Pendidikan | Yayasan Indonesia Emas Merdeka",
  description:
    "Berkomitmen untuk meningkatkan kualitas pendidikan di Indonesia dengan menyediakan akses yang lebih luas dan kesempatan belajar yang setara. Melalui program-program edukasi yang inovatif, kami mendukung pengembangan potensi individu dan memperkuat fondasi pendidikan untuk generasi masa depan.",
  keywords: [
    "platform donasi",
    "galang dana",
    "bantuan kemanusiaan",
    "kesehatan",
    "yayasanindonesiaemas.com",
    "yayasanindonesiaemasmerdeka",
    "yayasanindonesiaemas",
    "yayasan indonesia emas",
    "lingkungan",
    "pendidikan",
    "umkm",
    "pemberdayaan masyarakat",
    "konservasi alam",
    "pemberdayaan perempuan",
    "bantuan sosial",
    "pengembangan UMKM",
    "akses pendidikan",
    "pelatihan UMKM",
    "donasi kesehatan",
    "gerakan peduli lingkungan",
    "kesadaran lingkungan",
    "pembangunan berkelanjutan",
    "program lingkungan hidup",
    "konservasi sumber daya alam",
    "program pendidikan Indonesia",
    "pelatihan kewirausahaan",
    "akses layanan kesehatan",
    "pengelolaan sampah",
    "green initiatives",
    "pembangunan ekonomi lokal",
    "program bantuan Indonesia",
    "pengurangan kemiskinan",
    "inisiatif kesehatan masyarakat",
    "donasi untuk pendidikan",
  ],
  openGraph: {
    images:
      "https://yayasanindonesiaemas.com/opengraph-image.png?552dec655558f188",
  },
};

export default function Page() {
  return (
    <>
      <HeroSection />
      <SdgsSection />
      <ArticleSection />
      <DonationCTA />
    </>
  );
}
