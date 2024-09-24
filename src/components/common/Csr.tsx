import Link from "next/link";
import WaIcon from "../icons/WaIcon";
import EmailIcon from "../icons/EmailIcon";

export default function Csr({ className }: { className?: string }) {
  return (
    <section className={className}>
      <div className="py-10 bg-primary">
        <div className="container">
          <p className="text-lg text-black font-bold">
            Siap Kolaborasi Membawa Perubahan Melalui Program Berkelanjutan ?
          </p>
          <p className="text-white font-bold my-5">Hubungi Kami</p>
          <div className="flex flex-col gap-5">
            {/* Whatsapp Start */}
            <Link href={"/"}>
              <div className="flex flex-row gap-3 items-center text-white py-5 px-3 border-white border rounded-lg">
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
              <div className="flex flex-row gap-3 items-center text-white py-5 px-3 border-white border rounded-lg">
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
      </div>
    </section>
  );
}
