import { Schema, model } from "mongoose"

const schema = new Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  food: { type: String, required: true },
  servicesIncluded: { type: String, required: true },
  services: { type: String, required: true },
  entertainment: { type: String, required: true },
  contacts: { type: String, required: true },
  road: { type: String, required: true },
})

export default model("HRcomplex", schema)
