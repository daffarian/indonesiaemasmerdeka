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

// split sentence
export function setMaxWords(sentence: string, maxWords: number) {
  const words = sentence.split(" "); // Memisahkan kata
  return words.length > maxWords
    ? words.slice(0, maxWords).join(" ") + "..." // Menggabungkan kembali kata dan menambahkan '...'
    : sentence; // Mengembalikan teks asli jika kurang dari 100 kata
}
