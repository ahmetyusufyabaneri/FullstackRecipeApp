import { useMutation } from "@tanstack/react-query";
import { FaTrashCan } from "react-icons/fa6";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const DeleteButton = ({ productId }) => {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: () =>
      api
        .delete(`/api/v1/recipes/${productId}`)
        .then((res) => console.log(res))
        .catch((err) => console.log(err)),

    onSuccess: () => {
      navigate("/");
      toast.success("Recipe deleted!", {
        autoClose: 2000,
      });
    },

    onError: () => {
      toast.error("An error occured!", {
        autoClose: 2000,
      });
    },
  });

  return (
    <button
      onClick={mutate}
      className="button bg-red-500 flex items-center gap-2 hover:bg-red-600"
    >
      <FaTrashCan />
      <span>Delete</span>
    </button>
  );
};

export default DeleteButton;
