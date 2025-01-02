import React from "react";

const TWBadges = () => {
  return (
    <>
      <div className="flex space-x-3 items-center mb-7">
        <div className="border border-red-300 px-3 bg-red-100 rounded">
          Badge
        </div>
        <div className="border border-green-300 px-3 bg-green-100 rounded">
          Badge
        </div>
        <div className="border border-orange-300 px-3 bg-orange-100 rounded">
          Badge
        </div>
      </div>
      <div className="flex space-x-3 items-center mb-7">
        <div className="border border-red-300 px-3 bg-red-100 rounded-full">
          Badge
        </div>
        <div className="border border-green-300 px-3 bg-green-100 rounded-full">
          Badge
        </div>
        <div className="border border-orange-300 px-3 bg-orange-100 rounded-full">
          Badge
        </div>
      </div>
      <div className="w-2/3 mb-7 relative">
        <div className="rounded-xl shadow border p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nesciunt illo consequatur laborum. Voluptatibus tempora, velit dolorem in blanditiis necessitatibus quod corporis unde, quis ipsam porro nihil laboriosam iure! Accusamus vel inventore molestias illo excepturi et numquam perspiciatis explicabo amet, doloremque harum officiis aut voluptates nobis? Libero pariatur tenetur eligendi!</div>
        <div className="border border-indigo-300 px-3 bg-indigo-100 rounded-full absolute -right-3 -top-3">
          1
        </div>
      </div>
      <button className="mb-7 relative bg-blue-500 text-white font-bold px-5 py-2 rounded-lg hover:bg-blue-700">Open

        <div className="absolute px-3 bg-gray-800 rounded-full size-5 -right-2 -top-2 text-white text-sm flex justify-center items-center">20</div>
      </button>
      <button className="relative bg-blue-500 text-white font-bold px-5 py-2 rounded-lg hover:bg-blue-700">Saver

        <div className="absolute flex items-center justify-center px-3 rounded-full size-5 right-0 top-0 text-green-50 text-[12px]">13</div>
      </button>
    </>
  );
};

export default TWBadges;
