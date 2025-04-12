import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "../api";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaTrashCan } from "react-icons/fa6";

const Detail = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["recipe"],
    queryFn: () =>
      api
        .get(`/api/v1/recipes/${id}`)
        .then((res) => res.data.recipe)
        .catch((err) => console.log(err)),
  });

  console.log(data);

  return (
    <div>
      <div className="flex items-center justify-between">
        <Link to={-1} className="button flex items-center gap-2">
          <IoMdArrowRoundBack />
          <span>Back</span>
        </Link>
        <button className="button bg-red-500 flex items-center gap-2 hover:bg-red-600">
          <FaTrashCan />
          <span>Delete</span>
        </button>
      </div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        data && <div>{data?.recipeName}</div>
      )}
    </div>
  );
};

export default Detail;
