import React from "react";
import { Helmet } from "react-helmet-async";

const JoinUs = () => {
  return (
    <>
      <Helmet>
        <title>Board | Easypaper</title>
      </Helmet>
      <div className="bg-gradient-to-br from-[#3675F0] to-[#2651A6] clipping">
        <div className="my-16 max-w-screen-lg mx-auto px-6 sm:py-24 py-14">
          <h1 className="text-6xl text-white">Join us</h1>
        </div>
      </div>
    </>
  );
};

export default JoinUs;
