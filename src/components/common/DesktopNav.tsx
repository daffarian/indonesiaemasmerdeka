import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

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
                    <p>Dukung Program untuk masyarakat Indonesia</p>
                  </div>
                </Link>
                <Link href={"/"}>
                  <div className="p-3 group hover:bg-zinc-100 rounded-lg transition-all">
                    <h2 className="text-sm text-zinc-600 group-hover:text-primary">
                      Pendidikan
                    </h2>
                    <p>
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
                    <p>Dukung dan memberdayakan usaha kecil dan menengah</p>
                  </div>
                </Link>
                <div className="p-3 group hover:bg-zinc-100 rounded-lg transition-all">
                  <h2 className="text-sm text-zinc-600 group-hover:text-primary">
                    Lingkungan
                  </h2>
                  <p>
                    Melestarikan dan Menjaga Ekosistem Lingkungan untuk
                    meningkatkan kualitas hidup
                  </p>
                </div>
                <Link href={"/"}></Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* Pillar Stop */}

          {/* Pillar Start */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Program</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
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
                    <h2 className="text-sm group-hover:text-primary">FAQ</h2>
                  </div>
                </Link>
                <div className="p-3 group hover:bg-zinc-100 rounded-lg transition-all">
                  <h2 className="text-sm group-hover:text-primary">
                    Kebijakan Privasi
                  </h2>
                </div>
                <div className="p-3 group hover:bg-zinc-100 rounded-lg transition-all">
                  <h2 className="text-sm group-hover:text-primary">
                    Syarat Pengguna
                  </h2>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* Help Stop */}
          {/* Pillar Start */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Cerita Berbagi</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* Pillar Stop */}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
