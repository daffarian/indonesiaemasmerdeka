"use server";
import { createSlug } from "../utils";
import fs from "node:fs/promises";
import path from "node:path";
import { db } from "../db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function addArticle(formData: FormData, content?: string) {
  const date = new Date();
  const title = formData.get("title");
  const imageName = date.getTime().toString();
  const file = formData.get("image") as File;
  const buffer = Buffer.from(await file.arrayBuffer());
  const fileExtention = path.extname(file.name);

  const rawFormData = {
    title: title,
    slug: createSlug(title),
    category: formData.get("category"),
    description: formData.get("description"),
    content: content,
    image_url: `/images/article/yayasanindonesiaemas_${imageName}${fileExtention}`,
    status: "published",
  };

  // upload image
  await fs.writeFile(
    `./public/images/article/yayasanindonesiaemas_${imageName}${fileExtention}`,
    buffer
  );
  console.log(rawFormData);

  try {
    await db.query(
      `INSERT INTO article (title, slug, description, content, image_url, category, status) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        rawFormData.title,
        rawFormData.slug,
        rawFormData.description,
        rawFormData.content,
        rawFormData.image_url,
        rawFormData.category,
        rawFormData.status,
      ]
    );
  } catch (err) {
    console.error("Error updating article visibility:", err);
  }

  revalidatePath("/dashboard/cerita-berbagi");
  redirect("/dashboard/cerita-berbagi");
}
