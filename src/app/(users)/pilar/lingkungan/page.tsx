import HeroSection from "@/components/user/pilar/lingkungan/HeroSection";
import SdgsSection from "@/components/user/pilar/lingkungan/SdgsSection";
import ArticleSection from "@/components/user/pilar/lingkungan/ArticleSection";
import DonationCTA from "@/components/common/DonationCTA";

export default function Page() {
  return (
    <>
      <HeroSection />
      <SdgsSection />
      <ArticleSection/>
      <DonationCTA/>
    </>
  );
}
