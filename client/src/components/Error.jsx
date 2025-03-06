const Error = ({ info, refetch }) => {
  return (
    <div className="flex flex-col">
      <div className="mt-36 bg-red-400 rounded-lg p-5 text-white text-lg text-center">
        <h1>Sorry, an error occured!</h1>
        <h1>{info}</h1>
      </div>
      <button
        className="btn mt-10 bg-blue-300 hover:bg-blue-400"
        onClick={refetch}
      >
        Try Again!
      </button>
    </div>
  );
};

export default Error;
