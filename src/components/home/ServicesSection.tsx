"use client";
import GiftIcon from "../icons/GiftIcon";
import GraduationCapIcon from "../icons/GraduationCapIcon";
import FlowerIcon from "../icons/FlowerIcon";
import Link from "next/link";
import "react-multi-carousel/lib/styles.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function ServicesSection({ className }: { className?: string }) {
  return (
    <section
      className={`${className} bg-secondary text-dark-gray py-10 lg:py-20`}
    >
      <div className="container">
        <h2>
          Bentuk Kerja Sama yang Bisa Kita Lakukan{" "}
          <span className="text-accent">Bersama</span>
        </h2>
        <div className="mt-10 relative pb-[30px] overflow-hidden">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true, dynamicBullets: false }}
            autoplay={{ delay: 3000, disableOnInteraction: true }}
          >
            {/* Donatioan Start */}
            <SwiperSlide>
              <div className="bg-[url('https://img.freepik.com/free-vector/hand-drawn-clothing-donation-illustration_23-2148814803.jpg?t=st=1727180878~exp=1727184478~hmac=e25561946bd0e5851d8038f2aff64ba4fb17fafd70b1f14ab93601a74c88b3cd&w=740')] flex flex-col justify-center p-5 rounded-3xl w-full h-80 bg-cover bg-left lg:bg-center relative">
                <div className="z-[1]">
                  <div className="flex gap-2 items-center mb-5">
                    <GiftIcon className=" text-primary" />
                    <h3>Donasi</h3>
                  </div>
                  <p>#WaktunyaBerbagi.</p>
                  <span className="px-3 py-2 rounded-lg text-white hover:shadow-2xl mt-5 inline-flex bg-primary">
                    <Link href={"/"}>Selengkapnya</Link>
                  </span>
                </div>
                <div className="bg-gradient-to-r from-white to-white/30 via-white w-full h-full absolute inset-0 rounded-3xl"></div>
              </div>
            </SwiperSlide>
            {/* Donatioan Stop */}

            {/* Edication Start */}
            <SwiperSlide>
              <div className="bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] flex flex-col justify-center p-5 rounded-3xl w-full h-80 bg-cover bg-bottom-top relative">
                <div className="z-[1]">
                  <div className="flex gap-2 items-center mb-5">
                    <GraduationCapIcon className=" text-primary" />
                    <h3>Pendidikan</h3>
                  </div>
                  <p>
                    Dukung pemerataan akses pendidikan untuk masyarakat
                    Indonesia.
                  </p>
                  <span className="px-3 py-2 rounded-lg text-white hover:shadow-2xl mt-5 inline-flex bg-primary">
                    <Link href={"/"}>Selengkapnya</Link>
                  </span>
                </div>
                <div className="bg-gradient-to-r from-white to-white/30 via-white w-full h-full absolute inset-0 rounded-3xl"></div>
              </div>
              {/* Edication Stop */}
            </SwiperSlide>
            {/* Environment Start */}
            <SwiperSlide>
              <div className="bg-[url('https://images.unsplash.com/photo-1641985516750-cc62447213c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] flex flex-col justify-center p-5 rounded-3xl w-full h-80 bg-current relative">
                <div className="z-[1]">
                  <div className="flex gap-2 items-center mb-5">
                    <FlowerIcon className=" text-primary" />
                    <h3>Lingkungan</h3>
                  </div>
                  <p>Satu pohon selamatkan Bumi.</p>
                  <span className="px-3 py-2 rounded-lg text-white hover:shadow-2xl mt-5 inline-flex bg-primary">
                    <Link href={"/"}>Selengkapnya</Link>
                  </span>
                </div>
                <div className="bg-gradient-to-r from-white to-white/30 via-white w-full h-full absolute inset-0 rounded-3xl"></div>
              </div>
              {/* Environment Stop */}
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
