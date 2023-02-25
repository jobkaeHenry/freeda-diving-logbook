import { DiveLogTypes } from "@/types/DiveLogTypes";

const scubaDiveModel: DiveLogTypes = {
  diveType: "scuba",
  location: { title: "", address: "경기도", lan: 0, lat: 0 },
  weather: {
    waterTemp: 15,
    airTemp: 15,
    weather: "sun",
    visibility: "good",
  },
  diveInfo: {
    depth: {
      average: 15,
      max: 25,
    },
    air: {
      in: 200,
      out: 40,
      nitrox: 0,
      isMultiTank: false,
    },
    gear: {
      suit: {
        type: "wet",
        thickness: 5,
      },
      weight: 0,
    },
  },
  personal: {
    waterTemp: "warm",
    content: undefined,
    image: undefined,
  },
};

export default scubaDiveModel;
