/* eslint-disable */
import React from "react";
import Select from "./Select";
import { useState } from "react";
import { useEffect } from "react";

const Utilities = ({ handleChange, options, secondaryOptions, label }) => {
  const [utility, setUtility] = useState("");
  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(!utility);

    if (!utility) {
      setValue("0");
      handleChange("");
    }

    if (utility && value) {
      handleChange(`${utility}-${value}`);
    }
  }, [utility, value]);

  const onChange = (util) => {
    setUtility(util);
  };

  // const addUtility = () => {
    
  // }

  return (
    <div className="flex gap-4 items-end">
      <Select
        options={options}
        handleChange={onChange}
        label={label}
        selected={utility}
      />
      <Select
        options={secondaryOptions}
        handleChange={(e) => setValue(e)}
        disabled={disabled}
        selected={value}
      />

      {/* <div className="flex items-center min-h-[70px]">
        <button
          className="bg-gray-400 px-4 py-0.5 mt-1 rounded-md text-lg text-white 
            hover:bg-gray-500 
            focus:outline-none focus:ring-2 focus:ring-blue-500 
            active:bg-gray-600 
            transition-colors"
            onClick={addUtility}
        >
          +
        </button>
      </div> */}
    </div>
  );
};

export default Utilities;
