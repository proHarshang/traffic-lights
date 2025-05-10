import { useEmergency } from "@/hooks/useEmergency";

interface TrafficLightProps {
  color: string;
  timeLeft: number | null;
}

const TrafficLight = ({ color, timeLeft }: TrafficLightProps) => {
  const { isEmergency, timeLeft: emergencyTimeLeft } = useEmergency();

  return (
    <div className="bg-black rounded-xl flex flex-col items-center gap-3 h-fit w-fit p-4 justify-evenly">
      {[["green","bg-green-500"], ["orange","bg-orange-500"], ["red", "bg-red-500"]].map((c) => {
        console.log(c);  
        return (
          <div key={c[0]} className={`rounded-full aspect-square size-7 ${c[1]} ${color === c[0] ? "" : "opacity-50"}`}>
            {timeLeft && color === c[0] ? (isEmergency ? emergencyTimeLeft : timeLeft) : null}
          </div>
        );
      })}
    </div>
  );
};

export default TrafficLight;
