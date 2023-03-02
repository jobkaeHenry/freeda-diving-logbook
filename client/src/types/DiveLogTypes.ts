import { Cordination } from "./Cordination";

export interface ServerSideDiveLogType extends DiveLogTypes {
  id: string;
  _id: string;
  author: string;
  __v:string;
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
        type: "Wet" | "Semi" | "Dry" | "Skin";
        thickness: number;
      };
      weight: number;
    };
  };
  personal: {
    waterTemp: "warm" | "cold" | "hot";
    content: string|undefined;
    image: string  | undefined
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
