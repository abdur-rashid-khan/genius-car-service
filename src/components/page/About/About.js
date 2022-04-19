import React from "react";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="mt-5 pt-5">
      <Helmet>
        <title>about - car services</title>
      </Helmet>
      <h1>This is About section</h1>
    </div>
  );
};

export default About;
