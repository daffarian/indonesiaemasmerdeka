"use client";
import { useState } from "react";

import { useFormStatus } from "react-dom";

// Quill
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css"; // Add css for snow theme

// submit article
import addArticle from "@/lib/action/addArticle";
import Link from "next/link";

export default function CreateArticleForm({ className }: { className?: string }) {
  // Quil
  const { quill, quillRef } = useQuill();

  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>(
    "/images/form/image-upload.jpg"
  );

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setImage(file);
      const fileReader = new FileReader();

      fileReader.onloadend = () => {
        setPreview(fileReader.result as string);
      };

      fileReader.readAsDataURL(file);
    }
  };

  const handelSubmit = (formData: FormData) => {
    addArticle(formData, quill?.getSemanticHTML());
  };

  const ButtonSubmit = () => {
    const status = useFormStatus();
    return (
      <button
        disabled={status.pending}
        type="submit"
        className="bg-green-500 w-28 h-10 flex items-center justify-center rounded-lg font-medium hover:bg-green-600 text-white"
      >
        {status.pending === true ? (
          <div
            className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        ) : (
          "Simpan"
        )}
      </button>
    );
  };

  return (
    <form action={handelSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full justify-center items-center">
        {/* Image Start */}
        <div className="">
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            id="file-input"
            className="file-input hidden cursor-pointer"
            required
          />
          <label htmlFor="file-input" className="upload-box">
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="preview-image cursor-pointer w-full"
              />
            ) : (
              <span className="upload-text">
                Drag & Drop your image here or click to upload
              </span>
            )}
          </label>
        </div>
        {/* Image Stoop */}
        <div className="flex flex-col gap-5 w-full">
          {/* Title Start */}
          <div className="flex flex-col">
            <label htmlFor="title">Judul</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Masukan judul"
              className="border p-3 rounded-lg text-zinc-600"
              required
            />
          </div>
          {/* Title Stop */}
          {/* Category Start */}
          <div className="flex flex-col">
            <label htmlFor="category" className="">
              Kategori
            </label>
            <select
              id="category"
              name="category"
              className="border border-gray-300 p-3 rounded-lg text-zinc-600 "
              defaultValue={0}
              required
            >
              <option value={0} disabled className="text-gray-400">
                Pilih Kategori
              </option>
              <option
                value={"Kesehatan"}
                className="rounded-lg hover:bg-primary"
              >
                Kesehatan
              </option>
              <option
                value={"Pendidikan"}
                className="rounded-lg hover:bg-primary"
              >
                Pendidikan
              </option>
              <option value={"UMKM"} className="rounded-lg hover:bg-primary">
                UMKM
              </option>
              <option
                value={"Lingkungan"}
                className="rounded-lg hover:bg-primary"
              >
                Lingkungan
              </option>
            </select>
          </div>

          {/* Category Stop */}
          {/* Description Start */}
          <div className="flex flex-col">
            <label htmlFor="description">Deskripsi</label>
            <input
              id="description"
              type="text"
              name="description"
              placeholder="Masukan deskripsi singkat"
              className="border p-3 rounded-lg text-zinc-600"
              required
            />
          </div>
          {/* Description Stop */}
        </div>
      </div>
      {/* Content Start */}

      <div>
        <label htmlFor="editor">Isi Artikel</label>
        <div
          className="w-full min-h-40 !text-base text-zinc-600"
          ref={quillRef}
        />
      </div>
      {/* Content Stop */}
      {/* Button Start */}
      <div className="flex flex-row gap-5 justify-end">
        <Link
          href={"/dashboard/cerita-berbagi"}
          className="bg-red-500 px-3 py-2 rounded-lg font-medium hover:bg-red-600 text-white"
        >
          Batal
        </Link>
        {/* <button className="bg-yellow-500 px-3 py-2 rounded-lg font-medium hover:bg-yellow-600 text-white">
          Draf
        </button> */}
        <ButtonSubmit />
      </div>
      {/* Button Stop */}
    </form>
  );
}
