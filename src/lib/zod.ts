import { object, string } from "zod";

export const signInSchema = object({
  username: string({ required_error: "Username tidak boleh kosong" }).min(
    1,
    "Username tidak boleh kosong"
  ),
  password: string({ required_error: "Password tidak boleh kosong" })
    .min(1, "Password harus diisi")
    .min(8, "Password minimal 8 karakter")
    .max(32, "Password maksimal 32 karakter"),
}).safeParse;
