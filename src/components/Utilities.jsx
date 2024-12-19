/* eslint-disable */
import React from "react";
import Select from "./Select";
import { useState } from "react";
import { useEffect } from "react";
import { twValues } from "../data/tailwindData";

const Utilities = ({ handleChange, options, label }) => {
  const [utility, setUtility] = useState("");
  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(!utility);

    if (!utility) {
      setValue("");
    }

    if (utility && value) {
      handleChange(`${utility}-${value}`);
    } 

  }, [utility, value]);

  const onChange = (util) => {
    setUtility(util);
  };

  return (
    <div className="flex gap-4 items-end">
      <Select
        options={options}
        handleChange={onChange}
        label={label}
        selected={utility}
      />
      <Select
        options={twValues}
        handleChange={(e) => setValue(e)}
        disabled={disabled}
        selected={value}
      />
    </div>
  );
};

export default Utilities;
