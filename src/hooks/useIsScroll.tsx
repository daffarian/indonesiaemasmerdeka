"use client";

import { useState, useEffect } from "react";

export default function useIsScroll() {
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const [isScroll, setIsScroll] = useState<boolean>(false);

  const handleScroll = () => {
    setWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },);

  useEffect(()=>{
    if(windowHeight > 0){
      setIsScroll(true);
    }else{
      setIsScroll(false);
    }
  }, [windowHeight]);

  return isScroll;
}
