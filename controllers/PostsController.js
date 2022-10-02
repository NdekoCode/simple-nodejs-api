import { Router } from "express";
import { QuoteModel } from "../models/QuoteModel";
export const router = Router();
router.get("/", (req, res) => {
  QuoteModel.find((error, posts) => {
    if (error) return error;
    console.log(posts);
  });
});
