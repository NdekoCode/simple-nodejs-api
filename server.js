import express from "express";
import mongoose from "mongoose";
import fs from "fs";

const app = express();
mongoose.connect(
  "mongodb://localhost:27017",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error, result) => {
    if (error) throw error;
    console.log("MongoDB connected", result);
  }
);
app.get("/", (req, res) => {
  res.end("hello");
});
app.listen(process.env.PORT || 3500, () => {
  console.log("Server started... on http://localhost:3500");
});
