"use server";
import { redirect } from "next/navigation";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";
import { isRedirectError } from "next/dist/client/components/redirect";

export async function login(prevState: string | undefined, formData: FormData) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Username atau password salah.";
        default:
          return "Something went wrong.";
      }
    }
    if (isRedirectError(error)) {
      revalidatePath("/dashboard");
      redirect("/dashboard");
      throw error;
    }
  }
}
