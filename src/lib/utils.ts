import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Slug
export function createSlug(text: any) {
  const slug = text
    .toLowerCase() // Ubah huruf menjadi kecil
    .trim() // Hapus spasi di awal dan akhir
    .replace(/[^a-z0-9\s-]/g, "") // Hapus karakter non-alfanumerik
    .replace(/\s+/g, "-") // Ganti spasi dengan tanda hubung
    .replace(/-+/g, "-");

  return slug;
}
