import Author from "./Author";
import EmailIcon from "../icons/EmailIcon";
import WaIcon from "../icons/WaIcon";

import Link from "next/link";

export default function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={`${className} py-5 lg:py-10 text-base bg-yellow-950 text-white font-extralight`}
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between">
          <address className="not-italic mb-10 max-w-80">
            <Author className="w-14 mb-7" />
            <p className="mb-7 text-base">
              Komp Taman Mangu Indah I 2/16, Jurang Mangu Barat, Pondok Aren,
              Tangerang Selatan 15223
            </p>
            <div className="flex flex-row gap-2 mb-2 items-center">
              <EmailIcon className="w-4 h-4" />
              <a href="mailto:ira@yayasanindonesiaemas.com">
                ira@yayasanindonesiaemas.com
              </a>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <WaIcon className="w-4 h-4" />
              <a href="https:wa.me/6285891877388">+62-858-9187-7388</a>
            </div>
          </address>
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            <div>
              <h4 className="font-bold text-primary text-base">Pilar</h4>
              <ul className="flex flex-col gap-2 mt-3">
                <li>
                  <Link href={"/"}>Kesehatan</Link>
                </li>
                <li>
                  <Link href={"/"}>Pendidikan</Link>
                </li>
                <li>
                  <Link href={"/"}>UMKM</Link>
                </li>
                <li>
                  <Link href={"/"}>Lingkungan</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-primary text-base">Program</h4>
              <ul className="flex flex-col gap-2 mt-3">
                <li>
                  <Link href={"/"}>Donasi</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary text-base">Bantuan</h4>
              <ul className="flex flex-col gap-2 mt-3">
                <li>
                  <Link href={"/"}>FAQ</Link>
                </li>
                <li>
                  <Link href={"/"}>Kebijakan Privasi</Link>
                </li>
                <li>
                  <Link href={"/"}>Syarat Pengguna</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary text-base">Terhubung</h4>
              <ul className="flex flex-col gap-2 mt-3">
                <li>
                  <Link href={"/"}>Cerita Berbagi</Link>
                </li>
                <li>
                  <Link href={"/"}>Hubungi Kami</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-sm text-center lg:text-start mt-8">
          Copyright &copy; 2024 Yayasan Indonesia Emas
        </p>
      </div>
    </footer>
  );
}
