"use server";
import { db } from "../db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function updateFaq(
  formData: FormData,
  id: number,
  answer?: string
) {
  const question = formData.get("question");

  const rawFormData = {
    question: question,
    answer: answer,
  };

  try {
    await db.query(`UPDATE faq SET question = ?, answer = ? WHERE id = ?`, [
      rawFormData.question,
      rawFormData.answer,
      id,
    ]);
  } catch (err) {
    console.error("Error updating faq:", err);
  }

  revalidatePath("/dashboard/faq");
  redirect("/dashboard/faq");
}
