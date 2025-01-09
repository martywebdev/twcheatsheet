import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const TWButtons = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage for saved preference
    const savedMode = localStorage.getItem("theme");
    return (
      savedMode === "dark" ||
      (!savedMode && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    // Add or remove the 'dark' class on the HTML element
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <>
      <div className="w-1/2 rounded-lg bg-gray-200 p-5 shadow dark:bg-gray-800 dark:text-white">
        <div className="flex items-center justify-between">
          <h2 className="my-2 text-xl font-bold">Heading 1</h2>
          <div onClick={toggleDarkMode} className="cursor-pointer">
            {!isDarkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
              </svg>
            )}
          </div>
        </div>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
          voluptatibus ipsum, molestias explicabo error eligendi ut nisi
          architecto! Natus, asperiores praesentium expedita aspernatur dicta
          veniam blanditiis tenetur. Autem maxime similique suscipit veritatis
          inventore quaerat nulla. Consequuntur possimus sint iusto voluptatibus
          veritatis libero iure, obcaecati reiciendis provident, magni accusamus
          deleniti perspiciatis aut nam reprehenderit tempore blanditiis
          distinctio laboriosam esse quo! Sed provident numquam autem neque,
          minima maiores fugiat saepe ipsum perspiciatis, deleniti nam magnam
          totam ullam, labore praesentium dolore debitis a obcaecati possimus
          quibusdam suscipit veritatis ex dicta! Nobis earum, mollitia tenetur
          atque asperiores quae. Libero expedita odio adipisci quae beatae.
        </p>
      </div>
    </>
  );
};

export default TWButtons;
