import { DialogContent } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Dialog, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { Ways } from "@/types";

interface ConfigureSignalTimesProps {
  way: Ways;
}

const ConfigureSignalTimes = ({ way }: ConfigureSignalTimesProps) => {
  if (way === "3-way") {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Configure Signal Times</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="signal1">Signal 1 - Time (in seconds)</Label>
              <Input id="signal1" type="number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signal2">Signal 2 - Time (in seconds)</Label>
              <Input id="signal2" type="number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signal3">Signal 3 - Time (in seconds)</Label>
              <Input id="signal3" type="number" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full">
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  } else if (way === "4-way-type1") {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Configure Signal Times</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="signal1">Signal 1 - Time (in seconds)</Label>
              <Input id="signal1" type="number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signal2">Signal 2 - Time (in seconds)</Label>
              <Input id="signal2" type="number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signal3">Signal 3 - Time (in seconds)</Label>
              <Input id="signal3" type="number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signal4">Signal 4 - Time (in seconds)</Label>
              <Input id="signal4" type="number" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full">
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  } else if (way === "4-way-type2") {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Configure Signal Times</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="signal1">Signal 1 - Time (in seconds)</Label>
              <Input id="signal1" type="number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signal2">Signal 2 - Time (in seconds)</Label>
              <Input id="signal2" type="number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signal3">Signal 3 - Time (in seconds)</Label>
              <Input id="signal3" type="number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signal4">Signal 4 - Time (in seconds)</Label>
              <Input id="signal4" type="number" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full">
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  } else if (way === "5-way") {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Configure Signal Times</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="signal1">Signal 1 - Time (in seconds)</Label>
              <Input id="signal1" type="number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signal2">Signal 2 - Time (in seconds)</Label>
              <Input id="signal2" type="number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signal3">Signal 3 - Time (in seconds)</Label>
              <Input id="signal3" type="number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signal4">Signal 4 - Time (in seconds)</Label>
              <Input id="signal4" type="number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signal5">Signal 5 - Time (in seconds)</Label>
              <Input id="signal5" type="number" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full">
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }
};

export default ConfigureSignalTimes;
