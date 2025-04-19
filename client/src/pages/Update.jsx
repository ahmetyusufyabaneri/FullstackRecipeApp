import { useNavigate, useParams } from "react-router-dom";
import Form from "../components/Form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../api";
import { toast } from "react-toastify";

const Update = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["recipe"],
    queryFn: () =>
      api
        .get(`api/v1/recipes/${id}`)
        .then((res) => res.data.recipe)
        .catch((err) => console.log(err)),
  });

  const { mutate } = useMutation({
    mutationFn: (updatedData) =>
      api.patch(`/api/v1/recipes/${id}`, updatedData),

    onSuccess: () => {
      toast.success("Recipe updated!");

      navigate(`/`);
    },

    onError: () => {
      toast.error("An error occured!");
    },
  });

  return (
    <div>
      <h1 className="text-red-400 text-3xl font-bold">Update Recipe</h1>
      <Form mutate={mutate} data={data} />
    </div>
  );
};

export default Update;
