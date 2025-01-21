"use client";
import React from "react";
import { FlipWords } from "../ui/flip-words";
export function FlipWordsDemo({
  words,
  className,
}: {
  words: string[];
  className?: string;
}) {
  return <FlipWords className={className} words={words} />;
}
