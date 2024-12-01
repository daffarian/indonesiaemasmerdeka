"use server";
import { revalidatePath } from "next/cache";
import { db } from "../db";
import { redirect } from "next/navigation";

export async function deleteUserTerms(id:number) {
  try {
    await db.query(`DELETE FROM user_terms WHERE id = ?`, [id]);

  } catch (err) {
    console.error("Error deleting user terms:", err);
  }
  revalidatePath("/dashboard/syarat-pengguna");
  redirect("/dashboard/syarat-pengguna");
}
