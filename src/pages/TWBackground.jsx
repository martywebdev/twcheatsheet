import { useState } from "react";
import { useSelector } from "react-redux";
import Select from "../components/Select";

const TWBackground = () => {
  const utilities = useSelector(state => state.utility.utilities)
  const [bg, setBg] = useState({

  })
  const html = [
    "h-16 bg-gradient-to-t to-cyan-100 from-cyan-600",
    "h-16 bg-gradient-to-b to-cyan-100 from-cyan-600",
    "h-16 bg-gradient-to-bl to-cyan-100 from-cyan-600",
    "h-16 bg-gradient-to-l to-cyan-100 from-cyan-600",
    "h-16 bg-gradient-to-l to-cyan-100 via-green-500 from-cyan-600",
    "h-16 bg-gradient-to-r to-cyan-100 via-green-500 from-cyan-600 from-10% via-30%",
  ];

  const handleChange = (action) => {
    const { tag, value } = action
    setBg((prevState) => {
      const updatedState = { ...prevState, [tag]: value };
      updatedState.utilities = Object.keys(updatedState)
        .filter((key) => key !== 'utilities' && updatedState[key]) // Exclude 'utilities' and ensure the value is truthy
        .map((key) => updatedState[key]) // Get the values
        .join(' '); // Join the values into a single string

      return updatedState;
    });
  }

  return (
    <div>
      <div className="size-20 bg-cyan-500 m-2"></div>
      <div className="size-20 bg-cyan-300 m-2"></div>
      <div className="size-20 bg-yellow-500 m-2"></div>
      <div className="size-20 bg-yellow-500/25 m-2"></div>

      <div className="mt-10 space-y-4 min-w-screen">
        <h3 className="text-lg">Gradient</h3>
        {html.map((item, idx) => (
          <div className="flex  items-center gap-2" key={idx}>
            <div className={`w-72 ${item}`}></div>
            <pre className="w-16">
              <code className="bg-black text-white p-4 ">
                {`<div className="${item}"></div`}
              </code>
            </pre>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="text-lg">Background</h3>

        <div className="flex gap-2">
          <Select options={['bg-repeat', 'bg-no-repeat' ] } handleChange={(e) => handleChange({tag: 'repeat', value: e})}/>
          <Select options={['bg-left', 'bg-center', 'bg-right', 'bg-left-bottom', 'bg-left-top', 'bg-right-bottom', 'bg-right-top', 'bg-top', 'bg-[50%_50%]']} handleChange={(e) => handleChange({tag: 'position', value: e})} />
          <Select options={['bg-auto', 'bg-cover', 'bg-contain']} handleChange={(e) => handleChange({tag: 'scale', value: e})}/>
        </div>
        <div className={`bg-[url('/img/cyberpunk-small.jpg')] ${utilities} ${bg.utilities}`}>

        </div>
      </div>
    </div>
  );
};

export default TWBackground;
