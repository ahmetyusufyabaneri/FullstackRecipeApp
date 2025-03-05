import fs from "fs";

export const readRecipes = () => {
  try {
    const data = JSON.parse(fs.readFileSync("./data/data.json", "utf-8"));

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const writeRecipes = (data) => {
  try {
    fs.writeFileSync("./data/data.json", JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};
