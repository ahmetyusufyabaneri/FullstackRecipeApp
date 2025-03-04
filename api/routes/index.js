import express from "express";
import {
  createRecipe,
  deleteRecipe,
  getAllRecipes,
  getRecipe,
  updateRecipe,
} from "../controllers/recipeController.js";

const router = express.Router();

router.route("/api/v1/recipes").get(getAllRecipes).post(createRecipe);

router
  .route("/api/v1/recipes/:id")
  .get(getRecipe)
  .patch(updateRecipe)
  .delete(deleteRecipe);

export default router;
