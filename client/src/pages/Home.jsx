import { useQuery } from "@tanstack/react-query";
import { api } from "../api";
import Loader from "../components/Loader";
import Card from "../components/Card";
import SearchInput from "../components/SearchInput";
import Sort from "../components/Sort";

const Home = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["recipes"],
    queryFn: () => api.get("/api/v1/recipes").then((res) => res.data.recipes),
  });

  return (
    <main className="overflow-y-auto">
      <SearchInput />
      <section>
        {isLoading ? (
          <div className="h-screen flex items-center justify-center">
            <Loader />
          </div>
        ) : error ? (
          <Error info={error.message} refetch={refetch} />
        ) : (
          <>
            <div className="flex items-center justify-between">
              <h1 className="text-3xl my-4">{data?.length} Recipe Found</h1>
              <Sort />
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {data.map((item, index) => (
                <Card key={index} recipe={item} />
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default Home;
