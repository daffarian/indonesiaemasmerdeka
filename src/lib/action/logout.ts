"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { signOut } from "@/auth";

export async function logout() {
  await signOut();
  revalidatePath("/dashboard/cerita-berbagi");
  redirect("/dashboard/cerita-berbagi");
}
