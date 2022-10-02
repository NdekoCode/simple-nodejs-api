import { Router } from "express";
import { QuoteModel } from "../models/QuoteModel";
export const router = Router();
// On partira de la racine du site,cette route ici "/" est equivalent à http://localhost:3500/posts
router.get("/", (req, res) => {
  QuoteModel.find((error, posts) => {
    if (error) return error;
    console.log(posts);
    res.json(posts);
  });
});
