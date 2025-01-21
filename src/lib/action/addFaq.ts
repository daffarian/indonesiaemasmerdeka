"use server";
import { db } from "../db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function addFaq(formData: FormData, answer?: string) {
  const question = formData.get("question");

  const rawFormData = {
    question: question,
    answer: answer,
  };

  try {
    await db.query(
      `INSERT INTO faq (question, answer) VALUES (?, ?)`,
      [rawFormData.question, rawFormData.answer]
    );
  } catch (err) {
    console.error("Error add faq:", err);
  }

  revalidatePath("/dashboard/faq");
  redirect("/dashboard/faq");
}
