import React from "react";

const Grid = ({ children }) => {
  return (
    <section className="m-5 grid grid-cols-1 gap-y-5 justify-items-center md:grid-cols-2 md:gap-y-5 md:gap-x-5 lg:grid-cols-3">
      {children}
    </section>
  );
};

export default Grid;
