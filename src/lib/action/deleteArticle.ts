"use server";
import { revalidatePath } from "next/cache";
import { db } from "../db";
import fs from "node:fs/promises";
import { redirect } from "next/navigation";
export async function deleteArticle(slug: any, imageUrl: any) {
  try {
    await db.query(`DELETE FROM article WHERE slug = ?`, [slug]);

    await fs.unlink(`./public/${imageUrl}`);
  } catch (err) {
    console.error("Error deleting article:", err);
  }
  revalidatePath("/dashboard/cerita-berbagi");
  redirect("/dashboard/cerita-berbagi");
}
