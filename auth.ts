import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { User } from "@/types/User";
import { z, string } from "zod";
import { getUserFromDb } from "@/lib/data/getUserFromDb";
const bcrypt = require("bcrypt");

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            username: string({
              required_error: "Username tidak boleh kosong",
            }).min(1, "Username tidak boleh kosong"),
            password: string({ required_error: "Password tidak boleh kosong" })
              .min(1, "Password harus diisi")
              .min(8, "Password minimal 8 karakter")
              .max(32, "Password maksimal 32 karakter"),
          })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { username, password } = parsedCredentials.data;
          const user = await getUserFromDb(username);
          if (!user) return null;
          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) return user;
        }

        console.log("Invalid credentials");
        return null;
      },
    }),
  ],
});
