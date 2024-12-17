import { useEffect, useState } from "react";
import "./App.css";
import Select from "./components/Select";
import { fontFamilies, fontSizes } from "./data/tailwindData";
import ColorShadeSelector from "./components/SelectColors";
import { useSelector } from "react-redux";
import SelectPadding from "./components/SelectPadding";
// import SelectColors from './components/SelectColors'

function App() {
  const [classNames, setClassNames] = useState([]);
  const [twclass, setTwclass] = useState("");
  const selectedColor = useSelector(
    (state) => state.color.selectedStyles["text"]
  );
  const selectedBg = useSelector(
    (state) => state.color.selectedStyles["background"]
  );
  const handleChange = (key, value) => {
    setClassNames((prev) => {
      // Only update the key if it doesn't already exist in the object
      if (prev[key] !== value) {
        return { ...prev, [key]: value };
      }
      return prev; // Return the previous state if the key already has the same value
    });
  };

  useEffect(() => {
    let textColor = `text-${selectedColor.color}-${selectedColor.shade}`;
    let bgColor = selectedBg.color ? `bg-${selectedBg.color}-${selectedBg.shade}`: '';
    if (selectedColor.color === "white" || selectedColor.color === "black") {
      textColor = `text-${selectedColor.color}`;
    }

    if (selectedBg.color == "white" || selectedBg.color == "black") {
      bgColor = `bg-${selectedBg.color}`;
    }

    // Combine it with other class names, if any
    setTwclass([textColor, bgColor, ...Object.values(classNames)].join(" "));
    console.log(selectedBg.color);
  }, [classNames, selectedColor, selectedBg]);
  return (
    <>
      <div className="flex gap-4">
        <Select
          label={"Font Family"}
          options={fontFamilies}
          handleChange={(e) => handleChange("font", e)}
        />
        <Select
          label={"Font Size"}
          options={fontSizes}
          handleChange={(e) => handleChange("fontSize", e)}
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
      <div className="flex gap-4">
        <ColorShadeSelector />
        <ColorShadeSelector type="background" />
      </div>
      <div>
          <SelectPadding handleChange={e => handleChange('padding', e)}/>
      </div>

      <div className={`${twclass} `}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
        molestias sapiente cupiditate quidem! Recusandae illo dolores,
        repellendus molestias voluptatibus reiciendis dolorem aut magni aliquam
        consequuntur accusamus et nesciunt. Facilis, porro?
      </div>
    </>
  );
}

export default App;
