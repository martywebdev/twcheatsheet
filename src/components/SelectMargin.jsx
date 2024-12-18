import Select from "./Select";
import { twValues } from "../data/tailwindData";
import { useState } from "react";
import { useEffect } from "react";
const marginVariants = [
  "",
  "m", // Padding all sides
  "mx", // Padding left and right
  "my", // Padding top and bottom
  "mt", // Padding top
  "mr", // Padding right
  "mb", // Padding bottom
  "ml", // Padding left
];
const SelectMargin = ({handleChange}) => {
  const [margin, setMargin] = useState("");
  const [value, setValue] = useState("");

  const [disabled, setDisabled] = useState(true)
  useEffect(() => {
    if (margin && value) {
        handleChange(`${margin}-${value}`);
    } else {
      handleChange('')
    }

   
  }, [margin, value, handleChange]);

  const onChange = margin => {
    setDisabled(!margin)
    if (margin) {
      setMargin(margin)
      setDisabled(false)
    } 
  }
  return (
    <>
      <div className="flex gap-4 items-end">
        <Select options={marginVariants} handleChange={onChange} label={'margin'}/>
        <Select options={twValues} handleChange={(e) => setValue(e)} disabled={disabled} />
      </div>
    </>
  );
};

export default SelectMargin;
