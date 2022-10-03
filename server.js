import express from "express";
import bodyParser from "body-parser";
import { httpServerConfig } from "./config/httpConfig";
import { dbConfig } from "./config/dbConfig";
import { router } from "./controllers/QuotesController";
/** Les CORS vont nous permettre de rendre notre API accessible sur internet et de n'importe où
 * - Une fois que l'on a appeler CORS il faut en faire un middleware
 */
import cors from "cors";

const app = express();
httpServerConfig(app);
dbConfig();
const quotesRouter = router;
// MIDDLEWARE

// body-parser pour avoir le requete dans le corps de notre application
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // Cela permet de parser du json, il est equivalent à JSON.parse application/json parser
// En mettant CORS sans condition cela veut dire que l'on donne accès à tout le monde et n'importe qui pourra y avoir acces
app.use(cors());
// app.use(cors({origin:"https://cdpn.io"}));// ICI on dit que seul les seul copen pourra acceder à notre API
// app.use(cors({origin:"https://localhost:3000"}));// ICI on dit que seul l'application qui se lance au PORT 3000 pourra acceder à notre API, cela peut etre l'exemple d'une application React
// QUand l'utilisateur va vouloir aller sur l'url "/quotes" alors appele postsRoutes
app.use("/quotes", quotesRouter);
// ON fait ecouter notre serveur sur le port 3500
app.listen(process.env.PORT || 3500, () => {
  console.log("Server started... on http://localhost:3500");
});
