import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container flex flex-col md:flex-row-reverse gap-10 justify-center items-center lg:justify-between">
        <div className="max-w-[38rem]">
          <img src="/images/pilar/umkm.jpg" alt="banner-umkm" />
        </div>
        <div className="flex flex-col lg:max-w-80 md:gap-10 gap-5 items-center md:items-start w-full">
          <h1>UMKM</h1>
          <p>
            Dukung dan Memberdayakan Usaha Kecil dan Menengah
          </p>
          <Link
            className="bg-primary text-center rounded-lg w-full text-white font-semibold inline-block px-5 py-3"
            href={"/hubungi-kami"}
          >
            Dukung UMKM Sekarang !
          </Link>
        </div>
      </div>
    </section>
  );
}
