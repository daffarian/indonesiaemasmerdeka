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

export default function DeleteButton({
  title,
  description,
  actionDelete,
}: {
  title: string;
  description: string;
  actionDelete?: any;
}) {
  return (
    <Dialog>
      <DialogTrigger className="bg-red-50 w-16 hover:bg-red-500 hover:text-white text-red-500 rounded-lg px-2 py-1">
        Hapus
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-row gap-3 justify-center">
          <DialogClose className="bg-green-500 w-16 text-white rounded-lg px-2 py-1">
            Batal
          </DialogClose>
          <form action={actionDelete}>
            <button
              type="submit"
              className="bg-red-500 w-16 text-white rounded-lg px-2 py-1"
            >
              Hapus
            </button>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
