import { DiveLogTypes } from "@/types/DiveLogTypes";

const defaultDate = new Date()
console.log(defaultDate)

const scubaDiveModel: DiveLogTypes = {
  diveType: "scuba",
  location: { title: "", address: "", lng: 0, lat: 0 },
  weatherInfo: {
    waterTemp: 15,
    airTemp: 15,
    weather: "sun",
    visibility: "good",
  },
  diveInfo: {
    time: {
      in: "",
      out: "",
      date: "2023-02-28",
    },
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
        thickness: 3,
      },
      weight: 5,
    },
  },
  personal: {
    waterTemp: "warm",
    content: undefined,
    image: undefined,
  },
};

export default scubaDiveModel;
