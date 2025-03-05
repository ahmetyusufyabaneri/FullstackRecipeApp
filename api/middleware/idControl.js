import { readRecipes } from "../model/recipeModel.js";

const data = readRecipes();

const idControl = (req, res, next) => {
  const found = data.find((item) => item.id == req.params.id);

  if (!found) {
    return res.status(404).json({
      message: "No recipe found!",
    });
  }

  next();
};

export default idControl;
