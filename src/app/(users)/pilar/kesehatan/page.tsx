import ArticleSection from "@/components/user/pilar/kesehatan/ArticleSection";
import HeroSection from "@/components/user/pilar/kesehatan/HeroSection";
import SdgsSection from "@/components/user/pilar/kesehatan/SdgsSection";
import DonationCTA from "@/components/common/DonationCTA";
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
