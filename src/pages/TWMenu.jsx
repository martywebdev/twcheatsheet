import { useEffect } from "react";
import { useState } from "react";

const TWMenu = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => setToggle((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setToggle(true); // Always show the menu for medium screens and larger
      } else {
        setToggle(false); // Hide the menu for small screens
      }
    };

    // Initialize on mount
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen bg-orange-50">
      <nav className="relative flex items-center justify-between bg-white p-5 shadow">
        <div>
          <span className="flex items-center text-xl text-orange-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
            Horizontal
          </span>
        </div>
        <ul
          className={`absolute left-0 top-[70px] flex w-full flex-col space-y-5 rounded-b-xl bg-white p-4 text-black shadow md:static md:w-auto md:flex-row md:space-x-4 md:space-y-0 md:shadow-none ${
            toggle ? "opacity-100 duration-700" : "opacity-0"
          }`}
        >
          <li className="group">
            <a href="#" className="group-hover:text-orange-500">
              Home
            </a>
          </li>
          <li className="group">
            <a href="#" className="group-hover:text-orange-500">
              Service
            </a>
          </li>
          <li className="group">
            <a href="#" className="group-hover:text-orange-500">
              Products
            </a>
          </li>
          <li className="group">
            <a href="#" className="group-hover:text-orange-500">
              Contacts
            </a>
          </li>
          <li>
            <button className="w-full rounded border border-orange-700 px-1 py-2 text-sm hover:bg-red-50 hover:text-orange-700 md:py-0">
              Explorer
            </button>
          </li>
        </ul>
        <div className="cursor-pointer md:hidden" onClick={handleToggle}>
          {toggle ? (
            // Close Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
      </nav>
    </div>
  );
};

export default TWMenu;
