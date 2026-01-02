"use client";

import { CustomButton, CustomFilter, Hero, SearchBar } from "@/app/components";

import { cars } from "@/constants/data";
import CarCard from "./components/CarCard";
import { seats, yearsOfProduction } from "@/constants";
import { useState } from "react";
import About from "./components/About";
import BookingTerms from "./components/BookingTerms";

export default function Home() {
  const [selectedBrand, setSelectedBrand] = useState<string | null>("");
  const [selectedModel, setSelectedModel] = useState<string | null>("");
  const [selectedSeats, setSelectedSeats] = useState<number | null | string>(
    null
  );
  const [selectedYear, setSelectedYear] = useState<number | null | string>(
    null
  );
  const [showAll, setShowAll] = useState(false);

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

  const displayedCars = showAll ? filteredCars : filteredCars.slice(0, 8);

  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <div
        className="mt-12 padding-x padding-y max-width scroll-mt-20"
        id="armada"
      >
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Katalog Armada</h1>
          <p>Temukan mobil pilihan yang sesuai dengan kebutuhan Anda</p>
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
          {displayedCars.length > 0 &&
            displayedCars.map((car) => <CarCard car={car} key={car.id} />)}
        </div>

        {filteredCars.length === 0 && (
          <div className="flex flex-col justify-center items-center min-h-[50vh]">
            <p className="text-center text-gray-500 text-lg font-semibold">
              No cars found that match your criteria.
            </p>
          </div>
        )}

        {/* Tombol See All */}
        {filteredCars.length > 8 && !showAll && (
          <div className="flex justify-center">
            <CustomButton
              title="See All Cars"
              containerStyles="bg-primary-blue text-white rounded-full mt-10"
              handleClick={() => setShowAll(true)}
            />
          </div>
        )}

        <BookingTerms />
      </div>
    </main>
  );
}
