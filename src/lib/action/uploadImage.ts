"use server";
import fs from "node:fs/promises";
import path from "node:path";

export async function uploadImage(formData: FormData, fileName: string) {
  const file = formData.get("image") as File;
  const buffer = Buffer.from(await file.arrayBuffer());
  const fileExtention = path.extname(file.name);

  await fs.writeFile(
    `./public/images/article/yayasanindonesiaemas_${fileName}${fileExtention}`,
    buffer
  );
}
