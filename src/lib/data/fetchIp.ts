"use server";
import { db } from "../db";

export async function fetchIp() {
  try {
    const data = await db.query(`SELECT * FROM ip`);
    return data[0] as any;
  } catch (err) {
    console.error("Error get ip:", err);
  }
}

export async function fetchIpToDay() {
  try {
    const data = await db.query(`SELECT COUNT(*) AS count
    FROM ip
    WHERE DATE(created_at) = CURDATE();`);
    return data[0] as any;
  } catch (err) {
    console.error("Error get ip today :", err);
  }
}

export async function fetchAllIp() {
  try {
    const data = await db.query(`SELECT COUNT(*) AS count
    FROM ip
    WHERE YEARWEEK(created_at, 1) = YEARWEEK(CURDATE(), 1);`);
    return data[0] as any;
  } catch (err) {
    console.error("Error get ip today :", err);
  }
}

export async function fetchIpByYear() {
  try {
    const data = await db.query(`
    SELECT 
    DATE_FORMAT(created_at, '%m') AS month,
    COUNT(*) AS count
    FROM ip
    WHERE YEAR(created_at) = YEAR(CURDATE())
    GROUP BY month
    ORDER BY month;`);
    return data[0] as any;
  } catch (err) {
    console.error("Error get by year :", err);
  }
}