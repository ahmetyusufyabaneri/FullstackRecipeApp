import Field from "../components/Field";
import Select from "react-select/creatable";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import api from "../api";
import { toast } from "react-toastify";

const Create = () => {
  const navigate = useNavigate();

  const [ingredients, setIngredients] = useState([]);

  const { mutate } = useMutation({
    mutationFn: (newRecipe) =>
      api
        .post("/api/v1/recipes", newRecipe)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err)),

    onSuccess: () => {
      toast.success("New recipe created!");
      navigate("/");
    },

    onError: () => {
      toast.error("An error occured!");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    let newRecipe = Object.fromEntries(formData.entries());

    newRecipe.instructions = newRecipe.instructions.split(",");

    newRecipe.ingredients = ingredients;

    mutate(newRecipe);
  };

  return (
    <div>
      <h1 className="text-red-400 text-3xl font-bold">Create New Recipe</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 my-8 mx-auto max-w-2xl"
      >
        <Field label="Recipe Name">
          <input name="recipeName" className="input" required />
        </Field>
        <Field label="Recipe Category">
          <input name="category" className="input" required />
        </Field>
        <Field label="Recipe Time (min)">
          <input name="recipeTime" className="input" required />
        </Field>
        <Field label="Ingredients">
          <Select
            onChange={(options) =>
              setIngredients(options.map((option) => option.value))
            }
            name="ingredients"
            isMulti
            placeholder={false}
            required
          />
        </Field>
        <Field label="Instructions (seperate with ,)">
          <textarea name="instructions" className="input" required />
        </Field>
        <Field label="Suggestion">
          <textarea name="servingSuggestion" className="input" required />
        </Field>
        <div className="flex justify-end gap-4">
          <Link
            to="/"
            className="bg-gray-300 px-6 py-2 rounded-md text-lg duration-300 hover:bg-gray-400"
          >
            Back
          </Link>
          <button className="bg-red-400 px-6 py-2 rounded-md text-lg cursor-pointer duration-300 hover:bg-red-500">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
