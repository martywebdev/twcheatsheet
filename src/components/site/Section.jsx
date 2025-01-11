import React from "react";

const Section = ({ children, title }) => {
  return (
    <section className="flex flex-col items-center space-y-20">
      <h2 className="mt-10 text-3xl font-bold text-orange-800 md:text-5xl">
        {title}
      </h2>

      {children}
    </section>
  );
};

export default Section;
