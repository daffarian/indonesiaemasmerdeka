"use server";
import { getIpFromClient } from "../data/getIpFromClient";
import { db } from "../db";

export default async function countNewVisitor() {
  const clientIp = await getIpFromClient();

  try {
    await db.query(`
      INSERT INTO ip (ip)
      SELECT '${clientIp}'
      WHERE NOT EXISTS 
      (
      SELECT 1
      FROM ip
      WHERE ip = '${clientIp}'
      AND DATE(created_at) = CURDATE()
      );
      `);
  } catch (err) {
    console.error("Error count new visitor", err);
  }
}
