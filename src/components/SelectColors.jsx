import clsx from "clsx";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setStyle } from "../store/colorSlice";

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

const ColorShadeSelector = ({ type = "text", show = false, label='text-', shade='shade' }) => {
 

  const dispatch = useDispatch();
  const selectedStyle = useSelector(
    (state) => state.color.selectedStyles[type]
  );
  console.log(selectedStyle)

  // Handle color and shade change
  const handleColorChange = (e) => {
    dispatch(
      setStyle({ type, color: e.target.value, shade: selectedStyle.shade })
    );
  };

  const handleShadeChange = (e) => {
    dispatch(
      setStyle({ type, color: selectedStyle.color, shade: e.target.value })
    );
  };

  // Dynamically generate the class
  const previewClass = clsx(
    selectedStyle.color === "white" || selectedStyle.color === "black"
      ? `bg-${selectedStyle.color}`
      : `bg-${selectedStyle.color}-${selectedStyle.shade}`,
    "w-10 h-10 rounded-lg border shadow"
  );

  return (
    <div className="flex space-x-4">
      {/* Color Selector */}
      <div>
        <label
          htmlFor="colorSelect"
          className="block text-gray-700 font-medium mb-2"
        >
          {label}
        </label>
        <select
          id="colorSelect"
          value={selectedStyle.color}
          onChange={handleColorChange}
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
          className="block text-gray-700 font-medium mb-2"
        >
          {shade}
        </label>
        <select
          id="shadeSelect"
          value={selectedStyle.shade}
          onChange={handleShadeChange}
          className=" w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={selectedStyle.color === 'white' || selectedStyle.color === 'black'}
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
