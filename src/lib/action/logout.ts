"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { signOut } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect";

export async function logout() {
  try {
    await signOut();
  } catch (error) {
    if (isRedirectError(error)) {
      revalidatePath('login')
      redirect('/login')
      throw error;
    }
  }
}
