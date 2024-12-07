'use client'
import { signIn } from "../../../../auth";
import Author from "@/components/common/Author";
import { login } from "@/lib/login";
import { useActionState } from "react";

export default async function Page() {
  // const [errorMessage, formAction, isPending] = useActionState(
  //   login,
  //   undefined,
  // );
  return (
    <section className="bg-amber-50">
      <div className="container h-svh flex items-center justify-center">
        <form
          action={''}
          className="flex flex-col items-center justify-center gap-5 border bg-white p-10 rounded-xl shadow-lg"
        >
          <div className="flex flex-col gap-2 justify-center items-center mb-10">
            <Author className="w-40" />
            <p>Yayasan Indonesia Emas Merdeka</p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="username" className="text-sm text-zinc-500">
              Username
            </label>
            <input
              name="username"
              type="text"
              className="border rounded-xl pl-3 py-3 text-zinc-600"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm text-zinc-500">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="border rounded-xl pl-3 py-3 text-zinc-600"
            />
          </div>
          <button className="bg-primary hover:bg-amber-600 mt-5 text-white font-semibold rounded-xl inline-block w-full py-3">
            Login
          </button>
        </form>
      </div>
    </section>
  );
}
