import { Router } from "express";
import { QuoteModel } from "../models/QuoteModel";
export const router = Router();
// On partira de la racine du site,cette route ici "/" est equivalent à http://localhost:3500/quotes
router.get("/", (req, res) => {
  QuoteModel.find((error, posts) => {
    if (error) {
      console.log("Pas de quotes trouver ");
      return error;
    }
    console.log(posts);
    res.json(posts);
  });
});
//  est equivalent à http://localhost:3500/quotes en POST
router.post("/", (req, res) => {
  const quotesRecord = new QuoteModel({
    quote: req.body.quote,
    author: req.body.author,
  });
  quotesRecord.save((err, data) => {
    if (err) {
      console.log("Erreur lors de l'insertion des quotes");
      return err;
    }
    res.send(data);
  });
});
