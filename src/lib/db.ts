// Get the client
import mysql from 'mysql2/promise';

// Create the connection to database
export const db = await mysql.createPool({
  host: 'yayasanindonesiaemas.com',
  port: 3306,
  user: 'yayasa84_yiem',
  password: 'yiemdb2024',
  database: 'yayasa84_yiem',
});
