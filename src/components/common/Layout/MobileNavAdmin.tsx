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
import NewspaperIcon from "@/components/icons/NewsPaperIcon";
import LayoutDashboardIcon from "@/components/icons/LayoutDashboardIcon";
import CircleHelpIcon from "@/components/icons/CircleHelpIcon";
import GlobeLockIcon from "@/components/icons/GlobeLockIcon";
import { UserCheck2Icon } from "lucide-react";

export default function MobileNavAdmin({ className }: { className?: string }) {
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
          isOpenNav ? "translate-x-0" : "-translate-x-full" // Menggunakan translate
        )}
      >
        <div className="container flex flex-col justify-between h-full">
          <div>
            {/* Dashboard Start */}
            <Link
              href={"/dashboard"}
              className="hover:text-primary flex flex-row gap-3 hover:bg-zinc-100 px-3 py-3 rounded-lg text-zinc-600 text-base font-medium mt-3"
              onClick={() => {
                setIsOpenNav(false);
              }}
            >
              <LayoutDashboardIcon className="text-primary" />
              Dashboard
            </Link>
            {/* Dashboard Stop */}
            {/* History Start */}
            <Link
              href={"/dashboard/cerita-berbagi"}
              className="hover:text-primary flex flex-row gap-3 hover:bg-zinc-100 px-3 py-3 rounded-lg text-zinc-600 text-base font-medium mt-3"
              onClick={() => {
                setIsOpenNav(false);
              }}
            >
              <NewspaperIcon className="text-primary w-6" />
              Cerita Berbagi
            </Link>
            {/* History Stop */}
            {/* Faq Start */}
            <Link
              href={"/dashboard/faq"}
              className="hover:text-primary flex flex-row gap-3 hover:bg-zinc-100 px-3 py-3 rounded-lg text-zinc-600 text-base font-medium mt-3"
              onClick={() => {
                setIsOpenNav(false);
              }}
            >
              <CircleHelpIcon className="text-primary" />
              Faq
            </Link>
            {/* Faq Stop */}
            {/* Privacy Policy   Start */}
            <Link
              href={"/dashboard/kebijakan-privasi"}
              className="hover:text-primary flex flex-row gap-3 hover:bg-zinc-100 px-3 py-3 rounded-lg text-zinc-600 text-base font-medium mt-3"
              onClick={() => {
                setIsOpenNav(false);
              }}
            >
              <GlobeLockIcon className="text-primary" />
              Kebijakan Privasi  
            </Link>
            {/* Privacy Policy   Stop */}
            {/* User Terms Start */}
            <Link
              href={"/dashboard/syarat-pengguna"}
              className="hover:text-primary flex flex-row gap-3 hover:bg-zinc-100 px-3 py-3 rounded-lg text-zinc-600 text-base font-medium mt-3"
              onClick={() => {
                setIsOpenNav(false);
              }}
            >
              <UserCheck2Icon className="text-primary" />
              Syarat Pengguna  
            </Link>
            {/* User Terms Stop */}
          </div>
        </div>
        <div className="container absolute bottom-[1rem]">
          <Link
            href="/dashboard"
            className="block text-base w-full text-wrap bg-red-500 p-2 rounded-lg text-white text-center font-medium"
            onClick={() => {
              setIsOpenNav(false);
            }}
          >
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
}
