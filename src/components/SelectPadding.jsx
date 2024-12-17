import Select from "./Select";
import { twValues } from "../data/tailwindData";
import { useState } from "react";
import { useEffect } from "react";
const paddingVariants = [
  "p", // Padding all sides
  "px", // Padding left and right
  "py", // Padding top and bottom
  "pt", // Padding top
  "pr", // Padding right
  "pb", // Padding bottom
  "pl", // Padding left
];
const SelectPadding = ({handleChange}) => {
  const [padding, setPadding] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    if (padding && value) {
        handleChange(`${padding}-${value}`);
    }
   
  }, [padding, value, handleChange]);

  return (
    <>
      <h3>Utilities</h3>
      <div className="flex gap-4">
        <Select options={paddingVariants} handleChange={(e) => setPadding(e)} />
        <Select options={twValues} handleChange={(e) => setValue(e)} />
      </div>
    </>
  );
};

export default SelectPadding;
