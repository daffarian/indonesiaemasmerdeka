import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container flex flex-col md:flex-row-reverse gap-10 justify-center items-center lg:justify-between">
        <div className="max-w-[38rem]">
          <img src="/images/pilar/pendidikan.jpg" alt="banner-pendidikan" />
        </div>
        <div className="flex flex-col lg:max-w-80 md:gap-10 gap-5 items-center md:items-start w-full">
          <h1>Pendidikan</h1>
          <p>
            Dukung Program Pemerataan Akses Pendidikan dan Peningkatan Kemampuan
            Lulusan
          </p>
          <Link
            className="bg-primary text-center rounded-lg w-full text-white font-semibold inline-block px-5 py-3"
            href={"/hubungi-kami"}
          >
            Dukung Program Pendidikan
          </Link>
        </div>
      </div>
    </section>
  );
}
