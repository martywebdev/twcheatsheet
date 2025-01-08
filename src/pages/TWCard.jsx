import React from "react";

const TWCard = () => {
  return (
    <div className="my-4">
      <div className="w-[450px] rounded-lg border shadow-lg">
        <img
          src="/img/backdrop.jpg"
          alt=""
          className="h-64 w-full rounded-t-lg"
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

        <div className="mx-2 mb-7 flex space-x-4">
          <button className="mx-3 w-full rounded bg-orange-500 px-5 py-2 font-bold text-white shadow-lg hover:bg-orange-700">
            Submit
          </button>
          <button className="mx-3 w-full rounded border border-orange-500 px-5 py-2 font-bold text-black shadow-lg hover:bg-gray-100">
            Cancel
          </button>
        </div>
      </div>

      <div className="mt-4 w-[450px] rounded-lg border bg-gray-100 p-3 shadow-lg">
        <section className="relative mb-2 rounded bg-purple-500 p-3 text-white">
          $45/hour
          <div className="absolute -top-1 right-0 size-7 rounded-l border-b-8 border-l-8 bg-purple-300"></div>
        </section>
        <section className="flex flex-col justify-center space-y-4 rounded-br-lg rounded-tl-lg bg-purple-500 px-5 py-4">
          <div className="relative size-60 self-center">
            <img
              src="/img/cyberpunk.jpg"
              alt=""
              className="absolute inset-0 z-10 h-full w-full rounded-full border-4"
            />

            <div className="absolute inset-0 z-20 overflow-clip rounded-full border-4 border-fuchsia-100 bg-transparent">
              <div className="absolute bottom-5 h-10 w-full bg-white bg-opacity-70 p-3 text-center font-bold">
                Kolokoy Sta Ines
              </div>
            </div>
          </div>
        </section>

        <section className="my-3 rounded bg-white p-5">
          <h3 className="text-xl font-bold tracking-wider">Senior Developer</h3>
          <p className="uppercase text-sm">Corporate Office</p>
          <div className="flex justify-between items-center px-4 mt-7">
            <div className="text-sm">
              <p>Experience - 3 years</p>
              <p>Joined January 8 2025</p>
            </div>
            <div>ICON HERE</div>
          </div>
        </section>
        
      </div>
    </div>
  );
};

export default TWCard;
