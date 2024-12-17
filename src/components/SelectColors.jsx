import React, { useState } from "react";
import clsx from "clsx";

export const colors = [
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

export const tailwindShades = [
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

const ColorShadeSelector = (handleSelectedColor, handleSelectedShade) => {

  const [selectedColor, setSelectedColor] = useState("slate");
  const [selectedShade, setSelectedShade] = useState("500");

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value)
    handleSelectedColor(e.target.value)
};
  const handleShadeChange = (e) => {
    setSelectedShade(e.target.value)
    handleSelectedShade(e.target.value)
};


  // Dynamically generate the class
  const previewClass = clsx(
    `bg-${selectedColor}-${selectedShade}`,
    "w-16 h-16 rounded-lg border shadow"
  );

  return (
    <div className="flex space-x-4">
      {/* Color Selector */}
      <div>
        <label
          htmlFor="colorSelect"
          className="block text-gray-700 font-medium mb-2"
        >
          Select Color
        </label>
        <select
          id="colorSelect"
          value={selectedColor}
          onChange={handleColorChange}
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
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
          className="block text-gray-700 font-medium mb-2"
        >
          Select Shade
        </label>
        <select
          id="shadeSelect"
          value={selectedShade}
          onChange={handleShadeChange}
          className=" w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {tailwindShades.map((shade) => (
            <option value={shade} key={shade}>
              {shade}
            </option>
          ))}
        </select>
      </div>

      {/* Preview */}
      <div className="flex justify-center items-center">
        <div className={clsx(previewClass)}></div>
      </div>
    </div>
  );
};

export default ColorShadeSelector;
