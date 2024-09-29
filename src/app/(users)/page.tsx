import HomeSection from "@/components/home/HomeSection";
import AboutSection from "@/components/home/AboutSection";
import FeaturedSection from "@/components/home/FeaturedSection";
import ServicesSection from "@/components/home/ServicesSection";
import Csr from "@/components/common/Csr";
export default function Home() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <FeaturedSection />
      {/* <ServicesSection /> */}
      <Csr />
    </>
  );
}
