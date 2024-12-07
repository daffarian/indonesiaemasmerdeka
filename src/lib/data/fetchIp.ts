"use server";
import { db } from "../db";

export default async function fetchIp() {
  try {
    const data = await db.query(`SELECT * FROM ip`);
    return data[0] as any;
  } catch (err) {
    console.error("Error get ip:", err);
  }
}
