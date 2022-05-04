import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Lottie from "lottie-web";
import rocket from "../assets/rocket.json";

const GovtJobs = () => {
  const container = useRef(null);

  useEffect(() => {
    const instance = Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: rocket,
    });

    return () => instance.destroy();
  }, []);

  return (
    <>
      <Helmet>
        <title>Govt.Jobs | Easypaper</title>
      </Helmet>

      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:9xl text-anima">
          Coming Soon
        </h1>
        <div ref={container} className="max-w-[350px] max-h-[350px]"></div>
      </div>
    </>
  );
};

export default GovtJobs;
