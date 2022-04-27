import React from "react";
import { Helmet } from "react-helmet-async";
import Herosection from "../components/sections/Herosection";

import Logo from "../assets/Logo.svg";
import Secondsections from "../components/sections/Secondsections";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Easypaper</title>
        <link rel="icon" type="image/x-icon" href={Logo}></link>
      </Helmet>
      <Herosection />
      <Secondsections />
    </>
  );
};

export default Home;
