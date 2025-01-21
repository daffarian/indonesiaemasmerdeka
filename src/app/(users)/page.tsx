import HeroSection from "@/components/user/home/HeroSection";
import AboutSection from "@/components/user/home/AboutSection";
import FeaturedSection from "@/components/user/home/FeaturedSection";
import ServicesSection from "@/components/user/home/ServicesSection";
import Csr from "@/components/common/Csr";
import ArticleSection from "@/components/user/home/ArticleSection";

import { fetchArticleVisible } from "@/lib/data/fetchVisible";

export default async function Home() {
  const [isArticleVisible] = await fetchArticleVisible();
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedSection />
      <ServicesSection />
      {isArticleVisible.value === 1 && <ArticleSection />}
      <Csr />
    </>
  );
}
