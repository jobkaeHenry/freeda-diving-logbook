import { Cordination } from "./Cordination";

export interface ServerSideDiveLogType extends DiveLogTypes {
  id: number;
  author: number;
}

export interface DiveLogTypes {
  diveType: "scuba" | "free";
  location: LocationInfo;
  weatherInfo: WeatherInterface;

  diveInfo: {
    time: {
      in: string,
      out: string,
      date: string,
    },
    depth: {
      average: number;
      max: number;
    };
    air: {
      in: number;
      out: number;
      nitrox: number | undefined;
      isMultiTank: boolean;
    };
    gear: {
      suit: {
        type: "wet" | "semi" | "dry" | "skin";
        thickness: number;
      };
      weight: number;
    };
  };
  personal: {
    waterTemp: "warm" | "cold" | "hot";
    content: string|undefined;
    image: File|undefined;
  };
}

export interface LocationInfo extends Cordination {
  title: string;
  address: string;
}

export interface WeatherInterface {
  waterTemp: number;
  airTemp: number;
  weather: "sun" | "fog" | "rain" | "snow";
  visibility: "good" | "normal" | "bad";
}
