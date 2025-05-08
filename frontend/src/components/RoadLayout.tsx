import type { Ways } from "@/types";
import TrafficLight from "@/components/TrafficLight";
import { useEffect, useState } from "react";
import { getColor } from "@/lib/utils";
import { useEmergency } from "@/hooks/useEmergency";
import api from "@/lib/api";

interface RoadLayoutProps {
  way: Ways;
}
interface Config {
  [key: string]: number;
}

interface ConfigResult {
  id: string;
  intersectionType: string;
  config: Config;
  createdAt: string;
  updatedAt: string;
}

const RoadLayout = ({ way }: RoadLayoutProps) => {
  const [config, setConfig] = useState<Config>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [activeSignal, setActiveSignal] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(0);

  const { isEmergency } = useEmergency();

  useEffect(() => {
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

    fetchConfig();
  }, [way]);

  useEffect(() => {
    if (loading) return;

    let timer: ReturnType<typeof setTimeout>;
    let countdown: ReturnType<typeof setTimeout>;
    const signalEntries = Object.entries(config);

    const startCycle = (index: number) => {
      if (isEmergency) return;

      const [, duration] = signalEntries[index];
      setActiveSignal(index);
      setTimeLeft(duration);

      // Countdown UI update
      countdown = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(countdown);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      // Move to next signal after duration
      timer = setTimeout(() => {
        startCycle((index + 1) % signalEntries.length);
      }, duration * 1000);
    };

    startCycle(0);

    return () => {
      clearTimeout(timer);
      clearInterval(countdown);
    };
  }, [isEmergency, loading]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {Object.entries(config).map(([key], index) => {
        const color = getColor(index, activeSignal, timeLeft, isEmergency);
        return (
          <div key={key}>
            <TrafficLight color={color} timeLeft={index === activeSignal ? timeLeft : null} />
          </div>
        );
      })}
    </div>
  );
};

export default RoadLayout;
