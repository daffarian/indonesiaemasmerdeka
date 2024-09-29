import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

import GiftIcon from "../icons/GiftIcon";

export default function DesktopNav({ className }: { className?: string }) {
  return (
    <nav className="hidden lg:block">
      <NavigationMenu className="text-zinc-600">
        <NavigationMenuList>
          {/* Pillar Start */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Pilar</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="!text-sm p-3 w-96 flex flex-col font-thin">
                <Link href="/">
                  <div className="p-3 group hover:bg-zinc-100 rounded-lg transition-all">
                    <h2 className="text-sm text-zinc-600 group-hover:text-primary">
                      Kesehatan
                    </h2>
                    <p className="text-sm">Dukung Program untuk masyarakat Indonesia</p>
                  </div>
                </Link>
                <Link href={"/"}>
                  <div className="p-3 group hover:bg-zinc-100 rounded-lg transition-all">
                    <h2 className="text-sm text-zinc-600 group-hover:text-primary">
                      Pendidikan
                    </h2>
                    <p className="text-sm">
                      Dukung Program pemerataan akses pendidikan dan peningkatan
                      kemampuan lulusan
                    </p>
                  </div>
                </Link>
                <Link href={"/"}>
                  <div className="p-3 group hover:bg-zinc-100 rounded-lg transition-all">
                    <h2 className="text-sm text-zinc-600 group-hover:text-primary">
                      UMKM
                    </h2>
                    <p className="text-sm">Dukung dan memberdayakan usaha kecil dan menengah</p>
                  </div>
                </Link>
                <div className="p-3 group hover:bg-zinc-100 rounded-lg transition-all">
                  <h2 className="text-sm text-zinc-600 group-hover:text-primary">
                    Lingkungan
                  </h2>
                  <p className="text-sm">
                    Melestarikan dan Menjaga Ekosistem Lingkungan untuk
                    meningkatkan kualitas hidup
                  </p>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* Pillar Stop */}

          {/* Pillar Start */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Program</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="!text-sm w-96 flex flex-col">
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
                      <Link href={"/"}>Lihat Selengkapnya</Link>
                    </span>
                    <GiftIcon className="absolute bottom-3 right-3 text-primary w-12 h-12 opacity-30" />
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* Pillar Stop */}
          {/* Help Start */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Bantuan</NavigationMenuTrigger>
            <NavigationMenuContent className="">
              <div className="!text-sm p-3 w-96 flex flex-col">
                <Link href="/">
                  <div className="p-3 group hover:bg-zinc-100 rounded-lg transition-all">
                    <h2 className="text-sm text-zinc-600 group-hover:text-primary">
                      FAQ
                    </h2>
                  </div>
                </Link>
                <Link href="/">
                  <div className="p-3 group hover:bg-zinc-100 rounded-lg transition-all">
                    <h2 className="text-sm text-zinc-600 group-hover:text-primary">
                      Kebijakan Privasi
                    </h2>
                  </div>
                </Link>
                <Link href="/">
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
          <NavigationMenuItem>
            <Link href={"/"} className={navigationMenuTriggerStyle()}>
              Cerita Berbagi
            </Link>
          </NavigationMenuItem>
          {/* Pillar Stop */}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
