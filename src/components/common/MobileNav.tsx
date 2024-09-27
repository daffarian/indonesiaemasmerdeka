"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";

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
      <button
        className="flex flex-col gap-1 transition-all duration-500 ease-in-out"
        
      >
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
      ></div>
    </nav>
  );
}
