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

import { deletePrivacyPolicy } from "@/lib/action/deletePrivacyPolicy";

export default function DeleteButtonPrivacyPolicy({
  id,
}: {
  id: number;
}) {
  const deletePrivacyPolicyById = deletePrivacyPolicy.bind(null, id);
  return (
    <Dialog>
      <DialogTrigger
        className="bg-red-50 w-16 hover:bg-red-500 hover:text-white text-red-500 rounded-lg px-2 py-1"
      >Hapus</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Hapus Kebijakan Privasi ini ?</DialogTitle>
          <DialogDescription>
            Kebijakan privasi akan dihapus secara permanen !
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
            onClick={() => deletePrivacyPolicyById()}
            className="bg-red-500 w-16 text-white rounded-lg px-2 py-1"
          >
            Hapus
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
