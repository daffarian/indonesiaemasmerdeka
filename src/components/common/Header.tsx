"use client";
import Author from "./Author";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

import clsx from "clsx";

import { useState, useEffect } from "react";

import Link from "next/link";
export default function Header({ className }: { className?: string }) {

  const [styleOnScroll, setStyleOnScroll] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setStyleOnScroll('shadow-md');
      } else {
        setStyleOnScroll('');
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[]);

  return (
    <header
      className={clsx(
        `${className} ${styleOnScroll} transition-all mx-auto fixed bg-white z-20 !w-full py-4`,
      )}
    >
      <div className="container justify-between items-center flex flex-row">
        <Link href={"/"}>
          <Author className="w-12 lg:w-16" />
        </Link>
        <DesktopNav />
        <MobileNav />
        <Link
          href="/hubungi-kami"
          className="hidden lg:block text-xs text-wrap w-32 bg-primary p-2 rounded-lg text-white text-center font-medium"
        >
          Corporate CSR Collaboration
        </Link>
      </div>
    </header>
  );
}
