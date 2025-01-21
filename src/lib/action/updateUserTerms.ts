"use server";
import { db } from "../db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function updateUserTerms(
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
    await db.query(`UPDATE user_terms SET title = ?, content = ? WHERE id = ?`, [
      rawFormData.title,
      rawFormData.content,
      id,
    ]);
  } catch (err) {
    console.error("Error updating user terms:", err);
  }

  revalidatePath("/dashboard/syarat-pengguna");
  redirect("/dashboard/syarat-pengguna");
}
