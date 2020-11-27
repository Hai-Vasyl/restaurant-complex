import { Schema, model, Types } from "mongoose"

const schema = new Schema({
  buyer: { type: Types.ObjectId, ref: "User", required: true },
  hrComplex: { type: Types.ObjectId, ref: "HRcomplex", required: true },
  price: { type: Number, required: true },
  settlement: { type: Date, required: true },
  eviction: { type: Date, required: true },
  date: { type: Date, required: true },
})

export default model("Order", schema)
