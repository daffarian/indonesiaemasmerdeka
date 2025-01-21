"use server";
import { db } from "../db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function addPrivacyPolicy(formData: FormData, content?: string) {
  const title = formData.get("title");

  const rawFormData = {
    title: title,
    content: content,
  };

  try {
    await db.query(
      `INSERT INTO privacy_policy (title, content) VALUES (?, ?)`,
      [rawFormData.title, rawFormData.content]
    );
  } catch (err) {
    console.error("Error add privacy policy:", err);
  }

  revalidatePath("/dashboard/kebijakan-privasi");
  redirect("/dashboard/kebijakan-privasi");
}
