import Link from "next/link";
import Author from "../common/Author";

export default function AboutSection({ className }: { className?: string }) {
  return (
    <section className={`${className} text-white`}>
      <div className="">
        <div className="container py-10 bg-yellow-700">
          <h2>Yayasan Indonesia Emas Merdeka</h2>
          <Author className="w-28 my-7 mx-auto" />
          <p className="mt-5">
            Kolaborasi program yang dijalankan akan mampu berdampak secara
            berkelanjutan, dengan fokus pada tiga aspek utama, yaitu lingkungan,
            ekonomi, dan sosial.
          </p>
        </div>
        <div className="text-center container text-zinc-800 py-10">
          <h2 className="text-black">Berikan Dampak Perubahan</h2>
          <p className="mt-5">
            Program berkelanjutan yang dijalankan sudah memberikan manfaat luas.
          </p>
          <p className="text-rose-800 font-semibold">Siap berkolaborasi ?</p>
          <Link
            href={"/"}
            className={
              "px-3 py-2 mt-6 inline-flex rounded-lg bg-primary text-white font-medium hover:shadow-lg transition-all"
            }
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </section>
  );
}
