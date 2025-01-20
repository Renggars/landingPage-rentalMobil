"use client";

import { CarType } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import CarDetail from "./CarDetail";

interface CarCard {
  car: CarType;
}

const CardCar = ({ car }: CarCard) => {
  const { name, year, transmission, price_per_day, image, seats } = car;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">{name}</h2>
      </div>

      <p className="flex mt-6 text-[32px]">
        <span className="self-start text-[14px] font-semibold">RP</span>
        {new Intl.NumberFormat("id-ID").format(price_per_day)}
        <span className="self-end text-[14px] font-semibold">/day</span>
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
            <p className="text-[14px]">{seats} Seat</p>
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

      <CarDetail
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CardCar;
