import TrafficLight from "@/components/TrafficLight";
import { getColor } from "@/lib/utils";
import { useEmergency } from "@/hooks/useEmergency";
import { useTrafficLight } from "@/hooks/useTrafficLight";

const RoadLayout = () => {  
  const { isEmergency } = useEmergency();
  const { config, activeSignal, timeLeft } = useTrafficLight();

  return (
    <div className="grid grid-cols-2 justify-items-center gap-4 p-4">
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
