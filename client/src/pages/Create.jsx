import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import api from "../api";
import { toast } from "react-toastify";
import Form from "../components/Form";

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
      <Form handleSubmit={handleSubmit} setIngredients={setIngredients} />
    </div>
  );
};

export default Create;
