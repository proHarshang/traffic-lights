export type Ways = "3-way" | "4-way-type1" | "4-way-type2" | "5-way";


export interface Config {
    [key: string]: number;
  }

export interface ConfigResult {
    id: string;
    intersectionType: string;
    config: Config;
    createdAt: string;
    updatedAt: string;
  }