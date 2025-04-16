import { Link } from "react-router-dom";
import Field from "./Field";
import Select from "react-select/creatable";

const Form = ({ handleSubmit, setIngredients }) => {
  return (
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
  );
};

export default Form;
