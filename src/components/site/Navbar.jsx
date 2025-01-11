import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-center bg-gradient-to-b from-slate-300 via-slate-100 via-70% to-slate-300 font-semibold text-orange-900">
      <div className="flex w-[900px] justify-between space-x-7 px-5 py-3">
        <div className="flex">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-orange-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
              />
            </svg>
          </div>
          <span>Toto</span>
        </div>
        <div className="flex space-x-7">
          <a href="#">Home</a>
          <a href="#">Produce</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
        <div>login</div>
      </div>
    </nav>
  );
};

export default Navbar;
