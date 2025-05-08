import type { Ways } from "../types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ConfigureSignalTimes from "@/components/ConfigureSignalTimes";
import RoadLayout from "@/components/RoadLayout";
import EmergencyButton from "@/components/EmergencyButton";
import { useTrafficLight } from "@/hooks/useTrafficLight";
import { useState } from "react";


const TrafficSignalsPage = () => {  
  const [refreshKey, setRefreshKey] = useState(0);
  const { way, setWay, reset } = useTrafficLight();

  
  const handleSave = () => {
    setRefreshKey((prevKey) => prevKey + 1); // Increment key to trigger re-render
  };

  return (
    <div key={refreshKey}>
      <RoadLayout />
      <EmergencyButton />
      <Card className="w-fit fixed my-10 mx-auto bottom-0 left-1/2 -translate-x-1/2">
        <CardContent className="flex gap-4">
          <Select onValueChange={(e) => setWay(e as Ways)} value={way}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Ways" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Ways</SelectLabel>
                <SelectItem value="3-way">3 Ways</SelectItem>
                <SelectItem value="4-way-type1">4 Ways - Type 1</SelectItem>
                <SelectItem value="4-way-type2">4 Ways - Type 2</SelectItem>
                <SelectItem value="5-way">5-ways</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <ConfigureSignalTimes way={way} onSave={handleSave}/>
          <Button variant={"secondary"} onClick={reset}>Reset</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrafficSignalsPage;
