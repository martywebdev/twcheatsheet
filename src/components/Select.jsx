import { useEffect } from "react";
import { useState } from "react";

/* eslint-disable */
const Select = ({ options, handleChange, label, disabled=false, selected : componentSelect}) => {

  const [selected, setSelected] = useState(componentSelect)
  
  useEffect(() => setSelected(componentSelect), [componentSelect])

  const handleSelect = (e) => {
    handleChange(e.target.value);
    setSelected(e.target.value)
  } 

  return (
    <div className="mb-4">
      <label
        htmlFor="classSelect"
        className="block text-white text-sm mb-2 capitalize"
      >
        {label}
      </label>
      <select
        onChange={handleSelect}
        className="w-full px-2 py-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        disabled={disabled}
        value={selected || ''}
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
