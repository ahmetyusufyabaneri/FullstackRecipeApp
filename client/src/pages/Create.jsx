import Field from "../components/Field";
import Select from "react-select/creatable";
import { options } from "../constants";

const Create = () => {
  return (
    <div>
      <h1 className="text-red-400 text-3xl font-bold">Create New Recipe</h1>
      <form className="flex flex-col gap-10 my-8 mx-auto max-w-2xl">
        <Field label="Recipe Name">
          <input
            type="text"
            name="recipeName"
            className="bg-white p-2 rounded-md focus:outline-red-400"
          />
        </Field>
        <Field label="Recipe Category">
          <input
            type="text"
            name="recipeName"
            className="bg-white p-2 rounded-md focus:outline-red-400"
          />
        </Field>
        <Field label="Recipe Time">
          <input
            type="text"
            name="recipeName"
            className="bg-white p-2 rounded-md focus:outline-red-400"
          />
        </Field>
        <Field label="Ingredients">
          <Select options={options} isMulti placeholder={false} />
        </Field>
        <Field label="Instructions">
          <input
            type="text"
            name="recipeName"
            className="bg-white p-2 rounded-md focus:outline-red-400"
          />
        </Field>
        <Field label="Suggestions"></Field>
      </form>
    </div>
  );
};

export default Create;
