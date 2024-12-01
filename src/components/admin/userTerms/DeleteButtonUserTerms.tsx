"use client";

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

import { deleteUserTerms } from "@/lib/action/deleteUserTerms";

export default function DeleteButtonUserTerms({
  id,
}: {
  id: number;
}) {
  const deleteUserTermsById = deleteUserTerms.bind(null, id);
  return (
    <Dialog>
      <DialogTrigger
        className="bg-red-50 w-16 hover:bg-red-500 hover:text-white text-red-500 rounded-lg px-2 py-1"
      >Hapus</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Hapus Syarat Pengguna ini ?</DialogTitle>
          <DialogDescription>
            Syarat pengguna akan dihapus secara permanen !
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
            onClick={() => deleteUserTermsById()}
            className="bg-red-500 w-16 text-white rounded-lg px-2 py-1"
          >
            Hapus
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
