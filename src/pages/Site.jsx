import React from "react";
import Navbar from "../components/site/Navbar";
import Banner from "../components/site/Banner";
import Grid from "../components/site/Grid";
import Services from "../components/site/Services";
import Card from "../components/site/Card";
import TopGrid from "../components/site/TopGrid";
import Testimonials from "../components/site/Testimonials";

const Site = () => {
  return (
    <>
      <header>
        <Navbar />
        <Banner />
      </header>
      <main>
        <TopGrid />
        <Services />
        <Testimonials />
      </main>
    </>
  );
};

export default Site;
