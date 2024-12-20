import { useEffect } from "react";
import { useState } from "react";

/* eslint-disable */
const Select = ({ options, handleChange, label, disabled = false, selected: defaultVal}) => {
  
  const [selected, setSelected] = useState({});

  const handleSelect = (event) => {
    const { selectedIndex, value } = event.target;
    const selectedValue = options[selectedIndex];

    handleChange(value);
    setSelected(selectedValue);
  };

  
  return (
    <div className="mb-4">
      <label
        className="block text-white text-sm mb-2 capitalize"
      >
        {label}
      </label>

      <select
        onChange={handleSelect}
        className="w-full px-2 py-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        disabled={disabled}
        title={selected.css && `${selected.css} / ${selected.description}`}
        value={selected.class || defaultVal}
      >
        {options.map((option, index) => {
          // Check if the option is an object with a `class` property or a string
          const optionValue =
            typeof option === "object" ? option.class : option;
          return (
            <option
              value={optionValue}
              key={index}
              title={option.css && `${option.css} / ${option.description}`}
            >
              {typeof option === "object" ? option.class : option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
