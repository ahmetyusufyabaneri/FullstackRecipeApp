import express from "express";
import {
  createRecipe,
  deleteRecipe,
  getAllRecipes,
  getRecipe,
  updateRecipe,
} from "../controllers/recipeController.js";
import idControl from "../middleware/idControl.js";

const router = express.Router();

router.route("/api/v1/recipes").get(getAllRecipes).post(createRecipe);

router
  .route("/api/v1/recipes/:id")
  .get(idControl, getRecipe)
  .patch(idControl, updateRecipe)
  .delete(idControl, deleteRecipe);

export default router;
