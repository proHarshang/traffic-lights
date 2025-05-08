import { EMERGENCY_DURATION } from "@/lib/constants";
import React, { createContext, useState } from "react";

interface EmergencyContextProps {
  isEmergency: boolean;
  timeLeft: number;
  triggerEmergency: () => void;
}

export const EmergencyContext = createContext<EmergencyContextProps | undefined>(undefined);

export function EmergencyProvider({ children }: { children: React.ReactNode }) {
  const [isEmergency, setIsEmergency] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  const triggerEmergency = () => {
    setIsEmergency(true);
    setTimeLeft(EMERGENCY_DURATION);

    const countdown = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          setIsEmergency(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <EmergencyContext.Provider value={{ isEmergency, timeLeft, triggerEmergency }}>
      {children}
    </EmergencyContext.Provider>
  );
}
