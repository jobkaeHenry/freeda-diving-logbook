import { DiveLogTypes } from "@/types/DiveLogTypes";
import dayjs from "dayjs";

const now = new Date()
const parsedDate = dayjs(now).format('YYYY-MM-DD')
const parsedTime = dayjs(now).format('HH:mm')
const parsedTimePlus =dayjs(now).add(1,'hour').format('HH:mm')

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
      in: parsedTime,
      out: parsedTimePlus,
      date: parsedDate,
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
