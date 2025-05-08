import { useContext } from "react";
import { EmergencyContext } from "@/context/EmergencyContext";

export const useEmergency = () => {
  const context = useContext(EmergencyContext);
  if (!context) {
    throw new Error("useEmergency must be used within EmergencyProvider");
  }
  return context;
};
