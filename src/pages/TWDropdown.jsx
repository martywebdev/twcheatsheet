import React from "react";
import { useState } from "react";

const TWDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="relative w-[200px] rounded-xl border">
        <a
          href="#"
          className="group flex items-center justify-between rounded-xl bg-white px-5 py-3 font-semibold dark:bg-gray-700"
          onClick={(e) => {
            e.preventDefault(); // Prevent navigation
            handleDropdown();
          }}
        >
          <span className="text-gray-500 group-hover:text-black dark:text-white">
            Products
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-gray-500 group-hover:text-black dark:text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
            />
          </svg>
        </a>

        <ul
          className={`absolute top-[50px] z-20 w-full rounded-b-xl bg-white text-gray-500 shadow-lg transition-opacity duration-300 dark:bg-gray-700 ${
            isOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <li>
            <a
              href="#"
              className="block border-b p-3 duration-700 hover:mx-2 hover:rounded-2xl hover:bg-gray-200 dark:text-white"
            >
              Machine
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block border-b p-3 duration-700 hover:mx-2 hover:rounded-2xl hover:bg-gray-200 dark:text-white"
            >
              Engines
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block border-b p-3 duration-700 hover:mx-2 hover:rounded-2xl hover:bg-gray-200 dark:text-white"
            >
              Turbo
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TWDropdown;
