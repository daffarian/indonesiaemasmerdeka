import Author from "@/components/common/Author";

export default function Page() {
  return (
    <div className="fixed z-[100] w-full h-dvh inset-0 bg-white flex items-center justify-center">
      <div className="flex flex-col relative justify-center items-center gap-5">
        <Author className="w-32" />
        <span className="text-xl text-zinc-700 font-bold text-center">
          Yayasan <br /> Indonesia Emas Merdeka
        </span>
        <div className="loader mt-5"></div>
      </div>
    </div>
  );
}
