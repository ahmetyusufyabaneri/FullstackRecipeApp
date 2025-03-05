const reqFields = [
  "recipeName",
  "category",
  "recipeTime",
  "servingSuggestion",
  "ingredients",
  "instructions",
];

const isValid = (data) => {
  return reqFields.some((field) => !data[field]);
};

export default isValid;
