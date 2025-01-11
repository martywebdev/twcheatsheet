import React from "react";

const bg =
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7529fe10-37db-4bc5-8d36-afeeaf4078d3/ddat0p9-1bd72a1a-939b-4ff2-adbc-2d6a5daf9c64.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc1MjlmZTEwLTM3ZGItNGJjNS04ZDM2LWFmZWVhZjQwNzhkM1wvZGRhdDBwOS0xYmQ3MmExYS05MzliLTRmZjItYWRiYy0yZDZhNWRhZjljNjQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ATrGpxooF2mAaVL03G6hB9LbgT1l1bDSyVaRY_Ma0sU";
const Banner = () => {
  return (
    <section className="flex flex-col md:flex-row w-full justify-center bg-gray-200 items-center md:items-end">
      {/* Background Image */}
      <div
        className={`w-full h-60 md:h-80 md:w-1/6 bg-[url('${bg}')] md:bg-cover bg-center bg-contain bg-no-repeat flex-shrink-0`}
      ></div>
      {/* Content Section */}
      <div className="my-5 p-5 md:p-10 max-w-xl text-center md:text-left">
        <h1 className="font-bold text-3xl md:text-5xl">
          Lorem ipsum dolor sit amet.
        </h1>
        <p className="mt-3 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis libero
          quae harum excepturi est aspernatur repellendus, hic quam consequuntur
          nisi.
        </p>
        <button className="px-4 py-2 border border-orange-800 rounded-lg w-full md:w-auto hover:bg-orange-50/30 mt-7 md:mt-10">
          Explore
        </button>
      </div>
    </section>
  );
};

export default Banner;
