import React, { Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Herosection from "../components/homeSection/Herosection";
import Secondsection from "../components/homeSection/Secondsection";
import Worksection from "../components/homeSection/Worksection";

const DownloadAppSection = React.lazy(() =>
  import("../components/homeSection/DownloadAppSection")
);

const Home = () => {
  return (
    <div>
      <Helmet>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1531124529061721"
          crossorigin="anonymous"
        ></script>
        <title>Home | Easypaper</title>
      </Helmet>
      <Herosection />
      <Secondsection />
      <Worksection />
      <Suspense>
        <DownloadAppSection />
      </Suspense>
    </div>
  );
};

export default Home;
