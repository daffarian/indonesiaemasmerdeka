"use client";
import Author from "./Author";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

import clsx from "clsx";

import useScrollPosition from "@/hooks/useScrollPosition";
import Link from "next/link";
export default function Header({ className }: { className?: string }) {
  const scrollPosition = useScrollPosition();
  return (
    <header
      className={clsx(
        `${className} transition-all mx-auto fixed bg-white z-20 !w-full py-4`,
        {
          "drop-shadow-lg": scrollPosition > 0,
        }
      )}
    >
      <div className="container justify-between items-center flex flex-row">
        <Author className="w-12" />
        <DesktopNav />
        <MobileNav />
        <Link href="/" className="hidden lg:block text-xs text-wrap w-32 bg-primary p-2 rounded-lg text-white text-center font-medium">
          Lets Collaboration To Making Impact
        </Link>
      </div>
    </header>
  );
}
