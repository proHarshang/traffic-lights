import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ORANGE_DURATION } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getColor(index: number, activeSignal: number, timeLeft: number, isEmergency: boolean) {
  if (isEmergency) return "red"; // All red during emergency
  if (index !== activeSignal) return "red";
  if (timeLeft <= ORANGE_DURATION) return "orange";
  return "green";
}
