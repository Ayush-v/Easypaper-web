import React from "react";
import { Helmet } from "react-helmet-async";
import DownloadAppSection from "../components/homeSection/DownloadAppSection";
import Herosection from "../components/homeSection/Herosection";
import Secondsection from "../components/homeSection/Secondsection";
import Worksection from "../components/homeSection/Worksection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Easypaper</title>
      </Helmet>
      <Herosection />
      <Secondsection />
      <Worksection />
      <DownloadAppSection />
    </div>
  );
};

export default Home;
