"use server";
import { unstable_noStore as noStore } from "next/cache";
import { db } from "../db";
// A simple SELECT query
export async function fetchArticleVisible() {
  noStore();
  try {
    const data = await db.query(
      `SELECT key_name, value FROM visible_settings where key_name = ?`, ['article_visible']
    );
    return data[0] as any;
  } catch (err) {
    console.log(err);
  }
}