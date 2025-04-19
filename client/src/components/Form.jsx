import { Link } from "react-router-dom";
import { useState } from "react";
import Field from "./Field";
import Select from "react-select/creatable";

const Form = ({ mutate, data }) => {
  const [ingredients, setIngredients] = useState(data?.ingredients || []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    let newRecipe = Object.fromEntries(formData.entries());

    newRecipe.instructions = newRecipe.instructions.split(",");

    newRecipe.ingredients = ingredients;

    if (data) {
      newRecipe.id = data.id;
    }

    mutate(newRecipe);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-8 my-8 mx-auto max-w-2xl"
    >
      <Field label="Recipe Name">
        <input
          name="recipeName"
          className="input"
          defaultValue={data?.recipeName}
          required
        />
      </Field>
      <Field label="Recipe Category">
        <input
          name="category"
          className="input"
          defaultValue={data?.category}
          required
        />
      </Field>
      <Field label="Recipe Time (min)">
        <input
          name="recipeTime"
          className="input"
          defaultValue={data?.recipeTime}
          required
        />
      </Field>
      <Field label="Ingredients">
        <Select
          onChange={(options) =>
            setIngredients(options.map((option) => option.value))
          }
          name="ingredients"
          value={ingredients.map((ingredient) => ({
            value: ingredient,
            label: ingredient,
          }))}
          isMulti
          placeholder={false}
          required
        />
      </Field>
      <Field label="Instructions (seperate with ,)">
        <textarea
          name="instructions"
          className="input"
          defaultValue={data?.instructions}
          required
        />
      </Field>
      <Field label="Suggestion">
        <textarea
          name="servingSuggestion"
          defaultValue={data?.servingSuggestion}
          className="input"
          required
        />
      </Field>
      <div className="flex justify-end gap-4">
        <Link
          to="/"
          className="bg-gray-300 px-6 py-2 rounded-md text-lg duration-300 hover:bg-gray-400"
        >
          Back
        </Link>
        <button className="bg-red-400 text-white px-6 py-2 rounded-md text-lg cursor-pointer duration-300 hover:bg-red-500">
          {data ? "Update" : "Create"}
        </button>
      </div>
    </form>
  );
};

export default Form;
