"use client";

import { CarType } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import CarDetail from "./CarDetail";
import { FaWhatsapp } from "react-icons/fa";

interface CarCard {
  car: CarType;
}

const CardCar = ({ car }: CarCard) => {
  const { name, year, transmission, price_per_day, image, seats } = car;
  const [isOpen, setIsOpen] = useState(false);

  const handleSewaWA = () => {
    const phoneNumber = "628123456789"; // Ganti dengan nomor WA Anda
    const message = `Halo Rentcar, saya ingin menyewa mobil *${name}* (${year}). Berapa ketersediaan untuk tanggal terdekat?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">{name}</h2>
      </div>

      <p className="flex mt-6 text-[32px]">
        <span className="self-start text-[14px] font-semibold">RP</span>
        {new Intl.NumberFormat("id-ID").format(price_per_day)}
        <span className="self-end text-[14px] font-semibold">/hari</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={image}
          alt={name}
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={"/steering-wheel.svg"}
              width={20}
              height={20}
              alt="streering wheel"
            />
            <p className="text-[14px]">{transmission}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={"/seats.png"}
              width={20}
              height={20}
              alt="streering wheel"
            />
            <p className="text-[14px]">{seats} Kursi</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={"/calendar.png"}
              width={20}
              height={20}
              alt="streering wheel"
            />
            <p className="text-[14px]">{year}</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="Lihat Detail"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <button
        onClick={handleSewaWA}
        className="w-full mt-4 flex items-center justify-center gap-2 py-3 bg-[#25D366]/10 text-[#25D366] font-bold rounded-xl hover:bg-[#25D366] hover:text-white transition-all border border-[#25D366]/20"
      >
        <FaWhatsapp />
        Sewa Sekarang
      </button>

      <CarDetail
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CardCar;
