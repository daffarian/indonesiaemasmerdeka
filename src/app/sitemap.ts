import { Article } from "./../types/Article.d";
import type { MetadataRoute } from "next";
import { fetchArticle } from "@/lib/data/fetchArticle";

async function getArticleSiteMap() {
  const pages = await fetchArticle();
  return pages.map((page: Article) => ({
    url: `https://yayasanindonesiaemas.com/cerita-berbagi/${page.slug}`,
    lastModified: page.created_at,
    changeFrequency: "weekly",
    priority: 0.5,
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const dynamycArticlePages = await getArticleSiteMap();
  return [
    {
      url: "https://yayasanindonesiaemas.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://yayasanindonesiaemas.com/pilar/kesehatan",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://yayasanindonesiaemas.com/pilar/pendidikan",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://yayasanindonesiaemas.com/pilar/umkm",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://yayasanindonesiaemas.com/pilar/lingkungan",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://yayasanindonesiaemas.com/faq",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://yayasanindonesiaemas.com/kebijakan-privasi",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://yayasanindonesiaemas.com/syarat-pengguna",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://yayasanindonesiaemas.com/hubungi-kami",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://yayasanindonesiaemas.com/cerita-berbagi",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...dynamycArticlePages,
  ];
}
