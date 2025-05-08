import { useContext } from "react";
import { TrafficLightContext } from "@/context/TrafficLightContext";

export const useTrafficLight = () => {
  const context = useContext(TrafficLightContext);
  if (!context) {
    throw new Error("useTrafficLight must be used within a TrafficLightProvider");
  }
  return context;
};