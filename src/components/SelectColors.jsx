/* eslint-disable */
import clsx from "clsx";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setStyle } from "../store/colorSlice";
import { useEffect } from "react";
import { useState } from "react";

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

const tailwindShades = [
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

const ColorShadeSelector = ({ type = "text", show = false, label='text-', shade='shade', hover=false}) => {
 

  const dispatch = useDispatch();

  const [color, setColor] = useState({})
  
  const handleColorChange = (params) => {


    let defaultShade = '';
    if(params.color && (params.color === 'white' || params.color === 'black')) {
      defaultShade = ''
    } else {
      defaultShade = '500'
    }
    
    setColor((prev) => ({
      ...prev, // Keep all previous keys and values
      shade: defaultShade,
      ...params, // Update or add the new key-value pairs
    }));
  };

  useEffect(() => {
    if(color.type) {
      dispatch(setStyle(color))
    }
  }, [color])

  const previewClass = clsx(
    color.color === "white" || color.color === "black"
      ? `bg-${hover ? color.color : color.color}`
      : `bg-${hover ?  `${color.color}-${color.shade}` : `${color.color}-${color.shade}`}`,
    "w-10 h-10 rounded-lg border shadow"
  );

  return (
    <div className="flex space-x-4">
      {/* Color Selector */}
      <div>
        <label
          htmlFor="colorSelect"
          className="block text-gray-700 text-sm mb-2 lowercase"
        >
          {label}
        </label>
        <select
          id="colorSelect"
          value={hover ? color.color : color.color || ''}
          onChange={e => handleColorChange({type, 'color': e.target.value})}
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="" disabled >
            Select a color
          </option>
          {colors.map((color) => (
            <option value={color} key={color}>
              {color}
            </option>
          ))}
        </select>
      </div>

      {/* Shade Selector */}
      <div>
        <label
          htmlFor="shadeSelect"
          className="block text-gray-700 text-sm mb-2 lowercase"
        >
          {shade}
        </label>
        <select
          id="shadeSelect"
          value={hover ? color.shade : color.shade || ""}
          onChange={e => handleColorChange({type, 'shade': e.target.value})}
          className=" w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"          
          disabled={color.color === 'white' || color.color === 'black'}
        >
          <option value="" disabled >
            Select shade
          </option>
          {tailwindShades.map((shade) => (
            <option value={shade} key={shade}>
              {shade}
            </option>
          ))}
        </select>
      </div>

      {/* Preview */}
      {show && (
        <div className="flex justify-center items-end">
          <div className={clsx(previewClass)}></div>
        </div>
      )}
    </div>
  );
};

export default ColorShadeSelector;
