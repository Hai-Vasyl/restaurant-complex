import { Schema, model, Types } from "mongoose"

const schema = new Schema({
  hrComplex: { type: Types.ObjectId, ref: "HRcomplex", required: true },
  owner: { type: Types.ObjectId, ref: "User", required: true },
  content: { type: String, required: true },
  date: { type: Date, required: true },
  response: { type: Types.ObjectId, ref: "Response" },
})

export default model("Response", schema)
