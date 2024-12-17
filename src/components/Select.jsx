const Select = ({ options, handleChange, label }) => {
  const handleSelect = (e) => handleChange(e.target.value);

  return (
    <div className="mb-4">
      <label
        htmlFor="classSelect"
        className="block text-gray-700 font-medium mb-2"
      >
        {label}
      </label>
      <select
        onChange={handleSelect}
        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {options.map((option, index) => {
          // Check if the option is an object with a `class` property or a string
          const optionValue =
            typeof option === "object" ? option.class : option;
          return (
            <option value={optionValue} key={index}>
              {typeof option === "object" ? option.class : option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
