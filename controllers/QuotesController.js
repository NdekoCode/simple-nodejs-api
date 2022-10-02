import { Router } from "express";
import { QuoteModel } from "../models/QuoteModel";
import { isEmpty, isEmptyObject } from "../utils/utils";
export const router = Router();
// On partira de la racine du site,cette route ici "/" est equivalent à http://localhost:3500/quotes
router.get("/", (req, res) => {
  QuoteModel.find((error, posts) => {
    if (error) {
      console.log("Pas de quotes trouver ");
      return error;
    }
    res.json(posts);
  });
});
//  est equivalent à http://localhost:3500/quotes en POST
router.post("/", (req, res) => {
  if (!isEmptyObject(req.body)) {
    const { author, quote } = req.body;
    if (isEmpty(author) || isEmpty(quote)) {
      res.status(400);
      return res.send({
        alert: "Veuiller remplir tous les champs",
        type: "danger",
      });
    }
    QuoteModel.exists({ quote }, (err, data) => {
      if (err) {
        res.status(400);
        return res.send({
          alert: "Erreur lors de la verification des données",
          type: "danger",
        });
      }
      if (data) {
        res.status(200);
        return res.send({
          alert: "La citation existe déja !",
          type: "infos",
        });
      } else {
        const quotesRecord = new QuoteModel({ quote, author });
        quotesRecord.save((err, data) => {
          if (err) {
            console.log("Erreur lors de l'insertion des quotes");
            throw err;
          }
          res.status(200);
          return res.send(data);
        });
      }
    });
  } else {
    res.status(400);
    return res.send({
      alert: "Les données demander ne sont pas disponible, ressayer",
      type: "danger",
    });
  }
});
