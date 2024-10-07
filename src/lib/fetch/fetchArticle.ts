"use server";
import { unstable_noStore as noStore } from "next/cache";
import { db } from "../db";
// A simple SELECT query
export async function fetchArticle() {
  noStore();
  try {
    const data = await db.query(
      `SELECT id, title, slug, description, content, created_at, image_url, category FROM article WHERE status = 'published'`
    );
    return data[0] as any;
  } catch (err) {
    console.log(err);
  }
}

export async function fetchArticleBySlug(slug: string) {
  noStore();
  try {
    const data = await db.query(
      "SELECT id, title, content, created_at, image_url, category FROM article WHERE status = ? AND slug = ?",
      [
        "published",
        slug,
      ]
    );
    return data[0] as any;
  } catch (err) {
    console.log(err);
  }
}
