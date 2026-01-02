"use client";

import React from "react";
import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Cari, Pesan, atau Sewa Mobil — Cepat dan Tanpa Ribet!
        </h1>

        <p className="text-2xl">
          Permudah pengalaman sewa mobil Anda dengan proses pemesanan yang
          praktis. Rentcar menyediakan berbagai pilihan armada untuk segala
          kebutuhan perjalanan Anda.
        </p>

        <a
          href={"#armada"}
          className="mt-10 px-8 py-3 bg-primary-blue text-white font-semibold rounded-full shadow-lg 
                     hover:bg-blue-700 hover:shadow-primary-blue/30 active:scale-95 transition-all"
        >
          Lihat Armada
        </a>
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/images/toyota-alphard.png"
            alt="Rentcar - Sewa Mobil Toyota Alphard"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
};

export default Hero;
