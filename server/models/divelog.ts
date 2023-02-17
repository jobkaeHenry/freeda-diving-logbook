import { model, Schema } from "mongoose";

const divLogSchema = new Schema({
  author: { type: String, require: true },
  diveType: { type: String, require: true },
  location: {
    title: { type: String, required: true },
    address: { type: String, required: true },
    lan: { type: Number, required: true },
    lat: { type: Number, required: true },
  },
  weather: {
    waterTemp: { type: Number, require: false },
    airTemp: { type: Number, require: false },
    weather: { type: String, require: false },
    visibility: { type: String, require: false },
  },
  diveInfo: {
    dept: {
      average: { type: Number, require: true },
      max: { type: Number, require: true },
    },
    air: {
      in: { type: Number, require: true },
      out: { type: Number, require: true },
      nitrox: { type: Number, require: true },
      isMultiTank: { type: Boolean, require: true },
    },
    gear: {
      suit: {
        type: { type: String, require: true },
        thickness: { type: Number, required: true },
      },
      weight: { type: Number, require: true },
    },
  },
  personal: {
    waterTemp: { type: String, required: true },
    content: { type: String, required: false },
    image: { type: String, require: false },
  },
});

export const DiveLog = model("DiveLog", divLogSchema);
