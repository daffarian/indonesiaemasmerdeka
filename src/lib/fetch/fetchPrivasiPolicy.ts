import { unstable_noStore as noStore } from "next/cache";
import { db } from "../db";

// fetch PrivacyPolicy
export async function fetchPrivacyPolicy() {
  noStore();
  try {
    const data = await db.query(
      `
		SELECT
        *
      FROM privacy_policy
      ORDER BY created_at ASC
    `
    );

    return data[0] as any;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch privacy policy.");
  }
}

// fetch PrivacyPolicy
export async function fetchPrivacyPolicyById(id: number) {
  noStore();
  try {
    const data = await db.query(
      `
		SELECT
        *
      FROM privacy_policy
      WHERE id = ?
      ORDER BY created_at ASC
    `,
      [id]
    );

    return data[0] as any;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch privacy policy.");
  }
}

// Filtered Privacy Policy
export async function fetchFilteredPrivacyPolicy(query: string, page: number) {
  noStore();
  try {
    const data = await db.query(
      `
		SELECT
        *
      FROM privacy_policy
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
    throw new Error("Failed to fetch filtered privacy policy.");
  }
}

// fetch faq count
export async function fetchPrivacyPolicyCount() {
  noStore();
  try {
    const data = await db.query(
    `SELECT
    COUNT(*)
    AS count
    FROM privaci_policy
    `
    );

    return data[0] as any;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch privacy policy count.");
  }
}
