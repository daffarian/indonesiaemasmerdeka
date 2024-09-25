import Link from "next/link";
import { FlipWordsDemo } from "@/components/common/FlipWords";

export default function HomeSection({ className }: { className?: string }) {
  return (
    <section
      className={`${className} pb-10 pt-20 `}
    >
      <div className="container">
        <h1 className="py-10 text-zinc-800">
          Yayasan <br />{" "}
          <span className="bg-gradient-to-b from-red-500 via-yellow-500 to-white bg-clip-text text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.6)]">
            Indonesia Emas
          </span>{" "}
          <span className="text-[#FFD700]"></span> Merdeka
        </h1>
        {/* Image Start */}
        {/* <img className="mb-5" src="/images/hero.webp" alt="logo" /> */}
        {/* Image Stop */}
        {/* Hero */}
        {/* Headline Start */}
        <p className="text-xl font-bold">
          Wujudkan Program <br /> Keberlanjutan <br />
          {/* Pillar */}
          <FlipWordsDemo
            className="px-0 text-primary text-2xl !font-extrabold"
            words={["Kesehatan", "Pendidikan", "UMKM", "Lingkungan"]}
          />
        </p>
        {/* Headline Stop */}
        {/* CTA Start */}
        <div>
          <p className="mt-10 font-semibold">
            Siap memberikan dampak kebaikan ?
          </p>
          <div className="flex flex-row w-full gap-5 mt-5 text-sm">
            <Link
              className="bg-primary text-center rounded-lg text-white w-full px-5 py-3"
              href={"/"}
            >
              Selengkapnya
            </Link>
            <Link
              className="bg-amber-100 text-center text-amber-500 w-full px-5 py-3 rounded-lg"
              href={"/"}
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
        {/* CTA Stop */}
      </div>
    </section>
  );
}
