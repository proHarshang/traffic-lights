import type { Ways } from "@/types";
import TrafficLight from "@/components/TrafficLight";
import { useEffect, useState } from "react";
import { getColor } from "@/lib/utils";
import { useEmergency } from "@/hooks/useEmergency";

interface RoadLayoutProps {
  way: Ways;
}

const config = {
  signal1: 10,
  signal2: 20,
  signal3: 30,
  signal4: 40,
};

const RoadLayout = ({ way }: RoadLayoutProps) => {
  const signalEntries = Object.entries(config);
  const [activeSignal, setActiveSignal] = useState(0); // index
  const [timeLeft, setTimeLeft] = useState(signalEntries[0][1]);

  const { isEmergency } = useEmergency();

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    let countdown: ReturnType<typeof setTimeout>;

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
  }, [isEmergency]);

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {signalEntries.map(([key], index) => {
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
