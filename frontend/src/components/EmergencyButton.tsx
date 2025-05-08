import { Button } from "@/components/ui/button";
import { useEmergency } from "@/hooks/useEmergency";

const EmergencyButton = () => {
  const { isEmergency, triggerEmergency } = useEmergency();
  return (
    <Button variant={"outline"} onClick={triggerEmergency} disabled={isEmergency} className="fixed m-10 top-0 right-0">
      Emergency
    </Button>
  );
};

export default EmergencyButton;
