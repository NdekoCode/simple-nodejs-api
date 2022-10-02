import express from "express";
import { httpServerConfig } from "./config/httpConfig";
import { dbConfig } from "./config/dbConfig";
import { router } from "./controllers/QuotesController";
const app = express();
httpServerConfig(app);
dbConfig();
const quotesRouter = router;
// MIDDLEWARE
// QUand l'utilisateur va vouloir aller sur l'url "/quotes" alors appele postsRoutes

app.use("/quotes", quotesRouter);
// ON fait ecouter notre serveur sur le port 3500
app.listen(process.env.PORT || 3500, () => {
  console.log("Server started... on http://localhost:3500");
});
