"use server";
import { db } from "../db";

export default async function addIp(ip:string) {

  try {
    await db.query(
      `INSERT INTO ip (ip) VALUES (?)`,[ip]
    );
  } catch (err) {
    console.error("Error add ip:", err);
  }

}
