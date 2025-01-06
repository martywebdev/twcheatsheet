import React from "react";

const TWCard = () => {
  return (
    <div className="my-4">
  
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

      <div className="rounded-lg border shadow-lg p-3 mt-4 w-[450px] bg-gray-100">
        <section className="p-3 bg-purple-500 rounded mb-2 text-white relative">$45/hour
          <div className="absolute right-0 -top-1 border-l-8 border-b-8 size-7 rounded-l bg-purple-300"></div>
        </section>
        <section className="bg-purple-500 py-4 px-5 rounded-tl-lg rounded-br-lg flex justify-center space-y-4">
          <img src="/img/cyberpunk.jpg" alt="" className="rounded-full size-60" />
        </section>
      </div>
    </div>
  );
};

export default TWCard;
