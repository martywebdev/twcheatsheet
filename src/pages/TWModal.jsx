import React from "react";
import { useState } from "react";

const TWModal = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <div className="grid gap-2 md:grid-cols-2">
        <div className="rounded-lg bg-white p-3">
          <div className="text-xl font-bold">Heading 1</div>
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequatur, sed quisquam? Dolores voluptas, corporis eaque maiores
            voluptates delectus tempora ut voluptatem omnis illum aliquid
            inventore, dolor itaque veniam quibusdam! Iure?
          </p>
        </div>
        <div className="rounded-lg bg-white p-3">
          <div className="text-xl font-bold">Heading 1</div>
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequatur, sed quisquam? Dolores voluptas, corporis eaque maiores
            voluptates delectus tempora ut voluptatem omnis illum aliquid
            inventore, dolor itaque veniam quibusdam! Iure?
          </p>
        </div>
        <div className="rounded-lg bg-white p-3">
          <div className="text-xl font-bold">Heading 1</div>
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequatur, sed quisquam? Dolores voluptas, corporis eaque maiores
            voluptates delectus tempora ut voluptatem omnis illum aliquid
            inventore, dolor itaque veniam quibusdam! Iure?
          </p>
        </div>
        <div className="rounded-lg bg-white p-3">
          <div className="text-xl font-bold">Heading 1</div>
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequatur, sed quisquam? Dolores voluptas, corporis eaque maiores
            voluptates delectus tempora ut voluptatem omnis illum aliquid
            inventore, dolor itaque veniam quibusdam! Iure?
          </p>
        </div>
      </div>
      <button onClick={openModal} className="bg-blue-500 px-4 py-1 rounded-lg w-2/3 text-white hover:opacity-80">Open Modal</button>

      {isModalOpen && (
        <div className="absolute top-0 left-0 w-full h-full backdrop-blur-sm flex items-center justify-center bg-slate-700/30">
          <div className="w-3/5 md:w-2/5 bg-white p-5 rounded-xl shadow-xl border">
            <div className="text-xl font-bold">Modal Heading</div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut rerum
              vero alias consequatur debitis laudantium minima facere! Omnis
              repellendus vel magni. Vitae eaque incidunt nihil dolores totam
              aliquid delectus ducimus adipisci repellendus sint, laudantium
              facere eum repellat provident, minima optio.
            </p>
            <button
              onClick={closeModal}
              className="bg-orange-500 text-white font-semibold py-2 px-5 w-full rounded-lg m-2 hover:opacity-90"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TWModal;
