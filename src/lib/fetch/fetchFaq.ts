import { unstable_noStore as noStore } from "next/cache";
import { db } from "../db";

// fetch Faq
export async function fetchFaq() {
  noStore();
  try {
    const data = await db.query(
      `
		SELECT
        *
      FROM faq
      ORDER BY created_at ASC
    `
    );

    return data[0] as any;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch faq.");
  }
}

// fetch Faq
export async function fetchFaqById(id: number) {
  noStore();
  try {
    const data = await db.query(
      `
		SELECT
        *
      FROM faq
      WHERE id = ?
      ORDER BY created_at ASC
    `,[id]
    );

    return data[0] as any;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch faq.");
  }
}

// Filtered Faq
export async function fetchFilteredFaq(query: string, page: number) {
  noStore();
  try {
    const data = await db.query(
      `
		SELECT
        *
      FROM faq
      WHERE
        question LIKE ? OR
        answer LIKE ? OR
        CAST(created_at AS CHAR) LIKE ?
      ORDER BY created_at ASC
    `,
      [`%${query}%`, `%${query}%`, `%${query}%`]
    );

    return data[0] as any;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch filtered faq.");
  }
}
