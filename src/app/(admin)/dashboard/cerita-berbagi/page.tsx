"use client";

import { fetchArticleVisible } from "@/lib/fetch/fetchVisible";
import { setArticleVisible } from "@/lib/action/setArticleVisible";
import { useState, useEffect } from "react";

export default function Page() {
  const [isChecked, setIsChecked] = useState(false);

  // Fungsi untuk mendapatkan status awal artikel
  const fetchInitialVisibility = async () => {
    const [isVisible] = await fetchArticleVisible();
    setIsChecked(isVisible.value === 1); // Set state berdasarkan nilai yang diambil
  };

  // Fungsi untuk menangani switch
  const handleSwitch = async () => {
    if (isChecked) {
      await setArticleVisible(0); // Menyembunyikan
      setIsChecked(false);
    } else {
      await setArticleVisible(1); // Menampilkan
      setIsChecked(true);
    }
    // console.log(isChecked ? 1 : 0); // Log status yang baru
  };

  useEffect(() => {
    fetchInitialVisibility(); // Ambil status awal ketika komponen dimuat
  }, []);

  return (
    <div className="container py-32">
      <p>Cerita Berbagi Visible</p>
      <label className="switch mt-5 block" onClick={handleSwitch}>
        <input
          type="checkbox"
          checked={isChecked} // Mengikat status checkbox ke state
          onChange={() => {}} // Kosongkan onChange karena kita menangani klik pada label
        />
        <span className="slider"></span>
      </label>
    </div>
  );
}
