import { useQuery } from "@tanstack/react-query";
import { IoMdSearch } from "react-icons/io";
import { api } from "../api";
import Loader from "../components/Loader";

const Home = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["recipes"],
    queryFn: () => api.get("/api/v1/recipes").then((res) => res.data.recipes),
  });

  return (
    <main className="overflow-y-auto">
      <section className="bg-white flex items-center gap-2 p-2 rounded-lg overflow-hidden">
        <IoMdSearch size={24} />
        <input type="text" className="w-full outline-none text-slate-800" />
      </section>
      <section>
        {isLoading ? (
          <div className="h-screen flex items-center justify-center">
            <Loader />
          </div>
        ) : error ? (
          <Error info={error.message} refetch={refetch} />
        ) : (
          <div>
            {data.map((item, index) => (
              <div key={index}>Card</div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default Home;
