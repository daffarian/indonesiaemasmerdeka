"use server";
import { unstable_noStore as noStore } from "next/cache";
import { db } from "../db";

export async function getUserFromDb(username: any) {
  noStore();
  try {
    const data = await db.query(
      `SELECT * FROM user WHERE username = ?`,
      [username]
    );
    return data[0] as any;
  } catch (err) {
    console.log(err);
  }
}
