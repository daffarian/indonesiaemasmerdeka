import Link from "next/link";
import WaIcon from "../icons/WaIcon";
import EmailIcon from "../icons/EmailIcon";

export default function Csr({ className }: { className?: string }) {
  return (
    <section className={className}>
      <div className="">
        <div className="">
          {/* Contact Start */}
          <div className="container py-10 bg-secondary">
            <p className="text-lg text-zinc-800 font-bold">
              Siap Kolaborasi Membawa Perubahan Melalui Program Berkelanjutan ?
            </p>
            <p className="text-zinc-800 font-bold my-5">Hubungi Kami</p>
            <div className="flex flex-col gap-5">
              {/* Whatsapp Start */}
              <Link href={"/"}>
                <div className="flex flex-row gap-3 items-center text-zinc-800 py-5 px-3 border-zinc-800 border rounded-lg">
                  <div className="inline-flex justify-center items-center p-3 rounded-full bg-green-500">
                    <WaIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="font-bold">Whatsapp</p>
                    <p className="text-sm">+62-899-9999-9999</p>
                  </div>
                </div>
              </Link>
              {/* Whatsapp Stop */}
              {/* Email Start */}
              <Link href={"/"}>
                <div className="flex flex-row gap-3 items-center text-zinc-800 py-5 px-3 border-zinc-800 border rounded-lg">
                  <div className="inline-flex justify-center items-center p-3 rounded-full bg-red-500">
                    <EmailIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="font-bold">Email</p>
                    <p className="text-sm">info@yayasanindonesiaemas.com</p>
                  </div>
                </div>
              </Link>
              {/* Email Stop */}
            </div>
          </div>
          {/* Contact Stop */}
          {/* Form Start */}
          <div className="py-10 bg-amber-50 container">
            <form action="#" className="flex flex-col gap-5 ">
              {/* Email Start */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="font-bold after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Masukan email perusahaan"
                  className="rounded-lg py-4 px-3 focus:outline-none placeholder:text-sm"
                />
              </div>
              {/* Email Stop */}
              {/* Phone Start */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="phone"
                  className="font-bold after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  Nomor Hp
                </label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  placeholder="Masukan nomor aktif"
                  className="rounded-lg py-4 px-3 focus:outline-none placeholder:text-sm"
                />
              </div>
              {/* Phone Stop */}
              {/* Message Start */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="font-bold after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  Pesan
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Contoh : Program tanam mangrove di pesisir pantai"
                  className="rounded-lg py-4 px-3 focus:outline-none placeholder:text-sm"
                  rows={5}
                />
              </div>
              {/* Message Stop */}
              <div>
                <button className="py-2 text-center rounded-xl inline-flex justify-center font-bold text-white items-center w-full bg-primary mt-5">
                  Kirim
                </button>
              </div>
            </form>
          </div>
          {/* Form Stop */}
        </div>
      </div>
    </section>
  );
}
