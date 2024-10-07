"use server";
import { db } from "../db";
import { unstable_noStore as noStore } from "next/cache";
export async function setArticleVisible(params:number) {
  noStore(); // Pastikan ini relevan untuk konteks Anda
  try {
    await db.query(
      `UPDATE visible_settings SET value = ? WHERE key_name = ?`,
      [params, 'article_visible'] // Menggunakan 1 untuk true dan 0 untuk false
    );
  } catch (err) {
    console.error("Error updating article visibility:", err);
  }
}
