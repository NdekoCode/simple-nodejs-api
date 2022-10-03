import { Router } from "express";
import { QuoteModel } from "../models/QuoteModel";
import { isEmpty, isEmptyObject } from "../utils/utils";
export const router = Router();
// On partira de la racine du site,cette route ici "/" est equivalent à http://localhost:3500/quotes
router.get("/", (req, res) => {
  // On veut recuperer toutes les citations qui se trouvent dans la base de données
  QuoteModel.find((error, posts) => {
    if (error) {
      console.log("Pas de quotes trouver ");
      return error;
    }
    // On retournes ces informations au format JSON
    res.json(posts);
  });
});
//  est equivalent à http://localhost:3500/quotes en POST
// On veut inserer une citation dans la base de données
router.post("/", (req, res) => {
  // Si le corps de la requete n'est pas vide
  if (!isEmptyObject(req.body)) {
    // On recupère les informations qui nous interesse dans l'API
    const { author, quote } = req.body;
    // Si les champs requises pour l'insertion sont vide alors
    if (isEmpty(author) || isEmpty(quote)) {
      res.status(400); // On emmet une requete 400
      // On envois une alert
      return res.send({
        statusCode: 400,
        alert: "Veuiller remplir tous les champs",
        type: "danger",
      });
    }
    // On verifie si la citation existe déjà dans la base de données
    QuoteModel.exists({ quote }, (err, data) => {
      if (err) {
        // S'il y a une erreur on retourne un status 400
        res.status(400);
        // On envois un alert
        return res.send({
          statusCode: 400,
          alert: "Erreur lors de la verification des données",
          type: "danger",
        });
      }
      // On verifie si dans les resultat on constate que les données oxiste alors on envois une une alert
      if (data) {
        res.status(200);
        return res.send({
          statusCode: 200,
          alert: "La citation existe déja !",
          type: "infos",
        });
      } else {
        // On insere les données dans la base de données
        const quotesRecord = new QuoteModel({ quote, author });
        quotesRecord.save((err, data) => {
          if (err) {
            console.log("Erreur lors de l'insertion des quotes");
            throw err;
          }
          return res.status(200).send(data);
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
