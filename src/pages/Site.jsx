import React from "react";
import Navbar from "../components/site/Navbar";
import Banner from "../components/site/Banner";
import Grid from "../components/site/Grid";

const Site = () => {
  return (
    <>
      <header>
        <Navbar />
        <Banner />
      </header>
      <main>
        <Grid />
      </main>
    </>
  );
};

export default Site;
