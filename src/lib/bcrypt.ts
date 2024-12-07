"use server";
const bcrypt = require("bcrypt");

export async function saltAndHashPassword(password: any) {
  return bcrypt.hash(password, 10);
}
