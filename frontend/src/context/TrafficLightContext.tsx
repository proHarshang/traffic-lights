import React, { createContext, useEffect, useState } from "react";
import type { ConfigResult, Ways } from "@/types";
import api from "@/lib/api";
import { useEmergency } from "@/hooks/useEmergency";

interface TrafficLightContextProps {
  config: { [key: string]: number };
  activeSignal: number;
  timeLeft: number;
  reset: () => void;
  way: Ways;
  setWay: (way: Ways) => void;
}

export const TrafficLightContext = createContext<TrafficLightContextProps | undefined>(undefined);

export const TrafficLightProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [way, setWay] = useState<Ways>("3-way");
  const [config, setConfig] = useState<{ [key: string]: number }>({});
  const [activeSignal, setActiveSignal] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const { isEmergency } = useEmergency();

  const fetchConfig = async () => {
    try {
      setLoading(true);
      const result = await api.get("/config");
      const filtered = result.data.find((d: ConfigResult) => d.intersectionType === way);
      setConfig(filtered.config);
      setTimeLeft(Object.entries(filtered.config)[0][1] as number);
    } catch (error) {
      console.error("Error fetching config:", error);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    window.location.reload()
  };

  useEffect(() => {
    fetchConfig();
  }, [way]);

  useEffect(() => {
    if (loading) return;

    let timer: ReturnType<typeof setTimeout>;
    let countdown: ReturnType<typeof setInterval>;
    const signalEntries = Object.entries(config);

    const startCycle = (index: number) => {
      if (isEmergency) return;

      const [, duration] = signalEntries[index];
      setActiveSignal(index);
      setTimeLeft(duration);

      countdown = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(countdown);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      timer = setTimeout(() => {
        startCycle((index + 1) % signalEntries.length);
      }, duration * 1000);
    };

    startCycle(0);

    return () => {
      clearTimeout(timer);
      clearInterval(countdown);
    };
  }, [config, isEmergency, loading]);

  return (
    <TrafficLightContext.Provider value={{ config, activeSignal, timeLeft, reset, way, setWay }}>
      {children}
    </TrafficLightContext.Provider>
  );
};