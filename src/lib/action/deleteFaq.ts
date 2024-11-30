"use server";
import { revalidatePath } from "next/cache";
import { db } from "../db";
import { redirect } from "next/navigation";

export async function deleteFaq(id:number) {
  try {
    await db.query(`DELETE FROM article WHERE id = ?`, [id]);

  } catch (err) {
    console.error("Error deleting faq:", err);
  }
  revalidatePath("/dashboard/faq");
  redirect("/dashboard/faq");
}
