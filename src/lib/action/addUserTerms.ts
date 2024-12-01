"use server";
import { db } from "../db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function addUserTerms(formData: FormData, content?: string) {
  const title = formData.get("title");

  const rawFormData = {
    title: title,
    content: content,
  };

  try {
    await db.query(
      `INSERT INTO user_terms (title, content) VALUES (?, ?)`,
      [rawFormData.title, rawFormData.content]
    );
  } catch (err) {
    console.error("Error add user terms:", err);
  }

  revalidatePath("/dashboard/syarat-pengguna");
  redirect("/dashboard/syarat-pengguna");
}
