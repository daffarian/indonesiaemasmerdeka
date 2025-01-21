"use client";
import { useState, useEffect } from "react";

import { ToggleVisibilityProps } from "@/types/ToggleVisibilityProps";
export default function ToggleVisibility({
  setVisibility,
  fetchVisibility,
}: ToggleVisibilityProps) {
  const [isChecked, setIsChecked] = useState(false);

  // Fungsi untuk mendapatkan status awal artikel
  const fetchInitialVisibility = async () => {
    const [isVisible] = await fetchVisibility();
    setIsChecked(isVisible.value === 1); // Set state berdasarkan nilai yang diambil
  };

  // Fungsi untuk menangani switch
  const handleSwitch = async () => {
    const newValue = isChecked ? 0 : 1;
    await setVisibility(newValue);
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    fetchInitialVisibility(); // Ambil status awal ketika komponen dimuat
  }, []);

  return (
    <label className="switch flex" onClick={handleSwitch}>
      <input
        type="checkbox"
        checked={isChecked} // Mengikat status checkbox ke state
        onChange={() => {}}
      />
      <span className="slider"></span>
    </label>
  );
}
