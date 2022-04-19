import React from "react";
import { Helmet } from "react-helmet-async";
import RequireAuth from "../page/Form/Login/RequireAuth";
import Services from "../page/Services/Services";
import Slide from "./Slide/Slide";

const Home = () => {
  return (
    <div id="home">
      <RequireAuth>
        <Helmet>
          <title>home - car services</title>
        </Helmet>
        <Slide></Slide>
        <Services></Services>
      </RequireAuth>
    </div>
  );
};

export default Home;
