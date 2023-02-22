export interface DiveLog {
  id: number;
  author: number;
  type: "scuba" | "free";
  location: LocationInfo;
  weatherInfo: WeatherInterface;
  diveInfo: {
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
    content: string;
    image: File;
  };
}

export interface LocationInfo {
  title: string;
  address: string;
  lan: number;
  lat: number;
}

export interface WeatherInterface {
  waterTemp: number;
  airTemp: number;
  weather: "sun" | "fog" | "rain" | "snow";
  visibility: "good" | "normal" | "bad";
}
