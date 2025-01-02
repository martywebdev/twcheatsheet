import React from "react";
import { Outlet, useMatches } from "react-router-dom";

const ComponentLayout = () => {
  const matches = useMatches();

  const currentRoute = matches.find((match) => match.handle?.title);

  const title = currentRoute?.handle?.title || "Default Title";
  
  return (
    <>
      <h2 className="font-bold text-3xl text-center mb-3 ">{title}</h2>
      <div className="center bg-gray-50 flex-col space-y-6">
        <Outlet />
      </div>
    </>
  );
};

export default ComponentLayout;
