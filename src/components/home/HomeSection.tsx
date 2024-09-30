"use client";

import Link from "next/link";
import { FlipWordsDemo } from "@/components/common/FlipWords";

// Swipper
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

export default function HomeSection({ className }: { className?: string }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Referensi untuk Swiper lainnya
  const swiperRef1 = useRef<SwiperRef>(null);
  const swiperRef2 = useRef<SwiperRef>(null);
  const swiperRef3 = useRef<SwiperRef>(null);

  const fade2 =  EffectFade;
  const fade3 =  EffectFade;

  const handleSlideChange = (swiper: any) => {
    const newIndex = swiper.activeIndex;
    setActiveIndex(newIndex);

    // Sinkronisasi dengan Swiper lainnya
    if (swiperRef1.current && swiperRef1.current.swiper) {
      swiperRef1.current.swiper.slideTo(newIndex);
    }
    if (swiperRef2.current && swiperRef2.current.swiper) {
      swiperRef2.current.swiper.slideTo(newIndex);
    }
    if (swiperRef3.current && swiperRef3.current.swiper) {
      swiperRef3.current.swiper.slideTo(newIndex);
    }
  };

  return (
    <section className={`${className} pb-10 pt-16 lg:pb-20 lg:pt-40`}>
      <div className="container">
        {/* Author Start */}
        <h1 className="pt-3 text-zinc-700 my-5">
          Yayasan <br />{" "}
          <span className="bg-gradient-to-b from-red-500 via-yellow-500 to-white bg-clip-text text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.6)]">
            Indonesia Emas
          </span>{" "}
          <span className="text-[#FFD700]"></span>
        </h1>
        {/* Author Stop */}
        {/* Image Start */}
        <Swiper
          ref={swiperRef1}
          spaceBetween={30}
          allowTouchMove={false}
          direction="vertical"
          initialSlide={activeIndex}
          className="mySwiper1 h-60"
          effect="fade"
        >
          <SwiperSlide>
            <img className="my-5" src="/images/lingkungan.jpg" alt="logo" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="my-5" src="/images/lingkungan.jpg" alt="logo" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="my-5" src="/images/lingkungan.jpg" alt="logo" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="my-5" src="/images/lingkungan.jpg" alt="logo" />
          </SwiperSlide>
        </Swiper>
        {/* Image Stop */}
        {/* Hero */}
        {/* Headline Start */}
        <p className="text-2xl mt-5 font-extrabold">
          Lets Collaboration To Making Impact
          {/* Pillar */}
        </p>
        {/* <FlipWordsDemo
          className="px-0 text-primary text-2xl !font-extrabold"
          words={["Kesehatan", "Pendidikan", "UMKM", "Lingkungan"]}
        /> */}
        <Swiper
          ref={swiperRef2}
          spaceBetween={30}
          initialSlide={activeIndex}
          className="mySwiper2 h-10"
          direction="vertical"
          allowTouchMove={false}
        >
          <SwiperSlide>
            <div className="text-primary text-2xl !font-extrabold">
              Kesehatan
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-primary text-2xl !font-extrabold">
              Pendidikan
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-primary text-2xl !font-extrabold">UMKM</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-primary text-2xl !font-extrabold">
              Lingkungan
            </div>
          </SwiperSlide>
        </Swiper>
        {/* Headline Stop */}
        {/* CTA Start */}
        <div>
          <p className="mt-5 font-semibold">
            Siap memberikan dampak kebaikan ?
          </p>
          <div className="flex flex-row w-full gap-5 mt-5 text-sm lg:w-96">
            <Link
              className="bg-primary text-center rounded-lg text-white w-full px-5 py-3"
              href={"/"}
            >
              Selengkapnya
            </Link>
            <Link
              className="bg-amber-100 text-center text-amber-500 w-full px-5 py-3 rounded-lg"
              href={"/hubungi-kami"}
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
        {/* CTA Stop */}
        {/* SGDS Start */}
        <div className="py-">
          <h6 className="text-sm my-5">Kontrubusi Terhadap SDGs</h6>
          <Swiper
            ref={swiperRef3}
            spaceBetween={30}
            pagination={{ clickable: true }}
            initialSlide={activeIndex}
            modules={[Pagination, Autoplay, EffectFade]}
            className="mySwiper3 h-32"
            onSlideChange={handleSlideChange}
            autoplay={{ delay: 3000, disableOnInteraction: true }}
            effect="fade"
            allowTouchMove={false}
          >
            {/* Kesehatan Start*/}
            <SwiperSlide>
              <div className="flex flex-row gap-3 flex-wrap">
                <img
                  className="w-10 rounded-lg"
                  src="/images/sdgs-logo/sdgs-1.png"
                  alt="sdgs-1"
                />
                <img
                  className="w-10 rounded-lg"
                  src="/images/sdgs-logo/sdgs-2.png"
                  alt="sdgs-2"
                />
                <img
                  className="w-10 rounded-lg"
                  src="/images/sdgs-logo/sdgs-3.png"
                  alt="sdgs-3"
                />
                <img
                  className="w-10 rounded-lg"
                  src="/images/sdgs-logo/sdgs-5.png"
                  alt="sdgs-5"
                />
              </div>
            </SwiperSlide>
            {/* Kesehatan Stop*/}
            {/* Pendidikan Start */}
            <SwiperSlide>
              <div className="flex flex-row gap-3 flex-wrap">
                <img
                  className="w-10 rounded-lg"
                  src="/images/sdgs-logo/sdgs-1.png"
                  alt="sdgs-1"
                />
                <img
                  className="w-10 rounded-lg"
                  src="/images/sdgs-logo/sdgs-2.png"
                  alt="sdgs-2"
                />
                <img
                  className="w-10 rounded-lg"
                  src="/images/sdgs-logo/sdgs-3.png"
                  alt="sdgs-3"
                />
                <img
                  className="w-10 rounded-lg"
                  src="/images/sdgs-logo/sdgs-4.png"
                  alt="sdgs-4"
                />
                <img
                  className="w-10 rounded-lg"
                  src="/images/sdgs-logo/sdgs-5.png"
                  alt="sdgs-5"
                />
                <img
                  className="w-10 rounded-lg"
                  src="/images/sdgs-logo/sdgs-8.png"
                  alt="sdgs-8"
                />
                <img
                  className="w-10 rounded-lg"
                  src="/images/sdgs-logo/sdgs-8.png"
                  alt="sdgs-8"
                />
              </div>
            </SwiperSlide>
            {/* Pendidikan Stop */}
            {/* UMKM Start */}
            <SwiperSlide>
              <div className="flex flex-row gap-3 flex-wrap">
                <img
                  className="w-10 rounded-lg"
                  src="/images/sdgs-logo/sdgs-1.png"
                  alt="sdgs-1"
                />
                <img
                  className="w-10 rounded-lg"
                  src="/images/sdgs-logo/sdgs-5.png"
                  alt="sdgs-5"
                />
                <img
                  className="w-10 rounded-lg"
                  src="/images/sdgs-logo/sdgs-8.png"
                  alt="sdgs-8"
                />
                <img
                  className="w-10 rounded-lg"
                  src="/images/sdgs-logo/sdgs-10.png"
                  alt="sdgs-10"
                />
                <img
                  className="w-10 rounded-lg"
                  src="/images/sdgs-logo/sdgs-11.png"
                  alt="sdgs-11"
                />
              </div>
            </SwiperSlide>
            {/* UMKM Stop */}
            {/* Lingkungan Start */}
            <SwiperSlide>
              <div className="flex flex-row gap-3 flex-wrap">
                <img
                  className="w-10 rounded-lg"
                  src="/images/sdgs-logo/sdgs-6.png"
                  alt="sdgs-6"
                />
                <img
                  className="w-10 rounded-lg"
                  src="/images/sdgs-logo/sdgs-7.png"
                  alt="sdgs-7"
                />
                <img
                  className="w-10 rounded-lg"
                  src="/images/sdgs-logo/sdgs-11.png"
                  alt="sdgs-11"
                />
                <img
                  className="w-10 rounded-lg"
                  src="/images/sdgs-logo/sdgs-13.png"
                  alt="sdgs-13"
                />
                <img
                  className="w-10 rounded-lg"
                  src="/images/sdgs-logo/sdgs-14.png"
                  alt="sdgs-14"
                />
                <img
                  className="w-10 rounded-lg"
                  src="/images/sdgs-logo/sdgs-15.png"
                  alt="sdgs-15"
                />
                <img
                  className="w-10 rounded-lg"
                  src="/images/sdgs-logo/sdgs-16.png"
                  alt="sdgs-16"
                />
              </div>
            </SwiperSlide>
            {/* Lingkungan Stop */}
          </Swiper>
        </div>
        {/* SGDS Stop */}
      </div>
    </section>
  );
}
