import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ANTD_COLORS_ARRAY } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getRandomColor = () =>
  ANTD_COLORS_ARRAY[Math.floor(Math.random() * ANTD_COLORS_ARRAY.length)];
