"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

import { deleteFaq } from "@/lib/action/deleteFaq";

export default function DeleteButtonFaq({
  id,
}: {
  id: number;
}) {
  const deleteFaqById = deleteFaq.bind(null, id);
  return (
    <Dialog>
      <DialogTrigger
        className="bg-red-50 w-16 hover:bg-red-500 hover:text-white text-red-500 rounded-lg px-2 py-1"
      >Hapus</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Hapus Faq ini ?</DialogTitle>
          <DialogDescription>
            Faq akan dihapus secara permanen !
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-row gap-3 justify-center">
          <DialogClose
            className="bg-green-500 w-16 text-white rounded-lg px-2 py-1"
          >
            Batal
          </DialogClose>
          <DialogClose
            type="submit"
            onClick={() => deleteFaqById()}
            className="bg-red-500 w-16 text-white rounded-lg px-2 py-1"
          >
            Hapus
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
