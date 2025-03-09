const Field = ({ children, label }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-lg font-medium">{label}</label>
      {children}
    </div>
  );
};

export default Field;
