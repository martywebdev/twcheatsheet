import React from "react";

const Testimonial = () => {
  return (
    <div className="mx-3 p-3">
      <div className="mb-5 rounded-lg border p-3 shadow-lg bg-slate-600 text-white">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores reprehenderit placeat rerum beatae! Eum corrupti quos consequuntur commodi quod iste alias temporibus suscipit? Blanditiis ullam cum voluptas totam. Deleniti, reprehenderit?
        <button className="rounded border bg-orange-600 px-2 text-sm text-white hover:bg-orange-700">
          More
        </button>
        <div className="absolute">
          <svg
            className="size-8 fill-slate-600"
            viewBox="0 0 16 16"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <rect width="16" height="16" id="icon-bound" fill="none" />
            <polygon points="8,13 0,5 16,5" />
          </svg>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <img src="img/avatar/laura-jones.jpg" alt="" className="size-20 rounded-full "/>
        <div className="text-slate-800">
            <h5 className="font-bold">Toto Macunatan</h5>
            <p>CEO</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
