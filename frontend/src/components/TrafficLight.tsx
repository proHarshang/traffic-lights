import { useEmergency } from "@/hooks/useEmergency";

interface TrafficLightProps {
  color: string;
  timeLeft: number | null;
}

const TrafficLight = ({ color, timeLeft }: TrafficLightProps) => {
  const { isEmergency, timeLeft: emergencyTimeLeft } = useEmergency();

  return (
    <div className="bg-black rounded-xl flex flex-col items-center gap-3 h-fit w-fit p-4 justify-evenly">
      {["green", "orange", "red"].map((c) => {
        return (
          <div className={`rounded-full aspect-square size-7 bg-${c}-500 ${color === c ? "" : "opacity-50"}`}>
            {timeLeft && color === c ? (isEmergency ? emergencyTimeLeft : timeLeft) : null}
          </div>
        );
      })}
    </div>
  );
};

export default TrafficLight;
