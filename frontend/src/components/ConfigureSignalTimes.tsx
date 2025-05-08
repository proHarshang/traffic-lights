import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Dialog, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { Ways } from "@/types";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import api from "@/lib/api";
import { useEffect } from "react";

interface ConfigureSignalTimesProps {
  way: Ways;
}

const getFormSchema = (way: Ways) => {
  switch (way) {
    case "3-way":
      return z.object({
        signal1: z.coerce.number().min(1, { message: "Signal 1 time is required" }),
        signal2: z.coerce.number().min(1, { message: "Signal 1 time is required" }),
        signal3: z.coerce.number().min(1, { message: "Signal 1 time is required" }),
      });
      break;
    case "4-way-type1":
      return z.object({
        signal1: z.coerce.number().min(1, { message: "Signal 1 time is required" }),
        signal2: z.coerce.number().min(1, { message: "Signal 2 time is required" }),
        signal3: z.coerce.number().min(1, { message: "Signal 3 time is required" }),
        signal4: z.coerce.number().min(1, { message: "Signal 4 time is required" }),
      });
      break;
    case "4-way-type2":
      return z.object({
        signal1: z.coerce.number().min(1, { message: "Signal 1 time is required" }),
        signal2: z.coerce.number().min(1, { message: "Signal 2 time is required" }),
        signal3: z.coerce.number().min(1, { message: "Signal 3 time is required" }),
        signal4: z.coerce.number().min(1, { message: "Signal 4 time is required" }),
      });
      break;
    case "5-way":
      return z.object({
        signal1: z.coerce.number().min(1, { message: "Signal 1 time is required" }),
        signal2: z.coerce.number().min(1, { message: "Signal 2 time is required" }),
        signal3: z.coerce.number().min(1, { message: "Signal 3 time is required" }),
        signal4: z.coerce.number().min(1, { message: "Signal 4 time is required" }),
        signal5: z.coerce.number().min(1, { message: "Signal 5 time is required" }),
      });
      break;
    default:
      throw new Error("Invalid way type");
  }
};

const getDefaultValues = (way: Ways) => {
  switch (way) {
    case "3-way":
      return {
        signal1: 10,
        signal2: 10,
        signal3: 10,
      };
    case "4-way-type1":
      return {
        signal1: 10,
        signal2: 10,
        signal3: 10,
        signal4: 10,
      };
    case "4-way-type2":
      return {
        signal1: 10,
        signal2: 10,
        signal3: 10,
        signal4: 10,
      };
    case "5-way":
      return {
        signal1: 10,
        signal2: 10,
        signal3: 10,
        signal4: 10,
        signal5: 10,
      };
    default:
      throw new Error("Invalid way type");
  }
};

const ConfigureSignalTimes = ({ way }: ConfigureSignalTimesProps) => {
  const formSchema = getFormSchema(way);
  type FormSchema = z.infer<ReturnType<typeof getFormSchema>>;

  const defaultValues = getDefaultValues(way);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  useEffect(() => {
    form.reset(getDefaultValues(way));
  }, [way]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await api.put("/config/", { intersectionType: way, config: values });
  }

  if (way === "3-way") {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Configure Signal Times</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{way}</DialogTitle>
            <DialogDescription>Configure Signal Times for {way}</DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="space-y-4 py-4">
                <FormField
                  control={form.control}
                  name="signal1"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="signal1">Signal 1 - Time (in seconds)</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
                <FormField
                  control={form.control}
                  name="signal2"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="signal2">Signal 2 - Time (in seconds)</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
                <FormField
                  control={form.control}
                  name="signal3"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="signal3">Signal 3 - Time (in seconds)</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
              </div>
              <DialogFooter>
                <Button type="submit" className="w-full">
                  Save
                </Button>
              </DialogFooter>
            </form>
          </Form>
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
          <DialogHeader>
            <DialogTitle>{way}</DialogTitle>
            <DialogDescription>Configure Signal Times for {way}</DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="space-y-4 py-4">
                <FormField
                  control={form.control}
                  name="signal1"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="signal1">Signal 1 - Time (in seconds)</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
                <FormField
                  control={form.control}
                  name="signal2"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="signal2">Signal 2 - Time (in seconds)</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
                <FormField
                  control={form.control}
                  name="signal3"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="signal3">Signal 3 - Time (in seconds)</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
                <FormField
                  control={form.control}
                  name="signal4"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="signal4">Signal 4 - Time (in seconds)</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
              </div>
              <DialogFooter>
                <Button type="submit" className="w-full">
                  Save
                </Button>
              </DialogFooter>
            </form>
          </Form>
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
          <DialogHeader>
            <DialogTitle>{way}</DialogTitle>
            <DialogDescription>Configure Signal Times for {way}</DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="space-y-4 py-4">
                <FormField
                  control={form.control}
                  name="signal1"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="signal1">Signal 1 - Time (in seconds)</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
                <FormField
                  control={form.control}
                  name="signal2"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="signal2">Signal 2 - Time (in seconds)</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
                <FormField
                  control={form.control}
                  name="signal3"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="signal3">Signal 3 - Time (in seconds)</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
                <FormField
                  control={form.control}
                  name="signal4"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="signal4">Signal 4 - Time (in seconds)</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
              </div>
              <DialogFooter>
                <Button type="submit" className="w-full">
                  Save
                </Button>
              </DialogFooter>
            </form>
          </Form>
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
          <DialogHeader>
            <DialogTitle>{way}</DialogTitle>
            <DialogDescription>Configure Signal Times for {way}</DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="space-y-4 py-4">
                <FormField
                  control={form.control}
                  name="signal1"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="signal1">Signal 1 - Time (in seconds)</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
                <FormField
                  control={form.control}
                  name="signal2"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="signal2">Signal 2 - Time (in seconds)</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
                <FormField
                  control={form.control}
                  name="signal3"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="signal3">Signal 3 - Time (in seconds)</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
                <FormField
                  control={form.control}
                  name="signal4"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="signal4">Signal 4 - Time (in seconds)</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
                <FormField
                  control={form.control}
                  name="signal5"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="signal5">Signal 5 - Time (in seconds)</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
              </div>
              <DialogFooter>
                <Button type="submit" className="w-full">
                  Save
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    );
  }
};

export default ConfigureSignalTimes;
