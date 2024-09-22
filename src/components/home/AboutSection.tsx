import Link from "next/link";

export default function AboutSection({ className }: { className?: string }) {
  return (
    <section className={`${className} text-white`}>
      <div className="">
        <div className="container py-10 bg-secondary">
          <h2>Yayasan Indonesia Emas Merdeka</h2>
          <p className="mt-5">
            Kolaborasi program yang dijalankan akan mampu berdampak secara
            berkelanjutan, dengan fokus pada tiga aspek utama, yaitu lingkungan,
            ekonomi, dan sosial.
          </p>
        </div>
        <div className="text-center container bg-primary py-10">
          <h2>Berikan Dampak Perubahan</h2>
          <p className="mt-5">
            Program berkelanjutan yang dijalankan sudah memberikan
            manfaat luas.
          </p>
          <p className="text-[#4b3c2f]">Siap berkolaborasi ?</p>
          <Link
            href={"/"}
            className={"px-3 py-2 mt-6 inline-flex rounded-lg bg-white text-amber-600 hover:shadow-lg transition-all"}
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </section>
  );
}
