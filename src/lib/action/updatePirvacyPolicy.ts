"use server";
import { db } from "../db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function updatePrivacyPolicy(
  formData: FormData,
  id: number,
  content?: string
) {
  const title = formData.get("title");

  const rawFormData = {
    title: title,
    content: content,
  };

  try {
    await db.query(`UPDATE privacy_policy SET title = ?, content = ? WHERE id = ?`, [
      rawFormData.title,
      rawFormData.content,
      id,
    ]);
  } catch (err) {
    console.error("Error updating privacy policy:", err);
  }

  revalidatePath("/dashboard/kebijakan-privasi");
  redirect("/dashboard/kebijakan-privasi");
}
