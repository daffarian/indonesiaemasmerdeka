"use server";
import { revalidatePath } from "next/cache";
import { db } from "../db";
import { redirect } from "next/navigation";

export async function deletePrivacyPolicy(id:number) {
  try {
    await db.query(`DELETE FROM privacy_policy WHERE id = ?`, [id]);

  } catch (err) {
    console.error("Error deleting privacy policy:", err);
  }
  revalidatePath("/dashboard/kebijakan-privacy");
  redirect("/dashboard/kebijakan-privasi");
}
