
import clsx from "clsx";
import { useEffect } from "react";
import { useState } from "react";
import Select from "./Select";

const colors = [
  "white",
  "black",
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
];

const shades = [  
  "",
  "50",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
];

const SelectColors = ({type, handleChange, label
}) => {
  const [color, setColor] = useState('white')
  const [shade, setShade] = useState('')

  useEffect(() => {
    if (!color) {
      setShade('')
      handleChange('')
    }else if (color === 'white' && color === 'black') {
      setShade('')
      handleChange(`${type}-${color}`)
      console.log('test')
    }
    if (color && shade) {
      handleChange(`${type}-${color}-${shade}`)
    }

  }, [color, shade])

  const onChange = (selectedColor) => {
    setColor(selectedColor)
  };

  // const previewClass = clsx(
  //   color.color === "white" || color.color === "black"
  //     ? `bg-${hover ? color.hoverColor : color.color}`
  //     : `bg-${
  //         hover
  //           ? `${color.hoverColor}-${color.hoverShade}`
  //           : `${color.color}-${color.shade}`
  //       }`,
  //   "w-10 h-10 rounded-lg border shadow"
  // );

  return (
    <div className="flex space-x-4 items-end">
      <Select
        options={colors}
        handleChange={onChange}
        label={label}
        // selected={utility}
      />
      <Select
        options={shades}
        handleChange={(e) => setShade(e)}
        // disabled={disabled}
        selected={shade}
      />
      {/* Preview */}
      {/* {show && (
        <div className="flex justify-center items-end">
          <div className={clsx(previewClass)}></div>
        </div>
      )} */}
    </div>
  );
};

export default SelectColors;
