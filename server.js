import express from "express";
import { httpServerConfig } from "./config/httpConfig";
import { dbConfig } from "./config/dbConfig";
const app = express();
httpServerConfig(app);
dbConfig();
app.get("/", (req, res) => {
  res.end("hello");
});
app.listen(process.env.PORT || 3500, () => {
  console.log("Server started... on http://localhost:3500");
});
