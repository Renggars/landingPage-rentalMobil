"use client";

import { CustomFilter, Hero, SearchBar } from "@/app/components";
import Image from "next/image";

import { cars } from "@/constants/data";
import CarCard from "./components/CarCard";
import { seats, yearsOfProduction } from "@/constants";
import { useState } from "react";

export default function Home() {
  const [selectedBrand, setSelectedBrand] = useState<string | null>("");
  const [selectedModel, setSelectedModel] = useState<string | null>("");
  const [selectedSeats, setSelectedSeats] = useState<number | null | string>(
    null
  );
  const [selectedYear, setSelectedYear] = useState<number | null | string>(
    null
  );

  const handleSearch = (brand: string, model: string) => {
    setSelectedBrand(brand);
    setSelectedModel(model);
  };

  // Filter data berdasarkan filter seats dan year
  const filteredCars = cars.filter((car) => {
    return (
      (selectedSeats && typeof selectedSeats === "number"
        ? car.seats === selectedSeats
        : true) &&
      (selectedYear && typeof selectedYear === "number"
        ? car.year === selectedYear
        : true) &&
      (selectedBrand
        ? car.brand.toLowerCase().includes(selectedBrand.toLowerCase())
        : true) &&
      (selectedModel
        ? car.model.toLowerCase().includes(selectedModel.toLowerCase())
        : true)
    );
  });
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar onSearch={handleSearch} />

          <div className="home__filter-container">
            {/* Filter berdasarkan jumlah seats */}
            <CustomFilter
              title="Seats"
              options={seats}
              onChange={(option) => setSelectedSeats(option.value)}
            />

            {/* Filter berdasarkan tahun produksi */}
            <CustomFilter
              title="Year"
              options={yearsOfProduction}
              onChange={(option) => setSelectedYear(option.value)}
            />
          </div>
        </div>

        <div className="home__cars-wrapper">
          {filteredCars.length > 0 &&
            filteredCars.map((car) => <CarCard car={car} key={car.id} />)}
        </div>

        {filteredCars.length === 0 && (
          <div className="flex flex-col justify-center items-center min-h-[50vh]">
            <p className="text-center text-gray-500 text-lg font-semibold">
              No cars found that match your criteria.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
