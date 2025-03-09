import { IoMdSearch } from "react-icons/io";

const SearchInput = ({ setSearch }) => {
  return (
    <section className="bg-white flex items-center gap-2 p-2 rounded-lg overflow-hidden">
      <IoMdSearch size={24} />
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        className="w-full outline-none text-slate-800"
      />
    </section>
  );
};

export default SearchInput;
