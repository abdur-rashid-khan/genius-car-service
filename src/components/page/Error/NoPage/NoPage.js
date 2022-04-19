import React from "react";
import { Helmet } from "react-helmet-async";
import "./NoPage.css";

const NoPage = () => {
  return (
    <div id="error">
      <Helmet>
        <title>No Page Found - car services</title>
      </Helmet>
      <h1>404</h1>
      <h3>No Page Found</h3>
    </div>
  );
};

export default NoPage;
