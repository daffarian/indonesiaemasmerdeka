"use client";

import { useFormStatus } from "react-dom";

// Quill
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css"; // Add css for snow theme

// edit user terms
import updateUserTerms from "@/lib/action/updateUserTerms";

import Link from "next/link";

// types
import { UserTerms } from "@/types/UserTerms";

import { useEffect } from "react";

export default function EditUserTermsForm({
  className,
  userTerms,
}: {
  className?: string;
  userTerms: UserTerms;
}) {
  // Quil
  const { quill, quillRef } = useQuill();

  // set default value to editor
  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(`${userTerms.content}`);
    }
  }, [quill]);
  
  const handelSubmit = (formData: FormData) => {
    updateUserTerms(formData, userTerms.id, quill?.getSemanticHTML());
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
        <div className="flex flex-col gap-5 w-full">
          {/*Question Start */}
          <div className="flex flex-col">
            <label htmlFor="title">Judul</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Masukan pertanyaan"
              className="border p-3 rounded-lg text-zinc-600"
              defaultValue={userTerms.title}
              required
            />
          </div>
          {/*Question Stop */}
        </div>
      </div>
      {/* Content Start */}

      <div>
        <label htmlFor="editor">Isi</label>
        <div
          className="w-full min-h-40 !text-base text-zinc-600"
          ref={quillRef}
        />
      </div>
      {/* Content Stop */}
      {/* Button Start */}
      <div className="flex flex-row gap-5 justify-end">
        <Link
          href={"/dashboard/syarat-pengguna"}
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
