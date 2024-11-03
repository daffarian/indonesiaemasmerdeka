"use server";
import { unstable_noStore as noStore } from "next/cache";
import { db } from "../db";

// Fetch articles
export async function fetchArticle() {
  noStore();
  try {
    const data = await db.query(
      `SELECT * FROM article WHERE status = 'published'`
    );
    return data[0] as any;
  } catch (err) {
    console.log(err);
  }
}

// Article by slug
export async function fetchArticleBySlug(slug: string) {
  noStore();
  try {
    const data = await db.query(
      "SELECT id, title, slug, description, content, created_at, image_url, category FROM article WHERE status = ? AND slug = ?",
      ["published", slug]
    );
    return data[0] as any;
  } catch (err) {
    console.log(err);
  }
}

// Filtered Articles
export async function fetchFilteredArticles(query: string, page: number) {
  noStore();
  try {
    const data = await db.query(
      `
		SELECT
        *
      FROM article
      WHERE
        title LIKE ? OR
        CAST(created_at AS CHAR) LIKE ?
      ORDER BY created_at ASC
    `,
      [`%${query}%`, `%${query}%`]
    );

    return data[0] as any;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch article table.");
  }
}
