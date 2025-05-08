import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ORANGE_DURATION } from "./constants";
import type { Ways } from "@/types";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getColor(
  index: number,
  activeSignal: number,
  timeLeft: number,
  isEmergency: boolean
) {
  if (isEmergency) return "red"; // All red during emergency
  if (index !== activeSignal) return "red";
  if (timeLeft <= ORANGE_DURATION) return "orange";
  return "green";
}

export const getFormSchema = (way: Ways) => {
  switch (way) {
    case "3-way":
      return z.object({
        signal1: z.coerce
          .number()
          .min(1, { message: "Signal 1 time is required" }),
        signal2: z.coerce
          .number()
          .min(1, { message: "Signal 1 time is required" }),
        signal3: z.coerce
          .number()
          .min(1, { message: "Signal 1 time is required" }),
      });
      break;
    case "4-way-type1":
      return z.object({
        signal1: z.coerce
          .number()
          .min(1, { message: "Signal 1 time is required" }),
        signal2: z.coerce
          .number()
          .min(1, { message: "Signal 2 time is required" }),
        signal3: z.coerce
          .number()
          .min(1, { message: "Signal 3 time is required" }),
        signal4: z.coerce
          .number()
          .min(1, { message: "Signal 4 time is required" }),
      });
      break;
    case "4-way-type2":
      return z.object({
        signal1: z.coerce
          .number()
          .min(1, { message: "Signal 1 time is required" }),
        signal2: z.coerce
          .number()
          .min(1, { message: "Signal 2 time is required" }),
        signal3: z.coerce
          .number()
          .min(1, { message: "Signal 3 time is required" }),
        signal4: z.coerce
          .number()
          .min(1, { message: "Signal 4 time is required" }),
      });
      break;
    case "5-way":
      return z.object({
        signal1: z.coerce
          .number()
          .min(1, { message: "Signal 1 time is required" }),
        signal2: z.coerce
          .number()
          .min(1, { message: "Signal 2 time is required" }),
        signal3: z.coerce
          .number()
          .min(1, { message: "Signal 3 time is required" }),
        signal4: z.coerce
          .number()
          .min(1, { message: "Signal 4 time is required" }),
        signal5: z.coerce
          .number()
          .min(1, { message: "Signal 5 time is required" }),
      });
      break;
    default:
      throw new Error("Invalid way type");
  }
};

export const getDefaultValues = (way: Ways) => {
  switch (way) {
    case "3-way":
      return {
        signal1: 10,
        signal2: 10,
        signal3: 10,
      };
    case "4-way-type1":
      return {
        signal1: 10,
        signal2: 10,
        signal3: 10,
        signal4: 10,
      };
    case "4-way-type2":
      return {
        signal1: 10,
        signal2: 10,
        signal3: 10,
        signal4: 10,
      };
    case "5-way":
      return {
        signal1: 10,
        signal2: 10,
        signal3: 10,
        signal4: 10,
        signal5: 10,
      };
    default:
      throw new Error("Invalid way type");
  }
};
