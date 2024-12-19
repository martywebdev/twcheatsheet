/* eslint-disable */
import ColorShadeSelector from "./SelectColors";
import Select from "./Select";
import { useState } from "react";
import { fontFamilies, fontSizes } from "../data/tailwindData";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Utilities from "./Utilities";
import { marginVariants, paddingVariants } from "../data/utilities";

const Input = ({ handleTwClasses, hover = false }) => {
  const [classNames, setClassNames] = useState([]);

  const colorStyles = useSelector((state) => state.color.selectedStyles);

  useEffect(() => {
    const selectClasses = Object.values(classNames).filter(Boolean);
    const classes = selectClasses.join(" ");

    const colors = colorStyles
      .map((color) => {
        if (color.color === "white" || color.color === "black") {
          return `${color.type}-${color.color}`;
        }
        return `${color.type}-${color.color}-${color.shade}`;
      })
      .join(" ");

    const combinedClasses = `${colors} ${classes}`;
    handleTwClasses(combinedClasses);
  }, [classNames, colorStyles]);

  const handleChange = (key, value) => {
    const upKey = hover ? `hover${key}` : key;
    const upValue = hover ? `hover:${value}` : value;

    setClassNames((prev) => {
      // Only update the key if it doesn't already exist in the object
      if (prev[upKey] !== upValue) {
        return { ...prev, [upKey]: upValue };
      }
      return prev; // Return the previous state if the key already has the same value
    });
  };

  return (
    <>
      <div className="flex space-x-4">
        <Select
          label={"Font Family"}
          options={fontFamilies}
          handleChange={(e) => handleChange("font", e)}
        />
        <Select
          label={"Font Size"}
          options={fontSizes}
          handleChange={(e) => handleChange("fontSize", e)}
          selected={"text-base"}
        />
        <Select
          label={"Align"}
          options={[
            "text-left",
            "text-center",
            "text-right",
            "text-justify",
            "text-start",
            "text-end",
          ]}
          handleChange={(e) => handleChange("textAlign", e)}
          selected={"text-left"}
        />
        <Select
          label={"Font Weight"}
          options={[
            "font-thin",
            "font-extralight",
            "font-light",
            "font-normal",
            "font-medium",
            "font-semibold",
            "font-bold",
            "font-extrabold",
            "font-black",
          ]}
          handleChange={(e) => handleChange("fontWeight", e)}
        />
      </div>
      <div className="flex space-x-4">
        <ColorShadeSelector show />
        <ColorShadeSelector type="bg" label="bg-" hover={hover} show />
      </div>
      <div className="flex space-x-4 mt-3">
        <Utilities
          options={paddingVariants}
          label={"padding"}
          handleChange={(e) => handleChange("padding", e)}
        />
        <Utilities
          options={marginVariants}
          label={"margin"}
          handleChange={(e) => handleChange("margin", e)}
        />
        <Select
          label={"Radius"}
          options={["rounded", "rounded-md", "rounded-lg", "rounded-full"]}
          handleChange={(e) => handleChange("rounded", e)}
        />
        <Select
          label={"Border"}
          options={["border-0", "border-2", "border-4", "border-8"]}
          handleChange={(e) => handleChange("border", e)}
        />
        <ColorShadeSelector type="border" label="border-" />
      </div>
    </>
  );
};

export default Input;
