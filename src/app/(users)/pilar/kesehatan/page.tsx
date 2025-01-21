import ArticleSection from "@/components/user/pilar/kesehatan/ArticleSection";
import HeroSection from "@/components/user/pilar/kesehatan/HeroSection";
import SdgsSection from "@/components/user/pilar/kesehatan/SdgsSection";
import DonationCTA from "@/components/common/DonationCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://yayasanindonesiaemas.com"),
  title: "Kesehatan | Yayasan Indonesia Emas Merdeka",
  description:
    "Meningkatkan kualitas kesehatan masyarakat Indonesia melalui program-program inovatif di bidang pencegahan, pendidikan kesehatan, dan akses layanan medis.",
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
