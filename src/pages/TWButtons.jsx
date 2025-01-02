import React from "react";

const TWButtons = () => {
  


  return (
    <>
        {/* <div className="flex flex-col items-center gap-4">
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700">
            Basic Button
          </button>
          <pre>
            <code className="bg-black text-white p-3">
              {`<button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700">`}
            </code>
          </pre>
        </div> */}
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700">
            Basic Button
          </button>
        <button className="border border-blue-500 px-4 py-2 rounded-lg font-bold text-blue-500 hover:bg-blue-500 hover:text-blue-50 transition delay-150">
          Outline Button
        </button>
        <button className="font-bold py-2 px-4 rounded-lg bg-gradient-to-b from-gray-100 to-gray-500 text-gray-50 hover:opacity-80">
          Gradient 1
        </button>
        <button className="font-bold py-2 px-4 rounded-lg bg-gradient-to-b from-gray-50 via-gray-400 to-gray-50 border-2 hover:opacity-70">
          Gradient 2
        </button>
        <button className="px-5 py-2 font-bold rounded-lg border shadow-lg hover:shadow">
          Shadow
        </button>
    </>
  );
};

export default TWButtons;
