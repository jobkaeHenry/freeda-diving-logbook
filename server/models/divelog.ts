import mongoose, { model, Schema } from "mongoose";

const divLogSchema = new Schema({
  author: { type: mongoose.Types.ObjectId, require: true, ref: "User" },
  diveType: { type: String, require: true },
  location: {
    title: { type: String, required: true },
    address: { type: String, required: false },
    lng: { type: Number, required: false },
    lat: { type: Number, required: false },
  },
  weatherInfo: {
    waterTemp: { type: Number, require: true },
    airTemp: { type: Number, require: true },
    weather: { type: String, require: true },
    visibility: { type: String, require: true },
  },
  diveInfo: {
    time: {
      in: { type: String, require: true },
      out: { type: String, require: true },
      date: { type: String, require: false },
    },
    depth: {
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
    content: { type: String || undefined, required: false },
    image: { type: String || undefined, require: false },
  },
});

export const DiveLog = model("DiveLog", divLogSchema);
