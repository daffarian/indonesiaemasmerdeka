import { Article } from "./../types/Article.d";
import type { MetadataRoute } from "next";
import { fetchArticle } from "@/lib/data/fetchArticle";

async function getArticleSiteMap() {
  const pages = await fetchArticle();
  return pages.map((page: Article) => ({
    url: `https://yayasanindonesiaemas.com/impact-stories/${page.slug}`,
    lastModified: page.created_at,
    changeFrequency: "weekly",
    priority: 0.5,
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const article = await fetchArticle();
  const dynamicArticlePages = await getArticleSiteMap();
  return [
    {
      url: "https://yayasanindonesiaemas.com",
      lastModified: article.created_at,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://yayasanindonesiaemas.com/pilar/kesehatan",
      lastModified: article.created_at,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://yayasanindonesiaemas.com/pilar/pendidikan",
      lastModified: article.created_at,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://yayasanindonesiaemas.com/pilar/umkm",
      lastModified: article.created_at,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://yayasanindonesiaemas.com/pilar/lingkungan",
      lastModified: article.created_at,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://yayasanindonesiaemas.com/faq",
      lastModified: article.created_at,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://yayasanindonesiaemas.com/kebijakan-privasi",
      lastModified: article.created_at,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://yayasanindonesiaemas.com/syarat-pengguna",
      lastModified: article.created_at,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://yayasanindonesiaemas.com/hubungi-kami",
      lastModified: article.created_at,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://yayasanindonesiaemas.com/impact-stories",
      lastModified: article.created_at,
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...dynamicArticlePages,
  ];
}
