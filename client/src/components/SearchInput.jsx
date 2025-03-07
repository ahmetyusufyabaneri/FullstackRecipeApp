import { IoMdSearch } from "react-icons/io";

const SearchInput = () => {
  return (
    <section className="bg-white flex items-center gap-2 p-2 rounded-lg overflow-hidden">
      <IoMdSearch size={24} />
      <input type="text" className="w-full outline-none text-slate-800" />
    </section>
  );
};

export default SearchInput;
