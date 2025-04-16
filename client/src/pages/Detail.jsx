import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "../api";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { IoMdArrowRoundBack } from "react-icons/io";
import DetailCard from "../components/DetailCard";
import DeleteButton from "../components/DeleteButton";

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

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between">
        <Link to={-1} className="button flex items-center gap-2">
          <IoMdArrowRoundBack />
          <span>Back</span>
        </Link>
        <DeleteButton productId={data?.id} />
      </div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        data && <DetailCard data={data} />
      )}
    </div>
  );
};

export default Detail;
