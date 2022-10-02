import { model, Schema } from "mongoose";
const QuoteSchema = new Schema({
  author: {
    type: String,
    required: true,
  },
  quote: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});
export const QuoteModel = model("node-api", QuoteSchema, "quotes");
