import { Schema, model } from "mongoose";
const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    require: true,
  },
  userId: {
    type: Number,
    required: false,
  },
  tags: {
    type: Array,
    required: false,
  },
  reactions: {
    type: Number,
    required: false,
  },
});
export const PostModel = model("node-api", PostSchema, "posts");
