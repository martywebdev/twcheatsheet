import React from "react";
import Card from "./Card";
import Grid from "./Grid";
import Section from "./Section";

const Services = () => {
  return (
    <Section title={'Services'}>
      <Grid>
        <Card img={"img/cyberpunk.jpg"} />
        <Card img={"img/backdrop.jpg"} />
        <Card img={"img/backdrop2.jpg"} />
      </Grid>
    </Section>
  );
};

export default Services;
