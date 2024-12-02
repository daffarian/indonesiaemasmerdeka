import { unstable_noStore as noStore } from "next/cache";
import { db } from "../db";

// fetch UserTerms
export async function fetchUserTerms() {
  noStore();
  try {
    const data = await db.query(
      `
		SELECT
        *
      FROM user_terms
      ORDER BY created_at ASC
    `
    );

    return data[0] as any;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch user terms.");
  }
}

// fetch User Terms
export async function fetchUserTermsById(id: number) {
  noStore();
  try {
    const data = await db.query(
      `
		SELECT
        *
      FROM user_terms
      WHERE id = ?
      ORDER BY created_at ASC
    `,[id]
    );

    return data[0] as any;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch user terms.");
  }
}

// Filtered Privacy Policy
export async function fetchFilteredUserTerms(query: string, page: number) {
  noStore();
  try {
    const data = await db.query(
      `
		SELECT
        *
      FROM user_terms
      WHERE
        title LIKE ? OR
        content LIKE ? OR
        CAST(created_at AS CHAR) LIKE ?
      ORDER BY created_at ASC
    `,
      [`%${query}%`, `%${query}%`, `%${query}%`]
    );

    return data[0] as any;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch filtered user terms.");
  }
}

// fetch user terms count
export async function fetchUserTermsCount() {
  noStore();
  try {
    const data = await db.query(
    `SELECT
    COUNT(*)
    AS count
    FROM user_terms;
      `
    );

    return data[0] as any;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch user terms count.");
  }
}