"use client";

import { useState, useEffect } from "react";

export default function useIsScroll() {
  // const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isScroll, setIsScroll] = useState<boolean>(false);

  const handleScroll = () => {
    let scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
      setIsScroll(true);
    } else if (scrollPosition === 0) {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isScroll;
}
