import React from "react";

const Card = ({ icon }) => {
  return (
    <div className="rounded-t-2xl border-b p-4 pb-10 md:border-b-0 md:border-r md:border-slate-200">
      <div className="my-5 flex justify-center">{icon}</div>
      <h3 className="my-2 text-center text-xl font-semibold">Heading</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        possimus commodi suscipit placeat iusto odio, modi ea sapiente, nihil
        dolorem unde aspernatur atque nemo eligendi mollitia autem asperiores,
        provident quisquam eum reiciendis doloribus magnam sed ipsa quae.
        Excepturi molestias iste culpa nulla corrupti doloribus impedit ratione
        libero aliquid ut! Recusandae.
      </p>
    </div>
  );
};

export default Card;
