import HeroSection from "@/components/user/pilar/umkm/HeroSection";
import SdgsSection from "@/components/user/pilar/umkm/SdgsSection";
import ArticleSection from "@/components/user/pilar/umkm/ArticleSection";
import DonationCTA from "@/components/common/DonationCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://yayasanindonesiaemas.com"),
  title: "UMKM | Yayasan Indonesia Emas Merdeka",
  description:
    "Mendukung pengembangan Usaha Mikro, Kecil, dan Menengah (UMKM) di Indonesia melalui program pemberdayaan, pelatihan, dan akses pasar. Kami bertujuan untuk meningkatkan daya saing UMKM, menciptakan peluang usaha yang berkelanjutan, serta mendorong pertumbuhan ekonomi lokal yang inklusif dan merata.",
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
