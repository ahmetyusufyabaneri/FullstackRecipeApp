import { readRecipes, writeRecipes } from "../model/recipeModel.js";
import crypto from "crypto";
import isValid from "../utils/isValid.js";

const data = readRecipes();

export const getAllRecipes = (req, res) => {
  let recipes = [...data];

  const search = req.query?.search?.toLowerCase();

  if (search) {
    recipes = data.filter((recipe) =>
      recipe.recipeName.toLowerCase().includes(search)
    );
  }

  const sort = req.query?.sort;

  if (sort) {
    recipes.sort((a, b) =>
      sort === "inc" ? a.recipeTime - b.recipeTime : b.recipeTime - a.recipeTime
    );
  }

  res.status(200).json({
    status: "Success!",
    results: recipes.length,
    recipes: recipes,
  });
};

export const createRecipe = (req, res) => {
  let newRecipe = req.body;

  if (isValid(newRecipe)) {
    return res.status(404).json({
      message: "Please complete all values!",
    });
  }

  const id = crypto.randomUUID();

  newRecipe = {
    ...newRecipe,
    id: id,
    photo: `https://picsum.photos/seed/${id}/200/300`,
  };

  data.push(newRecipe);

  writeRecipes(data);

  res.status(201).json({
    message: "New recipe created!",
    recipe: newRecipe,
  });
};

export const getRecipe = (req, res) => {};

export const updateRecipe = (req, res) => {};

export const deleteRecipe = (req, res) => {};
