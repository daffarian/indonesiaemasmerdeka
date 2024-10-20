"use client";
import { useState } from "react";

// Quill
import { useQuill } from "react-quilljs";

import "quill/dist/quill.snow.css"; // Add css for snow theme

export default function ArticleForm({ className }: { className?: string }) {
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

  const handleUpload = () => {
    // Logic untuk mengupload gambar
    // Misalnya menggunakan Fetch API atau axios
    console.log("Upload image:", image);
  };

  const handelSubmit = (formData: FormData) => {
    const rawFormData = {
      title: formData.get("title"),
      category: formData.get("category"),
      description: formData.get("description"),
      content: quill?.getSemanticHTML(),
    };

    console.info(rawFormData);
  };

  return (
    <form action={handelSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col lg:flex-row gap-10 w-full justify-center items-center">
        {/* Image Start */}
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            id="file-input"
            className="file-input hidden cursor-pointer"
          />
          <label htmlFor="file-input" className="upload-box">
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="preview-image cursor-pointer lg:w-96"
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
            >
              <option value={0} disabled className="text-gray-400">
                Pilih Kategori
              </option>
              <option value={1} className="rounded-lg hover:bg-primary">
                Kesehatan
              </option>
              <option value={2} className="rounded-lg hover:bg-primary">
                Pendidikan
              </option>
              <option value={3} className="rounded-lg hover:bg-primary">
                UMKM
              </option>
              <option value={4} className="rounded-lg hover:bg-primary">
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
            />
          </div>
          {/* Description Stop */}
        </div>
      </div>
      {/* Content Start */}

      <div>
        <label htmlFor="editor">Isi Artikel</label>
        <div className="text-zinc-600 w-full min-h-40" ref={quillRef} />
      </div>
      {/* Content Stop */}
      {/* Button Start */}
      <div className="flex flex-row gap-5 justify-end">
        <button className="bg-red-500 px-3 py-2 rounded-lg font-medium hover:bg-red-600 text-white">
          Batal
        </button>
        <button className="bg-yellow-500 px-3 py-2 rounded-lg font-medium hover:bg-yellow-600 text-white">
          Draf
        </button>
        <button
          type="submit"
          className="bg-green-500 px-3 py-2 rounded-lg font-medium hover:bg-green-600 text-white"
        >
          Simpan
        </button>
      </div>
      {/* Button Stop */}
    </form>
  );
}
