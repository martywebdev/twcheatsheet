import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-b from-slate-300 via-slate-100 via-70% to-slate-300 font-semibold text-orange-900 shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-5 py-3">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-orange-900"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
            />
          </svg>
          <span>UMLAS</span>
        </div>

        {/* Links Section */}
        <div className="hidden md:flex space-x-7">
          <a href="#" className="hover:text-orange-700">
            Home
          </a>
          <a href="#" className="hover:text-orange-700">
            Produce
          </a>
          <a href="#" className="hover:text-orange-700">
            Services
          </a>
          <a href="#" className="hover:text-orange-700">
            Contact
          </a>
        </div>

        {/* Login Section */}
        <div className="hidden md:block">Login</div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-orange-900 focus:outline-none"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
