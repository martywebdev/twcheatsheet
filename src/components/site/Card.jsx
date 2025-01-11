import clsx from "clsx";
import React from "react";

const Card = ({ icon, img }) => {
  return (
    <div
      className={clsx(
        icon
          ? `rounded-t-2xl border-b p-4 pb-10 md:border-b-0 md:border-r md:border-slate-200`
          : "overflow-hidden rounded-lg border shadow-lg",
      )}
    >
      {icon && <div className="my-5 flex justify-center">{icon}</div>}
      {img && <img src={img} alt="" className="h-60 w-full bg-cover" />}
      <div className="p-3">
        <h3 className={clsx(icon ? `my-2 text-center text-xl font-semibold` : `text-2xl font-semibold` )}>Heading</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          possimus commodi suscipit placeat iusto odio, modi ea sapiente, nihil
          dolorem unde aspernatur atque nemo eligendi mollitia autem asperiores.
        </p>
       {img && <button className="border border-orange-600 hover:bg-orange-50 bg-white px-4 py-1 rounded-lg mx-5 my-7">See more</button>}
      </div>
    </div>
  );
};

export default Card;
