import express from "express";
import { httpServerConfig } from "./config/httpConfig";
import { dbConfig } from "./config/dbConfig";
import { router } from "./controllers/PostsController";
const app = express();
httpServerConfig(app);
dbConfig();
const postsRoutes = router;

// MIDDLEWARE
// A chaque fois que l'on va appeler la route "/" alors appele postsRoutes
app.use("/", postsRoutes);

// ON fait ecouter notre serveur sur le port 3500
app.listen(process.env.PORT || 3500, () => {
  console.log("Server started... on http://localhost:3500");
});
