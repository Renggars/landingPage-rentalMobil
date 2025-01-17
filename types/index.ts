import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacture: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  drive: string;
  fuel_type: string;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
