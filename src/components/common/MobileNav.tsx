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

import GiftIcon from "../icons/GiftIcon";

export default function MobileNav() {
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
      <button className="flex flex-col gap-1 transition-all duration-500 ease-in-out">
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
          "fixed w-full h-screen top-[4.35rem] left-0 bg-white z-[40] transition-transform duration-500 ease-in-out transform",
          isOpenNav ? "translate-x-0" : "translate-x-full" // Menggunakan translate
        )}
      >
        <div className="container pl-10">
          <Accordion type="single" collapsible>
            {/* Pillar Start */}
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-base text-zinc-600">
                Pilar
              </AccordionTrigger>
              <AccordionContent>
                <Link
                  href="/"
                  className=""
                  onClick={() => {
                    setIsOpenNav(false);
                  }}
                >
                  <div className="px-3 py-2 rounded-lg hover:text-primary">
                    Kesehatan
                  </div>
                </Link>
                <Link
                  href="/"
                  className=""
                  onClick={() => {
                    setIsOpenNav(false);
                  }}
                >
                  <div className="px-3 py-2 rounded-lg hover:text-primary">
                    Pendidikan
                  </div>
                </Link>
                <Link
                  href="/"
                  className=""
                  onClick={() => {
                    setIsOpenNav(false);
                  }}
                >
                  <div className="px-3 py-2 rounded-lg hover:text-primary">
                    UMKM
                  </div>
                </Link>
                <Link
                  href="/"
                  className=""
                  onClick={() => {
                    setIsOpenNav(false);
                  }}
                >
                  <div className="px-3 py-2 rounded-lg hover:text-primary">
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
                  href="/"
                  className=""
                  onClick={() => {
                    setIsOpenNav(false);
                  }}
                >
                  <div className="px-3 py-2 rounded-lg hover:text-primary flex items-center">
                    <GiftIcon className="mr-2 text-primary inline w-5 h-5" />
                    Donasi
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
                  href="/"
                  className=""
                  onClick={() => {
                    setIsOpenNav(false);
                  }}
                >
                  <div className="px-3 py-2 rounded-lg hover:text-primary">
                    FAQ
                  </div>
                </Link>
                <Link
                  href="/"
                  className=""
                  onClick={() => {
                    setIsOpenNav(false);
                  }}
                >
                  <div className="px-3 py-2 rounded-lg hover:text-primary">
                    Kebijakan Privasi
                  </div>
                </Link>
                <Link
                  href="/"
                  className=""
                  onClick={() => {
                    setIsOpenNav(false);
                  }}
                >
                  <div className="px-3 py-2 rounded-lg hover:text-primary">
                    Syarat Pengguna
                  </div>
                </Link>
              </AccordionContent>
            </AccordionItem>
            {/* Help Stop */}
            {/* History Start */}
            <Link
              href={"/"}
              className="hover:textprimary text-zinc-600 text-base font-medium mt-3 block"
              onClick={() => {
                setIsOpenNav(false);
              }}
            >
              Cerita Berbagi
            </Link>
            {/* History Stop */}
          </Accordion>
        </div>
      </div>
    </nav>
  );
}
