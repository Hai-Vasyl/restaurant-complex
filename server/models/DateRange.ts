import { Schema, model, Types } from "mongoose"

const schema = new Schema({
  settlement: { type: Date, required: true },
  eviction: { type: Date, required: true },
  hrComplex: { type: Types.ObjectId, ref: "HRcomplex", required: true },
  booked: { type: Boolean, required: true, default: false },
  price: { type: Number, required: true },
})

export default model("DateRange", schema)
