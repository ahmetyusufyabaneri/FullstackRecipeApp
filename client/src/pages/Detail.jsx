import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "../api";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaTrashCan } from "react-icons/fa6";
import { GiMeal } from "react-icons/gi";
import { RiTimerLine } from "react-icons/ri";

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
        data && (
          <div className="mt-12">
            <h1 className="text-red-400 text-2xl font-semibold">
              {data?.recipeName}
            </h1>
            <div className="flex gap-4">
              <div className="badge">
                <GiMeal />
                <span>{data?.category}</span>
              </div>
              <div className="badge">
                <RiTimerLine />
                <span>{data?.recipeTime} min</span>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Detail;
