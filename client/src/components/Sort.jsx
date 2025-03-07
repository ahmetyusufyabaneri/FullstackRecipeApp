const Sort = () => {
  return (
    <select className="bg-white p-2 rounded-lg outline-none">
      <option selected disabled>
        Duration
      </option>
      <option value="dec">Decrease</option>
      <option value="inc">Increase</option>
    </select>
  );
};

export default Sort;
