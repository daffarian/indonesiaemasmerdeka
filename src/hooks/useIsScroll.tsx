"use client";

import { useState, useEffect } from "react";

export default function useIsScroll() {
  const [scroll, setScroll] = useState(true);

  const scrollHandler = () => {
    window.scrollY > 10 ? setScroll(true) : setScroll(false);
  };
  
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [scroll]);

  return scroll;
}
