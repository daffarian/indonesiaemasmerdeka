"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

import GiftIcon from "../../icons/GiftIcon";

export default function DesktopNavUser({
  className,
  isArticleVisible,
}: {
  className?: string;
  isArticleVisible?: number;
}) {
  return (
    <nav className="hidden lg:block">
      <NavigationMenu className="text-zinc-600">
        <NavigationMenuList>
          {/* Pillar Start */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="tracking-wide text-base">
              Pilar
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="text-base lg:text-lg p-3 w-96 flex flex-col">
                <Link href="/pilar/kesehatan">
                  <div className="p-3 group hover:bg-zinc-100 rounded-lg transition-all">
                    <h2 className="text-sm text-zinc-600 group-hover:text-primary">
                      Kesehatan
                    </h2>
                    <p className="text-sm text-zinc-500">
                      Dukung Program untuk Masyarakat Indonesia
                    </p>
                  </div>
                </Link>
                {/* <Link href={"/pilar/pendidikan"}>
                  <div className="p-3 group hover:bg-zinc-100 rounded-lg transition-all">
                    <h2 className="text-sm text-zinc-600 group-hover:text-primary">
                      Pendidikan
                    </h2>
                    <p className="text-sm text-zinc-500">
                      Dukung Program Pemerataan Akses Pendidikan dan Peningkatan
                      Kemampuan Lulusan
                    </p>
                  </div>
                </Link> */}
                <Link href={"/pilar/umkm"}>
                  <div className="p-3 group hover:bg-zinc-100 rounded-lg transition-all">
                    <h2 className="text-sm text-zinc-600 group-hover:text-primary">
                      UMKM
                    </h2>
                    <p className="text-sm text-zinc-500">
                      Dukung dan Memberdayakan Usaha Kecil dan Menengah
                    </p>
                  </div>
                </Link>
                <Link href={"/pilar/lingkungan"}>
                  <div className="p-3 group hover:bg-zinc-100 rounded-lg transition-all">
                    <h2 className="text-sm text-zinc-600 group-hover:text-primary">
                      Lingkungan
                    </h2>
                    <p className="text-sm text-zinc-500">
                      Melestarikan dan Menjaga Ekosistem Lingkungan untuk
                      Meningkatkan Kualitas Hidup
                    </p>
                  </div>
                </Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* Pillar Stop */}

          {/* Pillar Start */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="tracking-wide text-base">
              Program
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              {/* <div className="!text-sm w-96 flex flex-col">
                <div className=" rounded-lg transition-all flex flex-row">
                  <div className="flex flex-row gap-3 items-start w-40 p-5">
                    <GiftIcon className="w-5 text-primary" />
                    <h2 className="text-sm text-zinc-600 group-hover:text-primary">
                      Donasi
                    </h2>
                  </div>
                  <div className="bg-amber-50 w-full p-5">
                    <h2 className="text-sm text-zinc-600 group-hover:text-primary">
                      Donasi
                    </h2>
                    <p className="font-thin mt-5">#Waktunya Berbagi</p>
                    <span className="px-3 py-2 mt-10 rounded-lg text-white hover:shadow-2xl inline-flex bg-primary">
                      <Link href={"/hubungi-kami"}>Lihat Selengkapnya</Link>
                    </span>
                    <GiftIcon className="absolute bottom-3 right-3 text-primary w-12 h-12 opacity-30" />
                  </div>
                </div>
              </div> */}
              <div className="!text-sm p-3 w-96 flex flex-col">
                <Link href="/impact-stories">
                  <div className="p-3 group hover:bg-zinc-100 rounded-lg transition-all">
                    <h2 className="text-sm text-zinc-600 group-hover:text-primary">
                      Impact Stories
                    </h2>
                  </div>
                </Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* Pillar Stop */}
          {/* Help Start */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="tracking-wide text-base">
              Bantuan
            </NavigationMenuTrigger>
            <NavigationMenuContent className="">
              <div className="!text-sm p-3 w-96 flex flex-col">
                <Link href="/faq">
                  <div className="p-3 group hover:bg-zinc-100 rounded-lg transition-all">
                    <h2 className="text-sm text-zinc-600 group-hover:text-primary">
                      FAQ
                    </h2>
                  </div>
                </Link>
                <Link href="/kebijakan-privasi">
                  <div className="p-3 group hover:bg-zinc-100 rounded-lg transition-all">
                    <h2 className="text-sm text-zinc-600 group-hover:text-primary">
                      Kebijakan Privasi
                    </h2>
                  </div>
                </Link>
                <Link href="/syarat-pengguna">
                  <div className="p-3 group hover:bg-zinc-100 rounded-lg transition-all">
                    <h2 className="text-sm text-zinc-600 group-hover:text-primary">
                      Syarat Pengguna
                    </h2>
                  </div>
                </Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* Help Stop */}
          {/* Pillar Start */}
          {/* {isArticleVisible === 1 && (
            <NavigationMenuItem>
              <Link
                href={"/impact-stories"}
                className={`${navigationMenuTriggerStyle()} tracking-wide !text-base`}
              >
                Impact Stories
              </Link>
            </NavigationMenuItem>
          )} */}
          {/* Pillar Stop */}
          {/* Email Start */}
          <NavigationMenuItem>
            <Link
              href={"https://webmail.yayasanindonesiaemas.com"}
              className={`${navigationMenuTriggerStyle()} tracking-wide !text-base`}
            >
              Email Login
            </Link>
          </NavigationMenuItem>
          {/* Email Stop */}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
