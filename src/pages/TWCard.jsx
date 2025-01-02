import React from "react";

const TWCard = () => {
  return (
    <>
      <div className="rounded-lg shadow-lg border w-[450px]">
        <img
          src="/img/backdrop.jpg"
          alt=""
          className="w-full h-64 rounded-t-lg"
        />
        <div className="p-7">
          <h2 className="text-3xl font-semibold">Heading</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            dolore consectetur. Repellendus, quibusdam officiis. Illum, vitae
            autem pariatur, possimus ipsam praesentium ipsum alias enim, numquam
            necessitatibus tempora ut provident veniam. Minima in neque,
            dignissimos nulla nisi culpa corporis fugit amet eum at ducimus,
            placeat iste possimus laudantium quae repudiandae! Quae illo
            temporibus ducimus dolores illum quaerat voluptatibus hic a alias.
          </p>
        </div>

        <div className="flex space-x-4 mx-2 mb-7">
          <button className="bg-orange-500 text-white mx-3 font-bold px-5 py-2 rounded shadow-lg w-full hover:bg-orange-700           ">
            Submit
          </button>
          <button className="border border-orange-500 text-black mx-3 font-bold px-5 py-2 rounded shadow-lg w-full hover:bg-gray-100">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default TWCard;
