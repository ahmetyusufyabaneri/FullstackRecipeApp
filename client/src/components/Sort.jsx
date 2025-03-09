const Sort = ({ setSort }) => {
  return (
    <select
      onChange={(e) => setSort(e.target.value)}
      className="bg-white p-2 rounded-lg outline-none cursor-pointer"
    >
      <option selected disabled>
        Duration
      </option>
      <option value="dec">Decrease</option>
      <option value="inc">Increase</option>
    </select>
  );
};

export default Sort;
