import Image from "next/image";
import Link from "next/link";
import { FlipWordsDemo } from "@/components/common/FlipWords";
export default function Home() {
  return (
    <>
      <section className="">
        <div className="container">
          <img className="mb-5" src="/images/hero.webp" alt="logo" />
          <h1>
            Wujudkan Program <br /> Keberlanjutan <br />
            <FlipWordsDemo
              className="px-0 text-primary text-3xl !font-extrabold"
              words={["Kesehatan", "Pendidikan", "UMKM", "Lingkungan"]}
            />
          </h1>
          <div>
            <p className="mt-10">Siap memberikan dampak kebaikan ?</p>
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
        </div>
      </section>
    </>
  );
}
