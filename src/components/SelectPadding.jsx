import Select from "./Select";
import { twValues } from "../data/tailwindData";
import { useState } from "react";
import { useEffect } from "react";
const paddingVariants = [
  "",
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

  const [disabled, setDisabled] = useState(true)
  useEffect(() => {
    if (padding && value) {
        handleChange(`${padding}-${value}`);
    } else {
      handleChange('')
    }

   
  }, [padding, value, handleChange]);

  const onChange = padding => {
    setDisabled(!padding)
    if (padding) {
      setPadding(padding)
      setDisabled(false)
    } 
  }
  return (
    <>
      <div className="flex gap-4 items-end">
        <Select options={paddingVariants} handleChange={onChange} label={'padding'}/>
        <Select options={twValues} handleChange={(e) => setValue(e)} disabled={disabled} />
      </div>
    </>
  );
};

export default SelectPadding;
