import { Schema, model, Types } from "mongoose"

const schema = new Schema({
  path: { type: String, required: true },
  hrComplex: { type: Types.ObjectId, ref: "HRcomplex", required: true },
  title: { type: String, default: "" },
  description: { type: String, default: "" },
  date: { type: Date, required: true },
})

export default model("Image", schema)
