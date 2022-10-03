import express from "express";
import bodyParser from "body-parser";
import { httpServerConfig } from "./config/httpConfig";
import { dbConfig } from "./config/dbConfig";
import { router } from "./controllers/QuotesController";
import mongoose from "mongoose";

const app = express();
httpServerConfig(app);
dbConfig();
const quotesRouter = router;
// MIDDLEWARE

// body-parser pour avoir le requete dans le corps de notre application
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // Cela permet de parser du json, il est equivalent à JSON.parse application/json parser
// QUand l'utilisateur va vouloir aller sur l'url "/quotes" alors appele postsRoutes
app.use("/quotes", quotesRouter);
// ON fait ecouter notre serveur sur le port 3500
app.listen(process.env.PORT || 3500, () => {
  console.log("Server started... on http://localhost:3500");
});
