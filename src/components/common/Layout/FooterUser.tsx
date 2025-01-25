import Author from "../Author";
import EmailIcon from "../../icons/EmailIcon";
import WaIcon from "../../icons/WaIcon";

import Link from "next/link";

import FollowUs from "../FollowUs";

export default function FooterUser({ className }: { className?: string }) {
  return (
    <footer
      className={`${className} py-5 lg:py-10 text-base bg-zinc-800 text-white font-extralight`}
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between">
          <address className="not-italic mb-10 max-w-80">
            <Author className="w-14 mb-7" />
            <p className="mb-7 text-base text-white">
              Komp Taman Mangu Indah I 2/16, Jurang Mangu Barat, Pondok Aren,
              Tangerang Selatan 15223
            </p>
            <div className="flex flex-row gap-2 mb-2 items-center">
              <EmailIcon className="w-4 h-4" />
              <a href="mailto:partnership@yayasanindonesiaemas.com">
                partnership@yayasanindonesiaemas.com
              </a>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <WaIcon className="w-4 h-4" />
              <a
                href="https://api.whatsapp.com/send?phone=+6285899777770&text=Hallo%20Yayasan%20Indonesia%20Emas,"
                target="_blank"
              >
                +62-858-9977-7770
              </a>
            </div>
          </address>
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            <div>
              <h4 className="font-bold text-primary text-base">Pilar</h4>
              <ul className="flex flex-col gap-2 mt-3">
                <li>
                  <Link href={"/pilar/kesehatan"}>Kesehatan</Link>
                </li>
                <li>
                  <Link href={"/pilar/pendidikan"}>Pendidikan</Link>
                </li>
                <li>
                  <Link href={"/pilar/umkm"}>UMKM</Link>
                </li>
                <li>
                  <Link href={"/pilar/lingkungan"}>Lingkungan</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-primary text-base">Program</h4>
              <ul className="flex flex-col gap-2 mt-3">
                <li>
                  <Link href={"/hubungi-kami"}>Donasi</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary text-base">Bantuan</h4>
              <ul className="flex flex-col gap-2 mt-3">
                <li>
                  <Link href={"/faq"}>FAQ</Link>
                </li>
                <li>
                  <Link href={"/kebijakan-privasi"}>Kebijakan Privasi</Link>
                </li>
                <li>
                  <Link href={"/syarat-pengguna"}>Syarat Pengguna</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary text-base">Terhubung</h4>
              <ul className="flex flex-col gap-2 mt-3">
                <li>
                  <Link href={"/cerita-berbagi"}>Cerita Berbagi</Link>
                </li>
                <li>
                  <Link href={"/hubungi-kami"}>Hubungi Kami</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Sosmed Start */}
        <div>
          <h4 className="font-bold text-primary text-base mt-5 mb-2">Ikuti Kami</h4>
        </div>
        <FollowUs  />

        {/* Sosmed Stop */}
        <p className="text-sm text-center lg:text-start mt-8 text-white">
          Copyright &copy; 2025 Yayasan Indonesia Emas
        </p>
      </div>
    </footer>
  );
}
