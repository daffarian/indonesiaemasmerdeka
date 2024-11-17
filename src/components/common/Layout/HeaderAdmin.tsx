"use client";
import Author from "../Author";
import clsx from "clsx";
import MobileNavAdmin from "./MobileNavAdmin";
import { useState, useEffect } from "react";

import Link from "next/link";
export default function HeaderAdmin({
  className,
  isArticleVisible,
}: {
  className?: string;
  isArticleVisible?: number;
}) {
  const [styleOnScroll, setStyleOnScroll] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setStyleOnScroll("border-b-[1px] border-zinc-200");
      } else {
        setStyleOnScroll("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        `${className} ${styleOnScroll} transition-all mx-auto fixed bg-white z-50 !w-full py-4`
      )}
    >
      <div className="container lg:px-5 justify-between items-center flex flex-row">
        <Link href={"/"}>
          <Author className="w-12 lg:w-16 !z-[60]" />
        </Link>
        <MobileNavAdmin/>
      </div>
    </header>
  );
}
