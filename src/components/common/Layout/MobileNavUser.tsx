"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Link from "next/link";

import GiftIcon from "../../icons/GiftIcon";

export default function MobileNavUser({
  className,
  isArticleVisible,
}: {
  className?: string;
  isArticleVisible?: number;
}) {
  const [isOpenNav, setIsOpenNav] = useState(false);

  // Log perubahan state untuk debug
  useEffect(() => {
    if (isOpenNav) {
      document.body.classList.add("overflow-hidden");
    } else if (isOpenNav === false) {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpenNav]);

  const handleToggle = () => {
    setIsOpenNav((prev) => !prev); // Toggle state dengan menggunakan prev state
  };

  return (
    <nav className="lg:hidden">
      <button className="flex flex-col gap-1 !z-50 transition-all duration-500 ease-in-out">
        <input id="toggleChecker" type="checkbox" onClick={handleToggle} />
        <label id="togglerLable" htmlFor="toggleChecker">
          <div className="checkboxtoggler">
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
          </div>
        </label>
      </button>
      <div
        className={clsx(
          "fixed w-full h-dvh top-0 left-0 bg-white z-[-1] pt-[4.35rem] transition-transform duration-500 ease-in-out transform",
          isOpenNav ? "translate-x-0" : "translate-x-full" // Menggunakan translate
        )}
      >
        <div className="container pl-10 flex flex-col justify-between h-full">
          <div>
            <Accordion type="single" collapsible>
              {/* Pillar Start */}
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-base text-zinc-600">
                  Pilar
                </AccordionTrigger>
                <AccordionContent>
                  <Link
                    href="/pilar/kesehatan"
                    className=""
                    onClick={() => {
                      setIsOpenNav(false);
                    }}
                  >
                    <div className="px-3 py-2 rounded-lg text-zinc-600 text-base hover:text-primary">
                      Kesehatan
                    </div>
                  </Link>
                  {/* <Link
                    href="/pilar/pendidikan"
                    className=""
                    onClick={() => {
                      setIsOpenNav(false);
                    }}
                  >
                    <div className="px-3 py-2 rounded-lg text-zinc-600 text-base hover:text-primary">
                      Pendidikan
                    </div>
                  </Link> */}
                  <Link
                    href="/pilar/umkm"
                    className=""
                    onClick={() => {
                      setIsOpenNav(false);
                    }}
                  >
                    <div className="px-3 py-2 rounded-lg text-zinc-600 text-base hover:text-primary">
                      UMKM
                    </div>
                  </Link>
                  <Link
                    href="/pilar/lingkungan"
                    className=""
                    onClick={() => {
                      setIsOpenNav(false);
                    }}
                  >
                    <div className="px-3 py-2 rounded-lg text-zinc-600 text-base hover:text-primary">
                      Lingkungan
                    </div>
                  </Link>
                </AccordionContent>
              </AccordionItem>
              {/* Pillar Stop */}
              {/* Program Start */}
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-base text-zinc-600">
                  Program
                </AccordionTrigger>
                <AccordionContent>
                  <Link
                    href="/hubungi-kami"
                    className=""
                    onClick={() => {
                      setIsOpenNav(false);
                    }}
                  >
                    <div className="px-3 py-2 rounded-lg hover:text-primary flex items-center">
                      <GiftIcon className="mr-2 text-primary inline w-5 h-5" />
                      <span className="text-zinc-600 text-base">Donasi</span>
                    </div>
                  </Link>
                </AccordionContent>
              </AccordionItem>
              {/* Program Stop */}
              {/* Help Start */}
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-base text-zinc-600">
                  Bantuan
                </AccordionTrigger>
                <AccordionContent>
                  <Link
                    href="/faq"
                    className=""
                    onClick={() => {
                      setIsOpenNav(false);
                    }}
                  >
                    <div className="px-3 py-2 rounded-lg text-zinc-600 text-base hover:text-primary">
                      FAQ
                    </div>
                  </Link>
                  <Link
                    href="/kebijakan-privasi"
                    className=""
                    onClick={() => {
                      setIsOpenNav(false);
                    }}
                  >
                    <div className="px-3 py-2 rounded-lg text-zinc-600 text-base hover:text-primary">
                      Kebijakan Privasi
                    </div>
                  </Link>
                  <Link
                    href="/syarat-pengguna"
                    className=""
                    onClick={() => {
                      setIsOpenNav(false);
                    }}
                  >
                    <div className="px-3 py-2 rounded-lg text-zinc-600 text-base hover:text-primary">
                      Syarat Pengguna
                    </div>
                  </Link>
                </AccordionContent>
              </AccordionItem>
              {/* Help Stop */}
              {/* History Start */}
              {isArticleVisible === 1 && (
                <Link
                  href={"/cerita-berbagi"}
                  className="hover:textprimary text-zinc-600 text-base font-medium mt-3 block"
                  onClick={() => {
                    setIsOpenNav(false);
                  }}
                >
                  Cerita Berbagi
                </Link>
              )}
              {/* History Stop */}
              {/* Email Start */}
              <Link
                href={"https://webmail.yayasanindonesiaemas.com"}
                className="hover:textprimary text-zinc-600 text-base font-medium mt-3 block"
                onClick={() => {
                  setIsOpenNav(false);
                }}
              >
                Email Login
              </Link>
              {/* Email Stop */}
            </Accordion>
          </div>
        </div>
        <div className="container absolute bottom-[1rem]">
          <Link
            href="/hubungi-kami"
            className="block text-base w-full text-wrap bg-primary p-2 rounded-lg text-white text-center font-medium"
            onClick={() => {
              setIsOpenNav(false);
            }}
          >
            Corporate CSR Collaboration
          </Link>
        </div>
      </div>
    </nav>
  );
}
