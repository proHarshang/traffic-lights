import { useState } from "react";
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

const TrafficSignalsPage = () => {
  const [way, setWay] = useState<Ways>("3-way");

  return (
    <div>
      <RoadLayout way={way} />
      <Button variant={"outline"} className="fixed m-10 top-0 right-0">
        Emergency
      </Button>
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
          <ConfigureSignalTimes way={way} />
          <Button variant={"secondary"}>Reset</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrafficSignalsPage;
