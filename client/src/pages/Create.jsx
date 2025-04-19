import { useMutation } from "@tanstack/react-query";
import api from "../api";
import { toast } from "react-toastify";
import Form from "../components/Form";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();

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

  return (
    <div>
      <h1 className="text-red-400 text-3xl font-bold">Create New Recipe</h1>
      <Form mutate={mutate} />
    </div>
  );
};

export default Create;
