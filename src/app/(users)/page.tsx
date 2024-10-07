import HomeSection from "@/components/home/HomeSection";
import AboutSection from "@/components/home/AboutSection";
import FeaturedSection from "@/components/home/FeaturedSection";
import ServicesSection from "@/components/home/ServicesSection";
import Csr from "@/components/common/Csr";
import ArticleSection from "@/components/home/ArticleSection";

import { fetchArticleVisible } from "@/lib/fetch/fetchVisible";

export default async function Home() {
  const [isArticleVisible] = await fetchArticleVisible();
  return (
    <>
      <HomeSection />
      <AboutSection />
      <FeaturedSection />
      <ServicesSection />
      {isArticleVisible.value === 1 && <ArticleSection />}
      <Csr />
    </>
  );
}
