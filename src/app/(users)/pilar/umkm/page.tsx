import HeroSection from "@/components/user/pilar/umkm/HeroSection";
import SdgsSection from "@/components/user/pilar/umkm/SdgsSection";
import ArticleSection from "@/components/user/pilar/umkm/ArticleSection";
import DonationCTA from "@/components/common/DonationCTA";
export default function Page() {
  return (
    <>
      <HeroSection />
      <SdgsSection/>
      <ArticleSection/>
      <DonationCTA/>
    </>
  );
}
